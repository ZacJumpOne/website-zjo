# Plan: Arreglar navegación del Header en páginas de detalle

## Análisis
El menú del Header deja de funcionar cuando el usuario está en una página de detalle como `/solucion/erp-jump-one`. Esto ocurre porque los enlaces del menú usan anclas relativas (`#portafolio`, `#servicios`), pero esas anclas solo existen en `index.astro`. En las páginas de detalle (`/solucion/[slug].astro`) no existe ninguna sección con esos IDs.

## Estado Actual
- **Header.astro**: Enlaces con anclas relativas (`href="#portafolio"`)
- **index.astro**: Tiene `<Portfolio />` y `<Services />` con `id="portafolio"` e `id="servicios"`
- **solucion/[slug].astro**: NO tiene secciones con esos IDs - el menú no funciona

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar los href del Header para usar rutas absolutas (`/`
#portafolio`, `/`
#servicios`) en lugar de relativas (`#portafolio`)
- [ ] Verificar que el enlace "Inicio" también apunte a `/` o `/`
#inicio`
- [ ] Verificar build después del cambio

## Siguiente Paso
Confirmar que la solución propuesta es correcta antes de implementar.