# Plan: Cambiar background del masonry overlay

## Análisis
Cambiar el color de background del overlay en las cards del masonry (donde aparecen el número y título) - usar variable `--arbol-obscuro` (#196632) en lugar de `rgba(15, 23, 42, 0.85)`.

## Estado Actual
- **masonry-overlay actual**: `background: rgba(15, 23, 42, 0.85)` (slate-900 con transparencia)
- **Variables disponibles**:
  - `--arbol-claro`: #3AB34A (verde claro)
  - `--arbol-obscuro`: #196632 (verde oscuro)
- **Archivo**: `src/pages/ejemplo-procesos.astro` línea 199

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar `rgba(15, 23, 42, 0.85)` por `var(--arbol-obscuro)` en `.masonry-overlay`
- [ ] Verificar build exitoso
- [ ] Crear punto de retorno antes de implementar

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.

**Palabra clave**: Si el usuario dice **"regresa"**, revertir al punto de retorno con:
```bash
git reset --hard <commit-anterior>
```