# Plan: Fix Animaciones del Terminal Monitoreo

## Análisis

Las animaciones del terminal no son visibles. La causa raíz es la keyframe `fadeInUpTerminal`, que solo define el estado `from` sin un `to` explícito:

```css
@keyframes fadeInUpTerminal {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    /* ❌ falta to */
}
```

CSS usa el `animation-fill-mode: forwards` para mantener el último estado de la animación. Al no haber `to` explícito, el navegador sintetiza el `to` desde los estilos computados del elemento, que incluyen `opacity: 0` (definido en `.terminal-line`). Resultado: el elemento se anima de `opacity: 0` a `opacity: 0` — invisible todo el tiempo.

La keyframe `growBar` también solo tiene `from`, pero como las barras tienen un `width` explícito en CSS (48px/34px), el `to` implícito sí produce la animación deseada. No necesita fix.

## Estado Actual

- **Archivo**: `src/components/Services.astro`, línea 503-508
- Keyframe `fadeInUpTerminal` incompleta

## Tareas de Implementación

- [x] Agregar `to { opacity: 1; transform: translateY(0); }` a la keyframe `fadeInUpTerminal`
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `64ab6b2` — chore: estado antes de implementar plan 087-fix-animaciones-terminal
- **Archivo modificado**: `src/components/Services.astro` (línea 503-508)
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 22.72s

### Cambios aplicados:
- **CSS**: Agregado `to { opacity: 1; transform: translateY(0); }` a `@keyframes fadeInUpTerminal`. Sin este `to` explícito, el navegador usaba `opacity: 0` del estilo computado de `.terminal-line` como estado final, manteniendo todos los elementos invisibles.
