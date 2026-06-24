/* Process steps + big stats band + Why-BrandUnpack guarantee grid. */
(function () {
  const { SectionTag, INK, hardShadow } = window.BUBrutal;
  const { Refresh, Dollar, Shield, Star, MapPin, Clock, ArrowDown } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  const STEPS = [
    ['01', 'Share your brief', 'Tell us what you’re selling and where. We map the fastest path to a higher-converting brand.'],
    ['02', 'We design', 'You get bold, on-strategy concepts — packaging, listings or full identity — built to move the needle.'],
    ['03', 'Refine together', 'Unlimited revisions. We keep sharpening until it’s exactly right — no extra charges, ever.'],
    ['04', 'Ship & scale', 'Print-ready, platform-ready files delivered fast, with systems that make scaling effortless.'],
  ];

  const WHY = [
    [Refresh, 'Unlimited Revisions', 'We keep refining until you’re 100% happy — no extra charges.'],
    [Dollar, 'Fixed or Hourly', 'Transparent pricing that fits your budget and project needs.'],
    [Shield, '100% Money-Back', 'Not satisfied? Full refund — no questions asked.'],
    [Star, 'Best Value', 'Premium-quality design at fair, competitive rates.'],
    [MapPin, 'US-Based', 'Direct communication, handled from the United States.'],
    [Clock, 'Fast Turnaround', 'Quick delivery with dedicated support start to finish.'],
  ];

  function Process() {
    return (
      <section id="process" style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, padding: '80px 0 70px' }}>
        <div style={wrap}>
          <SectionTag index="04">How it works</SectionTag>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', margin: '16px 0 44px', textTransform: 'uppercase', lineHeight: 0.98 }}>Four steps to a<br />brand that sells.</h2>
          <div className="bu-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
            {STEPS.map(([n, t, b], i) => (
              <div key={n} style={{ position: 'relative', border: `2px solid ${INK}`, borderRadius: 6, padding: '26px 22px 28px', background: i === 0 ? INK : 'var(--bu-white)', color: i === 0 ? 'var(--bu-cream)' : INK, boxShadow: hardShadow(5, 5) }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', color: i === 0 ? 'var(--bu-orange)' : 'var(--ink-200)', marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', margin: '0 0 9px', color: 'inherit' }}>{t}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, margin: 0, color: i === 0 ? 'color-mix(in srgb, var(--bu-cream) 76%, transparent)' : 'var(--ink-600)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Stats() {
    const S = [['1,500+', 'Projects delivered'], ['10+', 'Years of craft'], ['4.9★', 'Average rating'], ['100%', 'Money-back']];
    return (
      <section style={{ background: 'var(--bu-gradient)', borderBottom: `2px solid ${INK}` }}>
        <div style={{ ...wrap, padding: '52px 28px' }}>
          <div className="bu-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {S.map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center', color: 'var(--bu-cream)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1, textShadow: '0 2px 0 rgba(22,22,22,0.25)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 10, opacity: 0.92 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Why() {
    return (
      <section style={{ background: 'var(--surface-sunken)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <SectionTag index="05">Why BrandUnpack</SectionTag>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.6vw,48px)', letterSpacing: '-0.03em', margin: '16px 0 40px', textTransform: 'uppercase' }}>Low risk. High craft.</h2>
          <div className="bu-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {WHY.map(([Icon, t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 16, border: `2px solid ${INK}`, borderRadius: 6, padding: '22px 22px', background: 'var(--bu-cream)' }}>
                <span style={{ flex: 'none', width: 46, height: 46, border: `2px solid ${INK}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bu-white)', color: 'var(--bu-orange-red)' }}><Icon size={22} /></span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', margin: '2px 0 5px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, margin: 0, color: 'var(--ink-600)' }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.BUProcess = Process;
  window.BUStats = Stats;
  window.BUWhy = Why;
})();
