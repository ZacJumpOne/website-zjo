# Plan: Auditoría de Seguridad - Fugas y Vulnerabilidades

## Análisis
El agente explore realizó un análisis exhaustivo del codebase buscando: secretos hardcodeados, emails expuestos, XSS, CSP faltante, dependencias vulnerables, y patrones inseguros. Se identificaron 7 hallazgos relevantes, la mayoría de riesgo bajo-medio dado que es un sitio estático sin backend.

## Estado Actual
- Sitio estático Astro sin backend propio
- FormSubmit.co como servicio de email (endpoint hardcodeado en cliente)
- WhatsApp API directo (número expuesto intencionalmente)
- FAQs con `set:html` para renderizar contenido
- Sin CSP meta tag ni headers de seguridad configurados
- Dependencia `sharp` en versión antigua

## Hallazgos por Severidad

### MEDIUM - 1. FormSubmit endpoint expuesto + `_captcha: false`
**Archivo**: `src/components/Feedback.astro` (línea 150)
- El email `soporte@zerojumpone.com` está hardcodeado en el fetch client-side
- `_captcha: false` desactiva protección anti-spam de FormSubmit
- **Riesgo**: Spam masivo al inbox, email harvesting

### MEDIUM - 2. XSS potencial en FAQs
**Archivo**: `src/pages/faqs.astro` (línea 51)
- `set:html={faq.answer}` renderiza HTML sin escapar
- **Riesgo**: Si un editor modifica `faqs.ts` con contenido malicioso, se ejecuta

### LOW - 3. Emails y teléfonos expuestos en múltiples archivos
**Archivos**: `Footer.astro`, `faqs.ts`, `Feedback.astro`, `aviso-de-privacidad.astro`
- `mailto:` y `tel:` links expuestos al scraping
- **Riesgo**: Bajo para un sitio de contacto público, pero aumenta spam

### LOW - 4. Sin Content Security Policy (CSP)
**Archivos**: `astro.config.mjs`, `src/layouts/Layout.astro`
- No hay meta CSP ni headers HTTP de seguridad
- **Riesgo**: Sin protección contra inyección de scripts externos

### LOW - 5. Dependencia `sharp` desactualizada
**Archivo**: `package.json`
- `sharp: ^0.34.5` es versión antigua
- **Riesgo**: Posibles CVEs no parchados

### INFO - 6. WhatsApp número expuesto
**Archivo**: `Feedback.astro` (línea 76)
- `5213317490079` visible en el enlace wa.me
- **Riesgo**: Informativo (es un número de contacto público intencional)

### INFO - 7. Sin sanitización client-side del formulario
**Archivo**: `Feedback.astro` (líneas 136-168)
- Los datos del form se envían sin validación de longitud o sanitización HTML
- **Riesgo**: Mensajes spam con HTML malicioso llegan al email

## Tareas de Implementación (para revisión del usuario)
- [ ] Habilitar CAPTCHA en FormSubmit: cambiar `_captcha: false` a `_captcha: true` en Feedback.astro
- [ ] Agregar meta tag CSP en Layout.astro con política restrictiva pero funcional
- [ ] Ejecutar `bun audit` o `npm audit` y actualizar `sharp` si hay vulnerabilidades
- [ ] Agregar validación client-side básica en el form: longitud máxima de mensaje, strip de tags HTML del textarea
- [ ] (Opcional) Instalar DOMPurify para sanitizar `faq.answer` antes de `set:html` en faqs.astro

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/032-security-audit.md`
