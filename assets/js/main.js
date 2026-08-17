/**
 * ==============================================================================
 * IGLESIA CRISTIANA EN AVIACIÓN — INTERACCIÓN Y FUNCIONALIDAD PRINCIPAL
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initGalleryCarousel();
  initFaqAccordion();
  initCopyAddress();
  initDynamicConfig();
  initPlaceholderButtons();
});

/**
 * 1. Control de cabecera fija con sombra al hacer scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Menú de navegación móvil accesible
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileNavCloseBtn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    overlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Cerrar al hacer clic en el fondo oscuro
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Cerrar al hacer clic en un enlace de navegación
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * 3. Acordeón accesible para preguntas frecuentes
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const faqItem = button.closest('.faq-item');

      // Cerrar otros elementos para mantener la vista limpia
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          const btn = item.querySelector('.faq-button');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar el actual
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        if (faqItem) faqItem.classList.remove('active');
      } else {
        button.setAttribute('aria-expanded', 'true');
        if (faqItem) faqItem.classList.add('active');
      }
    });
  });
}

/**
 * 4. Botón para copiar dirección al portapapeles
 */
function initCopyAddress() {
  const copyBtn = document.getElementById('copyAddressBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const addressText = "Av. Vasco de Quiroga 115, Industrial Aviación 1ra Secc, 78140 San Luis Potosí, S.L.P.";
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(addressText).then(() => {
        showToast("¡Dirección copiada al portapapeles!");
      }).catch(() => {
        fallbackCopyText(addressText);
      });
    } else {
      fallbackCopyText(addressText);
    }
  });
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast("¡Dirección copiada al portapapeles!");
  } catch (err) {
    showToast("Av. Vasco de Quiroga 115, San Luis Potosí");
  }
  document.body.removeChild(textArea);
}

/**
 * 5. Notificación Toast flotante
 */
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * 6. Manejo de botones con información pendiente de confirmación
 */
function initPlaceholderButtons() {
  const pendingButtons = document.querySelectorAll('[data-pending-notice]');
  pendingButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const notice = btn.getAttribute('data-pending-notice') || "Información por confirmar por la directiva de la iglesia.";
      // Si el href está vacío o es "#", prevenir navegación y avisar
      const href = btn.getAttribute('href');
      if (!href || href === '#' || href.startsWith('javascript:')) {
        e.preventDefault();
        showToast(notice);
      }
    });
  });
}

/**
 * 7. Inyección de valores desde config.js si está presente
 */
function initDynamicConfig() {
  if (typeof CHURCH_CONFIG === 'undefined') return;

  // Actualizar año actual en el copyright
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Si existe un enlace de WhatsApp configurado, actualizar los enlaces pertinentes
  if (CHURCH_CONFIG.contact && CHURCH_CONFIG.contact.whatsappLink) {
    const waButtons = document.querySelectorAll('.js-whatsapp-link');
    waButtons.forEach(btn => {
      btn.setAttribute('href', CHURCH_CONFIG.contact.whatsappLink);
      btn.removeAttribute('data-pending-notice');
    });
  }

  // Si existe un teléfono confirmado
  if (CHURCH_CONFIG.contact && CHURCH_CONFIG.contact.phoneLink) {
    const phoneButtons = document.querySelectorAll('.js-phone-link');
    phoneButtons.forEach(btn => {
      btn.setAttribute('href', CHURCH_CONFIG.contact.phoneLink);
      btn.removeAttribute('data-pending-notice');
    });
  }
}

/**
 * 8. Carrusel interactivo y dinámico de la galería
 * Carga automáticamente fotos de assets/photos vía GitHub API
 */
async function initGalleryCarousel() {
  const container = document.querySelector('.welcome-gallery-wrap') || document.querySelector('.carousel-container');
  const viewport = document.getElementById('galleryViewport');
  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');
  const indicatorsContainer = document.getElementById('galleryIndicators');
  if (!viewport || !track || !prevBtn || !nextBtn || !indicatorsContainer) return;

  // 1. Cargar fotos dinámicamente desde assets/photos vía GitHub API
  await loadDynamicGalleryPhotos(track);

  let slides = Array.from(viewport.querySelectorAll('.carousel-slide'));
  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const config = window.CHURCH_CONFIG && window.CHURCH_CONFIG.gallery;
  const AUTOPLAY_INTERVAL = (config && config.autoplayInterval) || 3800;

  // Crear o actualizar botones de indicadores / puntos
  function createIndicators() {
    indicatorsContainer.innerHTML = '';
    return slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir a la foto ${index + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = index;
        scrollToSlide(currentIndex);
        resetAutoplay();
      });
      indicatorsContainer.appendChild(dot);
      return dot;
    });
  }

  let dots = createIndicators();

  function scrollToSlide(index) {
    const targetSlide = slides[index];
    if (targetSlide) {
      viewport.scrollTo({
        left: targetSlide.offsetLeft - viewport.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(index);
    }
  }

  function updateActiveDot(index) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function nextSlide() {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (viewport.scrollLeft >= maxScroll - 20 || currentIndex >= slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    scrollToSlide(currentIndex);
  }

  function prevSlide() {
    if (currentIndex <= 0 || viewport.scrollLeft <= 10) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
    scrollToSlide(currentIndex);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  // Navegación por teclado
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });

  // Autoplay (rotación automática)
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pausar rotación en hover, toque o interacción
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('touchstart', stopAutoplay, { passive: true });
    container.addEventListener('touchend', () => {
      setTimeout(startAutoplay, 2500);
    });
  }

  // Actualizar indicador activo durante el desplazamiento manual
  let scrollTimeout;
  viewport.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollPos = viewport.scrollLeft + 20;
      let activeIndex = 0;
      slides.forEach((slide, idx) => {
        if (slide.offsetLeft - viewport.offsetLeft <= scrollPos) {
          activeIndex = idx;
        }
      });
      currentIndex = activeIndex;
      updateActiveDot(activeIndex);
    }, 60);
  }, { passive: true });

  // Iniciar rotación automática
  startAutoplay();
}

/**
 * Consulta la API de GitHub para obtener todos los archivos de assets/photos automáticamente
 */
async function loadDynamicGalleryPhotos(track) {
  const config = window.CHURCH_CONFIG && window.CHURCH_CONFIG.gallery;
  const owner = (config && config.githubOwner) || "ICaviacion";
  const repo = (config && config.githubRepo) || "icaviacion.github.io";
  const path = (config && config.photosPath) || "assets/photos";
  const preferredFirst = (config && config.preferredFirst) || "navidad2.jpg";
  const cacheKey = `ic_gallery_photos_v1_${owner}_${repo}`;
  const validExtensions = /\.(jpe?g|png|webp|gif|svg)$/i;

  let photoFilenames = null;

  // 1. Revisar caché en sessionStorage (válido por 10 minutos para evitar rate limit de GitHub)
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.photos) && (Date.now() - parsed.timestamp < 10 * 60 * 1000)) {
        photoFilenames = parsed.photos;
      }
    }
  } catch (e) {
    // sessionStorage no disponible
  }

  // 2. Si no hay caché, consultar la API de GitHub
  if (!photoFilenames) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        signal: controller.signal,
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          photoFilenames = data
            .filter(item => item.type === 'file' && validExtensions.test(item.name))
            .map(item => item.name);

          // Si preferredFirst existe, ponerlo al inicio
          if (preferredFirst) {
            const firstIdx = photoFilenames.indexOf(preferredFirst);
            if (firstIdx > 0) {
              photoFilenames.splice(firstIdx, 1);
              photoFilenames.unshift(preferredFirst);
            }
          }

          try {
            sessionStorage.setItem(cacheKey, JSON.stringify({
              timestamp: Date.now(),
              photos: photoFilenames
            }));
          } catch (e) {}
        }
      }
    } catch (e) {
      // Fallback silencioso en modo offline o desarrollo local
    }
  }

  // 3. Si se obtuvieron fotos dinámicas, renderizar las diapositivas
  if (photoFilenames && photoFilenames.length > 0) {
    track.innerHTML = photoFilenames.map((filename, idx) => `
      <div class="carousel-slide">
        <div class="gallery-card">
          <img src="${path}/${encodeURIComponent(filename)}" alt="Comunidad en iglesia - Foto ${idx + 1}" class="gallery-card-img" loading="lazy">
        </div>
      </div>
    `).join('');
  }
}
