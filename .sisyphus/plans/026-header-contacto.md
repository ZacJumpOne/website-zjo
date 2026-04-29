# Plan: Header - Contacto con categoría Soporte

## Análisis
Agregar "Contacto" al Header que haga scroll a la sección de feedback. Al acceder desde el header, el select de categoría debe cambiar a "Soporte" en lugar de "Sugerencia".

## Estado Actual
- `src/components/Header.astro` — navItems tiene 4 items (inicio, servicios, portafolio, clientes)
- `src/components/Feedback.astro` — categoría default es "Sugerencia"
- La sección de feedback tiene `id="contacto"`

## Tareas de Implementación (para revisión del usuario)
- [ ] Agregar `{ key: "contacto", label: "Contacto", href: "/#contacto" }` a navItems en Header.astro (se renderiza en desktop y mobile)
- [ ] Agregar JS al script de Header.astro para detectar `?cat=soporte` en la URL y cambiar el select de categoría a "soporte" al llegar a la sección feedback
- [ ] En Feedback.astro, agregar un pequeño script que lea `?cat=soporte` y seleccione esa opción (para que funcione también en otras páginas que linkeen con ese param)
- [ ] Verificar build

## Siguiente Paso
Confirmar con `/plan-go` para ejecutar.
