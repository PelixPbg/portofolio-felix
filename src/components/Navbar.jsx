import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Terminal className="logo-icon" size={22} />
          <span>PORT<span className="accent">FOLIO</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-desktop-menu">
          {menuItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.span 
                  layoutId="activeIndicator" 
                  className="active-line" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="nav-mobile-menu"
          >
            {menuItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path} 
                className={({ isActive }) => `nav-mobile-item ${isActive ? "active" : ""}`}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;