import { motion } from "framer-motion";
import { Edit2, Trash2, Award, Users, Briefcase, ShieldCheck, Sparkles, Milestone } from "lucide-react";

const getIcon = (type) => {
  switch (type) {
    case "Lomba": return <Award size={18} />;
    case "Organisasi": return <Users size={18} />;
    case "PKL": return <Briefcase size={18} />;
    case "Sertifikat": return <ShieldCheck size={18} />;
    case "Ekstrakurikuler": return <Sparkles size={18} />;
    default: return <Milestone size={18} />;
  }
};

const badgeColor = (type) => {
  switch (type) {
    case "Lomba": return "badge-lomba";
    case "Organisasi": return "badge-organisasi";
    case "PKL": return "badge-pkl";
    case "Sertifikat": return "badge-sertifikat";
    case "Ekstrakurikuler": return "badge-ekskul";
    default: return "badge-default";
  }
};

const ExperienceCard = ({ data, index, onEdit, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item"
    >
      {/* Garis & Dot Timeline */}
      <div className="timeline-dot">
        <div className="dot-icon">{getIcon(data.type)}</div>
      </div>
      <div className="timeline-line" />

      {/* Card Konten */}
      <div className="timeline-card glass-panel">
        <div className="timeline-card-header">
          <div className="timeline-meta">
            <span className={`badge-type ${badgeColor(data.type)}`}>{data.type}</span>
            <span className="card-year">{data.year}</span>
          </div>
          <div className="card-crud-btns">
            <button onClick={() => onEdit(data)} className="crud-btn edit" title="Edit">
              <Edit2 size={14} />
            </button>
            <button onClick={() => onDelete(data.id)} className="crud-btn delete" title="Hapus">
              <Trash2 size={14} />
            </button>
          </div>
        </div>

        <h4 className="card-title">{data.title}</h4>
        <p className="card-desc">{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;