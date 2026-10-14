<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Instalar VgoOffice

[Versiones](https://github.com/vgo1012/VgoOffice/releases) — Utiliza un instalador adjunto a una versión. Esta página no implica que ya se haya publicado un binario en GitHub. Las compilaciones locales no están firmadas si no se proporcionan credenciales de firma.

## Antes de instalar

Esta edición se ha probado en Windows x64. Se mantienen los destinos de código para macOS y Linux, pero esta edición no se ha validado en esas plataformas. Elige un paquete solo si su versión admite expresamente tu sistema operativo.

## Instalar e iniciar

1. Guarda los documentos abiertos y cierra la versión anterior antes de actualizar.
2. Ejecuta el instalador .exe de Windows y completa la instalación.
3. Inicia VgoOffice desde el acceso directo del escritorio o del menú Inicio.

El instalador almacena los recursos una sola vez, evitando descomprimir un ejecutable portátil en cada inicio. Copiar solo VgoOffice.exe omite recursos necesarios de los editores.

## Actualizaciones y preferencias

Las actualizaciones conservan la identidad de instalación y la carpeta de configuración de Eoffice. Que una carpeta siga llamándose Eoffice es normal por compatibilidad. En Ajustes → General, elige tema claro, oscuro o del sistema; el fondo predeterminado es azul grisáceo claro. Los colores de los documentos se controlan por separado.

## Tu versión y el proyecto

Ajustes → Acerca de muestra la versión instalada y enlaza al proyecto VgoOffice. Dale una Star si te resulta útil. La disponibilidad de actualizaciones depende de la configuración de compilación; consulta las versiones del proyecto si no se pueden actualizar desde la aplicación.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Línea de comandos e IA

El comando compatible sigue siendo genoffice. Ajustes → Integraciones muestra su ruta de instalación y configuración. Ejecuta el comando siguiente con esa ruta o después de añadir la CLI a PATH.

```sh
genoffice --version
```

Se ha eliminado el inicio de sesión de la cuenta de la aplicación. Configura tu API de modelos, un endpoint compatible con OpenAI o un Codex CLI instalado. La autenticación externa y las tarifas siguen siendo independientes; la edición local no necesita una cuenta de VgoOffice.

[Ajustes de integración](help://settings-integrations) · [Modelos de IA](help://ai-models)
