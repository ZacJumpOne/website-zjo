# Plan: Sincronizar Colores Globales con Producción

## Análisis

La producción (`/var/www/zerojumpone.com/dist/`) tiene valores de color **mucho más vibrantes** que nuestro `global.css` local. La diferencia no está solo en el Feedback sino en los CSS variables globales:

### Comparación de colores

| Variable | Producción | Nuestro local | Diferencia |
|---|---|---|---|
| `--primary` | `#3AB34A` 🌿 | No definida | Verde puro vibrante |
| `--primary-dark` | `#2D8A3C` | No definida | Verde oscuro rico |
| `--primary-light` | `#4CC45E` | No definida | Verde claro fresco |
| `--arbol-claro` | `#3AB34A` 🌿 | `#10b981` 🦎 | Mismo que primary |
| `--arbol-obscuro` | `#196632` | `#059669` | Verde oscuro vs teal |

Nuestros colores actuales (`#10b981`, `#059669`) son **teal/esmeralda** (tirando a azul).
Los de producción (`#3AB34A`, `#196632`) son **verde puro** (más cálido, vibrante).

Esto explica por qué el Feedback en desarrollo se ve "opaco y sin vida": usa colores teal apagados en vez de verdes vibrantes.

### Producción también define:
```
--primary-light: #4CC45E    (hover states, acentos)
```

## Tareas de Implementación (para revisión del usuario)

- [ ] Actualizar `--arbol-claro`: `#10b981` → `#3AB34A` en `global.css`
- [ ] Actualizar `--arbol-obscuro`: `#059669` → `#196632` en `global.css`
- [ ] Agregar `--primary: #3AB34A` en `global.css`
- [ ] Agregar `--primary-dark: #2D8A3C` en `global.css`
- [ ] Agregar `--primary-light: #4CC45E` en `global.css`
- [ ] Actualizar `.feedback` background: usar `var(--primary)` y `var(--primary-dark)` como producción
- [ ] Actualizar `.btn-submit`: usar `var(--primary)` como producción
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
