fetch('/api/exercices')
  .then(res => res.json())
  .then(data => {
    d3.select('#liste')
      .selectAll('li')
      .data(data)
      .join('li')
      .text(d => d.nom);
  });
