# Plan: Reiniciar Animación del Terminal Cada 3s

## Análisis

El usuario quiere que **toda la ventana del terminal** reinicie su animación cada 3 segundos — no solo los porcentajes. Es decir: el prompt, las líneas de log, y las barras de estado deben desaparecer y volver a animarse staggered (una tras otra), como si el terminal se "refrescara" cíclicamente.

```
Ciclo de 3s:
T=0.0s → prompt "$ zjo-monitor --watch" aparece
T=0.4s → ✓ Tareas automatizadas  100%
T=0.8s → ✓ Respaldos diarios      100%
T=1.6s → █ SISTEMA OPERATIVO
T=2.0s → █ Uptime 99.9%
T=3.0s → REINICIO: todo desaparece, vuelve a empezar
```

Técnica: `setInterval` de 3000ms que fuerza un reflow en todas las `.terminal-line`, reiniciando sus animaciones CSS con los delays staggered originales.

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **Animaciones CSS**: `.terminal-line` usa `animation: fadeInUpTerminal 0.4s ease forwards` con `animation-delay: var(--stagger)` (0s, 0.4s, 0.8s, 1.6s, 2.0s)
- **Script actual**: IntersectionObserver para contadores, cardObserver, headerObserver

## Tareas de Implementación

- [ ] Agregar `setInterval` de 3000ms que reinicie animaciones de `.terminal-line` vía reflow
- [ ] Correr `bun run build` para validar

### Script a agregar

```js
// Reinicia la animación del terminal cada 3s
setInterval(() => {
  document.querySelectorAll(".terminal-line").forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight; // fuerza reflow
    el.style.animation = "";
  });
}, 3000);
```

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
