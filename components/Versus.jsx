window.VersusShowdown = () => {
  return (
    <section id="versus" className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <h2 className="title" style={{ fontSize: '3rem' }}>Head-to-Head Showdown</h2>
      <p className="subtitle" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
        Why choose one algorithm over the others? Here is the exact competitive advantage each model holds when pitted directly against its peers.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '4rem' }}>
        
        {/* Decision Tree vs Rest */}
        <div className="card" style={{ borderLeft: '4px solid var(--accent-dt)' }}>
          <div className="card-header" style={{ marginBottom: '1rem' }}>
            <span className="badge bg-dt">DT</span>
            <h3 className="card-title">Why choose Decision Tree?</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over KNN:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Training is required, but prediction is split-second fast. KNN requires scanning all data points during prediction.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Naive Bayes:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>DT handles dependent variables comfortably. NB completely shatters if variables rely on each other.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Logistic Regression:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>DT can carve up non-linear relationships instantly. LR forces a single straight line through the data.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>The Ultimate Edge:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>100% Interpretability. You can print the tree and show it to a client exactly how the decision was made.</p>
            </div>
          </div>
        </div>

        {/* KNN vs Rest */}
        <div className="card" style={{ borderLeft: '4px solid var(--accent-knn)' }}>
          <div className="card-header" style={{ marginBottom: '1rem' }}>
            <span className="badge bg-knn">KNN</span>
            <h3 className="card-title">Why choose K-Nearest Neighbors?</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Decision Tree:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>KNN shapes perfectly around fluid, organic clusters. DT forces harsh, blocky rectangular splits.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Naive Bayes:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>KNN requires absolutely zero mathematical assumptions about your data distribution unlike NB.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Logistic Regression:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Easily maps multi-class, bizarre geometric overlapping boundaries which break linear models completely.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>The Ultimate Edge:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Zero Training Phase. You simply drop new data into the database and the model is instantly "updated".</p>
            </div>
          </div>
        </div>

        {/* Naive Bayes vs Rest */}
        <div className="card" style={{ borderLeft: '4px solid var(--accent-nb)' }}>
          <div className="card-header" style={{ marginBottom: '1rem' }}>
            <span className="badge bg-nb">NB</span>
            <h3 className="card-title">Why choose Naive Bayes?</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Decision Tree:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Massive scalability. Dealing with 10,000 text variables crashes a DT, but NB calculates it instantly.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over KNN:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>KNN slows down as datasets grow bigger. NB predictions remain blazing fast regardless of data size.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Logistic Regression:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Needs dramatically less training data to be useful compared to Regression models.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>The Ultimate Edge:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Text classification supremacy. It scales to massive high-dimensional data (like Spam checking) effortlessly.</p>
            </div>
          </div>
        </div>

        {/* Logistic Regression vs Rest */}
        <div className="card" style={{ borderLeft: '4px solid var(--accent-lr)' }}>
          <div className="card-header" style={{ marginBottom: '1rem' }}>
            <span className="badge bg-lr">LR</span>
            <h3 className="card-title">Why choose Logistic Regression?</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Decision Tree:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Outputs exact probabilities (e.g. "82% chance of failure") rather than just a hard Yes/No endpoint.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over KNN:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Memory efficient. KNN has to remember all data points in memory; LR only saves the weights formula.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Over Naive Bayes:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>LR calculates true relationships between dependent features, while NB falsely assumes they are entirely isolated.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>The Ultimate Edge:</strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Feature Importance. It outputs exact mathematical weights telling you precisely which variable caused the outcome.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
