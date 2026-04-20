# Plan: Centralizar Datos del Portafolio

## Análisis

**Problema**: Los datos del portafolio están duplicados en dos archivos:
- `src/components/Portfolio.astro` - array `portfolioItems`
- `src/pages/solucion/[slug].astro` - array `soluciones`

Esto genera riesgo de inconsistencias al actualizar.

---

## Opción Recomendada

Crear un archivo de datos centralizado:

### 1. Crear `src/data/portfolio.ts`:
- Array único con todos los datos
- Campos: `shortDescription` (tarjeta) y `description` (detalle)

### 2. Importar en ambos componentes:
- Portfolio.astro → usa `shortDescription`
- [slug].astro → usa `description`

---

## Tareas de Implementación

- [x] 1. Crear `src/data/portfolio.ts` con array centralizado
- [x] 2. Importar en Portfolio.astro - usar `shortDescription`
- [x] 3. Importar en [slug].astro - usar `description` (larga)
- [x] 4. Verificar build

---

## Estados

✅ COMPLETADO - Implementado y verificado