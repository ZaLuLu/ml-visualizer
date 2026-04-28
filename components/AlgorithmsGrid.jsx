window.AlgorithmsGrid = ({ setActiveSection }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="algorithms" className="fade-in">
      <h2 className="title" style={{ fontSize: '3rem', textAlign: 'center' }}>Algorithms Explorer</h2>
      <p className="subtitle" style={{ marginBottom: '4rem', textAlign: 'center' }}>Select a model to dive deep into its mechanics.</p>
      <window.motion.div className="algo-grid" variants={container} initial="hidden" animate="show">
        <window.motion.div variants={item} className="card" onClick={() => setActiveSection('dt')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-dt">DT</span>
            <h3 className="card-title">Decision Tree</h3>
          </div>
          <p className="card-content">Splits data into branches based on feature rules.</p>
        </window.motion.div>
        
        <window.motion.div variants={item} className="card" onClick={() => setActiveSection('knn')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-knn">KNN</span>
            <h3 className="card-title">K-Nearest Neighbors</h3>
          </div>
          <p className="card-content">Classifies based on proximity to localized data clusters.</p>
        </window.motion.div>

        <window.motion.div variants={item} className="card" onClick={() => setActiveSection('nb')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-nb">NB</span>
            <h3 className="card-title">Naive Bayes</h3>
          </div>
          <p className="card-content">Calculates independent probability states logically.</p>
        </window.motion.div>

        <window.motion.div variants={item} className="card" onClick={() => setActiveSection('lr')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-lr">LR</span>
            <h3 className="card-title">Logistic Regression</h3>
          </div>
          <p className="card-content">Linear probabilities via continuous sigmoid bounds.</p>
        </window.motion.div>
      </window.motion.div>
    </section>
  );
};
