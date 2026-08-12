# Plan: Corregir CSS del CTA en Footer

## Análisis
El usuario reporta que la sección CTA en el Footer se ve diferente al sitio en producción, específicamente el label "Primer paso". Aunque agregamos la sección HTML y CSS, este no coincide exactamente con los estilos del sitio en producción (`/var/www/zerojumpone.com/dist/`).

## Estado Actual
- **Archivo**: `/home/hdez/ZeroJumpOne/proyectos/website-zjo/src/components/Footer.astro`
- **Cambios hechos**: Se agregó la sección CTA (HTML + CSS) pero el CSS no coincide con producción
- **Build**: Exitoso, pero visualmente diferente

## Tareas de Implementación

- [x] Extraer el CSS exacto del build de producción para las clases: `.cta-label`, `.cta-heading`, `.footer-cta`, `.footer-cta-link`, `.cta-cta-arrow`, `.cta-line`, `.cta-content`
- [x] Comparar propiedades CSS (colores, fuentes, gradientes, animaciones, pseudo-elementos)
- [x] Identificar qué propiedades faltan o difieren en nuestro `Footer.astro`
- [x] Corregir el bloque `<style>` en `Footer.astro` con los estilos exactos de producción
- [x] Verificar que el build pase (`bun run build`)
- [x] Hacer una comparación visual entre el build local y producción

## Diferencias Probables
1. **`.cta-label`**: Puede tener gradientes, animaciones, o colores diferentes
2. **`.footer-cta-link`**: El botón puede tener efectos de shimmer o gradientes no replicados
3. **`.cta-cta-arrow`**: Puede usar SVG o pseudo-elementos diferentes
4. **Scoping de Astro**: Los atributos `data-astro-cid` pueden estar afectando la aplicación de estilos

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

## Resultados de Implementación (046-fix-cta-css)
- Commit inicial: `fc79a5e` ("chore: estado antes de implementar plan 046-fix-cta-css")
- Cambios aplicados en `Footer.astro`:
  - `.cta-label`: Agregado gradiente de texto
  - `.footer-cta-link`: Agregado efecto shimmer (::before)
  - `.cta-cta-arrow`: Mejorado con transición y flex
- Build final: Exitoso (17.55s, 14 páginas)
