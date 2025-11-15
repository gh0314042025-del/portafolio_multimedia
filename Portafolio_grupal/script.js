document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("section, h2, p");

  secciones.forEach((elemento, index) => {
    elemento.style.opacity = 0;
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "all 0.8s ease";

    setTimeout(() => {
      elemento.style.opacity = 1;
      elemento.style.transform = "translateY(0)";
    }, index * 200);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === ANIMACIÓN DE ENTRADA ===
// Hace que los elementos aparezcan con un efecto al hacer scroll
const elementos = document.querySelectorAll("section, .app, .proyecto, .integrante, .contacto, .trabajo");

function mostrarAlScroll() {
  const alturaPantalla = window.innerHeight;
  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;
    if (distancia < alturaPantalla - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarAlScroll);
window.addEventListener("load", mostrarAlScroll);

// === ANIMACIÓN PARA EL TÍTULO PRINCIPAL ===
const titulo = document.querySelector("header h1");
if (titulo) {
  titulo.style.opacity = "0";
  titulo.style.transform = "translateY(-30px)";
  setTimeout(() => {
    titulo.style.transition = "1s";
    titulo.style.opacity = "1";
    titulo.style.transform = "translateY(0)";
  }, 400);
}

// === AMPLIAR IMÁGENES EN MODAL ===
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgAmpliada");
const cerrar = document.getElementById("cerrar");

// Cuando se hace clic en una imagen dentro de los trabajos
document.querySelectorAll(".trabajo img").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Cerrar modal al hacer clic en la "X"
cerrar.onclick = function() {
  modal.style.display = "none";
};

// También cerrar al hacer clic fuera de la imagen
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};




document.addEventListener("DOMContentLoaded", () => {
    const avatarContainer = document.getElementById("avatar-container");
    const avatarMessage = document.getElementById("avatar-message");

    function showAvatarMessage(text) {
    avatarMessage.textContent = text;
    avatarContainer.classList.remove("hidden");

    // Mostrar con animación
    avatarContainer.classList.add("visible");

    // Ocultar después de 5 segundos
    setTimeout(() => {
        avatarContainer.classList.remove("visible");
        avatarContainer.classList.add("hidden");
    }, 5000);
}
    // Detectar página actual
    const page = window.location.pathname.toLowerCase();

    if (page.includes("index")) {
        showAvatarMessage("¡Bienvenido al inicio! 😀");
    }
    else if (page.includes("integrantes")) {
        showAvatarMessage("Aquí están los integrantes del grupo 👥");
    }
    else if (page.includes("aplicaciones")) {
        showAvatarMessage("Estas son las aplicaciones utilizadas 💻");
    }
    else if (page.includes("trabajos")) {
        showAvatarMessage("Aquí puedes ver los trabajos del equipo 📂");
    }
    else if (page.includes("contacto")) {
        showAvatarMessage("¡Hola! 👋 Estamos aquí para ayudarte.");
    }
    else {
        showAvatarMessage("Hola 👋");
    }
});

