# Plan: Efecto masonry de grafos en footer

## Análisis
Crear una página con efecto masonry (layout de cuadrícula irregular) para mostrar imágenes de grafos. Usar la imagen `grafoModuloFacturacion.png` repetida 10 veces. El enlace ya existe en el footer指向 `/construyendo`.

## Estado Actual
- **Imagen disponible**: `public/images/grafoModuloFacturacion.png`
- **Enlace existente**: En footer, sección Ayuda,指向 `/construyendo`
- **Página actual**: `src/pages/construyendo.astro`

## Tareas de Implementación (para revisión del usuario)
- [ ] Crear archivo `src/data/grafos.ts` con estructura de datos para los grafos
- [ ] Modificar página `src/pages/construyendo.astro` para mostrar efecto masonry con grafos
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.