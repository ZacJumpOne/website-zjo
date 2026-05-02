# Plan: Revisión Ortografía y Coherencia — blog sdd.md

## Análisis

Revisión exhaustiva de ortografía, gramática y coherencia del post `src/content/blog/sdd.md` (41 líneas, tono conversacional y autobiográfico sobre SDD).

## Errores Encontrados

### Ortografía — Acentos faltantes (25 errores)

| Línea | Error | Corrección |
|-------|-------|-----------|
| 13 | tecnologia | tecnología |
| 13 | tratare | trataré |
| 13 | tecnisismos | tecnicismos |
| 13 | menti | mentí |
| 13 | aburrirlos | *(correcto)* |
| 17 | Jamas | Jamás |
| 17 | crei | creí |
| 17 | hare | haré |
| 17 | esta (siempre) | está |
| 17 | Como | Cómo |
| 19 | diria | diría |
| 21 | tecnologia | tecnología |
| 21 | habia | había |
| 21 | codigo | código |
| 21 | tambien | también |
| 21 | diria | diría |
| 22 | mas | más |
| 22 | interes | interés |
| 25 | dios | Dios |
| 25 | como | cómo |
| 31 | aqui | aquí |
| 31 | olvido | olvidé |
| 31 | de como | de cómo |
| 32 | encontre | encontré |
| 32 | siguente | siguiente |
| 34 | mi (para mi) | mí (para mí) |
| 35 | señalandole | señalándole |
| 35 | ahi | ahí |
| 36 | ultimo | último |
| 36 | canse | cansé |

### Ortografía — Errores de palabra

| Línea | Error | Corrección |
|-------|-------|-----------|
| 13 | "los que **nos** son tanto" | "los que **no** son tanto" |
| 34 | "La **aventara** de los SKILLS" | "La **aventura** de los SKILLS" |
| 17 | espacio doble "suena,  pero" | espacio simple |

### HTML inválido

| Línea | Error | Corrección |
|-------|-------|-----------|
| 21, 28, 30, 34, 35 | `</br>` | `<br />` |

### Gramática / Coherencia

| Línea | Problema | Sugerencia |
|-------|----------|------------|
| 17 | Punto tras interrogación: "¿Como funciona?." | Quitar punto: "¿Cómo funciona?" |
| 22 | "toma gran interés ahora los requerimientos" | "los requerimientos del cliente cobran gran importancia" |
| 33 | "Sisyphus y sus siete ayudantes otros sub-agentes" | "Sisyphus y sus siete ayudantes (sub-agentes)" |
| 35 | Estructura muy larga, la coma antes de "señalándole" corta mal | Revisar puntuación de la oración completa |

### Coherencia General

✅ Estructura lógica: título → introducción con humor → explicación → lista numerada → conclusión  
✅ Tono conversacional consistente (autobiográfico, autocrítico, cercano)  
✅ Las ideas fluyen de forma natural  
✅ Buen uso de ejemplos concretos (este sitio web como caso real)  
✅ Conclusión alinea con el título y el cuerpo  

## Tareas Propuestas

- [ ] Corregir ~25 acentos faltantes
- [ ] Corregir 2 errores de palabra ("nos"→"no", "aventara"→"aventura")
- [ ] Reemplazar `</br>` → `<br />` (5 ocurrencias)
- [ ] Corregir puntuación y pequeñas mejoras de fluidez (4 sugerencias)
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar las correcciones.
