import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectForm from './components/ProjectForm';

// Using clean color codes ensures images load instantly without web routing errors
const start = [
  { id: 1, title: "Web Application 1", cat: "Web", desc: "A simple shop site built with React components.", img: "#3b82f6" },
  { id: 2, title: "Creative Branding Logo", cat: "Brand", desc: "A clean student design portfolio concept.", img: "#ec4899" }
];

export default function App() {
  const [arr, setArr] = useState(function() {
    const data = localStorage.getItem('items');
    return data ? JSON.parse(data) : start;
  });
  const [txt, setTxt] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(function() {
    localStorage.setItem('items', JSON.stringify(arr));
  }, [arr]);

  function add(obj) {
    obj.id = Date.now();
    setArr([...arr, obj]);
  }

  const list = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const matchT = x.title.toLowerCase().includes(txt.toLowerCase()) || x.desc.toLowerCase().includes(txt.toLowerCase());
    const matchC = cat === "All" || x.cat === cat;
    if (matchT && matchC) list.push(x);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap-reverse' }}>
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '340px' }}>
          <SearchBar txt={txt} setTxt={setTxt} cat={cat} setCat={setCat} />
          <ProjectForm onAdd={add} />
        </div>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <ProjectGrid arr={list} />
        </div>
      </div>
    </div>
  );
}
