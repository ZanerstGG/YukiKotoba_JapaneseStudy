import Sidebar from '../components/Sidebar';
import { lencanaList } from '../data/lencanaData';

export default function Lencana({ setActiveTab }) {
  return (
    <div className="container-xl py-4">
      <div className="row g-4">
        <main className="col-lg-8">
          {/* Header Card */}
          <section className="card mb-4 overflow-hidden glow-card border-0 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center gap-3 p-4">
              <div>
                <h1 className="h3">Dinding Kehormatan &amp; Lencana (勲章)</h1>
                <p className="text-body-secondary mb-0">
                  Setiap lencana melambangkan dedikasi, kedisiplinan, dan langkah nyata Anda dalam menapaki jalan penguasaan bahasa Jepang.
                </p>
              </div>
              <span className="display-3 text-danger serif">誉</span>
            </div>
          </section>

          {/* Badges Grid */}
          <div className="row row-cols-1 row-cols-md-2 g-3 mb-4">
            {lencanaList.map((badge, idx) => (
              <div key={idx} className="col">
                <div
                  className={`card h-100 glow-card ${
                    badge.isUnlocked ? 'border-success-subtle shadow-sm' : 'opacity-75'
                  }`}
                >
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        className={`d-inline-flex align-items-center justify-content-center rounded-circle border fs-4 p-2 ${badge.badgeColor}`}
                        style={{ width: 48, height: 48 }}
                      >
                        {badge.icon}
                      </div>
                      <div>
                        <h3 className="h6 mb-0">{badge.title}</h3>
                        <span
                          className={`small fw-semibold d-block ${
                            badge.isUnlocked ? 'text-success' : 'text-body-secondary'
                          }`}
                        >
                          {badge.status}
                        </span>
                      </div>
                    </div>
                    <p className="mb-0 small text-body-secondary mt-1">{badge.desc}</p>
                    {badge.progress !== undefined ? (
                      <div className="mt-2">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${badge.progress}%` }}
                            aria-valuenow={badge.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div className="small fw-bold text-warning-emphasis mt-auto pt-2 border-top">
                        {badge.reward}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Sidebar setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
