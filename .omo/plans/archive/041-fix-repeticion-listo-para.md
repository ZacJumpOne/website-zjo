# Plan: Eliminar repetición "Listo para" entre Social y Footer CTA

## Análisis
Tanto la sección Redes Sociales (`Social.astro`) como el CTA del Footer (`Footer.astro`) usan variaciones de "¿Listo para...":
- **Social.astro**: "¿Listo para<br />conectarte?"
- **Footer.astro**: "¿Listo para comenzar<br />tu proyecto?"

Esto se siente repetitivo para el usuario. Se propone cambiar el copy del CTA del Footer para que sea distinto y complementario al de Redes Sociales.

## Estado Actual
- `src/components/Social.astro` (línea 57): `¿Listo para<br />conectarte?`
- `src/components/Footer.astro` (línea 14): `¿Listo para comenzar<br />tu proyecto?`

## Tareas de Implementación
- [ ] **P41.1**: Cambiar heading del CTA en `Footer.astro` de "¿Listo para comenzar tu proyecto?" a "Hablemos de<br />tu próximo proyecto"
- [ ] **P41.2**: Ajustar CSS si el nuevo texto requiere cambio de tamaño/espaciado
- [ ] **P41.3**: Verificar build

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/041-fix-repeticion-listo-para.md`
