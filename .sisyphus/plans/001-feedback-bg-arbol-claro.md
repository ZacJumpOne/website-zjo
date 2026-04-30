# Plan: Cambiar background de Feedback.astro a arbol-claro

## Análisis
El usuario solicita colocar el color "arbol-claro" como fondo (background) del componente `src/components/Feedback.astro`. Actualmente, el fondo de este componente usa un gradiente lineal basado en las variables `--primary` y `--primary-dark`. Se asume que "arbol-claro" corresponde a una variable CSS personalizada del proyecto (ej. `--arbol-claro`), siguiendo el patrón de variables existentes.

## Estado Actual
- **Archivo objetivo**: `src/components/Feedback.astro` (líneas 245-248 de la sección `<style>`)
- **Estilo actual**: `.feedback { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); }`
- **Variables CSS**: Definidas en `src/styles/global.css` (según configuración del proyecto en AGENTS.md)
- No se ha confirmado aún si la variable `--arbol-claro` está definida en los estilos globales.

## Tareas de Implementación (para revisión del usuario)
- [ ] Verificar la existencia de la variable CSS `--arbol-claro` en `src/styles/global.css` u otros archivos de estilos relevantes
- [ ] Modificar la propiedad `background` de la clase `.feedback` en `src/components/Feedback.astro` para reemplazar el gradiente por `var(--arbol-claro)`
- [ ] Ejecutar validación de estilos (mediante `bun run build` o inspección en entorno de desarrollo) para confirmar que el cambio se aplica correctamente y no hay errores CSS

## Siguiente Paso
Revisar el plan propuesto. Una vez confirmado, usar `/plan-go` para ejecutar las tareas de implementación.
