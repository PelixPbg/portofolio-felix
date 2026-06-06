import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Plus, Pencil, Trash2, X, Check } from "lucide-react";
import "./Project.css";

const defaultProjects = [
  {
    id: 1,
    title: "3D Modeling Future Room",
    desc: "Desain kamar 3D futuristik dengan konsep modern gaming setup, dibuat menggunakan modeling, texturing, coloring, dan pencahayaan untuk menghasilkan suasana yang clean dan realistis.",
    tech: ["Modeling", "Texturing", "Coloring", "Rigging"],
    img: "/3D_Modeling.png",
    github: "#",
  },
  {
    id: 2,
    title: "3D Modeling Among Us",
    desc: "Karakter 3D bergaya low-poly, dibuat dengan fokus pada modeling, coloring, dan texturing untuk menghasilkan tampilan sederhana, clean, dan menarik.",
    tech: ["Modeling", "Texturing", "Coloring"],
    img: "/Amogus.png",
    github: "#",
  },
  {
    id: 3,
    title: "Game Sky Raiders",
    desc: "Game arcade 2D bergaya pixel art yang berfokus pada pengendalian pesawat, menghindari rintangan, dan mencapai skor terbaik. Dilengkapi pilihan tingkat kesulitan (Easy, Normal, Hard) dengan tampilan visual sederhana dan menarik.",
    tech: ["Sprite Design", "Game Logic", "Animation", "UI Design"],
    img: "/Game.png",
    github: "#",
  },
];

const emptyForm = { title: "", desc: "", tech: "", img: "", github: "" };

const Project = () => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("portfolio-projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  }, [projects]);

  const openAdd = () => {
    setEditId(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (proj) => {
    setEditId(proj.id);
    setForm({ ...proj, tech: proj.tech.join(", ") });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.title.trim() || !form.desc.trim()) return;
    const techArray = form.tech.split(",").map((t) => t.trim()).filter(Boolean);

    if (editId) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editId ? { ...form, id: editId, tech: techArray } : p))
      );
    } else {
      setProjects((prev) => [
        ...prev,
        { ...form, id: Date.now(), tech: techArray },
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setDeleteId(null);
  };

  return (
    <section id="project" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <button className="btn-add" onClick={openAdd}>
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel project-card"
          >
            <div className="project-image">
              {proj.img ? (
                <img src={proj.img} alt={proj.title} />
              ) : (
                <div className="project-img-placeholder">No Image</div>
              )}
              <div className="project-overlay">
                <a href={proj.github || "#"} target="_blank" rel="noreferrer" className="icon-link">
                  <GitBranch size={22} />
                </a>
                <a href={proj.github || "#"} target="_blank" rel="noreferrer" className="icon-link">
                  <ExternalLink size={22} />
                </a>
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
              <div className="project-actions">
                <button className="btn-action btn-edit" onClick={() => openEdit(proj)}>
                  <Pencil size={15} /> Edit
                </button>
                <button className="btn-action btn-delete" onClick={() => setDeleteId(proj.id)}>
                  <Trash2 size={15} /> Hapus
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === MODAL FORM === */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{editId ? "Edit Project" : "Tambah Project"}</h3>
                <button className="modal-close" onClick={() => setShowModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <label>Judul Project *</label>
                <input
                  type="text"
                  placeholder="Nama project"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <label>Deskripsi *</label>
                <textarea
                  placeholder="Deskripsi singkat project"
                  rows={3}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                />

                <label>Teknologi (pisahkan koma)</label>
                <input
                  type="text"
                  placeholder="React, CSS, Node.js"
                  value={form.tech}
                  onChange={(e) => setForm({ ...form, tech: e.target.value })}
                />

                <label>URL Gambar</label>
                <input
                  type="text"
                  placeholder="/foto.png atau https://..."
                  value={form.img}
                  onChange={(e) => setForm({ ...form, img: e.target.value })}
                />

                <label>Link GitHub</label>
                <input
                  type="text"
                  placeholder="https://github.com/..."
                  value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                />
              </div>

              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setShowModal(false)}>
                  Batal
                </button>
                <button className="btn-save" onClick={handleSave}>
                  <Check size={16} /> Simpan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === KONFIRMASI HAPUS === */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDeleteId(null)}
          >
            <motion.div
              className="modal-confirm modal-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Trash2 size={36} className="confirm-icon" />
              <h3>Hapus Project?</h3>
              <p>Project ini akan dihapus permanen dan tidak bisa dikembalikan.</p>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={() => setDeleteId(null)}>Batal</button>
                <button className="btn-delete-confirm" onClick={() => handleDelete(deleteId)}>
                  Ya, Hapus
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;