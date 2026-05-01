# Plan: Monitoreo Card - Imagen Respaldo con Efecto

## Análisis
Se requiere modificar la card de "Monitoreo" en `Services.astro` para:
1. Agregar la imagen `respaldos.png` en la parte derecha de la card (columna derecha del grid)
2. Mantener el lado izquierdo (`.spotlight-text`) EXACTAMENTE igual - sin cambios en el contenido ni estilos
3. La imagen debe tener un efecto cada 3 segundos similar al efecto del texto "El software que lo hace posible" en Hero.astro

## Estado Actual
- **Archivo**: `src/components/Services.astro`
- **Estructura actual**: `.spotlight-content` usa CSS Grid con 2 columnas (`1.1fr 0.9fr`)
- **Problema**: Solo existe `.spotlight-text` (izquierda), la columna derecha está vacía
- **CSS existente**: Hay estilos para `.spotlight-visual` (líneas 389-393) pero no se usa en el HTML
- **Imagen disponible**: `/images/respaldos.png` (confirmado en `public/images/`)

## Efecto a implementar
En Hero.astro el texto "El software que lo hace posible" usa:
```css
animation: gradientFlow 3s linear infinite;
```
Es un gradiente de fondo que fluye suavemente cada 3 segundos.

Para la imagen `respaldos.png` se propone un efecto de **pulse/sacle** que cicla cada 3 segundos:
- Escala suave: `scale(1) → scale(1.05) → scale(1)`
- Sombra/glow pulsante para dar sensación de "actividad"
- Efecto similar en feeling al gradientFlow: animación continua y suave

## Tareas de Implementación (para revisión del usuario)

- [ ] Agregar `<div class="spotlight-visual">` con `<img src="/images/respaldos.png" alt="Respaldos">` dentro de `.spotlight-content` (lado derecho)
- [ ] Verificar que `.spotlight-text` (lado izquierdo) permanezca EXACTAMENTE igual (sin cambios en HTML ni CSS)
- [ ] Crear `@keyframes imagePulse` de 3 segundos con efecto de escala y sombra
- [ ] Aplicar `animation: imagePulse 3s ease-in-out infinite` a la imagen
- [ ] Ajustar responsive: en móvil (`max-width: 992px`) la imagen debe apilarse debajo del texto
- [ ] Verificar que la imagen mantenga proporción y no se deforme (`object-fit: contain`)

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/051-monitoreo-imagen-respaldo.md`
