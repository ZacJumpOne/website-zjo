# Plan: Optimización de Imágenes sin pérdida de resolución

## Análisis

El usuario reporta que las imágenes del sitio tardan en cargar. Necesitamos optimizar las 45+ imágenes en `/public/images/` **sin perder resolución**.

**Técnicas a aplicar:**
1. **Formatos modernos**: Convertir PNG/JPG → WebP (mismo contenido visual, ~30-50% menor peso)
2. **Lazy loading nativo**: `loading="lazy"` en todas las imágenes
3. **Dimensions explícitas**: Prevenir CLS (Cumulative Layout Shift) definiendo width/height
4. **Blur-up/placeholder**: Implementar low-quality placeholder mientras carga la imagen real

**Nota importante**: WebP NO pierde resolución - es un codec con la MISMA calidad visual que PNG/JPG pero con mejor compresión. El usuario no notará diferencia visual.

## Estado Actual

- **45 imágenes** en `/public/images/` (PNG, JPG, PNG)
- **Usadas en**:
  - `src/components/Hero.astro` - Carousel con 5 slides (web_erp3.png, boutique.png, retail.png, zapato.png, construccion.png)
  - `src/components/Portfolio.astro` - Grid de portafolio con `background-image`
  - `src/components/FloatingCards.astro` - Cards con `background-image`
  - `src/pages/nuestra-historia.astro`
  - `src/pages/solucion/[slug].astro`
  - `src/pages/construyendo.astro`
  - `src/pages/ejemplo-procesos.astro`
  - `src/components/Clients.astro`
- **Sin lazy loading** actualmente
- **Sin optimización de formato**

## Tareas de Implementación

- [ ] **Tarea 1**: Crear script de conversión PNG/JPG → WebP usando sharp (o converter CLI)
- [ ] **Tarea 2**: Agregar integración `@astrojs/image` a astro.config.mjs (o usar built-in image)
- [ ] **Tarea 3**: Actualizar Hero.astro carousel - agregar loading="lazy" y width/height a las 5 imágenes
- [ ] **Tarea 4**: Actualizar FloatingCards.astro - agregar loading="lazy" y dimensiones explícitas
- [ ] **Tarea 5**: Actualizar Portfolio.astro - usar Astro Image para bodyImages y cardVisuals
- [ ] **Tarea 6**: Actualizar Clients.astro - aplicar lazy loading
- [ ] **Tarea 7**: Verificar otras páginas (nuestra-historia, solucion/[slug], etc.)
- [ ] **Tarea 8**: Run build y verificar no hay errores

## Siguiente Paso

Confirmar que proceda a ejecutar el plan con `/plan-go`.