# Plan: Mejoras Generales del Sitio

## Estado Actual (resumen de auditoría)

### Arquitectura
- **Framework**: Astro 4.x + React + Ant Design 5.x
- **9 páginas**, **9 componentes**, CSS por componente + `global.css`
- **Build**: 14 páginas, dist 5.7MB, index.html 103KB
- **Diseño**: Light theme SaaS, verde esmeralda primario, azul secundario

### Fortalezas detectadas
- Sistema de variables CSS bien definido (colores, sombras, gradientes)
- Tipografía con personalidad: Plus Jakarta Sans + Noticia Text (serif)
- Dashboard preview en Monitoreo (recién implementado) añade carácter
- Marquee de clientes con fade lateral, scroll progress bar
- SEO sólido: Open Graph, Twitter Cards, JSON-LD, CSP headers

### Áreas de mejora detectadas

| # | Hallazgo | Archivo(s) | Severidad |
|---|---|---|---|
| 1 | Inconsistencia tipográfica: `Inter` en antd ConfigProvider vs `Plus Jakarta Sans` en global.css | `index.astro`, `global.css` | Media |
| 2 | Estilos inline innecesarios (color, fontSize) | `Header.astro`, `nuestra-historia.astro`, `FloatingCards.astro` | Baja |
| 3 | Colores hardcodeados en vez de variables CSS | `Hero.astro` (`#0f172a`), varios | Media |
| 4 | Hero.astro muy extenso (1250 líneas) con 6 slides | `Hero.astro` | Media |
| 5 | Sin dark mode implementado (solo transición definida) | `global.css` | Baja |
| 6 | Faltan breakpoints intermedios (solo 992px y 768px) | Varios componentes | Baja |
| 7 | `.container` duplicado en Hero.astro y global.css | `Hero.astro`, `global.css` | Baja |
| 8 | Imágenes sin `loading="lazy"` consistente | Varios componentes | Media |
| 9 | Sin animación de entrada en secciones como Clients/Feedback | `Clients.astro`, `Feedback.astro` | Baja |
| 10 | Año del copyright estático (extraído de versión, no de Date) | `Footer.astro` | Baja |

---

## Mejoras Propuestas (3 niveles)

### 🔴 Quick Wins — alto impacto, bajo esfuerzo

- [ ] **Unificar tipografía**: Cambiar `fontFamily` en antd ConfigProvider de `'Inter'` → `'Plus Jakarta Sans'` en `index.astro` y resto de páginas. Eliminar conflicto Inter vs Plus Jakarta Sans.
- [ ] **Extraer inline styles**: Mover `style="color: var(--arbol-claro)"` de `Header.astro` a clase CSS `.brand-name`. Mover `fontSize: "2.25rem"` de íconos en `nuestra-historia.astro` a clase `.section-icon`.
- [ ] **Usar variables CSS en Hero**: Reemplazar `#0f172a` por `var(--text-dark)` en `.hero-title` y otros hardcodeos similares.
- [ ] **Eliminar `.container` duplicado** en Hero.astro (ya existe en global.css).
- [ ] **Agregar `loading="lazy"`** a imágenes que no lo tengan en Clients.astro, Portfolio.astro.

### 🟡 Mejoras Medias — medio impacto, medio esfuerzo

- [ ] **Agregar animaciones de entrada** a secciones que no las tienen: Clients.astro (data-animate), Feedback.astro, Social.astro. Usar el mismo patrón `fadeInUp` ya definido.
- [ ] **Agregar breakpoint 480px** en componentes que solo tienen 768px y 992px (Services, Hero) para mejor soporte de pantallas pequeñas.
- [ ] **Optimizar tipografía mobile**: Ajustar `clamp()` en `.section-title` para evitar texto desproporcionado en móviles.
- [ ] **Agregar skeleton/placeholder** básico para el Hero mientras carga (mejora percepción de rendimiento).
- [ ] **Scroll progress bar**: Mover el `::-webkit-scrollbar` de `index.astro` a `global.css` para que aplique a todas las páginas.

### 🔵 Estratégicas — para discusión

- [ ] **Dark mode**: Implementar toggle con `prefers-color-scheme` y clase `.dark` en `<html>`. Las variables CSS ya están parcialmente preparadas.
- [ ] **Simplificar Hero.astro**: Extraer slides a un archivo de datos separado (`src/data/hero-slides.ts`) para reducir el componente de 1250 a ~500 líneas.
- [ ] **Añadir `loading="eager"` + `fetchpriority="high"`** en hero image para mejorar LCP.
- [ ] **Preload de fuentes**: Agregar `<link rel="preload">` para NoticiaText-Bold.ttf en Layout.astro.
- [ ] **Footer año dinámico**: Usar `new Date().getFullYear()` en vez de parsear la versión.

---

## Siguiente Paso

Revisa los 3 niveles y dime cuáles autorizas. Sugiero empezar por los **Quick Wins** (30 min) para sentir mejora inmediata.

Usa `/plan-go` cuando estés listo para ejecutar.
