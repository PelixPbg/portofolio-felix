import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "3D Modeling Future Room",
    desc: "Desain kamar 3D futuristik dengan konsep modern gaming setup, dibuat menggunakan modeling, texturing, coloring, dan pencahayaan untuk menghasilkan suasana yang clean dan realistis.",
    tech: ["Modeling", "Texturing", "Coloring", "Rigging"],
    img: "/3D_Modeling.png"
  },
  {
    id: 2,
    title: "3D Modeling Among Us",
    desc: "Karakter 3D bergaya low-poly, dibuat dengan fokus pada modeling, coloring, dan texturing untuk menghasilkan tampilan sederhana, clean, dan menarik.",
    tech: ["Modeling", "Texturing", "Coloring"],
    img: "/Amogus.png"
  }
];

const Project = () => {
  return (
    <section id="project" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      </div>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={proj.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-panel project-card"
          >
            <div className="project-image">
              <img src={proj.img} alt={proj.title} />
              <div className="project-overlay">
                <a href="#" className="icon-link"><GitBranch size={24} /></a>
                <a href="#" className="icon-link"><ExternalLink size={24} /></a>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tech-stack">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;