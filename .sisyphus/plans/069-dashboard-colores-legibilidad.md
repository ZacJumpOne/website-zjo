# Plan: Mejorar Colores y Legibilidad del Dashboard Preview

## Análisis

El dashboard preview agregado en el plan 068 tiene dos problemas:

### 1. Fondo demasiado transparente → apariencia opaca
`.dashboard-preview` usa `background: rgba(15, 23, 42, 0.6)` (slate-900 al 60%). Con `backdrop-filter: blur(10px)`, el gradiente claro del spotlight card se filtra, creando un tono gris-verdoso lavado sin identidad visual clara.

### 2. Texto ilegible por bajo contraste
Todos los textos usan tonos slate medio (slate-400/500) sobre un fondo oscuro:
- `.db-title`: `#64748b` → ~3.6:1 contraste (WCAG AA pide 4.5:1)
- `.db-metric-label`: `#64748b` → no alcanza AA
- `.db-metric-value`: `#94a3b8` → ~2.8:1, muy bajo
- `.db-node`, `.db-node.active .db-node-label`: `#64748b` / `#94a3b8`

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **Secciones CSS a modificar**: líneas 451-463 (`.dashboard-preview`), 493-498 (`.db-title`), 515-521 (`.db-metric-label`), 546-551 (`.db-metric-value`), 526 (`.db-metric-bar`), 536 (`.db-metric-fill`), 564-568 (`.wave-line`)
- **Secciones nodos**: 590-624

## Tareas de Implementación (para revisión del usuario)

- [ ] Subir opacidad del fondo de `.dashboard-preview` de `0.6` a `0.85` para que sea más sólido
- [ ] Aclarar `.db-title` de `#64748b` a `#94a3b8`
- [ ] Aclarar `.db-metric-label` de `#64748b` a `#cbd5e1`
- [ ] Aclarar `.db-metric-value` de `#94a3b8` a `#e2e8f0`
- [ ] Aclarar textos de `.db-node` de `#64748b` a `#94a3b8` y `.db-node.active .db-node-label` a `#cbd5e1`
- [ ] Aumentar visibilidad del fondo de `.db-metric-bar` de `rgba(148, 163, 184, 0.1)` a `0.2`
- [ ] Subir opacidad de `.wave-line` de `0.6` a `0.8`
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
