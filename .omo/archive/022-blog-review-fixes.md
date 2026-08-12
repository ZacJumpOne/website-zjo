# Plan: Revisión y corrección del blog elefante.md

## Análisis
El usuario solicita: (1) evaluar si se puede justificar el texto del blog, (2) revisar faltas de ortografía, y (3) verificar la coherencia del contenido.

### 1. Justificación de texto
**SÍ es posible**. El blog se renderiza en `src/pages/blog/[...slug].astro` dentro de un `<div class="post-body">` que contiene el componente `<Content />` (Markdown renderizado). Actualmente NO tiene `text-align` definido.

Para justificar el texto, se debe agregar `text-align: justify;` en el CSS del archivo `[...slug].astro` dentro de la clase `.post-body` o en `.post-body p`.

### 2. Faltas de ortografía detectadas en `elefante.md`

**Frontmatter excerpt (línea 5):**
- "habitacion" → "habitación"
- "estadisticamente" → "estadísticamente"
- "instalarse" → suena extraño en contexto, debería ser "implementarse"

**Cuerpo del artículo:**
- Línea 11: "investigacion" → "investigación"
- Línea 11: "informacion" (3 veces) → "información"
- Línea 11: "habitacion" → "habitación"
- Línea 11: "como fue que" → phrasing awkward, sugerir "cómo fue que"
- Línea 11: "dia" → "día"
- Línea 15: "comento" → "comentó"
- Línea 15: "Cual" → "Cuál"
- Línea 15: "comienza" → correcto, pero suena mejor "comienza"
- Línea 15: "porque" → debería ser "por qué" (contexto pregunta)
- Línea 15: "altisima" → "altísima"
- Línea 15: "mas" → "más"
- Línea 15: "instalarse" → debería ser "implementarse"
- Línea 15: "espectativas" → **ERROR**: debería ser "expectativas"
- Línea 19: "Mucho es la capacidad" → awkward, debería ser "Mucha es la capacidad" o "Mucho tiene que ver con la capacidad"
- Línea 19: "tecnica" → "técnica"
- Línea 19: "herramientas" → correcto
- Línea 19: "elija" → correcto
- Línea 19: "orientacion" → "orientación"
- Línea 19: "hermosa" → debería ser "hermoso" (el guante es masculino)
- Línea 19: "perdio" → "perdió"
- Línea 24: "nostros" → "nosotros"
- Línea 24: "organica" → "orgánica"
- Línea 24: "solucion" (2 veces) → "solución"
- Línea 24: "evolucion" → "evolución"
- Línea 34: "implementacion" → "implementación"

### 3. Coherencia del contenido
**Idea general**: El "elefante en la habitación" es una metáfora para los grandes sistemas ERP/información que las empresas eligen pero no logran implementar correctamente (más del 60% no se instalan según el texto).

**Problemas de coherencia detectados:**
- El **excerpt** (línea 5) habla de "monstruo" pero el artículo habla de "elefante" - no coinciden
- La metáfora del "guante hermoso" en línea 19 es confusa: "cortando las puntas de los dedos" para que quede bien no tiene relación clara con sistemas ERP
- El título del artículo (# El Elefante en la Habitación.) usa mayúsculas inconsistentes con el frontmatter
- La conclusión (línea 34) es vaga: "el cliente realice y tenga su solución ideal" - ¿qué significa "realice"?

## Estado Actual
- Post del blog: `src/content/blog/elefante.md`
- Renderizado en: `src/pages/blog/[...slug].astro` (clase `.post-body`)
- No hay `text-align` definido actualmente

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar `text-align: justify;` en la clase `.post-body` en `src/pages/blog/[...slug].astro` para justificar el texto
- [ ] Corregir faltas de ortografía en `src/content/blog/elefante.md` (acentos, "expectativas", "nosotros", "orgánica", "solución", "implementación", etc.)
- [ ] Corregir género gramatical: "hermosa" → "hermoso" (el guante)
- [ ] Corregir excerpt: cambiar "monstruo" por "elefante" para que coincida con el contenido
- [ ] Ajustar conclusión (línea 34) para que sea más clara y coherente

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.

---
📁 Archivo: `.sisyphus/plans/022-blog-review-fixes.md`
