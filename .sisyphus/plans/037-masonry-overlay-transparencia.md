# Plan: Agregar transparencia al masonry overlay

## Análisis
Agregar transparencia del 35% al background del overlay. El color actual es `var(--arbol-obscuro)` (solido), cambiar a `rgba(25, 102, 50, 0.35)` donde 0.35 = 35% de opacidad.

## Estado Actual
- **masonry-overlay actual**: `background: var(--arbol-obscuro)` (sólido, sin transparencia)
- **Nuevo valor**: `rgba(25, 102, 50, 0.35)` = #196632 con 35% opacidad
- **Archivo**: `src/pages/ejemplo-procesos.astro` línea 199

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar `var(--arbol-obscuro)` por `rgba(25, 102, 50, 0.35)` en `.masonry-overlay`
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.

**Palabra clave**: Si el usuario dice **"regresa"**, revertir al punto de retorno con:
```bash
git reset --hard <commit-anterior>
```