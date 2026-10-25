import { speakJapanese } from '../utils/speech';

export default function Sidebar({ setActiveTab, lives = 4 }) {
  return (
    <aside className="col-lg-4">
      {/* Profile Card */}
      <div className="card mb-3 glow-card">
        <div className="card-body">
          <div className="d-flex align-items-center gap-3">
            <span className="border border-2 border-danger rounded-circle text-danger fs-4 lh-1 p-2 bg-danger-subtle">
              健
            </span>
            <div>
              <div className="fw-bold">Izzan (あなた)</div>
              <div className="small text-body-secondary">Murid Tingkat IV • 剣士</div>
            </div>
          </div>
          <div className="d-flex justify-content-between small mt-3 align-items-center">
            <span>
              <i className="bi bi-fire text-danger" aria-hidden="true"></i> 14 Hari Beruntun
            </span>
            <span>
              {[...Array(lives)].map((_, i) => (
                <i key={i} className="bi bi-heart-fill text-danger me-1" aria-hidden="true"></i>
              ))}
              {[...Array(Math.max(0, 5 - lives))].map((_, i) => (
                <i key={`empty-${i}`} className="bi bi-heart text-body-secondary me-1" aria-hidden="true"></i>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Badges */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        <div className="badge rounded-pill fs-6 text-bg-danger d-flex align-items-center gap-1 py-2 px-3 shadow-sm">
          <i className="bi bi-fire" aria-hidden="true"></i>
          <span>14 Hari</span>
        </div>
        <div className="badge rounded-pill fs-6 text-bg-warning text-dark d-flex align-items-center gap-1 py-2 px-3 shadow-sm">
          <i className="bi bi-lightning-charge-fill" aria-hidden="true"></i>
          <span>1,420 XP</span>
        </div>
        <div className="badge rounded-pill fs-6 text-bg-success d-flex align-items-center gap-1 py-2 px-3 shadow-sm">
          <i className="bi bi-coin" aria-hidden="true"></i>
          <span>85 Mon</span>
        </div>
      </div>

      {/* Target Harian */}
      <div className="card card-body gap-2 mb-3 glow-card">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h6 mb-0 d-flex align-items-center gap-2">
            <i className="bi bi-bullseye text-danger" aria-hidden="true"></i> Target Harian
          </h3>
          <span className="badge bg-body-secondary text-body">30 / 50 XP</span>
        </div>
        <div>
          <div className="d-flex justify-content-between small mb-1">
            <span>Progres Target</span>
            <span className="fw-bold">60%</span>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: '60%' }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2 small text-success align-items-center">
              <span className="fw-bold">✓</span>
              <span>Selesaikan 1 pelajaran baru (+15 XP)</span>
            </div>
            <div className="d-flex gap-2 small text-body-secondary align-items-center">
              <span className="fw-bold">○</span>
              <span>Raih akurasi 90% di kuis (+15 XP)</span>
            </div>
            <div className="d-flex gap-2 small text-success align-items-center">
              <span className="fw-bold">✓</span>
              <span>Klaim bonus peti harian (+10 XP)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Liga Sakura */}
      <div className="card card-body gap-2 mb-3 glow-card">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h6 mb-0 d-flex align-items-center gap-2">
            <i className="bi bi-flower1 text-danger" aria-hidden="true"></i> Liga Sakura
          </h3>
          <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
            Sisa 3 Hari
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between py-1 border-bottom">
            <div className="d-flex gap-2">
              <span className="text-body-secondary fw-bold">1</span>
              <span>Akbar Ivanka</span>
            </div>
            <span className="small text-body-secondary">1,680 XP</span>
          </div>
          <div className="d-flex justify-content-between py-1 border-bottom fw-bold text-success bg-success-subtle px-2 rounded">
            <div className="d-flex gap-2">
              <span className="text-success">2</span>
              <span>Izzan (Anda)</span>
            </div>
            <span className="small text-success">1,420 XP</span>
          </div>
          <div className="d-flex justify-content-between py-1 border-bottom">
            <div className="d-flex gap-2">
              <span className="text-body-secondary fw-bold">3</span>
              <span>Surya Pradipta</span>
            </div>
            <span className="small text-body-secondary">1,390 XP</span>
          </div>
          <div className="d-flex justify-content-between py-1 border-bottom">
            <div className="d-flex gap-2">
              <span className="text-body-secondary fw-bold">4</span>
              <span>Danang Kumala</span>
            </div>
            <span className="small text-body-secondary">1,150 XP</span>
          </div>
        </div>
        <span className="small text-success fw-bold text-center mt-1">
          <i className="bi bi-arrow-up-circle me-1" aria-hidden="true"></i>
          Anda berada di zona promosi ke Liga Bambu Emas!
        </span>
      </div>

      {/* Kata Hari Ini */}
      <div className="card card-body gap-2 mb-3 glow-card">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h6 mb-0 d-flex align-items-center gap-2">
            <i className="bi bi-feather text-primary" aria-hidden="true"></i> Kata Hari Ini
          </h3>
          <span className="small fw-bold text-body-secondary">Jepang Estetik</span>
        </div>
        <div className="d-flex flex-column gap-2">
          <div
            className="d-flex align-items-center justify-content-between cursor-pointer"
            onClick={() => speakJapanese('木漏れ日')}
            role="button"
            title="Klik untuk mendengarkan lafal"
          >
            <div className="display-6 text-danger serif">木漏れ日</div>
            <i className="bi bi-volume-up fs-4 text-danger opacity-75"></i>
          </div>
          <div className="fw-semibold">Komorebi (こもれび)</div>
          <p className="mb-0 small text-body-secondary">
            Fenomena puitis ketika sinar matahari menyaring lembut menembus celah dedaunan pohon yang rindang.
          </p>
          <div className="small bg-body-secondary rounded p-2">
            <strong>Contoh Kalimat:</strong>
            <br />
            森を歩くと、美しい木漏れ日が差し込んでいた。
            <br />
            <em className="text-body-secondary">
              (Saat berjalan di hutan, sinar komorebi yang indah terpancar.)
            </em>
          </div>
        </div>
      </div>

      {/* Lencana Preview */}
      <div className="card card-body gap-2 mb-3 glow-card">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="h6 mb-0 d-flex align-items-center gap-2">
            <i className="bi bi-award text-warning" aria-hidden="true"></i> Lencana Terbaru
          </h3>
          <button
            type="button"
            className="btn btn-link small fw-bold text-success p-0 text-decoration-none"
            onClick={() => setActiveTab('lencana')}
          >
            Lihat Semua →
          </button>
        </div>
        <div className="d-flex gap-3 align-items-center pt-2">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle border fs-4 p-2 bg-danger-subtle text-danger"
            style={{ width: 44, height: 44 }}
            title="Bunga Sakura Pertama"
          >
            🌸
          </div>
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle border fs-4 p-2 bg-success-subtle text-success serif"
            style={{ width: 44, height: 44 }}
            title="Master Kuas Hiragana"
          >
            筆
          </div>
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle border fs-4 p-2 bg-warning-subtle text-warning-emphasis"
            style={{ width: 44, height: 44 }}
            title="Disiplin Samurai 14 Hari"
          >
            ⚔️
          </div>
        </div>
      </div>
    </aside>
  );
}
