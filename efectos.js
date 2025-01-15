// Selecciona el checkbox
const checkbox = document.querySelector('.antorcha input');

// Escucha el evento de cambio en el checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Si está seleccionado, activa el modo claro
    document.body.classList.add('modo-claro');
    document.body.classList.remove('modo-nocturno');
  } else {
    // Si no está seleccionado, activa el modo nocturno
    document.body.classList.add('modo-nocturno');
    document.body.classList.remove('modo-claro');
  }
});

// Configura el modo inicial según el estado del checkbox
window.addEventListener('load', () => {
  if (checkbox.checked) {
    document.body.classList.add('modo-claro');
  } else {
    document.body.classList.add('modo-nocturno');
  }
});
