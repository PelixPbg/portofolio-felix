import { useState, useEffect } from "react";
import { Plus, Save, X } from "lucide-react";

const ExperienceForm = ({ onSave, editData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "", type: "Ekstrakurikuler", year: "", desc: ""
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData({ title: "", type: "Ekstrakurikuler", year: "", desc: "" });
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.year || !formData.desc) return alert("Mohon isi semua field!");
    onSave(formData);
    setFormData({ title: "", type: "Ekstrakurikuler", year: "", desc: "" });
  };

  return (
    <form className="exp-form glass-panel" onSubmit={handleSubmit}>
      <div className="exp-form-header">
        <div className="exp-form-indicator" />
        <h3 className="exp-form-title">
          {editData ? "Edit Pengalaman" : "Tambah Pengalaman"}
        </h3>
      </div>

      <div className="form-group">
        <label>Judul Kegiatan</label>
        <input
          type="text"
          placeholder="Contoh: Juara 1 Web Design LKS"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Jenis</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="Ekstrakurikuler">Ekstrakurikuler</option>
            <option value="Lomba">Lomba</option>
            <option value="PKL">PKL</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Sertifikat">Sertifikat</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tahun</label>
          <input
            type="text"
            placeholder="2025"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Deskripsi</label>
        <textarea
          rows="4"
          placeholder="Ceritakan pencapaian atau kontribusimu..."
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {editData ? <Save size={16} /> : <Plus size={16} />}
          {editData ? "Simpan Perubahan" : "Tambah"}
        </button>
        {editData && (
          <button type="button" className="btn-cancel-form" onClick={onCancel}>
            <X size={16} /> Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default ExperienceForm;