import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function PetaLevel({ setActiveTab }) {
  const [openModal, setOpenModal] = useState('level-4');

  const toggleModal = (id) => {
    setOpenModal(openModal === id ? null : id);
  };

  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {/* Hero Unit 1 Banner */}
          <section className="card mb-4 overflow-hidden glow-card border-0 shadow-sm">
            <div className="ratio ratio-21x9 overflow-hidden">
              <img
                className="object-fit-cover card-img-top"
                src="/assets/images/zen_study_banner.jpg"
                alt="Lanskap kuil pagoda dan bunga sakura gaya lukisan tinta"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/zen_study_banner.jpg';
                }}
              />
            </div>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start">
                <div className="small fw-semibold text-body-secondary">
                  ⛩️ Unit 1: Bagian dasar
                </div>
                <span className="display-4 lh-1 text-body-tertiary serif">一</span>
              </div>
              <h1 className="h4 mt-2">Langkah Pertama: Vokal &amp; Konsonan</h1>
              <p className="small text-body-secondary">
                Pelajari dasar 46 karakter Hiragana mulai dari vokal dasar hingga pembentukan kata sederhana sehari-hari.
              </p>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="progress flex-grow-1"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
                </div>
                <span className="small fw-bold text-success">65% Selesai</span>
              </div>
            </div>
          </section>

          {/* Level Path (Duolingo Style Map) */}
          <div className="level-path-container mb-4">
            {/* Level 1 */}
            <div className="level-node-wrapper mb-4 text-center">
              <button
                type="button"
                onClick={() => toggleModal('level-1')}
                className="level-node-button border border-4 border-success bg-success text-white shadow-sm"
                aria-label="Level 1 Vokal Dasar"
              >
                <span className="fs-2 lh-1 serif">あ</span>
                <span className="small">★★★</span>
              </button>
              <div className="small fw-semibold mt-1">1. Vokal Dasar</div>

              {openModal === 'level-1' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-success fw-bold small">Selesai ★★★</span>
                    <h2 className="h4">Level 1 • Vokal Dasar Hiragana</h2>
                    <div className="text-center bg-body-secondary rounded p-3">
                      <div className="display-6 fw-bold serif">あ い う え お</div>
                      <div className="small text-body-secondary">a · i · u · e · o</div>
                    </div>
                    <p className="small mb-0 text-body-secondary">
                      Anda telah menguasai vokal dasar dengan sempurna. Latih kembali memori untuk menjaga ketajaman refleks membaca.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +10 XP Latihan
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-star-fill text-warning me-1" aria-hidden="true"></i> Skor: 100%
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success fw-bold mt-2"
                      onClick={() => setActiveTab('belajar')}
                    >
                      Latih Ulang Level 1
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Level 2 */}
            <div className="level-node-wrapper mb-4 text-center" style={{ transform: 'translateX(-28px)' }}>
              <button
                type="button"
                onClick={() => toggleModal('level-2')}
                className="level-node-button border border-4 border-success bg-success text-white shadow-sm"
                aria-label="Level 2 Baris Ka"
              >
                <span className="fs-2 lh-1 serif">か</span>
                <span className="small">★★★</span>
              </button>
              <div className="small fw-semibold mt-1">2. Baris Ka</div>

              {openModal === 'level-2' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-success fw-bold small">Selesai ★★★</span>
                    <h2 className="h4">Level 2 • Baris Ka &amp; Kosakata</h2>
                    <div className="text-center bg-body-secondary rounded p-3">
                      <div className="display-6 fw-bold serif">か き く け こ</div>
                      <div className="small text-body-secondary">ka · ki · ku · ke · ko</div>
                    </div>
                    <p className="small mb-0 text-body-secondary">
                      Kombinasi konsonan K dengan vokal dasar. Contoh kata: 傘 (kasa - payung), 川 (kawa - sungai).
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +10 XP Latihan
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-star-fill text-warning me-1" aria-hidden="true"></i> Skor: 100%
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success fw-bold mt-2"
                      onClick={() => setActiveTab('belajar')}
                    >
                      Latih Ulang Level 2
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Level 3 */}
            <div className="level-node-wrapper mb-4 text-center" style={{ transform: 'translateX(32px)' }}>
              <button
                type="button"
                onClick={() => toggleModal('level-3')}
                className="level-node-button border border-4 border-success bg-success text-white shadow-sm"
                aria-label="Level 3 Baris Sa"
              >
                <span className="fs-2 lh-1 serif">さ</span>
                <span className="small">★★☆</span>
              </button>
              <div className="small fw-semibold mt-1">3. Baris Sa</div>

              {openModal === 'level-3' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-success fw-bold small">Selesai ★★☆</span>
                    <h2 className="h4">Level 3 • Baris Sa &amp; Pelafalan Khusus</h2>
                    <div className="text-center bg-body-secondary rounded p-3">
                      <div className="display-6 fw-bold serif">さ し す せ そ</div>
                      <div className="small text-body-secondary">sa · shi · su · se · so</div>
                    </div>
                    <p className="small mb-0 text-body-secondary">
                      Perhatikan pelafalan khusus "shi" (bukan "si"). Contoh kata: 魚 (sakana - ikan), 寿司 (sushi).
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +15 XP Sempurnakan
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-star-fill text-warning me-1" aria-hidden="true"></i> Skor: 85%
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success fw-bold mt-2"
                      onClick={() => setActiveTab('belajar')}
                    >
                      Tingkatkan Menjadi ★★★
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Chest Bonus */}
            <div className="level-node-wrapper mb-4 text-center" style={{ transform: 'translateX(-20px)' }}>
              <button
                type="button"
                onClick={() => toggleModal('chest')}
                className="level-node-button border border-4 border-warning bg-warning-subtle text-warning-emphasis shadow-sm"
                aria-label="Peti Koin Mon"
              >
                <span className="fs-2 lh-1">🎁</span>
              </button>
              <div className="small fw-semibold mt-1 text-warning-emphasis">Peti Koin Mon</div>

              {openModal === 'chest' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-center pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2 align-items-center">
                    <div className="display-5">🎁</div>
                    <span className="text-warning-emphasis fw-bold small">Peti Koin Emas Terbuka!</span>
                    <h2 className="h4">Selamat! Anda Menemukan Harta Karun</h2>
                    <p className="small mb-0 text-body-secondary">
                      Sebagai apresiasi ketekunan belajar 14 hari beruntun, Anda memperoleh hadiah khusus!
                    </p>
                    <div className="col-12 bg-warning-subtle border border-warning-subtle text-center rounded p-3">
                      <div className="fs-3 fw-bold text-warning-emphasis">+50 Koin Mon &amp; +30 XP</div>
                      <div className="text-warning-emphasis small">Ditambahkan ke saldo akun Anda!</div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-warning fw-bold w-100"
                      onClick={() => setOpenModal(null)}
                    >
                      Klaim &amp; Lanjutkan Perjalanan
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Level 4 (ACTIVE) */}
            <div className="level-node-wrapper mb-4 text-center">
              <span className="badge text-bg-danger mb-2 d-inline-block px-3 py-1 shadow-sm">
                Lanjutkan! +20 XP
              </span>
              <br />
              <button
                type="button"
                onClick={() => toggleModal('level-4')}
                className="level-node-button border border-4 border-danger bg-danger text-white shadow level-node-pulse"
                aria-label="Level 4 Baris Ta Aktif"
              >
                <span className="fs-2 lh-1 serif">た</span>
              </button>
              <div className="small fw-bold mt-1 text-danger">4. Baris Ta (Aktif)</div>

              {openModal === 'level-4' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card border-danger">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-danger fw-bold small">Pelajaran Aktif Saat Ini</span>
                    <h2 className="h4">Level 4 • Baris Ta &amp; Konsonan Halus</h2>
                    <div className="text-center bg-body-secondary rounded p-3">
                      <div className="text-danger display-6 fw-bold serif">た ち つ て と</div>
                      <div className="small text-body-secondary">ta · chi · tsu · te · to</div>
                    </div>
                    <p className="small mb-0 text-body-secondary">
                      Karakter unik: <strong>chi (ち)</strong> dan <strong>tsu (つ)</strong>. Siap menguji pemahaman dan membuka gerbang checkpoint selanjutnya!
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +20 XP Hadiah
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-coin text-success me-1" aria-hidden="true"></i> +5 Mon
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-fire text-danger me-1" aria-hidden="true"></i> +1 Hari Streak
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger fw-bold mt-2 d-flex align-items-center justify-content-center gap-2"
                      onClick={() => setActiveTab('belajar')}
                    >
                      Mulai Belajar Sekarang <i className="bi bi-pencil-square" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Level 5 */}
            <div className="level-node-wrapper mb-4 text-center" style={{ transform: 'translateX(26px)' }}>
              <button
                type="button"
                onClick={() => toggleModal('level-5')}
                className="level-node-button border border-4 border-success bg-success-subtle text-success-emphasis shadow-sm"
                aria-label="Level 5 Baris Na"
              >
                <span className="fs-2 lh-1 serif">な</span>
              </button>
              <div className="small fw-semibold mt-1">5. Baris Na</div>

              {openModal === 'level-5' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-success fw-bold small">Tersedia</span>
                    <h2 className="h4">Level 5 • Baris Na (なにぬねの)</h2>
                    <div className="text-center bg-body-secondary rounded p-3">
                      <div className="display-6 fw-bold serif">な に ぬ ね の</div>
                      <div className="small text-body-secondary">na · ni · nu · ne · no</div>
                    </div>
                    <p className="small mb-0 text-body-secondary">
                      Karakter penting untuk partikel gramatikal kepemilikan <strong>の (no)</strong> dan kata <strong>何 (nani - apa)</strong>.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +20 XP
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-coin text-success me-1" aria-hidden="true"></i> +5 Mon
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success fw-bold mt-2"
                      onClick={() => setActiveTab('belajar')}
                    >
                      Mulai Pelajaran 5
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Level 6 (Locked) */}
            <div className="level-node-wrapper mb-4 text-center" style={{ transform: 'translateX(-24px)' }}>
              <button
                type="button"
                onClick={() => toggleModal('locked')}
                className="level-node-button border border-4 border-secondary bg-secondary-subtle text-body-secondary shadow-sm"
                aria-label="Level 6 Terkunci"
              >
                <i className="bi bi-lock-fill fs-2 lh-1" aria-hidden="true"></i>
              </button>
              <div className="small fw-semibold mt-1 text-body-secondary">6. Angka 1-10</div>

              {openModal === 'locked' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-center pop-in glow-card">
                  <div className="card-body d-flex flex-column gap-2 align-items-center">
                    <div className="display-5 text-body-secondary">
                      <i className="bi bi-lock-fill" aria-hidden="true"></i>
                    </div>
                    <h2 className="h4">Level Masih Terkunci</h2>
                    <p className="small mb-0 text-body-secondary">
                      Langkah demi langkah adalah filosofi jalan Zen. Selesaikan pelajaran sebelumnya untuk membuka tantangan baru ini!
                    </p>
                    <button
                      type="button"
                      className="btn btn-success fw-bold w-100"
                      onClick={() => setOpenModal('level-4')}
                    >
                      Kerjakan Level Aktif Sekarang
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Checkpoint Torii */}
            <div className="level-node-wrapper mb-4 text-center">
              <button
                type="button"
                onClick={() => toggleModal('torii')}
                className="level-node-button border border-4 border-danger bg-danger-subtle text-danger shadow-sm"
                aria-label="Checkpoint Torii"
              >
                <span className="fs-2 lh-1">⛩️</span>
              </button>
              <div className="small fw-bold mt-1 text-danger">Checkpoint Torii</div>

              {openModal === 'torii' && (
                <div className="card mt-3 col-12 col-md-10 mx-auto text-start pop-in glow-card border-danger">
                  <div className="card-body d-flex flex-column gap-2">
                    <span className="text-danger fw-bold small">Gerbang Kelulusan Unit 1</span>
                    <h2 className="h4">⛩️ Ujian Evaluasi Gerbang Torii</h2>
                    <p className="small mb-0 text-body-secondary">
                      Ujian komprehensif menguji seluruh huruf Hiragana dari Vokal hingga baris Na sebelum Anda diizinkan memasuki Unit 2 (Katakana).
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-trophy text-warning me-1" aria-hidden="true"></i> Lencana Gerbang Kuil
                      </div>
                      <div className="badge bg-body-secondary text-body-emphasis fw-semibold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1" aria-hidden="true"></i> +100 XP
                      </div>
                    </div>
                    <div className="small text-danger bg-danger-subtle p-2 rounded">
                      Selesaikan Level 4 dan Level 5 terlebih dahulu untuk membuka gerbang ini.
                    </div>
                    <button
                      type="button"
                      className="btn btn-success fw-bold"
                      onClick={() => setOpenModal('level-4')}
                    >
                      Selesaikan Level 4 Dulu
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Unit 2 Teaser */}
            <section className="card mb-4 opacity-75 glow-card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="small fw-semibold text-body-secondary">
                    🏯 Unit 2: Kata serapan &amp; modern
                  </div>
                  <span className="display-4 lh-1 text-body-tertiary serif">二</span>
                </div>
                <h2 className="h5 mt-2">Menjelajah Katakana &amp; Nama Benda</h2>
                <p className="small text-body-secondary">
                  Kuasai huruf Katakana untuk membaca menu restoran, nama kota dunia, dan teknologi terkini.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="progress flex-grow-1"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="small fw-semibold text-body-secondary">
                    Terkunci (Selesaikan Unit 1)
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Sidebar */}
        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
