const { useState } = React;

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container">
      <window.Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <window.HeroSection setActiveSection={setActiveSection} />}
      {activeSection === 'algorithms' && <window.AlgorithmsGrid setActiveSection={setActiveSection} />}
      {activeSection === 'dt' && <window.DecisionTreePage setActiveSection={setActiveSection} />}
      {activeSection === 'knn' && <window.KNNPage setActiveSection={setActiveSection} />}
      {activeSection === 'nb' && <window.NBPage setActiveSection={setActiveSection} />}
      {activeSection === 'lr' && <window.LRPage setActiveSection={setActiveSection} />}
      {activeSection === 'versus' && <window.VersusShowdown />}
      {activeSection === 'compare' && <window.CompareSection />}
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
