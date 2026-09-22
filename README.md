# Teamkonferenz – klickbarer Prototyp (Designentwurf)

Prototyp eines Formulars zur Erfassung von Teamkonferenzen in einem
Krankenhaus-Informationssystem. Bewusst im Stil einer Bleistiftzeichnung
gehalten: der Entwurf zeigt Struktur und Feldlogik, nicht das finale Design.

## Sprachen

Deutsch und Englisch, umschaltbar über die farbigen Schaltflächen DE / EN
rechts in der Symbolleiste. Der Umschalter ist bewusst bunt gehalten: er
gehört nicht zum Designentwurf.

## Stand

* `index.html` – Stilmuster mit allen Bausteinen (Kopfleiste, Patientenbanner,
  Reiter, Formularelemente, Übersichtsliste)
* Fachliche Inhalte des Formulars: folgen nach Vorgabe

## Technik

Statische Seite ohne Build-Schritt, lauffähig über GitHub Pages.

* `assets/i18n.js` – Sprachumschaltung Deutsch / Englisch
* `assets/style.css` – Layout und Skizzen-Optik
* `assets/sketch.js` – zeichnet Rahmen, Linien und Kreise handgezeichnet
* `assets/vendor/rough.js` – [Rough.js](https://roughjs.com) 4.6.6 (MIT)
* `assets/fonts/` – Schrift „Kalam“ (SIL Open Font License), lokal eingebunden

Lokal ansehen: Datei `index.html` im Browser öffnen oder
`python3 -m http.server` im Projektverzeichnis starten.

## Versionsstempel

Vor jedem Commit `python3 werkzeuge/stand_setzen.py` ausführen. Der Stempel
entsteht aus der Serverzeit plus zwei Stunden (`ZEITVERSATZ` im Skript). Das Skript
hängt an alle CSS-/JS-Verweise ein `?v=<zeitstempel>` an und schreibt den
Stand sichtbar in die Symbolleiste. Damit lädt der Browser nach einem
Deployment die neuen Dateien, und man erkennt auf der Seite, welcher Stand
gerade läuft.

## Veröffentlichung

GitHub Pages: Repository → Settings → Pages → Source „Deploy from a branch“,
Branch `claude/sharp-tesla-34hhvm`, Ordner `/ (root)`.
