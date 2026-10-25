import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { hiraganaGojuon, hiraganaDakuon, hiraganaYoon } from '../data/hiraganaData';
import { speakJapanese } from '../utils/speech';

export default function Hiragana({ setActiveTab }) {
  const [playingKana, setPlayingKana] = useState(null);

  const handleSpeak = (kana) => {
    if (kana === '-') return;
    setPlayingKana(kana);
    speakJapanese(kana);
    setTimeout(() => setPlayingKana(null), 400);
  };

  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {/* Header Card */}
          <section className="card mb-4 overflow-hidden glow-card border-0 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center gap-3 p-4">
              <div>
                <h1 className="h3">Bagan Lengkap Hiragana (平仮名)</h1>
                <p className="text-body-secondary mb-0">
                  Huruf fonetik asli Jepang yang digunakan untuk partikel, kata asli, dan akhiran kata kerja (okurigana).
                </p>
              </div>
              <span className="display-3 text-danger serif">あ</span>
            </div>
          </section>

          {/* Gojuon Accordion */}
          <details className="card mb-3 glow-card" open>
            <summary className="card-header fw-bold fs-5 d-flex justify-content-between align-items-center py-3 px-4">
              Gojuon (46 Huruf Dasar)
            </summary>
            <div className="card-body p-3">
              <div className="row row-cols-3 row-cols-sm-4 row-cols-md-5 g-2">
                {hiraganaGojuon.map((item, idx) => {
                  const isBlank = item.kana === '-';
                  return (
                    <div key={idx} className="col">
                      <div
                        onClick={() => handleSpeak(item.kana)}
                        className={`card h-100 text-center border-0 bg-body-tertiary kana-card ${
                          isBlank ? 'opacity-25 pe-none' : ''
                        } ${playingKana === item.kana ? 'border-danger' : ''}`}
                        title={isBlank ? '' : `Dengarkan pelafalan ${item.kana}`}
                      >
                        <div className="card-body py-3 px-2 position-relative">
                          {!isBlank && (
                            <i className="bi bi-volume-up position-absolute top-0 end-0 m-2 small text-body-secondary speaker-icon" aria-hidden="true"></i>
                          )}
                          <div className={`fs-2 ${playingKana === item.kana ? 'text-danger' : ''}`}>
                            {item.kana}
                          </div>
                          <div className="small fw-semibold text-danger">{item.romaji}</div>
                          {item.example && (
                            <div className="small text-body-secondary text-truncate">
                              {item.example}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </details>

          {/* Dakuon & Handakuon */}
          <details className="card mb-3 glow-card">
            <summary className="card-header fw-bold fs-5 d-flex justify-content-between align-items-center py-3 px-4">
              Dakuon &amp; Handakuon (Teng-teng &amp; Maru)
            </summary>
            <div className="card-body p-3">
              <div className="row row-cols-3 row-cols-sm-4 row-cols-md-5 g-2">
                {hiraganaDakuon.map((item, idx) => (
                  <div key={idx} className="col">
                    <div
                      onClick={() => handleSpeak(item.kana)}
                      className={`card h-100 text-center border-0 bg-body-tertiary kana-card ${
                        playingKana === item.kana ? 'border-danger' : ''
                      }`}
                      title={`Dengarkan pelafalan ${item.kana}`}
                    >
                      <div className="card-body py-3 px-2 position-relative">
                        <i className="bi bi-volume-up position-absolute top-0 end-0 m-2 small text-body-secondary speaker-icon" aria-hidden="true"></i>
                        <div className="fs-2">{item.kana}</div>
                        <div className="small fw-semibold text-danger">{item.romaji}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* Yoon */}
          <details className="card mb-3 glow-card">
            <summary className="card-header fw-bold fs-5 d-flex justify-content-between align-items-center py-3 px-4">
              Yoon (Gabungan Ya, Yu, Yo)
            </summary>
            <div className="card-body p-3">
              <div className="row row-cols-3 row-cols-sm-4 row-cols-md-5 g-2">
                {hiraganaYoon.map((item, idx) => (
                  <div key={idx} className="col">
                    <div
                      onClick={() => handleSpeak(item.kana)}
                      className={`card h-100 text-center border-0 bg-body-tertiary kana-card ${
                        playingKana === item.kana ? 'border-danger' : ''
                      }`}
                      title={`Dengarkan pelafalan ${item.kana}`}
                    >
                      <div className="card-body py-3 px-2 position-relative">
                        <i className="bi bi-volume-up position-absolute top-0 end-0 m-2 small text-body-secondary speaker-icon" aria-hidden="true"></i>
                        <div className="fs-2">{item.kana}</div>
                        <div className="small fw-semibold text-danger">{item.romaji}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {/* Quiz CTA */}
          <div className="bg-body p-3 rounded border d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 shadow-sm mt-4">
            <div>
              <h3 className="h6 mb-1">Sudah Siap Menguji Ingatan?</h3>
              <p className="small text-body-secondary mb-0">
                Uji pemahaman huruf Hiragana Anda lewat kuis interaktif dan raih +30 XP.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-danger fw-bold text-nowrap d-flex align-items-center gap-2 justify-content-center"
              onClick={() => setActiveTab('belajar')}
            >
              Mulai Kuis Hiragana <i className="bi bi-lightning-charge-fill" aria-hidden="true"></i>
            </button>
          </div>
        </main>

        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
