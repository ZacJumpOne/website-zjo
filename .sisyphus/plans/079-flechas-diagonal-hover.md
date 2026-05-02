# Plan: Restaurar Efecto Diagonal en Flechas de Botones

## Análisis

Las flechas de los botones en Services tienen actualmente un efecto simple al hover: `translate(4px)` o `translate(3px)` — solo se deslizan a la derecha.

El usuario recuerda que antes la flecha apuntaba en diagonal hacia abajo (↘), dando un efecto más dinámico de "ir hacia adelante y abajo".

## Estado Actual

- `spotlight-cta` hover: `transform: translate(4px)` → sin rotación
- `sc-cta` hover: `transform: translate(3px)` → sin rotación

## Cambio Propuesto

Agregar `rotate(45deg)` al hover para que la flecha apunte en diagonal ↘:

- `spotlight-cta`: `transform: translate(4px) rotate(45deg)`
- `sc-cta`: `transform: translate(3px) rotate(45deg)`

## Tareas de Implementación (para revisión del usuario)

- [ ] Cambiar `.spotlight-cta:hover .cta-icon` a `transform: translate(4px) rotate(45deg)`
- [ ] Cambiar `.sc-cta:hover .cta-icon` a `transform: translate(3px) rotate(45deg)`
- [ ] Correr `bun run build` para validar

## Siguiente Paso

Usa `/plan-go` cuando estés listo para ejecutar el plan.
