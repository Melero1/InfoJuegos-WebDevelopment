document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;
  


  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i]?.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  // Auto cambiar cada 5 segundos
  slideInterval = setInterval(nextSlide, 5000);

  // Controles manuales
  document.getElementById('next-slide')?.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
  });

  document.getElementById('prev-slide')?.addEventListener('click', () => {
    clearInterval(slideInterval);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      currentSlide = i;
      showSlide(currentSlide);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  showSlide(currentSlide);
});


document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que recargue la página

    const query = document.getElementById('search-input').value.trim().toLowerCase();

    // Diccionario de rutas según palabras clave falta hacerlo bien
    const rutas = {
      "starfield": "starfield.html",
      "spiderman": "spiderMan2Noticia.html",
      "spiderman2": "spiderMan2Noticia.html",
      "spider-man": "spiderMan2Noticia.html",
      "spider-man2": "spiderMan2Noticia.html",
      "indie": "10mejoresIndie.html",
      "indie juegos": "10mejoresIndie.html",
      "juegos indie": "10mejoresIndie.html",
      "nosotros": "aboutme.html",
      "Nosotros": "aboutme.html",
      "fifa": "fifaNoticia.html",
      "Fifa": "fifaNoticia.html",
      "gamepass": "gamePassNoticia.html",
      "gamepass noticia": "gamePassNoticia.html",
      "gta 6": "gta5Noticia.html",
    };

    if (rutas[query]) {
      window.location.href = rutas[query];
    } else {
      // Redirigir a una página de resultados generales (si la tienes)
      window.location.href = "/project/html/busqueda.html?q=" + encodeURIComponent(query);
    }
  });
