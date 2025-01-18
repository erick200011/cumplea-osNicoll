document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".antorcha input");
  const body = document.body;
  const musicaBoton = document.getElementById("musica-boton");
  const efectoCumple = document.getElementById("efecto-cumple");
  const musicaContainer = document.getElementById("musica-container");

  const fiestaBoton = document.getElementById("fiestaBtn");
  const fiestaBotonContainer = document.getElementById("fiesta-boton");
  const cancionFiesta = new Audio("otros/CancionLoca.mp3"); // Ruta a la canción loca

  let musica = new Audio("otros/cancion.mp3"); 
  musica.loop = true;

  let fireballSound = new Audio("otros/Fireball_Sound.mp3");

  musicaContainer.style.display = "block"; 

  musicaBoton.addEventListener("click", function () {
    if (musica.paused) {
      musica.play(); 
      musicaBoton.textContent = "Desactivar Música";
    } else {
      musica.pause(); 
      musicaBoton.textContent = "Activar Música"; 
    }
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      fireballSound.play();
      body.classList.remove("modo-nocturno");
      body.classList.add("modo-claro");

      efectoCumple.style.display = "block";
      musicaBoton.style.display = "block";
      fiestaBotonContainer.style.display = "block"; 
    } else {
      body.classList.remove("modo-claro");
      body.classList.add("modo-nocturno");

      efectoCumple.style.display = "none";
      musicaBoton.style.display = "none";
      fiestaBotonContainer.style.display = "none"; 
    }
  });

  // Evento para controlar la reproducción de la canción de fiesta y activar el efecto flash
  fiestaBoton.addEventListener("click", function () {
    if (cancionFiesta.paused) {
      cancionFiesta.play(); // Reproducir la canción de fiesta
      body.classList.add("flash"); // Añadir la clase flash para activar la animación
    } else {
      cancionFiesta.pause(); // Pausar la canción de fiesta
      body.classList.remove("flash"); // Quitar la clase flash para detener la animación
    }
  });
});
