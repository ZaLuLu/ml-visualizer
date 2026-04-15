const { useState, useEffect, useRef } = React;

window.KNNPage = ({ setActiveSection }) => {
  const [kValue, setKValue] = useState(3);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let points = [
      { x: 50, y: 50, class: 0 }, { x: 80, y: 60, class: 0 }, { x: 40, y: 90, class: 0 },
      { x: 200, y: 200, class: 1 }, { x: 220, y: 180, class: 1 }, { x: 250, y: 230, class: 1 },
      { x: 120, y: 180, class: 0 }, { x: 180, y: 100, class: 1 }, { x: 140, y: 50, class: 0 }
    ];
    let newPoint = { x: 160, y: 130 };

    const dist = (p1, p2) => Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2);
    const sorted = [...points].sort((a,b) => dist(newPoint, a) - dist(newPoint, b));
    const neighbors = sorted.slice(0, kValue);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      neighbors.forEach(n => {
        ctx.beginPath();
        ctx.moveTo(newPoint.x, newPoint.y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = "rgba(96, 165, 250, 0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.class === 0 ? "#f43f5e" : "#3b82f6";
        ctx.fill();
      });

      ctx.beginPath();
      ctx.arc(newPoint.x, newPoint.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      
      // Draw reach radius
      const furthestNeighbor = neighbors[neighbors.length - 1];
      if (furthestNeighbor) {
          const r = dist(newPoint, furthestNeighbor);
          ctx.beginPath();
          ctx.arc(newPoint.x, newPoint.y, r, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(96, 165, 250, 0.2)";
          ctx.lineWidth = 1;
          ctx.fillStyle = "rgba(96, 165, 250, 0.05)";
          ctx.fill();
          ctx.stroke();
      }
    };
    render();
  }, [kValue]);

  return (
    <section className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button className="btn" onClick={() => setActiveSection('algorithms')} style={{ marginBottom: '2rem' }}>&larr; Back to Algorithms</button>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <span className="badge bg-knn" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>KNN</span>
        <h2 className="title" style={{ margin: 0, fontSize: '3rem' }}>Spatial Proximity</h2>
      </div>

      <div className="algo-grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        <div className="card">
          <div className="visual-container" style={{ height: '400px' }}>
            <canvas ref={canvasRef} width={400} height={350} />
          </div>
          <div className="controls">
            <div className="control-group">
              <div className="control-label">
                <span>Neighbors (K)</span>
                <span>{kValue}</span>
              </div>
              <input type="range" min="1" max="9" step="2" value={kValue} onChange={(e) => setKValue(parseInt(e.target.value))} />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Increase K to expand the boundary radius. Notice how outliers are ignored when K is larger.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>How it works</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              KNN places a new data point into a spatial plane and measures the distance to all existing points. It checks the 'K' nearest points and assigns the majority class to the new point.
            </p>
          </div>
          <div style={{ background: 'rgba(96, 165, 250, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-knn)' }}>
            <h4 style={{ color: 'var(--accent-knn)', marginBottom: '0.5rem' }}>Pros</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Zero training time ("Lazy learner").</li>
              <li>Updates easily as new data is added.</li>
              <li>Simple geometry-based logic.</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f43f5e' }}>
            <h4 style={{ color: '#f43f5e', marginBottom: '0.5rem' }}>Cons</h4>
            <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
              <li>Very slow during prediction phase (has to measure all distances).</li>
              <li>Struggles with high dimensions (Curse of Dimensionality).</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--text-primary)' }}>Best Used For:</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Recommendation systems, Pattern recognition, Similar document matching.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
