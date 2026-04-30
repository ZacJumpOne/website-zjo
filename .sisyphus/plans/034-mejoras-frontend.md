# Plan: Mejoras Frontend - Evaluación y Propuesta

## Análisis
El sitio actual obtiene 7.5/10 en auditoría frontend. Es funcional y profesional pero juega "seguro" — se parece a cientos de sitios de software hechos con Ant Design + Tailwind. Falta un momento memorable y coherencia visual.

## Estado Actual
- Fuente principal: Inter (genérica, usada por IA)
- Colores: Verde (#3AB34A) primario pero azul (#2563EB) domina el Hero
- Hero: carousel de screenshots funcionales pero sin "hook"
- Secciones: todas siguen patrón label → título → cards (predecible)
- Portafolio: masonry de grafos abstractos (no comunica valor)
- Footer: genérico dark + 4 columnas

## Tareas de Implementación (para revisión del usuario)

### 🔴 Alta Prioridad (cambios inmediatos, máximo impacto)
- [ ] **T1: Unificar identidad de color** — Verde como CTA/acciones, azul como decorativo (o viceversa). Definir en global.css
- [ ] **T2: Cambiar tipografía** — Reemplazar Inter por una fuente con carácter (ej: DM Sans, Plus Jakarta Sans). Afecta: global.css, Hero, Servicios, Portafolio, etc.
- [ ] **T3: Mejorar Hero visual** — Agregar un elemento memorable: mockup de producto con profundidad 3D, o sección destacada con métricas animadas grandes

### 🟡 Media Prioridad (se nota en 30 seg de navegación)
- [ ] **T4: Romper simetría en 2+ secciones** — Layout asimétrico (texto izquierda, imagen grande que se sale del grid derecha)
- [ ] **T5: Agregar sección Social Proof** — Logos de clientes + testimonios cortos + métricas de impacto
- [ ] **T6: Mejorar Portafolio** — Reemplazar grafos abstractos por screenshots reales con descripciones de valor

### 🟢 Baja Prioridad (pulido fino)
- [ ] **T7: Transiciones entre páginas** — Fade de 200ms al navegar entre páginas internas
- [ ] **T8: Footer con personalidad** — Agregar CTA final + pattern geométrico sutil en fondo
- [ ] **T9: Micro-interacciones en hover** — Ripple effects, morphing sutil en cards

### ❌ NO recomendado (bajo ROI o riesgo alto)
- Dark mode (no esencial para B2B, duplica trabajo de CSS)
- Migrar a Astro 6 en esta sesión (breaking changes, mejor hacerlo aparte)
- Rediseño completo del layout (no justifica el esfuerzo vs ganancia)

## Esfuerzo estimado por tarea
| Tarea | Tiempo | Riesgo |
|---|---|---|
| T1: Colores | 30 min | Bajo |
| T2: Tipografía | 45 min | Bajo |
| T3: Hero visual | 1-2 hrs | Medio |
| T4: Layouts asimétricos | 1 hr | Bajo |
| T5: Social Proof | 1-2 hrs | Medio (necesita assets) |
| T6: Portafolio | 1-2 hrs | Medio (necesita screenshots) |
| T7: Page transitions | 30 min | Bajo |
| T8: Footer redesign | 45 min | Bajo |
| T9: Micro-interacciones | 1 hr | Bajo |

## Siguiente Paso
Indica cuáles tareas quieres ejecutar (ej: "T1, T2, T3") y usa /plan-go para iniciar.
