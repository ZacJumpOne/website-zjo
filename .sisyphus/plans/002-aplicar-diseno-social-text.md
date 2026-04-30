# Plan: Aplicar diseño de texto de Social.astro a Services, Portfolio y Clients

## Análisis
El usuario solicita aplicar el diseño del texto "Contacta con nosotros" de `Social.astro` (clases `.social-tag`, `.social-title`, `.social-description`, `.social-cta-hint`) a las secciones de texto equivalentes en:
- `Services.astro` - texto "Servicios"
- `Portfolio.astro` - texto "Portafolio"  
- `Clients.astro` - texto "Clientes"

### Diseño de referencia (Social.astro):
- **`.social-tag`**: `font-size: 0.75rem`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.1em`, color `var(--arbol-claro)`, fondo `linear-gradient(135deg, var(--arbol-10), rgba(16, 185, 129, 0.08))`, `border-radius: 50px`, `padding: 6px 14px`
- **`.social-title`**: `font-size: clamp(2rem, 4vw, 2.75rem)`, `font-weight: 800`, `color: #0f172a`, `line-height: 1.15`, `letter-spacing: -0.02em`
- **`.social-description`**: `font-size: 1.05rem`, `color: #64748b`, `line-height: 1.7`
- **`.social-cta-hint`** (opcional): flecha animada con `@keyframes hintBounce`

## Estado Actual
- **Archivo fuente**: `src/components/Social.astro` (líneas 53-64 para HTML, 141-195 para estilos)
- **Archivos objetivo**:
  - `src/components/Services.astro` - sección `section-header` (líneas 52-58)
  - `src/components/Portfolio.astro` - sección `section-header` (líneas 18-22)
  - `src/components/Clients.astro` - sección `section-header` (líneas 15-21)

### Estilos actuales a modificar:
- `Services.astro`: `.section-label`, `.section-title`, `.section-subtitle` (líneas 167-176, 103-108, 110-115 en global.css)
- `Portfolio.astro`: `.section-header`, `.section-label`, `.section-title`, `.section-subtitle` (usa estilos globales)
- `Clients.astro`: `.section-header`, `.section-label`, `.section-title`, `.section-subtitle` (líneas 81-90, 16-20)

## Tareas de Implementación
- [x] Actualizar `.section-label` en `Services.astro` para que coincida con `.social-tag` (mismo tamaño, gradiente, uppercase, border-radius)
- [x] Actualizar `.section-title` en `Services.astro` para que coincida con `.social-title` (clamp, font-weight 800, line-height 1.15, letter-spacing)
- [x] Actualizar `.section-subtitle` en `Services.astro` para que coincida con `.social-description` (font-size 1.05rem, line-height 1.7)
- [x] Actualizar estilos en `Portfolio.astro` (`.section-header` con animación `data-animate`, `.section-label` como `.social-tag`, `.section-title` como `.social-title`, `.section-subtitle` como `.social-description`)
- [x] Actualizar estilos en `Clients.astro` (`.section-header` con animación `data-animate`, `.section-label` como `.social-tag`, `.section-title` como `.social-title`, `.section-subtitle` como `.social-description`)
- [x] Agregar animación `hintBounce` y clase opcional `.social-cta-hint` si se desea el efecto de flecha (solo en Services y Portfolio que tienen enlaces CTA)
- [x] Ejecutar `bun run build` para validar que no hay errores 

## Resultados de Implementación

### Commit Inicial
- **Hash**: `9ec8b26`
- **Mensaje**: `chore: estado antes de implementar plan aplicar-diseno-social-text`

### Cambios Aplicados
- `src/components/Services.astro` - Agregadas clases `.section-label`, `.section-title`, `.section-subtitle` con estilos idénticos a Social.astro (`.social-tag`, `.social-title`, `.social-description`). Agregada animación `hintBounce` y clase `.social-cta-hint`.
- `src/components/Portfolio.astro` - Agregado `data-animate` al `.section-header`. Agregadas clases `.section-label`, `.section-title`, `.section-subtitle` con estilos idénticos a Social.astro. Agregada animación `hintBounce` y clase `.social-cta-hint`.
- `src/components/Clients.astro` - Agregado `data-animate` al `.section-header`. Agregadas clases `.section-label`, `.section-title`, `.section-subtitle` con estilos idénticos a Social.astro.

### Build Final
- **Estado**: ✓ Exitoso
- **Tiempo**: 19.17s
- **Páginas generadas**: 14
- **Sin errores de CSS o TypeScript**

---
📁 Nota: Los estilos `.section-label`, `.section-title`, `.section-subtitle` están definidos en `src/styles/global.css` (líneas 93-115) y se usan en múltiples componentes. Se debe evaluar si los cambios deben hacerse en global.css (afecta a todos) o sobrescribir en cada componente individualmente.
