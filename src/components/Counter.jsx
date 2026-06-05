import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Counter Latihan</h2>
      <p className="counter-value">{count}</p>
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>
          Tambah
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ background: "#64748b" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;