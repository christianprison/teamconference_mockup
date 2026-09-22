/* Testdaten für den Prototyp – frei erfunden, keine echten Patientendaten.
   Zweisprachige Texte stehen als { de, en }. / Mock data, fictional. */

window.KONFERENZ = {
  datum: "22.09.2026",
  beginn: "13:30",
  ort: { de: "Besprechungsraum N-04", en: "Meeting room N-04" },
  teilnehmende: [
    { name: "Dr. med. Annika Behrens", kuerzel: "BEH", rolle: { de: "Oberärztin Neurologie", en: "Consultant neurologist" } },
    { name: "Marion Kellner",          kuerzel: "KEL", rolle: { de: "Pflegefachkraft",       en: "Registered nurse" } },
    { name: "Sven Ostrowski",          kuerzel: "OST", rolle: { de: "Physiotherapeut",       en: "Physiotherapist" } },
    { name: "Lena Brinkmann",          kuerzel: "BRI", rolle: { de: "Ergotherapeutin",       en: "Occupational therapist" } },
    { name: "Jakob Sailer",            kuerzel: "SAI", rolle: { de: "Logopäde",              en: "Speech therapist" } },
    { name: "Dr. phil. Nadja Steinke", kuerzel: "STE", rolle: { de: "Psychologin",           en: "Psychologist" } }
  ],
  themen: [
    { schluessel: "logo",   bezeichnung: { de: "Logopädie",       en: "Speech therapy" } },
    { schluessel: "ergo",   bezeichnung: { de: "Ergotherapie",    en: "Occupational therapy" } },
    { schluessel: "physio", bezeichnung: { de: "Physiotherapie",  en: "Physiotherapy" } },
    { schluessel: "psycho", bezeichnung: { de: "Psychologie",     en: "Psychology" } }
  ]
};

window.FAELLE = [
  {
    ta: "1", nachname: "Schieberle", vorname: "Hans-Georg", geboren: "02.02.1944",
    fallnummer: "2108777", beginn: "23.04.2025, 10:00", ende: "", zimmer: "N21",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Neurologie, Station 4", en: "Neurology, ward 4" },
    angehoerige: { de: "Schieberle, Eva (Ehepartnerin)", en: "Schieberle, Eva (spouse)" },
    telefon: { de: "keine Rufnummer erfasst", en: "no phone number recorded" },
    kennzeichen: [{ de: "Patient/in ist Bluter!", en: "Patient has haemophilia!" }],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: { de: "Dysarthrie unverändert, Verständlichkeit im Einzelgespräch gut, im Gruppensetting deutlich reduziert.", en: "Dysarthria unchanged; intelligibility good in one-to-one conversation, clearly reduced in group settings." } },
        { datum: "19.09.2026", kuerzel: "SAI", text: { de: "Schluckversuch Kost C toleriert, kein Husten. Weiterhin Aufsicht bei Mahlzeiten erforderlich.", en: "Swallowing trial with diet C tolerated, no coughing. Supervision during meals still required." } }
      ],
      ergo: [
        { datum: "15.09.2026", kuerzel: "BRI", text: { de: "Selbsthilfetraining Oberkörper: Anziehen mit Hilfsmittel selbstständig.", en: "Self-care training upper body: dressing independently with assistive device." } },
        { datum: "18.09.2026", kuerzel: "BRI", text: { de: "Feinmotorik rechts weiterhin eingeschränkt, Griffverdickung erprobt.", en: "Fine motor skills on the right still impaired; thickened grip trialled." } }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: { de: "Transfer Bett/Stuhl mit einer Hilfsperson, Standdauer ca. 2 Minuten.", en: "Bed-to-chair transfer with one assistant, standing tolerance approx. 2 minutes." } },
        { datum: "17.09.2026", kuerzel: "OST", text: { de: "Gangtraining 15 m am Rollator, Pausen wegen Erschöpfung nötig.", en: "Gait training 15 m with rollator, breaks needed due to fatigue." } },
        { datum: "21.09.2026", kuerzel: "OST", text: { de: "Erstmals 30 m am Rollator, Gangbild sicherer, keine Sturzereignisse.", en: "First time 30 m with rollator, gait more stable, no falls." } }
      ],
      psycho: [
        { datum: "17.09.2026", kuerzel: "STE", text: { de: "Antriebsminderung im Vordergrund, Patient äußert Sorge um Rückkehr in die eigene Wohnung.", en: "Reduced drive predominates; patient voices concern about returning to his own flat." } }
      ]
    }
  },
  {
    ta: "1", nachname: "Bergmann", vorname: "Katharina", geboren: "17.06.1951",
    fallnummer: "2108802", beginn: "02.09.2026, 08:30", ende: "", zimmer: "N12",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Neurologie, Station 4", en: "Neurology, ward 4" },
    angehoerige: { de: "Bergmann, Ute (Tochter)", en: "Bergmann, Ute (daughter)" },
    telefon: { de: "0171 0000000", en: "0171 0000000" },
    kennzeichen: [{ de: "Sturzgefahr", en: "Risk of falls" }],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: { de: "Wortfindungsstörungen bei Spontansprache, Benennleistung gegenüber Vorwoche verbessert.", en: "Word-finding difficulties in spontaneous speech; naming improved compared with last week." } }
      ],
      ergo: [
        { datum: "16.09.2026", kuerzel: "BRI", text: { de: "Haushaltstraining in der Lehrküche, Handlungsplanung benötigt verbale Anleitung.", en: "Household training in the training kitchen; action planning requires verbal cueing." } },
        { datum: "21.09.2026", kuerzel: "BRI", text: { de: "Küchentraining zweiter Durchgang weitgehend selbstständig.", en: "Second kitchen training session largely independent." } }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: { de: "Gleichgewichtstraining, Tandemstand nur mit Kontakt möglich.", en: "Balance training; tandem stance only possible with contact support." } },
        { datum: "18.09.2026", kuerzel: "OST", text: { de: "Treppentraining 8 Stufen mit Geländer, keine Sturzangst geäußert.", en: "Stair training 8 steps using the handrail, no fear of falling reported." } }
      ],
      psycho: [
        { datum: "18.09.2026", kuerzel: "STE", text: { de: "Depressive Verstimmung rückläufig, Tagesstruktur wird angenommen.", en: "Depressive mood improving; daily structure is being accepted." } },
        { datum: "21.09.2026", kuerzel: "STE", text: { de: "Gespräch mit Tochter über häusliche Versorgung, Entlastungsangebote besprochen.", en: "Discussion with daughter about home care; respite options explained." } }
      ]
    }
  },
  {
    ta: "0", nachname: "Lorenz", vorname: "Mirko", geboren: "29.11.1978",
    fallnummer: "2108815", beginn: "05.09.2026, 14:10", ende: "", zimmer: "N07",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Neurologie, Station 4", en: "Neurology, ward 4" },
    angehoerige: { de: "keine erfasst", en: "none recorded" },
    telefon: { de: "keine Rufnummer erfasst", en: "no phone number recorded" },
    kennzeichen: [],
    journal: {
      logo: [
        { datum: "17.09.2026", kuerzel: "SAI", text: { de: "Keine Auffälligkeiten bei Sprechmotorik, Therapie kann beendet werden.", en: "No abnormalities in speech motor function; therapy can be discontinued." } }
      ],
      ergo: [
        { datum: "15.09.2026", kuerzel: "BRI", text: { de: "Belastungserprobung am PC-Arbeitsplatz 30 Minuten, danach Kopfschmerzen.", en: "Work trial at the computer workstation for 30 minutes, followed by headache." } },
        { datum: "19.09.2026", kuerzel: "BRI", text: { de: "Belastung auf 45 Minuten gesteigert, Pausenmanagement erarbeitet.", en: "Load increased to 45 minutes; break management strategies developed." } }
      ],
      physio: [
        { datum: "16.09.2026", kuerzel: "OST", text: { de: "Ausdauertraining Ergometer 12 Minuten, Kreislauf stabil.", en: "Endurance training on the ergometer for 12 minutes, circulation stable." } }
      ],
      psycho: [
        { datum: "16.09.2026", kuerzel: "STE", text: { de: "Fatigue-Symptomatik im Vordergrund, Psychoedukation begonnen.", en: "Fatigue symptoms predominate; psychoeducation started." } },
        { datum: "21.09.2026", kuerzel: "STE", text: { de: "Berufliche Wiedereingliederung thematisiert, Patient wirkt ambivalent.", en: "Return to work discussed; patient appears ambivalent." } }
      ]
    }
  },
  {
    ta: "1", nachname: "Adamczyk", vorname: "Teresa", geboren: "08.03.1962",
    fallnummer: "2108820", beginn: "07.09.2026, 11:45", ende: "", zimmer: "N15",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Neurologie, Station 4", en: "Neurology, ward 4" },
    angehoerige: { de: "Adamczyk, Jan (Ehepartner)", en: "Adamczyk, Jan (spouse)" },
    telefon: { de: "0151 0000000", en: "0151 0000000" },
    kennzeichen: [{ de: "Allergie: Penicillin", en: "Allergy: penicillin" }],
    journal: {
      logo: [
        { datum: "15.09.2026", kuerzel: "SAI", text: { de: "Globale Aphasie, Kommunikation über Bildkarten, Angehörige eingewiesen.", en: "Global aphasia; communication via picture cards, relatives instructed." } },
        { datum: "18.09.2026", kuerzel: "SAI", text: { de: "Erste verlässliche Ja/Nein-Antworten, Bildkartensatz erweitert.", en: "First reliable yes/no responses; picture card set extended." } },
        { datum: "21.09.2026", kuerzel: "SAI", text: { de: "Ehemann setzt Kommunikationshilfen im Besuch selbstständig ein.", en: "Husband uses the communication aids independently during visits." } }
      ],
      ergo: [
        { datum: "17.09.2026", kuerzel: "BRI", text: { de: "Waschtraining am Waschbecken mit Anleitung, Neglect links beachtet.", en: "Washing training at the sink with guidance; left-sided neglect taken into account." } }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: { de: "Sitzbalance frei für 5 Minuten, Rumpfkontrolle verbessert.", en: "Unsupported sitting balance for 5 minutes; trunk control improved." } },
        { datum: "19.09.2026", kuerzel: "OST", text: { de: "Stehtraining im Stehständer 10 Minuten toleriert.", en: "Standing training in the standing frame tolerated for 10 minutes." } }
      ],
      psycho: [
        { datum: "19.09.2026", kuerzel: "STE", text: { de: "Belastung der Angehörigen hoch, Angebot regelmäßiger Gespräche angenommen.", en: "High burden on relatives; offer of regular counselling sessions accepted." } }
      ]
    }
  },
  {
    ta: "1", nachname: "Vukovic", vorname: "Danilo", geboren: "22.12.1949",
    fallnummer: "2108831", beginn: "09.09.2026, 09:05", ende: "", zimmer: "N03",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Neurologie, Station 4", en: "Neurology, ward 4" },
    angehoerige: { de: "Vukovic, Mira (Ehepartnerin)", en: "Vukovic, Mira (spouse)" },
    telefon: { de: "0160 0000000", en: "0160 0000000" },
    kennzeichen: [],
    journal: {
      logo: [
        { datum: "18.09.2026", kuerzel: "SAI", text: { de: "Schluckdiagnostik: stille Aspiration nicht auszuschließen, FEES angemeldet.", en: "Swallowing assessment: silent aspiration cannot be ruled out; FEES requested." } }
      ],
      ergo: [
        { datum: "16.09.2026", kuerzel: "BRI", text: { de: "Hilfsmittelversorgung geprüft, Badewannenbrett empfohlen.", en: "Assistive device provision reviewed; bath board recommended." } }
      ],
      physio: [
        { datum: "15.09.2026", kuerzel: "OST", text: { de: "Mobilisation an die Bettkante, Kreislauf anfangs instabil.", en: "Mobilisation to the edge of the bed; circulation initially unstable." } },
        { datum: "17.09.2026", kuerzel: "OST", text: { de: "Transfer in den Rollstuhl mit zwei Hilfspersonen.", en: "Transfer to wheelchair with two assistants." } },
        { datum: "20.09.2026", kuerzel: "OST", text: { de: "Transfer nun mit einer Hilfsperson möglich.", en: "Transfer now possible with one assistant." } }
      ],
      psycho: [
        { datum: "20.09.2026", kuerzel: "STE", text: { de: "Kognitive Testung begonnen, Aufmerksamkeitsleistung deutlich reduziert.", en: "Cognitive testing started; attention performance clearly reduced." } }
      ]
    }
  },
  {
    ta: "0", nachname: "Ehrhardt", vorname: "Sieglinde", geboren: "14.05.1937",
    fallnummer: "2108844", beginn: "11.09.2026, 16:20", ende: "", zimmer: "G22",
    fallart: { de: "stationär", en: "inpatient" },
    station: { de: "Geriatrie, Station 1", en: "Geriatrics, ward 1" },
    angehoerige: { de: "Ehrhardt, Paul (Sohn)", en: "Ehrhardt, Paul (son)" },
    telefon: { de: "0170 0000000", en: "0170 0000000" },
    kennzeichen: [
      { de: "Betreuung eingerichtet", en: "Legal guardianship in place" },
      { de: "Sturzgefahr", en: "Risk of falls" }
    ],
    journal: {
      logo: [
        { datum: "16.09.2026", kuerzel: "SAI", text: { de: "Kostform auf pürierte Kost angepasst, Trinkmenge weiterhin gering.", en: "Diet adjusted to pureed food; fluid intake still low." } },
        { datum: "21.09.2026", kuerzel: "SAI", text: { de: "Andickungsmittel wird toleriert, kein Hinweis auf Aspiration.", en: "Thickening agent is tolerated; no signs of aspiration." } }
      ],
      ergo: [
        { datum: "18.09.2026", kuerzel: "BRI", text: { de: "Esstraining mit angepasstem Besteck, Ausdauer ca. 10 Minuten.", en: "Eating training with adapted cutlery; endurance approx. 10 minutes." } }
      ],
      physio: [
        { datum: "16.09.2026", kuerzel: "OST", text: { de: "Gehstrecke 10 m mit Rollator und Begleitung.", en: "Walking distance 10 m with rollator and supervision." } },
        { datum: "19.09.2026", kuerzel: "OST", text: { de: "Sturzprophylaxe mit Pflege abgestimmt, Hüftprotektoren angepasst.", en: "Fall prevention agreed with nursing staff; hip protectors fitted." } }
      ],
      psycho: [
        { datum: "17.09.2026", kuerzel: "STE", text: { de: "Zeitliche und örtliche Orientierung eingeschränkt, Tagesstruktur empfohlen.", en: "Orientation to time and place impaired; daily structure recommended." } }
      ]
    }
  }
];
