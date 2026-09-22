/* ------------------------------------------------------------------
   i18n.js – Sprachumschaltung Deutsch / Englisch.

   Statische Texte im HTML über data-i18n="schluessel" bzw.
   data-i18n-platzhalter="schluessel". Dynamische Texte über I18N.t()
   (Schlüssel) und I18N.tx() (zweisprachiger Wert { de, en }).
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var SPEICHER = "teamkonferenz.sprache";

  var TEXTE = {
    de: {
      "titel.seite":        "Arbeitsplatz – Team Konferenz (Designentwurf)",
      "fenster.titel":      "Arztarbeitsplatz",
      "fenster.kontext":    "[Station / Arbeitsplatzkontext]",
      "menue.datei":        "Datei",
      "menue.bearbeiten":   "Bearbeiten",
      "menue.ansicht":      "Ansicht",
      "menue.geheZu":       "Gehe zu",
      "menue.einfuegen":    "Einfügen",
      "menue.extras":       "Extras",
      "menue.email":        "EMail",
      "menue.info":         "Info",
      "werkzeug.arbeitsplatz": "Stationsarzt Neurologie",
      "werkzeug.filter":    "<Alle>",
      "liste.titel":        "Fälle ({n}): Neurologie Komplex",
      "liste.suche":        "Suchen …",
      "liste.suchknopf":    "Suchen",
      "liste.spalte.ta":    "Ta",
      "liste.spalte.geb":   "geb.",
      "liste.spalte.name":  "Name",
      "liste.spalte.vorname": "Vorname",
      "kerninfo.alarm":     "Alarm-/Pflegekennz.",
      "kerninfo.keineKennzeichen": "keine Kennzeichen erfasst",
      "kerninfo.basic":     "Basic Kerninfo",
      "kerninfo.fallnummer": "Fallnummer:",
      "kerninfo.geburtsdatum": "Geburtsdatum:",
      "kerninfo.angehoerige": "Angehörige(r):",
      "kerninfo.telefon":   "Telefon:",
      "kerninfo.fallinfo":  "akt. Fallinfo",
      "kerninfo.fallnr":    "Fall-Nr.:",
      "kerninfo.fallart":   "Fallart:",
      "kerninfo.zimmer":    "Zimmer:",
      "kerninfo.beginn":    "Beginn:",
      "kerninfo.ende":      "Ende:",
      "reiter.teamkonferenz": "Team Konferenz",
      "reiter.einstufung":  "Einstufung (Neurologie)",
      "reiter.journal":     "(1) Journal",
      "reiter.scoring":     "Patientenscoring",
      "reiter.stammdaten":  "Patientenstammdaten",
      "reiter.labor":       "Laborbefunde",
      "platzhalter.reiter": "{name} – im Entwurf nicht ausgeprägt",
      "konferenz.titel":    "Team Konferenz vom {datum}",
      "konferenz.unterzeile": "Beginn {zeit} Uhr · {ort} · {n} Patient/innen auf der Tagesordnung",
      "konferenz.teilnehmende": "Teilnehmende",
      "konferenz.allgemein": "Allgemeine Einträge (nicht patientenbezogen)",
      "konferenz.allgemeinHinweis": "z. B. Abwesenheiten, organisatorische Absprachen, Hinweise an das Team",
      "konferenz.allgemeinPlatzhalter": "Frau Müller fehlt entschuldigt, Herr Maier ist im Urlaub …",
      "patient.fallnr":     "Fall-Nr. {nr} · geb. {geb} · Zi. {zimmer}",
      "patient.stand":      "{erfasst} von {gesamt} Entscheidungen erfasst",
      "tabelle.thema":      "Thema",
      "tabelle.journal":    "Journaleinträge der letzten Woche",
      "tabelle.entscheidung": "Entscheidung",
      "tabelle.keineEintraege": "keine Einträge im Zeitraum",
      "tabelle.entscheidungPlatzhalter": "Entscheidung erfassen …",
      "knopf.speichern":    "Konferenz speichern",
      "knopf.zwischenspeichern": "Zwischenspeichern",
      "knopf.abbrechen":    "Abbrechen",
      "sprache.hinweis":    "Nur für den Entwurf: Sprache"
    },
    en: {
      "titel.seite":        "Workplace – Team Conference (design draft)",
      "fenster.titel":      "Physician workplace",
      "fenster.kontext":    "[ward / workplace context]",
      "menue.datei":        "File",
      "menue.bearbeiten":   "Edit",
      "menue.ansicht":      "View",
      "menue.geheZu":       "Go to",
      "menue.einfuegen":    "Insert",
      "menue.extras":       "Tools",
      "menue.email":        "EMail",
      "menue.info":         "Info",
      "werkzeug.arbeitsplatz": "Ward physician neurology",
      "werkzeug.filter":    "<All>",
      "liste.titel":        "Cases ({n}): neurology complex",
      "liste.suche":        "Search …",
      "liste.suchknopf":    "Search",
      "liste.spalte.ta":    "Ta",
      "liste.spalte.geb":   "born",
      "liste.spalte.name":  "Surname",
      "liste.spalte.vorname": "First name",
      "kerninfo.alarm":     "Alerts / care flags",
      "kerninfo.keineKennzeichen": "no flags recorded",
      "kerninfo.basic":     "Basic core info",
      "kerninfo.fallnummer": "Case number:",
      "kerninfo.geburtsdatum": "Date of birth:",
      "kerninfo.angehoerige": "Next of kin:",
      "kerninfo.telefon":   "Phone:",
      "kerninfo.fallinfo":  "Current case info",
      "kerninfo.fallnr":    "Case no.:",
      "kerninfo.fallart":   "Case type:",
      "kerninfo.zimmer":    "Room:",
      "kerninfo.beginn":    "Start:",
      "kerninfo.ende":      "End:",
      "reiter.teamkonferenz": "Team Conference",
      "reiter.einstufung":  "Classification (neurology)",
      "reiter.journal":     "(1) Journal",
      "reiter.scoring":     "Patient scoring",
      "reiter.stammdaten":  "Patient master data",
      "reiter.labor":       "Lab results",
      "platzhalter.reiter": "{name} – not detailed in this draft",
      "konferenz.titel":    "Team Conference of {datum}",
      "konferenz.unterzeile": "Starts {zeit} · {ort} · {n} patients on the agenda",
      "konferenz.teilnehmende": "Participants",
      "konferenz.allgemein": "General entries (not patient-related)",
      "konferenz.allgemeinHinweis": "e.g. absences, organisational agreements, notes for the team",
      "konferenz.allgemeinPlatzhalter": "Ms Müller is absent, Mr Maier is on leave …",
      "patient.fallnr":     "Case no. {nr} · born {geb} · room {zimmer}",
      "patient.stand":      "{erfasst} of {gesamt} decisions recorded",
      "tabelle.thema":      "Topic",
      "tabelle.journal":    "Journal entries of the past week",
      "tabelle.entscheidung": "Decision",
      "tabelle.keineEintraege": "no entries in this period",
      "tabelle.entscheidungPlatzhalter": "Record decision …",
      "knopf.speichern":    "Save conference",
      "knopf.zwischenspeichern": "Save draft",
      "knopf.abbrechen":    "Cancel",
      "sprache.hinweis":    "Draft only: language"
    }
  };

  var MONATE_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var sprache = "de";
  try { sprache = localStorage.getItem(SPEICHER) || "de"; } catch (e) { /* egal */ }

  function t(schluessel, werte) {
    var text = (TEXTE[sprache] && TEXTE[sprache][schluessel]) || schluessel;
    if (werte) {
      Object.keys(werte).forEach(function (k) {
        text = text.replace(new RegExp("\\{" + k + "\\}", "g"), werte[k]);
      });
    }
    return text;
  }

  /* zweisprachiger Wert { de, en } oder einfacher String */
  function tx(wert) {
    if (wert === null || wert === undefined) { return ""; }
    if (typeof wert === "string") { return wert; }
    return wert[sprache] !== undefined ? wert[sprache] : wert.de;
  }

  /* 22.09.2026 -> 22 Sep 2026 (nur im Englischen) */
  function datum(wert) {
    if (sprache === "de" || !wert) { return wert; }
    return String(wert).replace(/(\d{2})\.(\d{2})\.(\d{4})/g, function (_, tag, monat, jahr) {
      return tag + " " + MONATE_EN[parseInt(monat, 10) - 1] + " " + jahr;
    });
  }

  function statischeTexteSetzen() {
    document.documentElement.lang = sprache;
    document.title = t("titel.seite");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-platzhalter]").forEach(function (el) {
      el.placeholder = t(el.dataset.i18nPlatzhalter);
    });
    document.querySelectorAll("[data-i18n-wert]").forEach(function (el) {
      el.value = t(el.dataset.i18nWert);
    });
  }

  function wechseln(neueSprache) {
    if (neueSprache === sprache) { return; }
    sprache = neueSprache;
    try { localStorage.setItem(SPEICHER, sprache); } catch (e) { /* egal */ }
    statischeTexteSetzen();
    umschalterAktualisieren();
    document.dispatchEvent(new CustomEvent("sprache:gewechselt", { detail: sprache }));
    if (window.Skizze) { window.Skizze.neu(); }
  }

  function umschalterAktualisieren() {
    document.querySelectorAll(".sprachwahl__knopf").forEach(function (knopf) {
      knopf.setAttribute("aria-pressed", String(knopf.dataset.sprache === sprache));
    });
  }

  function umschalterVerdrahten() {
    document.querySelectorAll(".sprachwahl__knopf").forEach(function (knopf) {
      knopf.addEventListener("click", function () { wechseln(knopf.dataset.sprache); });
    });
    umschalterAktualisieren();
  }

  window.I18N = {
    t: t,
    tx: tx,
    datum: datum,
    get sprache() { return sprache; },
    wechseln: wechseln,
    statischeTexteSetzen: statischeTexteSetzen
  };

  function start() { statischeTexteSetzen(); umschalterVerdrahten(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
