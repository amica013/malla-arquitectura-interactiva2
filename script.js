function renderMalla() {
  const container = document.getElementById('malla');
  container.innerHTML = '';
  for (const nivel in materias) {
    const col = document.createElement('div');
    col.className = 'column';
    const title = document.createElement('h3');
    title.innerText = nivel;
    col.appendChild(title);
    materias[nivel].forEach((materia, idx) => {
      const div = document.createElement('div');
      div.className = 'materia' + (materia.estado === 'aprobada' ? ' aprobada' : '');
      div.innerText = materia.nombre;
      div.onclick = () => {
        alert(materia.descripcion + (materia.estado === 'aprobada' ? '\n\n✅ Aprobada' : ''));
        materia.estado = materia.estado === 'aprobada' ? '' : 'aprobada';
        renderMalla();
      };
      col.appendChild(div);
    });
    container.appendChild(col);
  }
}
renderMalla();