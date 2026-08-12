# Plan: Colores del teléfono en Header

## Análisis
El usuario solicita que el número de teléfono en el Header tenga los mismos colores que los enlaces de navegación:

**Estado actual en `src/components/Header.astro`:**
- **Teléfono** (`.header-phone`): `color: var(--text-gray);` (gris) / Hover: `var(--primary)` ❌
- **Enlaces** (`.nav-list a`): `color: var(--arbol-obscuro);` / Hover: `var(--arbol-claro)` ✅

**Cambio requerido:**
- Teléfono normal: debe cambiar de `var(--text-gray)` a `var(--arbol-obscuro)`
- Teléfono hover: debe cambiar de `var(--primary)` a `var(--arbol-claro)`

## Estado Actual
- **Archivo**: `src/components/Header.astro`
- **Línea 199**: `.header-phone { color: var(--text-gray); }`
- **Línea 204-206**: `.header-phone:hover { color: var(--primary); }`

## Tareas de Implementación
- [x] Cambiar en `src/components/Header.astro` línea 199: `color: var(--text-gray);` por `color: var(--arbol-obscuro);` en `.header-phone`
- [x] Cambiar en `src/components/Header.astro` línea 204-206: `color: var(--primary);` por `color: var(--arbol-claro);` en `.header-phone:hover`

## Siguiente Paso
Ejecutar `/plan-go` para aplicar los cambios.

## Notas
El teléfono debe coincidir visualmente con los enlaces de navegación para mantener consistencia en el Header.

---

## Resultados de Implementación
- **Commit inicial**: `3d65f4f` - "chore: estado antes de implementar plan 067-header-phone-colors"
- **Archivos modificados**: `src/components/Header.astro`
- **Cambios aplicados**:
  - Línea 199: `.header-phone` cambiado de `var(--text-gray)` a `var(--arbol-obscuro)`
  - Línea 204-206: `.header-phone:hover` cambiado de `var(--primary)` a `var(--arbol-claro)`
- **Build final**: ✓ Exitoso (17.61s)
