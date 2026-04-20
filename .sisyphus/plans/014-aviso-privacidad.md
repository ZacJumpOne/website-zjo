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

###Error修复失败
编辑器把HTML弄乱了，修复不工作。

### NUEVA SOLICITUD
简单 - 从头重新创建整个文件。

### Tareas de Implementación (CORREGIDAS)
- [ ] 从头重写整个 aviso-de-privacidad.astro 文件
- [ ] 把所有 section 放在 `.privacy-content` div 里面
- [ ] 把按钮 "Volver al inicio" 放在 `.privacy-content` div 里面
- [ ] Verificar build

### Importante
直接重建整个文件，不要尝试修复现有的。

## Siguiente Paso
Confirmación del usuario para proceder.