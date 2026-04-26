# Plan: Abreviador titulo movil "ZJO"

## Análisis
En dispositivos móviles, cambiar el texto "Zero Jump One" a "ZJO" para evitar que se saltar línea. El cambio debe ser responsive: "ZJO" en móvil, "Zero Jump One" en desktop.

## Estado Actual
- **Archivo**: `src/components/Header.astro`
- **Texto actual línea 30**: `>Zero Jump One</span>`
- **CSS líneas 150-154**: `.brand-name` tiene `font-size: 2rem` y `line-height: 1`
- **No hay media query** para el texto

## Solución Propuesta
- Usar condicional en Astro para mostrar texto diferente según viewport
- O usar CSS `text-overflow` o media query para cambiar el contenido

## Tareas de Implementación (para revisión del usuario)
- [ ] Modificar el texto en Header.astro para mostrar "ZJO" en móvil
- [ ] Verificar que se vea correctamente en desktop (sigue mostrando "Zero Jump One")
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