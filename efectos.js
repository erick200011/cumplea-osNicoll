document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".antorcha input");
  const body = document.body;
  const musicaBoton = document.getElementById("musica-boton");
  const efectoCumple = document.getElementById("efecto-cumple");
  const musicaContainer = document.getElementById("musica-container");
  const nostalgicBoton = document.getElementById("nostalgic-boton");

  const initial = document.getElementById('mensaje-inicial');
  const message = document.getElementById('birthdayMessage');
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
    } else {
      musica.pause(); 
      cancionFiesta.pause(); 
      body.classList.remove("flash"); 
    }
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      fireballSound.play();
      body.classList.remove("modo-nocturno");
      body.classList.add("modo-claro");

      initial.classList.remove('visible');
      initial.classList.add('hidden');

      message.classList.remove('hidden');
      message.classList.add('visible');
      efectoCumple.style.display = "block";
      musicaBoton.style.display = "block";
      fiestaBotonContainer.style.display = "block"; 
      nostalgicBoton.style.display = "block"; 
      musica.play();
    } else {
      body.classList.remove("modo-claro");
      body.classList.add("modo-nocturno");

      efectoCumple.style.display = "none";
      musicaBoton.style.display = "none";
      nostalgicBoton.style.display = "none";
      fiestaBotonContainer.style.display = "none"; 
      message.classList.remove('visible');
      message.classList.add('hidden');
      initial.classList.remove('hidden');
      initial.classList.add('visible');
      
      musica.pause(); 
      cancionFiesta.pause(); // Pausar la canción de fiesta
      body.classList.remove("flash"); // Quitar la clase flash para detener la animació
    }
  });

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox-antorcha");
  const mensajeInicial = document.getElementById("mensaje-inicial");
  
  // Agregar un event listener para el cambio en el checkbox
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // Si el checkbox está marcado, oculta el mensaje
      mensajeInicial.classList.add("oculto");
    } else {
      // Si el checkbox está desmarcado, muestra el mensaje
      mensajeInicial.classList.remove("oculto");
    }
  });
});

  // Evento para controlar la reproducción de la canción de fiesta y activar el efecto flash
  fiestaBoton.addEventListener("click", function () {
    if (cancionFiesta.paused) {
      musica.pause(); 
      cancionFiesta.play(); // Reproducir la canción de fiesta
      body.classList.add("flash"); // Añadir la clase flash para activar la animación
      fiestaBtn.textContent = "Detener Fiesta"; // Cambiar el texto del botón
    } else {
      cancionFiesta.pause(); // Pausar la canción de fiesta
      body.classList.remove("flash"); // Quitar la clase flash para detener la animación
      fiestaBtn.textContent = "Iniciar Fiesta"; // Cambiar el texto del
    }
  });
});
