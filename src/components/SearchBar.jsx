import React from 'react';

export default function SearchBar({ txt, setTxt, cat, setCat }) {
  return (
    <div style={{ background: 'white', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '10px' }}>
      <p style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 'bold' }}>Find Projects:</p>
      <input 
        type="text" 
        placeholder="Type keyword to filter..."
        value={txt} 
        onChange={function(e) { setTxt(e.target.value); }} 
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '10px' }} 
      />
      <div style={{ display: 'flex', gap: '5px' }}>
        <button type="button" onClick={function() { setCat("All"); }} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', backgroundColor: cat === "All" ? "black" : "#f1f5f9", color: cat === "All" ? "white" : "black", border: 'none', borderRadius: '4px' }}>All</button>
        <button type="button" onClick={function() { setCat("Web"); }} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', backgroundColor: cat === "Web" ? "black" : "#f1f5f9", color: cat === "Web" ? "white" : "black", border: 'none', borderRadius: '4px' }}>Web</button>
        <button type="button" onClick={function() { setCat("Brand"); }} style={{ padding: '6px 12px', fontSize: '12px', cursor: 'pointer', backgroundColor: cat === "Brand" ? "black" : "#f1f5f9", color: cat === "Brand" ? "white" : "black", border: 'none', borderRadius: '4px' }}>Brand</button>
      </div>
    </div>
  );
}
