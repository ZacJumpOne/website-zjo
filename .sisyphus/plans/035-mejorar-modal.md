# Plan: Mejorar diseño del modal

## Análisis
Mejorar el diseño visual del modal que se abre al hacer click en una card de proceso. Actualmente es muy básico (fondo negro 95%, botón cerrar simple).

## Estado Actual
- **Archivo**: `src/pages/ejemplo-procesos.astro`
- **Modal actual**: background rgba(0,0,0,0.95), botón cerrar simple circular
- **Sin border/frame** en la imagen

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar marco/bordewhite alrededor de la imagen
- [ ] Agregar título debajo de la imagen con estilo
- [ ] Mejorar botón cerrar (color sólido, mejor diseño)
- [ ] Agregar efecto de sombra a la imagen
- [ ] Personalizar cursor del modal
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