/* Portfolio — filterable bento grid of typographic case covers + case-detail modal.
   The star section. No stock imagery: covers are bold typographic color blocks. */
(function () {
  const { Btn, INK, hardShadow, COVERS, TileImg } = window.BUBrutal;
  const { ArrowUpRight, X, ArrowRight, Check } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  // span = bento footprint: [colSpan, rowSpan]
  const PROJECTS = [
    { id: 1, slug: 'sw1', name: 'Lume Skincare', cat: 'Packaging', cover: 'orange', span: [2, 2], metric: '+312% conversion',
      blurb: 'Complete packaging redesign for a 7-figure skincare seller.',
      brief: 'Lume was blending into a crowded shelf. We rebuilt the packaging system from the box out — a confident, warm identity engineered for the unboxing moment and the Amazon thumbnail alike.',
      deliv: ['Primary & secondary packaging', 'Unboxing insert suite', 'Listing hero + lifestyle set'], result: '+312% listing conversion in 60 days' },
    { id: 2, slug: 'sw2', name: 'Northwind Coffee', cat: 'Branding', cover: 'blue', span: [1, 1], metric: 'Full identity',
      blurb: 'Logo, color and a complete brand system.',
      brief: 'A specialty roaster needed an identity as bold as their beans. We delivered a flexible system that scales from bag to billboard.',
      deliv: ['Logo & wordmark', 'Color + type system', 'Bag & label templates'], result: 'Rolled out across 14 SKUs' },
    { id: 3, slug: 'sw3', name: 'Vitalis Supplements', cat: 'A+ Content', cover: 'ink', span: [1, 1], metric: '+32% CVR',
      blurb: 'A+ content that boosted conversion by 32%.',
      brief: 'We turned a flat product page into a story-driven A+ experience — benefit-first modules, compliant claims, and trust cues that close the sale.',
      deliv: ['Premium A+ modules', 'Brand story section', 'Comparison chart'], result: '+32% conversion rate' },
    { id: 4, slug: 'sw4', name: 'Olea Studio', cat: 'Branding', cover: 'mint', span: [1, 1], metric: 'Web + brand',
      blurb: 'Brand identity and web design.',
      brief: 'A wellness studio wanted calm authority. We built a serene, premium identity and a site that converts browsers into bookings.',
      deliv: ['Visual identity', 'Web design', 'Social templates'], result: 'Bounce rate cut in half' },
    { id: 5, slug: 'sw5', name: 'PACKET', cat: 'Photography', cover: 'lavender', span: [1, 1], metric: 'Photo suite',
      blurb: 'Lifestyle and studio product photography.',
      brief: 'A full product photography suite — clean studio cutouts plus aspirational lifestyle scenes ready for every channel.',
      deliv: ['Studio hero shots', 'Lifestyle scenes', 'Retouch & delivery'], result: '40+ assets across 6 SKUs' },
    { id: 6, slug: 'sw6', name: 'Górka Goods', cat: 'Packaging', cover: 'gradient', span: [2, 1], metric: '12 SKUs',
      blurb: 'Cohesive packaging across a 12-product line.',
      brief: 'Twelve products, one unmistakable family. We designed a flexible packaging system that keeps every SKU on-brand while letting each stand on its own.',
      deliv: ['Master packaging system', '12 SKU adaptations', 'Print-ready dielines'], result: 'Cohesive line, faster launches' },
    { id: 7, slug: 'sw7', name: 'Vista Wellness', cat: 'Amazon', cover: 'cream', span: [1, 1], metric: 'Storefront',
      blurb: 'Custom Amazon storefront design.',
      brief: 'A branded storefront that showcases the full catalog and turns one-time buyers into repeat customers.',
      deliv: ['Storefront layout', 'Category pages', 'Promotional tiles'], result: 'Premium presence on Amazon' },
    { id: 8, slug: 'sw8', name: 'Forma Labs', cat: 'A+ Content', cover: 'orange', span: [1, 1], metric: 'Rebrand',
      blurb: 'Full brand refresh with strategic direction.',
      brief: 'A complete rebrand grounded in strategy — repositioning Forma as the premium choice in a value-driven category.',
      deliv: ['Brand strategy', 'Identity refresh', 'Launch assets'], result: 'Repositioned as category premium' },
  ];

  const FILTERS = ['All', 'Packaging', 'Branding', 'A+ Content', 'Amazon', 'Photography'];

  // Extra covers for the auto-scrolling reel — short typographic showcase cards.
  const REEL = [
    { slug: 'rr1', name: 'Lume Skincare', cat: 'Packaging', cover: 'orange' },
    { slug: 'rr2', name: 'Northwind Coffee', cat: 'Branding', cover: 'blue' },
    { slug: 'rr3', name: 'Vitalis', cat: 'A+ Content', cover: 'ink' },
    { slug: 'rr4', name: 'Olea Studio', cat: 'Branding', cover: 'mint' },
    { slug: 'rr5', name: 'PACKET', cat: 'Photography', cover: 'lavender' },
    { slug: 'rr6', name: 'Górka Goods', cat: 'Packaging', cover: 'gradient' },
    { slug: 'rr7', name: 'Vista Wellness', cat: 'Amazon', cover: 'cream' },
    { slug: 'rr8', name: 'Forma Labs', cat: 'Rebrand', cover: 'orange' },
  ];

  function ReelCard({ p, onOpen }) {
    const c = COVERS[p.cover];
    const lightText = c.color !== INK;
    return (
      <button onClick={() => onOpen && onOpen(p)} className="bu-reel-card"
        style={{ flex: 'none', width: 300, height: 440, position: 'relative', border: `2px solid ${INK}`, borderRadius: 6, overflow: 'hidden', cursor: 'pointer', padding: 0, textAlign: 'left', boxShadow: hardShadow(0, 0), transition: 'transform .16s var(--ease-out), box-shadow .16s var(--ease-out)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = hardShadow(7, 7); }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = hardShadow(0, 0); }}>
        <div style={{ position: 'absolute', inset: 0, ...c, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 26 }}>
          <TileImg name={p.slug} dark={lightText} />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 55%)' }} />
          <span style={{ position: 'relative', zIndex: 2, alignSelf: 'flex-start', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: '1.5px solid currentColor', borderRadius: 999, padding: '5px 11px' }}>{p.cat}</span>
          <div style={{ position: 'relative', zIndex: 2, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', lineHeight: 0.92, textTransform: 'uppercase', textWrap: 'balance' }}>{p.name}</div>
        </div>
      </button>
    );
  }

  function Reel({ onOpen }) {
    const [paused, setPaused] = React.useState(false);
    const run = REEL.concat(REEL);
    return (
      <div style={{ marginTop: 56, borderTop: `2px solid ${INK}`, paddingTop: 44 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 30, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,34px)', letterSpacing: '-0.03em', margin: 0, textTransform: 'uppercase', lineHeight: 1 }}>Design that engages every sense.</h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-500)', margin: 0 }}>A rolling reel of recent work</p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', padding: '14px 0 26px', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div style={{ display: 'inline-flex', gap: 22, paddingInline: 11, animation: 'bu-reel 46s linear infinite', animationPlayState: paused ? 'paused' : 'running', willChange: 'transform' }}>
            {run.map((p, i) => <ReelCard key={i} p={p} onOpen={onOpen} />)}
          </div>
        </div>
      </div>
    );
  }

  function Cover({ p, big }) {
    const c = COVERS[p.cover];
    const lightText = c.color !== INK;
    return (
      <div style={{ position: 'absolute', inset: 0, ...c, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: big ? 26 : 20 }}>
        <TileImg name={p.slug} dark={lightText} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0) 55%)', opacity: 0, transition: 'opacity .2s' }} className="bu-tile-scrim" />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: `1.5px solid currentColor`, borderRadius: 999, padding: '5px 10px' }}>{p.cat}</span>
          <span className="bu-tile-arrow" style={{ width: 36, height: 36, border: '2px solid currentColor', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transform: 'translate(4px,-4px)', transition: 'opacity .2s, transform .2s' }}><ArrowUpRight size={18} /></span>
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: big ? 'clamp(30px,3vw,46px)' : 24, letterSpacing: '-0.03em', lineHeight: 0.95, textTransform: 'uppercase', textWrap: 'balance' }}>{p.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: big ? 13 : 11.5, fontWeight: 700, marginTop: 8, opacity: 0.86 }}>{p.metric}</div>
        </div>
      </div>
    );
  }

  function Tile({ p, onOpen }) {
    const big = p.span[0] === 2 && p.span[1] === 2;
    return (
      <button onClick={() => onOpen(p)}
        className="bu-tile"
        style={{
          gridColumn: `span ${p.span[0]}`, gridRow: `span ${p.span[1]}`,
          position: 'relative', border: `2px solid ${INK}`, borderRadius: 6, overflow: 'hidden',
          minHeight: p.span[1] === 2 ? 380 : 184, cursor: 'pointer', padding: 0,
          boxShadow: hardShadow(0, 0), transition: 'transform .16s var(--ease-out), box-shadow .16s var(--ease-out)',
          background: 'var(--bu-cream)', textAlign: 'left',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = hardShadow(6, 6); const a = e.currentTarget.querySelector('.bu-tile-arrow'); if (a) { a.style.opacity = 1; a.style.transform = 'none'; } const s = e.currentTarget.querySelector('.bu-tile-scrim'); if (s) s.style.opacity = 1; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = hardShadow(0, 0); const a = e.currentTarget.querySelector('.bu-tile-arrow'); if (a) { a.style.opacity = 0; a.style.transform = 'translate(4px,-4px)'; } const s = e.currentTarget.querySelector('.bu-tile-scrim'); if (s) s.style.opacity = 0; }}>
        <Cover p={p} big={big} />
      </button>
    );
  }

  function Detail({ p, onClose, onStart }) {
    if (!p) return null;
    const c = COVERS[p.cover];
    const lightText = c.color !== INK;
    return (
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'color-mix(in srgb, var(--ink-900) 62%, transparent)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: 760, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto', background: 'var(--bu-cream)', border: `2px solid ${INK}`, borderRadius: 8, boxShadow: hardShadow(8, 8) }}>
          <div style={{ position: 'relative', height: 300, ...c, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 28, borderBottom: `2px solid ${INK}`, overflow: 'hidden' }}>
            <TileImg name={p.slug + 'up'} hint={true} dark={lightText} />
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)' }} />
            <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 18, zIndex: 3, width: 40, height: 40, border: `2px solid var(--bu-cream)`, borderRadius: 5, background: 'rgba(0,0,0,0.32)', color: 'var(--bu-cream)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={20} /></button>
            <span style={{ position: 'relative', zIndex: 2, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', border: '1.5px solid var(--bu-cream)', color: 'var(--bu-cream)', borderRadius: 999, padding: '5px 11px', alignSelf: 'flex-start', marginBottom: 12, background: 'rgba(0,0,0,0.22)' }}>{p.cat}</span>
            <div style={{ position: 'relative', zIndex: 2, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,4vw,52px)', letterSpacing: '-0.03em', lineHeight: 0.95, textTransform: 'uppercase', color: 'var(--bu-cream)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>{p.name}</div>
          </div>
          <div style={{ padding: 30 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--ink-800)', margin: '0 0 26px' }}>{p.brief}</p>
            <div className="bu-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-500)', marginBottom: 12 }}>Deliverables</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {p.deliv.map((d) => (
                    <li key={d} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink-800)' }}>
                      <span style={{ color: 'var(--bu-orange-red)', marginTop: 1 }}><Check size={17} /></span>{d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-500)', marginBottom: 12 }}>Result</div>
                <div style={{ border: `2px solid ${INK}`, borderRadius: 6, padding: '18px 20px', background: 'var(--bu-white)', boxShadow: hardShadow(4, 4) }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: INK, lineHeight: 1.1 }}>{p.result}</div>
                </div>
              </div>
            </div>
            <Btn variant="fill" size="lg" onClick={() => { onClose(); onStart(); }} iconRight={<ArrowRight size={18} />}>Start a project like this</Btn>
          </div>
        </div>
      </div>
    );
  }

  function Portfolio({ onStart }) {
    const [active, setActive] = React.useState(null);
    const shown = PROJECTS;
    return (
      <section id="work" style={{ background: 'var(--surface-sunken)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 30 }}>
            <div>
              <window.BUBrutal.SectionTag index="03">Selected work</window.BUBrutal.SectionTag>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,4.4vw,58px)', letterSpacing: '-0.035em', margin: '16px 0 0', textTransform: 'uppercase', lineHeight: 0.95 }}>Brands we<br />unpacked.</h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-600)', maxWidth: 300, margin: 0 }}>Real projects for real sellers. Click any tile for the full case breakdown.</p>
          </div>
          {/* bento grid */}
          <div className="bu-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '184px', gap: 16 }}>
            {shown.map((p) => <Tile key={p.id} p={p} onOpen={setActive} />)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <Btn variant="ink" size="lg" shadowColor="var(--bu-orange-red)" onClick={onStart} iconRight={<ArrowUpRight size={18} />}>Start your project</Btn>
          </div>
        </div>
        <Reel onOpen={(p) => { const i = parseInt(p.slug.replace('rr', ''), 10) - 1; const proj = PROJECTS[i] || PROJECTS[0]; setActive({ ...proj, slug: p.slug }); }} />
        <Detail p={active} onClose={() => setActive(null)} onStart={onStart} />
      </section>
    );
  }

  window.BUPortfolio = Portfolio;
})();
