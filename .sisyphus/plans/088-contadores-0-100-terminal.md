# Plan: Animación de Contadores 0→100% en Terminal

## Análisis

Los porcentajes `100%` en las líneas de log del terminal (`<span class="log-status">100%</span>`) se muestran estáticos. El usuario quiere que se animen de 0 a 100% en ~3 segundos al cargar, con efecto de contador numérico.

CSS no puede animar contenido de texto — se requiere JavaScript. El enfoque: usar el `IntersectionObserver` ya existente en el script de la página para detectar cuando el terminal entra en viewport, y disparar un contador con `requestAnimationFrame`.

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **Elementos a animar**: 3 `<span class="log-status">` (líneas 116)
- **Valor actual**: hardcodeado `100%`
- **Script existente**: IntersectionObserver para `[data-tilt]` y `.section-header` (líneas 837-868)

## Tareas de Implementación

- [x] Agregar `data-counter` a cada `<span class="log-status">` con target `100`
- [x] Agregar script de contador animado con IntersectionObserver + requestAnimationFrame
- [x] Correr `bun run build` para validar

[...plan details unchanged...]

## Resultados de Implementación

- **Commit inicial**: `4d927a4` — chore: estado antes de implementar plan 088-contadores-0-100-terminal
- **Archivo modificado**: `src/components/Services.astro`
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 20.11s

### Cambios aplicados:
- **HTML**: Cada `.log-status` ahora tiene `data-counter="100"` y muestra `0%` inicialmente
- **JS**: Nuevo `IntersectionObserver` que detecta el terminal en viewport (threshold 0.5) y anima los contadores de 0→100 en 3s con easing `easeOutExpo` y `requestAnimationFrame`
- El observer hace `unobserve` después de disparar, por lo que la animación solo ocurre una vez al entrar a la vista

### Detalle del script

```js
// Counter animation: anima números de 0 al target en 3s
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.counter, 10);
    const duration = 3000;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo para un frenado suave al final
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target) + '%';
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));
```

### Detalle del HTML

```html
<span class="log-status" data-counter="100">0%</span>
```

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
