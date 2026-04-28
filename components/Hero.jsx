window.HeroSection = ({ setActiveSection }) => {
  return (
    <section className="hero-section fade-in" id="home">
      <div className="hero-bg" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.15) 0%, transparent 50%)',
        filter: 'blur(40px)',
        animation: 'pulse 10s infinite alternate'
      }}></div>
      
      {/* Team Information - Premium Glowing Badge */}
      <div style={{ 
        marginBottom: '3rem', padding: '1rem 2.5rem', 
        background: 'rgba(30, 41, 59, 0.4)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '999px', 
        boxShadow: '0 0 20px rgba(56, 189, 248, 0.2), inset 0 0 10px rgba(255,255,255,0.05)', 
        zIndex: 1, 
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', gap: '1rem',
        animation: 'float 6s ease-in-out infinite'
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-knn)', boxShadow: '0 0 10px var(--accent-knn)' }}></div>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.1em' }}>TEAM CHICKEN DINNER:</span>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>TARUN S &bull; ANISH JOYLIN &bull; PRUTHVI RAJ &bull; WAFIQ NAWAZ</span>
      </div>

      <h1 className="title">Machine Learning<br/>Visualized</h1>
      <p className="subtitle" style={{ fontSize: '1.35rem', maxWidth: '700px' }}>Understand, Compare, and Apply Core ML Models. <br/><span style={{color: 'var(--accent-knn)'}}>Intuitive, visual, and interactive.</span></p>
      <div className="cta-group" style={{ zIndex: 1 }}>
        <button className="btn btn-primary" onClick={() => setActiveSection('algorithms')} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
          Explore Algorithms
        </button>
      </div>
    </section>
  );
};
