import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { kosakataCategories } from '../data/kosakataData';
import { speakJapanese } from '../utils/speech';

export default function Kosakata({ setActiveTab }) {
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

          {/* Categories */}
          {kosakataCategories.map((group, groupIdx) => (
            <details key={groupIdx} className="card mb-3 glow-card" open={groupIdx === 0}>
              <summary className="card-header fw-bold fs-5 d-flex justify-content-between align-items-center py-3 px-4">
                {group.category}
              </summary>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      onClick={() => handleSpeak(item.nihongo)}
                      className={`list-group-item d-flex justify-content-between align-items-center gap-3 py-3 px-4 ${
                        activeWord === item.nihongo ? 'bg-body-secondary' : ''
                      }`}
                      role="button"
                      title="Klik untuk mendengarkan lafal"
                    >
                      <div>
                        <div className="fs-5 fw-bold d-flex align-items-center gap-2">
                          <span className="serif">{item.nihongo}</span>
                          <i className="bi bi-volume-up text-danger small opacity-75"></i>
                        </div>
                        <div className="small text-body-secondary">{item.romaji}</div>
                      </div>
                      <div className="text-end">
                        <div className="fw-semibold">{item.arti}</div>
                        <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle mt-1">
                          {item.tag}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </main>

        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
