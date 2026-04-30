# Plan: Corregir CSS del CTA en Footer

## Análisis
El usuario reporta que la sección CTA en el Footer se ve diferente al sitio en producción, específicamente el label "Primer paso". Aunque agregamos la sección HTML y CSS, este no coincide exactamente con los estilos del sitio en producción (`/var/www/zerojumpone.com/dist/`).

## Estado Actual
- **Archivo**: `/home/hdez/ZeroJumpOne/proyectos/website-zjo/src/components/Footer.astro`
- **Cambios hechos**: Se agregó la sección CTA (HTML + CSS) pero el CSS no coincide con producción
- **Build**: Exitoso, pero visualmente diferente

## Tareas de Implementación

- [ ] Extraer el CSS exacto del build de producción para las clases: `.cta-label`, `.cta-heading`, `.footer-cta`, `.footer-cta-link`, `.cta-cta-arrow`, `.cta-line`, `.cta-content`
- [ ] Comparar propiedades CSS (colores, fuentes, gradientes, animaciones, pseudo-elementos)
- [ ] Identificar qué propiedades faltan o difieren en nuestro `Footer.astro`
- [ ] Corregir el bloque `<style>` en `Footer.astro` con los estilos exactos de producción
- [ ] Verificar que el build pase (`bun run build`)
- [ ] Hacer una comparación visual entre el build local y producción

## Diferencias Probables
1. **`.cta-label`**: Puede tener gradientes, animaciones, o colores diferentes
2. **`.footer-cta-link`**: El botón puede tener efectos de shimmer o gradientes no replicados
3. **`.cta-cta-arrow`**: Puede usar SVG o pseudo-elementos diferentes
4. **Scoping de Astro**: Los atributos `data-astro-cid` pueden estar afectando la aplicación de estilos

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.
