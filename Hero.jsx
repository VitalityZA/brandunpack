/* Hero + niche marquee for the brutalist BrandUnpack site. */
(function () {
  const { Btn, Sticker, Marquee, INK, hardShadow, TileImg } = window.BUBrutal;
  const { ArrowRight, Star, Box } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  const PANELS = [
    { name: 'Lume Skincare', cat: 'Packaging redesign', metric: '+312%', unit: 'conversion' },
    { name: 'Northwind Coffee', cat: 'Full brand identity', metric: '14 SKUs', unit: 'rolled out' },
  ];

  function HeroPanel() {
    const [hover, setHover] = React.useState(false);
    const p = hover ? PANELS[1] : PANELS[0];
    return (
      <div style={{ position: 'relative', height: 440 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{ position: 'absolute', inset: 0, border: `2px solid ${INK}`, borderRadius: 6, background: 'var(--bu-cream)', transform: hover ? 'rotate(-2.5deg)' : 'rotate(2.5deg)', boxShadow: hardShadow(7, 7), transition: 'transform .4s var(--ease-out)' }} />
        <div style={{ position: 'absolute', inset: 0, border: `2px solid ${INK}`, borderRadius: 6, overflow: 'hidden', backgroundImage: "url('assets/brand-gradient.png')", backgroundSize: 'cover', backgroundPosition: 'center', transform: hover ? 'rotate(2deg)' : 'rotate(-2deg)', boxShadow: hardShadow(7, 7), display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 22, transition: 'transform .4s var(--ease-out)', cursor: 'pointer' }}>
          <TileImg key={hover ? 'header2' : 'header1'} name={hover ? 'header2' : 'header1'} dark={true} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span key={p.name} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--bu-cream)', background: 'rgba(0,0,0,0.28)', padding: '6px 11px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.4)', animation: 'bu-panel-in .35s var(--ease-out)' }}>{p.name}</span>
            <span style={{ width: 46, height: 46, border: '2px solid var(--bu-cream)', borderRadius: 6, background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bu-cream)' }}><Box size={22} /></span>
          </div>
          <div key={p.cat} style={{ position: 'relative', zIndex: 2, background: 'var(--bu-cream)', border: `2px solid ${INK}`, borderRadius: 5, padding: '14px 16px', boxShadow: hardShadow(4, 4), animation: 'bu-panel-in .35s var(--ease-out)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)' }}>{p.cat}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', color: INK }}>{p.metric} <span style={{ fontSize: 16 }}>{p.unit}</span></div>
          </div>
        </div>
      </div>
    );
  }

  function Hero({ onStart, onNav }) {
    return (
      <section id="top" style={{ position: 'relative', borderBottom: `2px solid ${INK}`, background: 'var(--bu-cream)' }}>
        {/* faint grid lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${'color-mix(in srgb, var(--ink-900) 5%, transparent)'} 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--ink-900) 5%, transparent) 1px, transparent 1px)`, backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        <div className="bu-hero-grid" style={{ ...wrap, position: 'relative', paddingTop: 64, paddingBottom: 72, display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 26, alignItems: 'center', flexWrap: 'wrap' }}>
              <Sticker rotate={-3} variant="gradient"><Star size={13} /> 1,500+ projects shipped</Sticker>
              <Sticker rotate={2} variant="cream">★ 4.9 / 5 · Top-Rated Plus</Sticker>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(46px, 6vw, 92px)', lineHeight: 0.95, letterSpacing: '-0.04em', margin: '0 0 26px', textTransform: 'uppercase' }}>
              Visuals that<br />make them<br /><span className="bu-gradient-text">stop &amp; buy.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'var(--ink-700)', maxWidth: 480, margin: '0 0 32px' }}>
              Premium graphic design for Amazon sellers &amp; product brands — packaging, listing images, A+ content and full identities engineered to convert.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Btn variant="fill" size="lg" onClick={onStart} iconRight={<ArrowRight size={18} />}>Start a project</Btn>
              <Btn variant="cream" size="lg" onClick={() => onNav('work')}>View the work</Btn>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
              {[['1,500+', 'Projects delivered'], ['10+ yrs', 'Design experience'], ['100%', 'Money-back guarantee']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* hero panel — bordered, gradient, glass metric — hover to swap project */}
          <HeroPanel />
        </div>
        <Marquee items={['Supplements', 'Beauty', 'Cosmetics', 'Food & Drink', 'Fitness', 'Sports', 'Electronics', 'Toys', 'Baby & Kids', 'Home & Kitchen', 'Pets', 'Outdoors', 'Wellness', 'Apparel', 'Beverages', 'Tools', 'Office', 'Automotive']} bg={INK} color="var(--bu-cream)" speed={48} />
      </section>
    );
  }

  window.BUHero = Hero;
})();
