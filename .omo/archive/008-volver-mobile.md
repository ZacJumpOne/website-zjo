# Plan: Alinear link Volver en móvil

## Análisis
El link "Volver" en ejemplo-procesos.astro está muy cerca del top en versión móvil. Debe verse igual que en nuestra-historia.astro.

## Estado Actual
- ejemplo-procesos: `.procesos-main { padding: 120px 20px }`, móvil padding: 80px 16px
- nuestra-historia: `.history-main { padding-top: 100px }`, margen: 16px

## Tareas de Implementación
- [x] Igualar padding-top a 100px en ejemplo-procesos
- [x] Igualar margin-bottom del link a 16px
- [x] Verificar build

## Siguiente Paso
Confirmación del usuario para ejecutar