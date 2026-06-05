import { motion } from "framer-motion";
import { Edit2, Trash2, Award, Users, Briefcase, ShieldCheck, Milestone, Sparkles } from "lucide-react";

// Helper menentukan icon dinamis berdasarkan tipe kegiatan
const getIcon = (type) => {
  switch(type) {
    case "Lomba": return <Award size={22} />;
    case "Organisasi": return <Users size={22} />;
    case "PKL": return <Briefcase size={22} />;
    case "Sertifikat": return <ShieldCheck size={22} />;
    case "Ekstrakurikuler": return <Sparkles size={22} />;
    default: return <Milestone size={22} />;
  }
};

const ExperienceCard = ({ data, onEdit, onDelete }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.15)" }}
      className="glass-panel exp-card"
    >
      <div className="card-top">
        <div className="icon-wrapper-neon">
          {getIcon(data.type)}
        </div>
        <span className="badge-type">{data.type}</span>
      </div>

      <div className="card-body">
        <span className="card-year">{data.year}</span>
        <h4 className="card-title">{data.title}</h4>
        <p className="card-desc">{data.desc}</p>
      </div>

      <div className="card-footer-crud">
        <button onClick={() => onEdit(data)} className="crud-btn edit" aria-label="Edit">
          <Edit2 size={15} /> Edit
        </button>
        <button onClick={() => onDelete(data.id)} className="crud-btn delete" aria-label="Delete">
          <Trash2 size={15} /> Hapus
        </button>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;