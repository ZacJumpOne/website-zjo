# Plan: Variables CSS para Social.astro

## Análisis

Producción usa estos colores en la sección Social:

| Color | Valor | Uso |
|---|---|---|
| Verde principal | `#059669` | Íconos, bordes, nombre hover |
| Verde gradiente final | `#10b981` | Extremo del gradiente en hover |
| Verde claro | `#f0fdf4` | Fondo de íconos en default |
| Blanco | `#fff` | Color de ícono sobre gradiente |

Nuestras variables globales (`--arbol-claro`, `--arbol-obscuro`) ya se sincronizaron con otros valores de producción (`#3AB34A`, `#196632`) y NO coinciden con los colores de Social.

**Solución**: agregar variables en `global.css` específicas para la sección social.

## Variables Propuestas

Te presento 3 opciones de naming. Elige la que prefieras:

### Opción A — Prefijo `--social-` (descriptivo)

| Variable | Valor | Efecto |
|---|---|---|
| `--social-green` | `#059669` | Verde principal de íconos sociales |
| `--social-green-light` | `#10b981` | Verde claro para gradientes |
| `--social-bg-light` | `#f0fdf4` | Fondo claro de íconos |

### Opción B — Prefijo `--social-icon-` (específico)

| Variable | Valor | Efecto |
|---|---|---|
| `--social-icon-color` | `#059669` | Color del ícono |
| `--social-icon-hover` | `#10b981` | Color del ícono en hover |
| `--social-icon-bg` | `#f0fdf4` | Fondo del ícono |

### Opción C — Continuar con `--arbol-` pero nuevos (consistente con el sistema)

| Variable | Valor | Efecto |
|---|---|---|
| `--arbol-social` | `#059669` | Verde para redes sociales |
| `--arbol-social-light` | `#10b981` | Verde claro sociales |
| `--arbol-social-bg` | `#f0fdf4` | Fondo claro sociales |

## Tareas de Implementación (para revisión del usuario)

- [ ] Agregar 3 variables en `:root` de `global.css` (según opción elegida)
- [ ] Reemplazar referencias en `Social.astro` por las nuevas variables
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Elige naming (A, B o C) y usa `/plan-go` para ejecutar.
