import { motion } from "framer-motion";
import { User, Code, Zap, Globe, Cpu, Layout, Terminal, Database, Layers, Box } from "lucide-react";
import "./About.css";

const skillData = [
  { name: "HTML5 Semantic", level: 95, icon: <Globe />, desc: "SEO Friendly, Accessibility, Clean Structure" },
  { name: "CSS", level: 90, icon: <Layout />, desc: "Flexbox, Grid, Animations, Responsive" },
  { name: "JavaScript", level: 85, icon: <Terminal />, desc: "ES6+, DOM, Async, Functional Programming" },
  { name: "React JS", level: 80, icon: <Cpu />, desc: "Hooks, Context API, State Management" },
  { name: "MySQL", level: 75, icon: <Database />, desc: "Query, Relations, Database Design" },
  { name: "Blender 3D", level: 90, icon: <Box />, desc: "Modeling, Texturing, Lighting, Rendering" },
];

const techStack = [
  { name: "React", icon: <Cpu size={28} /> },
  { name: "JavaScript", icon: <Terminal size={28} /> },
  { name: "HTML5", icon: <Globe size={28} /> },
  { name: "CSS3", icon: <Layout size={28} /> },
  { name: "Vite", icon: <Layers size={28} /> },
  { name: "MySQL", icon: <Database size={28} /> },
  { name: "Blender", icon: <Box size={28} /> },
  { name: "Framer Motion", icon: <Zap size={28} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="about-page">

      {/* === WHO AM I === */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-grid">
          {[
            {
              icon: <User className="about-icon" size={32} />,
              title: "Who am I?",
              text: "Saya adalah Web Developer dan 3D Artist yang fokus membuat website modern, interaktif, dan responsif. Saya menyukai kombinasi desain visual dan coding untuk menciptakan pengalaman digital yang menarik.",
            },
            {
              icon: <Code className="about-icon" size={32} />,
              title: "Tech Enthusiast",
              text: "Mengembangkan website menggunakan teknologi modern seperti HTML, CSS, JavaScript, React, serta eksplorasi visual 3D menggunakan Blender untuk menghasilkan tampilan yang lebih hidup dan profesional.",
            },
            {
              icon: <Zap className="about-icon" size={32} />,
              title: "Fast & Responsive",
              text: "Mengutamakan performa, tampilan responsif, dan pengalaman pengguna yang nyaman di berbagai perangkat, mulai dari mobile hingga desktop.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              className="glass-panel about-card"
            >
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === SKILLS === */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Kemampuan utama yang saya kuasai.</p>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skillData.map((skill, i) => (
            <motion.div key={i} className="glass-panel skill-card" variants={fadeUp} whileHover={{ y: -5 }}>
              <div className="skill-card-top">
                <div className="skill-icon-box">{skill.icon}</div>
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
      </div>

      {/* === TECHNOLOGIES === */}
      <div className="section-container">

        <motion.div
          className="tech-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
        </motion.div>
      </div>

    </section>
  );
};

export default About;