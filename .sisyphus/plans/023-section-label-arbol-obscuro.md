# Plan: Color .section-label con --arbol-obscuro

## Análisis
Cambiar el color de la clase `.section-label` de `var(--primary)` (#3AB34A) al color `#196632`, creando una variable CSS `--arbol-obscuro` para reutilización futura.

## Estado Actual
- **Archivo**: `src/styles/global.css`
- **Ubicación actual de `.section-label`**: líneas 82-90
- **Color actual**: `var(--primary)` (#3AB34A)
- **Color nuevo**: `#196632`
- **Variable a crear**: `--arbol-obscuro`

## Tareas de Implementación

- [ ] Agregar `--arbol-obscuro: #196632;` en `:root` junto a otras variables de color
- [ ] Cambiar `color: var(--primary);` por `color: var(--arbol-obscuro);` en `.section-label`
- [ ] Verificar con build (`bun run build`)

## Siguiente Paso
Confirma que el orden de tareas está bien o sugiere ajustes.