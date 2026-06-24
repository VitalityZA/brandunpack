/* Testimonials + closing CTA band. */
(function () {
  const { Btn, SectionTag, INK, hardShadow } = window.BUBrutal;
  const { ArrowRight, Quote } = window.BUIcons;
  const wrap = { maxWidth: 1320, margin: '0 auto', padding: '0 28px' };

  const REVIEWS = [
    { q: 'BrandUnpack transformed our product packaging and our sales skyrocketed. Their attention to detail and understanding of the marketplace is unmatched.', n: 'Sarah Martinez', r: '7-Figure Brand Owner', c: 'gradient' },
    { q: 'She laid out everything she needed, turned it around extremely quickly, and after a few tweaks we had exactly what I was looking for. I’d recommend them to anyone.', n: 'Lucas Hartmann', r: 'Amazon Seller', c: 'cream' },
    { q: 'Miriska helped bring my vision to life — over a month of work on the micro-details of a packaging design. A pleasure to work with. Highly recommend.', n: 'Alexandria Ransom', r: 'Amazon FBA Seller', c: 'cream' },
    { q: 'Really great communication and fast response. We love the packaging and inserts — we’ll stick with BrandUnpack for our next projects too.', n: 'Kenneth Lim', r: 'E-Commerce Seller', c: 'ink' },
  ];

  function Card({ rev, big }) {
    const dark = rev.c === 'ink';
    const grad = rev.c === 'gradient';
    const bg = grad ? 'var(--bu-gradient)' : dark ? INK : 'var(--bu-white)';
    const fg = grad || dark ? 'var(--bu-cream)' : INK;
    return (
      <div style={{ gridColumn: big ? 'span 2' : 'span 1', border: `2px solid ${INK}`, borderRadius: 8, padding: big ? '32px 30px' : '26px 24px', background: bg, color: fg, boxShadow: hardShadow(5, 5), display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ color: grad || dark ? 'var(--bu-cream)' : 'var(--bu-orange-red)' }}><Quote size={big ? 38 : 30} /></span>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: big ? 'clamp(20px,2vw,28px)' : 17, lineHeight: 1.4, letterSpacing: '-0.01em', margin: 0, flex: 1, textWrap: 'balance' }}>“{rev.q}”</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
          <span style={{ width: 42, height: 42, borderRadius: 6, border: `2px solid ${grad || dark ? 'var(--bu-cream)' : INK}`, background: grad ? 'rgba(0,0,0,0.18)' : dark ? 'var(--bu-orange-red)' : 'var(--bu-gradient)', color: 'var(--bu-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>
            {rev.n.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{rev.n}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7 }}>{rev.r}</div>
          </div>
          <span style={{ marginLeft: 'auto', color: '#ffb020', fontSize: 14, letterSpacing: 1 }}>★★★★★</span>
        </div>
      </div>
    );
  }

  function Testimonials() {
    return (
      <section id="reviews" style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <SectionTag index="08">What clients say</SectionTag>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', margin: '16px 0 40px', textTransform: 'uppercase' }}>Sellers who came back.</h2>
          <div className="bu-voices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            <Card rev={REVIEWS[0]} big />
            <Card rev={REVIEWS[3]} />
            <Card rev={REVIEWS[1]} />
            <Card rev={REVIEWS[2]} big />
          </div>
        </div>
      </section>
    );
  }

  window.BUTestimonials = Testimonials;
})();
