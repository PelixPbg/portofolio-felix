import { motion } from "framer-motion";
import { User, Code, Zap } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      </div>

      <div className="about-grid">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel about-card"
        >
          <User className="about-icon" size={32} />
          <h3>Who am I?</h3>
          <p>
            Saya adalah Web Developer dan 3D Artist yang fokus membuat website modern, interaktif, dan responsif.
            Saya menyukai kombinasi desain visual dan coding untuk menciptakan pengalaman digital yang menarik.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel about-card"
        >
          <Code className="about-icon" size={32} />
          <h3>Tech Enthusiast</h3>
          <p>
            Mengembangkan website menggunakan teknologi modern seperti HTML, CSS, JavaScript, React, 
            serta eksplorasi visual 3D menggunakan Blender untuk menghasilkan tampilan yang lebih hidup dan profesional.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel about-card"
        >
          <Zap className="about-icon" size={32} />
          <h3>Fast & Responsive</h3>
          <p>
            Mengutamakan performa, tampilan responsif, dan pengalaman pengguna yang nyaman di berbagai perangkat,
            mulai dari mobile hingga desktop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;