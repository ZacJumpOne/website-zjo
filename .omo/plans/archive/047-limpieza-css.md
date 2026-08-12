# Plan: Limpieza y Clarificación de CSS

## Análisis
El proyecto tiene problemas de legibilidad y repetición en el CSS:
- Variables con valores hexadecimales inválidos (7 caracteres en lugar de 6)
- Variables duplicadas con nombres diferentes (`--arbol-obscuro` duplica `--primary-dark`)
- La fuente declarada en CSS no coincide con la fuente cargada
- Gradientes hardcodeados repetidos 7+ veces en lugar de usar variables CSS
- Animaciones `@keyframes` duplicadas en archivos .astro y global.css
- Sintaxis incorrecta en algunos gradientes (faltan comas)

## Estado Actual
- `src/styles/global.css` - Variables corruptas y duplicadas
- `src/components/Hero.astro` - Gradientes repetidos, animación fadeIn duplicada
- `src/components/Services.astro` - Gradientes repetidos, animación fadeInUp duplicada
- `src/components/Social.astro` - Gradientes repetidos
- `src/components/Header.astro` - Comentario HTML mal ubicado

## Tareas de Implementación (para revisión del usuario)
- [x] Fix global.css hex colors: Corregir `--primary-dark: #2D8A3C` y `--primary-light: #4CC45E` (tienen 7 caracteres, deben tener 6)
- [x] Estandarizar variables arbol: Mantener `--arbol-obscuro` y `--arbol-claro` en global.css. Reemplazar en todo el proyecto (Hero.astro, Services.astro, Footer.astro, etc.) los valores hardcodeados de colores verdes (#059669, #047857, #10b981, #34d399) y variables --primary / --primary-dark por las variables `--arbol-claro` y `--arbol-obscuro` según corresponda.
- [x] Fix fuente global: En global.css, `--font-sans` dice `'Inter'` pero esta fuente NO está cargada. La fuente cargada en Layout.astro es **Plus Jakarta Sans**. Corregir `--font-sans: 'Plus Jakarta Sans'` para que "Software Empresarial" (Hero.astro) y todos los `.section-title` usen la fuente que ya está cargada y sea consistente.
- [x] Crear variables de gradiente en global.css: Extraer gradientes repetidos (ej: `--gradient-primary: linear-gradient(135deg, #059669, #10b981)`)
- [x] Reemplazar gradientes hardcodeados: En Hero.astro, Services.astro, Social.astro usar variables CSS en lugar de valores literales
- [x] Eliminar animaciones duplicadas: Remover `@keyframes fadeInUp` de Services.astro y `@keyframes fadeIn` de Hero.astro (ya están en global.css)
- [x] Fix sintaxis gradientes: Agregar comas faltantes en gradientes tipo `linear-gradient(135deg, #059669 0%, ...)` → debe ser `linear-gradient(135deg, #059669 0%, ...)`
- [x] Limpiar comentario HTML en Header.astro: Remover `<!-- <li><a href="#inicio">Inicio</a></li> -->` de línea 38

## Resultados
- Build exitoso: 14 páginas generadas en 16.75s
- Variables `--primary-dark` y `--primary-light` eliminadas, mantenidas `--arbol-obscuro` y `--arbol-claro`
- Creadas variables `--gradient-*`, `--arbol-*` para valores rgba repetidos
- Fuente `--font-sans` corregida a `'Plus Jakarta Sans'`
- Gradientes hardcodeados reemplazados por variables CSS en Hero.astro, Services.astro, Footer.astro, Social.astro
- Animaciones `@keyframes fadeIn` (Hero.astro) y `@keyframes fadeInUp` (Social.astro) removidas
- Sintaxis de gradientes corregida (agregadas comas faltantes)
- Comentario HTML innecesario removido de Header.astro

## Siguiente Paso
Usa /plan-go cuando estés listo para ejecutar el plan.
