import { useState } from 'react';

const initialForm = {
  nihongo: '',
  romaji: '',
  arti: '',
  category: '',
  tag: '',
};

export default function KosakataForm({ onAddKosakata }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddKosakata(form);
    setForm(initialForm);
  };

  return (
    <section className="card mb-4 glow-card">
      <div className="card-body p-4">
        <h2 className="h5 mb-1">Tambah Kosakata</h2>
        <p className="small text-body-secondary mb-3">
          Tambahkan kata atau ungkapan Jepang yang ingin Anda pelajari.
        </p>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label" htmlFor="nihongo">Tulisan Jepang</label>
            <input
              className="form-control"
              id="nihongo"
              name="nihongo"
              onChange={handleChange}
              required
              value={form.nihongo}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="romaji">Romaji</label>
            <input
              className="form-control"
              id="romaji"
              name="romaji"
              onChange={handleChange}
              required
              value={form.romaji}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="arti">Arti</label>
            <input
              className="form-control"
              id="arti"
              name="arti"
              onChange={handleChange}
              required
              value={form.arti}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="category">Kategori</label>
            <input
              className="form-control"
              id="category"
              name="category"
              onChange={handleChange}
              required
              value={form.category}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label" htmlFor="tag">Tag</label>
            <input
              className="form-control"
              id="tag"
              name="tag"
              onChange={handleChange}
              required
              value={form.tag}
            />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-danger" type="submit">
              <i className="bi bi-plus-lg me-2" />
              Tambah
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
