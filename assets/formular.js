/* ------------------------------------------------------------------
   formular.js – Kartenreiter "Team Konferenz".

   Aufbau: Überschrift mit Konferenzdatum, Teilnehmende, allgemeines
   Freitextfeld, danach je Patient ein aufklappbarer Abschnitt mit der
   Tabelle Thema / Journaleinträge / Entscheidung. Mehrere Abschnitte
   können gleichzeitig offen sein; der Schieber "Kompakt" klappt alle zu. Das Formular ist bewusst unabhängig vom in der
   Objektliste gewählten Fall.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var K       = window.KONFERENZ;
  var faelle  = window.FAELLE || [];
  var SPEICHER = "teamkonferenz.entwurf";
  var offen   = new Set([0]);   /* Indizes der aufgeklappten Abschnitte */

  function t(k, w) { return window.I18N ? window.I18N.t(k, w) : k; }
  function tx(w)   { return window.I18N ? window.I18N.tx(w) : w; }
  function dat(w)  { return window.I18N ? window.I18N.datum(w) : w; }
  var stand   = laden();

  function laden() {
    try { return JSON.parse(localStorage.getItem(SPEICHER)) || {}; }
    catch (e) { return {}; }
  }

  function sichern() {
    try { localStorage.setItem(SPEICHER, JSON.stringify(stand)); } catch (e) { /* egal */ }
  }

  function neu(art, klasse, inhalt) {
    var k = document.createElement(art);
    if (klasse) { k.className = klasse; }
    if (inhalt !== undefined) { k.textContent = inhalt; }
    return k;
  }

  /* ---------- Kopfbereich ----------------------------------------- */

  function kopfbereich() {
    var bruch = document.createDocumentFragment();

    var titel = neu("h1", "konferenz__titel", t("konferenz.titel", { datum: dat(K.datum) }));
    bruch.appendChild(titel);

    var unter = neu("p", "notiz",
      t("konferenz.unterzeile", { zeit: K.beginn, ort: tx(K.ort), n: faelle.length }));
    bruch.appendChild(unter);

    /* Teilnehmende */
    var block = neu("section", "feldgruppe");
    block.setAttribute("data-skizze", "");
    block.appendChild(neu("div", "feldgruppe__titel", t("konferenz.teilnehmende")));

    var liste = neu("ul", "teilnehmer");
    K.teilnehmende.forEach(function (person) {
      var li = neu("li", "teilnehmer__eintrag");
      li.appendChild(neu("span", "teilnehmer__name", person.name));
      li.appendChild(neu("span", "teilnehmer__rolle", tx(person.rolle)));
      li.appendChild(neu("span", "teilnehmer__kuerzel", person.kuerzel));
      liste.appendChild(li);
    });
    block.appendChild(liste);
    bruch.appendChild(block);

    /* Allgemeines Freitextfeld */
    var allgemein = neu("section", "feldgruppe");
    allgemein.setAttribute("data-skizze", "");
    allgemein.appendChild(neu("div", "feldgruppe__titel", t("konferenz.allgemein")));
    allgemein.appendChild(neu("p", "notiz", t("konferenz.allgemeinHinweis")));

    var huelle = neu("span", "feld__box");
    huelle.setAttribute("data-skizze", "");
    var feld = neu("textarea", "textfeld");
    feld.placeholder = t("konferenz.allgemeinPlatzhalter");
    feld.value = stand.allgemein || "";
    feld.addEventListener("input", function () { stand.allgemein = feld.value; sichern(); });
    huelle.appendChild(feld);
    allgemein.appendChild(huelle);
    bruch.appendChild(allgemein);

    return bruch;
  }

  /* ---------- Patientenabschnitte ---------------------------------- */

  function entscheidungLesen(fall, thema) {
    return (stand[fall.fallnummer] && stand[fall.fallnummer][thema]) || "";
  }

  function entscheidungSchreiben(fall, thema, wert) {
    if (!stand[fall.fallnummer]) { stand[fall.fallnummer] = {}; }
    stand[fall.fallnummer][thema] = wert;
    sichern();
  }

  function zaehlerText(fall) {
    var erfasst = K.themen.filter(function (t) {
      return entscheidungLesen(fall, t.schluessel).trim() !== "";
    }).length;
    return t("patient.stand", { erfasst: erfasst, gesamt: K.themen.length });
  }

  function themenTabelle(fall) {
    var huelle = neu("div", "tabelle-huelle");
    huelle.setAttribute("data-skizze", "");

    var tabelle = neu("table", "themen");
    var kopf = neu("thead");
    var kopfzeile = neu("tr");
    ["tabelle.thema", "tabelle.journal", "tabelle.entscheidung"].forEach(function (b) {
      kopfzeile.appendChild(neu("th", null, t(b)));
    });
    kopf.appendChild(kopfzeile);
    tabelle.appendChild(kopf);

    var koerper = neu("tbody");

    K.themen.forEach(function (thema) {
      var zeile = neu("tr");

      var spalteThema = neu("td", "themen__thema");
      spalteThema.appendChild(neu("span", "themen__bezeichnung", tx(thema.bezeichnung)));
      zeile.appendChild(spalteThema);

      var eintraege = (fall.journal && fall.journal[thema.schluessel]) || [];
      var spalteJournal = neu("td", "themen__journal");
      if (!eintraege.length) {
        spalteJournal.appendChild(neu("p", "notiz", t("tabelle.keineEintraege")));
      }
      eintraege.forEach(function (e) {
        var eintrag = neu("div", "journal-eintrag");
        var zeileKopf = neu("div", "journal-eintrag__kopf");
        zeileKopf.appendChild(neu("span", "journal-eintrag__datum", dat(e.datum)));
        zeileKopf.appendChild(neu("span", "journal-eintrag__kuerzel", e.kuerzel));
        eintrag.appendChild(zeileKopf);
        eintrag.appendChild(neu("div", "journal-eintrag__text", tx(e.text)));
        spalteJournal.appendChild(eintrag);
      });
      zeile.appendChild(spalteJournal);

      var spalteEntscheidung = neu("td", "themen__entscheidung");
      var box = neu("span", "feld__box");
      box.setAttribute("data-skizze", "");
      var feld = neu("textarea", "textfeld textfeld--entscheidung");
      feld.placeholder = t("tabelle.entscheidungPlatzhalter");
      feld.value = entscheidungLesen(fall, thema.schluessel);
      feld.addEventListener("input", function () {
        entscheidungSchreiben(fall, thema.schluessel, feld.value);
        var anzeige = document.querySelector('[data-zaehler="' + fall.fallnummer + '"]');
        if (anzeige) { anzeige.textContent = zaehlerText(fall); }
      });
      box.appendChild(feld);
      spalteEntscheidung.appendChild(box);
      zeile.appendChild(spalteEntscheidung);

      koerper.appendChild(zeile);
    });

    tabelle.appendChild(koerper);
    huelle.appendChild(tabelle);
    return huelle;
  }

  function patientAbschnitt(fall, i) {
    var abschnitt = neu("section", "patient");
    abschnitt.dataset.fall = fall.fallnummer;

    var kopf = neu("button", "patient__kopf");
    kopf.type = "button";
    kopf.setAttribute("data-skizze", "");
    kopf.setAttribute("aria-expanded", String(offen.has(i)));

    kopf.appendChild(neu("span", "patient__pfeil", offen.has(i) ? "▾" : "▸"));
    kopf.appendChild(neu("span", "patient__name", fall.nachname + ", " + fall.vorname));
    kopf.appendChild(neu("span", "patient__meta",
      t("patient.fallnr", { nr: fall.fallnummer, geb: dat(fall.geboren), zimmer: fall.zimmer })));

    var zaehler = neu("span", "patient__stand merker", zaehlerText(fall));
    zaehler.setAttribute("data-zaehler", fall.fallnummer);
    zaehler.setAttribute("data-skizze", "gestrichelt");
    kopf.appendChild(zaehler);

    kopf.addEventListener("click", function () { umschalten(i); });
    abschnitt.appendChild(kopf);

    var inhalt = neu("div", "patient__inhalt");
    inhalt.hidden = !offen.has(i);
    inhalt.appendChild(themenTabelle(fall));
    abschnitt.appendChild(inhalt);

    return abschnitt;
  }

  /* ---------- Auf- und Zuklappen ----------------------------------- */

  function umschalten(i) {
    if (offen.has(i)) { offen.delete(i); } else { offen.add(i); }
    abschnitteAktualisieren();
  }

  function alleZuklappen(zu) {
    offen = zu ? new Set() : new Set(faelle.map(function (_, i) { return i; }));
    abschnitteAktualisieren();
  }

  function abschnitteAktualisieren() {
    document.querySelectorAll(".patient").forEach(function (abschnitt, nr) {
      var auf = offen.has(nr);
      abschnitt.querySelector(".patient__kopf").setAttribute("aria-expanded", String(auf));
      abschnitt.querySelector(".patient__pfeil").textContent = auf ? "▾" : "▸";
      abschnitt.querySelector(".patient__inhalt").hidden = !auf;
    });

    var schalter = document.querySelector(".schieber__eingabe");
    if (schalter) { schalter.checked = offen.size === 0; }

    if (window.Skizze) { window.Skizze.neu(); }
  }

  /* ---------- Schieber "Kompakt" ------------------------------------ */

  function kompaktSchieber() {
    var zeile = neu("div", "werkzeugzeile");

    var schieber = neu("label", "schieber");
    schieber.appendChild(neu("span", "schieber__text", t("konferenz.kompakt")));

    var eingabe = document.createElement("input");
    eingabe.type = "checkbox";
    eingabe.className = "schieber__eingabe";
    eingabe.checked = offen.size === 0;
    eingabe.addEventListener("change", function () { alleZuklappen(eingabe.checked); });
    schieber.appendChild(eingabe);

    var spur = neu("span", "schieber__spur");
    spur.setAttribute("data-skizze", "");
    spur.appendChild(neu("span", "schieber__knebel"));
    schieber.appendChild(spur);

    zeile.appendChild(schieber);
    return zeile;
  }

  /* ---------- Aufbau ----------------------------------------------- */

  function aufbauen() {
    var ziel = document.querySelector('[data-reiterinhalt="teamkonferenz"]');
    if (!ziel) { return; }
    ziel.innerHTML = "";
    ziel.appendChild(kopfbereich());

    ziel.appendChild(kompaktSchieber());

    var patienten = neu("div", "patientenliste");
    faelle.forEach(function (fall, i) { patienten.appendChild(patientAbschnitt(fall, i)); });
    ziel.appendChild(patienten);

    var zeile = neu("div", "knopf-zeile");
    var speichern = neu("button", "knopf knopf--haupt", t("knopf.speichern"));
    speichern.type = "button";
    speichern.setAttribute("data-skizze", "");
    speichern.setAttribute("data-skizze-kraeftig", "");
    var zwischen = neu("button", "knopf", t("knopf.zwischenspeichern"));
    zwischen.type = "button";
    zwischen.setAttribute("data-skizze", "");
    var abbrechen = neu("button", "knopf knopf--still", t("knopf.abbrechen"));
    abbrechen.type = "button";
    abbrechen.setAttribute("data-skizze", "gestrichelt");
    var rechts = neu("span", "knopf-zeile__rechts");
    rechts.appendChild(abbrechen);
    zeile.appendChild(speichern);
    zeile.appendChild(zwischen);
    zeile.appendChild(rechts);
    ziel.appendChild(zeile);

    if (window.Skizze) { window.Skizze.neu(); }
  }

  document.addEventListener("sprache:gewechselt", aufbauen);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aufbauen);
  } else {
    aufbauen();
  }
})();
