import { useState, useEffect } from "react";
import { Plus, Save, X } from "lucide-react";

const ExperienceForm = ({ onSave, editData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Ekstrakurikuler",
    year: "",
    desc: ""
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
    if (!formData.title || !formData.year || !formData.desc) return alert("Mohon isi semua data!");
    onSave(formData);
    setFormData({ title: "", type: "Ekstrakurikuler", year: "", desc: "" });
  };

  return (
    <form className="glass-panel crude-form" onSubmit={handleSubmit}>
      <h3 className="form-title">{editData ? "Edit Pengalaman" : "Tambah Pengalaman Baru"}</h3>
      
      <div className="form-group">
        <label>Judul Kegiatan</label>
        <input 
          type="text" 
          placeholder="Contoh: Juara 1 Web Design LKS" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
      </div>

      <div className="form-grid-inputs">
        <div className="form-group">
          <label>Jenis Kegiatan</label>
          <select 
            value={formData.type} 
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option value="Ekstrakurikuler">Ekstrakurikuler</option>
            <option value="Lomba">Lomba</option>
            <option value="PKL">PKL</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Sertifikat">Sertifikat</option>
            <option value="Lainnya">Pengalaman Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tahun</label>
          <input 
            type="text" 
            placeholder="Contoh: 2025 - 2026" 
            value={formData.year}
            onChange={(e) => setFormData({...formData, year: e.target.value})}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Deskripsi Singkat</label>
        <textarea 
          rows="3" 
          placeholder="Ceritakan kontribusi atau pencapaianmu..."
          value={formData.desc}
          onChange={(e) => setFormData({...formData, desc: e.target.value})}
        ></textarea>
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-action submit-btn">
          {editData ? <Save size={16} /> : <Plus size={16} />}
          {editData ? "Simpan Perubahan" : "Tambah Data"}
        </button>
        {editData && (
          <button type="button" className="btn-action cancel-btn" onClick={onCancel}>
            <X size={16} /> Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default ExperienceForm;