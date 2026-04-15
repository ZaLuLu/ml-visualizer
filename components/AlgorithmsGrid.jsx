window.AlgorithmsGrid = ({ setActiveSection }) => {
  return (
    <section id="algorithms" className="fade-in">
      <h2 className="title" style={{ fontSize: '2.5rem' }}>Algorithms Explorer</h2>
      <p className="subtitle" style={{ marginBottom: '4rem' }}>Select a model to dive deep into its mechanics.</p>
      <div className="algo-grid">
        <div className="card" onClick={() => setActiveSection('dt')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-dt">DT</span>
            <h3 className="card-title">Decision Tree</h3>
          </div>
          <p className="card-content">Splits data into branches based on feature rules.</p>
        </div>
        
        <div className="card" onClick={() => setActiveSection('knn')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-knn">KNN</span>
            <h3 className="card-title">K-Nearest Neighbors</h3>
          </div>
          <p className="card-content">Classifies based on proximity to localized data clusters.</p>
        </div>

        <div className="card" onClick={() => setActiveSection('nb')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-nb">NB</span>
            <h3 className="card-title">Naive Bayes</h3>
          </div>
          <p className="card-content">Calculates independent probability states logically.</p>
        </div>

        <div className="card" onClick={() => setActiveSection('lr')} style={{ cursor: 'pointer' }}>
          <div className="card-header">
            <span className="badge bg-lr">LR</span>
            <h3 className="card-title">Logistic Regression</h3>
          </div>
          <p className="card-content">Linear probabilities via continuous sigmoid bounds.</p>
        </div>
      </div>
    </section>
  );
};
