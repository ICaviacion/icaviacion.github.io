# Iglesia Cristiana en Aviación — Sitio Web Oficial

Sitio web oficial y responsivo para la **Iglesia Cristiana en Aviación**, ubicada en la Colonia Aviación (sobre/cerca de Vasco de Quiroga), en San Luis Potosí, S.L.P., México.

Diseñado y construido para ser alojado directamente en **GitHub Pages** en:  
👉 **[https://icaviacion.github.io/](https://icaviacion.github.io/)**

---

## 🌟 Características del Sitio

- **Diseño Cálido, Moderno y Confiable**: Estética cuidada para transmitir el sentido de comunidad, fe y acogida familiar.
- **Mobile-First & 100% Responsivo**: Diseñado y probado para teléfonos móviles de todos los tamaños, tablets y computadoras de escritorio.
- **Accesibilidad Web (A11y)**: Navegación semántica HTML5, soporte para teclado, alto contraste de color y respeto por preferencias de movimiento reducido (`prefers-reduced-motion`).
- **SEO Local Integrado**: Metadatos Open Graph, geo-etiquetas para San Luis Potosí y esquema de datos estructurados de Schema.org (`Church`).
- **Cero Dependencias Frágiles**: No requiere comandos de compilación complejos (`npm`, `webpack`, etc.), garantizando que nunca se desconfigure ni se rompa en el servidor.
- **Mantenimiento Sencillo**: Información editable centralizada en un archivo de configuración claro y comentado.

---

## 📍 Estructura del Proyecto

```text
icaviacion.github.io/
├── index.html              # Página principal (estructura semántica completa)
├── README.md               # Documentación y guía de mantenimiento
└── assets/
    ├── css/
    │   └── style.css       # Hoja de estilos (Design tokens, Grid, Flexbox, responsive)
    └── js/
        ├── config.js       # ARCHIVO DE CONFIGURACIÓN (Datos editables de la iglesia)
        └── main.js         # Interacción, menú móvil, acordeón y utilidades
```

---

## ✏️ ¿Cómo actualizar los datos de la iglesia?

Para facilitar el mantenimiento a personas no técnicas, los datos principales se encuentran en:  
📂 **[`assets/js/config.js`](assets/js/config.js)**

### Campos listos para editar cuando el liderazgo confirme la información:

1. **Horarios de Culto y Reuniones**:
   - `schedules[0].time`: Horario del Culto Dominical (p. ej. `"Domingo 11:00 AM"`).
   - `schedules[1].time`: Horario de Estudio Bíblico (p. ej. `"Miércoles 7:00 PM"`).
   - `schedules[2].time`: Horario de Tiempo de Oración (p. ej. `"Viernes 7:00 PM"`).

2. **Dirección y Ubicación**:
   - `location.exactAddress`: Número exterior y calle exacta cuando se confirme.
   - `location.googleMapsUrl`: Enlace directo al pin exacto de Google Maps.

3. **Canales de Contacto**:
   - `contact.phone` y `contact.phoneLink`: Teléfono de atención de la iglesia.
   - `contact.whatsappNumber` y `contact.whatsappLink`: Enlace directo para chat de WhatsApp.
   - `contact.email` y `contact.emailLink`: Correo electrónico oficial.
   - `contact.social`: Enlaces a perfiles oficiales de Facebook e Instagram.

---

## 📋 Información Pendiente de Confirmar

Para cumplir con la política de **no inventar datos** de la iglesia, actualmente se muestran marcadores de posición (`[POR CONFIRMAR]`) en los siguientes rubros:

- [ ] Horarios exactos de la reunión dominical y actividades entre semana.
- [ ] Número exterior exacto del local de reunión en Vasco de Quiroga.
- [ ] Número oficial de WhatsApp y teléfono de contacto.
- [ ] Correo electrónico oficial de la iglesia.
- [ ] Enlaces a páginas de Facebook o redes sociales oficiales.
- [ ] Confirmación de ministerios y actividades activas (Niños, Jóvenes, Familias, Alabanza).

---

## 🚀 Cómo previsualizar el sitio localmente

No necesitas instalar Node ni gestores de paquetes. Puedes previsualizarlo de cualquiera de las siguientes formas:

### Opción 1: Servidor local con Python (Recomendado)
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
python3 -m http.server 8000
```
Luego abre en tu navegador: `http://localhost:8000`

### Opción 2: Abrir directamente el archivo
Haz doble clic en el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Safari, Edge, Firefox).

---

## 🌐 Publicación en GitHub Pages

1. Sube los cambios a la rama principal (`main`):
   ```bash
   git add .
   git commit -m "Actualizar sitio web de Iglesia Cristiana en Aviación"
   git push origin main
   ```
2. En GitHub, ve a **Settings > Pages**.
3. En **Source**, selecciona **Deploy from a branch** y elige la rama `main` y carpeta `/ (root)`.
4. En pocos segundos, el sitio estará en línea en: **`https://icaviacion.github.io/`**.
