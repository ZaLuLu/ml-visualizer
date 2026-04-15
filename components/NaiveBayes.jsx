const { useState } = React;

window.NBPage = ({ setActiveSection }) => {
  const [spamProb, setSpamProb] = useState(0.5);

  return (
    <section className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button className="btn" onClick={() => setActiveSection('algorithms')} style={{ marginBottom: '2rem' }}>&larr; Back to Algorithms</button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <span className="badge bg-nb" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>NB</span>
        <h2 className="title" style={{ margin: 0, fontSize: '3rem' }}>Probabilistic Math</h2>
      </div>

      <div className="algo-grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div className="card">
          <div className="visual-container" style={{ height: '400px' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 300">
              <g transform="translate(200, 150)">
                <circle cx="0" cy="0" r="100" fill="none" stroke="#cbd5e1" strokeWidth="6" />
                <circle 
                  cx="0" cy="0" r="100" fill="none" stroke="#c084fc" stockewidth="6" strokeDasharray="628" 
                  strokeDashoffset={628 * (1 - spamProb)} strokeLinecap="round" transform="rotate(-90)"
                  style={{ transition: 'stroke-dashoffset 0.5s ease', strokeWidth: '6px' }}
                />
                <text x="0" y="-10" fill="#1e293b" textAnchor="middle" fontSize="36" fontWeight="bold">
                  {Math.round(spamProb * 100)}%
                </text>
                <text x="0" y="20" fill="#94a3b8" textAnchor="middle" fontSize="14">
                  Spam Probability
                </text>
              </g>
            </svg>
          </div>
          <div className="controls">
            <div className="control-group">
              <div className="control-label">
                <span>Occurrence of word: 'Free'</span>
                <span>{Math.round(spamProb * 100)}% Modifier</span>
              </div>
              <input type="range" min="0" max="100" value={spamProb*100} onChange={(e) => setSpamProb(e.target.value/100)} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Increasing the probability of a spam-trigger word independently pushes the overall likelihood mathematically.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>How it works</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Based on Bayes' Theorem, it calculates the probability of an event given prior knowledge. It is called "Naive" because it assumes every feature is completely independent from one another.
            </p>
          </div>
          <div style={{ background: 'rgba(192, 132, 252, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-nb)' }}>
            <h4 style={{ color: 'var(--accent-nb)', marginBottom: '0.5rem' }}>Pros</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Extremely fast and lightweight.</li>
              <li>Performs incredibly well with categorical features.</li>
              <li>Only needs a small amount of training data.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
            <h4 style={{ color: '#f43f5e', marginBottom: '0.5rem' }}>Cons</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>The "Naive" assumption is rarely true in real life (words are often dependent).</li>
              <li>"Zero Frequency" problem if a category is missing in training.</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)' }}>Best Used For:</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Spam filtering, Sentiment analysis, Document categorization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
