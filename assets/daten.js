/* Testdaten für den Prototyp – frei erfunden, keine echten Patientendaten. */

window.KONFERENZ = {
  datum: "22.09.2026",
  beginn: "13:30",
  ort: "Besprechungsraum N-04",
  teilnehmende: [
    { name: "Dr. med. Annika Behrens", rolle: "Oberärztin Neurologie", kuerzel: "BEH" },
    { name: "Marion Kellner",          rolle: "Pflegefachkraft",       kuerzel: "KEL" },
    { name: "Sven Ostrowski",          rolle: "Physiotherapeut",       kuerzel: "OST" },
    { name: "Lena Brinkmann",          rolle: "Ergotherapeutin",       kuerzel: "BRI" },
    { name: "Jakob Sailer",            rolle: "Logopäde",              kuerzel: "SAI" },
    { name: "Dr. phil. Nadja Steinke", rolle: "Psychologin",           kuerzel: "STE" }
  ],
  themen: [
    { schluessel: "logo",   bezeichnung: "Logopädie" },
    { schluessel: "ergo",   bezeichnung: "Ergotherapie" },
    { schluessel: "physio", bezeichnung: "Physiotherapie" },
    { schluessel: "psycho", bezeichnung: "Psychologie" }
  ]
};

window.FAELLE = [
  {
    ta: "1", nachname: "Schieberle", vorname: "Hans-Georg", geboren: "02.02.1944",
    fallnummer: "2108777", fallart: "stationär", beginn: "23.04.2025, 10:00", ende: "",
    station: "Neurologie, Station 4", zimmer: "N21", angehoerige: "Schieberle, Eva (Ehepartnerin)",
    telefon: "keine Rufnummer erfasst", kennzeichen: ["Patient/in ist Bluter!"],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: "Dysarthrie unverändert, Verständlichkeit im Einzelgespräch gut, im Gruppensetting deutlich reduziert." },
        { datum: "19.09.2026", kuerzel: "SAI", text: "Schluckversuch Kost C toleriert, kein Husten. Weiterhin Aufsicht bei Mahlzeiten erforderlich." }
      ],
      ergo: [
        { datum: "15.09.2026", kuerzel: "BRI", text: "Selbsthilfetraining Oberkörper: Anziehen mit Hilfsmittel selbstständig." },
        { datum: "18.09.2026", kuerzel: "BRI", text: "Feinmotorik rechts weiterhin eingeschränkt, Griffverdickung erprobt." }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: "Transfer Bett/Stuhl mit einer Hilfsperson, Standdauer ca. 2 Minuten." },
        { datum: "17.09.2026", kuerzel: "OST", text: "Gangtraining 15 m am Rollator, Pausen wegen Erschöpfung nötig." },
        { datum: "21.09.2026", kuerzel: "OST", text: "Erstmals 30 m am Rollator, Gangbild sicherer, keine Sturzereignisse." }
      ],
      psycho: [
        { datum: "17.09.2026", kuerzel: "STE", text: "Antriebsminderung im Vordergrund, Patient äußert Sorge um Rückkehr in die eigene Wohnung." }
      ]
    }
  },
  {
    ta: "1", nachname: "Bergmann", vorname: "Katharina", geboren: "17.06.1951",
    fallnummer: "2108802", fallart: "stationär", beginn: "02.09.2026, 08:30", ende: "",
    station: "Neurologie, Station 4", zimmer: "N12", angehoerige: "Bergmann, Ute (Tochter)",
    telefon: "0171 0000000", kennzeichen: ["Sturzgefahr"],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: "Wortfindungsstörungen bei Spontansprache, Benennleistung gegenüber Vorwoche verbessert." }
      ],
      ergo: [
        { datum: "16.09.2026", kuerzel: "BRI", text: "Haushaltstraining in der Lehrküche, Handlungsplanung benötigt verbale Anleitung." },
        { datum: "21.09.2026", kuerzel: "BRI", text: "Küchentraining zweiter Durchgang weitgehend selbstständig." }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: "Gleichgewichtstraining, Tandemstand nur mit Kontakt möglich." },
        { datum: "18.09.2026", kuerzel: "OST", text: "Treppentraining 8 Stufen mit Geländer, keine Sturzangst geäußert." }
      ],
      psycho: [
        { datum: "18.09.2026", kuerzel: "STE", text: "Depressive Verstimmung rückläufig, Tagesstruktur wird angenommen." },
        { datum: "21.09.2026", kuerzel: "STE", text: "Gespräch mit Tochter über häusliche Versorgung, Entlastungsangebote besprochen." }
      ]
    }
  },
  {
    ta: "0", nachname: "Lorenz", vorname: "Mirko", geboren: "29.11.1978",
    fallnummer: "2108815", fallart: "stationär", beginn: "05.09.2026, 14:10", ende: "",
    station: "Neurologie, Station 4", zimmer: "N07", angehoerige: "keine erfasst",
    telefon: "keine Rufnummer erfasst", kennzeichen: [],
    journal: {
      logo: [
        { datum: "17.09.2026", kuerzel: "SAI", text: "Keine Auffälligkeiten bei Sprechmotorik, Therapie kann beendet werden." }
      ],
      ergo: [
        { datum: "15.09.2026", kuerzel: "BRI", text: "Belastungserprobung am PC-Arbeitsplatz 30 Minuten, danach Kopfschmerzen." },
        { datum: "19.09.2026", kuerzel: "BRI", text: "Belastung auf 45 Minuten gesteigert, Pausenmanagement erarbeitet." }
      ],
      physio: [
        { datum: "16.09.2026", kuerzel: "OST", text: "Ausdauertraining Ergometer 12 Minuten, Kreislauf stabil." }
      ],
      psycho: [
        { datum: "16.09.2026", kuerzel: "STE", text: "Fatigue-Symptomatik im Vordergrund, Psychoedukation begonnen." },
        { datum: "21.09.2026", kuerzel: "STE", text: "Berufliche Wiedereingliederung thematisiert, Patient wirkt ambivalent." }
      ]
    }
  },
  {
    ta: "1", nachname: "Adamczyk", vorname: "Teresa", geboren: "08.03.1962",
    fallnummer: "2108820", fallart: "stationär", beginn: "07.09.2026, 11:45", ende: "",
    station: "Neurologie, Station 4", zimmer: "N15", angehoerige: "Adamczyk, Jan (Ehepartner)",
    telefon: "0151 0000000", kennzeichen: ["Allergie: Penicillin"],
    journal: {
      logo: [
        { datum: "15.09.2026", kuerzel: "SAI", text: "Globale Aphasie, Kommunikation über Bildkarten, Angehörige eingewiesen." },
        { datum: "18.09.2026", kuerzel: "SAI", text: "Erste verlässliche Ja/Nein-Antworten, Bildkartensatz erweitert." },
        { datum: "21.09.2026", kuerzel: "SAI", text: "Ehemann setzt Kommunikationshilfen im Besuch selbstständig ein." }
      ],
      ergo: [
        { datum: "17.09.2026", kuerzel: "BRI", text: "Waschtraining am Waschbecken mit Anleitung, Neglect links beachtet." }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: "Sitzbalance frei für 5 Minuten, Rumpfkontrolle verbessert." },
        { datum: "19.09.2026", kuerzel: "OST", text: "Stehtraining im Stehständer 10 Minuten toleriert." }
      ],
      psycho: [
        { datum: "19.09.2026", kuerzel: "STE", text: "Belastung der Angehörigen hoch, Angebot regelmäßiger Gespräche angenommen." }
      ]
    }
  },
  {
    ta: "1", nachname: "Vukovic", vorname: "Danilo", geboren: "22.12.1949",
    fallnummer: "2108831", fallart: "stationär", beginn: "09.09.2026, 09:05", ende: "",
    station: "Neurologie, Station 4", zimmer: "N03", angehoerige: "Vukovic, Mira (Ehepartnerin)",
    telefon: "0160 0000000", kennzeichen: [],
    journal: {
      logo: [
        { datum: "18.09.2026", kuerzel: "SAI", text: "Schluckdiagnostik: stille Aspiration nicht auszuschließen, FEES angemeldet." }
      ],
      ergo: [
        { datum: "16.09.2026", kuerzel: "BRI", text: "Hilfsmittelversorgung geprüft, Badewannenbrett empfohlen." }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: "Mobilisation an die Bettkante, Kreislauf anfangs instabil." },
        { datum: "17.09.2026", kuerzel: "OST", text: "Transfer in den Rollstuhl mit zwei Hilfspersonen." },
        { datum: "20.09.2026", kuerzel: "OST", text: "Transfer nun mit einer Hilfsperson möglich." }
      ],
      psycho: [
        { datum: "20.09.2026", kuerzel: "STE", text: "Kognitive Testung begonnen, Aufmerksamkeitsleistung deutlich reduziert." }
      ]
    }
  },
  {
    ta: "0", nachname: "Ehrhardt", vorname: "Sieglinde", geboren: "14.05.1937",
    fallnummer: "2108844", fallart: "stationär", beginn: "11.09.2026, 16:20", ende: "",
    station: "Geriatrie, Station 1", zimmer: "G22", angehoerige: "Ehrhardt, Paul (Sohn)",
    telefon: "0170 0000000", kennzeichen: ["Betreuung eingerichtet", "Sturzgefahr"],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: "Kostform auf pürierte Kost angepasst, Trinkmenge weiterhin gering." },
        { datum: "21.09.2026", kuerzel: "SAI", text: "Andickungsmittel wird toleriert, kein Hinweis auf Aspiration." }
      ],
      ergo: [
        { datum: "18.09.2026", kuerzel: "BRI", text: "Esstraining mit angepasstem Besteck, Ausdauer ca. 10 Minuten." }
      ],
      physio: [
        { datum: "16.09.2026", kuerzel: "OST", text: "Gehstrecke 10 m mit Rollator und Begleitung." },
        { datum: "19.09.2026", kuerzel: "OST", text: "Sturzprophylaxe mit Pflege abgestimmt, Hüftprotektoren angepasst." }
      ],
      psycho: [
        { datum: "17.09.2026", kuerzel: "STE", text: "Zeitliche und örtliche Orientierung eingeschränkt, Tagesstruktur empfohlen." }
      ]
    }
  }
];
