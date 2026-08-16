# Iglesia Cristiana en Aviación — Sitio Web Oficial

Sitio web oficial y responsivo para la **Iglesia Cristiana en Aviación A.R.**, ubicada en **Av. Vasco de Quiroga 115, Industrial Aviación 1ra Secc**, San Luis Potosí, S.L.P., México.

Diseñado y construido para ser alojado directamente en **GitHub Pages** en:  
👉 **[https://icaviacion.github.io/](https://icaviacion.github.io/)**

---

## 🌟 Información Verificada del Templo

- **Dirección**: Av. Vasco de Quiroga 115, Industrial Aviación 1ra Secc, C.P. 78140, San Luis Potosí, S.L.P., México.
- **Teléfono**: [+52 (444) 811-0970](tel:+524448110970)
- **Horarios de Servicios Dominicales**:
  1. **Primer Servicio (Matutino)**: 9:00 AM
  2. **Segundo Servicio (Mediodía)**: 11:30 AM
  3. **Tercer Servicio (Vespertino)**: 6:00 PM
- **Ubicación en Google Maps**: [Ver ficha oficial en Google Maps](https://www.google.com/maps/place/Iglesia+Cristiana+en+Aviaci%C3%B3n+A.R./@22.1785899,-100.9954835,17z)
- **Identidad Visual**: Paleta cálida basada en el templo real (cúpula de cantera y cruz de vitral rojo carmesí sobre la fachada).

---

## 🚀 Estructura del Proyecto

```text
icaviacion.github.io/
├── index.html              # Página principal con Schema.org, 3 servicios y mapa
├── README.md               # Documentación y guía de mantenimiento
└── assets/
    ├── css/
    │   └── style.css       # Hoja de estilos (Design tokens rojo carmesí/cantera, responsive)
    └── js/
        ├── config.js       # ARCHIVO DE CONFIGURACIÓN (Datos editables centralizados)
        └── main.js         # Menú móvil, acordeón FAQ, portapapeles y utilidades
```

---

## ✏️ ¿Cómo actualizar los datos de la iglesia?

Para editar teléfonos, horarios o enlaces en el futuro, los datos principales se encuentran organizados en:  
📂 **[`assets/js/config.js`](assets/js/config.js)**

---

## 💻 Previsualización Local y Despliegue

### Servidor Local
```bash
python3 -m http.server 8000
```
Abre en tu navegador: `http://localhost:8000`

### Publicación en GitHub Pages
```bash
git add .
git commit -m "Actualizar con información oficial: dirección, 3 servicios dominicales, teléfono e identidad"
git push origin main
```
El sitio se actualiza automáticamente en: **`https://icaviacion.github.io/`**.
