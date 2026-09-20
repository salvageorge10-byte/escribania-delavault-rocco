# Escribanía Delavault — Rocco · «Protocolo»

Rediseño completo del sitio. Reemplaza a
`delavault-rocco-editorial.salvadorgeorgedelava.chatgpt.site`.

Sitio estático. Se abre directo con `index.html`, sin build ni dependencias.
Para verlo servido:

```bash
python -m http.server 5173
# http://127.0.0.1:5173
```

---

## Dirección visual

**Una sola idea: la página está compuesta como un protocolo notarial encuadernado.**

- Ocho **folios** numerados en romanos, con el número al margen izquierdo.
- **Filetes finos** en lugar de cajas: casi no hay cards en el sitio.
- La **paleta salió de los materiales reales de la escribanía**, no de una
  paleta genérica de estudio jurídico: el pergamino y el granate de los lomos
  de sus propios protocolos, la tinta de su sello, el bronce del cuño.

| Token | Hex | De dónde sale |
|---|---|---|
| `--vellum` | `#F3EEE4` | pergamino de los lomos |
| `--vellum-2` | `#EAE3D5` | papel de protocolo, fondo de folios pares |
| `--tinta` | `#14130F` | negro del sello sobre papel |
| `--borgona` | `#6B1E22` | granate de las tapas de los protocolos |
| `--laton` / `--laton-claro` | `#9A7B41` / `#C2A268` | cuño de bronce y letras doradas |

**Tipografía**

- **Spectral** (Production Type) — display, peso 300 con su itálica propia.
  Un serif diseñado para *documento en pantalla*: encaja con la idea de
  protocolo y evita tanto los sospechosos de siempre (Playfair, Cormorant)
  como los display que hoy se repiten en toda web generada por IA.
- **Archivo** (Omnibus-Type, fundición de Buenos Aires) — texto, rótulos e
  interfaz. Elegida a propósito: tipografía argentina para una escribanía
  argentina.

Todos los titulares llevan el salto de línea decidido a mano (`<br>`), con
`text-wrap: pretty` para que el balanceo automático no los vuelva a partir
donde no corresponde.

---

## Estructura

| Folio | Sección | Composición |
|---|---|---|
| — | Portada | foto a sangre + titular bajo a la izquierda, registro 456 como nota al margen, índice del protocolo al pie |
| I | La escribanía | texto a la izquierda, protocolos reales a sangre a la derecha, el sello montado como muestra de papel |
| II | Actos notariales | lista de seis actos; en escritorio la lámina de la derecha cambia al recorrer la lista, en mobile cada acto muestra su propia fotografía |
| III | Compraventa | fotografía a sangre que se funde con el fondo; texto montado encima |
| IV | Las escribanas | fotografía corrida al margen derecho, los dos nombres en display con sus iniciales grabadas |
| V | Cómo trabajamos | cuatro pasos como marginalia, dos fotografías desfasadas |
| VI | La Plata | panorámica a sangre con la dirección y el Museo montados encima |
| VII | Preguntas | cuatro preguntas, dos detalles arquitectónicos |
| VIII | Consulta | cierre grande con todos los datos de contacto |

Se reordenó respecto del sitio anterior: **institución → actos → compraventa →
quiénes → cómo → dónde → dudas → contacto**. La compraventa subió cerca del
inicio porque es el acto que más consultas genera, y se eliminaron los bloques
que explicaban dos veces lo mismo (institución / registro / protocolo / principios
pasaron a ser un solo folio).

**Texto:** ~60 % menos que el sitio anterior. Máximo un párrafo corto por bloque.

---

## Contenido

Todos los datos son los reales de la escribanía. **No hay nada inventado:** ni
testimonios, ni métricas, ni años de trayectoria, ni precios, ni retratos de las
escribanas (no hay fotos reales de ellas, así que la sección se resuelve con
tipografía en vez de con stock).

- Registro N.º 456 · Distrito Notarial de La Plata
- Magalí E. Delavault (Notaria Titular) · Florencia Rocco (Notaria Adscripta)
- Calle 48 N.º 845, Piso 3.º Of. B — La Plata, Buenos Aires
- WhatsApp +54 9 221 568-1943 · Tel. (0221) 527-3469
- escribania.delavault.rocco@hotmail.com
- Lunes a viernes, 8 a 17 h, con turno previo

---

## Fotografía

**21 imágenes, todas distintas, ninguna repetida entre secciones.** Ninguna
generada por IA.

Se descartaron las imágenes stock del sitio anterior (manos sosteniendo una casita
de juguete, alguien escribiendo en un anotador). Las que quedaron:

- **Propias de la escribanía:** su sello con el Registro 456 y sus protocolos
  encuadernados.
- **La Plata (Wikimedia Commons):** interior y fachada del Pasaje Dardo Rocha,
  pórtico del Museo de La Plata.
- **Material notarial y arquitectura (Unsplash):** lacre, firmas al pie, cuño
  sobre texto legal, manuscrito antiguo, fichero de consulta, libro de registro,
  llaves en la cerradura, escalera de piedra, capitel jónico, interior de estudio.

Todas las fotos llevan epígrafe. Todas recortadas y viradas hacia la paleta,
exportadas a WebP: **2,3 MB el set completo.**

---

## Los dos controles finales

**1 · Anti-plantilla.** Si se cambia el logo, el color y los textos, ¿sirve para
otro rubro? No:

- La paleta está muestreada de los protocolos y el sello de *esta* escribanía.
- La numeración por folios en romanos al margen replica un protocolo notarial:
  en una inmobiliaria o un restaurante no significa nada.
- El 456 funciona como marca gráfica recurrente (nota al margen en la portada,
  rótulo de la cabecera, cierre del colofón).
- El anclaje geográfico es el Pasaje Dardo Rocha y el Museo de La Plata, no
  arquitectura genérica.
- Los seis actos no son íconos: son seis fotografías de material notarial real.

**2 · Referencia.** Ninguna sección quedó por debajo del resto. La más floja era
el FAQ; se redujo de cinco preguntas a cuatro y se le sumó el par de detalles
arquitectónicos para cerrar la composición.

---

## Técnico

- HTML + CSS + JS sin dependencias ni build. 1 archivo CSS, 1 archivo JS.
- Grilla de 12 columnas con margen de folio; composiciones asimétricas en cada
  sección.
- **Sin animaciones de scroll.** Sólo hover, foco, cambio de lámina en los actos
  y el acordeón. Respeta `prefers-reduced-motion`.
- Contraste verificado: **todo el texto pasa WCAG AA** (mínimo medido 4,75:1).
- Sin desbordes horizontales en 390 / 834 / 1440 px.
- Sin errores de consola. Todas las imágenes con `alt`, `width` y `height`.
- Datos estructurados `schema.org/Notary`.
