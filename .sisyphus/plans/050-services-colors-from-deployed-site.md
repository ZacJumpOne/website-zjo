# Plan 050: Aplicar colores del sitio desplegado a Services.astro

## Goal
Extraer los colores de fondo y texto de la sección servicios del sitio desplegado en `/var/www/zerojumpone.com/dist` y aplicarlos a `src/components/Services.astro`

## Context
- Usuario requiere usar colores del sitio desplegado, NO del logo
- "no investigues algo mas concentrate en lo que te estoy pidiendo"
- Sitio desplegado usa una paleta verde basada en `#059669` y `#10b981`
- El archivo `Services.astro` actual tiene una paleta verde diferente (`--arbol-claro: #3AB34A`)

## Colores extraídos del sitio desplegado

### Background colors (sección servicios)
- `.services`: `linear-gradient(180deg, #fff, #f0fdf4, #fff)`
- `.spotlight`: `linear-gradient(135deg, #fff, #f0fdf4)`
- `.secondary-card`: `#fff`
- `.visual-block`: `#fff`

### Text colors
- `.spotlight-title`, `.sc-title`: `#0f172a`
- `.spotlight-description`, `.sc-description`: `#475569` / `#64748b`
- `.feature-item`: `#334155`
- `.section-label`: `#059669`
- `.section-title`: `#0f172a`
- `.section-subtitle`: `#64748b`

### Green palette (sitio desplegado)
- Primary green: `#059669`
- Light green: `#10b981`
- Lighter green: `#34d399`
- Background tint: `#f0fdf4`
- Border accent: `rgba(5, 150, 105, .15)`

### CSS variables actuales en Services.astro (a cambiar)
- `--arbol-claro: #3AB34A` → cambiar a `#10b981`
- `--arbol-oscuro: #2D8F3A` → cambiar a `#059669`
- `--bosque: #1a4a25` → cambiar a `#0f172a` (texto oscuro)
- `--arbol-medio: #5CBF6A` → cambiar a `#34d399`

## Tasks

### 1. Actualizar CSS variables en Services.astro
**File**: `src/components/Services.astro` (líneas ~17-22)

Cambiar:
```css
--arbol-claro: #3AB34A;
--arbol-oscuro: #2D8F3A;
--bosque: #1a4a25;
--arbol-medio: #5CBF6A;
```

Por:
```css
--arbol-claro: #10b981;
--arbol-oscuro: #059669;
--bosque: #0f172a;
--arbol-medio: #34d399;
```

### 2. Actualizar background del services section
**File**: `src/components/Services.astro` (línea ~25)

Cambiar:
```css
background: linear-gradient(180deg, #ffffff 0%, #f0faf1 50%, #ffffff 100%);
```

Por:
```css
background: linear-gradient(180deg, #fff, #f0fdf4, #fff);
```

### 3. Actualizar spotlight card background
**File**: `src/components/Services.astro` (línea ~70-80 aprox)

Cambiar el gradiente del spotlight para que use:
```css
background: linear-gradient(135deg, #fff, #f0fdf4);
border: 1px solid rgba(5, 150, 105, .15);
```

### 4. Actualizar text colors en spotlight
**File**: `src/components/Services.astro`

- `.spotlight-title`: asegurar `color: var(--bosque, #0f172a)`
- `.spotlight-description`: asegurar `color: #475569`
- `.feature-item`: asegurar `color: #334155`

### 5. Actualizar secondary cards
**File**: `src/components/Services.astro`

- Asegurar fondo blanco: `background: #fff`
- Border: `border: 1px solid #e2e8f0`
- Titles: `color: #0f172a`
- Descriptions: `color: #64748b`

### 6. Verificar gradientes y acentos
**File**: `src/components/Services.astro`

- `.sc-accent-bar.green`: `background: linear-gradient(90deg, #059669, #34d399)`
- `.sc-icon-wrapper`: `background: linear-gradient(135deg, #0596691a, #10b9811a)`
- Buttons CTA: `background: linear-gradient(135deg, #059669, #047857)`

### 7. Ejecutar validación
- `bun run build` para verificar que no hay errores
- `lsp_diagnostics` en `src/components/Services.astro`

## Verification
- [ ] Colores extraídos del sitio desplegado aplicados correctamente
- [ ] Gradientes coinciden con `/var/www/zerojumpone.com/dist/_astro/index.CFkJGBWX.css`
- [ ] Build exitoso sin errores
- [ ] LSP diagnostics limpio
