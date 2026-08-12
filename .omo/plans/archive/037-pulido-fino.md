# Plan: T7 + T8 + T9 — Pulido fino frontend

## Análisis
El usuario quiere implementar las 3 tareas de baja prioridad del plan 034: transiciones entre páginas, footer con personalidad, y micro-interacciones en hover.

## Estado Actual

### T7: Transiciones entre páginas
- Páginas internas: `blog/index.astro`, `blog/[...slug].astro`, `faqs.astro`, `construyendo.astro`, etc.
- `src/layouts/Layout.astro`: Layout base compartido por todas las páginas
- No hay transiciones actualmente — los cambios de página son instantáneos

### T8: Footer con personalidad
- `src/components/Footer.astro`: Footer dark con 4 columnas (marca, servicios, empresa, contacto)
- Fondo sólido oscuro sin patterns ni CTA
- Versión ya dinámica con `generales.version`

### T9: Micro-interacciones en hover
- Servicios: `src/components/Services.astro` — ya tiene hover effects (glow, translate, icon rotate)
- Portfolio: `src/components/Portfolio.astro` — ya tiene hover (translate, icon rotate, glow)
- Social: `src/components/Social.astro` — hover básico (translate + shadow)
- Hero: `src/components/Hero.astro` — cards flotantes con hover
- Clientes: `src/components/Clients.astro` — hover en marquee cards

## Tareas de Implementación

### T7: Transiciones entre páginas
- [ ] Agregar `astro:transition` en `Layout.astro` usando View Transitions API (nativa de Astro 4)
- [ ] Configurar fade de 200ms con easing suave
- [ ] Excluir la navegación interna de la misma página (#hash links)

### T8: Footer con personalidad
- [ ] Agregar CTA final antes del footer actual: "¿Listo para comenzar tu proyecto?" con botón que lleva a #contacto
- [ ] Agregar pattern geométrico sutil en fondo del footer (CSS radial-gradient o SVG pattern)
- [ ] Mantener estructura actual de 4 columnas y copyright dinámico

### T9: Micro-interacciones en hover
- [ ] Portfolio: agregar ripple effect al hover en cards
- [ ] Social: agregar morphing sutil en iconos (scale + rotate on hover)
- [ ] Servicios: agregar subtle morphing en secondary cards (icon background color shift)
- [ ] Hero: agregar ripple en botón CTA principal
- [ ] Feedback: agregar subtle glow en form inputs on focus

### Verificación
- [ ] Ejecutar `bun run build` y confirmar que compila sin errores

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/037-pulido-fino.md`
