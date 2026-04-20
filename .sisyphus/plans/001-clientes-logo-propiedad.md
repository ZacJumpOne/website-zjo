# Plan: Agregar propiedad logo al array de clientes

## Análisis
Refactorizar la implementación anterior que usaba un array separado `logosExistentes`, usando directamente una propiedad `logo` en cada cliente.

## Estado Actual
**Archivo**: `src/components/Clients.astro`

Array actual con `logosExistentes` separado (NO usar):
```typescript
const logosExistentes = [
  "Aquaelectric",
  "Emers",
  "Kids",
  "Rosely",
  "AUZIG",
  "AltaTec",
];
```

## Opción Recomendada
Agregar propiedad `logo?: string` directamente en el array de clientes:

```typescript
const clients = [
  { name: "Aquaelectric", short: "AE", color: "#2563EB", logo: "/images/aquaelectric.png" },
  { name: "Emers", short: "EM", color: "#10B981", logo: "/images/emers.png" },
  { name: "Fashion 21", short: "F21", color: "#8B5CF6" },
  { name: "Kids", short: "KDS", color: "#F59E0B", logo: "/images/kids.png" },
  { name: "Rosely", short: "RS", color: "#EC4899", logo: "/images/rosely.png" },
  { name: "AUZIG", short: "ZIG", color: "#8B5CF6", logo: "/images/auzig.png" },
  { name: "AltaTec", short: "AT", color: "#10B981", logo: "/images/altatec.png" },
];
```

**Template**: `client.logo ? <img/> : <svg/>`

**Estilos**: `object-fit: contain` - mantener tamaño original sin deformar

## Tareas de Implementación
- [x] Eliminar constante `logosExistentes`
- [x] Agregar propiedad `logo` a cada cliente que tiene imagen
- [x] Simplificar template: usar `client.logo` directamente
- [x] Actualizar estilos: `object-fit: contain`, max-width/max-height (tamaño original)

## Estado: COMPLETADO ✅
- Build exitoso
- Propiedad `logo` agregada directamente en array de clientes
- Template simplificado: `client.logo ? <img/> : <svg/>`
- Estilos: max-width/max-height para mantener tamaño original

## Siguiente Paso
Esperar confirmación para proceder.