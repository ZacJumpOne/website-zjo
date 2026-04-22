# Plan: Enlazar enlaces a página Construyendo

## Análisis
El usuario quiere que todos los enlaces pendientes apunten a la página `/construyendo`:
1. Foro en Footer
2. Preguntas Frecuentes en Footer
3. Botón Dar Feedback

## Estado Actual

- **Footer.astro**:
  - Blog → `/construyendo` ✓
  - Foro → `#` → debe cambiar a `/construyendo`
  - Preguntas Frecuentes → `#` → debe cambiar a `/construyendo`

- **Feedback.astro**:
  - Botón "Dar Feedback" → sin enlace → debe cambiar a `/construyendo`

## Tareas Completadas

### Footer (017)
- [x] Cambiar href de "Foro" a `/construyendo`
- [x] Cambiar href de "Preguntas Frecuentes" a `/construyendo`

### Feedback (018)
- [x] Envolver Button en tag `<a>` con href="/construyendo"

- [x] Verificar build exitoso

## Resultado

Todos los enlaces ahora apuntan a `/construyendo`:
- Blog → `/construyendo`
- Foro → `/construyendo`
- Preguntas Frecuentes → `/construyendo`
- Dar Feedback → `/construyendo`

## Siguiente Paso

Plan completado y verificado.

---
📁 Archivo: `.sisyphus/plans/017-construyendo.md`