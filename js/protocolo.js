/* ═══════════════════════════════════════════════════════════════════
   ESCRIBANÍA DELAVAULT — ROCCO · interacciones
   Sólo lo indispensable: cabecera, menú, y el visor de actos, que
   funciona como acordeón en mobile y como selector con foto a la
   derecha en escritorio. Sin animaciones de scroll.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var ESCRITORIO = window.matchMedia('(min-width: 1024px)');

  /* ── Cabecera: pasa de transparente a papel al salir de la portada ── */
  var cabecera = document.querySelector('[data-cabecera]');
  var portada = document.getElementById('portada');

  if (cabecera && portada && 'IntersectionObserver' in window) {
    var centinela = new IntersectionObserver(function (entradas) {
      cabecera.classList.toggle('es-fija', !entradas[0].isIntersecting);
    }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 });
    centinela.observe(portada);
  } else if (cabecera) {
    cabecera.classList.add('es-fija');
  }

  /* ── Menú móvil ─────────────────────────────────────────────────── */
  var menu = document.querySelector('[data-menu]');
  var abrir = document.querySelector('[data-abrir]');
  var cerrar = document.querySelector('[data-cerrar]');

  function alternarMenu(mostrar) {
    if (!menu || !abrir) return;
    menu.hidden = !mostrar;
    abrir.setAttribute('aria-expanded', String(mostrar));
    document.body.style.overflow = mostrar ? 'hidden' : '';
    if (mostrar) {
      var primero = menu.querySelector('a');
      if (primero) primero.focus({ preventScroll: true });
    } else {
      abrir.focus({ preventScroll: true });
    }
  }

  if (abrir) abrir.addEventListener('click', function () { alternarMenu(true); });
  if (cerrar) cerrar.addEventListener('click', function () { alternarMenu(false); });
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) alternarMenu(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && !menu.hidden) alternarMenu(false);
  });
  ESCRITORIO.addEventListener('change', function (e) {
    if (e.matches && menu && !menu.hidden) alternarMenu(false);
  });

  /* ── Visor de actos notariales ──────────────────────────────────── */
  var contenedor = document.querySelector('[data-actos]');
  if (!contenedor) return;

  var actos = Array.prototype.slice.call(contenedor.querySelectorAll('[data-acto]'));
  if (!actos.length) return;

  /* Acordeón (mobile / tablet): uno abierto por vez. La animación la
     resuelve el CSS con grid-template-rows, así que acá sólo hay estado. */
  function abrirAcordeon(acto) {
    var boton = acto.querySelector('.acto__btn');
    acto.setAttribute('data-abierto', '');
    if (boton) boton.setAttribute('aria-expanded', 'true');
  }

  function cerrarAcordeon(acto) {
    var boton = acto.querySelector('.acto__btn');
    acto.removeAttribute('data-abierto');
    if (boton) boton.setAttribute('aria-expanded', 'false');
  }

  /* Selector (escritorio): la foto de la derecha acompaña al acto activo. */
  function activar(acto) {
    actos.forEach(function (otro) {
      if (otro === acto) otro.setAttribute('data-activo', '');
      else otro.removeAttribute('data-activo');
    });
  }

  function limpiarEstados() {
    actos.forEach(function (acto) {
      var boton = acto.querySelector('.acto__btn');
      acto.removeAttribute('data-abierto');
      acto.removeAttribute('data-activo');
      if (boton) boton.setAttribute('aria-expanded', 'false');
    });
  }

  function montar() {
    limpiarEstados();

    if (ESCRITORIO.matches) {
      /* En escritorio el detalle siempre está visible para el acto activo,
         así que el botón no anuncia un estado plegable. */
      activar(actos[0]);
      actos.forEach(function (acto) {
        var boton = acto.querySelector('.acto__btn');
        if (boton) boton.removeAttribute('aria-expanded');
      });
    } else {
      abrirAcordeon(actos[0]);
    }
  }

  actos.forEach(function (acto) {
    var boton = acto.querySelector('.acto__btn');
    if (!boton) return;

    boton.addEventListener('click', function () {
      if (ESCRITORIO.matches) {
        activar(acto);
      } else if (acto.hasAttribute('data-abierto')) {
        cerrarAcordeon(acto);
      } else {
        actos.forEach(cerrarAcordeon);
        abrirAcordeon(acto);
      }
    });

    /* En escritorio basta con recorrer la lista: no hace falta hacer clic. */
    boton.addEventListener('mouseenter', function () {
      if (ESCRITORIO.matches) activar(acto);
    });
    boton.addEventListener('focus', function () {
      if (ESCRITORIO.matches) activar(acto);
    });
  });

  ESCRITORIO.addEventListener('change', montar);
  montar();

  /* ── Año del colofón ────────────────────────────────────────────── */
  var anio = document.querySelector('[data-anio]');
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
