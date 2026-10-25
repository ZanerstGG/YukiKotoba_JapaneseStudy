import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { kanjiCategories } from '../data/kanjiData';
import { speakJapanese } from '../utils/speech';

export default function Kanji({ setActiveTab }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (kanji) => {
    setFlippedCards((prev) => ({
      ...prev,
      [kanji]: !prev[kanji],
    }));
  };

  const handleSpeak = (e, text) => {
    e.stopPropagation();
    speakJapanese(text);
  };

  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {/* Header Card */}
          <section className="card mb-4 overflow-hidden glow-card border-0 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center gap-3 p-4">
              <div>
                <h1 className="h3">Koleksi Kanji Dasar (漢字)</h1>
                <p className="text-body-secondary mb-0">
                  Sentuh atau klik kartu Kanji untuk membalik (3D flip) dan melihat On&apos;yomi, Kun&apos;yomi, jumlah goresan, serta contoh kata.
                </p>
              </div>
              <span className="display-3 text-danger serif">漢</span>
            </div>
          </section>

          {/* Kanji Categories */}
          {kanjiCategories.map((group, groupIdx) => (
            <details key={groupIdx} className="card mb-4 glow-card" open={groupIdx === 0}>
              <summary className="card-header fw-bold fs-5 d-flex justify-content-between align-items-center py-3 px-4">
                {group.category}
              </summary>
              <div className="card-body p-3">
                <div className="row row-cols-1 row-cols-sm-2 g-3">
                  {group.items.map((item, itemIdx) => {
                    const isFlipped = !!flippedCards[item.kanji];
                    return (
                      <div key={itemIdx} className="col">
                        <div
                          className={`card h-100 flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
                          onClick={() => toggleFlip(item.kanji)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleFlip(item.kanji);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-pressed={isFlipped}
                          aria-label={`Balik kartu ${item.kanji}`}
                        >
                          <div className="flip-card-inner">
                            {/* Front Face */}
                            <div className="flip-card-front card-body d-flex flex-column align-items-center justify-content-center text-center gap-1 py-4 bg-body border rounded-4 shadow-sm">
                              <span className="kanji-besar text-danger lh-1 serif">
                                {item.kanji}
                              </span>
                              <span className="fw-semibold fs-5">{item.arti}</span>
                              <div className="d-flex align-items-center gap-2 mt-2">
                                <button
                                  type="button"
                                  onClick={(e) => handleSpeak(e, item.kanji)}
                                  className="btn btn-sm btn-outline-danger rounded-pill px-2 py-0"
                                  title="Dengarkan pelafalan"
                                >
                                  <i className="bi bi-volume-up me-1"></i> Suara
                                </button>
                                <span className="small text-body-secondary">
                                  <i className="bi bi-arrow-repeat"></i> Balik kartu
                                </span>
                              </div>
                            </div>

                            {/* Back Face */}
                            <div className="flip-card-back card-body d-flex flex-column justify-content-center gap-2 p-3 bg-body border rounded-4 text-start shadow-sm">
                              <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                                <div className="d-flex align-items-center gap-2">
                                  <span className="fs-1 text-danger lh-1 serif">
                                    {item.kanji}
                                  </span>
                                  <span className="fw-bold">{item.arti}</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => handleSpeak(e, item.kanji)}
                                  className="btn btn-sm btn-outline-danger rounded-circle p-1 lh-1"
                                  title="Dengarkan pelafalan"
                                >
                                  <i className="bi bi-volume-up fs-5"></i>
                                </button>
                              </div>
                              <div className="d-flex flex-column gap-1 small mt-1">
                                <div>
                                  <span className="text-body-secondary fw-semibold">On&apos;yomi: </span>
                                  <span>{item.onyomi}</span>
                                </div>
                                <div>
                                  <span className="text-body-secondary fw-semibold">Kun&apos;yomi: </span>
                                  <span>{item.kunyomi}</span>
                                </div>
                                <div>
                                  <span className="text-body-secondary fw-semibold">Goresan: </span>
                                  <span>{item.goresan}</span>
                                </div>
                                <div className="mt-1 pt-1 border-top">
                                  <span className="text-body-secondary fw-semibold">Contoh: </span>
                                  <span className="text-success-emphasis">{item.contoh}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </details>
          ))}
        </main>

        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
