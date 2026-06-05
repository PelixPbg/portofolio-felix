function StudentCard({ nama, kelas, pengalaman, onDelete, onEdit }) {
  return (
    <div className="student-card">
      <h3>{nama}</h3>
      <p><strong>Kelas:</strong> {kelas}</p>
      <p><strong>Pengalaman:</strong> {pengalaman}</p>
      
      <div className="card-actions">
        <button onClick={onEdit}>
          Edit
        </button>
        <button onClick={onDelete}>
          Hapus
        </button>
      </div>
    </div>
  );
}

export default StudentCard;