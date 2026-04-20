# Plan: Incrementar 5% tamaño del logo en cabecera

## Análisis
Incrementar el tamaño del logo en el header un 5% y mantener las especificaciones del nombre según archivo 010.

## Estado Actual
**Archivo**: `src/components/Header.astro`

| Elemento | Valor Actual |
|----------|---------------|
| `.logo-icon img` height | 40px |
| `.logo-icon img` scrolled | 32px |
| `.brand-name` font-size | 2rem |
| `.brand-name` color | #3AB34A |

## Opción Recomendada
Aplicar incremento del 5%:
- Logo normal: 40px → 42px
- Logo scrolled: 32px → 34px
- Mantener nombre según archivo 010: 2rem, #3AB34A

## Tareas de Implementación
- [x] Incrementar `.logo-icon img` height: 40px → 42px
- [x] Incrementar `.header.scrolled .logo-icon img`: 32px → 34px
- [x] Verificar que nombre mantenga: font-size 2rem, color #3AB34A
- [x] Verificar build exitoso

## Siguiente Paso
Confirmación del usuario para proceder.
