/* Designer spotlight (Miriska Harris) + productized pricing. */
(function () {
  const { Btn, Sticker, SectionTag, INK, hardShadow } = window.BUBrutal;
  const { Check, ArrowRight, Star } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  const NICHES = ['Supplements', 'Beauty & Cosmetics', 'Food & Drink', 'Toys', 'Fitness', 'Electronics', 'Health & Wellness', 'Home & Kitchen'];

  function Studio() {
    return (
      <section id="studio" style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <SectionTag index="06">Meet your designer</SectionTag>
          <div className="bu-studio-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 44, marginTop: 28, alignItems: 'start' }}>
            {/* portrait card */}
            <div style={{ border: `2px solid ${INK}`, borderRadius: 8, overflow: 'hidden', boxShadow: hardShadow(7, 7), background: 'var(--bu-white)' }}>
              <div style={{ position: 'relative', height: 320, background: 'var(--bu-gradient)', borderBottom: `2px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 120, color: 'var(--bu-cream)', letterSpacing: '-0.04em', textShadow: '0 3px 0 rgba(22,22,22,0.25)' }}>MH</span>
                <div style={{ position: 'absolute', bottom: 14, left: 14 }}><Sticker rotate={-4} variant="cream"><Star size={12} /> Top-Rated Plus</Sticker></div>
              </div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em' }}>Miriska Harris</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)', marginTop: 4 }}>Lead Designer &amp; Brand Strategist</div>
              </div>
            </div>
            {/* bio + niches */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.03em', margin: '0 0 18px', textTransform: 'uppercase', lineHeight: 1 }}>A decade of designs that sell.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 14px', maxWidth: 620 }}>
                With 10+ years focused on packaging, Amazon listing images and full-scale product branding, I’ve delivered <strong>1,500+ projects</strong> — sharpening my eye for what actually converts and building design systems that make scaling effortless.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 26px', maxWidth: 620 }}>
                My goal is simple: strategic, memorable branding tailored to your ideal customer — with clear communication and a streamlined process that saves you time and stress.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-500)', marginBottom: 14 }}>Specialist niches</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {NICHES.map((n) => (
                  <span key={n} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, border: `2px solid ${INK}`, borderRadius: 999, padding: '7px 14px', background: 'var(--bu-white)' }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const PLANS = [
    { name: 'Hourly Rate', tag: 'Flexible', price: 'Hourly', sub: 'Best for evolving scope', feat: ['Pay only for time spent', 'Perfect for ongoing work & consults', 'Scale up or down anytime', 'Unlimited revisions included'], featured: false },
    { name: 'Fixed Project', tag: 'Most popular', price: '$100–$10k+', sub: 'Know your investment upfront', feat: ['Flat price by scope & deliverables', 'No surprises, no scope creep', 'Unlimited revisions included', '100% money-back guarantee'], featured: true },
  ];

  function Pricing({ onStart }) {
    return (
      <section id="pricing" style={{ background: 'var(--surface-sunken)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ display: 'inline-block' }}><SectionTag index="07">Investment</SectionTag></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', margin: '16px 0 10px', textTransform: 'uppercase' }}>Flexible pricing.</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--ink-600)', maxWidth: 460, margin: '0 auto' }}>Every project is different. Pick the structure that fits — both include unlimited revisions.</p>
          </div>
          <div className="bu-pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, maxWidth: 880, margin: '0 auto' }}>
            {PLANS.map((p) => (
              <div key={p.name} style={{ position: 'relative', border: `2px solid ${INK}`, borderRadius: 8, padding: '32px 30px 34px', background: p.featured ? INK : 'var(--bu-cream)', color: p.featured ? 'var(--bu-cream)' : INK, boxShadow: hardShadow(p.featured ? 8 : 5, p.featured ? 8 : 5) }}>
                {p.featured && <div style={{ position: 'absolute', top: -16, right: 22 }}><Sticker rotate={3} variant="gradient">{p.tag}</Sticker></div>}
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: p.featured ? 'var(--bu-orange)' : 'var(--ink-500)', marginBottom: 10 }}>{p.featured ? 'Fixed scope' : p.tag}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,3.4vw,46px)', letterSpacing: '-0.03em', lineHeight: 1, margin: '14px 0 6px' }}>{p.price}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: p.featured ? 'color-mix(in srgb, var(--bu-cream) 70%, transparent)' : 'var(--ink-500)', marginBottom: 22 }}>{p.sub}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.feat.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 15 }}>
                      <span style={{ flex: 'none', color: p.featured ? 'var(--bu-orange)' : 'var(--bu-orange-red)', marginTop: 1 }}><Check size={18} /></span>{f}
                    </li>
                  ))}
                </ul>
                <Btn variant={p.featured ? 'gradient' : 'fill'} size="lg" style={{ width: '100%' }} shadowColor={p.featured ? 'var(--bu-cream)' : INK} onClick={onStart} iconRight={<ArrowRight size={18} />}>Get a custom quote</Btn>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.BUStudio = Studio;
  window.BUPricing = Pricing;
})();
