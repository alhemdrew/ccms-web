import './styles/App.css';
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AboutPage } from './pages/AboutPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ChildmindersPage } from './pages/ChildmindersPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { InnovationPage } from './pages/InnovationPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { LearningPage } from './pages/LearningPage';
import { LifeAtCuddlesPage } from './pages/LifeAtCuddlesPage';
import { TheCuddlesHallPage } from './pages/TheCuddlesHallPage';
import { AchievementsPage } from './pages/AchievementsPage';

const schoolLinks = [
  { label: 'Cuddles Childminders School', href: '/childminders' },
  { label: 'The Cuddles Hall', href: '/the-cuddles-hall' },
];

const discoveryLinks = [
  { label: 'Life at Cuddles', href: '/life-at-cuddles' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
];

const mainLinks = [
  { label: 'About', href: '/about' },
  { label: 'Learning', href: '/learning' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = window.localStorage.getItem('ccms-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    window.localStorage.setItem('ccms-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <BrowserRouter>
      <div className="page-shell">
        <header className="topbar">
          <div className="container nav-wrap">
            <Link to="/" className="brand-block" aria-label="Cuddles Childminders and Schools brand" onClick={() => setMobileMenuOpen(false)}>
              <span className="brand-mark">
                <img src="/images/logo/ccms.png" alt="Cuddles logo" />
              </span>
              <div>
                <p className="eyebrow small">CUDDLES</p>
                <p className="brand-sub">Childminders & Schools</p>
              </div>
            </Link>

            <nav className="main-nav desktop-nav" aria-label="Main navigation">
              {mainLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="nav-dropdown">
                <button type="button" className="nav-dropdown-trigger" aria-label="Open school routes">
                  Schools <span aria-hidden="true">▾</span>
                </button>
                <div className="nav-dropdown-menu">
                  {schoolLinks.map((item) => (
                    <NavLink key={item.label} to={item.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="nav-dropdown">
                <button type="button" className="nav-dropdown-trigger" aria-label="Open discovery routes">
                  Discover <span aria-hidden="true">▾</span>
                </button>
                <div className="nav-dropdown-menu">
                  {discoveryLinks.map((item) => (
                    <NavLink key={item.label} to={item.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            <div className="header-actions">
              <button
                type="button"
                className="theme-toggle"
                aria-label="Toggle light and dark mode"
                onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
              >
                <span aria-hidden="true">{theme === 'light' ? '☀' : '☾'}</span>
                {theme === 'light' ? 'Light' : 'Dark'}
              </button>
              <Link className="button button-primary" to="/contact">
                Enquire now
              </Link>
            </div>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>

          <div className={mobileMenuOpen ? 'mobile-menu-panel open' : 'mobile-menu-panel'}>
            <div className="container mobile-menu-inner">
              <nav className="mobile-nav" aria-label="Mobile navigation">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                {mainLinks.map((item) => (
                  <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <div className="mobile-subnav">
                  <p>Schools</p>
                  {schoolLinks.map((item) => (
                    <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mobile-subnav">
                  <p>Discover</p>
                  {discoveryLinks.map((item) => (
                    <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="mobile-menu-actions">
                <button
                  type="button"
                  className="theme-toggle mobile-theme-toggle"
                  aria-label="Toggle light and dark mode"
                  onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
                >
                  <span aria-hidden="true">{theme === 'light' ? '☀' : '☾'}</span>
                  {theme === 'light' ? 'Light mode' : 'Dark mode'}
                </button>
                <Link className="button button-primary mobile-cta" to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Enquire now
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/childminders" element={<ChildmindersPage />} />
            <Route path="/the-cuddles-hall" element={<TheCuddlesHallPage />} />
            <Route path="/life-at-cuddles" element={<LifeAtCuddlesPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <p className="eyebrow small">CUDDLES</p>
              <p>Creatively developing a whole child.</p>
            </div>
            <div>
              <Link to="/about">About</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
