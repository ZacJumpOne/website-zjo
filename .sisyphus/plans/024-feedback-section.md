# Plan: Sección de Feedback - Email + WhatsApp

## Análisis
La sección Feedback actual solo tiene un botón que apunta a `/construyendo` (en construcción). El usuario quiere reemplazarlo con funcionalidad real de feedback sin backend: formulario que envíe a soporte@zerojumpone.com y opción de enviar por WhatsApp al 3317490079.

## Estado Actual
- **Componente**: `src/components/Feedback.astro` — botón "Dar Feedback" que apunta a `/construyendo`
- **Index**: `src/pages/index.astro` — importa y renderiza `<Feedback />`
- Sin formulario, sin envío real

## Tareas de Implementación (para revisión del usuario)
- [ ] Reemplazar el botón de Feedback.astro con un formulario HTML que envíe a soporte@zerojumpone.com vía FormSubmit.co (POST a `https://formsubmit.co/soporte@zerojumpone.com`)
- [ ] Agregar campos al formulario: nombre, email, categoría (select), mensaje (textarea)
- [ ] Configurar campo oculto `_subject` con valor "Feedback - Zero Jump One" para identificación en el inbox
- [ ] Agregar botón de WhatsApp con API Click-to-Chat. El mensaje pre-llenado iniciará con "[FEEDBACK]" para auditoría posterior
- [ ] Diseñar el layout con formulario a un lado y WhatsApp al otro (responsive: stacked en mobile)
- [ ] Configurar `_next` redirect de FormSubmit para página de agradecimiento o usar la página default

## Siguiente Paso
Confirmar si FormSubmit.co es aceptable como servicio de envío de formularios (gratuito, sin backend, reenvía a soporte@zerojumpone.com). El primer envío requiere confirmar el email con un enlace que enviará FormSubmit.
