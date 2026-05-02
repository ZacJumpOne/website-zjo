# Plan: Contadores Staggered Sincronizados con Terminal a 9s

## Análisis

Actualmente los 3 contadores de porcentaje arrancan todos al mismo tiempo cuando el terminal entra en viewport. El usuario quiere que:

1. Cada contador arranque cuando su línea de log **aparece** (staggered)
2. La última línea en aparecer (Integridad BD) sea la última en llegar a 100%
3. El ciclo completo sea de **9s** para que no se solapen las animaciones
4. Cada contador tarda ~3s en subir de 0 a 100%

```
Timeline (ciclo de 9s):
0.0s → Terminal se reinicia, línea 1 aparece → contador 1 arranca (0→100)
0.4s → Línea 2 aparece → contador 2 arranca (0→100)
0.8s → Línea 3 aparece → contador 3 arranca (0→100)
3.0s → Contador 1 llega a 100% ✓
3.4s → Contador 2 llega a 100% ✓
3.8s → Contador 3 llega a 100% ✓
9.0s → REINICIO: todo vuelve a empezar
```

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **setInterval actual**: 7000ms (línea del script)
- **counterObserver**: dispara todos los contadores al mismo tiempo con `IntersectionObserver`
- **CSS staggered delays**: 0s, 0.4s, 0.8s (para `fadeInUpTerminal`)

## Tareas de Implementación

- [ ] Cambiar `setInterval` de 7000ms a 9000ms
- [ ] Refactorizar lógica de contadores: función `startCounters()` con `setTimeout` staggered (0ms, 400ms, 800ms)
- [ ] Sincronizar `startCounters()` con el `setInterval` de 9s y con el IntersectionObserver inicial
- [ ] Eliminar `counterObserver` existente (ya no se necesita)
- [ ] Correr `bun run build` para validar

### Script propuesto

```js
// Contadores staggered: arrancan cuando su línea de log aparece
function startCounters() {
  document.querySelectorAll("[data-counter]").forEach((el, i) => {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 2800;

    setTimeout(() => {
      el.textContent = "0%";
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.round(eased * target) + "%";
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, i * 400);
  });
}

// Arrancar cuando el terminal entra en viewport
const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounters();
      terminalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const terminal = document.querySelector(".terminal");
if (terminal) terminalObserver.observe(terminal);

// Reiniciar animaciones del terminal cada 9s
setInterval(() => {
  document.querySelectorAll(".terminal-line").forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "";
  });
  startCounters();
}, 9000);
```

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
