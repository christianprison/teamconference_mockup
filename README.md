# Teamkonferenz – klickbarer Prototyp (Designentwurf)

Prototyp eines Formulars zur Erfassung von Teamkonferenzen in einem
Krankenhaus-Informationssystem. Bewusst im Stil einer Bleistiftzeichnung
gehalten: der Entwurf zeigt Struktur und Feldlogik, nicht das finale Design.

## Stand

* `index.html` – Stilmuster mit allen Bausteinen (Kopfleiste, Patientenbanner,
  Reiter, Formularelemente, Übersichtsliste)
* Fachliche Inhalte des Formulars: folgen nach Vorgabe

## Technik

Statische Seite ohne Build-Schritt, lauffähig über GitHub Pages.

* `assets/style.css` – Layout und Skizzen-Optik
* `assets/sketch.js` – zeichnet Rahmen, Linien und Kreise handgezeichnet
* `assets/vendor/rough.js` – [Rough.js](https://roughjs.com) 4.6.6 (MIT)
* `assets/fonts/` – Schrift „Kalam“ (SIL Open Font License), lokal eingebunden

Lokal ansehen: Datei `index.html` im Browser öffnen oder
`python3 -m http.server` im Projektverzeichnis starten.

## Veröffentlichung

GitHub Pages: Repository → Settings → Pages → Source „Deploy from a branch“,
Branch `claude/sharp-tesla-34hhvm`, Ordner `/ (root)`.
