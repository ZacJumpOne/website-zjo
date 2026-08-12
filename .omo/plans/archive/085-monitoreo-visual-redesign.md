# Plan: Rediseño Visual de la Sección Monitoreo

## Análisis

El dashboard actual (panel de control con 3 tarjetas de progreso al 100%) es funcional pero visualmente plano — 3 rectángulos idénticos con barras verdes no transmiten "monitoreo en vivo" ni generan impacto visual. El usuario busca una alternativa **moderna y atractiva** que comunique efectivamente la propuesta de valor: "Nosotros monitoreamos tus sistemas, tú no te preocupas".

### Problemas del dashboard actual:
- Repetitivo: 3 tarjetas casi idénticas (check + label + barra 100%)
- Estático: las barras están siempre al 100%, no hay sensación de "actividad"
- No comunica "monitoreo": parece más una checklist que un sistema de supervisión
- Poco memorable: no destaca visualmente

## Estado Actual

- **Archivo**: `src/components/Services.astro`
- **Líneas del dashboard**: 98-117 (HTML markup `.spotlight-visual` > `.panel-dashboard`)
- **CSS del dashboard**: 417-508 (`.spotlight-visual` a `.panel-value`)
- **Features existentes**: `["Tareas automatizadas", "Respaldos Diarios", "Integridad de la base de datos"]`
- **Layout actual**: grid 2 columnas (1.1fr texto / 0.9fr visual), altura fija 320px
- **CSS variables disponibles**: `--arbol-claro: #3AB34A`, `--arbol-obscuro: #196632`, `--arbol-10/05/08`, `--gradient-bar`, `--arbol-circle`

---

## Opciones Propuestas

### 🔵 Opción A — «Pulso Radar + Status Ring» (🥇 Recomendada)

Un sistema visual circular con animación de pulso/radar que transmite "monitoreo activo 24/7".

**Visual**: 
- Círculo central con ícono `MonitorOutlined` pulsando suavemente
- 3 anillos concéntricos animados expandiéndose desde el centro (efecto radar/sonar)
- 3 badges de estado orbitando alrededor: "⚙️ Automatización — Activo", "💾 Respaldos — OK", "🗄️ Integridad — 100%"
- Cada badge tiene un mini indicador verde (dot pulsante)

**Por qué funciona**: 
- El efecto radar es universalmente reconocido como "sistema de monitoreo"
- La animación de pulso da sensación de "vivo/en tiempo real"
- Visualmente distintivo y memorable
- Se integra con el diseño limpio del sitio usando los verdes `--arbol-*`

**Complejidad**: Media (~50 líneas CSS + animaciones keyframe)

---

### ⚪ Opción B — «Terminal en Vivo»

Un mini terminal/log stream que muestra eventos de monitoreo en tiempo real.

**Visual**:
- Ventana estilo terminal (fondo oscuro #0f172a, texto verde `--arbol-claro`)
- "Prompt" con cursor parpadeante
- Líneas de log animadas apareciendo secuencialmente:
  ```
  $ zjo-monitor --status
  ✓ Tareas automatizadas — 12:45 PM — OK
  ✓ Respaldos diarios — 02:00 AM — Completado
  ✓ Integridad BD — 08:30 AM — 100% íntegro
  █ Sistema: OPERATIVO | Uptime: 99.9%
  ```
- Scroll suave con nuevas líneas apareciendo
- Decoración: dots rojo/amarillo/verde en la barra superior

**Por qué funciona**:
- Look "tech" que resuena con clientes técnicos (CTOs, IT managers)
- Comunica "profesionalismo técnico" y "transparencia"
- Muy usado por herramientas modernas (Vercel, Railway, Datadog)

**Complejidad**: Media (~40 líneas CSS + animación CSS secuencial)

---

### 🟢 Opción C — «Gráfica de Estado + Mini KPIs»

Un panel con mini gráficos vivos que muestran métricas de monitoreo.

**Visual**:
- 3 tarjetas mini en grid horizontal, cada una con:
  - Ícono del feature (engranaje, base de datos, escudo)
  - Valor grande animado: "100%" con efecto counter
  - Mini sparkline/gráfica de línea verde mostrando estabilidad
  - Label pequeño: "Tareas Automatizadas"
- Cada tarjeta tiene un indicador de estado (punto verde pulsante)

**Por qué funciona**:
- Los mini gráficos comunican "datos en tiempo real"
- El contador animado da dinamismo
- Layout en grid es limpio y profesional
- Familiar para usuarios de dashboards SaaS (Datadog, Grafana)

**Complejidad**: Media-Alta (~50 líneas CSS + SVG inline para sparklines)

---

## Recomendación

**Opción A — Pulso Radar + Status Ring**

Es la que mejor equilibra:
- ✅ Impacto visual inmediato (el radar es distintivo)
- ✅ Comunica "monitoreo activo" sin ambigüedad
- ✅ No depende de texto para funcionar (funciona como metáfora visual)
- ✅ Se integra con los colores y el estilo limpio del sitio
- ✅ Complejidad de implementación razonable
- ✅ Funciona bien en mobile (el círculo se escala)

## Tareas Propuestas

- [ ] Reemplazar HTML del `.spotlight-visual` (líneas 98-117) por markup del Pulse Ring
- [ ] Reemplazar CSS del dashboard (líneas 417-508) por estilos del nuevo diseño
- [ ] Verificar responsive en breakpoints 992px y 768px
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Elige una opción (A, B, o C) y dime si quieres ajustar algo. Luego usa `/plan-go` para ejecutar.
