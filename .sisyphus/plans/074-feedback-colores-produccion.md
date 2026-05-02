# Plan: Sincronizar Colores de Feedback con Producción

## Análisis

Comparando `/var/www/zerojumpone.com/dist/` con nuestro `src/components/Feedback.astro`, hay diferencias de color significativas:

### Diferencias encontradas

| Elemento | Producción | Nuestro local |
|---|---|---|
| `.feedback` fondo | `linear-gradient(135deg, var(--primary), var(--primary-dark))` | `var(--arbol-claro)` sólido |
| `.btn-submit` fondo | `var(--primary)` | `linear-gradient(135deg, #10b981, #059669)` hardcodeado |
| `.btn-submit` hover | `var(--primary-dark)` | `linear-gradient(135deg, #059669, #047857)` |
| `.btn-submit` height | `48px` | `49px` |
| `.btn-submit` weight | `600` | `700` |
| `.btn-submit` radius | `10px` | `14px` |
| `.btn-submit` border | `none` | `1px solid rgba(255,255,255,0.1)` |
| `.btn-submit` shadow | sin glow | glow verde intenso |
| Inputs focus color | `#059669` (arbol-obscuro) | `#3aba4a` (verde genérico) |

La producción usa `--primary` y `--primary-dark` como variables que probablemente apuntan a los colores del sitio. Nuestro `.feedback` en producción tiene un **gradiente**, no un color sólido.

## Tareas de Implementación (para revisión del usuario)

- [x] Cambiar `.feedback` background a `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))` (gradiente como producción)
- [x] Restaurar `.btn-submit` a los valores de producción: `background: var(--arbol-obscuro)`, `height: 48px`, `font-weight: 600`, `border-radius: 10px`, `border: none`, sin glow
- [x] Restaurar `.btn-submit:hover` a `background: var(--arbol-obscuro)`, `transform: translateY(-2px)`, `box-shadow: 0 4px 16px rgba(5,150,105,0.3)`
- [x] Cambiar focus de inputs: `#3aba4a` → `var(--arbol-obscuro)` con shadow mejorado
- [x] Correr `bun run build` para validar

## Resultados de Implementación

- **Commit inicial**: `2b456c7` — chore: estado antes de implementar plan 074-feedback-colores-produccion
- **Archivo modificado**: `src/components/Feedback.astro` — 4 cambios de color
- **Build final**: ✅ Exitoso — 14 pages, 0 errores, 17.52s

### Cambios aplicados:
| Elemento | Antes | Ahora (como producción) |
|---|---|---|
| `.feedback` fondo | `var(--arbol-claro)` sólido | `linear-gradient(var(--arbol-claro), var(--arbol-obscuro))` |
| `.btn-submit` | gradiente + glow + 14px radius | `var(--arbol-obscuro)` sólido + 48px + 600 weight |
| Focus inputs | `#3aba4a` | `var(--arbol-obscuro)` con shadow doble |
