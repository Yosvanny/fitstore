# Bitácora de uso de IA - FitStore

Registro de los prompts utilizados con IA durante el desarrollo del proyecto,
y de las decisiones tomadas sobre las respuestas obtenidas.

**Herramienta utilizada:** Claude (Anthropic)

---

## Prompt 1: Planificación del proyecto

- **Fecha:** 01/10/2026
- **Fase:** Planificación
- **Prompt (resumen):** Solicité dividir el proyecto FitStore en 11 fases, proponer
  los modelos de datos (Usuario, Producto, Categoría, Carrito, DetalleCarrito,
  Pedido, DetallePedido), sus relaciones, una estructura de carpetas y las
  primeras 3 vistas, sin generar código.
- **Resultado:** Plan por fases, tablas de modelos, diagrama de relaciones,
  estructura de carpetas y propuesta de vistas iniciales (Inicio, Detalle de
  producto y Carrito).
- **Decisión:** Aceptado.
- **Justificación:** [Explica con tus palabras por qué el plan te sirve.]

---

## Prompt 2: Creación del proyecto

- **Fecha:** 01/10/2026
- **Fase:** 1 - Configuración inicial
- **Prompt (resumen):** Pedí los pasos para verificar Node.js e Ionic CLI, crear
  el proyecto, ejecutarlo y comprobar que funciona.
- **Resultado:** Comandos de verificación, `ionic start fitstore blank --type=angular`
  y uso de `ionic serve`.
- **Decisión:** Modificado.
- **Justificación:** Al ejecutar `ionic serve` apareció el error
  "ionic serve can only be run in an Ionic project directory". Las preguntas
  interactivas de la creación no funcionaban bien en Git Bash, así que se
  ajustó el comando a:
  `ionic start fitstore blank --type=angular-standalone --no-interactive`.
  También se descartó la sugerencia de la terminal de usar `ionic init`,
  porque sirve para proyectos que no fueron creados con Ionic.

---

## Prompt 3: Configuración de Git y GitHub

- **Fecha:** 01/10/2026
- **Fase:** 1 - Configuración inicial
- **Prompt (resumen):** Pedí los pasos para inicializar Git, hacer el primer
  commit, crear el repositorio en GitHub y hacer el primer push, además de
  revisar el `.gitignore`.
- **Resultado:** Explicación de cada comando de Git y revisión del `.gitignore`.
- **Decisión:** Modificado.
- **Justificación:** No fue necesario ejecutar `git init` ni el primer commit,
  porque `ionic start` ya los había hecho. Se agregó `.env` al `.gitignore`.
  La advertencia "LF will be replaced by CRLF" se identificó como normal en Windows.

---

## Prompt 4: README y documentación

- **Fecha:** 01/10/2026
- **Fase:** 1 - Configuración inicial
- **Prompt (resumen):** Pedí ayuda para crear la carpeta `docs/`, la bitácora
  y el `README.md` inicial.
- **Resultado:** Estructura de documentación y plantillas.
- **Decisión:** [Aceptado / Modificado / Descartado]
- **Justificación:** [Indica qué cambiaste de la plantilla y por qué.]
