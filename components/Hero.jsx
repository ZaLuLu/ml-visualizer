window.HeroSection = ({ setActiveSection }) => {
  return (
    <section className="hero-section fade-in" id="home">
      <div className="hero-bg"></div>
      
      {/* Team Information */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem 2.5rem', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid var(--border-color)', borderRadius: '16px', boxShadow: 'var(--shadow-subtle)', zIndex: 1, backdropFilter: 'blur(10px)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>TEAM CHICKEN DINNER</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>TARUN S &bull; ANISH JOYLIN &bull; PRUTHVI RAJ &bull; WAFIQ NAWAZ</p>
      </div>

      <h1 className="title">Machine Learning Algorithms<br/>Visualized</h1>
      <p className="subtitle">Understand, Compare, and Apply Core ML Models. Intuitive, visual, and interactive.</p>
      <div className="cta-group" style={{ zIndex: 1 }}>
        <button className="btn btn-primary" onClick={() => setActiveSection('algorithms')} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
          Explore Algorithms
        </button>
      </div>
    </section>
  );
};
