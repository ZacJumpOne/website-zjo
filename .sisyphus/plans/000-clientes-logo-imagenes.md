# Plan: Agregar imágenes de logo a clientes

## Análisis
Modificar `Clients.astro` para mostrar imagen de logo cuando exista, con fallback a iniciales cuando no exista.

## Estado Actual
**Archivo**: `src/components/Clients.astro`

**Data actual - SIN CAMBIOS**:
```typescript
const clients = [
  { name: "Aquaelectric", short: "AE", color: "#2563EB" },
  { name: "Emers", short: "EM", color: "#10B981" },
  { name: "Fashion 21", short: "F21", color: "#8B5CF6" },
  { name: "Kids", short: "KDS", color: "#F59E0B" },
  { name: "Rosely", short: "RS", color: "#EC4899" },
  { name: "AUZIG", short: "ZIG", color: "#8B5CF6" },
  { name: "AltaTec", short: "AT", color: "#10B981" },
];
```

**Principio**: Las propiedades del array se conservan exactas. Solo se cambia el rendering del logo.

**Imágenes disponibles en `public/images/`**:
| Cliente | Imagen existe? | Ruta |
|---------|----------------|-----|
| Aquaelectric | ✓ | `/images/aquaelectric.png` |
| Emers | ✓ | `/images/emers.png` |
| Fashion 21 | ✗ | - |
| Kids | ✓ | `/images/kids.png` |
| Rosely | ✓ | `/images/rosely.png` |
| AUZIG | ✓ | `/images/auzig.png` |
| AltaTec | ✓ | `/images/altatec.png` |

## Opción Recomendada
Derivar la ruta de imagen automáticamente desde el nombre del cliente (sin modificar el array):

```typescript
// En el template
const logoPath = `/images/${client.name.toLowerCase().replace(/ /g, '')}.png`;
```

**Lógica**:
1. Construir ruta: `/images/{name-slug}.png`
2. Verificar si existe en `public/images/`
3. Si existe → renderizar `<img>`
4. Si NO existe → renderizar SVG con iniciales (comportamiento actual)

**Slugs derivados**:
- "Aquaelectric" → `/images/aquaelectric.png` ✓
- "Emers" → `/images/emers.png` ✓
- "Fashion 21" → `/images/fashion21.png` ✗ (no existe, usa iniciales)
- etc.

## Tareas de Implementación
- [x] Modificar el mapping en el template para derivar `logoPath` desde `client.name`
- [x] Agregar lógica de verificación de existencia (esto es tricky en Astro - ver nota)
- [x] Modificar renderizado: condicional img vs SVG con iniciales
- [x] Ajustar estilos para que imagen tenga mismo tamaño que SVG (64px)
- [x] Probar: Aquaelectric (imagen) y Fashion 21 (inicionales)

## Estado: COMPLETADO ✅
- Build exitoso
- Imagenes renderizadas para: Aquaelectric, Emers, Kids, Rosely, AUZIG, AltaTec
- Iniciales renderizadas para: Fashion 21

### Nota Técnica
En Astro/SSR, no se puede verificar directamente si existe un archivo en `public/`. opciones:
1. **Hardcoded**: Array con logos que existen (más seguro)
2. **Dynamic**: Intentar load, si falla usar fallback (puede causar errores)
3. **Build-time**: Verificar en build solo, en runtime siempre intentar imagen

**Recomendación**: Usar opción 1 - crear constante `logosExistentes` con los nombres que SÍ tienen imagen.

## Siguiente Paso
Esperar confirmación del usuario para proceder con la implementación.