import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [isToggleMode, setIsToggleMode] = useState(false);

  const toggleMenu = () => {
    setIsToggleMode(!isToggleMode);
  };

  useEffect(() => {
    function checkToggleMode() {
      if (window.innerWidth <= 799 && window.innerWidth >= 400) {
        setIsToggleMode(false);
      } else {
        setIsToggleMode(false);
      }
    }

    checkToggleMode();
    window.addEventListener('resize', checkToggleMode);

    return () => {
      window.removeEventListener('resize', checkToggleMode);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className={`container ${isToggleMode ? 'darken-background' : ''}`}>
        <nav className="nav-bar">
          <div className="website-logo">
            <div className="menu-icon"></div>
            <h1 className="website-title">My Website</h1>
            <div className="toggle-menu-icon" onClick={toggleMenu}></div>
          </div>
          <div className={`menu-links-container ${isToggleMode ? 'active' : ''}`}>
            <div className="nav-links">
              <div className="menu-option"></div>
              <div className="menu-option"><a href="#home">Home</a></div>
              <div className="menu-option"><a href="#portfolio">Portfolio</a></div>
              <div className="menu-option"><a href="#blog">Blog</a></div>
              <div className="menu-option"><a href="#about">About Me</a></div>
              <div className="menu-option"><a href="#contact">Contact Me</a></div>
            </div>
          </div>
        </nav>
        <div className="first-section">
          <div className="welcome-text">
            <h1>Welcome to Responsive Web Design</h1>
            <p>Hello. Something about me. More talking that is really interesting. Hope you like the website. Really impress them. Blah blah blah. Don’t forget a picture, even if its an avatar and not a real life photo. Short but with enough content to draw them in.</p>
          </div>
          <div className="welcome-image"></div>
        </div>
        <section className="projects-section">
          <h2>My current projects</h2>
          <div className="projects-line"></div>
          <div className="parent-container">
            <div className="project-container">
              {/* 5 image box placeholders */}
              {Array(5).fill().map((_, i) => (
                <div className="project" key={i}></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
