#!/usr/bin/env python3
"""Setzt Versionsstempel in den HTML-Dateien.

Hängt an alle lokalen CSS-/JS-Verweise ein ?v=<stempel> an und schreibt den
Stempel in das Element mit id="stand". Damit lädt der Browser nach einem
Deployment garantiert die neuen Dateien und man sieht auf der Seite, welcher
Stand läuft. Aufruf vor dem Commit:  python3 werkzeuge/stand_setzen.py
"""
import datetime
import pathlib
import re
import zoneinfo

# Die Buildumgebung läuft auf UTC; der Stempel soll die Projektzeit zeigen.
# zoneinfo berücksichtigt Sommer- und Winterzeit automatisch.
ZEITZONE = zoneinfo.ZoneInfo("Europe/Berlin")

STEMPEL = datetime.datetime.now(tz=ZEITZONE).strftime("%Y-%m-%d %H:%M")
KURZ = STEMPEL.replace("-", "").replace(" ", "").replace(":", "")

for datei in pathlib.Path(__file__).resolve().parent.parent.glob("*.html"):
    text = datei.read_text(encoding="utf-8")

    text = re.sub(r'(href="assets/[^"?]+\.css)(\?v=\d+)?"', r'\1?v=%s"' % KURZ, text)
    text = re.sub(r'(src="assets/[^"?]+\.js)(\?v=\d+)?"', r'\1?v=%s"' % KURZ, text)
    text = re.sub(r'(<span id="stand"[^>]*>)[^<]*(</span>)', r'\g<1>%s\g<2>' % STEMPEL, text)

    datei.write_text(text, encoding="utf-8")
    print(datei.name, "->", STEMPEL)
