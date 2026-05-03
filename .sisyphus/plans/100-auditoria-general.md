# Plan: Auditoría General del Proyecto

## Análisis

Revisión general del proyecto Zero Jump One: build, LSP, SEO, accesibilidad, referencias rotas.

### Resultados

| Categoría | Estado |
|-----------|--------|
| **Build** | ✅ 15 páginas, 0 errores, ~22s |
| **LSP** | ⚠️ Oxlint no instalado (no hay linter configurado) |
| **SEO** | ✅ Layout completo: title, meta description, OG, Twitter Cards, canonical, JSON-LD, CSP |
| **Imágenes** | ✅ Todas con `alt` y `loading="lazy"` |
| **Accesibilidad** | ⚠️ 1 imagen con `alt=""` y `src=""` vacío |
| **Referencias** | ✅ Sin enlaces rotos detectados |

### Problemas Encontrados

#### 1. Imagen modal con src y alt vacíos (Medio)
- **Archivo**: `src/pages/ejemplo-procesos.astro`, línea 58
- **Código**: `<img id="modal-image" src="" alt="" />`
- **Problema**: El `src=""` vacío provoca que el navegador haga una petición a la URL base de la página (404 implícito). El `alt=""` es correcto para una imagen decorativa, pero debería ser informativo cuando la imagen se carga.
- **Solución**: Usar `src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"` como placeholder, o eliminarlo del HTML y asignarlo solo desde JS.

#### 2. Sin linter configurado (Bajo)
- **Problema**: El proyecto no tiene ESLint, oxlint, ni prettier configurados. El archivo `astro.config.mjs` y `tsconfig.json` existen pero no hay herramientas de calidad de código.
- **Código existente**: Se encuentran errores de ortografía en componentes (acentos faltantes en strings en español) que un linter no detectaría, pero una herramienta como el corrector ortográfico del IDE sí.
- **Solución**: Opcional - agregar `eslint-plugin-astro` o `prettier` para consistencia.

#### 3. Sin tests configurados (Informativo)
- **Problema**: No hay tests unitarios ni de integración. El proyecto es un sitio estático, pero podría beneficiarse de tests visuales con Playwright.
- **Solución**: Opcional - agregar `@playwright/test` para pruebas de snapshot.

## Tareas Propuestas

- [x] Corregir imagen modal en `ejemplo-procesos.astro`: reemplazar `src=""` con placeholder SVG
- [x] Verificar build nuevamente

## Resultados de Implementación

- **Commit inicial**: `61979b0`
- **Archivo modificado**: `src/pages/ejemplo-procesos.astro` (línea 58)
- **Build final**: ✅ 15 pages, 0 errores, 18.94s

### Cambios aplicados:
- `src=""` → `src="data:image/svg+xml,%3Csvg..."` (placeholder SVG transparente que evita 404)
- `alt=""` → `alt="Ampliar imagen del proceso"` (alt descriptivo en vez de vacío)
