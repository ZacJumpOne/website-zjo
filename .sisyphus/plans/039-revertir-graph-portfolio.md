# Plan: Revertir estructura graph de portfolio.ts

## Análisis
Quitar la estructura `graph` que se agregó a `portfolio.ts` y el código que la renderiza en las páginas. El usuario indica que esta modificación se echa para atrás.

## Estado Actual
- **Archivo data**: `src/data/portfolio.ts`
  - Interface `PortfolioItem` tiene `graph?: { url: string; text: string; }` (líneas 12-15)
  - Solo el primer item (erp-jump-one) tiene `graph` definido (líneas 32-35)
- **Archivo de página**: `src/pages/solucion/[slug].astro`
  - Renderiza `graph` en líneas 59-63
  - CSS en líneas 264-295

## Tareas de Implementación (para revisión del usuario)
- [ ] Eliminar `graph` de interface PortfolioItem
- [ ] Eliminar `graph` de todos los items en portfolioData
- [ ] Eliminar código de renderizado en solucion/[slug].astro
- [ ] Eliminar CSS relacionado con graph
- [ ] Verificar build exitoso

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota: Punto de Retorno
**Siempre** crear un commit de backup antes de implementar.

**Palabra clave**: Si el usuario dice **"regresa"**, revertir al punto de retorno con:
```bash
git reset --hard <commit-anterior>
```