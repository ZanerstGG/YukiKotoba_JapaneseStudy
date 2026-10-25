import { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { speakJapanese } from '../utils/speech';

export default function Belajar({ setActiveTab }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [lives, setLives] = useState(4);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = quizQuestions[currentIdx];
  const progressPercent = ((currentIdx + 1) / quizQuestions.length) * 100;

  const handleSelect = (key) => {
    if (isAnswered) return;
    setSelectedOption(key);
    setIsAnswered(true);
    setShowExplanation(true);

    const isCorrect = key === currentQ.correctAnswer;
    if (!isCorrect) {
      setLives((prev) => Math.max(0, prev - 1));
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setIsComplete(false);
    setLives(4);
  };

  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {!isComplete ? (
            <section className="card mb-4 glow-card border-0 shadow-sm">
              <div className="card-body p-4">
                {/* Top header in card */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setActiveTab('peta')}
                    aria-label="Keluar dari latihan"
                    title="Kembali ke Peta Level"
                  ></button>
                  <div
                    className="progress flex-grow-1"
                    role="progressbar"
                    aria-valuenow={progressPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{ width: `${progressPercent}%`, transition: 'width 0.4s ease' }}
                    ></div>
                  </div>
                  <span className="fw-bold d-flex align-items-center gap-1 text-danger">
                    <i className="bi bi-heart-fill" aria-hidden="true"></i>
                    <span>{lives}</span>
                  </span>
                </div>

                <div className="small fw-semibold text-body-secondary">
                  {currentQ.category}
                </div>
                <h2 className="h4 mt-1">{currentQ.question}</h2>

                {/* Question Big Visual */}
                <div
                  className="display-4 text-center my-4 py-3 bg-body-tertiary rounded-4 cursor-pointer serif d-flex align-items-center justify-content-center gap-3"
                  onClick={() => speakJapanese(currentQ.promptVisual)}
                  role="button"
                  title="Klik untuk mendengarkan"
                >
                  <span>{currentQ.promptVisual}</span>
                  <i className="bi bi-volume-up fs-3 text-danger opacity-75"></i>
                </div>

                {/* Options List */}
                <div className={`list-group ${shakeWrong ? 'shake-animation' : ''}`}>
                  {currentQ.options.map((opt) => {
                    let itemClass = 'list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 px-3';

                    if (isAnswered) {
                      if (opt.key === currentQ.correctAnswer) {
                        itemClass += ' list-group-item-success fw-bold';
                      } else if (opt.key === selectedOption) {
                        itemClass += ' list-group-item-danger';
                      } else {
                        itemClass += ' opacity-50';
                      }
                    }

                    return (
                      <label
                        key={opt.key}
                        className={itemClass}
                        style={{ cursor: isAnswered ? 'default' : 'pointer' }}
                      >
                        <input
                          className="form-check-input mt-0"
                          type="radio"
                          name={`q-${currentQ.id}`}
                          checked={selectedOption === opt.key}
                          onChange={() => handleSelect(opt.key)}
                          disabled={isAnswered}
                        />
                        <span className="fs-4 serif">{opt.text}</span>
                        <span className="small text-body-secondary ms-auto">{opt.sub}</span>
                      </label>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                {showExplanation && (
                  <div className="alert alert-success mt-3 mb-0 pop-in border-success-subtle">
                    <div className="fw-bold mb-1">{currentQ.explanationTitle}</div>
                    <div className="small">{currentQ.explanationText}</div>
                  </div>
                )}

                {/* Next Button */}
                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="button"
                    className="btn btn-danger fw-bold px-4"
                    onClick={handleNext}
                    disabled={!isAnswered}
                  >
                    {currentIdx + 1 === quizQuestions.length
                      ? 'Selesaikan Latihan 🏆'
                      : 'Lanjut ke Soal Berikutnya →'}
                  </button>
                </div>
              </div>
            </section>
          ) : (
            /* Complete Screen */
            <section className="card mb-4 glow-card border-0 shadow-sm">
              <div className="card-body p-5 text-center d-flex flex-column align-items-center gap-3">
                <div className="display-4 text-warning">🌸</div>
                <span className="text-warning-emphasis fw-bold small">Latihan Selesai!</span>
                <h1 className="h3">Selamat, Izzan!</h1>
                <p className="small text-body-secondary mb-0" style={{ maxWidth: '500px' }}>
                  Anda telah menuntaskan seluruh latihan dengan fokus penuh. Jalan ketekunan Anda membawa hasil nyata!
                </p>

                <div className="d-flex gap-3 col-12 my-3 flex-column flex-sm-row">
                  <div className="bg-warning-subtle border border-warning-subtle p-3 rounded-4 flex-fill text-center">
                    <div className="fs-4 fw-bold text-warning-emphasis">+35 XP</div>
                    <div className="small text-body-secondary fw-bold">PENGALAMAN</div>
                  </div>
                  <div className="bg-danger-subtle border border-danger-subtle p-3 rounded-4 flex-fill text-center">
                    <div className="fs-4 fw-bold text-danger">14 Hari</div>
                    <div className="small text-body-secondary fw-bold">
                      STREAK AMAN <i className="bi bi-fire" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="bg-success-subtle border border-success-subtle p-3 rounded-4 flex-fill text-center">
                    <div className="fs-4 fw-bold text-success">
                      {lives === 4 ? '100%' : `${Math.round((lives / 4) * 100)}%`}
                    </div>
                    <div className="small text-body-secondary fw-bold">AKURASI</div>
                  </div>
                </div>

                <div className="d-flex gap-3 col-12 justify-content-center flex-wrap mt-2">
                  <button
                    type="button"
                    className="btn btn-danger fw-bold flex-fill py-2"
                    onClick={() => setActiveTab('peta')}
                  >
                    Kembali ke Peta Level <i className="bi bi-map ms-1" aria-hidden="true"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary fw-bold flex-fill py-2"
                    onClick={handleRestart}
                  >
                    Latih Ulang ↻
                  </button>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* Sidebar */}
        <aside className="col-lg-4">
          <div className="card mb-3 glow-card">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <span className="border border-2 border-danger rounded-circle text-danger fs-4 lh-1 p-2 bg-danger-subtle">
                  練
                </span>
                <div>
                  <div className="fw-bold">Mode Tantangan Kuis</div>
                  <div className="small text-body-secondary">
                    Target: {quizQuestions.length} Soal Selesai
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between small mt-3 align-items-center">
                <span>
                  <i className="bi bi-fire text-danger" aria-hidden="true"></i> 14 Hari
                </span>
                <span>
                  {[...Array(lives)].map((_, i) => (
                    <i key={i} className="bi bi-heart-fill text-danger me-1" aria-hidden="true"></i>
                  ))}
                  {[...Array(Math.max(0, 4 - lives))].map((_, i) => (
                    <i key={`empty-${i}`} className="bi bi-heart text-body-secondary me-1" aria-hidden="true"></i>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <div className="badge rounded-pill fs-6 text-bg-danger d-flex align-items-center gap-1 py-2 px-3">
              <i className="bi bi-fire" aria-hidden="true"></i> 14 Hari
            </div>
            <div className="badge rounded-pill fs-6 text-bg-warning text-dark d-flex align-items-center gap-1 py-2 px-3">
              <i className="bi bi-lightning-charge-fill" aria-hidden="true"></i> 1,420 XP
            </div>
            <div className="badge rounded-pill fs-6 text-bg-success d-flex align-items-center gap-1 py-2 px-3">
              <i className="bi bi-coin" aria-hidden="true"></i> 85 Mon
            </div>
          </div>

          <div className="card card-body gap-2 mb-3 glow-card">
            <h3 className="h6 mb-0 d-flex align-items-center gap-2">
              🥋 Falsafah Kaizen (改善)
            </h3>
            <p className="small mb-0 text-body-secondary">
              &quot;Kaizen&quot; berarti perbaikan bertahap dan konsisten setiap hari. Sedikit latihan setiap hari mengalahkan belajar maraton dalam semalam.
            </p>
          </div>

          <div className="card card-body gap-2 mb-3 glow-card">
            <h3 className="h6 mb-0 d-flex align-items-center gap-2">
              <i className="bi bi-heart-fill text-danger" aria-hidden="true"></i> Sistem Nyawa Hati
            </h3>
            <p className="small mb-0 text-body-secondary">
              Jangan takut membuat kesalahan! Kesalahan adalah guru terbaik. Nyawa Anda akan pulih kembali seiring waktu istirahat atau mengulang pelajaran terdahulu.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
