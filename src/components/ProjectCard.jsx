import React from 'react';

export default function ProjectCard({ item }) {
  return (
    <div style={{ width: '220px', border: '1px solid #cbd5e1', padding: '15px', backgroundColor: 'white', borderRadius: '10px' }}>
      <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: 'gray', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.cat}</p>
      <img 
        src={item.img} 
        alt="preview" 
        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', backgroundColor: '#e2e8f0', display: 'block', marginBottom: '10px' }} 
      />
      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.title}</h4>
      <p style={{ margin: '0', fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>{item.desc}</p>
    </div>
  );
}
