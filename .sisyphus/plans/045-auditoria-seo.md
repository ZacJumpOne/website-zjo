# Plan: Auditoría y mejora SEO

## Análisis
Revisión completa del SEO del sitio Zero Jump One contra estándares modernos (Core Web Vitals, Open Graph, sitemaps, semántica HTML, structured data). El sitio actual funciona pero carece de elementos críticos para indexación y compartir en redes sociales.

## Estado Actual

### ✅ Lo que SÍ tiene:
- `<html lang="es">` — correcto
- `<meta charset="UTF-8">` — correcto
- `<meta name="viewport">` — correcto
- `<meta name="description">` en Layout — presente
- `<title>` por página — presente
- `favicon` — presente (ico)
- Font preconnect (`fonts.googleapis.com`, `fonts.gstatic.com`) — correcto
- CSP headers configurados — correcto
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>` — presente

### ❌ Lo que FALTA:

| Elemento | Estado | Impacto |
|---|---|---|
| **Open Graph (og:*)** | Faltan todos | Alto — no hay preview al compartir en WhatsApp/Facebook/LinkedIn |
| **Twitter Card** | Faltan todos | Medio — no hay preview en Twitter/X |
| **Canonical URL** | Falta | Medio — riesgo de contenido duplicado |
| **robots.txt** | No existe | Alto — los bots no saben qué crawlear |
| **sitemap.xml** | No existe | Alto — Google no descubre páginas eficientemente |
| **og:image** | No existe imagen social | Alto — sin imagen al compartir |
| **JSON-LD (Structured Data)** | Falta | Medio — sin rich snippets en Google |
| **meta keywords** | Falta | Bajo — Google lo ignora, pero otros buscadores pueden usarlo |
| **author / publisher meta** | Falta | Bajo |
| **theme-color** | Falta | Bajo — color de barra en móvil |
| **apple-touch-icon** | Falta | Bajo — icono en iOS |

## Tareas de Implementación (para revisión del usuario)

- [ ] **T1**: Agregar Open Graph + Twitter Card meta tags en `Layout.astro` (og:title, og:description, og:image, og:url, og:type, og:locale, twitter:card, twitter:title, twitter:description)
- [ ] **T2**: Agregar canonical URL en `Layout.astro` (usar `Astro.url` para generar dinámicamente)
- [ ] **T3**: Crear `public/robots.txt` — permitir todo, apuntar a sitemap
- [ ] **T4**: Crear `src/pages/sitemap.xml.ts` — sitemap dinámico con todas las rutas estáticas
- [ ] **T5**: Crear `public/og-image.png` (1200×630px) — imagen social con branding ZJO (placeholder que el usuario pueda reemplazar)
- [ ] **T6**: Agregar JSON-LD (Organization + WebSite structured data) en `Layout.astro`
- [ ] **T7**: Agregar `<meta name="theme-color" content="#059669">` y `<link rel="apple-touch-icon">` en Layout
- [ ] **T8**: Verificar build

## Detalles Técnicos

### Dominio base
`https://zerojumpone.com` (asumido — configurable via `SITE_URL` en astro.config)

### Open Graph mínimo requerido:
```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="es_MX" />
<meta property="og:site_name" content="Zero Jump One" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content={Astro.url} />
```

### Twitter Card:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
```

### robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://zerojumpone.com/sitemap.xml
```

### JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zero Jump One",
  "url": "https://zerojumpone.com",
  "description": "El Software que lo hace posible",
  "sameAs": []
}
```

## Siguiente Paso
Usa `/plan-go` cuando estés listo para ejecutar el plan.
