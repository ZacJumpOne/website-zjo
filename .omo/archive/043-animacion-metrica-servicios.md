# Plan: Animación de métrica 99.9% en Servicios

## Análisis
El usuario quiere animar el número "99.9%" en la sección de Monitoreo (Services.astro), similar a como se animan los contadores del Hero (ej. "100 procesos entregados"). Además, desea cambiar el texto "uptime" al español.

Actualmente en Services.astro, la métrica se muestra estática:
```html
<span class="metric-label">99.9%</span>
<span class="metric-sub">uptime</span>
```

El Hero ya tiene una función `animateCounter()` que anima números con `IntersectionObserver`. Podemos reutilizar el mismo patrón pero adaptado para decimales (99.9) y con el símbolo `%` persistente.

## Estado Actual
- **Services.astro**: Métrica estática `99.9%` + `uptime` en `.vb-3` (bloque visual)
- **Hero.astro**: Tiene `animateCounter()` con `IntersectionObserver` que anima `.stat-number` usando `data-count`
- El script del Hero está aislado (no compartido con Services)

## Tareas de Implementación (para revisión del usuario)
- [ ] **T1**: Agregar atributo `data-count="99.9"` y clase `.metric-counter` al elemento `.metric-label` en Services.astro
- [ ] **T2**: Cambiar texto "uptime" a "disponibilidad" (español)
- [ ] **T3**: Agregar script en Services.astro con `IntersectionObserver` + función `animateCounter` adaptada para decimales (paso incremental de 0.1 → 99.9, formato con 1 decimal, símbolo `%` fijo al final)
- [ ] **T4**: Verificar build

## Detalles Técnicos
La animación del Hero usa `Math.floor(current)` para enteros. Para decimales:
- `target = 99.9`
- Formato: `current.toFixed(1)` para mostrar `0.1%`, `0.2%`, ..., `99.9%`
- Duración: ~2s (consistente con Hero)
- El `%` se mantiene visible durante toda la animación (no se anima el símbolo)

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.
