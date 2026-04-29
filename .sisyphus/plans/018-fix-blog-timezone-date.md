# Plan: Corregir Desfase de Timezone en Fecha del Blog

## Análisis

El usuario reporta un problema de **fuso horario (timezone)** en la visualización de fechas:

**Problema:**
- En el archivo `mi-primer-blog.md` se configuró la fecha: `date: 2026-04-27`
- Cuando se visualiza en el blog, aparece como **un día antes** (26 de abril, no 27)
- El usuario requiere que la fecha se muestre **exactamente** como se coloca en el MD, sin trucos de compensación

**Causa técnica:**
1. En el MD se coloca `date: 2026-04-27` (formato YYYY-MM-DD) - **esto está correcto**
2. Astro parsea esto como `new Date("2026-04-27")` = `2026-04-27T00:00:00Z` (UTC)
3. Al renderizar con `.toLocaleDateString("es-ES", {...})` **SIN** `timeZone`, JavaScript convierte a la zona horaria local
4. Con `TZ=America/Mexico_City` (UTC-6): `2026-04-27T00:00:00Z` → `2026-04-26T18:00:00` → muestra **26 de abril**

**Archivos afectados:**
- `src/pages/blog/index.astro` (línea 63-67) - Renderiza fecha con `toLocaleDateString`
- `src/pages/blog/[...slug].astro` (línea 47-51) - Renderiza fecha con `toLocaleDateString`

## Estado Actual

- ✅ Formato en MD: `date: 2026-04-27` (es el formato correcto, NO cambiar)
- ❌ Renderizado: `toLocaleDateString("es-ES", {...})` sin `timeZone: "UTC"`
- ❌ Resultado: Muestra 26 de abril en lugar de 27
- ✅ Timezone del sistema: `TZ=America/Mexico_City` (UTC-6)

## Tareas de Implementación (para revisión del usuario)

- [ ] En `src/pages/blog/index.astro`: Agregar `timeZone: "UTC"` en las opciones de `toLocaleDateString` (línea 63-67)
- [ ] En `src/pages/blog/[...slug].astro`: Agregar `timeZone: "UTC"` en las opciones de `toLocaleDateString` (línea 47-51)
- [ ] Verificar que `date: 2026-04-27` en MD se muestre como "27 de abril de 2026"

### Detalle del cambio (mismo para ambos archivos):

```javascript
// ANTES (incorrecto):
{post.data.date.toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}

// DESPUÉS (correcto):
{post.data.date.toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC"
})}
```

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/018-fix-blog-timezone-date.md`
