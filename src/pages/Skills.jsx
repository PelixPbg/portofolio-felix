import { motion } from "framer-motion";
import { Code, Layout, Database, Terminal, Cpu, Layers } from "lucide-react";
import "./Skills.css"; // <-- Pastikan titik dan garis miringnya benar karena berada di folder yang sama (pages/)

const skillData = [
  { name: "React JS", level: 90, icon: <Cpu />, desc: "State management, Hooks, Context API" },
  { name: "CSS Modules / SCSS", level: 95, icon: <Layout />, desc: "Modern layouts, Flexbox, Grid, Animations" },
  { name: "Vite / Build Tools", level: 80, icon: <Layers />, desc: "Bundling, Environment Config, Optimization" },
  { name: "HTML5 Semantics", level: 95, icon: <Code />, desc: "SEO Friendly, Accessibility (a11y), Clean Structure" },
  { name: "RESTful API / JSON", level: 85, icon: <Database />, desc: "Data fetching, Axios, Integration" },
];

const Skills = () => {
  // Animasi container untuk delay berurutan (stagger) pada card
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">My <span className="gradient-text">Skills</span></h2>
        <p className="skills-subtitle">Teknologi dan tools yang saya gunakan untuk membangun aplikasi web modern.</p>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="glass-panel skill-card"
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: "var(--neon-cyan)" }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-box">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            </div>

            <div className="skill-progress-container">
              <div className="skill-progress-labels">
                <span>Proficiency</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-bar-track">
                <motion.div 
                  className="skill-progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;