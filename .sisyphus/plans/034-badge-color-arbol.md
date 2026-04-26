# Plan: Cambiar color del badge de número

## Análisis
Cambiar el color de fondo del badge del número de azul a color árbol-claro (--primary-light).

## Estado Actual
- **Archivo**: `src/pages/ejemplo-procesos.astro`
- **Badge actual**: background: rgba(37, 99, 235, 0.8) (azul)

## Tareas de Implementación (para revisión del usuario)
- [ ] Cambiar background del badge a var(--primary-light)
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