/* ------------------------------------------------------------------
   app.js – Arbeitsplatz-Gerüst: Fallliste, Kerninfo, Kartenreiter.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var faelle = window.FAELLE || [];
  var aktuell = 0;

  function el(id) { return document.getElementById(id); }
  function text(knoten, wert) { knoten.textContent = wert; }

  /* ---------- Fallliste ------------------------------------------- */

  function listeZeichnen() {
    var koerper = el("fallliste-koerper");
    koerper.innerHTML = "";

    faelle.forEach(function (fall, i) {
      var tr = document.createElement("tr");
      tr.setAttribute("aria-selected", i === aktuell ? "true" : "false");
      tr.tabIndex = 0;
      [fall.ta, fall.geboren, fall.nachname, fall.vorname].forEach(function (wert) {
        var td = document.createElement("td");
        td.textContent = wert;
        tr.appendChild(td);
      });
      tr.addEventListener("click", function () { auswaehlen(i); });
      tr.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); auswaehlen(i); }
      });
      koerper.appendChild(tr);
    });
  }

  function auswaehlen(i, stumm) {
    if (i === aktuell) { return; }
    aktuell = i;
    listeZeichnen();
    kerninfoZeichnen();
    if (!stumm) {
      document.dispatchEvent(new CustomEvent("fall:gewechselt", { detail: faelle[aktuell] }));
    }
  }

  /* ---------- Kerninfo -------------------------------------------- */

  function kerninfoZeichnen() {
    var f = faelle[aktuell];
    if (!f) { return; }

    var warnungen = el("ki-kennzeichen");
    warnungen.innerHTML = "";
    if (!f.kennzeichen.length) {
      var leer = document.createElement("div");
      leer.className = "notiz";
      leer.style.margin = "0";
      leer.textContent = "keine Kennzeichen erfasst";
      warnungen.appendChild(leer);
    } else {
      f.kennzeichen.forEach(function (k) {
        var z = document.createElement("div");
        z.className = "kerninfo__warnung";
        z.appendChild(document.createTextNode(k));
        warnungen.appendChild(z);
      });
    }

    text(el("ki-fallnummer"), f.fallnummer + " (" + f.station + ")");
    text(el("ki-geburtsdatum"), f.geboren);
    text(el("ki-angehoerige"), f.angehoerige);
    text(el("ki-telefon"), f.telefon);

    text(el("ki-fallnr"), f.fallnummer);
    text(el("ki-fallart"), f.fallart);
    text(el("ki-zimmer"), f.station + ", " + f.zimmer);
    text(el("ki-beginn"), f.beginn);
    text(el("ki-ende"), f.ende || "()");

    if (window.Skizze) { window.Skizze.neu(); }
  }

  /* ---------- Kartenreiter ---------------------------------------- */

  function reiterVerdrahten() {
    var reiter = Array.prototype.slice.call(document.querySelectorAll(".reiter-leiste--arbeitsplatz .reiter"));

    reiter.forEach(function (knopf) {
      knopf.addEventListener("click", function () {
        reiter.forEach(function (r) {
          r.setAttribute("aria-selected", String(r === knopf));
          r.removeAttribute("data-skizze-kraeftig");
        });
        knopf.setAttribute("data-skizze-kraeftig", "");

        var ziel = knopf.dataset.reiter;
        document.querySelectorAll("[data-reiterinhalt]").forEach(function (bereich) {
          bereich.hidden = bereich.dataset.reiterinhalt !== ziel;
        });
        if (window.Skizze) { window.Skizze.neu(); }
      });
    });
  }

  /* ---------- Start ------------------------------------------------ */

  function start() {
    var titel = el("objektliste-titel");
    if (titel) { titel.textContent = "Fälle (" + faelle.length + "): Neurologie Komplex"; }
    listeZeichnen();
    kerninfoZeichnen();
    reiterVerdrahten();
    if (window.Skizze) { window.Skizze.neu(); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
