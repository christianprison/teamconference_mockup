/* ------------------------------------------------------------------
   sketch.js – zeichnet Rahmen, Linien und Kreise im Bleistift-Look.
   Grundlage: Rough.js (MIT), lokal unter assets/vendor/rough.js.

   Verwendung im HTML:
     <div data-skizze>…</div>                 Rahmen
     <div data-skizze="gestrichelt">…</div>   gestrichelter Rahmen (offen)
     <span data-skizze="linie">…</span>       Unterstrich
     <span data-skizze="kreis"></span>        Kreis (Optionsfeld)
     <div data-skizze="schraffur">…</div>     Rahmen mit Schraffur (aktiv)
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var GRAPHIT       = "#3a3733";
  var GRAPHIT_HELL  = "#a9a29a";
  var saat          = 0;

  if (!window.rough) { return; }              // ohne Rough.js: CSS-Fallback
  document.documentElement.classList.add("hat-skizze");

  function grundOptionen(el, art) {
    var stil = getComputedStyle(el);
    var stark = el.hasAttribute("data-skizze-kraeftig");
    return {
      stroke: art === "gestrichelt" ? GRAPHIT_HELL : (stil.getPropertyValue("--strich").trim() || GRAPHIT),
      strokeWidth: stark ? 2.1 : 1.25,
      roughness: 1.35,
      bowing: 1.4,
      seed: Number(el.dataset.saat)
    };
  }

  function zeichne(el) {
    var art = el.getAttribute("data-skizze") || "kasten";

    if (!el.dataset.saat) { el.dataset.saat = String((saat += 37) % 9973 + 1); }
    if (getComputedStyle(el).position === "static") { el.style.position = "relative"; }

    var alt = el.querySelector(":scope > svg.skizze-ebene");
    if (alt) { alt.remove(); }

    var b = el.offsetWidth;
    var h = el.offsetHeight;
    if (!b || !h) { return; }

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "skizze-ebene");
    svg.setAttribute("width", b);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", "0 0 " + b + " " + h);

    var rc  = window.rough.svg(svg);
    var opt = grundOptionen(el, art);
    var knoten;

    if (art === "linie") {
      knoten = rc.line(1, h - 2, b - 1, h - 2, opt);
    } else if (art === "kreis") {
      knoten = rc.ellipse(b / 2, h / 2, b - 3, h - 3, opt);
    } else if (art === "gestrichelt") {
      knoten = rc.rectangle(2, 2, b - 4, h - 4, Object.assign({}, opt, {
        strokeLineDash: [7, 5]
      }));
    } else if (art === "schraffur") {
      knoten = rc.rectangle(2, 2, b - 4, h - 4, Object.assign({}, opt, {
        fill: GRAPHIT_HELL, fillStyle: "hachure", fillWeight: 0.6, hachureGap: 5
      }));
    } else if (art === "reiter") {                 // oben offener „Karteireiter“
      var d = "M2," + (h - 1) + " L2,4 L" + (b - 2) + ",4 L" + (b - 2) + "," + (h - 1);
      knoten = rc.path(d, opt);
    } else {
      knoten = rc.rectangle(2, 2, b - 4, h - 4, opt);
    }

    svg.appendChild(knoten);
    el.insertBefore(svg, el.firstChild);
  }

  function alleZeichnen(wurzel) {
    (wurzel || document).querySelectorAll("[data-skizze]").forEach(zeichne);
  }

  var timer;
  function verzoegertNeuZeichnen() {
    clearTimeout(timer);
    timer = setTimeout(function () { alleZeichnen(); }, 120);
  }

  window.Skizze = { zeichnen: alleZeichnen, neu: verzoegertNeuZeichnen };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { alleZeichnen(); });
  } else {
    alleZeichnen();
  }

  // Schriften kommen später an -> Größen ändern sich
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { alleZeichnen(); });
  }

  var letzteBreite = window.innerWidth;
  window.addEventListener("resize", function () {
    if (window.innerWidth !== letzteBreite) { letzteBreite = window.innerWidth; verzoegertNeuZeichnen(); }
  });
})();
