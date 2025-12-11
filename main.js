document.addEventListener("DOMContentLoaded", function() {

  const slides = Array.from(document.getElementsByClassName("slide"));
  if (slides.length) {
    let index = slides.findIndex(s => s.classList.contains("active"));
    if (index < 0) index = 0;

    function mostrarSlide(n) {
      slides.forEach(s => s.classList.remove("active"));
      slides[n].classList.add("active");
    }

    const btnNext = document.querySelector(".boton-next");
    const btnPrev = document.querySelector(".boton-prev");

    if (btnNext) {
      btnNext.addEventListener("click", function() {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
      });
    }
    if (btnPrev) {
      btnPrev.addEventListener("click", function() {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
      });
    }

    if (slides.length > 1) {
      setInterval(function() {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
      }, 3000);
    }
  }

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function() {
      mainNav.classList.toggle("active");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", (!expanded).toString());
    });
  }
  
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imagenAmpliada");
  const caption = document.getElementById("caption");
  const cerrar = document.querySelector(".cerrar");

  if (modal && modalImg && caption) {
    const imagenes = document.querySelectorAll(".galeria img");
    imagenes.forEach(img => {
      img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt || "";
      });
    });

    if (cerrar) {
      cerrar.addEventListener("click", function() {
        modal.style.display = "none";
      });
    }

    modal.addEventListener("click", function(e) {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (successMessage) successMessage.style.display = "block";
      contactForm.reset();
    });
  }
  

});

