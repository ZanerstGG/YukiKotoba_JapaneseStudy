import { useState, useEffect } from 'react';

export default function Header({ activeTab, setActiveTab, theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'peta', label: 'Peta Level', icon: 'bi-map' },
    { id: 'hiragana', label: 'あ Hiragana' },
    { id: 'katakana', label: 'ア Katakana' },
    { id: 'kanji', label: '漢 Kanji Dasar' },
    { id: 'kosakata', label: '語 Kosakata' },
    { id: 'lencana', label: 'Lencana', icon: 'bi-trophy' },
    { id: 'belajar', label: 'Latihan Kuis', icon: 'bi-pencil-square' },
  ];

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <header className={`sticky-top bg-body border-bottom ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container-xl d-flex align-items-center justify-content-between py-2">
        <button
          type="button"
          onClick={() => setActiveTab('peta')}
          className="logo-link d-flex align-items-center gap-2 text-decoration-none text-body border-0 bg-transparent p-0"
          style={{ textAlign: 'left' }}
        >
          <span className="logo-stamp fw-bold fs-4 lh-1 shadow-sm">
            雪
          </span>
          <span className="d-flex flex-column lh-sm">
            <span className="fw-bold fs-4">Yuki</span>
            <span className="small text-body-secondary">Belajar Bahasa Jepang</span>
          </span>
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 d-flex align-items-center gap-2"
          aria-label="Ganti tema"
          title={`Ganti ke tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
        >
          <i className={`bi bi-${theme === 'dark' ? 'sun-fill text-warning' : 'moon-stars-fill'}`}></i>
          <span className="small d-none d-sm-inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>

      <div className="container-xl">
        <ul className="nav nav-pills flex-nowrap overflow-x-auto pb-2 gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-link text-nowrap rounded-pill ${
                    isActive ? 'active bg-danger text-white' : 'text-body'
                  }`}
                >
                  {item.icon && <i className={`bi ${item.icon} me-1`} aria-hidden="true"></i>}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
