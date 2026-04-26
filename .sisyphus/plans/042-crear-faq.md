# Plan: Crear estructura FAQ

## Análisis
Crear una estructura de datos para Preguntas Frecuentes y una página dedicada. El enlace actual en Footer apunta a `/construyendo` (placeholder).

## Estado Actual
- **Footer línea 44**: `<li><a href="/construyendo">Preguntas Frecuentes</a></li>`
- **No existe página FAQ**: Actualmente va a `/construyendo`
- **Estructura data existente**: `portfolio.ts`, `procesos.ts`

## Tareas de Implementación
- [ ] Crear `src/data/faqs.ts` con interface y data de preguntas
- [ ] Crear página `src/pages/faqs.astro` para mostrar FAQs
- [ ] Actualizar enlace en Footer.astro
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.