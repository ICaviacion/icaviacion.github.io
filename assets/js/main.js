/**
 * ==============================================================================
 * IGLESIA CRISTIANA EN AVIACIÓN — INTERACCIÓN Y FUNCIONALIDAD PRINCIPAL
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
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
