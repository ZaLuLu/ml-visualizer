window.CompareSection = () => {
  return (
    <section id="compare" className="fade-in" style={{ paddingTop: '8rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <h2 className="title" style={{ fontSize: '3rem' }}>How They Think</h2>
      <p className="subtitle" style={{ marginBottom: '3rem', maxWidth: '800px' }}>
        Let's look at a predefined example: <strong>Predicting whether a user will purchase a Laptop</strong> based on their Salary (Y-axis) and Age (X-axis). Below is exactly how each algorithm mentally maps out its decision boundary.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
        {/* DT Compare panel */}
        <div className="card" style={{ padding: '1.5rem' }}>
           <h4 className="text-dt" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="badge bg-dt">DT</span> Decision Tree</h4>
           <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>Cuts the graph into blocky, harsh vertical & horizontal rectangular regions based on rigid threshold "splits".</p>
           <div style={{ height: '200px', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
              {/* Fake scatter + blocks */}
              <div style={{ position: 'absolute', top: 0, left: '50%', right: 0, bottom: '40%', background: 'rgba(52, 211, 153, 0.2)' }}></div>
              <div style={{ position: 'absolute', top: '60%', left: 0, right: '50%', bottom: 0, background: 'rgba(244, 63, 94, 0.2)' }}></div>
              <div style={{ position: 'absolute', borderLeft: '2px solid #34d399', height: '100%', left: '50%' }}></div>
              <div style={{ position: 'absolute', borderTop: '2px solid #34d399', width: '50%', right: 0, top: '60%' }}></div>
              <div style={{ position: 'absolute', borderTop: '2px dashed #f43f5e', width: '50%', left: 0, top: '60%' }}></div>
           </div>
        </div>

        {/* KNN Compare panel */}
        <div className="card" style={{ padding: '1.5rem' }}>
           <h4 className="text-knn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="badge bg-knn">KNN</span> K-Nearest Neighbors</h4>
           <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>Forms highly irregular, bubbling, fluid boundaries wrapping tightly around local point clusters.</p>
           <div style={{ height: '200px', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <svg width="100%" height="100%">
               <path d="M 150 100 C 120 150, 200 180, 250 100 C 300 20, 180 50, 150 100 Z" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" strokeWidth="2" />
               <circle cx="150" cy="100" r="5" fill="#60a5fa" />
               <circle cx="200" cy="120" r="5" fill="#60a5fa" />
               <circle cx="220" cy="80" r="5" fill="#60a5fa" />
               <circle cx="100" cy="150" r="5" fill="#f43f5e" />
               <circle cx="80" cy="80" r="5" fill="#f43f5e" />
             </svg>
           </div>
        </div>

        {/* NB Compare panel */}
        <div className="card" style={{ padding: '1.5rem' }}>
           <h4 className="text-nb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="badge bg-nb">NB</span> Naive Bayes</h4>
           <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>Generates smooth, sweeping probabilistic contour gradients radiating outward algebraically from the class centers.</p>
           <div style={{ height: '200px', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', width: '200%', height: '200%', top: '-50%', left: '-50%', background: 'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, rgba(255, 255, 255, 0) 50%)' }}></div>
             <div style={{ position: 'absolute', width: '200%', height: '200%', top: '-50%', left: '-50%', background: 'radial-gradient(circle at 30% 70%, rgba(244, 63, 94, 0.4) 0%, rgba(255, 255, 255, 0) 50%)' }}></div>
           </div>
        </div>

        {/* LR Compare panel */}
        <div className="card" style={{ padding: '1.5rem' }}>
           <h4 className="text-lr" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span className="badge bg-lr">LR</span> Logistic Regression</h4>
           <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>Forces a rigid, perfectly straight line through the data space slicing the probability plane in two.</p>
           <div style={{ height: '200px', background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 49%, rgba(251, 191, 36, 0.8) 50%, rgba(251, 191, 36, 0.1) 51%)' }}></div>
           </div>
        </div>
      </div>

      <div className="card" style={{ width: '100%' }}>
         <table style={{ minWidth: '100%' }}>
           <thead>
             <tr>
               <th>Model Snapshot</th>
               <th>Linearity</th>
               <th>Performance Cost</th>
               <th>Interpretability</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="text-dt" style={{ fontWeight: '600' }}>Decision Tree</td>
               <td>Non-Linear</td>
               <td>Very Fast execution</td>
               <td>Highest - Reads like rules</td>
             </tr>
             <tr>
               <td className="text-knn" style={{ fontWeight: '600' }}>KNN</td>
               <td>Non-Linear</td>
               <td>Slow - Measures all points</td>
               <td>High - visual distance</td>
             </tr>
             <tr>
               <td className="text-nb" style={{ fontWeight: '600' }}>Naive Bayes</td>
               <td>Linear typically</td>
               <td>Fastest - pure math</td>
               <td>Medium - ignores relation</td>
             </tr>
             <tr>
               <td className="text-lr" style={{ fontWeight: '600' }}>Logistic Reg.</td>
               <td>Strictly Linear</td>
               <td>Fast execution</td>
               <td>High - outputs clear %</td>
             </tr>
           </tbody>
         </table>
      </div>
    </section>
  );
};
