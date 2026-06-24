/* FAQ — accordion of common questions. Brutalist cards, one-open-at-a-time. */
(function () {
  const { SectionTag, INK, hardShadow } = window.BUBrutal;
  const { Plus, Minus } = window.BUIcons;
  const wrap = { maxWidth: 980, margin: '0 auto', padding: '0 28px' };

  const QA = [
    {
      q: 'Who will I be working with?',
      a: 'Miriska Harris, the solo designer behind BrandUnpack and the person you’ll work with directly from first brief to final file. I bring years of experience across design, product development, and marketing to every project. BrandUnpack doesn’t employ a team of junior designers or outsource your work to anyone else. It’s always me.',
    },
    {
      q: 'How fast will I get my designs?',
      a: 'Most projects are delivered in 2–7 business days, depending on scope and the number of revisions. Have a hard deadline? Tell me up front and I’ll work to make it happen.',
    },
    {
      q: 'What types of projects do you take on?',
      a: 'Just about any kind of design project. While I specialize in e-commerce — packaging, Amazon listing images, A+ / EBC content, logos and full brand identities — I also work with service businesses, startups, and brands of every shape and size. From a single logo to a complete visual identity, if it needs great design, I can help. Not sure if your project is a fit? Reach out and ask — I’m happy to point you in the right direction either way.',
    },
    {
      q: 'What if I don’t like the design?',
      a: 'No problem at all. Every project includes unlimited revisions, so we’ll keep refining until you’re 100% happy with the result. You’re never locked into something you don’t love.',
    },
    {
      q: 'How much will it cost?',
      a: 'Pricing depends on the scope of your project. I offer fixed-price packages for well-defined work and hourly rates for ongoing or open-ended projects, so you only pay for what you actually need. Share your brief and I’ll send a clear quote before any work begins.',
    },
    {
      q: 'How do we get started?',
      a: 'Hit “Start a project” and tell me a bit about your product, goals and timeline. I’ll follow up with any questions, a quote and a clear plan, then we get to work. Most projects kick off within a day or two of your brief.',
    },
  ];

  function Row({ item, open, onToggle, index }) {
    return (
      <div style={{ border: `2px solid ${INK}`, borderRadius: 6, background: open ? 'var(--bu-white)' : 'var(--bu-cream)', boxShadow: open ? hardShadow(5, 5) : hardShadow(0, 0), transition: 'box-shadow .16s var(--ease-out), background .16s' }}>
        <button onClick={onToggle} aria-expanded={open}
          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 22px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: 'var(--ink-500)', flex: 'none', width: 28 }}>{String(index + 1).padStart(2, '0')}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(17px,1.7vw,21px)', letterSpacing: '-0.01em', color: INK, flex: 1, lineHeight: 1.2 }}>{item.q}</span>
          <span style={{ flex: 'none', width: 38, height: 38, border: `2px solid ${INK}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', background: open ? 'var(--bu-orange-red)' : 'var(--bu-cream)', color: open ? 'var(--bu-cream)' : INK, transition: 'background .16s, color .16s' }}>
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
        <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows .26s var(--ease-out)' }}>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0, padding: '0 22px 22px 66px', maxWidth: 720 }}>{item.a}</p>
          </div>
        </div>
      </div>
    );
  }

  function FAQ() {
    const [open, setOpen] = React.useState(0);
    return (
      <section id="faq" style={{ background: 'var(--bu-cream)', borderBottom: `2px solid ${INK}`, padding: '80px 0' }}>
        <div style={wrap}>
          <SectionTag index="09">Questions</SectionTag>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.03em', margin: '16px 0 40px', textTransform: 'uppercase' }}>Good to know.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {QA.map((item, i) => (
              <Row key={i} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.BUFAQ = FAQ;
})();
