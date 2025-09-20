  const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const toggleBtn = dropdown.querySelector(".dropdown-toggle");
      const arrow = dropdown.querySelector(".arrow");

      toggleBtn.addEventListener("click", () => {
        const isOpen = dropdown.classList.contains("open");

        // Cerrar todos
        dropdowns.forEach(d => {
          d.classList.remove("open");
          d.querySelector(".dropdown-toggle").classList.remove("active");
          d.querySelector(".arrow").classList.remove("rotated");
        });

        // Si no estaba abierto, abrir el actual
        if (!isOpen) {
          dropdown.classList.add("open");
          toggleBtn.classList.add("active");
          arrow.classList.add("rotated");
        }
      });
    });

    // Cerrar al hacer clic fuera
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        dropdowns.forEach(d => {
          d.classList.remove("open");
          d.querySelector(".dropdown-toggle").classList.remove("active");
          d.querySelector(".arrow").classList.remove("rotated");
        });
      }
    });
// toogle submenu

// Toggle de menú móvil
   // Get the button, and when the user clicks on it, execute myFunction
    document.getElementById("icon-menuToggle").onclick = function() {menuToggle(this)};

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    
    function menuToggle(x) {
        x.classList.toggle("change");
        document.getElementById("myTopnav").classList.toggle("show-menu");
      }
// Formulario de contacto
 const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita que recargue la página

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.style.display = "none";
        thankYou.style.display = "block";
      } else {
        alert("Ocurrió un error. Intentalo más tarde.");
      }
    } catch (error) {
      alert("Error al enviar el formulario.");
    }
  });

$(document).ready(function () {
    $('.single-item').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 8000,
        slidesToShow: 1,
       adaptiveHeight: true,
      arrows: false,
      dots: true
    });
     setTimeout(function () {
    $('.single-item').slick('slickPlay');
  }, 5000);
});

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-solucion');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          } else {
            entry.target.classList.remove('zoom-in'); // Si querés que se reinicie al salir
          }
        });
      },
      {
        threshold: 0.9, // Se activa cuando el 20% es visible
      }
    );

    cards.forEach(card => observer.observe(card));
  });

  // tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Quitar active de todos los tabs y contenidos
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Activar tab y contenido seleccionado
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// scroll suave al formulario
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a.ancla[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let destino = document.querySelector(this.hash); // busca por ID
      if (!destino) {
        destino = document.querySelector('a[name="' + this.hash.substring(1) + '"]'); // busca por name
      }
      if (!destino) {
        destino = document.documentElement; // fallback al inicio
      }

      const destinoY = destino.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: destinoY,
        behavior: "smooth"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const linkBranding = document.querySelector('#eapps-instagram-feed-1 > a');
  if(linkBranding) {
    linkBranding.style.display = 'none';
  }
  setInterval(() => {
  const linkBranding = document.querySelector('#eapps-instagram-feed-1 > a');
  if (linkBranding) linkBranding.style.display = 'none';
}, 50);
});



