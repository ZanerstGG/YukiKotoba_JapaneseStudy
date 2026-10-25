import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SakuraCanvas from './components/SakuraCanvas';
import PetaLevel from './pages/PetaLevel';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Kanji from './pages/Kanji';
import Kosakata from './pages/Kosakata';
import Lencana from './pages/Lencana';
import Belajar from './pages/Belajar';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('yuki-theme') || 'light';
  });
  const [activeTab, setActiveTab] = useState('peta');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('yuki-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
      <SakuraCanvas theme={theme} />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="flex-grow-1">
        {activeTab === 'peta' && <PetaLevel setActiveTab={setActiveTab} />}
        {activeTab === 'hiragana' && <Hiragana setActiveTab={setActiveTab} />}
        {activeTab === 'katakana' && <Katakana setActiveTab={setActiveTab} />}
        {activeTab === 'kanji' && <Kanji setActiveTab={setActiveTab} />}
        {activeTab === 'kosakata' && <Kosakata setActiveTab={setActiveTab} />}
        {activeTab === 'lencana' && <Lencana setActiveTab={setActiveTab} />}
        {activeTab === 'belajar' && <Belajar setActiveTab={setActiveTab} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
