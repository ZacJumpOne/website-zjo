# Plan: Renombrar grafos.ts a procesos.ts

## Análisis
Renombrar el archivo de datos `src/data/grafos.ts` a `src/data/procesos.ts` y actualizar:
- Nombre de interface: `GrafItem` → `ProcesoItem`
- Nombre de variable: `grafosData` → `procesosData`
- Import en `ejemplo-procesos.astro`: actualizar la ruta y el nombre importado

## Estado Actual
- **Archivo actual**: `src/data/grafos.ts`
- **Interface actual**: `GrafItem`
- **Variable actual**: `grafosData`
- **Import en ejemplo-procesos.astro línea 7**: `import { grafosData } from "../data/grafos"`
- **Uso en ejemplo-procesos.astro línea 39**: `{grafosData.map((graf, index) => (`

## Tareas de Implementación (para revisión del usuario)
- [ ] Crear nuevo archivo `src/data/procesos.ts` con contenido renombrado
- [ ] Actualizar interface `GrafItem` → `ProcesoItem`
- [ ] Actualizar variable `grafosData` → `procesosData`
- [ ] Actualizar import en `ejemplo-procesos.astro`
- [ ] Eliminar archivo `grafos.ts` original
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.

**Palabra clave**: Si el usuario dice **"regresa"**, revelar punto de retorno con:
```bash
git reset --hard <commit-anterior>
```