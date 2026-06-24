/* Popup brief modal — used by the scattered "Start a project" buttons
   (nav, hero, portfolio, pricing, footer). The closing contact section
   keeps its own inline version (Brief.jsx / window.BUContact). */
(function () {
  const { Btn, INK, hardShadow } = window.BUBrutal;
  const { ArrowRight, Check, X } = window.BUIcons;

  // ↓↓↓ Paste your Formspree form ID here (same as in Brief.jsx) ↓↓↓
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

  function StartProject({ open, onClose }) {
    const [step, setStep] = React.useState(0);
    const [needs, setNeeds] = React.useState({});
    const [budget, setBudget] = React.useState('$1k–5k');
    const [fields, setFields] = React.useState({ name: '', email: '', brand: '', message: '' });
    const [sending, setSending] = React.useState(false);
    const [error, setError] = React.useState('');
    React.useEffect(() => { if (open) setStep(0); }, [open]);
    React.useEffect(() => {
      const fn = (e) => e.key === 'Escape' && onClose();
      if (open) window.addEventListener('keydown', fn);
      return () => window.removeEventListener('keydown', fn);
    }, [open, onClose]);
    if (!open) return null;

    const services = ['Packaging', 'Full branding', 'Logo & identity', 'Amazon Design Stuff', 'Other'];
    const budgets = ['< $1k', '$1k–5k', '$5k–10k', '$10k+'];
    const toggle = (k) => setNeeds((n) => ({ ...n, [k]: !n[k] }));
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const submit = async () => {
      setError('');
      if (!fields.name.trim()) { setError('Please enter your name.'); return; }
      if (!emailOk(fields.email.trim())) { setError('Please enter a valid email address.'); return; }
      const selected = Object.keys(needs).filter((k) => needs[k]);
      setSending(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: fields.name, email: fields.email, brand: fields.brand, services: selected.join(', ') || 'Not specified', budget, message: fields.message, _subject: `New brief from ${fields.name || 'website'}` }) });
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
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'color-mix(in srgb, var(--ink-900) 60%, transparent)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: 560, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto', background: 'var(--bu-cream)', border: `2px solid ${INK}`, borderRadius: 8, boxShadow: hardShadow(8, 8) }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: `2px solid ${INK}`, background: 'var(--bu-white)' }}>
            <img src="assets/logo-wordmark-dark.svg" alt="BrandUnpack" style={{ height: 24 }} />
            <button onClick={onClose} aria-label="Close" style={{ width: 38, height: 38, border: `2px solid ${INK}`, borderRadius: 5, background: 'var(--bu-cream)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: INK }}><X size={18} /></button>
          </div>
          <div style={{ padding: '26px 28px 30px' }}>
            <div style={{ display: 'flex', gap: 7, marginBottom: 26 }}>
              {[0, 1, 2].map((i) => <div key={i} style={{ flex: 1, height: 7, border: `2px solid ${INK}`, borderRadius: 999, background: i <= step ? 'var(--bu-gradient)' : 'var(--bu-cream)' }} />)}
            </div>

            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 6px' }}>What do you need?</h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-600)', margin: '0 0 22px' }}>Pick everything that applies.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11, marginBottom: 26 }}>
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
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 6px' }}>Tell us about it</h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-600)', margin: '0 0 22px' }}>The basics so we can tailor your plan.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 22 }}>
                  <Field label="Your name" placeholder="Sana Roy" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
                  <Field label="Work email" type="email" placeholder="sana@brand.co" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
                  <Field label="Brand name" placeholder="Lume Skincare" value={fields.brand} onChange={(e) => setFields({ ...fields, brand: e.target.value })} />
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
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ width: 76, height: 76, borderRadius: 8, border: `2px solid ${INK}`, background: 'var(--bu-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', color: 'var(--bu-cream)', boxShadow: hardShadow(5, 5) }}><Check size={38} /></div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 8px' }}>Brief received{fields.name ? `, ${fields.name.split(' ')[0]}` : ''}!</h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-600)', margin: '0 auto 24px', maxWidth: 380 }}>We’ll review your project and send a tailored plan within 24 hours.</p>
                <Btn variant="fill" size="lg" onClick={onClose}>Done</Btn>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  window.BUStartProject = StartProject;
})();
