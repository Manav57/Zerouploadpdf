import type { Loc } from './types';

export const loc: Loc = {
  code: 'de',
  base: '/de',
  label: 'Deutsch',

  meta: {
    title: 'PDF zu Excel & CSV — ZeroUploadPDF konvertiert im Browser',
    description:
      'Gescannte PDFs in Excel umwandeln, mit täglich kostenloser OCR. Native PDFs werden im Browser geparst, ohne Upload und ohne Konto für eine einmalige Konvertierung.',
    imageAlt: 'ZeroUploadPDF — gescannte PDFs in Excel im Browser umwandeln',
  },

  nav: {
    convert: 'Konvertieren',
    how: 'So funktioniert es',
    questions: 'Fragen',
    pricing: 'Preise',
    privacy: 'Datenschutz',
    cta: 'PDF konvertieren',
  },

  hero: {
    badge: 'PDF → Excel / CSV · Datenschutz zuerst',
    h1a: 'Deine Datei verlässt',
    h1b: 'deinen Browser nie.',
    subLead:
      'ZeroUploadPDF wandelt PDFs in Excel und CSV auf deinem eigenen Gerät um. Native PDFs werden direkt hier, im Tab, geparst — kein Upload, kein Warten auf einen Server.',
    subNative: 'Gescannte Dateien nutzen eine',
    subOcr: 'täglich kostenlose OCR',
    subTail: ' und wird sofort nach Abschluss gelöscht.',
    cta: 'PDF kostenlos konvertieren',
    how: 'So funktioniert es',
    trust: ['Kein Konto für einmalige Konvertierungen', 'Nichts wird gespeichert', '10 kostenlose Konvertierungen täglich'],
    converterEyebrow: 'Gleich hier ausprobieren',
  },

  how: {
    eyebrow: 'So funktioniert es',
    titleA: 'Gescannte PDFs in Excel umwandeln',
    titleB: ' — mit täglich kostenloser OCR.',
    lede: 'Das Dokument entscheidet. Textbasierte PDFs bleiben auf deinem Gerät; echte Scans machen einen kurzen, dokumentierten Ausflug hin und zurück.',
    pathAName: 'Weg A · Natives PDF',
    pathBName: 'Weg B · Gescanntes PDF',
    nativeSteps: [
      'Ziehe dein PDF in den Konverter.',
      'Text und Tabellen werden im Browser extrahiert, mit der CPU deines Geräts.',
      'Vorschau der Tabelle, dann .xlsx oder .csv herunterladen.',
    ],
    scannedSteps: [
      'Seiten werden als Bilder erkannt, nicht als Text.',
      'Nur die gescannten Seiten gehen an unseren OCR-Dienst — sofort gelöscht, wenn die Erkennung fertig ist.',
      'Die erkannten Tabellen kehren in deinen Tab zurück, bereit zur Vorschau und zum Download.',
    ],
    nativeFooter: 'Nichts verlässt den Tab',
    scannedFooter: 'Hin und zurück — der kürzeste mögliche Weg',
    bottom: 'Beide Wege enden mit einer Tabellenvorschau. Du lädst nie blind herunter.',
    open: 'Konverter öffnen →',
  },

  comparison: {
    eyebrow: 'Der Unterschied',
    titleA: 'Kein Upload ist kein Feature.',
    titleB: ' Es ist die Architektur.',
    lede: 'Die Tabelle unten vergleicht uns mit einem typischen Online-Konverter. Entscheidend sind Limits, OCR und was mit deiner Datei nach dem Schließen des Tabs passiert.',
    colUs: 'ZeroUploadPDF',
    colThem: 'Typischer Online-Konverter',
    featureCol: 'Vergleich',
    rows: [
      { feature: 'Wo die Konvertierung passiert', us: 'In deinem Tab, auf deiner Hardware', them: 'Auf ihren Servern' },
      { feature: 'Dein PDF nach der Konvertierung', us: 'Nur im Speicher — verworfen, nie gespeichert', them: 'Hochgeladen, nach ~1 Std. auto-gelöscht' },
      { feature: 'OCR (Gescannte PDFs) im Gratisplan', us: 'In deinen 10 täglichen Konvertierungen enthalten', them: 'Hinter bezahlter Probe versteckt' },
      { feature: 'Gratis-Limits', us: 'Genau 10 Konvertierungen/Tag, offen ausgewiesen', them: 'Vage tägliche Limits' },
      { feature: 'Anmeldung für eine einzelne Konvertierung', us: 'Nie nötig', them: 'Nicht nötig — deine Datei wird trotzdem hochgeladen' },
      { feature: 'Große gescannte Dateien', us: 'Streaming-OCR bis 400 Seiten', them: 'OCR scheitert bei großen Scans oft' },
      { feature: 'Vorschau vor dem Download', us: 'Tabellen-Vorschau integriert', them: 'Blind downloaden und hoffen' },
    ],
    noteA:
      'Wir nennen hier keinen konkreten Dienst — wir wenden den Standard an, den jeder von ihnen ablehnen würde:',
    noteB: 'nenne die Dateibehandlung und deine Limits in klaren Zahlen.',
  },

  trust: {
    eyebrow: 'Sicherheit & Vertrauen',
    titleA: 'Keine „Upload-und-lösch“-Geschichte.',
    titleB: ' Eine Ohne-Upload-Geschichte.',
    lede: 'Andere werben damit, deine Datei nach einer Stunde zu löschen. Wir hätten sie lieber gar nicht.',
    cards: [
      { title: 'Auf deinem Gerät geparst', body: 'Textbasierte PDFs werden in deinem Browser gelesen und analysiert, mit deiner CPU. Die Bytes reisen nie.' },
      { title: 'Nichts wird gespeichert', body: 'Kein Konto, kein Verlauf, keine Serverkopie. Schließt der Tab, verschwindet die Datei mit ihm.' },
      { title: 'OCR löscht sich selbst', body: 'Gescannte Seiten gehen an den OCR-Dienst, werden erkannt und anschließend gelöscht. Kein Archiv.' },
      { title: 'Keine Anmeldefalle', body: 'Eine einzelne Konvertierung funktioniert immer ohne Konto. Die Anmeldung ist optional, für höhere Limits.' },
    ],
    calloutTitle: 'Der Unterschied ist entscheidend.',
    callout:
      '„Nach einer Stunde gelöscht“ bedeutet, dass die Datei auf einem Server war. Unsere ist es nie — native PDFs verlassen den Browser nicht, und gescannte Seiten existieren auf dem OCR-Dienst nur für die Sekunden des Lesens, nicht länger.',
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    titleA: 'Oft gefragt, ',
    titleB: 'klar beantwortet.',
    more: 'Alle 13 Fragen lesen →',
    moreLead: 'Mehr Details zu jeder Antwort?',
  },
  faqs: [
    {
      q: 'Was bedeutet „kein Upload“ konkret für mein PDF?',
      a: 'Wenn du ein textbasiertes PDF einfügst, wird die Datei direkt in deinem Browser-Tab geöffnet und geparst. Sie wird von deiner Festplatte in den Speicher deines Geräts gelesen, dort konvertiert und nie übertragen. „Kein Upload“ beschreibt genau das: Die Bytes deines Dokuments reisen zu keinem Server.',
    },
    {
      q: 'Werden meine Dateien nach der Konvertierung gespeichert?',
      a: 'Nein. Native Konvertierungen passieren im Speicher, und die Datei wird verworfen, wenn der Tab schließt. Bei Scans, die zur OCR gehen, wird das Bild nur so lange gehalten, bis der Text erkannt ist, und dann gelöscht — wir speichern, archivieren oder trainieren nicht mit deinen Dokumenten.',
    },
    {
      q: 'Was passiert, wenn mein PDF ein Scan oder Fotos enthält?',
      a: 'Ein Scan ist ein Bild einer Seite, und Bilder haben keinen „Text“, den ein Browser lesen kann. Um ein gescanntes PDF in Excel umzuwandeln, erkennen wir, dass die Datei bildbasiert ist, und wechseln zur OCR — optische Zeichenerkennung —, die die Buchstaben aus dem Bild liest. Das ist der einzige Fall, in dem deine Datei den Browser verlässt, weil die Erkennung Rechenleistung braucht, die wir nicht sicher in großem Maßstab clientseitig ausführen können.',
    },
    {
      q: 'Ist OCR im Gratisplan enthalten?',
      a: 'Ja. OCR ist hier keine Bezahlfunktion. Gratis enthält alles in einem klaren Limit: 10 Konvertierungen täglich, für PDF, Word, PowerPoint und Bilder — nativ wie gescannt. Pro hebt das auf unbegrenzt. Viele Konverter verstecken OCR hinter einer bezahlten Probe; wir nennen die Zahl schlicht.',
    },
    {
      q: 'Muss ich ein Konto erstellen, um zu konvertieren?',
      a: 'Nein. Eine einzelne Konvertierung erfordert nie eine Anmeldung — weder für native Dateien noch für Scans. Konten gibt es nur für Pro-Abonnenten, die Batch-Verarbeitung, höhere Limits und einen Verlauf wollen. Deine 10 kostenlosen täglichen Konvertierungen nutzt du ohne Konto.',
    },
    {
      q: 'Wie lautet das exakte Gratis-Limit?',
      a: 'Gratis: 10 Konvertierungen pro Tag über jedes unterstützte Format — PDF, DOCX, DOC, PPTX, PPT, JPG und PNG. Das Limit setzt sich um Mitternacht UTC zurück. Pro: unbegrenzte Konvertierungen, jede bis 400 Seiten. Da das Parsen auf deiner Hardware läuft, begrenzt eher dein Browser die praktische Dateigröße als unser Kontingent.',
    },
    {
      q: 'Wie handhabt ihr große gescannte PDFs?',
      a: 'Scans werden in Streaming-Batches verarbeitet statt vollständig geladen — der übliche Schwachpunkt von Server-OCR. Bei Pro konvertieren Dateien bis 400 Seiten ohne die Timeouts, die andere bei großen Scans plagen.',
    },
    {
      q: 'Warum muss ein gescanntes PDF den Browser überhaupt verlassen?',
      a: 'Ehrliche Antwort: Texterkennung aus Bildern ist teuer. Das in großem Maßstab gut zu machen, erfordert ein trainiertes Modell und die Rechenleistung, es auszuführen. Da wir keine Modelle still auf deinem Gerät laufen lassen wollen, indem wir deine Daten heimlich versenden, ist der Tausch transparent: Dein Scan geht an einen dedizierten OCR-Endpunkt, wird verarbeitet und unmittelbar danach gelöscht. Deine nativen PDFs machen diese Reise nie.',
    },
    {
      q: 'Welche Formate kann ich konvertieren?',
      a: 'PDF, Word (DOCX und DOC), PowerPoint (PPTX und PPT) sowie die Bilder JPG und PNG. Ausgabe ist Excel (.xlsx) oder CSV (.csv). Jede Datei zählt gleich in deinem Tageslimit: eine Datei, eine Konvertierung — ein Scan und ein natives Word werden von den 10 gratis gleichermaßen abgedeckt.',
    },
    {
      q: 'Zählt das Limit Seiten oder Dateien?',
      a: 'Dateien. Jedes Dokument, das du konvertierst — ob eine Seite oder dreihundert —, ist eine Konvertierung. Das Gratis-Limit sind also 10 Dateien pro Tag über alle Formate, und ein natives PDF mit 200 Seiten zählt als eine. Bei Pro zählt ein Batch mit bis zu 20 Dateien als 20 Konvertierungen, ohne Tageslimit.',
    },
    {
      q: 'Bleibt das Format meiner Tabellen erhalten?',
      a: 'Der Konverter rekonstruiert das Tabellenraster selbst: Spalten, Zeilen und Zellgrenzen werden aus dem Layout erkannt, nicht aus Absätzen geraten. Die Vorschau zeigt dir das Ergebnis vor dem Download. Fidelity — zusammengeführte Zellen, Spaltenbreiten — bleibt in der Vorschau und in der Excel-Datei erhalten; CSV ist bewusst reiner Text, weil genau das es universell macht.',
    },
    {
      q: 'Welche Browser und Geräte werden unterstützt?',
      a: 'Der Konverter läuft in aktuellen Versionen von Chrome, Edge, Firefox und Safari. Weil das Parsen im Browser stattfindet, funktioniert er unter Windows, macOS, Linux sowie iOS- und Android-Tablets — ganz ohne Installation. Sehr alte Browser (vor 2021) könnten Funktionen des PDF-Parsers vermissen.',
    },
    {
      q: 'Verkauft oder teilt ihr meine Dokumente?',
      a: 'Nein. Native Dateien erreichen nie einen Server, also gibt es nichts zu verkaufen oder zu teilen. OCR-Scans werden erkannt und danach gelöscht, ohne in einen Langzeitspeicher geschrieben zu werden — wir archivieren nicht und trainieren keine Modelle mit Nutzerdokumenten. Der einzige Dritte, der eine Datei sieht, ist der OCR-Endpunkt.',
    },
  ],

  pricing: {
    metaTitle: 'Preise — kostenlose PDF-Konvertierung im Browser, Pro für viel OCR',
    metaDesc: 'ZeroUploadPDF-Preise in klaren Zahlen: Gratis umfasst 10 Konvertierungen täglich für PDF, Word, PowerPoint und Bilder. Pro kostet 9 $/Monat oder 6 $/Monat bei Jahreszahlung für unbegrenzte Konvertierungen.',
    eyebrow: 'Preise',
    titleA: 'Klare Zahlen, ',
    titleB: 'keine Sternchen.',
    lede: 'Gratis deckt einen echten Workflow ab — 10 Konvertierungen täglich über alle Formate. Pro existiert für alle, die täglich konvertieren.',
    free: {
      name: 'Gratis',
      tagline: 'Ein funktionierendes Produkt, kein Test: 10 Konvertierungen am Tag, jeden Tag.',
      features: [
        { text: 'PDF, Word, PowerPoint & Bilder zu Excel / CSV', detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG und PDF — ein gemeinsames Limit.' },
        { text: '10 Konvertierungen jeden Tag', detail: 'Ein gemeinsames Limit für native und gescannte Dateien. Reset um Mitternacht UTC.' },
        { text: 'Tabellen-Vorschau vor dem Download', detail: 'Prüfe die Extraktion, bevor du dich festlegst.' },
        { text: 'Kein Konto, kein Wasserzeichen, keine Überraschungen', detail: 'Einmalige Konvertierungen, Punkt.' },
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Alles aus Gratis, plus unbegrenzte Konvertierungen und Batch in großem Umfang.',
      popular: 'Am beliebtesten',
      perMo: '/Monat',
      orYear: 'oder ${yearly}/Monat bei jährlicher Abrechnung',
      features: [
        { text: 'Unbegrenzte Konvertierungen', detail: 'Native und gescannt, täglich, ohne Tageslimit.' },
        { text: 'Bis zu 400 Seiten pro Datei', detail: 'Streaming-OCR, das große Scans bewältigt.' },
        { text: 'Batch-Konvertierung — bis zu 20 Dateien', detail: 'Native und gescannt, gemischt.' },
        { text: 'Layouttreue Tabellenerkennung', detail: 'Erhält Layout, zusammengeführte Zellen und Spalten.' },
        { text: 'Priorisierte OCR-Warteschlange', detail: 'Deine Scans überspringen die Warteschlange an vollen Tagen.' },
      ],
    },
    plansNote:
      'Jeder Plan enthält natives Parsing im Browser, die Tabellen-Vorschau und keine erzwungene Anmeldung für einzelne Konvertierungen.',
    limitsTitle: 'Alle Limits an einem Ort',
    limits: [
      { label: 'Ausgabeformate', value: '.xlsx und .csv' },
      { label: 'Seitenlimit native PDFs', value: '300 Seiten (je nach Browser)' },
      { label: 'Kostenloses Tageslimit', value: '10 Konvertierungen, jedes Format' },
      { label: 'Pro-Limit', value: 'Unbegrenzt, ≤ 400 Seiten je Datei' },
      { label: 'Batch', value: 'Nur Pro, ≤ 20 Dateien / Durchlauf' },
      { label: 'Speicherung', value: 'Nichts wird gespeichert. Nie.' },
    ],
    cta: 'Kostenlos starten',
    noCard: 'Keine Karte nötig · nichts zu installieren',
    noteHeading: 'Was das Bezahlen wirklich bringt',
    noteSub: 'Drei Dinge ändert Pro — Menge, Größe und Wartezeit.',
    notes: [
      {
        icon: 'check',
        title: 'Kostenlos starten, kostenlos bleiben',
        body: 'Der kostenlose Plan ist ein vollwertiges Produkt, keine Testversion. 10 Konvertierungen pro Tag über alle Formate, dauerhaft.',
      },
      {
        icon: 'lock',
        title: 'Ihre Dokumente berühren niemals die Abrechnung',
        body: 'Die Zahlung übernimmt Stripe. Ihre PDFs sind nie mit Konto, E-Mail oder Zahlungshistorie verknüpft.',
      },
      {
        icon: 'refresh',
        title: 'Jederzeit kündbar',
        body: 'Monatlich oder jährlich, in zwei Klicks kündigen. Beim Downgrade bleiben Ihre bisherigen Konvertierungen erhalten; nichts wird einbehalten.',
      },
    ],
    contact: 'Fragen zu einem Teamplan, Rechnungen für Ihre Buchhaltung oder ein knappes OCR-Budget? Schreiben Sie an',
  },

  cta: {
    eyebrow: 'Bereit, wenn du es bist',
    title: 'Jetzt testen. Nichts installieren, nichts hochladen.',
    sub: 'Leg ein PDF in den Konverter und sieh die extrahierte Tabelle vor dem Download. Native Dateien verlassen deinen Browser nie — genau darum geht es.',
    convert: 'PDF konvertieren',
    explainer: 'Den Zero-Upload-Explainer lesen',
    stats: [
      { v: '0', label: 'Dateien für native PDFs hochgeladen' },
      { v: '10', label: 'kostenlose Konvertierungen pro Tag' },
      { v: '100%', label: 'Vorschau vor dem Download' },
    ],
  },

  footer: {
    blurb:
      'PDF zu Excel und CSV, konvertiert dort, wo es zählt — auf deinem Gerät. Native PDFs verlassen deinen Browser nie; nur echte Scans erreichen unseren OCR-Dienst.',
    convertHeading: 'Konvertieren',
    productHeading: 'Produkt',
    companyHeading: 'Unternehmen',
    links: {
      pdfExcel: 'PDF zu Excel',
      pdfCsv: 'PDF zu CSV',
      scannedOcr: 'Gescannte PDFs (OCR)',
      how: 'So funktioniert es',
      questions: 'Fragen und Antworten',
      pricing: 'Preise',
      privacy: 'Datenschutz & Zero-Upload',
      terms: 'Nutzungsbedingungen',
      refunds: 'Erstattungsrichtlinie',
      contact: 'Kontakt',
    },
    footerTagline: 'Keine Uploads. Keine Konten. Keine Serverkopien.',
  },

  convert: {
    metaTitle: 'PDF zu Excel-Konverter — kostenlos, in deinem Browser',
    metaDesc:
      'PDF kostenlos in Excel oder CSV konvertieren. Native PDFs werden komplett in deinem Browser geparst, ohne Upload; Scans nutzen tägliche kostenlose OCR. Vorschau vor dem Download.',
    intro: {
      eyebrow: 'Konverter',
      title: 'PDF zu Excel und CSV — ohne den Upload.',
      lede: 'Leg unten eine Datei ab. Textbasierte PDFs werden auf diesem Gerät geparst — dein Dokument verlässt deinen Browser nie. Scans machen eine kurze, dokumentierte Reise zur OCR und werden gelöscht, sobald sie fertig ist.',
    },
    notes: [
      'PDF ab 2008, digital signiert oder digital entstanden → lokal geparst',
      'Gescannte oder fotografierte Seiten → kostenloses OCR-Kontingent',
      'Kein Konto, kein Wasserzeichen, keine Serverkopie',
    ],
  },

  questions: {
    metaTitle: 'Fragen und Antworten — ZeroUploadPDF',
    metaDesc:
      'Jede Frage zu ZeroUploadPDF, klar beantwortet: was kein Upload bedeutet, wie das Limit von 10 kostenlosen Konvertierungen pro Tag funktioniert, OCR, Formate und Datenschutz.',
    intro: {
      eyebrow: 'Fragen und Antworten',
      titleA: 'Alles, ',
      titleB: 'klar beantwortet.',
      lede: 'Dieselben ehrlichen Antworten wie auf der Startseite, gesammelt auf einer Seite — mit allen Details zu Datenschutz und Limit.',
    },
    note:
      'Ist noch etwas unklar? Die Datenschutzerklärung geht in die technische Tiefe und die Preise vergleichen die Gratis- und Pro-Limits Seite an Seite.',
  },

  privacy: {
    metaTitle: 'Datenschutz — die Zero-Upload-Architektur, einfach erklärt',
    metaDesc:
      'Wie ZeroUploadPDF deine PDFs schützt: native Dateien werden komplett in deinem Browser geparst und nie hochgeladen; Scans gehen nur zur OCR und werden sofort gelöscht. Kein Speichern, kein Training mit deinen Daten.',
    intro: {
      eyebrow: 'Datenschutz & Architektur',
      title: 'Zero Upload, in einfacher Sprache erklärt.',
      lede: 'Die meisten PDF-Tools bewerben, dass sie deine Datei nach einer Stunde löschen. Unseres hat für native PDFs nichts zu löschen und hält gescannte Seiten nur für die Sekunden der OCR. Diese Seite zeigt die gesamte Architektur, genau wie sie funktioniert.',
    },
    nativeH: 'Der private Weg: ein natives PDF',
    nativeLead:
      'Wenn dein PDF digital entstanden ist — ein aus einer Textverarbeitung exportierter Bericht, ein Kontoauszug, ein von Software generiertes Formular — enthält es eine Textebene, die der Browser lesen kann. Das ist die gesamte Konvertierung, und sie passiert dort, wo die Datei bereits ist: auf deinem Gerät.',
    nativeSteps: [
      { t: 'Das PDF wird auf deinem Gerät ausgewählt.', b: 'Die Datei wird in den Speicher des Browsers gelesen. Sie reist nie übers Netz.' },
      { t: 'Tabellen werden lokal erkannt.', b: 'Text, Spalten und Ausrichtung werden mit der CPU deines Geräts analysiert.' },
      { t: 'Du siehst die Tabellenvorschau.', b: 'Die Extraktion erscheint im Tab, damit du sie prüfst, bevor etwas gespeichert wird.' },
      { t: 'Du lädst die Arbeitsmappe herunter.', b: 'Die .xlsx oder .csv wird in deinem Browser erzeugt und dort gespeichert, wo du willst.' },
      { t: 'Der Tab schließt.', b: 'Die Datei verlässt den Speicher. Keine Kopie existiert woanders, denn nie wurde eine erstellt.' },
    ],
    scannedH: 'Die ehrliche Ausnahme: ein gescanntes PDF',
    scannedLead:
      'Ein Scan ist ein Foto einer Seite. Fotos enthalten keinen Text, den ein Browser lesen kann, und Buchstaben in einem Bild zu erkennen erfordert ein trainiertes Modell und echte Rechenleistung. Dieser eine Fall macht also eine Reise — so kurz wie möglich — und wird bei der Ankunft gelöscht.',
    scannedSteps: [
      { t: 'Seiten werden als Bilder erkannt.', b: 'Ein gescanntes PDF hat keine Textebene; wir identifizieren es als bildbasiert — am selben Schritt, wo ein natives lokal geparst wird.' },
      { t: 'Nur Bildseiten gehen an die OCR.', b: 'Die Pixel reisen zu unserem OCR-Endpunkt — nie deine komplette Dokumenthistorie, nie die extrahierten Tabellen.' },
      { t: 'Text kommt zurück, Seiten werden gelöscht.', b: 'Die Erkennung endet und die gescannten Bilder werden serverseitig sofort gelöscht. Nichts wird archiviert oder zwischengespeichert.' },
      { t: 'Die Erkennung wird als Vorschau gerendert.', b: 'Derselbe Vorschauschritt wie bei nativen Dateien, damit du vor dem Download die Genauigkeit prüfst.' },
    ],
    scannedNote:
      'Deshalb hat der Gratisplan überhaupt erst ein explizites Tageslimit — jede gescannte Seite, die wir verarbeiten, kostet Rechenleistung. Darum deckeln wir das ganze Produkt bei 10 Konvertierungen am Tag, gratis, unbegrenzt mit Pro. Wir nennen die Zahl lieber offen, als die Kosten woanders still zu verstecken.',
    neverH: 'Was wir nie tun',
    never: [
      'Deine PDFs, extrahierten Tabellen oder OCR-Texte auf einem von uns kontrollierten Server speichern.',
      'Deine Dokumente für Training, Analyse oder Werbung verwenden.',
      'Gescannte Seiten nach Abschluss der Erkennung aufbewahren.',
      'Für eine einzelne Konvertierung ein Konto, eine E-Mail oder eine Anmeldung verlangen.',
      'Deine Daten zu Marketingzwecken verkaufen oder an Dritte weitergeben.',
    ],
    collectH: 'Was wir sammeln',
    collect: [
      'Für einzelne Konvertierungen: nichts. Kein Konto, keine an dein Dokument geknüpfte Telemetrie, keine Liste „zuletzt hochgeladen“ mit Löschknopf — denn es gibt nichts zu löschen.',
      'Für ein Pro-Konto: eine E-Mail-Adresse und einen Stripe-Kundendatensatz für die Abrechnung. Nutzungszähler (Konvertierungen pro Tag) werden gespeichert, um das tägliche Gratis-Limit durchzusetzen. Ein Pro-Konto erhält nie deine Dokumente — deine Dateien bleiben auf deinem Gerät und sind nie mit deinem Konto verknüpft.',
      'Der OCR-Endpunkt empfängt Bildseiten, sonst nichts. Diese Bilder werden verarbeitet und purgiert, ohne jede Verbindung zu E-Mail, Konto oder Konvertierungsverlauf.',
      'Diese Seite nutzt keine Werbe-Tracker, und unsere Seiten laden keine Drittanbieter-Skripte außer Stripe auf der Abrechnungsseite.',
    ],
    rightsH: 'Deine Rechte und wie du uns erreichst',
    rights: [
      'Wenn du ein Konto hast, kannst du es (samt aller gespeicherten Daten) jederzeit exportieren oder löschen. Da Dokumente nie gespeichert werden, gibt es nichts Weiteres zu löschen — das ist das Prinzip, kein Bug.',
      'Fragen zur Datenverarbeitung für deine Organisation oder eine laufende Konvertierung: schreib an privacy@zerouploadpdf.com.',
      'Diese Architektur ist gewollt. Wir haben sie so gebaut, weil „lade es hoch, dann versprechen wir dir, es zu löschen“ eine Vertrauenslüge ist, die wir nicht erzählen wollten. Zero Upload ist kein Aufkleber — es ist, wie die Software gebaut ist.',
    ],
    ctaH: 'Überzeug dich selbst — konvertiere jetzt ein PDF.',
    cta: 'Konverter öffnen',
  },

  conv: {
    eyebrow: 'Live-Konverter',
    aria: 'PDF- und Office-zu-Excel-Konverter',
    header: 'PDF · Word · PowerPoint → Excel / CSV',
    zeroUpload: 'Zero-Upload',
    dropTitle: 'Dokument hier ablegen',
    dropSub: 'oder auf deinem Gerät wählen',
    browse: 'Dateien wählen',
    inputAria: 'Eine PDF-, Word-, PowerPoint- oder Bilddatei wählen',
    formatsAria: 'Unterstützte Formate',
    outLegend: 'Ausgabeformat',
    xlsx: 'Excel .xlsx',
    csv: 'CSV .csv',
    note: 'Textdateien werden auf diesem Gerät geparst. Scans laufen durch die OCR und werden sofort gelöscht.',
    allowance: 'Tageslimit',
    complete: 'Konvertierung abgeschlossen',
    sheet: 'Blatt ·',
    rowsLabel: 'Zeilen',
    downloadXlsx: '.xlsx herunterladen',
    downloadCsv: '.csv herunterladen',
    convertAnother: 'Weiteres konvertieren',
    retry: 'Erneut versuchen',
    startOver: 'Neu beginnen',
    errorTitle: 'Diese Datei konnte nicht gelesen werden',
    clientSide: 'Läuft clientseitig, wo möglich',
    footerRight: 'Keine Server für Textdateien. 10 Konvertierungen/Tag gratis.',
    upgradeTitle: 'Tageslimit erreicht',
    upgradeBody:
      'Du hast alle 10 kostenlosen Konvertierungen für heute genutzt. Das Limit setzt sich um Mitternacht UTC zurück — oder wechsle zu Pro für unbegrenzte Konvertierungen ohne Tageslimit.',
    seePro: 'Pro-Preise ansehen',
    remindLater: 'Später erinnern',
  },

  terms: {
    metaTitle: 'Nutzungsbedingungen — ZeroUploadPDF',
    metaDesc:
      'Die Bedingungen für die Nutzung von ZeroUploadPDF: wie der Konverter funktioniert, wie Ihre Dateien behandelt werden und welche Grenzen für Gratis und Pro gelten.',
    intro: {
      eyebrow: 'Nutzungsbedingungen',
      title: 'Die Regeln, nach denen wir arbeiten.',
      lede: 'Kurze Seite, verständliche Sprache. Zuletzt aktualisiert am 5. September 2026.',
    },
    sections: [
      {
        h: '1. Der Dienst',
        ps: [
          'ZeroUploadPDF wandelt PDF-, Word-, PowerPoint- und Bilddateien in Excel (.xlsx) oder CSV (.csv) um. Natürliche Textdokumente werden in Ihrem Browser verarbeitet; gescannte Dateien nutzen einen OCR-Dienst, der den Text erkennt und die Bilder sofort danach löscht.',
          'Das Gratis-Angebot umfasst 10 Umwandlungen pro Tag, über alle Formate. Pro entfernt das Tageslimit und ergänzt Stapelverarbeitung sowie höhere Seitengrenzen.',
        ],
      },
      {
        h: '2. Ihre Dateien',
        ps: [
          'Natürliche PDFs werden auf Ihrem Gerät geparst und verlassen es nie. Nur Scan-Seiten, die wirklich OCR brauchen, gehen zu unserem Erkennungsdienst, wo sie verarbeitet, gelöscht und weder gespeichert, archiviert noch für Training genutzt werden.',
          'Wenn der Browser-Tab geschlossen wird, verschwinden die Daten der Umwandlung aus dem Speicher. Sie sind dafür verantwortlich, eigene Kopien der konvertierten Dokumente aufzubewahren.',
        ],
      },
      {
        h: '3. Konten und Zahlung',
        ps: [
          'Eine einzelne Umwandlung erfordert nie ein Konto. Pro-Abos werden beim Checkout erworben, monatlich oder jährlich von Stripe abgerechnet und können jederzeit gekündigt werden. Ihre Dokumente werden nie mit Ihrem Zahlungsverlauf verknüpft.',
          'Sie stimmen zu, genaue Zahlungsdaten anzugeben und nur Zahlungsmittel zu verwenden, zu deren Nutzung Sie berechtigt sind.',
        ],
      },
      {
        h: '4. Zulässige Nutzung',
        ps: [
          'Laden Sie nur Dokumente hoch, auf die Sie zugreifen und die Sie umwandeln dürfen. Nutzen Sie den Dienst nicht für rechtswidrige Zwecke, um die veröffentlichten Kontingente mit Skripten oder Bots zu umgehen, oder um den Dienst für andere zu stören.',
        ],
      },
      {
        h: '5. Verfügbarkeit und Haftung',
        ps: [
          'Der Dienst wird „wie besehen" und ohne Gewährleistung jeglicher Art bereitgestellt. Die Qualität der Umwandlung hängt von Dokument und Browser ab; die automatische Extraktion kann Inhalte übersehen oder fehllesen — prüfen Sie wichtige Tabellen, bevor Sie ihnen vertrauen.',
          'Soweit gesetzlich zulässig, haftet ZeroUploadPDF nicht für mittelbare oder Folgeschäden, einschließlich entgangener Daten oder Gewinne, die aus der Nutzung des Dienstes entstehen. Nichts, was der Dienst erzeugt, stellt eine professionelle, rechtliche oder finanzielle Beratung dar.',
        ],
      },
      {
        h: '6. Änderungen dieser Bedingungen',
        ps: [
          'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Änderungen gelten ab ihrer Veröffentlichung auf dieser Seite; die weitere Nutzung des Dienstes gilt als Zustimmung. Wir können den Zugang bei missbräuchlicher Nutzung nach eigenem Ermessen einschränken, aussetzen oder beenden.',
        ],
      },
      {
        h: '7. Kontakt',
        ps: [
          'Fragen zu diesen Bedingungen? Schreiben Sie an hello@zerouploadpdf.com — wir antworten innerhalb weniger Werktage.',
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Erstattungsrichtlinie — ZeroUploadPDF',
    metaDesc:
      'Die Erstattungsbedingungen von ZeroUploadPDF in klaren Zahlen: jederzeit kündbar, volle Rückerstattung des ungenutzten Zeitraums innerhalb von 14 Tagen, und wie ausgezahlt wird.',
    intro: {
      eyebrow: 'Erstattungen',
      title: 'Erstattungsbedingungen in klaren Zahlen.',
      lede: 'Software zu verkaufen ist einfacher, wenn die Richtlinie von Anfang an klar ist. Hier ist unsere. Zuletzt aktualisiert am 5. September 2026.',
    },
    sections: [
      {
        h: 'So funktioniert die Kündigung',
        ps: [
          'Pro wird monatlich oder jährlich abgerechnet. Sie können jederzeit kündigen; der Zugang bleibt bis zum Ende des bezahlten Zeitraums bestehen.',
          'Innerhalb von 14 Tagen nach einer Zahlung erhalten Sie von uns auf Anfrage die volle Erstattung des ungenutzten Teils dieses Zeitraums. Danach erstatten wir nach eigenem Ermessen, etwa wenn ein technischer Fehler Ihre Umwandlungen verhinderte.',
        ],
      },
      {
        h: 'Wie Erstattungen ausgezahlt werden',
        ps: [
          'Genehmigte Erstattungen gehen an das ursprüngliche Zahlungsmittel zurück. Je nach Kartenherausgeber kann es 5–10 Werktage dauern, bis sie auf Ihrem Kontoauszug erscheinen.',
        ],
      },
      {
        h: 'Das Gratis-Angebot',
        ps: [
          'Erstattungen gelten nur für bezahlte Pro-Gebühren. Das tägliche Gratis-Kontingent ist kein Kauf — dort gibt es nichts zu erstatten.',
        ],
      },
      {
        h: 'Beanstandungen',
        ps: [
          'Wenn Sie eine falsche Belastung vermuten, kontaktieren Sie uns zuerst unter hello@zerouploadpdf.com. Wir klären das direkt, bevor Sie die Sache an Ihre Bank eskalieren.',
        ],
      },
    ],
  },
};