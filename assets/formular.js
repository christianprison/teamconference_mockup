/* ------------------------------------------------------------------
   formular.js – Kartenreiter "Team Konferenz".

   Aufbau: Überschrift mit Konferenzdatum, Teilnehmende, allgemeines
   Freitextfeld, danach je Patient ein aufklappbarer Abschnitt mit der
   Tabelle Thema / Journaleinträge / Entscheidung. Es ist immer nur ein
   Patient geöffnet; die Auswahl ist mit der Fallliste gekoppelt.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var K       = window.KONFERENZ;
  var faelle  = window.FAELLE || [];
  var SPEICHER = "teamkonferenz.entwurf";
  var offen   = 0;
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

    var titel = neu("h1", "konferenz__titel", "Team Konferenz vom " + K.datum);
    bruch.appendChild(titel);

    var unter = neu("p", "notiz",
      "Beginn " + K.beginn + " Uhr · " + K.ort + " · " + faelle.length + " Patient/innen auf der Tagesordnung");
    bruch.appendChild(unter);

    /* Teilnehmende */
    var block = neu("section", "feldgruppe");
    block.setAttribute("data-skizze", "");
    block.appendChild(neu("div", "feldgruppe__titel", "Teilnehmende"));

    var liste = neu("ul", "teilnehmer");
    K.teilnehmende.forEach(function (t) {
      var li = neu("li", "teilnehmer__eintrag");
      li.appendChild(neu("span", "teilnehmer__name", t.name));
      li.appendChild(neu("span", "teilnehmer__rolle", t.rolle));
      li.appendChild(neu("span", "teilnehmer__kuerzel", t.kuerzel));
      liste.appendChild(li);
    });
    block.appendChild(liste);
    bruch.appendChild(block);

    /* Allgemeines Freitextfeld */
    var allgemein = neu("section", "feldgruppe");
    allgemein.setAttribute("data-skizze", "");
    allgemein.appendChild(neu("div", "feldgruppe__titel", "Allgemeine Einträge (nicht patientenbezogen)"));
    allgemein.appendChild(neu("p", "notiz", "z. B. Abwesenheiten, organisatorische Absprachen, Hinweise an das Team"));

    var huelle = neu("span", "feld__box");
    huelle.setAttribute("data-skizze", "");
    var feld = neu("textarea", "textfeld");
    feld.placeholder = "Frau Müller fehlt entschuldigt, Herr Maier ist im Urlaub …";
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
    return erfasst + " von " + K.themen.length + " Entscheidungen erfasst";
  }

  function themenTabelle(fall) {
    var huelle = neu("div", "tabelle-huelle");
    huelle.setAttribute("data-skizze", "");

    var tabelle = neu("table", "themen");
    var kopf = neu("thead");
    var kopfzeile = neu("tr");
    ["Thema", "Journaleinträge der letzten Woche", "Entscheidung"].forEach(function (b) {
      kopfzeile.appendChild(neu("th", null, b));
    });
    kopf.appendChild(kopfzeile);
    tabelle.appendChild(kopf);

    var koerper = neu("tbody");

    K.themen.forEach(function (thema) {
      var zeile = neu("tr");

      var spalteThema = neu("td", "themen__thema");
      spalteThema.appendChild(neu("span", "themen__bezeichnung", thema.bezeichnung));
      zeile.appendChild(spalteThema);

      var eintraege = (fall.journal && fall.journal[thema.schluessel]) || [];
      var spalteJournal = neu("td", "themen__journal");
      if (!eintraege.length) {
        spalteJournal.appendChild(neu("p", "notiz", "keine Einträge im Zeitraum"));
      }
      eintraege.forEach(function (e) {
        var eintrag = neu("div", "journal-eintrag");
        var zeileKopf = neu("div", "journal-eintrag__kopf");
        zeileKopf.appendChild(neu("span", "journal-eintrag__datum", e.datum));
        zeileKopf.appendChild(neu("span", "journal-eintrag__kuerzel", e.kuerzel));
        eintrag.appendChild(zeileKopf);
        eintrag.appendChild(neu("div", "journal-eintrag__text", e.text));
        spalteJournal.appendChild(eintrag);
      });
      zeile.appendChild(spalteJournal);

      var spalteEntscheidung = neu("td", "themen__entscheidung");
      var box = neu("span", "feld__box");
      box.setAttribute("data-skizze", "");
      var feld = neu("textarea", "textfeld textfeld--entscheidung");
      feld.placeholder = "Entscheidung erfassen …";
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
    kopf.setAttribute("aria-expanded", String(i === offen));

    kopf.appendChild(neu("span", "patient__pfeil", i === offen ? "▾" : "▸"));
    kopf.appendChild(neu("span", "patient__name", fall.nachname + ", " + fall.vorname));
    kopf.appendChild(neu("span", "patient__meta",
      "Fall-Nr. " + fall.fallnummer + " · geb. " + fall.geboren + " · Zi. " + fall.zimmer));

    var zaehler = neu("span", "patient__stand merker", zaehlerText(fall));
    zaehler.setAttribute("data-zaehler", fall.fallnummer);
    zaehler.setAttribute("data-skizze", "gestrichelt");
    kopf.appendChild(zaehler);

    kopf.addEventListener("click", function () { oeffnen(i); });
    abschnitt.appendChild(kopf);

    var inhalt = neu("div", "patient__inhalt");
    inhalt.hidden = i !== offen;
    inhalt.appendChild(themenTabelle(fall));
    abschnitt.appendChild(inhalt);

    return abschnitt;
  }

  /* ---------- Auf- und Zuklappen ----------------------------------- */

  function oeffnen(i, stumm) {
    offen = i;
    var abschnitte = document.querySelectorAll(".patient");

    abschnitte.forEach(function (abschnitt, nr) {
      var auf = nr === i;
      abschnitt.querySelector(".patient__kopf").setAttribute("aria-expanded", String(auf));
      abschnitt.querySelector(".patient__pfeil").textContent = auf ? "▾" : "▸";
      abschnitt.querySelector(".patient__inhalt").hidden = !auf;
    });

    if (window.Skizze) { window.Skizze.neu(); }
    if (!stumm) { document.dispatchEvent(new CustomEvent("patient:geoeffnet", { detail: i })); }
  }

  /* ---------- Aufbau ----------------------------------------------- */

  function aufbauen() {
    var ziel = document.querySelector('[data-reiterinhalt="teamkonferenz"]');
    if (!ziel) { return; }
    ziel.innerHTML = "";
    ziel.appendChild(kopfbereich());

    var patienten = neu("div", "patientenliste");
    faelle.forEach(function (fall, i) { patienten.appendChild(patientAbschnitt(fall, i)); });
    ziel.appendChild(patienten);

    var zeile = neu("div", "knopf-zeile");
    var speichern = neu("button", "knopf knopf--haupt", "Konferenz speichern");
    speichern.type = "button";
    speichern.setAttribute("data-skizze", "");
    speichern.setAttribute("data-skizze-kraeftig", "");
    var zwischen = neu("button", "knopf", "Zwischenspeichern");
    zwischen.type = "button";
    zwischen.setAttribute("data-skizze", "");
    var abbrechen = neu("button", "knopf knopf--still", "Abbrechen");
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

  /* Fallwechsel in der Objektliste öffnet den passenden Abschnitt */
  document.addEventListener("fall:gewechselt", function (e) {
    var i = faelle.indexOf(e.detail);
    if (i >= 0 && i !== offen) { oeffnen(i, true); }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aufbauen);
  } else {
    aufbauen();
  }
})();
