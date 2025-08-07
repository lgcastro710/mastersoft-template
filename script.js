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
