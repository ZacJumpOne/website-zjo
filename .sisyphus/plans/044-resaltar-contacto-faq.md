# Plan: Resaltar contacto en FAQ deInicio

## Análisis
Resaltar el teléfono y correo en la pregunta FAQ "¿Cómo inicio con Zero Jump One?" de la data faqs.ts.

## Estado Actual
- **Archivo data**: `src/data/faqs.ts` línea 20
- **Texto actual**: "(33) 1749-0079" y "proyectos@zerojumpone.com" plain
- **FAQs Astro**: No hay estilo específico para el texto

## Propuesta
Usar HTML en la respuesta para mostrar teléfono y correo con estilos destacados (highlight con color verde, bold, o como enlace).

## Tareas de Implementación
- [ ] Modificar la respuesta en faqs.ts para usar HTML con spans estilizados
- [ ] Agregar CSS en faqs.astro para los elementos destacados
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder.

---
## Nota: Punto de Retorno