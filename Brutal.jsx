/* Brutalist-but-refined shared primitives for the BrandUnpack site.
   Cream paper + ink, 2px borders, hard offset shadows, mono labels. */
(function () {
  const INK = 'var(--ink-900)';
  const hardShadow = (x = 5, y = 5, color = INK) => `${x}px ${y}px 0 ${color}`;

  /* ---- Brutalist button: square-ish, 2px border, hard shadow, press-into-shadow ---- */
  function Btn(props) {
    const { variant = 'fill', size = 'md', as = 'button', iconRight = null, iconLeft = null, style = {}, shadowColor = INK, children } = props;
    const rest = {};
    Object.keys(props).forEach((k) => { if (!['variant', 'size', 'as', 'iconRight', 'iconLeft', 'style', 'shadowColor', 'children'].includes(k)) rest[k] = props[k]; });
    const sizes = {
      sm: { padding: '9px 16px', fontSize: '13px', gap: 7 },
      md: { padding: '13px 22px', fontSize: '15px', gap: 9 },
      lg: { padding: '17px 30px', fontSize: '17px', gap: 11 },
    }[size];
    const skins = {
      fill: { background: 'var(--bu-orange-red)', color: 'var(--bu-cream)', border: `2px solid ${INK}` },
      ink: { background: INK, color: 'var(--bu-cream)', border: `2px solid ${INK}` },
      cream: { background: 'var(--bu-cream)', color: INK, border: `2px solid ${INK}` },
      gradient: { background: 'var(--bu-gradient)', color: 'var(--bu-cream)', border: `2px solid ${INK}` },
    }[variant];
    const Tag = as;
    return (
      <Tag
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: sizes.gap,
          fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.01em',
          lineHeight: 1, cursor: 'pointer', textDecoration: 'none', borderRadius: 3,
          boxShadow: hardShadow(4, 4, shadowColor), transition: 'transform .12s var(--ease-out), box-shadow .12s var(--ease-out), filter .12s',
          padding: sizes.padding, fontSize: sizes.fontSize, ...skins, ...style,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-1px,-1px)'; e.currentTarget.style.boxShadow = hardShadow(6, 6, shadowColor); }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = hardShadow(4, 4, shadowColor); }}
        onMouseDown={(e) => { e.currentTarget.style.transform = 'translate(4px,4px)'; e.currentTarget.style.boxShadow = hardShadow(0, 0, shadowColor); }}
        onMouseUp={(e) => { e.currentTarget.style.transform = 'translate(-1px,-1px)'; e.currentTarget.style.boxShadow = hardShadow(6, 6, shadowColor); }}
        {...rest}
      >
        {iconLeft}{children}{iconRight}
      </Tag>
    );
  }

  /* ---- Rotated sticker badge ---- */
  function Sticker({ rotate = -3, variant = 'gradient', style = {}, children }) {
    const skins = {
      gradient: { background: 'var(--bu-gradient)', color: 'var(--bu-cream)' },
      ink: { background: INK, color: 'var(--bu-cream)' },
      cream: { background: 'var(--bu-cream)', color: INK },
      orange: { background: 'var(--bu-orange-red)', color: 'var(--bu-cream)' },
      mint: { background: 'var(--bu-mint)', color: INK },
    }[variant];
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase',
        letterSpacing: '0.04em', padding: '7px 13px', border: `2px solid ${INK}`, borderRadius: 999,
        boxShadow: hardShadow(3, 3), transform: `rotate(${rotate}deg)`, whiteSpace: 'nowrap', ...skins, ...style,
      }}>
        {children}
      </span>
    );
  }

  /* ---- Mono section tag, e.g. "01 / OUR WORK" ---- */
  function SectionTag({ index, children, color = 'var(--bu-orange-red)' }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {index != null && <span style={{ color }}>{index}</span>}
        <span style={{ width: 26, height: 2, background: INK }} />
        <span style={{ color: INK }}>{children}</span>
      </div>
    );
  }

  /* ---- Drop-in image: tries images/<name>.jpg, falls back to placeholder beneath ----
     Shows a small "drop: <name>.jpg" hint over the placeholder until the file exists. */
  function TileImg({ name, hint = true, dark = false }) {
    const [ok, setOk] = React.useState(true);
    return (
      <React.Fragment>
        {ok && (
          <img src={`images/${name}.jpg`} alt="" onError={() => setOk(false)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 1 }} />
        )}
        {!ok && hint && (
          <span style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 3, fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.04em', padding: '4px 8px', borderRadius: 4, border: '1.5px dashed currentColor', background: dark ? 'rgba(0,0,0,0.28)' : 'rgba(255,255,255,0.22)' }}>drop: {name}.jpg</span>
        )}
      </React.Fragment>
    );
  }

  /* ---- Infinite marquee strip ---- */
  function Marquee({ items, speed = 28, bg = INK, color = 'var(--bu-cream)', sep = '✦', borders = true }) {
    const run = items.concat(items);
    return (
      <div style={{
        overflow: 'hidden', background: bg, color,
        borderTop: borders ? `2px solid ${INK}` : 'none', borderBottom: borders ? `2px solid ${INK}` : 'none',
        padding: '14px 0',
      }}>
        <div style={{ display: 'inline-flex', gap: 0, whiteSpace: 'nowrap', animation: `bu-marquee ${speed}s linear infinite`, willChange: 'transform' }}>
          {run.map((it, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, paddingInline: 14, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>
              {it}<span style={{ color: 'var(--bu-orange)', fontSize: 16 }}>{sep}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  /* ---- Typographic cover used by portfolio tiles (no stock imagery) ---- */
  const COVERS = {
    orange: { background: 'var(--bu-orange-red)', color: 'var(--bu-cream)' },
    blue: { background: 'var(--bu-blue)', color: 'var(--bu-cream)' },
    ink: { background: INK, color: 'var(--bu-cream)' },
    gradient: { background: 'var(--bu-gradient)', color: 'var(--bu-cream)' },
    mint: { background: 'var(--bu-mint)', color: INK },
    lavender: { background: 'var(--bu-lavender)', color: INK },
    cream: { background: 'var(--bu-cream)', color: INK },
  };

  window.BUBrutal = { Btn, Sticker, SectionTag, Marquee, TileImg, hardShadow, INK, COVERS };
})();
