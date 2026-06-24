/* On-page contact + brief flow (NOT a modal). Full-gradient closing section,
   with the multi-step brief living inline in a card on the page. */
(function () {
  const { Btn, INK, hardShadow } = window.BUBrutal;
  const { ArrowRight, Check, Mail, Phone, Instagram } = window.BUIcons;

  // ↓↓↓ Paste your Formspree form ID here (from your Formspree dashboard) ↓↓↓
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvdveon';

  function Field({ label, ...rest }) {
    return (
      <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: INK }}>{label}</span>
        <input {...rest} style={{ fontFamily: 'var(--font-body)', fontSize: 16, padding: '12px 14px', border: `2px solid ${INK}`, borderRadius: 4, background: 'var(--bu-white)', color: INK, outline: 'none' }}
          onFocus={(e) => { e.target.style.boxShadow = hardShadow(3, 3, 'var(--bu-orange-red)'); }}
          onBlur={(e) => { e.target.style.boxShadow = 'none'; }} />
      </label>
    );
  }

  const LINKS = [
    ['hello@brandunpack.com', Mail, 'mailto:hello@brandunpack.com'],
    ['(813) 321-0833', Phone, 'tel:+18133210833'],
    ['Instagram', Instagram, '#'],
  ];

  function Contact() {
    const [step, setStep] = React.useState(0);
    const [needs, setNeeds] = React.useState({});
    const [budget, setBudget] = React.useState('$1k–5k');
    const [fields, setFields] = React.useState({ name: '', email: '', brand: '', message: '' });
    const services = ['Packaging', 'Full branding', 'Logo & identity', 'Amazon Design Stuff', 'Other'];
    const budgets = ['< $1k', '$1k–5k', '$5k–10k', '$10k+'];
    const toggle = (k) => setNeeds((n) => ({ ...n, [k]: !n[k] }));
    const [sending, setSending] = React.useState(false);
    const [error, setError] = React.useState('');
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const submit = async () => {
      setError('');
      if (!fields.name.trim()) { setError('Please enter your name.'); return; }
      if (!emailOk(fields.email.trim())) { setError('Please enter a valid email address.'); return; }
      const selected = Object.keys(needs).filter((k) => needs[k]);
      setSending(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: fields.name, email: fields.email, services: selected.join(', ') || 'Not specified', budget, message: fields.message, _subject: `New brief from ${fields.name || 'website'}` }) });
        if (!res.ok) {
          let msg = 'Something went wrong sending your brief. Please try again, or email hello@brandunpack.com.';
          try { const d = await res.json(); if (d && d.errors && d.errors.length) msg = d.errors.map((e) => e.message).join(' '); } catch (_) {}
          setSending(false); setError(msg); return;
        }
      } catch (e) {
        setSending(false);
        setError('Couldn’t reach the server. Check your connection and try again, or email hello@brandunpack.com.');
        return;
      }
      setSending(false);
      setStep(2);
    };

    return (
      <section id="contact" style={{ background: 'var(--bu-gradient)', borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('assets/brand-gradient.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, pointerEvents: 'none' }} />
        <div className="bu-contact-grid" style={{ position: 'relative', maxWidth: 1320, margin: '0 auto', padding: '76px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
          {/* left — headline + contact */}
          <div style={{ color: 'var(--bu-cream)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.2vw,76px)', letterSpacing: '-0.04em', lineHeight: 0.93, textTransform: 'uppercase', margin: '0 0 20px', textShadow: '0 3px 0 rgba(22,22,22,0.22)' }}>Ready to<br />unpack your<br />brand?</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'color-mix(in srgb, var(--bu-cream) 92%, transparent)', maxWidth: 420, margin: '0 0 30px' }}>
              Tell us what you’re building. We’ll send a tailored plan within 24 hours — no obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11 }}>
              {LINKS.map(([label, Ic, href]) => (
                <a key={label} href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--bu-cream)', textDecoration: 'none', border: '2px solid var(--bu-cream)', borderRadius: 999, padding: '9px 15px', background: 'rgba(0,0,0,0.16)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bu-cream)'; e.currentTarget.style.color = INK; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.16)'; e.currentTarget.style.color = 'var(--bu-cream)'; }}>
                  <Ic size={15} />{label}
                </a>
              ))}
            </div>
          </div>

          {/* right — inline brief card */}
          <div style={{ background: 'var(--bu-cream)', border: `2px solid ${INK}`, borderRadius: 10, boxShadow: hardShadow(8, 8), padding: '28px 30px 32px', minHeight: 440 }}>
            <div style={{ display: 'flex', gap: 7, marginBottom: 24 }}>
              {[0, 1, 2].map((i) => <div key={i} style={{ flex: 1, height: 7, border: `2px solid ${INK}`, borderRadius: 999, background: i <= step ? 'var(--bu-gradient)' : 'var(--bu-cream)' }} />)}
            </div>

            {step === 0 && (
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)', marginBottom: 8 }}>Step 1 of 3</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 18px' }}>What do you need?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11, marginBottom: 24 }}>
                  {services.map((s) => {
                    const on = !!needs[s];
                    return (
                      <button key={s} onClick={() => toggle(s)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 15px', borderRadius: 5, cursor: 'pointer', border: `2px solid ${INK}`, background: on ? INK : 'var(--bu-white)', color: on ? 'var(--bu-cream)' : INK, textAlign: 'left', boxShadow: on ? hardShadow(3, 3) : 'none', transition: 'all .12s' }}>
                        <span style={{ width: 20, height: 20, border: `2px solid ${on ? 'var(--bu-cream)' : INK}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{on && <Check size={13} />}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}>{s}</span>
                      </button>
                    );
                  })}
                </div>
                <Btn variant="fill" size="lg" style={{ width: '100%' }} iconRight={<ArrowRight size={18} />} onClick={() => setStep(1)}>Continue</Btn>
              </div>
            )}

            {step === 1 && (
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)', marginBottom: 8 }}>Step 2 of 3</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 18px' }}>Tell us about it</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                  <Field label="Your name" placeholder="Sana Roy" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
                  <Field label="Work email" type="email" placeholder="sana@brand.co" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 9 }}>Budget</div>
                    <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
                      {budgets.map((b) => (
                        <button key={b} onClick={() => setBudget(b)} style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, border: `2px solid ${INK}`, borderRadius: 999, padding: '9px 15px', cursor: 'pointer', background: budget === b ? 'var(--bu-orange-red)' : 'var(--bu-white)', color: budget === b ? 'var(--bu-cream)' : INK, boxShadow: budget === b ? hardShadow(3, 3) : 'none' }}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: INK }}>Project details</span>
                    <textarea rows={3} placeholder="Tell us about your product, goals, timeline…" value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })}
                      style={{ fontFamily: 'var(--font-body)', fontSize: 16, padding: '12px 14px', border: `2px solid ${INK}`, borderRadius: 4, background: 'var(--bu-white)', color: INK, outline: 'none', resize: 'vertical', minHeight: 84 }}
                      onFocus={(e) => { e.target.style.boxShadow = hardShadow(3, 3, 'var(--bu-orange-red)'); }}
                      onBlur={(e) => { e.target.style.boxShadow = 'none'; }} />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: 11 }}>
                  <Btn variant="cream" onClick={() => setStep(0)}>Back</Btn>
                  <Btn variant="fill" style={{ flex: 1 }} iconRight={<ArrowRight size={18} />} onClick={submit}>{sending ? 'Sending…' : 'Send brief'}</Btn>
                </div>
                {error && (
                  <p role="alert" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--bu-orange-red)', background: 'var(--bu-white)', border: `2px solid var(--bu-orange-red)`, borderRadius: 5, padding: '11px 14px', margin: '14px 0 0' }}>{error}</p>
                )}
              </div>
            )}

            {step === 2 && (
              <div style={{ textAlign: 'center', padding: '18px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 76, height: 76, borderRadius: 8, border: `2px solid ${INK}`, background: 'var(--bu-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, color: 'var(--bu-cream)', boxShadow: hardShadow(5, 5) }}><Check size={38} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 8px' }}>Brief received{fields.name ? `, ${fields.name.split(' ')[0]}` : ''}!</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-600)', margin: '0 0 24px', maxWidth: 340 }}>We’ll review your project and send a tailored plan within 24 hours.</p>
                <Btn variant="cream" onClick={() => setStep(0)}>Start another brief</Btn>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  window.BUContact = Contact;
})();
