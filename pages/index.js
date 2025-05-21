import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = () => {
      fetch('/api/exercices')
        .then(res => res.json())
        .then(data => {
          const liste = window.d3.select('#liste');
          liste.selectAll('li')
            .data(data)
            .join('li')
            .text(d => d.name);
        });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Liste des exercices</h1>
      <ul id="liste"></ul>
    </div>
  );
}