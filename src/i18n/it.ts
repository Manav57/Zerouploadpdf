import type { Loc } from './types';

export const loc: Loc = {
  code: 'it',
  base: '/it',
  label: 'Italiano',

  meta: {
    title: 'PDF in Excel e CSV — ZeroUploadPDF converte nel tuo browser',
    description:
      'Converti un PDF scansionato in Excel con OCR gratuita ogni giorno. I PDF nativi vengono analizzati nel tuo browser, senza upload e senza account per una conversione singola.',
    imageAlt: 'ZeroUploadPDF — converti un PDF scansionato in Excel nel tuo browser',
  },

  nav: {
    convert: 'Converti',
    how: 'Come funziona',
    questions: 'Domande',
    pricing: 'Prezzi',
    privacy: 'Privacy',
    cta: 'Converti un PDF',
  },

  hero: {
    badge: 'PDF → Excel / CSV · privacy al primo posto',
    h1a: 'Il tuo file non',
    h1b: 'esce mai dal tuo browser.',
    subLead:
      'ZeroUploadPDF converte PDF in Excel e CSV sul tuo dispositivo. I PDF nativi vengono analizzati qui, nella scheda — zero upload, zero attese su un server.',
    subNative: 'I file scansionati usano OCR',
    subOcr: 'gratuita ogni giorno',
    subTail: ' e cancellata appena finisce.',
    cta: 'Converti un PDF gratis',
    how: 'Come funziona',
    trust: ['Nessun account per conversioni singole', 'Nulla viene salvato', '10 conversioni gratuite al giorno'],
    converterEyebrow: 'Provalo qui',
  },

  how: {
    eyebrow: 'Come funziona',
    titleA: 'Converti un PDF scansionato in Excel',
    titleB: ' — con OCR gratuita ogni giorno.',
    lede: 'È il documento a scegliere la via. I PDF testuali restano sul tuo computer; le scansioni vere fanno un breve viaggio documentato, andata e ritorno.',
    pathAName: 'Percorso A · PDF nativo',
    pathBName: 'Percorso B · PDF scansionato',
    nativeSteps: [
      'Trascina il tuo PDF nel convertitore.',
      'Testo e tabelle vengono estratti nel browser, usando la CPU del tuo dispositivo.',
      'Anteprima della tabella estratta, poi scarica .xlsx o .csv.',
    ],
    scannedSteps: [
      'Le pagine vengono riconosciute come immagini, non come testo.',
      'Solo le pagine scansionate vanno al nostro servizio OCR — cancellate appena finisce il riconoscimento.',
      'Le tabelle riconosciute tornano nella tua scheda, pronte per l’anteprima e il download.',
    ],
    nativeFooter: 'Nulla esce dalla scheda',
    scannedFooter: 'Andata e ritorno: il viaggio più breve possibile',
    bottom: 'Entrambe le strade finiscono con un’anteprima della tabella. Non scarichi mai alla cieca.',
    open: 'Apri il convertitore →',
  },

  comparison: {
    eyebrow: 'La differenza',
    titleA: 'Zero upload non è una funzionalità.',
    titleB: ' È l’architettura.',
    lede: 'La tabella qui sotto ci confronta con un tipico convertitore PDF-in-Excel online. Le righe che contano sono i limiti, l’OCR e cosa succede al tuo file dopo la chiusura della scheda.',
    colUs: 'ZeroUploadPDF',
    colThem: 'Convertitore online tipico',
    featureCol: 'Confronto',
    rows: [
      { feature: 'Dove avviene la conversione', us: 'Nella tua scheda, sul tuo hardware', them: 'Sui loro server' },
      { feature: 'Il tuo PDF dopo la conversione', us: 'Solo in memoria — scartato, mai salvato', them: 'Caricato e auto-eliminato dopo ~1 ora' },
      { feature: 'OCR (PDF scansionati) nel piano gratuito', us: 'Incluso nelle tue 10 conversioni quotidiane', them: 'Nascosto dietro una prova a pagamento' },
      { feature: 'Limiti del piano gratuito', us: 'Esattamente 10 conversioni/giorno, dichiarate', them: 'Limiti giornalieri vaghi' },
      { feature: 'Registrazione per una singola conversione', us: 'Mai richiesta', them: 'Non richiesta — ma il file viene comunque caricato' },
      { feature: 'Scansioni grandi', us: 'OCR in streaming fino a 400 pagine', them: 'L’OCR fatica spesso sulle scansioni grandi' },
      { feature: 'Anteprima prima del download', us: 'Anteprima tabella inclusa', them: 'Scarichi alla cieca e speri' },
    ],
    noteA:
      'Qui non facciamo nomi di servizi specifici — applichiamo lo standard che qualunque di loro rifiuterebbe:',
    noteB: 'dichiara il trattamento dei tuoi file e i tuoi limiti in numeri chiari.',
  },

  trust: {
    eyebrow: 'Sicurezza e fiducia',
    titleA: 'Non è una storia di “carica ed elimina”.',
    titleB: ' È una storia senza upload.',
    lede: 'Altri strumenti vantavano l’eliminazione del tuo file dopo un’ora. Noi preferiamo non averlo proprio.',
    cards: [
      { title: 'Analizzato sul tuo dispositivo', body: 'I PDF testuali vengono letti e analizzati nel tuo browser, con la tua CPU. I byte non viaggiano mai.' },
      { title: 'Nulla viene salvato', body: 'Nessun account, nessuna cronologia, nessuna copia sul server. Chiudi la scheda e il file sparisce con lei.' },
      { title: 'L’OCR si auto-cancella', body: 'Le pagine scansionate vanno al servizio OCR, vengono riconosciute e cancellate a fine lavoro. Nessun archivio.' },
      { title: 'Nessuna trappola di registrazione', body: 'Una conversione singola funziona sempre senza account. Registrarsi è opzionale, per limiti più alti.' },
    ],
    calloutTitle: 'La distinzione conta.',
    callout:
      '“Eliminato dopo un’ora” significa che il file è stato su un server. Il nostro non lo è mai — i PDF nativi non escono dal browser, e le pagine scansionate esistono sul servizio OCR solo per i secondi che servono a leggerle, niente di più.',
  },

  faq: {
    eyebrow: 'Domande frequenti',
    titleA: 'Chiedono spesso, ',
    titleB: 'rispondiamo chiaro.',
    more: 'Leggi le 13 domande →',
    moreLead: 'Vuoi più dettagli su ogni risposta?',
  },
  faqs: [
    {
      q: 'Cosa significa davvero “zero upload” per il mio PDF?',
      a: 'Quando trascini un PDF testuale, il file viene aperto e analizzato direttamente nella tua scheda. Viene letto dal disco nella memoria del tuo computer, convertito lì e mai trasmesso. “Zero upload” descrive esattamente questo: i byte del tuo documento non viaggiano verso alcun server.',
    },
    {
      q: 'I miei file vengono salvati dopo la conversione?',
      a: 'No. Le conversioni native avvengono in memoria e il file viene scartato alla chiusura della scheda. Per le scansioni inviate all’OCR, l’immagine viene trattenuta solo il tempo di riconoscere il testo e poi eliminata — non conserviamo, archiviamo né addestriamo con i tuoi documenti.',
    },
    {
      q: 'E se il mio PDF è una scansione o delle foto?',
      a: 'Una scansione è un’immagine di pagina, e le immagini non hanno “testo” che un browser possa leggere. Per convertire un PDF scansionato in Excel, rileviamo che il file è basato su immagine e passiamo all’OCR, che legge le lettere dall’immagine. È l’unico caso in cui il tuo file esce dal browser, perché il riconoscimento richiede una potenza che non possiamo eseguire in sicurezza lato client su scala.',
    },
    {
      q: 'L’OCR è incluso nel piano gratuito?',
      a: 'Sì. Qui l’OCR non è una funzione a pagamento. Il piano Gratuito include tutto dentro un’unica quota chiara: 10 conversioni al giorno che coprono PDF, Word, PowerPoint e immagini — native e scansionate. Pro la porta a illimitato. Molti convertitori nascondono l’OCR dietro una prova a pagamento; noi dichiariamo il numero senza giri di parole.',
    },
    {
      q: 'Devo creare un account per convertire?',
      a: 'No. Una conversione singola non richiede mai registrazione, né per file nativi né per scansioni. Gli account esistono solo per gli abbonati Pro che vogliono batch, limiti più alti e una cronologia. Puoi usare le tue 10 conversioni gratuite al giorno senza account.',
    },
    {
      q: 'Qual è esattamente il limite gratuito?',
      a: 'Gratis: 10 conversioni al giorno su ogni formato — PDF, DOCX, DOC, PPTX, PPT, JPG e PNG. La quota si azzera a mezzanotte UTC. Pro: conversioni illimitate, fino a 400 pagine ciascuna. Poiché l’analisi avviene sul tuo hardware, la dimensione pratica dipende dal browser, non dalla nostra quota.',
    },
    {
      q: 'Come gestite le scansioni grandi?',
      a: 'Le scansioni vengono elaborate a lotti in streaming, invece di essere caricate intere — il punto di rottura tipico degli OCR su server. Con Pro, file fino a 400 pagine si convertono senza i timeout che soffocano gli altri sulle scansioni grandi.',
    },
    {
      q: 'Perché un PDF scansionato deve uscire dal browser?',
      a: 'Risposta onesta: estrarre testo dalle immagini è costoso. Farlo bene su scala richiede un modello addestrato e la potenza per eseguirlo. Poiché rifiutiamo di far girare modelli sul tuo computer spedendo i tuoi dati in silenzio, siamo espliciti sul compromesso: la tua scansione va a un endpoint OCR dedicato, viene processata e cancellata subito dopo. I tuoi PDF nativi non fanno mai quel viaggio.',
    },
    {
      q: 'Quali formati posso convertire?',
      a: 'PDF, Word (DOCX e DOC), PowerPoint (PPTX e PPT), più le immagini JPG e PNG. L’uscita è Excel (.xlsx) o CSV (.csv). Ogni file conta allo stesso modo nella tua quota: un file, una conversione — quindi una scansione e un Word nativo sono coperti allo stesso modo dalle 10 gratuite giornaliere.',
    },
    {
      q: 'Il limite conta le pagine o i file?',
      a: 'I file. Ogni documento che converti — una pagina o trecento — è una conversione. Le 10 gratuite sono quindi 10 file al giorno in ogni formato, e un PDF nativo di 200 pagine conta come uno solo. Con Pro, un batch di 20 file conta come 20 conversioni, senza tetto giornaliero.',
    },
    {
      q: 'Le mie tabelle manterranno la formattazione?',
      a: 'Il convertitore ricostruisce la griglia stessa: colonne, righe e celle vengono rilevate dal layout, non indovinate dai paragrafi. L’anteprima ti mostra il risultato prima del download. La fedeltà — celle unite, larghezze di colonna — è preservata nell’anteprima e nell’Excel; il CSV è volutamente testo semplice, perché è questo che lo rende universale.',
    },
    {
      q: 'Quali browser e dispositivi sono supportati?',
      a: 'Il convertitore funziona sulle versioni attuali di Chrome, Edge, Firefox e Safari. Poiché l’analisi avviene nel browser, funziona su Windows, macOS, Linux e tablet iOS e Android, senza installare nulla. I browser molto vecchi (pre-2021) potrebbero non avere funzioni a cui il parser PDF fa affidamento.',
    },
    {
      q: 'Vendete o condividete i miei documenti?',
      a: 'No. I file nativi non raggiungono mai un server, quindi non c’è nulla da vendere o condividere. Le scansioni OCR vengono riconosciute e poi cancellate senza essere scritte in un archivio di lungo periodo — non archiviiamo e non addestriamo modelli sui documenti degli utenti. L’unico che vede un file è l’endpoint OCR che fa il riconoscimento.',
    },
  ],

  pricing: {
    metaTitle: 'Prezzi — conversione PDF gratuita nel browser, Pro per OCR intensivo',
    metaDesc: 'Prezzi di ZeroUploadPDF in numeri chiari: Gratis include 10 conversioni al giorno in PDF, Word, PowerPoint e immagini. Pro costa 9 $/mese o 6 $/mese con pagamento annuale per conversioni illimitate.',
    eyebrow: 'Prezzi',
    titleA: 'Numeri chiari, ',
    titleB: 'senza asterischi.',
    lede: 'Gratis copre un flusso reale — 10 conversioni al giorno su ogni formato. Pro esiste per chi converte ogni giorno.',
    free: {
      name: 'Gratis',
      tagline: 'Un prodotto che funziona, non una prova: 10 conversioni al giorno, tutti i giorni.',
      features: [
        { text: 'PDF, Word, PowerPoint e immagini in Excel / CSV', detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG e PDF — un’unica quota.' },
        { text: '10 conversioni ogni giorno', detail: 'Una quota condivisa per nativi e scansioni. Azzeramento a mezzanotte UTC.' },
        { text: 'Anteprima tabella prima del download', detail: 'Controlla l’estrazione prima di impegnarti.' },
        { text: 'Senza account, senza filigrana, senza sorprese', detail: 'Conversioni singole, punto.' },
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Tutto di Gratis, più conversioni illimitate e batch su scala.',
      popular: 'Più popolare',
      perMo: '/mese',
      orYear: 'o ${yearly}/mese con fatturazione annuale',
      features: [
        { text: 'Conversioni illimitate', detail: 'Native e OCR, ogni giorno, senza tetto.' },
        { text: 'Fino a 400 pagine per file', detail: 'OCR in streaming che regge le scansioni grandi.' },
        { text: 'Conversione in batch — fino a 20 file', detail: 'Nativi e scansionati, mescolati.' },
        { text: 'Rilevamento tabelle fedele al layout', detail: 'Mantiene disposizione, celle unite e colonne.' },
        { text: 'Coda OCR prioritaria', detail: 'Le tue scansioni saltano la coda nei giorni pieni.' },
      ],
    },
    plansNote:
      'Ogni piano include l’analisi nativa nel browser, l’anteprima tabella e nessuna registrazione forzata per le conversioni singole.',
    limitsTitle: 'Tutti i limiti in un unico posto',
    limits: [
      { label: 'Formati di uscita', value: '.xlsx e .csv' },
      { label: 'Limite pagine PDF nativi', value: '300 pagine (a seconda del browser)' },
      { label: 'Quota gratuita giornaliera', value: '10 conversioni, qualsiasi formato' },
      { label: 'Quota Pro', value: 'Illimitato, ≤ 400 pagine ciascuna' },
      { label: 'Batch', value: 'Solo Pro, ≤ 20 file / ciclo' },
      { label: 'Archiviazione', value: 'Nulla viene salvato. Mai.' },
    ],
    cta: 'Inizia a convertire — gratis',
    noCard: 'Nessuna carta richiesta · nulla da installare',
    noteHeading: 'Cosa compra davvero il pagamento',
    noteSub: 'Tre cose che Pro cambia — quantità, dimensione e attesa.',
    notes: [
      {
        icon: 'check',
        title: 'Inizia gratis, resta gratis',
        body: 'Il piano gratuito è un prodotto vero, non una prova. 10 conversioni al giorno su tutti i formati, per sempre.',
      },
      {
        icon: 'lock',
        title: 'I tuoi documenti non toccano mai la fatturazione',
        body: 'Il pagamento è gestito da Stripe. I tuoi PDF non sono mai collegati a account, email o storico di pagamento.',
      },
      {
        icon: 'refresh',
        title: 'Annulla quando vuoi',
        body: 'Mensile o annuale, annulla in due clic. Il downgrade conserva le conversioni passate; nulla viene trattenuto.',
      },
    ],
    contact: 'Domande su un piano team, fatture per la contabilità o un budget OCR limitato? Scrivi a',
  },

  cta: {
    eyebrow: 'Pronto quando vuoi',
    title: 'Provalo ora. Nulla da installare, nulla da caricare.',
    sub: 'Trascina un PDF nel convertitore e guarda la tabella estratta prima di scaricare. I file nativi non escono mai dal tuo browser — è tutto qui.',
    convert: 'Converti un PDF',
    explainer: 'Leggi la spiegazione di zero upload',
    stats: [
      { v: '0', label: 'file caricati per i nativi' },
      { v: '10', label: 'conversioni gratuite al giorno' },
      { v: '100%', label: 'anteprima prima del download' },
    ],
  },

  footer: {
    blurb:
      'PDF in Excel e CSV, convertito dove conta — sul tuo dispositivo. I PDF nativi non escono mai dal tuo browser; solo le scansioni vere raggiungono il nostro servizio OCR.',
    convertHeading: 'Converti',
    productHeading: 'Prodotto',
    companyHeading: 'Azienda',
    links: {
      pdfExcel: 'PDF in Excel',
      pdfCsv: 'PDF in CSV',
      scannedOcr: 'PDF scansionati (OCR)',
      how: 'Come funziona',
      questions: 'Domande e risposte',
      pricing: 'Prezzi',
      privacy: 'Privacy e zero upload',
      terms: 'Termini di servizio',
      refunds: 'Politica di rimborso',
      contact: 'Contatti',
    },
    footerTagline: 'Nessun upload. Nessun account. Nessuna copia sui server.',
  },

  convert: {
    metaTitle: 'Convertitore PDF in Excel — gratis, nel tuo browser',
    metaDesc:
      'Converti PDF in Excel o CSV gratis. I PDF nativi vengono analizzati interamente nel tuo browser con zero upload; le scansioni usano OCR gratuito giornaliero. Anteprima prima del download.',
    intro: {
      eyebrow: 'Convertitore',
      title: 'PDF in Excel e CSV, senza l’upload.',
      lede: 'Trascina un file qui sotto. I PDF testuali vengono analizzati su questo dispositivo — il tuo documento non esce mai dal browser. Le scansioni fanno un breve viaggio documentato verso l’OCR e vengono cancellate al momento.',
    },
    notes: [
      'PDF post-2008, firmati digitalmente o nati digitali → analisi locale',
      'Pagine scansionate o fotografate → si applica la quota OCR gratuita',
      'Nessun account, nessuna filigrana, nessuna copia sul server',
    ],
  },

  questions: {
    metaTitle: 'Domande e risposte — ZeroUploadPDF',
    metaDesc:
      'Ogni domanda su ZeroUploadPDF, risposta con chiarezza: cosa significa zero upload, come funziona la quota di 10 conversioni gratuite al giorno, OCR, formati e privacy.',
    intro: {
      eyebrow: 'Domande e risposte',
      titleA: 'Tutto, ',
      titleB: 'risposto con chiarezza.',
      lede: 'Le stesse risposte oneste della home, raccolte in un’unica pagina — con i dettagli completi su privacy e quota.',
    },
    note:
      'È ancora poco chiaro? La privacy policy entra nel dettaglio tecnico e i prezzi confrontano le quote Gratis e Pro fianco a fianco.',
  },

  privacy: {
    metaTitle: 'Privacy — l’architettura zero upload, spiegata senza giri di parole',
    metaDesc:
      'Come ZeroUploadPDF protegge i tuoi PDF: i file nativi vengono analizzati nel tuo browser e mai caricati; le scansioni vanno solo all’OCR e vengono cancellate subito. Nessun archiviazione, nessun addestramento sui tuoi dati.',
    intro: {
      eyebrow: 'Privacy e architettura',
      title: 'Zero upload, spiegato in parole semplici.',
      lede: 'La maggior parte degli strumenti PDF promette di eliminare il tuo file dopo un’ora. Il nostro non ha nulla da eliminare per i nativi e tiene le pagine scansionate solo i secondi che servono all’OCR. Questa pagina mostra l’intera architettura, esattamente come funziona.',
    },
    nativeH: 'Il percorso privato: un PDF nativo',
    nativeLead:
      'Se il tuo PDF è nato digitale — un report esportato da un elaboratore di testi, un estratto conto, un modulo generato da software — contiene un livello di testo che il browser sa leggere. È tutta la conversione, e avviene dove il file è già: sul tuo dispositivo.',
    nativeSteps: [
      { t: 'Il PDF viene selezionato sul tuo dispositivo.', b: 'Il file viene letto nella memoria del browser. Non viaggia mai sulla rete.' },
      { t: 'Le tabelle vengono rilevate localmente.', b: 'Testo, colonne e allineamento vengono analizzati con la CPU del tuo computer.' },
      { t: 'Guardi l’anteprima della tabella.', b: 'L’estrazione appare nella scheda, così la verifichi prima di salvare qualsiasi cosa.' },
      { t: 'Scarichi il file.', b: 'La .xlsx o .csv viene prodotta nel tuo browser e salvata dove scegli.' },
      { t: 'La scheda si chiude.', b: 'Il file esce dalla memoria. Nessuna copia esiste altrove, perché non ne è mai stata creata.' },
    ],
    scannedH: 'L’eccezione onesta: un PDF scansionato',
    scannedLead:
      'Una scansione è una fotografia di pagina. Le fotografie non contengono testo che un browser possa leggere, e riconoscere lettere in un’immagine richiede un modello addestrato e vera potenza di calcolo. Quindi questo solo caso fa un viaggio — il più breve possibile — e viene cancellato all’arrivo.',
    scannedSteps: [
      { t: 'Le pagine vengono riconosciute come immagini.', b: 'Un PDF scansionato non ha livello di testo; lo identifichiamo come basato su immagine nello stesso passo in cui un nativo viene analizzato localmente.' },
      { t: 'Solo le pagine immagine vanno all’OCR.', b: 'I pixel viaggiano verso il nostro endpoint OCR — mai la cronologia completa del documento, mai le tabelle estratte.' },
      { t: 'Il testo torna, le pagine vengono cancellate.', b: 'Il riconoscimento termina e le immagini vengono eliminate dal server immediatamente. Nessun archivio, nessuna cache.' },
      { t: 'Il riconoscimento viene mostrato come anteprima.', b: 'Lo stesso passo di anteprima dei nativi, per verificare la precisione prima di scaricare.' },
    ],
    scannedNote:
      'Ecco perché il piano gratuito ha una quota giornaliera esplicita: ogni pagina scansionata che processiamo costa calcolo, quindi limitiamo l’intero prodotto a 10 conversioni al giorno gratis, illimitate con Pro. Preferiamo nominare il numero piuttosto che nascondere il costo altrove.',
    neverH: 'Cosa non facciamo mai',
    never: [
      'Salvare i tuoi PDF, le tabelle estratte o il testo OCR su un server sotto il nostro controllo.',
      'Usare i tuoi documenti per addestramento, analisi o pubblicità.',
      'Trattenere le pagine scansionate dopo il riconoscimento.',
      'Richiedere account, email o login per una conversione singola.',
      'Vendere o condividere i tuoi dati con terze parti per marketing.',
    ],
    collectH: 'Cosa raccogliamo',
    collect: [
      'Per le conversioni singole: nulla. Non c’è account, né telemetria legata al tuo documento, né lista “ultimi inviati” con il pulsante di cancellazione — perché non c’è nulla da cancellare.',
      'Per un account Pro: un indirizzo email e una scheda cliente Stripe per la fatturazione. I contatori di utilizzo (conversioni al giorno) vengono salvati per applicare la quota gratuita. Un account Pro non riceve mai i tuoi documenti: i tuoi file restano sul tuo dispositivo e non vengono mai collegati al tuo account.',
      'L’endpoint OCR riceve pagine immagine, nient’altro. Quelle immagini vengono processate e purgate senza alcuna relazione con email, account o cronologia di conversione.',
      'Non usiamo tracker pubblicitari su questo sito, e le nostre pagine non caricano script di terze parti oltre a Stripe sulla pagina di fatturazione.',
    ],
    rightsH: 'I tuoi diritti e come contattarci',
    rights: [
      'Se hai un account, puoi esportarlo o eliminarlo (con tutti i dati associati) in qualsiasi momento. Poiché i documenti non vengono mai salvati, non c’è altro da cancellare — è il punto, non un bug.',
      'Domande sul trattamento dei dati per la tua organizzazione o una conversione in corso: scrivi a privacy@zerouploadpdf.com.',
      'Questa architettura è deliberata. L’abbiamo costruita così perché “carica e promettiamo di eliminare” è una bugia di fiducia che non volevamo raccontare. Zero upload non è un badge applicato sopra — è come il software è costruito.',
    ],
    ctaH: 'Verifica di persona — converti un PDF adesso.',
    cta: 'Apri il convertitore',
  },

  conv: {
    eyebrow: 'Convertitore live',
    aria: 'Convertitore di PDF e Office in Excel',
    header: 'PDF · Word · PowerPoint → Excel / CSV',
    zeroUpload: 'Zero upload',
    dropTitle: 'Trascina un documento qui',
    dropSub: 'o sceglilo dal tuo dispositivo',
    browse: 'Sfoglia',
    inputAria: 'Scegli un file PDF, Word, PowerPoint o immagine',
    formatsAria: 'Formati supportati',
    outLegend: 'Formato di uscita',
    xlsx: 'Excel .xlsx',
    csv: 'CSV .csv',
    note: 'I file di testo vengono analizzati su questo dispositivo. Le scansioni passano dall’OCR e vengono cancellate subito.',
    allowance: 'Quota giornaliera',
    complete: 'Conversione completata',
    sheet: 'Foglio ·',
    rowsLabel: 'righe',
    downloadXlsx: 'Scarica .xlsx',
    downloadCsv: 'Scarica .csv',
    convertAnother: 'Converti un altro',
    retry: 'Riprova',
    startOver: 'Ricomincia',
    errorTitle: 'Impossibile leggere questo file',
    clientSide: 'Gira sul client quando possibile',
    footerRight: 'Nessun server per i file di testo. 10 conversioni/giorno gratis.',
    upgradeTitle: 'Quota giornaliera raggiunta',
    upgradeBody:
      'Hai usato le 10 conversioni gratuite di oggi. La quota si azzera a mezzanotte UTC — oppure passa a Pro per conversioni illimitate senza tetto giornaliero.',
    seePro: 'Vedi i prezzi Pro',
    remindLater: 'Ricordamelo dopo',
  },

  terms: {
    metaTitle: 'Termini di servizio — ZeroUploadPDF',
    metaDesc:
      'I termini di utilizzo di ZeroUploadPDF: come funziona il convertitore, come vengono gestiti i tuoi file e i limiti della versione gratuita e di Pro.',
    intro: {
      eyebrow: 'Termini',
      title: 'Le regole con cui lavoriamo.',
      lede: 'Pagina breve, linguaggio chiaro. Ultimo aggiornamento: 5 settembre 2026.',
    },
    sections: [
      {
        h: '1. Il servizio',
        ps: [
          'ZeroUploadPDF converte file PDF, Word, PowerPoint e immagini in Excel (.xlsx) o CSV (.csv). I documenti di testo nativi sono elaborati nel tuo browser; i file scansionati usano un servizio OCR che riconosce il testo ed elimina subito le immagini.',
          'Il piano gratuito include 10 conversioni al giorno per ogni formato. Pro elimina il limite giornaliero e aggiunge l’elaborazione in batch e limiti di pagine superiori.',
        ],
      },
      {
        h: '2. I tuoi file',
        ps: [
          'I PDF nativi vengono analizzati sul tuo dispositivo e non lo lasciano mai. Solo le pagine scansionate che richiedono davvero l’OCR viaggiano verso il nostro servizio di riconoscimento, dove vengono elaborate, eliminate e mai archiviate o usate per l’addestramento.',
          'Quando la scheda del browser viene chiusa, i dati in memoria della conversione spariscono. Sei responsabile di conservare una tua copia dei documenti che converti.',
        ],
      },
      {
        h: '3. Account e pagamenti',
        ps: [
          'Una conversione singola non richiede mai un account. Gli abbonamenti Pro si acquistano al checkout, sono fatturati da Stripe mensilmente o annualmente e possono essere annullati in qualsiasi momento. I tuoi documenti non sono mai collegati alla tua cronologia di pagamento.',
          'Accetti di fornire dati di pagamento corretti e di usare solo metodi di pagamento che sei autorizzato a utilizzare.',
        ],
      },
      {
        h: '4. Utilizzo consentito',
        ps: [
          'Carica solo documenti che hai il diritto di accedere e convertire. Non usare il servizio per scopi illeciti, per aggirare le quote pubblicate con script o bot, o per interferire con il servizio degli altri utenti.',
        ],
      },
      {
        h: '5. Disponibilità e responsabilità',
        ps: [
          'Il servizio è fornito "così com’è", senza garanzie di alcun tipo. La qualità della conversione dipende dal documento e dal browser; l’estrazione automatica può omettere o leggere male dei contenuti — verifica i fogli di calcolo importanti prima di affidarti a essi.',
          'Nella misura massima consentita dalla legge, ZeroUploadPDF non risponde di perdite indirette o consequenziali, inclusa la perdita di dati o profitti, derivanti dall’uso del servizio. Nulla di ciò che il servizio produce costituisce consulenza professionale, legale o finanziaria.',
        ],
      },
      {
        h: '6. Modifiche ai presenti termini',
        ps: [
          'Potremmo aggiornare questi termini di tanto in tanto. Le modifiche hanno effetto quando vengono pubblicate su questa pagina, e continuare a usare il servizio significa accettarle. Possiamo limitare, sospendere o terminare l’accesso in caso di uso abusivo, a nostra discrezione.',
        ],
      },
      {
        h: '7. Contatti',
        ps: [
          'Domande su questi termini? Scrivi a hello@zerouploadpdf.com e ti risponderemo entro alcuni giorni lavorativi.',
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Politica di rimborso — ZeroUploadPDF',
    metaDesc:
      'La politica di rimborso di ZeroUploadPDF in numeri chiari: disdetta in qualsiasi momento, rimborso integrale della parte non utilizzata entro 14 giorni e modalità di pagamento.',
    intro: {
      eyebrow: 'Rimborsi',
      title: 'Condizioni di rimborso, in numeri chiari.',
      lede: 'Vendere software è più semplice quando la politica è dichiarata in anticipo. Ecco la nostra. Ultimo aggiornamento: 5 settembre 2026.',
    },
    sections: [
      {
        h: 'Come funziona la disdetta',
        ps: [
          'Pro viene fatturato mensilmente o annualmente. Puoi disdire in qualsiasi momento e l’accesso continua fino alla fine del periodo pagato.',
          'Entro 14 giorni da un pagamento, contattaci per ottenere il rimborso integrale della parte non utilizzata di quel periodo. Oltre la finestra, i rimborsi sono concessi a nostra discrezione, ad esempio quando un guasto tecnico ha impedito le tue conversioni.',
        ],
      },
      {
        h: 'Come viene pagato il rimborso',
        ps: [
          'I rimborsi approvati tornano al metodo di pagamento originale. A seconda dell’emittente della carta, possono servire 5-10 giorni lavorativi per comparire sull’estratto conto.',
        ],
      },
      {
        h: 'Il piano gratuito',
        ps: [
          'I rimborsi valgono solo per gli addebiti Pro a pagamento. La quota gratuita giornaliera non è un acquisto, quindi non c’è nulla da rimborsare.',
        ],
      },
      {
        h: 'Dispute',
        ps: [
          'Se ritieni che un addebito sia errato, contattaci prima all’indirizzo hello@zerouploadpdf.com. Lo risolviamo direttamente prima che tu faccia ricorso all’emittente della carta.',
        ],
      },
    ],
  },
};