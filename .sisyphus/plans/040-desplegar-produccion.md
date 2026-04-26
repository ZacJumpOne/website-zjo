# Plan: Desplegar sitio a producción

## Análisis
Generar la nueva build del sitioastro y copiarla al directorio de nginx en `/var/www/zerojumpone.com/dist`.

## Estado Actual
- **Directorio nginx**: `/var/www/zerojumpone.com/dist`
- **Directorio build local**: `dist/`
- **Último build**: Ya generado localmente

## Tareas de Implementación (para revisión del usuario)
- [ ] Generar build con `bun run build`
- [ ] Copiar contenido de `dist/` a `/var/www/zerojumpone.com/dist`
- [ ] Verificar que los archivos se copiaron correctamente

## Requisitos
- Permisos de root o acceso a `/var/www/zerojumpone.com`
- Servicio nginx debe reiniciarse después de copiar (si es necesario)

## Siguiente Paso
Confirmar para proceder con la implementación.

---
## Nota
Este plan requiere acceso al servidor de producción o permisos elevados.