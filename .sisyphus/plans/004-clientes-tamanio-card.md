# Plan: Ajuste de tamaño del card de clientes

## Estado: PENDIENTE

## Análisis
Ajustar el tamaño del `.client-card` en `Clients.astro` para hacer más compacto el diseño.

## Estado Actual
**Archivo**: `src/components/Clients.astro`

| Elemento | Valor Desktop | Valor Mobile (≤768px) |
|----------|---------------|----------------------|
| `.client-card` padding | `24px 32px` | `16px 20px` |
| `.client-card` min-width | `180px` | `140px` |
| `.logo-svg` tamaño | `64px` | `48px` |

## Opción Recomendada
Valores más compactos:

| Elemento | Valor Actual | Propuesta |
|---------|------------|-----------|
| Desktop padding | `24px 32px` | `20px 24px` |
| Desktop min-width | `180px` | `160px` |
| Mobile min-width | `140px` | `120px` |

## Tareas de Implementación
- [x] Ajustar padding del card (desktop y mobile)
- [x] Ajustar min-width del card (desktop y mobile)
- [x] Test responsive

## Siguiente Paso
Esperar confirmación del usuario para proceder.