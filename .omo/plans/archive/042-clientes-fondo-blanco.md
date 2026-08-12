# Plan: Fondo blanco sólido en Clientes (Opción B)

## Análisis
Las secciones Portfolio y Clientes se ven como una sola porque los fondos son casi idénticos (Portfolio: `#f8fafc` gris claro, Clientes: `#ffffff` blanco con gradiente que va de `#f8fafc` a `#ffffff`). El gradiente actual `.clients-bg-gradient` intenta una transición suave pero en vez de dividir las secciones, las fusiona.

## Estado Actual
- `src/components/Portfolio.astro` (línea 88): `background: #f8fafc;` — fondo gris claro
- `src/components/Clients.astro` (línea 94-95): `background: #ffffff;` — fondo blanco
- `src/components/Clients.astro` (líneas 101-109): `.clients-bg-gradient` — gradiente `#f8fafc` → `#ffffff` en 200px que difumina la separación

## Tareas de Implementación
- [ ] **P42.1**: Eliminar `.clients-bg-gradient` de `Clients.astro` (HTML + CSS)
- [ ] **P42.2**: Verificar que el fondo blanco sólido de `.clients` se mantenga como está
- [ ] **P42.3**: Verificar build

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/042-clientes-fondo-blanco.md`
