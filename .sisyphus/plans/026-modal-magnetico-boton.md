# Plan: Posicionar modal como imán pegado al botón

## Análisis

El usuario quiere que el modal del grafo se "pegue" al botón en su esquina superior izquierda, como un imán. Actualmente el modal se abre centrado en el viewport.

## Estado Actual

El modal actual:
- Se abre centrado en `flex` con `align-items: center; justify-content: center;`
- Posición: `fixed inset: 0`

## Solución

Usar JavaScript para calcular la posición del botón y posicionar el modal justo encima/superpuesto al botón en su esquina superior izquierda.

## Tareas de Implementación

- [ ] **Modificar CSS del modal** - Cambiar de `position: fixed` a `position: absolute` relativo al contenedor del botón
- [ ] **Modificar JS del modal** - Calcular posición del botón y ajustar el modal
- [ ] **Agregar estilos de "imán"** - El modal se superpone parcialmente sobre el botón con efecto de atracción
- [ ] **Verificar build**

## Siguiente Paso

Confirmar enfoque antes de implementar.