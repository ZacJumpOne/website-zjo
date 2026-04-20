# AGENTS.md

## Project Overview
Astro website for "Zero Jump One" (El software que lo hace posible). Uses Astro 4.x with React integration and Ant Design components.

## Commands
```bash
bun run dev      # Start dev server (binds to host for remote access)
bun run build    # Production build
bun run preview  # Preview production build
```

## Architecture
- **Framework**: Astro 4.x with `@astrojs/react` integration
- **UI Library**: Ant Design 5.x (light theme)
- **Language**: TypeScript (extends `astro/tsconfigs/strict`)
- **JSX**: Uses `react-jsx` with `jsxImportSource: react`
- **Styling**: CSS with CSS variables; Inter font family (Google Fonts)
- **Design**: Clean, modern light theme inspired by SaaS product pages

## Key Configurations

### astro.config.mjs
The Vite SSR config uses `noExternal` for all Ant Design related packages. This is REQUIRED for SSR to work correctly. Packages include:
- `antd`, `@ant-design/icons`, `@ant-design/cssinjs`, `@ant-design/cssinjs-utils`
- All `rc-*` packages (rc-util, rc-picker, rc-dialog, etc.)
- `@emotion/hash`

### JSX in Astro Components
JSX (React components like `<Icon />`) must NOT be used in the Astro frontmatter section (`---`). Move JSX to the template section or use icon name strings.

## Project Structure
```
src/
├── layouts/Layout.astro    # Base HTML layout
├── pages/index.astro        # Home page entry
├── components/*.astro       # Page sections (Header, Hero, Services, etc.)
├── styles/global.css        # Global styles
└── env.d.ts                 # Astro env types
public/
└── favicon.svg
```

## Important Notes
- Site language is Spanish (`lang="es"`)
- Uses light color scheme with clean SaaS-inspired design
- No linting/testing tools configured (simple static site)
- Lockfile: `bun.lock` (Bun-compatible but npm/yarn work too)
