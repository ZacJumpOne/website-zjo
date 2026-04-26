# Plan: Reducir cards del masonry con mejor estética

## Análisis
Reducir el tamaño de las cards del masonry manteniendo una apariencia estético y agreeable a la vista.

## Estado Actual
- **Archivo**: `src/pages/ejemplo-procesos.astro`
- **Grid**: column-count: 4, gap: 12px
- **Card**: padding: 6px, margin-bottom: 12px, border-radius: 12px
- **Número badge**: 32x32px

## Tareas de Implementación (para revisión del usuario)
- [ ] Reducir column-count a 5 columnas (más cards por fila)
- [ ] Reducir margin-bottom a 8px (cards más pegadas)
- [ ] Reducir padding interno a 4px
- [ ] Reducir border-radius a 8px (más cuadrado)
- [ ] Reducir tamaño del número badge a 24x24px
- [ ] Verificar build exitoso
- [ ] **IMPORTANTE**: Crear punto de retorno (commit backup) ANTES de implementar

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.

**Palabra clave**: Si el usuario dice **"regresa"**, revertir al punto de retorno con:
```bash
git reset --hard <commit-anterior>
```