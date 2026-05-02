# Plan: Fix Botón "Hablemos" — Navegación Inconsistente

## Análisis

El botón "Hablemos" del footer usa `href="#contacto"`. El problema es que la sección con `id="contacto"` (Feedback.astro) **solo existe en la homepage** (`index.astro`). En las otras 8 páginas (nuestra-historia, blog, faqs, solucion/*, etc.) no se renderiza Feedback, por lo que el anchor `#contacto` no existe y el botón no hace nada o salta al inicio de la página.

### Causa raíz

| Componente | ¿Dónde se usa? |
|---|---|
| `Footer.astro` (contiene "Hablemos" → `#contacto`) | **9 páginas** (todas) |
| `Feedback.astro` (contiene `id="contacto"`) | **1 página** — solo `index.astro` |

El footer se renderiza en todas las páginas pero el target del anchor solo existe en una.

## Estado Actual

- **Footer.astro** línea 20: `href="#contacto"`
- **Feedback.astro** línea 6: `id="contacto"` (solo en homepage)
- **Header.astro** nav: `href="/#contacto"` (ya incluye la ruta completa)

## Tareas de Implementación

- [x] Cambiar `href="#contacto"` → `href="/#contacto"` en Footer.astro
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `ab60d38`
- **Archivo modificado**: `src/components/Footer.astro` (línea 20)
- **Build final**: ✅ 14 pages, 0 errores, 21.51s

### Por qué `/#contacto` en vez de `#contacto`

- `href="/#contacto"` fuerza navegación a la homepage y luego al anchor, funcionando desde cualquier página
- El Header ya usa `/#contacto` correctamente, así que es consistente con el resto del sitio

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
