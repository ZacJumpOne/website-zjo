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

- [ ] Cambiar `.feedback` background a `linear-gradient(135deg, var(--arbol-claro), var(--arbol-obscuro))` (gradiente como producción)
- [ ] Restaurar `.btn-submit` a los valores de producción: `background: var(--arbol-obscuro)`, `height: 48px`, `font-weight: 600`, `border-radius: 10px`, `border: none`, sin glow
- [ ] Restaurar `.btn-submit:hover` a `background: var(--arbol-obscuro)`, `transform: translateY(-2px)`, `box-shadow: 0 4px 16px rgba(5,150,105,0.3)`
- [ ] Cambiar focus de inputs: `border-color: #3aba4a` → `border-color: #059669` y ajustar shadow
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
