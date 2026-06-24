/* Compose the brutalist BrandUnpack site. */
(function () {
  const { TopBar, Footer } = window.BUChrome;
  function App() {
    const [brief, setBrief] = React.useState(false);
    const start = () => setBrief(true);
    const onNav = (id) => {
      const scroller = document.getElementById('site-scroll');
      if (id === 'top') { scroller.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const el = document.getElementById(id);
      if (el) scroller.scrollTo({ top: el.offsetTop - 96, behavior: 'smooth' });
    };
    return (
      <div id="site-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--bu-cream)' }}>
        <TopBar onStart={start} onNav={onNav} />
        <main>
          <window.BUHero onStart={start} onNav={onNav} />
          <window.BUServices />
          <window.BUPortfolio onStart={start} />
          <window.BUProcess />
          <window.BUStats />
          <window.BUWhy />
          <window.BUStudio />
          <window.BUPricing onStart={start} />
          <window.BUTestimonials />
          <window.BUFAQ />
          <window.BUContact />
        </main>
        <Footer onStart={start} onNav={onNav} />
        <window.BUStartProject open={brief} onClose={() => setBrief(false)} />
      </div>
    );
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
