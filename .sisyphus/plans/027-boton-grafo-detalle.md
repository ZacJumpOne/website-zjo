# Plan: Botón de grafos en detalle de portafolio

## Análisis
Agregar un botón similar al de video en la página de detalle de cada solución del portafolio. Este botón abrirá una nueva página que mostrará una imagen con los grafos de ejemplo de cómo se ejecutan los procesos. Por ahora solo implementar el botón cuando exista la data en portfolio.ts. Los datos deben tomarse de data/portfolio.

## Estado Actual
- **Archivo de datos**: `src/data/portfolio.ts`
  - Interfaz `PortfolioItem` tiene campo `videoUrl?: string` (línea 11)
  - Algunos items tienen `videoUrl` definido
- **Página de detalle**: `src/pages/solucion/[slug].astro`
  - Botón de video se renderiza condicionalmente cuando `solucion.videoUrl` existe (líneas 51-58)
  - Estilo del botón: `.video-thumbnail` (líneas 201-250)

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar campo opcional `graph?: { url: string; text: string }` a la interfaz `PortfolioItem` en `src/data/portfolio.ts`
- [ ] Agregar botón de grafos en `src/pages/solacion/[slug].astro`, similar al botón de video:
  - Renderizar condicionalmente cuando existe `solucion.graph`
  - Usar `solucion.graph.text` para el texto del botón
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar si el usuario quiere que agregue la propiedad `graphUrl` a los datos del portafolio ahora, o solo crear el botón para que ellos agreguen la data después.