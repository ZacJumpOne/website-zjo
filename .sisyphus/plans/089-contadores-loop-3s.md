# Plan: Contadores en Loop 0→100% Cada 3s

## Análisis

Actualmente los contadores animan 0→100 una sola vez al entrar en viewport (`unobserve` detiene). El usuario quiere que se repita en loop: cada 3 segundos resetear a 0 y volver a subir a 100, indefinidamente.

## Estado Actual

- **Archivo**: `src/components/Services.astro`, script del `counterObserver`
- **Comportamiento actual**: anima una vez, luego `unobserve`
- **Comportamiento deseado**: loop infinito — cada ~3s, 0→100→reset→0→100...

## Tareas de Implementación

- [ ] Reemplazar lógica del `counterObserver`: quitar `unobserve`, usar `setInterval` de 3s que resetea a 0 y relanza la animación
- [ ] Correr `bun run build` para validar

### Cambio en el script

El bloque actual:
```js
if (progress < 1) requestAnimationFrame(tick);
// ...
counterObserver.unobserve(el);
```

Se reemplaza por:
```js
if (progress < 1) {
  requestAnimationFrame(tick);
} else {
  // Al llegar a 100, esperar y reiniciar
  setTimeout(() => {
    el.textContent = "0%";
    const newStart = performance.now();
    function retick(now) { /* misma lógica */ }
    requestAnimationFrame(retick);
  }, 200); // breve pausa antes del siguiente ciclo
}
```

Como alternativa más limpia: usar `setInterval` de ~3200ms que resetea el contador y dispara `tick` de nuevo.

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar.
