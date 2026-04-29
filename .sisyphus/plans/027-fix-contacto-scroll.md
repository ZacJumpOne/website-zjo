# Plan: Fix Contacto smooth scroll

## Análisis
El link "Contacto" usa `href="/?cat=soporte#contacto"` que causa un reload de página. Los demás nav links usan `/#hash` y hacen smooth scroll. Hay que igualar el patrón y pasar el parámetro de categoría por otro medio.

## Estado Actual
- Header.astro: Contacto href = `/?cat=soporte#contacto`
- Feedback.astro: Lee `?cat=` de URL para cambiar categoría

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar href de Contacto a `/#contacto` (mismo patrón que servicios, clientes, etc)
- [ ] Agregar `data-cat="soporte"` al link de Contacto
- [ ] Modificar script de Header.astro: al hacer smooth scroll a `#contacto`, leer `data-cat` y pasar al script de Feedback.astro
- [ ] Feedback.astro: escuchar evento custom o leer URL/hash para cambiar categoría al llegar a la sección

## Siguiente Paso
Confirmar con `/plan-go` para ejecutar.
