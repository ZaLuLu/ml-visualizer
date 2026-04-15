const { useState, useEffect, useRef } = React;

window.LRPage = ({ setActiveSection }) => {
  const [weight, setWeight] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    const sigmoid = (x) => 1 / (1 + Math.exp(-x));

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw grid
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h/2); ctx.lineTo(w, h/2);
      ctx.moveTo(w/2, 0); ctx.lineTo(w/2, h);
      ctx.stroke();

      // Data points (simulated)
      const points = [
        {x: 1, y: 0.1}, {x: 2, y: 0.15}, {x: 2.5, y: 0.05}, {x: 3.5, y: 0.2}, 
        {x: 6.5, y: 0.9}, {x: 7.5, y: 0.85}, {x: 8, y: 0.95}, {x: 9, y: 0.9}
      ];
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x/10 * w, h - (p.y * h), 5, 0, Math.PI * 2);
        ctx.fillStyle = p.y > 0.5 ? "#fbbf24" : "#64748b";
        ctx.fill();
      });

      // Draw Sigmoid curve
      ctx.beginPath();
      for (let px = 0; px < w; px++) {
        const x = (px - w/2) / (w/10); 
        const yValue = sigmoid(x * 2 - weight);
        const py = h - (yValue * h);
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "#fbbf24";
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    render();
  }, [weight]);

  return (
    <section className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button className="btn" onClick={() => setActiveSection('algorithms')} style={{ marginBottom: '2rem' }}>&larr; Back to Algorithms</button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <span className="badge bg-lr" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>LR</span>
        <h2 className="title" style={{ margin: 0, fontSize: '3rem' }}>Binary Boundaries</h2>
      </div>

      <div className="algo-grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div className="card">
          <div className="visual-container" style={{ height: '400px' }}>
            <canvas ref={canvasRef} width={400} height={350} />
          </div>
          <div className="controls">
            <div className="control-group">
              <div className="control-label">
                <span>Model Bias (Shift)</span>
                <span>{weight}</span>
              </div>
              <input type="range" min="-5" max="5" step="0.5" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Adjusting the bias shifts the Sigmoid curve to better fit the separation between the gray (0) and yellow (1) classes.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>How it works</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Despite having "Regression" in its name, it is a classification algorithm. It maps linear logic through a Sigmoid (S-shaped) function to output a probability strictly bounded between 0 and 1.
            </p>
          </div>
          <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-lr)' }}>
            <h4 style={{ color: 'var(--accent-lr)', marginBottom: '0.5rem' }}>Pros</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Outputs probabilities rather than just hard guesses.</li>
              <li>Very computationally efficient.</li>
              <li>Less prone to overfitting in low dimensions.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
            <h4 style={{ color: '#f43f5e', marginBottom: '0.5rem' }}>Cons</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Cannot solve non-linear problems without severe feature engineering.</li>
              <li>Assumes linear relationship between variables and logs odds.</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)' }}>Best Used For:</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Pass/Fail testing, Fraud detection, Customer churn probability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
