# Escribanía Delavault — Rocco · «Protocolo»

Sitio estático. Se abre directo con `index.html`, sin build ni dependencias.
Para verlo servido:

```bash
python -m http.server 5173
# http://127.0.0.1:5173
```

En producción: **https://escribania-delavault-rocco.vercel.app**

---

## Dirección visual

**La página está compuesta como un protocolo notarial encuadernado.**
La paleta no salió de un catálogo de estudios jurídicos: está muestreada de los
materiales reales de la escribanía —el pergamino y el granate de los lomos de sus
propios protocolos, la tinta de su sello, el bronce del cuño.

| Token | Hex | De dónde sale |
|---|---|---|
| `--vellum` | `#F3EEE4` | pergamino de los lomos |
| `--vellum-2` | `#EAE3D5` | papel de protocolo |
| `--tinta` | `#14130F` | negro del sello sobre papel |
| `--borgona` | `#6B1E22` | granate de las tapas |
| `--laton` / `--laton-claro` | `#765B2C` / `#C2A268` | cuño de bronce y letras doradas |

**Tipografía**

- **Spectral** (Production Type) — display, peso 300 con su itálica propia. Un
  serif diseñado para *documento en pantalla*. Evita tanto los sospechosos de
  siempre (Playfair, Cormorant) como los display que hoy se repiten en toda web
  generada por IA.
- **Archivo** (Omnibus-Type, fundición de Buenos Aires) — texto, rótulos e
  interfaz. Elegida a propósito: tipografía argentina para una escribanía
  argentina.

Todos los titulares llevan el salto de línea decidido a mano (`<br>`), con
`text-wrap: pretty` para que el balanceo automático no los vuelva a partir donde
no corresponde.

---

## Las tres decisiones de composición

**1 · Una columna vertebral.** Cada folio abre con un filete a ancho completo que
integra el romano, el nombre del folio y una nota al margen derecho
(`I — LA ESCRIBANÍA … REGISTRO 456`). Es lo único que cruza la página entera, y
por eso es lo que la ordena. Reemplazó a los dos sistemas que convivían antes: un
romano suelto flotando en el margen y un rótulo con cuadradito.

**2 · Contraste de escala.** Cada folio tiene un solo elemento dominante y el
resto acompaña. Antes todas las fotos eran medianas y estaban estacionadas a la
derecha, así que el ojo nunca encontraba ritmo.

| Folio | Dominante | Acompaña |
|---|---|---|
| I · La escribanía | fotografía de los protocolos, a sangre a la derecha | texto, ficha de datos, el sello como muestra de papel montada encima |
| II · Actos notariales | la lámina, que ocupa media página y cambia al recorrer la lista | los seis actos como lista tipográfica |
| III · Compraventa | banda a sangre que se funde con el fondo | texto montado sobre el degradado, secuencia de cuatro pasos |
| IV · Las escribanas | **la tipografía**: los dos nombres a escala de display | cargos, iniciales grabadas, nota de matrícula |
| V · Cómo trabajamos | fotografía del escritorio, alta y a sangre | cuatro pasos como marginalia, pluma como nota al pie |
| VI · La Plata | panorámica del Pasaje Dardo Rocha | dirección y Museo montados encima |
| VII · Preguntas | la lista de preguntas | portón de acceso, vertical |
| VIII · Consulta | banda de cierre a sangre | statement y datos de contacto en dos columnas |

**3 · Tres movimientos de fondo, no un damero.** Pergamino para los folios de
enunciado, pergamino tostado para los de secuencia, tinta para los de peso.
Compraventa y escribanas comparten **un único bloque oscuro continuo**: así la
sección de las escribanas hereda el peso de la anterior en vez de ser otra franja
más. Se pasó de ocho alternancias de fondo a cuatro, y cada una significa algo.

**Cadencia de espaciado.** Escala base 4 (`--e1`…`--e10`) y tres alturas de folio:
`--folio-y-l` para el que abre un movimiento, `--folio-y` normal, `--folio-y-s`
para el que continúa una secuencia.

---

## Mobile (375–430 px)

No es el escritorio apilado:

- Las láminas de los seis actos van **a sangre**, de borde a borde: la lista se
  recorre como una secuencia de imágenes, no como una pila de tarjetas.
- La columna vertebral de folios se mantiene, con la nota al margen oculta.
- Los nombres de las escribanas ocupan el ancho completo, con filete horizontal.
- La secuencia de compraventa pasa de grilla a lista.
- Las fichas de contacto abandonan las dos columnas y apilan rótulo sobre dato.
- Blanco táctil mínimo de 44 px en los controles.

---

## Contenido

Todos los datos son los reales de la escribanía. **No hay nada inventado:** ni
testimonios, ni métricas, ni años de trayectoria, ni precios, ni retratos de las
escribanas —no existen fotos reales de ellas, así que esa sección se resuelve con
tipografía en vez de con stock.

- Registro N.º 456 · Distrito Notarial de La Plata
- Magalí E. Delavault (Notaria Titular) · Florencia Rocco (Notaria Adscripta)
- Calle 48 N.º 845, Piso 3.º Of. B — La Plata, Buenos Aires
- WhatsApp +54 9 221 568-1943 · Tel. (0221) 527-3469
- escribania.delavault.rocco@hotmail.com
- Lunes a viernes, 8 a 17 h, con turno previo

---

## Fotografía

**16 fotografías, todas distintas, ninguna repetida entre secciones y ninguna
generada por IA.** Todas llevan epígrafe, recortadas y viradas hacia la paleta,
en WebP: 2,0 MB el set completo.

- **Propias de la escribanía:** su sello con el Registro 456, sus protocolos
  encuadernados.
- **La Plata (Wikimedia Commons):** interior y esquina del Pasaje Dardo Rocha,
  pórtico del Museo de La Plata.
- **Material notarial y arquitectura (Unsplash):** lacre, firmas al pie, cuño
  sobre texto legal, manuscrito antiguo, legajos atados, llaves en la cerradura,
  escritorio con lámpara, pluma sobre papel, portón de acceso, nave abovedada.

Se descartaron por genéricas, ajenas o mal integradas: el fichero de madera
naranja (fuera de paleta), el libro de registro rotulado en inglés, la sala de
lectura que leía como club londinense, la fachada plana con cartelería, la
escalera anodina y el capitel suelto. La bóveda de galería salió porque quedaba
pegada a la nave del cierre y las dos se leían como la misma foto.

---

## Los dos controles finales

**1 · Anti-plantilla.** Si se cambia el logo, el color y los textos, ¿sirve para
otro rubro? No:

- La paleta está muestreada de los protocolos y el sello de *esta* escribanía.
- La foliación en romanos sobre filete replica un protocolo notarial: en una
  inmobiliaria o un restaurante no significa nada.
- El 456 funciona como marca gráfica recurrente: nota al margen en la portada,
  rótulo de cabecera, nota de folio, cierre del colofón.
- El anclaje geográfico es el Pasaje Dardo Rocha y el Museo de La Plata.
- Los seis actos no son íconos: son seis fotografías de material notarial real.

**2 · Referencia.** La sección más floja era la de las escribanas —un título, una
foto prestada y una tabla de dos nombres. Ahora es el folio de mayor peso
tipográfico de la página y no usa ninguna fotografía.

---

## Técnico

- HTML + CSS + JS sin dependencias ni build. Un archivo CSS, un archivo JS.
- Grilla de 12 columnas con medianil propio (`--calle`); composiciones
  asimétricas y filas declaradas a mano donde el orden del DOM lo pedía.
- **Sin animaciones de scroll.** Sólo hover, foco, cambio de lámina en los actos
  y el acordeón. Respeta `prefers-reduced-motion`.
- Contraste verificado en los 17 pares de texto/fondo del sitio: **todos pasan
  WCAG AA**, mínimo medido 4,75:1.
- Sin desbordes horizontales en 375 / 390 / 430 / 834 / 1440 px.
- Sin errores de consola. Todas las imágenes con `alt`, `width` y `height`.
- Datos estructurados `schema.org/Notary`.
