import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "./ScrollFeatures.css";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return <motion.div className="scroll-progress-bar" style={{ scaleX }} />;
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    visible && (
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </motion.button>
    )
  );
}