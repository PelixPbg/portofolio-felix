import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Cpu, Globe, ArrowUpRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ScrollIndicator, BackToTop } from "../components/ScrollFeatures";
import "./Home.css";

const skills = [
  { name: "HTML5 Semantic", level: 95, icon: <Globe /> },
  { name: "CSS", level: 90, icon: <Globe /> },
  { name: "JavaScript", level: 85, icon: <Cpu /> },
  { name: "React JS", level: 80, icon: <Cpu /> },
  { name: "MySQL", level: 75, icon: <Cpu /> },
  { name: "Blender 3D", level: 90, icon: <Cpu /> },
];

const projects = [
  { id: 1, title: "AI Dashboard Platform", desc: "Next-gen glassmorphic admin center with abstract charting visualization.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60" },
  { id: 2, title: "SaaS E-Commerce Engine", desc: "Premium minimalist store featuring dynamic high-fidelity fluid transitions.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60" },
];

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-wrapper">
      <ScrollIndicator />
      <Navbar />

      <div className="bg-glow-container">
        <div className="blur-circle-1"></div>
        <div className="blur-circle-2"></div>
      </div>

      <section id="home" className="section hero-section">
        <div className="hero-container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-left">
            <div className="badge">WEB & 3D DESIGNER</div>
            <h1 className="hero-title">
              Hi, Saya <span className="gradient-text">Felix</span>
            </h1>
            <h2 className="hero-subtitle">
              Expert in{" "}
              <span className="cyan-text">
                <Typewriter words={["Aesthetic Web", "Clean Architectures", "Premium UI/UX"]} loop={0} cursor />
              </span>
            </h2>
            <p className="hero-desc">
              Membangun website modern dengan tampilan responsif, interaksi dinamis, serta menciptakan karya visual 3D menggunakan Blender secara kreatif dan profesional.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-outlined">
                View Projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-right"
          >
            <div className="code-card">
              <div className="card-header">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
              </div>
              <pre className="code-content">
                <code>
{`const developer = {
  name: "Felix",
  role: "UI Engineer",
  skills: ["3D", "CSS3", "JS"],
  premium: true
};`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section container-grid">
        <div className="section-header-center">
          <h2>Skills & Technologies</h2>
          <p>Teknologi yang saya gunakan untuk membangun website dan karya 3D.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="skill-card">
              <div className="skill-info">
                <div className="skill-icon-name">{skill.icon} <span>{skill.name}</span></div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar-track">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1 }} className="progress-bar-fill" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
  © {new Date().getFullYear()} Felix Purbawiatna • Web Developer & 3D Designer
      </footer>

      <BackToTop />
    </div>
  );
}

export default Home;