import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ arr }) {
  if (arr.length === 0) {
    return <p>Empty list.</p>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {arr.map(function(x) {
        return <ProjectCard key={x.id} item={x} />;
      })}
    </div>
  );
}
