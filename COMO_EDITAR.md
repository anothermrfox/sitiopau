# Cómo editar el sitio de Paula

Todo el contenido que Paula puede modificar está dentro de la carpeta `contenido`.

No es necesario editar archivos HTML, Astro, CSS ni configuración.

## Cambiar una página

1. Abre la carpeta `contenido` en GitHub.
2. Entra al archivo que quieres cambiar, por ejemplo `servicios.md`.
3. Presiona el icono del lápiz.
4. Modifica el texto.
5. Guarda con el botón **Commit changes**.

Cloudflare publicará automáticamente la nueva versión.

## Formato básico

```md
# Título principal

Un párrafo normal.

## Título de una sección

### Título pequeño

- Un elemento de lista.
- Otro elemento.

[Texto de un enlace](https://ejemplo.com)

**Texto destacado**
```

No agregues encabezados técnicos entre líneas `---`. El sitio obtiene el título directamente del primer encabezado `#`.

## Crear un artículo

1. Entra a `contenido/ideas`.
2. Crea un archivo con el formato `AAAA-MM-DD-titulo-corto.md`.
3. Empieza el documento con un único título principal `#`.

Ejemplo: `2026-09-10-como-construir-confianza.md`.

La fecha y la dirección web se generan automáticamente a partir del nombre del archivo.
