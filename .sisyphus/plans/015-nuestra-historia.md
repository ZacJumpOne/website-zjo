# Plan: Página Nuestra Historia

## Análisis

El usuario quiere implementar una página "Nuestra Historia" para Zero Jump One. 

**Contexto del usuario (CEO):**
- 25+ años en desarrollo de software de alta calidad
- Ingeniería en Computación - CUCEI (UDG)
- Maestría en Dirección de Ingeniería de Software
- Desarrolló ERP Jump One (centrado en procesos/estados)
- Desarrolló Report Jump One (reportes универсальные)
- Lideró evaluación CMMI nivel 2 con resultado positivo

**Historia a comunicar:**
- Los usuarios siempre justificaban "no sabían qué hacer" porque el sistema lo hacía
- ERP Jump One se desarrolló pensando en procesos/estados que el usuario debe realizar
- Esto cambia el modo de justificar un error: ya no es el "error" como tal, sino el **dolo** de hacer algo incorrecto para encontrar huecos y falsear sistemas
- Report Jump One cubre cualquier reporte de diferentes empresas y formas de trabajo
- Participación y liderazgo en evaluación CMMI nivel 2 con resultado positivo

**Restricción:** Llenar documentación faltante para no hacer muy tardado

## Estado Actual

- No existe página de historia actualmente
- Estructura del sitio: Astro + Ant Design
- Páginas existentes: index.astro, aviso-de-privacidad.astro
- Componentes: Header, Hero, Services, Portfolio, Clients, Feedback, Social, Footer

## Opción Recomendada

Diseñé una página de historia con **estructura de timeline vertical** que presente la narrativa de forma cronológica y profesional:

1. **Header de página**: Título "Nuestra Historia" con subtítulo evocador
2. **Timeline vertical**: Línea central con hitos a izquierda/derecha alternados
3. **Secciones principales**:
   - Fundamentos (origen, visión del problema)
   - ERP Jump One (filosofía de procesos/estados)
   - Report Jump One (versatilidad de reportes)
   - CMMI Nivel 2 (logro de calidad)
4. **Filosofía diferencial**: Explicar el cambio de paradigma (error → dolo) de forma elegante

** copy profesional que evita que usuarios se sientan agredidos**:
- Enfocar en "empoderamiento del usuario" no en "detección de fraude"
- "Diseñamos procesos donde cada acción tiene un estado claro"
- "El usuario tiene control total sobre las decisiones del sistema"
- "Transparencia en cada paso del proceso"

## Tareas de Implementación

- [x] Crear página `src/pages/nuestra-historia.astro`
- [x] Implementar layout Philosophy-First (no timeline)
- [x] Agregar sección "El problema que nos dio origen"
- [x] Agregar sección "Nuestra respuesta" (filosofía procesos/estados)
- [x] Agregar sección productos (ERP Jump One + Report Jump One)
- [x] Agregar sección CMMI Nivel 2 (logro de calidad)
- [x] Usar componentes Ant Design para icons
- [x] Añadir floating scroll-to-top button
- [x] Verificar consistencia con otras páginas
- [x] Build y verificación - PASSED

### Tareas de Estandarización (vs Portafolio Detalle)

- [x] Agregar imagen historia.png al header del card
- [x] Título overlay en top-right (estilo solucion-tag)
  - font-size: 0.7rem, uppercase, letter-spacing
- [x] Estandarizar colores (azul→zinc elegante)
- [x] Título h1 body: 2rem/700 (igual solucion-titulo)
- [x] Back link: color #2563eb
- [x] Divider: gradient #2563eb→#18181b
- [x] Section headers: 2rem/700 con icono 1.5rem
- [x] Section cards: fondo #f8fafc, border #2563eb
- [x] Body padding: 40px
- [x] Remover font-style: italic (líneas 351, 455, 614)
- [x] Aplicar tipografía NoticiaText-Bold a "Zero Jump One"
- [x] Aplicar estilo títulos de aviso-de-privacidad (subrayado verde)
- [x] Estandarizar párrafos (font-size, line-height, text-align)
- [x] Remover cursiva de quote-text
- [x] Aumentar iconos a 150%
- [x] Centrar botón "Volver al inicio" (alineado al bottom issue)
- [x] Copiar diseño de botón de aviso-de-privacidad a nuestra-historia
- [x] Mover línea y botón DENTRO de la card (actualmente fuera)
- [x] Quitar botón "Ir al inicio" y toda referencia
- [x] Agregar botón flotante (como aviso-de-privacidad)
- [x] Estandarizar "Zero Jump One" con fuente del párrafo
- [ ] Agregar botón "Ir al inicio" (como aviso-de-privacidad)
- [ ] Quitar botón flotante
- [ ] Revisión final por usuario

## Siguiente Paso

Confirmar si el enfoque de timeline vertical con las 4 secciones es adecuado, o si prefiere otra estructura visual.