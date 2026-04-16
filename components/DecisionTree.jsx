const { useState } = React;

window.DecisionTreePage = ({ setActiveSection }) => {
  const [featureValue, setFeatureValue] = useState(50);
  const isLeft = featureValue < 50;

  return (
    <section className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button className="btn" onClick={() => setActiveSection('algorithms')} style={{ marginBottom: '2rem' }}>&larr; Back to Algorithms</button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <span className="badge bg-dt" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>Decision Tree</span>
        <h2 className="title" style={{ margin: 0, fontSize: '3rem' }}>Non-Linear Splitting</h2>
      </div>

      <div className="algo-grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        {/* Interactive Visualizer */}
        <div className="card">
          <div className="visual-container" style={{ height: '400px' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 300">
              <g transform="translate(200, 40)">
                <rect x="-40" y="-20" width="80" height="40" rx="8" fill="#cbd5e1" />
                <text x="0" y="5" fill="#1e293b" textAnchor="middle" fontSize="12">Income &gt; 50?</text>
                <line x1="0" y1="20" x2="-80" y2="80" stroke={isLeft ? "#34d399" : "#cbd5e1"} strokeWidth={isLeft ? "4" : "2"} />
                <line x1="0" y1="20" x2="80" y2="80" stroke={!isLeft ? "#34d399" : "#cbd5e1"} strokeWidth={!isLeft ? "4" : "2"} />
                <rect x="-120" y="80" width="80" height="40" rx="8" fill="#cbd5e1" stroke={isLeft ? "#34d399" : "none"} strokeWidth="2" />
                <text x="-80" y="105" fill="#1e293b" textAnchor="middle" fontSize="12">Reject</text>
                <rect x="40" y="80" width="80" height="40" rx="8" fill="#cbd5e1" stroke={!isLeft ? "#34d399" : "none"} strokeWidth="2" />
                <text x="80" y="105" fill="#1e293b" textAnchor="middle" fontSize="12">Approve</text>
              </g>
            </svg>
          </div>
          <div className="controls">
            <div className="control-group">
              <div className="control-label">
                <span>User Income (k$)</span>
                <span>{featureValue}k</span>
              </div>
              <input type="range" min="10" max="100" value={featureValue} onChange={(e) => setFeatureValue(parseInt(e.target.value))} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Adjust the income threshold. The algorithm recalculates the optimal node split based on highest information gain.
            </p>
          </div>
        </div>

        {/* Textual Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>How it works</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Decision Trees operate like a flowchart. At each "node", the algorithm asks a Yes/No question about a feature. It continues splitting until it reaches a clear classification.
            </p>
          </div>
          <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-dt)' }}>
            <h4 style={{ color: 'var(--accent-dt)', marginBottom: '0.5rem' }}>Pros</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Highly interpretative and easy to explain.</li>
              <li>Handles missing data well.</li>
              <li>No need for feature scaling.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
            <h4 style={{ color: '#f43f5e', marginBottom: '0.5rem' }}>Cons</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Prone to extreme overfitting.</li>
              <li>Unstable (small data changes cause massive tree tweaks).</li>
            </ul>
          </div>
          <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Formula & Calculation Example</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Gini Impurity:</strong> <code>Gini = 1 - &Sigma;(p<sub>i</sub>)&sup2;</code>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <strong>Calculation:</strong> Given a group with 4 Apples and 2 Oranges (Total 6).<br/>
              Probabilities: <code>p(Apple) = 4/6</code>, <code>p(Orange) = 2/6</code>.<br/>
              <code>Gini = 1 - ((4/6)&sup2; + (2/6)&sup2;) = 1 - (16/36 + 4/36) = 1 - (20/36) = 16/36 &approx; 0.44</code><br/>
              A lower Gini Impurity (closer to 0) implies a purer node split.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)' }}>Best Used For:</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Medical diagnosis rules, Loan approvals, Categorical decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
