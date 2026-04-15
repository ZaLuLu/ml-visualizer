window.HeroSection = ({ setActiveSection }) => {
  return (
    <section className="hero-section fade-in" id="home">
      <div className="hero-bg"></div>
      <h1 className="title">Machine Learning Algorithms<br/>Visualized</h1>
      <p className="subtitle">Understand, Compare, and Apply Core ML Models. Intuitive, visual, and interactive.</p>
      <div className="cta-group">
        <button className="btn btn-primary" onClick={() => setActiveSection('algorithms')}>
          Explore Algorithms
        </button>
        <button className="btn" onClick={() => setActiveSection('compare')}>
          Compare Models
        </button>
      </div>
    </section>
  );
};
