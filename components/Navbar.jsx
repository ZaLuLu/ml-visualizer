window.Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        ML Visualized
      </div>
      <div className="nav-links">
        {['home', 'algorithms', 'versus', 'compare'].map((sec) => (
          <a
            key={sec}
            className={`nav-link ${(activeSection === sec || (sec === 'algorithms' && ['dt','knn','nb','lr'].includes(activeSection))) ? 'active' : ''}`}
            onClick={() => setActiveSection(sec)}
            style={{ textTransform: 'capitalize' }}
          >
            {sec}
          </a>
        ))}
      </div>
    </nav>
  );
};
