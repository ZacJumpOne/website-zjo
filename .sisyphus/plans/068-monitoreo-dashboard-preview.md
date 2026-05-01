# Plan: Agregar Dashboard Preview al Spotlight de Monitoreo

## Análisis

El spotlight card de **Monitoreo** en `Services.astro` tiene un layout de 2 columnas (`grid-template-columns: 1.1fr 0.9fr`) pero **solo tiene contenido en la columna izquierda** (`.spotlight-text`). La columna derecha está vacía, lo que deja un espacio en blanco notorio en vista desktop.

El **CSS ya existe completo** para el dashboard preview (`.spotlight-visual`, `.dashboard-preview`, `.db-header`, `.db-metrics`, `.db-waveform`, `.db-nodes` — líneas 389-568), pero **nunca se incluyó el HTML correspondiente en el template**.

El `<script>` también tiene lógica de waveform que espera encontrar `.wave-line` en el DOM (línea 860), lo cual no existe actualmente.

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- `.spotlight-content` (línea 62): grid de 2 columnas, solo contiene `.spotlight-text`
- CSS del dashboard preview: líneas 389-568 (completo, sin usar)
- Script waveform: línea 860 (busca `.wave-line` en DOM, no la encuentra)

## Especificación de Métricas

Las 3 barras del dashboard reflejan los features del servicio Monitoreo:

| Label          | Fill | Valor | Significado                  |
|----------------|------|-------|------------------------------|
| AUTOMATIZACIÓN | 85%  | 85%   | Tareas automatizadas activas |
| RESPALDOS      | 100% | 100%  | Respaldos Diarios completos  |
| DATABASE       | 75%  | 75%   | Integridad de la BD estable  |

Los valores se pasan mediante variable CSS `--fill` en cada `.db-metric-fill`.

## Tareas de Implementación (para revisión del usuario)

- [ ] Agregar el `div.spotlight-visual` dentro de `.spotlight-content`, después de `.spotlight-text`
- [ ] Incluir el dashboard preview HTML con:
  - Header tipo terminal: 3 dots (rojo, amarillo, verde) + título "monitoreo.sys"
  - 3 métricas: AUTOMATIZACIÓN (85%), RESPALDOS (100%), DATABASE (75%) con barras animadas
  - Waveform SVG animado
  - 4 nodos de estado (3 activos + 1 inactivo)
- [ ] Verificar que el grid de 2 columnas funcione correctamente en desktop (>992px)
- [ ] Verificar que en mobile (<992px) el layout colapse a 1 columna sin romperse
- [ ] Correr `bun run dev` para validar visualmente

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
