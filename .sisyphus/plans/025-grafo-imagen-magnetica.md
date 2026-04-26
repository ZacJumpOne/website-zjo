# Plan: Reducir imagen modal y estilo magnético

## Análisis

El usuario quiere modificar el modal del grafo de facturación:
1. Reducir el tamaño de la imagen en el modal un 40%
2. Hacer que el modal se vea como una "imagen magnética" pegada al botón

## Estado Actual

| Elemento | Valor actual |
|----------|--------------|
| Modal max-width | `90vw` |
| Modal max-height | `90vh` |
| Imagen max-height | `85vh` |
| Posición | Centrado en viewport |

## Tareas de Implementación (para revisión del usuario)

- [ ] **Reducir tamaño del modal** - Cambiar `max-width` de 90vw a ~54vw (reducción 40%)
- [ ] **Estilo de "imán"** - Agregar sombra prominente, borde sutil, efecto de que "flota" pegado al botón
- [ ] **Verificar build**

## Siguiente Paso

Confirmar enfoque antes de implementar.