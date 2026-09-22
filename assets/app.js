/* ------------------------------------------------------------------
   app.js – Arbeitsplatz-Gerüst: Fallliste, Kerninfo, Kartenreiter.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var faelle = window.FAELLE || [];
  var aktuell = 0;

  function t(s, w) { return window.I18N ? window.I18N.t(s, w) : s; }
  function tx(w)   { return window.I18N ? window.I18N.tx(w) : w; }
  function dat(w)  { return window.I18N ? window.I18N.datum(w) : w; }

  function el(id) { return document.getElementById(id); }
  function text(knoten, wert) { if (knoten) { knoten.textContent = wert; } }

  /* ---------- Fallliste ------------------------------------------- */

  function listeZeichnen() {
    var koerper = el("fallliste-koerper");
    koerper.innerHTML = "";

    faelle.forEach(function (fall, i) {
      var tr = document.createElement("tr");
      tr.setAttribute("aria-selected", i === aktuell ? "true" : "false");
      tr.tabIndex = 0;
      [fall.ta, dat(fall.geboren), fall.nachname, fall.vorname].forEach(function (wert) {
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

  function auswaehlen(i) {
    if (i === aktuell) { return; }
    aktuell = i;
    listeZeichnen();
    kerninfoZeichnen();
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
      leer.textContent = t("kerninfo.keineKennzeichen");
      warnungen.appendChild(leer);
    } else {
      f.kennzeichen.forEach(function (k) {
        var z = document.createElement("div");
        z.className = "kerninfo__warnung";
        z.appendChild(document.createTextNode(tx(k)));
        warnungen.appendChild(z);
      });
    }

    text(el("ki-fallnummer"), f.fallnummer + " (" + tx(f.station) + ")");
    text(el("ki-geburtsdatum"), dat(f.geboren));
    text(el("ki-angehoerige"), tx(f.angehoerige));
    text(el("ki-telefon"), tx(f.telefon));

    text(el("ki-fallnr"), f.fallnummer);
    text(el("ki-fallart"), tx(f.fallart));
    text(el("ki-zimmer"), tx(f.station) + ", " + f.zimmer);
    text(el("ki-beginn"), dat(f.beginn));
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

  /* ---------- Beschriftungen, die Werte einsetzen ------------------ */

  function beschriftungenZeichnen() {
    text(el("objektliste-titel"), t("liste.titel", { n: faelle.length }));

    document.querySelectorAll("[data-platzhalter-reiter]").forEach(function (knoten) {
      knoten.textContent = t("platzhalter.reiter", { name: t(knoten.dataset.platzhalterReiter) });
    });
  }

  /* ---------- Start ------------------------------------------------ */

  function start() {
    beschriftungenZeichnen();
    listeZeichnen();
    kerninfoZeichnen();
    reiterVerdrahten();
    if (window.Skizze) { window.Skizze.neu(); }
  }

  document.addEventListener("sprache:gewechselt", function () {
    beschriftungenZeichnen();
    listeZeichnen();
    kerninfoZeichnen();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
