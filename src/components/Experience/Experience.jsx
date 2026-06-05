import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

const initialExperiences = [
  {
    id: 1,
    title: "Juara 1 Web Design LKS Tingkat Provinsi",
    type: "Lomba",
    year: "2025",
    desc: "Mengembangkan aplikasi portofolio responsif dalam waktu 8 jam dengan standar industri W3C."
  },
  {
    id: 2,
    title: "Ketua OSIS / Hubungan Masyarakat",
    type: "Organisasi",
    year: "2024 - 2025",
    desc: "Memimpin koordinasi 5 divisi internal dan menginisiasi perilisan website resmi profil sekolah."
  }
];

const Experience = () => {
  // 1. Ambil data dari LocalStorage saat pertama kali load. Jika kosong, pakai initialExperiences
  const [experiences, setExperiences] = useState(() => {
    const savedData = localStorage.getItem("portfolio_experiences");
    return savedData ? JSON.parse(savedData) : initialExperiences;
  });
  
  const [editData, setEditData] = useState(null);

  // 2. Gunakan useEffect untuk otomatis menyimpan setiap kali state 'experiences' berubah
  useEffect(() => {
    localStorage.setItem("portfolio_experiences", JSON.stringify(experiences));
  }, [experiences]);

  const handleSave = (data) => {
    if (editData) {
      // Logic Update Data
      setExperiences(experiences.map(item => item.id === editData.id ? { ...data, id: editData.id } : item));
      setEditData(null);
    } else {
      // Logic Create Data
      const newExp = { ...data, id: Date.now() };
      setExperiences([newExp, ...experiences]);
    }
  };

  const handleEdit = (data) => setEditData(data);
  const handleCancel = () => setEditData(null);

  const handleDelete = (id) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data pengalaman ini?")) {
      setExperiences(experiences.filter(item => item.id !== id));
    }
  };

  return (
    <section id="experience" className="exp-section">
      <div className="exp-header">
        <h2 className="exp-section-title">Experience <span className="gradient-text">Management</span></h2>
        <p className="exp-section-subtitle">Kelola data kegiatan secara dinamis.</p>
      </div>

      <div className="exp-layout">
        {/* Sisi Kiri: Form Input */}
        <div className="exp-form-side">
          <ExperienceForm onSave={handleSave} editData={editData} onCancel={handleCancel} />
        </div>

        {/* Sisi Kanan: Output List */}
        <div className="exp-list-side">
          {experiences.length === 0 ? (
            <div className="glass-panel empty-state">
              <p>Belum ada riwayat pengalaman. Silakan tambahkan melalui form!</p>
            </div>
          ) : (
            <div className="exp-grid">
              {experiences.map((exp) => (
                <ExperienceCard 
                  key={exp.id} 
                  data={exp} 
                  onEdit={handleEdit} 
                  onDelete={handleDelete} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;