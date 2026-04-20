# Plan: Agregar teléfono al header

## Análisis
Agregar el número de teléfono (33) 1749 0079 al header, visible y bien diseñado.

## Estado Actual
**Archivo**: `src/components/Header.astro`

El header actual tiene:
- Logo + nombre "Zero Jump One"
- Navegación desktop
- Menú mobile

No hay teléfono visible.

## Opciones de Approach

### Opción A: Teléfono a la derecha del nav (desktop)
- Mostrar entre nav y botón mobile
- Estilo: icon + número
- **Pros**: Visible, no altera estructura actual
- **Contras**: Ocupa espacio horizontal

### Opción B: Teléfono en footer del menú mobile
- Solo visible al abrir menú
- **Pros**: No ocupa espacio en header
- **Contras**: Menos visible

### Opción C: Teléfono junto al logo (header top)
- Above the navigation
- **Pros**: Máxima visibilidad
- **Contras**: Requiere restructure

## Opción Recomendada

**Opción A** - Teléfono a la derecha del nav (desktop), oculto en mobile. Usar icon de teléfono de Ant Design.

```html
<a href="tel:+523317490079" class="header-phone">
  <PhoneOutlined /> (33) 1749 0079
</a>
```

Estilos:
- Font size: 0.85rem
- Color: var(--text-gray)
- Hover: color primary

## Tareas de Implementación
- [x] Agregar constante de teléfono
- [x] Agregar elemento phone en header-container (desktop)
- [x] Agregar estilos CSS
- [x] Ocultar en mobile (< 992px)
- [x] Verificar build

## Siguiente Paso
Confirmación del usuario.