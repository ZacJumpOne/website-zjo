# Plan: Aviso de Privacidad

## Análisis
Crear página de Aviso de Privacidad con diseño homogeneo al sitio, usando Lorem conformatos (negritas, títulos agrandados), más botón de volver.

## Estado Actual
**Archivos**: 
- `src/components/Footer.astro` - Línea 35: `<li><a href="#">Aviso de Privacidad</a></li>` (sin función)
- Footer sin id definido

## Tareas de Implementación (unificadas)

### Fase 1: Crear página de aviso de privacidad
- [x] Crear src/pages/aviso-de-privacidad.astro
- [x] Agregar enlace en Footer (cambiar href a /aviso-de-privacidad)
- [x] Agregar texto completo de aviso de privacidad (proporcionado por usuario)
- [x] Verificar build

### Fase 2: Agregar botón de volver
- [x] Agregar botón "Volver" en el HTML (estilo igual a pages de solución)
- [x] Agregar estilos CSS
- [x] Verificar build

### Fase 3: Ajustar botón para volver al footer
- [x] Agregar id="footer" al elemento `<footer>` en Footer.astro
- [x] Actualizar enlace del botón a /#footer
- [x] Cambiar texto a "← Volver al footer"
- [x] Verificar build

## Tareas de Implementación (adicionales)

### Fase 4: Agregar animación de entrada (slideUp)
- [x] Agregar @keyframes slideUp en aviso-de-privacidad.astro
- [x] Aplicar animation: slideUp al contenido principal
- [x] Verificar build

### Fase 5: Agregar efectos escalonados a textos (como detalle)
- [x] Agregar animation-delay y opacity al título (0.2s)
- [x] Agregar animation-delay y opacity a cada section (escalonado)
- [x] Verificar build

### Fase 6: Centralizar fecha de aviso en data/generales.ts
- [x] Crear src/data/generales.ts con bandera de aviso y fecha
- [x] Importar en aviso-de-privacidad.astro
- [x] Verificar build

## Fase 7: Agregar botón "Subir al inicio" al final del contenido

### Análisis (CORREGIDO)
El usuario quiere:
- **Mantener el botón flotante** con su implementación actual (se detiene antes del footer)
- **AGREGAR segundo botón** dentro del card al final del contenido
- Cuando el footer aparece → el botón flotante se oculta y aparece el botón fijo dentro del card

Es lo contrario: flotante funciona arriba, fijo funciona cuando llegas al footer

### Propuesta del Usuario
> "dejarse el boton flotante con su implementacion, ahora lo que se debe hacer es que cuando aparezca el footer, aparezca al final dentro del card el boton de subir al inicio, es lo contrario del boton flotante"

### NUEVA SOLICITUD
Agregar botón flotante para regresar al inicio.

## Análisis
El aviso de privacidad es muy grande (largo). Necesitamos un botón flotante (fixed) siempre visible para volver al inicio de la página.

## Estado Actual
- Botón "Ir al inicio" al final del contenido (dentro del card)
- Necesitamos UN BOTÓN FLOTANTE también

## Propuesta
Agregar botón flotante con:
- position: fixed
- Esquina inferior derecha
-Diseño simple (fondo azul, flecha arriba)
- onClick con window.scrollTo

## Tareas de Implementación
- [x] Agregar botón flotante en el HTML (fuera del main, antes de Footer)
- [x] Agregar estilos CSS para posición fixed
- [x] Verificar build

## Siguiente Paso
Confirmación del usuario.

## Fase 8: Ocultar/Mostrar botones con Intersection Observer

### Análisis
El usuario quiere que:
- Cuando el botón "Ir al inicio" dentro del card sea visible → el botón flotante desaparece
- Cuando el botón del card NO sea visible → el botón flotante aparece

Es una lógica inversa: solo mostrar flotante cuando el botón del card está fuera de vista.

### Opción A: Intersection Observer simple
- Usar Intersection Observer para detectar visibilidad del botón inline
- Cuando inline está visible → flotante hidden (display: none)
- Cuando inline NO visible → flotante visible

### Opción B: scroll event con throttle
-监听 scroll event y calcular posición del botón inline
- Alternar visibilidad basado en posición

### Opción Recomendada: **Opción A**
Intersection Observer es más performante y no requiere cálculos en cada scroll.

### Tareas de Implementación
- [x] Agregar id al botón inline "Ir al inicio" (si no tiene)
- [x] Agregar script con Intersection Observer en aviso-de-privacidad.astro
- [x] Agregar lógica para mostrar/ocultar botón flotante
- [x] Verificar build

## Siguiente Paso
Confirmación del usuario para proceder.