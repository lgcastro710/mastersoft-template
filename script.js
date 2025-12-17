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
document.addEventListener("DOMContentLoaded", function () {
  const submenu = document.querySelector(".submenu");
  const toggle = document.getElementById("toggleSubmenu");

  // solo aplica en mobile
  if (window.innerWidth <= 930) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // evita navegación accidental
      submenu.classList.toggle("open");
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
       adaptiveHeight: false,
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

document.querySelectorAll('.custom-select.multiple').forEach(select => {
  const trigger = select.querySelector('.select-trigger');
  const options = select.querySelector('.select-options');
  const selectedText = select.querySelector('.selected-option');
  const hiddenInput = select.querySelector('input[name="producto-interes"]');
  const selectedValues = new Set();

  // Abrir / cerrar
  trigger.addEventListener('click', () => {
    document.querySelectorAll('.custom-select').forEach(s => {
      if (s !== select) s.classList.remove('open');
    });
    select.classList.toggle('open');
  });

  // Seleccionar/deseleccionar opción
  options.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', e => {
      const value = option.getAttribute('data-value');
      const text = option.textContent;

      if (selectedValues.has(value)) {
        selectedValues.delete(value);
        option.classList.remove('selected');
      } else {
        selectedValues.add(value);
        option.classList.add('selected');
      }

      const selectedArray = Array.from(selectedValues);
      hiddenInput.value = selectedArray.join(', ');
      selectedText.textContent = selectedArray.length
        ? selectedArray.join(', ')
        : 'Selecciona una o más opciones';
      selectedText.classList.toggle('multiple-text', selectedArray.length > 1);

      e.stopPropagation();
    });
  });
});
const textarea = document.getElementById('comentario');
const contador = document.getElementById('contador');

textarea.addEventListener('input', () => {
  contador.textContent = `${textarea.value.length} / 1000`;
});

// Cerrar si se hace clic fuera
document.addEventListener('click', e => {
  if (!e.target.closest('.custom-select')) {
    document.querySelectorAll('.custom-select').forEach(s => s.classList.remove('open'));
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const codeToggle = document.getElementById("code-toggle");
  const codeList = document.getElementById("code-list");
  const emailError = document.getElementById("email-error");
  const telefonoError = document.getElementById("telefono-error");

  /* === VALIDAR EMAIL === */
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }

  /* === LIMPIAR ERRORES === */
  emailInput.addEventListener("input", () => {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  });

  telefonoInput.addEventListener("input", () => {
    telefonoInput.value = telefonoInput.value.replace(/[^\d]/g, "");
    telefonoError.textContent = "";
    telefonoInput.classList.remove("error");
  });

  /* === SELECTOR DE CÓDIGO DE ÁREA === */
  if (codeToggle && codeList) {
    codeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      codeList.classList.toggle("show");
    });

    codeList.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      codeToggle.textContent = li.dataset.code;
      codeList.classList.remove("show");
    });

    document.addEventListener("click", (e) => {
      if (!codeToggle.contains(e.target) && !codeList.contains(e.target)) {
        codeList.classList.remove("show");
      }
    });
  }

  /* === BLOQUEO TOTAL DE ENVÍO NATIVO === */
  form.addEventListener(
    "submit",
    async (e) => {
      e.stopImmediatePropagation(); // 🚫 corta otros listeners (incluido Formspree)
      e.preventDefault(); // 🚫 bloquea el envío por defecto

      console.log("Interceptado el envío del formulario");

      const email = emailInput.value.trim();
      const telefono = telefonoInput.value.trim();
      const codigo = codeToggle ? codeToggle.textContent.trim() : "";

      emailError.textContent = "";
      telefonoError.textContent = "";
      emailInput.classList.remove("error");
      telefonoInput.classList.remove("error");

      let valido = true;

      // Email
      if (!validarEmail(email)) {
        emailError.textContent = "Por favor, ingresa un email válido.";
        emailInput.classList.add("error");
        valido = false;
      }

      // Teléfono
      const telefonoLimpio = telefono.replace(/\D/g, "");
      if (telefonoLimpio.length < 10 || telefonoLimpio.length > 15) {
        telefonoError.textContent =
          "El número debe tener entre 10 y 15 dígitos.";
        telefonoInput.classList.add("error");
        valido = false;
      }

      if (!valido) {
        console.warn("❌ Formulario inválido, no se envía.");
        return false; // frena todo
      }

      // ✅ Envío manual si todo es válido
      const formData = new FormData(form);
      formData.set("telefono", `${codigo} ${telefono}`);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          thankYou.style.display = "block";
          setTimeout(() => (thankYou.style.display = "none"), 5000);
        } else {
          telefonoError.textContent =
            "Ocurrió un error al enviar el formulario.";
        }
      } catch (error) {
        telefonoError.textContent =
          "Error de conexión. Intenta nuevamente.";
      }

      return false; // ⚠️ evita reenvío
    },
    true // <- captura en fase "capture", antes que Formspree
  );
});

