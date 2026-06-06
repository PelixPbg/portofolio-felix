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
  const [experiences, setExperiences] = useState(() => {
    const savedData = localStorage.getItem("portfolio_experiences");
    return savedData ? JSON.parse(savedData) : initialExperiences;
  });
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("portfolio_experiences", JSON.stringify(experiences));
  }, [experiences]);

  const handleSave = (data) => {
    if (editData) {
      setExperiences(experiences.map(item => item.id === editData.id ? { ...data, id: editData.id } : item));
      setEditData(null);
    } else {
      setExperiences([{ ...data, id: Date.now() }, ...experiences]);
    }
  };

  const handleEdit = (data) => setEditData(data);
  const handleCancel = () => setEditData(null);
  const handleDelete = (id) => {
    if (window.confirm("Hapus pengalaman ini?")) {
      setExperiences(experiences.filter(item => item.id !== id));
    }
  };

  return (
    <section id="experience" className="exp-section">
      <div className="exp-header">
        <h2 className="exp-section-title">My <span className="gradient-text">Experience</span></h2>
        <p className="exp-section-subtitle">Perjalanan, pencapaian, dan pengalaman saya.</p>
      </div>

      <div className="exp-layout">
        <div className="exp-form-side">
          <ExperienceForm onSave={handleSave} editData={editData} onCancel={handleCancel} />
        </div>
        <div className="exp-list-side">
          {experiences.length === 0 ? (
            <div className="empty-state">
              <p>Belum ada pengalaman. Tambahkan melalui form!</p>
            </div>
          ) : (
            <div className="exp-timeline">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  data={exp}
                  index={index}
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