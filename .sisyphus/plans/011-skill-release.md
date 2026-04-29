# Plan: Crear Skill "release" para sincronizar versión y build del sitio

## Análisis

El usuario quiere crear una nueva skill "release" que:
1. Lea el campo `version` de `src/data/generales.ts`
2. Extraiga el año de la versión (ej: "2026.04.27.02" → "2026")
3. Actualice el Footer.astro con la versión formateada
4. Ejecute `bun run build`
5. Cumpla con todos los requisitos de una skill de OpenCode

**Nota**: La tarea de deploy (copiar a `/var/www/`) se maneja por proyecto y no está incluida en esta skill.

**Estructura requerida para una skill:**
- Carpeta en `/home/hdez/.agents/skills/release/`
- Archivo `SKILL.md` con frontmatter válido
- Nombre, description, scope definidos

## Estado Actual

- `src/data/generales.ts`: Contiene `version: "2026.04.27.02"`
- `src/components/Footer.astro`: Contiene versión hardcodeada `<p class="version">v2026.04.27.01</p>`
- Skills existentes en `/home/hdez/.agents/skills/` como referencia

## Tareas de Implementación (para revisión del usuario)

- [ ] **Tarea 1**: Crear carpeta `/home/hdez/.agents/skills/release/`
- [ ] **Tarea 2**: Crear archivo `SKILL.md` con frontmatter (name, description, scope)
- [ ] **Tarea 3**: Importar `generales.version` en Footer.astro
- [ ] **Tarea 4**: Extraer año de la versión con regex o split
- [ ] **Tarea 5**: Formatear output: "v2026.04.27.02" con año dinámico "© 2026"
- [ ] **Tarea 6**: Ejecutar `bun run build`
- [ ] **Tarea 7**: Verificar que el build fue exitoso

## Siguiente Paso

Confirmar que proceda a ejecutar el plan con `/plan-go`.