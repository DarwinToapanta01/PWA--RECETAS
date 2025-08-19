// Lógica principal de la PWA
// Aquí puedes importar y usar los Web Components de la carpeta components

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./src/service-worker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.error('Error al registrar el Service Worker', err));
  });
}

// Estado y persistencia en localStorage
function getRecetas() {
  return JSON.parse(localStorage.getItem('recetas') || '[]');
}

function saveRecetas(recetas) {
  localStorage.setItem('recetas', JSON.stringify(recetas));
}

function renderRecetas() {
  const recetas = getRecetas();
  const app = document.getElementById('app');
  app.innerHTML = '';
  recetas.forEach(receta => {
    const card = document.createElement('receta-card');
    card.setAttribute('nombre', receta.nombre);
    card.setAttribute('ingredientes', receta.ingredientes);
    card.setAttribute('pasos', receta.pasos);
    app.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar con recetas de ejemplo si está vacío
  if (!localStorage.getItem('recetas')) {
    saveRecetas([
      { nombre: 'Tortilla de papas', ingredientes: 'Papas, huevos, cebolla, aceite, sal', pasos: 'Pelar, cortar, freír, mezclar, cuajar.' },
      { nombre: 'Ensalada Lechuga', ingredientes: 'Lechuga, pollo, pan, queso, mayonesa', pasos: 'Cortar, mezclar, servir.' }
    ]);
  }
  renderRecetas();

  // Manejar el formulario para agregar recetas
  const form = document.getElementById('form-receta');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const ingredientes = document.getElementById('ingredientes').value.trim();
    const pasos = document.getElementById('pasos').value.trim();
    if (nombre && ingredientes && pasos) {
      const recetas = getRecetas();
      recetas.push({ nombre, ingredientes, pasos });
      saveRecetas(recetas);
      renderRecetas();
      form.reset();
    }
  });
});
