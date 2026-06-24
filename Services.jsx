/* Services grid + Amazon-specialist band. */
(function () {
  const { SectionTag, Sticker, INK, hardShadow } = window.BUBrutal;
  const { Palette, Box, Layers, Compass, FileText, Megaphone, Store, Camera, Sparkle } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  const SERVICES = [
    [Compass, 'Full Product Branding', 'Complete brand development that turns your product into a recognizable, story-driven brand across every platform.'],
    [Box, 'Custom Packaging Design', 'Beautiful, on-brand packaging that stands out in unboxing videos and on the shelf.'],
    [Layers, 'Multi-Platform Visuals', 'High-converting product images optimized for Amazon, Walmart, Shopify and social.'],
    [Palette, 'Logo & Visual Identity', 'Memorable logos and cohesive design systems that build instant recognition.'],
    [FileText, 'Infographics & Explainers', 'Clear, engaging visuals that simplify features and help customers understand value fast.'],
    [Megaphone, 'Brand Strategy & Direction', 'Strategic guidance and creative oversight to position your brand for maximum growth.'],
  ];

  const AMAZON = [
    [Camera, 'Optimized Listing Images', 'Main images, lifestyle shots and infographics built to boost search visibility and conversion.', 'Higher search rank'],
    [Sparkle, 'A+ / Premium A+ / Brand Story', 'Rich, story-driven modules that turn product pages into compelling shopping experiences.', 'Builds trust + story'],
    [Store, 'Amazon Storefront Design', 'Custom storefronts that showcase your full product line and strengthen brand presence.', 'Full-catalog presence'],
  ];

  function AmazonCard({ Icon, title, body, result }) {
    const [h, setH] = React.useState(false);
    return (
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ position: 'relative', overflow: 'hidden', border: '2px solid color-mix(in srgb, var(--bu-cream) 28%, transparent)', borderRadius: 6, padding: '26px 24px 20px', background: 'color-mix(in srgb, var(--bu-cream) 6%, transparent)', transform: h ? 'translate(-3px,-3px)' : 'none', boxShadow: h ? hardShadow(6, 6, 'var(--bu-orange-red)') : 'none', transition: 'transform .16s var(--ease-out), box-shadow .16s var(--ease-out)' }}>
        <div style={{ position: 'absolute', top: -1, right: -1, width: 60, height: 60, background: 'var(--bu-gradient)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)', opacity: h ? 1 : 0, transition: 'opacity .18s' }} />
        <span style={{ display: 'inline-flex', width: 48, height: 48, border: '2px solid var(--bu-orange)', color: 'var(--bu-orange)', borderRadius: 6, alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><Icon size={24} /></span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', margin: '0 0 8px', color: 'inherit' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, margin: '0 0 16px', color: 'color-mix(in srgb, var(--bu-cream) 72%, transparent)' }}>{body}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--bu-orange)', borderTop: '1px solid color-mix(in srgb, var(--bu-cream) 18%, transparent)', paddingTop: 14 }}>
          <span style={{ width: 14, height: 2, background: 'var(--bu-orange)' }} />{result}
        </div>
      </div>
    );
  }

  function Cell({ Icon, title, body, idx }) {
    const [h, setH] = React.useState(false);
    return (
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ position: 'relative', overflow: 'hidden', background: h ? INK : 'var(--bu-cream)', color: h ? 'var(--bu-cream)' : INK, padding: '30px 26px 34px', transition: 'background .18s, color .18s', cursor: 'default' }}>
        <div style={{ position: 'absolute', top: -1, right: -1, width: 64, height: 64, background: 'var(--bu-gradient)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)', opacity: h ? 1 : 0, transition: 'opacity .18s' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
          <span style={{ width: 54, height: 54, border: `2px solid ${h ? 'var(--bu-cream)' : INK}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', background: h ? 'transparent' : 'var(--bu-cream)' }}><Icon size={26} /></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: h ? 'var(--bu-orange)' : 'var(--ink-300)' }}>{idx}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', margin: '0 0 9px', textWrap: 'balance', color: 'inherit' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, margin: 0, color: h ? 'color-mix(in srgb, var(--bu-cream) 78%, transparent)' : 'var(--ink-600)' }}>{body}</p>
      </div>
    );
  }

  function Services() {
    return (
      <section id="services" style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}` }}>
        <div style={{ ...wrap, paddingTop: 80, paddingBottom: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 40 }}>
            <div>
              <SectionTag index="01">What we do</SectionTag>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.98 }}>Everything your<br />brand needs to be bought.</h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-600)', maxWidth: 320, margin: 0 }}>Comprehensive design solutions for e-commerce success — from first sketch to shelf-ready.</p>
          </div>
        </div>
        {/* bordered grid (table look) */}
        <div style={{ ...wrap, paddingBottom: 0 }}>
          <div className="bu-services-grid" style={{ border: `2px solid ${INK}`, borderRadius: 6, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: INK, boxShadow: hardShadow(6, 6), marginBottom: 70 }}>
            {SERVICES.map(([Icon, t, b], i) => <Cell key={t} Icon={Icon} title={t} body={b} idx={String(i + 1).padStart(2, '0')} />)}
          </div>
        </div>
        {/* Amazon band */}
        <div style={{ background: INK, color: 'var(--bu-cream)', borderTop: `2px solid ${INK}`, padding: '64px 0' }}>
          <div style={wrap}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--bu-orange)' }}>02</span>
              <span style={{ width: 26, height: 2, background: 'var(--bu-cream)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Amazon specialists</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 36 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '-0.03em', margin: 0, textTransform: 'uppercase', color: 'inherit' }}>Built to win the buy box.</h2>
              <Sticker rotate={2} variant="orange">Amazon-native specialist</Sticker>
            </div>
            <div className="bu-amazon-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {AMAZON.map(([Icon, t, b, r]) => <AmazonCard key={t} Icon={Icon} title={t} body={b} result={r} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.BUServices = Services;
})();
