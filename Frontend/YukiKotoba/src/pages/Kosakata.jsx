import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import KosakataForm from '../components/KosakataForm';
import KosakataList from '../components/KosakataList';
import { speakJapanese } from '../utils/speech';

export default function Kosakata({ kosakata, onAddKosakata, setActiveTab }) {
  const [activeWord, setActiveWord] = useState(null);

  const handleSpeak = (nihongo) => {
    setActiveWord(nihongo);
    speakJapanese(nihongo);
    setTimeout(() => setActiveWord(null), 500);
  };

  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {/* Header Card */}
          <section className="card mb-4 overflow-hidden glow-card border-0 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center gap-3 p-4">
              <div>
                <h1 className="h3">Kosakata &amp; Ungkapan (言葉)</h1>
                <p className="text-body-secondary mb-0">
                  Ungkapan praktis dan tata krama esensial yang langsung dapat Anda gunakan saat bertegur sapa, memesan makanan, atau bepergian.
                </p>
              </div>
              <span className="display-3 text-danger serif">語</span>
            </div>
          </section>

          <KosakataForm onAddKosakata={onAddKosakata} />

          <KosakataList
            activeWord={activeWord}
            items={kosakata}
            onSpeak={handleSpeak}
          />
        </main>

        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
