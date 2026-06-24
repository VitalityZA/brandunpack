/* Top chrome (announcement strip + sticky nav) and footer for the brutalist site. */
(function () {
  const { Btn, INK } = window.BUBrutal;
  const { ArrowUpRight, Star, Mail, Phone, Instagram, Linkedin, Menu, X } = window.BUIcons;
  const NAV = ['Work', 'Services', 'Process', 'Pricing', 'FAQ'];

  function TopBar({ onStart, onNav }) {
    const [solid, setSolid] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    React.useEffect(() => {
      const el = document.getElementById('site-scroll');
      const fn = () => setSolid((el ? el.scrollTop : 0) > 12);
      if (el) el.addEventListener('scroll', fn);
      return () => el && el.removeEventListener('scroll', fn);
    }, []);
    const go = (id) => { setMenu(false); onNav(id); };
    return (
      <div style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        {/* announcement strip */}
        <div style={{ background: INK, color: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center', padding: '7px 16px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <Star size={13} /> Now booking for Q3 · Unlimited revisions on every project
          </span>
        </div>
        {/* nav */}
        <header style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, boxShadow: solid ? '0 6px 0 -2px rgba(22,22,22,0.06)' : 'none' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 28 }} className="bu-nav-inner">
            <a href="#" onClick={(e) => { e.preventDefault(); go('top'); }} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="assets/logo-wordmark-dark.svg" alt="BrandUnpack" style={{ height: 28 }} className="bu-nav-logo" />
            </a>
            <nav style={{ display: 'flex', gap: 4, marginLeft: 14 }} className="bu-nav-links">
              {NAV.map((l) => (
                <a key={l} href="#" onClick={(e) => { e.preventDefault(); go(l.toLowerCase()); }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: INK, textDecoration: 'none', padding: '8px 12px', borderRadius: 3 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = INK; e.currentTarget.style.color = 'var(--bu-cream)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = INK; }}>
                  {l}
                </a>
              ))}
            </nav>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="bu-nav-rate" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'var(--ink-500)' }}>hello@brandunpack.com</span>
              <span className="bu-nav-cta"><Btn size="sm" variant="fill" onClick={onStart} iconRight={<ArrowUpRight size={15} />}>Start a project</Btn></span>
              <button className="bu-nav-toggle" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}
                style={{ display: 'none', width: 46, height: 46, border: `2px solid ${INK}`, borderRadius: 5, background: menu ? INK : 'var(--bu-cream)', color: menu ? 'var(--bu-cream)' : INK, cursor: 'pointer', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                {menu ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          {/* mobile dropdown */}
          <div className="bu-mobile-menu" style={{ display: 'none', maxHeight: menu ? 600 : 0, overflow: 'hidden', transition: 'max-height .3s var(--ease-out)', borderTop: menu ? `2px solid ${INK}` : 'none', background: 'var(--bu-cream)' }}>
            <div style={{ padding: '12px 24px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV.map((l) => (
                <a key={l} href="#" onClick={(e) => { e.preventDefault(); go(l.toLowerCase()); }}
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', letterSpacing: '-0.01em', color: INK, textDecoration: 'none', padding: '12px 4px', borderBottom: '1.5px solid color-mix(in srgb, var(--bu-ink, #161616) 12%, transparent)' }}>{l}</a>
              ))}
              <div style={{ marginTop: 16 }}>
                <Btn variant="fill" size="lg" style={{ width: '100%' }} onClick={() => { setMenu(false); onStart(); }} iconRight={<ArrowUpRight size={18} />}>Start a project</Btn>
              </div>
              <a href="mailto:hello@brandunpack.com" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--ink-500)', textDecoration: 'none', marginTop: 14, textAlign: 'center' }}>hello@brandunpack.com</a>
            </div>
          </div>
        </header>
      </div>
    );
  }

  function Footer({ onStart, onNav }) {
    const cols = [
      ['Services', ['Product branding', 'Packaging design', 'Listing images', 'A+ content', 'Storefronts']],
      ['Studio', ['Work', 'Process', 'Pricing', 'Reviews']],
      ['Connect', ['hello@brandunpack.com', '(813) 321-0833', 'Instagram']],
    ];
    return (
      <footer style={{ background: INK, color: 'var(--bu-cream)', borderTop: `2px solid ${INK}` }}>
        {/* giant wordmark band */}
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 28px 30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap', marginBottom: 56 }}>
            <div style={{ maxWidth: 340 }}>
              <img src="assets/logo-wordmark-light.svg" alt="BrandUnpack" style={{ height: 30, marginBottom: 20 }} />
              <p style={{ color: 'color-mix(in srgb, var(--bu-cream) 64%, transparent)', fontSize: 15, lineHeight: 1.6, margin: '0 0 22px' }}>
                Premium design for product sellers. High-converting visuals that drive sales and build lasting recognition.
              </p>
              <Btn variant="gradient" onClick={onStart} iconRight={<ArrowUpRight size={16} />}>Start a project</Btn>
            </div>
            <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
              {cols.map(([h, items]) => (
                <div key={h}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bu-orange)', marginBottom: 16 }}>{h}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {items.map((it) => <li key={it}><a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'color-mix(in srgb, var(--bu-cream) 74%, transparent)', textDecoration: 'none', fontSize: 14 }}>{it}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid color-mix(in srgb, var(--bu-cream) 16%, transparent)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'color-mix(in srgb, var(--bu-cream) 52%, transparent)' }}>© 2026 BrandUnpack Studio · Made to be unpacked.</span>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Instagram, Mail].map((Ic, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} aria-label="social" style={{ width: 38, height: 38, border: '2px solid color-mix(in srgb, var(--bu-cream) 30%, transparent)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bu-cream)' }}><Ic size={18} /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  window.BUChrome = { TopBar, Footer };
})();
