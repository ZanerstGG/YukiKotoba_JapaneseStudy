export default function KosakataList({ activeWord, items, onSpeak }) {
  return (
    <section className="card glow-card">
      <div className="card-header d-flex justify-content-between align-items-center py-3 px-4">
        <h2 className="h5 mb-0">Daftar Kosakata</h2>
        <span className="badge bg-danger-subtle text-danger-emphasis">
          {items.length} kata
        </span>
      </div>
      {items.length === 0 ? (
        <div className="card-body py-5 text-center text-body-secondary">
          <i className="bi bi-journal-x fs-2 d-block mb-2" />
          Belum ada data kosakata.
        </div>
      ) : (
        <ul className="list-group list-group-flush">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => onSpeak(item.nihongo)}
              className={`list-group-item d-flex justify-content-between align-items-center gap-3 py-3 px-4 ${
                activeWord === item.nihongo ? 'bg-body-secondary' : ''
              }`}
              role="button"
              title="Klik untuk mendengarkan lafal"
            >
              <div>
                <div className="fs-5 fw-bold d-flex align-items-center gap-2">
                  <span className="serif">{item.nihongo}</span>
                  <i className="bi bi-volume-up text-danger small opacity-75" />
                </div>
                <div className="small text-body-secondary">{item.romaji}</div>
              </div>
              <div className="text-end">
                <div className="fw-semibold">{item.arti}</div>
                <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle mt-1">
                  {item.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
