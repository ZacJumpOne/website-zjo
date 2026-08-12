# Plan: Rediseñar UI Monitoreo con colores del logo

## Análisis
El usuario quiere rediseñar la card "Monitoreo" (spotlight) en `Services.astro` con una UI atractiva ("lindo") usando los colores de fondo del logo: **azul `#0066ff`** y **naranja `#ff6600`** (gradiente `linear-gradient(135deg, #0066ff, #ff6600)` del favicon.svg).

Actualmente la card usa paleta verde (`--arbol-claro: #3AB34A`), sin relación con la identidad visual del logo.

## Estado Actual
Archivo: `src/components/Services.astro`

Elementos a rediseñar en la sección spotlight (Monitoreo):
1. **`.spotlight`** - fondo oscuro con borde verde → usar gradiente logo azul/naranja
2. **`.spotlight-icon-bg`** - gradiente verde → gradiente logo
3. **`.spotlight-cta`** - botón verde → azul con hover naranja
4. **`.dashboard-preview`** - borde y fondo verde → azul/naranja
5. **`.db-dot--green`** - puntos verdes → azul (Server 1)
6. **`.db-metric-fill`** - barras verdes → gradiente logo
7. **`.wave-line`** - línea verde → gradiente SVG logo
8. **`.db-node.active .db-node-pulse`** - pulso verde → azul/naranja alternado
9. **`.spotlight-bleed`** - glow verde → glow naranja/azul
10. **Tipografía** - Monaco/Menlo → algo más distintivo (JetBrains Mono o similar)

## Tareas de Implementación (para revisión del usuario)
- [x] Actualizar `.spotlight` - fondo con gradiente sutil azul oscuro, borde azul logo
- [x] Actualizar `.spotlight-icon-bg` - usar gradiente logo (#0066ff → #ff6600)
- [x] Actualizar `.spotlight-cta` - fondo azul, hover naranja, shimmer effect
- [x] Actualizar `.dashboard-preview` - borde azul, header bar animado con gradiente logo
- [x] Actualizar `.db-metric-fill` - barras con gradiente logo y borde naranja al final
- [x] Agregar SVG gradient `waveGradient` y actualizar `.wave-line` para usar `stroke="url(#waveGradient)"`
- [x] Actualizar `.db-dot--green` → `.db-dot--blue` con color azul logo
- [x] Actualizar `.db-node.active .db-node-pulse` - Server 1 azul, Server 2 naranja (animaciones diferenciadas)
- [x] Actualizar `.spotlight-bleed` - glow con radial gradient naranja/azul
- [x] Actualizar tipografía monospace a JetBrains Mono en dashboard
- [x] Actualizar media queries correspondientes
- [x] Ejecutar `bun run build` para verificar

## Resultados de Implementación
- Commit inicial: `5238780` - "chore: estado antes de implementar plan 049-monitoreo-ui-logo-colors"
- Cambios aplicados: `src/components/Services.astro`
- Build final: ✓ Exitoso (22.11s, 14 páginas)
- Colores integrados: azul `#0066ff`, naranja `#ff6600`, gradientes logo en toda la card Monitoreo

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/049-monitoreo-ui-logo-colors.md`
