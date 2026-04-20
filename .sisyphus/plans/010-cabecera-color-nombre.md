# Plan: Cambiar color nombre Zero Jump One en cabecera

## Análisis
Cambiar el color del nombre "Zero Jump One" en el header de su color actual (variable CSS `--primary`) al color específico `#3AB34A`.

## Estado Actual
- **Archivo**: `src/components/Header.astro`
- **Línea 20**: El nombre usa `style="color: var(--primary);"`
- El color actual es la variable `--primary` (definida en CSS global)

## Tareas de Implementación
- [x] Modificar línea 20 en `src/components/Header.astro`: cambiar `var(--primary)` por `#3AB34A`
- [x] Verificar build exitoso

## Siguiente Paso
Confirmación del usuario para proceder con el cambio de una sola línea.
