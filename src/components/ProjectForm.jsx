import React, { useState } from 'react';

export default function ProjectForm({ onAdd }) {
  const [t, setT] = useState("");
  const [c, setC] = useState("Web");
  const [d, setD] = useState("");
  const [g, setG] = useState("");

  function submit(e) {
    e.preventDefault();
    if (t.trim() === "" || d.trim() === "") {
      alert("Please fill out required fields!");
      return;
    }
    const imgUrl = g.trim() !== "" ? g : "https://picsum.photos";
    onAdd({ title: t, cat: c, desc: d, img: imgUrl });
    setT(""); setD(""); setG("");
  }

  return (
    <form onSubmit={submit} style={{ padding: '20px', border: '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: 'white', marginTop: '15px' }}>
      <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}><b>Add New Card</b></p>
      
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Title *</label>
        <input type="text" value={t} onChange={function(e) { setT(e.target.value); }} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '6px' }} placeholder="Enter title..." />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Category Track</label>
        <select value={c} onChange={function(e) { setC(e.target.value); }} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '6px', backgroundColor: 'white' }}>
          <option value="Web">Web</option>
          <option value="Brand">Brand</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Image URL</label>
        <input type="text" value={g} onChange={function(e) { setG(e.target.value); }} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '6px' }} placeholder="https://..." />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Description *</label>
        <textarea value={d} onChange={function(e) { setD(e.target.value); }} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '6px' }} rows="3" placeholder="Enter details..." />
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Save Card</button>
    </form>
  );
}
