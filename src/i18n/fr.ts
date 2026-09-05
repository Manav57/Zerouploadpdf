import type { Loc } from './types';

export const loc: Loc = {
  code: 'fr',
  base: '/fr',
  label: 'Français',

  meta: {
    title: 'PDF vers Excel et CSV — ZeroUploadPDF convertit dans votre navigateur',
    description:
      "Convertissez un PDF scanné en Excel avec une OCR gratuite chaque jour. Les PDF natifs sont analysés dans votre navigateur, sans téléversement ni compte pour une conversion ponctuelle.",
    imageAlt: 'ZeroUploadPDF — convertissez un PDF scanné en Excel dans votre navigateur',
  },

  nav: {
    convert: 'Convertir',
    how: 'Comment ça marche',
    questions: 'Questions',
    pricing: 'Tarifs',
    privacy: 'Confidentialité',
    cta: 'Convertir un PDF',
  },

  hero: {
    badge: 'PDF → Excel / CSV · confidentialité d’abord',
    h1a: 'Votre fichier ne',
    h1b: 'quitte jamais votre navigateur.',
    subLead:
      'ZeroUploadPDF convertit vos PDF en Excel et CSV sur votre propre appareil. Les PDF natifs sont analysés ici même, dans l’onglet — zéro téléversement, zéro attente sur un serveur.',
    subNative: 'Les fichiers scannés utilisent une OCR',
    subOcr: 'gratuite chaque jour',
    subTail: ' et supprimées dès la fin du traitement.',
    cta: 'Convertir un PDF gratuitement',
    how: 'Comment ça marche',
    trust: ['Pas de compte pour une conversion ponctuelle', 'Rien n’est stocké', '10 conversions gratuites par jour'],
    converterEyebrow: 'Essayez-le ici même',
  },

  how: {
    eyebrow: 'Comment ça marche',
    titleA: 'Convertir un PDF scanné en Excel',
    titleB: ' — avec OCR gratuit chaque jour.',
    lede: 'Le document choisit la voie. Les PDF à base de texte restent sur votre machine ; les vrais scans font un aller-retour court et documenté.',
    pathAName: 'Voie A · PDF natif',
    pathBName: 'Voie B · PDF scanné',
    nativeSteps: [
      'Déposez votre PDF dans le convertisseur.',
      'Le texte et les tableaux sont extraits dans le navigateur, avec le processeur de votre machine.',
      'Prévisualisez le tableau extrait, puis téléchargez .xlsx ou .csv.',
    ],
    scannedSteps: [
      'Les pages sont détectées comme des images, pas comme du texte.',
      'Seules les pages scannées vont à notre service OCR — supprimées dès la fin de la reconnaissance.',
      'Les tableaux reconnus reviennent dans votre onglet, prêts à prévisualiser et télécharger.',
    ],
    nativeFooter: 'Rien ne sort de l’onglet',
    scannedFooter: 'L’aller-retour le plus court possible',
    bottom: 'Les deux chemins finissent par un aperçu du tableau. Vous ne téléchargez jamais à l’aveugle.',
    open: 'Ouvrir le convertisseur →',
  },

  comparison: {
    eyebrow: 'La différence',
    titleA: 'Zéro téléversement n’est pas une fonction.',
    titleB: ' C’est l’architecture.',
    lede: 'Le tableau ci-dessous nous compare à un convertisseur PDF vers Excel classique. Les lignes qui comptent sont les limites, l’OCR et ce qui arrive à votre fichier après fermeture de l’onglet.',
    colUs: 'ZeroUploadPDF',
    colThem: 'Convertisseur classique en ligne',
    featureCol: 'Comparaison',
    rows: [
      { feature: 'Où se fait la conversion', us: 'Dans votre onglet, sur votre matériel', them: 'Sur leurs serveurs' },
      { feature: 'Votre PDF après conversion', us: 'En mémoire uniquement — supprimé, jamais stocké', them: 'Téléversé puis auto-supprimé après ~1 h' },
      { feature: 'OCR (PDF scannés) dans le plan gratuit', us: "Incluse dans vos 10 conversions quotidiennes", them: 'Derrière un essai payant' },
      { feature: 'Limites de l’offre gratuite', us: "Exactement 10 conversions/jour, clairement annoncées", them: 'Limites quotidiennes vagues' },
      { feature: 'Inscription pour une seule conversion', us: 'Jamais requise', them: 'Non requise — mais votre fichier est quand même téléversé' },
      { feature: 'Grands fichiers scannés', us: 'OCR en streaming jusqu’à 400 pages', them: 'L’OCR peine souvent sur les gros scans' },
      { feature: 'Aperçu avant téléchargement', us: 'Aperçu du tableau intégré', them: 'Télécharger à l’aveugle et croiser les doigts' },
    ],
    noteA:
      'Nous ne pointons ici aucun service précis — nous appliquons le standard qu’ils refuseraient tous :',
    noteB: 'annoncez le sort de vos fichiers et vos limites en chiffres clairs.',
  },

  trust: {
    eyebrow: 'Sécurité et confiance',
    titleA: 'Pas une histoire de « téléversement puis suppression ».',
    titleB: ' Une histoire sans téléversement.',
    lede: "D'autres outils vantent la suppression de votre fichier après une heure. Nous préférons ne jamais l'avoir.",
    cards: [
      { title: 'Analyse sur votre appareil', body: 'Les PDF textuels sont lus et analysés dans votre navigateur, avec votre processeur. Les octets ne voyagent jamais.' },
      { title: 'Rien n’est stocké', body: 'Pas de compte, pas d’historique, pas de copie serveur. Quand l’onglet se ferme, le fichier disparaît avec lui.' },
      { title: 'L’OCR s’autodétruit', body: 'Les pages scannées vont au service OCR, sont reconnues et supprimées à la fin. Aucune archive.' },
      { title: 'Pas de piège à inscription', body: 'Une conversion ponctuelle fonctionne toujours sans compte. L’inscription est facultative, pour des limites plus hautes.' },
    ],
    calloutTitle: 'La distinction compte.',
    callout:
      '« Supprimé après une heure » signifie que le fichier s’est trouvé sur un serveur. Le nôtre ne s’y trouve jamais — les PDF natifs ne quittent pas le navigateur, et les pages scannées n’existent sur le service OCR que le temps de les lire, rien de plus.',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    titleA: 'Souvent posées, ',
    titleB: 'répondues simplement.',
    more: 'Voir les 13 questions →',
    moreLead: 'Besoin de plus de détail sur chaque réponse ?',
  },
  faqs: [
    {
      q: 'Que signifie réellement « zéro téléversement » ?',
      a: 'Quand vous déposez un PDF textuel, le fichier est ouvert et analysé directement dans votre navigateur. Il est lu du disque vers la mémoire de votre machine, converti sur place et jamais transmis. « Zéro téléversement » décrit exactement cela : les octets de votre document ne voyagent pas vers un serveur.',
    },
    {
      q: 'Mes fichiers sont-ils stockés après la conversion ?',
      a: 'Non. Les conversions natives restent en mémoire et le fichier est effacé à la fermeture de l’onglet. Pour les scans envoyés à l’OCR, l’image n’est retenue que le temps de reconnaître le texte, puis supprimée — nous ne conservons, n’archivons ni n’entraînons à partir de vos documents.',
    },
    {
      q: 'Et si mon PDF est un scan ou des photos ?',
      a: 'Un PDF scanné est une image de page, et les images n’ont pas de « texte » qu’un navigateur puisse lire. Pour convertir un PDF scanné en Excel, nous détectons que le fichier est à base d’image et basculons sur l’OCR, qui lit les lettres dans l’image. C’est le seul cas où votre fichier quitte le navigateur, car la reconnaissance exige une puissance que nous ne pouvons pas exécuter en toute sécurité côté client à grande échelle.',
    },
    {
      q: 'L’OCR est-elle incluse dans le plan gratuit ?',
      a: 'Oui. L’OCR n’est pas une fonction payante ici. Gratuit contient tout dans une seule allocation claire : 10 conversions par jour, PDF, Word, PowerPoint et images compris — natifs comme scannés. Pro passe à l’illimité. Beaucoup de convertisseurs cachent l’OCR derrière un essai payant ; nous assumons le chiffre sans détour.',
    },
    {
      q: 'Faut-il créer un compte pour convertir ?',
      a: 'Non. Une conversion ponctuelle ne requiert jamais d’inscription, ni pour les natifs, ni pour les scans. Les comptes n’existent que pour les abonnés Pro qui veulent des lots, des limites plus hautes et un historique. Vous pouvez utiliser vos 10 conversions quotidiennes gratuites sans compte.',
    },
    {
      q: 'Quelle est exactement la limite gratuite ?',
      a: 'Gratuit : 10 conversions par jour tous formats confondus — PDF, DOCX, DOC, PPTX, PPT, JPG et PNG. L’allocation se réinitialise à minuit UTC. Pro : conversions illimitées, jusqu’à 400 pages chacune. L’analyse se fait sur votre matériel, donc la taille pratique dépend de votre navigateur, pas de notre quota.',
    },
    {
      q: 'Comment gérez-vous les gros scans ?',
      a: 'Les scans sont traités par lots en streaming plutôt que chargés en entier, ce qui est le point de rupture des outils OCR serveur. En Pro, les fichiers jusqu’à 400 pages se convertissent sans les délais qui étranglent les autres sur les gros scans.',
    },
    {
      q: 'Pourquoi un PDF scanné doit-il quitter le navigateur ?',
      a: 'Réponse honnête : extraire du texte d’images coûte cher. Le faire bien à grande échelle exige un modèle entraîné et la puissance pour l’exécuter. Comme nous refusons de faire tourner des modèles sur votre machine en expédiant vos données en silence, nous assumons le compromis — votre scan va à un point d’entrée OCR dédié, est traité et supprimé immédiatement après. Vos PDF natifs ne font jamais ce voyage.',
    },
    {
      q: 'Quels formats puis-je convertir ?',
      a: 'PDF, Word (DOCX et DOC), PowerPoint (PPTX et PPT), plus les images JPG et PNG. La sortie est Excel (.xlsx) ou CSV (.csv). Chaque fichier compte de la même façon dans votre allocation : un fichier, une conversion, donc un scan et un Word natif sont couverts pareil par les 10 gratuites quotidiennes.',
    },
    {
      q: 'La limite compte-t-elle les pages ou les fichiers ?',
      a: 'Les fichiers. Chaque document que vous convertissez, qu’il fasse une page ou trois cents, compte pour une conversion. Ainsi l’allocation gratuite est de 10 fichiers par jour tous formats, et un PDF natif de 200 pages reste une seule conversion. En Pro, un lot de 20 fichiers compte pour 20 conversions, sans plafond quotidien.',
    },
    {
      q: 'Mes tableaux garderont-ils leur mise en forme ?',
      a: 'Le convertisseur reconstruit la grille elle-même : colonnes, lignes et cellules sont détectées depuis la mise en page, pas devinées depuis les paragraphes. L’aperçu vous montre le résultat avant le téléchargement. La fidélité — cellules fusionnées, largeurs de colonnes — est conservée dans l’aperçu et dans le fichier Excel ; le CSV est volontairement du texte brut, car c’est ce qui le rend universel.',
    },
    {
      q: 'Quels navigateurs et appareils sont pris en charge ?',
      a: 'Le convertisseur fonctionne sur les versions actuelles de Chrome, Edge, Firefox et Safari. Comme l’analyse est dans le navigateur, il marche sur Windows, macOS, Linux et les tablettes iOS et Android, sans rien installer. Les navigateurs très anciens (antérieurs à 2021) pourraient manquer des fonctions du lecteur PDF.',
    },
    {
      q: 'Vendez-vous ou partagez-vous mes documents ?',
      a: 'Non. Les fichiers natifs n’atteignent jamais un serveur : il n’y a donc rien à vendre ni à partager. Les scans OCR sont reconnus puis supprimés sans être écrits dans aucun stockage durable — nous n’archivons pas et n’entraînons aucun modèle sur les documents des utilisateurs. Le seul tiers qui voit un fichier est le point d’entrée OCR qui fait la reconnaissance.',
    },
  ],

  pricing: {
    metaTitle: 'Tarifs — conversion PDF gratuite dans le navigateur, Pro pour OCR intensif',
    metaDesc: 'Tarifs ZeroUploadPDF en chiffres clairs : Gratuit inclut 10 conversions/jour en PDF, Word, PowerPoint et images. Pro coûte 9 $/mois ou 6 $/mois en annuel pour des conversions illimitées.',
    eyebrow: 'Tarifs',
    titleA: 'Des chiffres clairs, ',
    titleB: 'sans astérisque.',
    lede: 'Gratuit couvre un vrai flux de travail : 10 conversions par jour, tous formats. Pro existe pour ceux qui convertissent chaque jour.',
    free: {
      name: 'Gratuit',
      tagline: 'Un produit qui fonctionne, pas un essai : 10 conversions par jour, tous les jours.',
      features: [
        { text: 'PDF, Word, PowerPoint et images vers Excel / CSV', detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG et PDF — une seule allocation.' },
        { text: '10 conversions chaque jour', detail: 'Une allocation partagée pour natifs et scans. Réinitialisation à minuit UTC.' },
        { text: 'Aperçu du tableau avant le téléchargement', detail: 'Vérifiez l’extraction avant de vous engager.' },
        { text: 'Sans compte, sans filigrane, sans surprise', detail: 'Des conversions ponctuelles, point.' },
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Tout dans Gratuit, plus des conversions illimitées et des lots à l’échelle.',
      popular: 'Le plus populaire',
      perMo: '/mois',
      orYear: 'ou ${yearly}/mois facturés annuellement',
      features: [
        { text: 'Conversions illimitées', detail: 'Natifs et scans, chaque jour, sans plafond.' },
        { text: 'Jusqu’à 400 pages par fichier', detail: 'OCR en streaming qui gère les gros scans.' },
        { text: 'Conversion par lots — jusqu’à 20 fichiers', detail: 'Natifs et scannés, mélangés.' },
        { text: 'Détection de tableaux fidèle à la mise en page', detail: 'Conserve la disposition, les cellules fusionnées et les colonnes.' },
        { text: 'File OCR prioritaire', detail: 'Vos scans passent devant les jours chargés.' },
      ],
    },
    plansNote:
      'Tous les plans incluent l’analyse native dans le navigateur, l’aperçu du tableau et aucun inscription forcée pour les conversions ponctuelles.',
    limitsTitle: 'Toutes les limites au même endroit',
    limits: [
      { label: 'Formats de sortie', value: '.xlsx et .csv' },
      { label: 'Limite de pages PDF natifs', value: '300 pages (selon le navigateur)' },
      { label: 'Allocation gratuite quotidienne', value: '10 conversions, tous formats' },
      { label: 'Allocation Pro', value: 'Illimité, ≤ 400 pages chacune' },
      { label: 'Traitement par lots', value: 'Pro uniquement, ≤ 20 fichiers / lot' },
      { label: 'Stockage', value: 'Rien n’est stocké. Jamais.' },
    ],
    cta: 'Commencer à convertir — gratuitement',
    noCard: 'Aucune carte requise · rien à installer',
    noteHeading: 'Ce que le paiement achète réellement',
    noteSub: 'Trois choses que Pro change — la quantité, la taille et l’attente.',
    notes: [
      {
        icon: 'check',
        title: 'Commencez gratuitement, restez gratuitement',
        body: 'Le plan gratuit est un vrai produit, pas un essai. 10 conversions par jour sur tous les formats, pour toujours.',
      },
      {
        icon: 'lock',
        title: 'Vos documents ne touchent jamais la facturation',
        body: 'Le paiement est géré par Stripe. Vos PDF ne sont jamais liés à votre compte, votre e-mail ou votre historique de paiement.',
      },
      {
        icon: 'refresh',
        title: 'Annulez à tout moment',
        body: 'Mensuel ou annuel, annulez en deux clics. La dégradation conserve vos conversions passées ; rien n’est pris en otage.',
      },
    ],
    contact: 'Des questions sur un plan équipe, des factures pour votre comptabilité ou un budget OCR serré ? Écrivez à',
  },

  cta: {
    eyebrow: 'Prêt quand vous l’êtes',
    title: 'Essayez maintenant. Rien à installer, rien à téléverser.',
    sub: 'Déposez un PDF dans le convertisseur et voyez le tableau extrait avant de télécharger. Les fichiers natifs ne quittent jamais votre navigateur — c’est tout le principe.',
    convert: 'Convertir un PDF',
    explainer: "Lire l'explication zéro téléversement",
    stats: [
      { v: '0', label: 'fichiers téléversés pour les natifs' },
      { v: '10', label: 'conversions gratuites par jour' },
      { v: '100%', label: 'aperçu avant de télécharger' },
    ],
  },

  footer: {
    blurb:
      'PDF vers Excel et CSV, converti là où ça compte — sur votre appareil. Les PDF natifs ne quittent jamais votre navigateur ; seuls les vrais scans atteignent notre service OCR.',
    convertHeading: 'Convertir',
    productHeading: 'Produit',
    companyHeading: 'Entreprise',
    links: {
      pdfExcel: 'PDF vers Excel',
      pdfCsv: 'PDF vers CSV',
      scannedOcr: 'PDF scannés (OCR)',
      how: 'Comment ça marche',
      questions: 'Questions et réponses',
      pricing: 'Tarifs',
      privacy: 'Confidentialité et zéro téléversement',
      terms: 'Conditions d’utilisation',
      refunds: 'Politique de remboursement',
      contact: 'Contact',
    },
    footerTagline: 'Sans téléversement. Sans compte. Aucune copie serveur.',
  },

  convert: {
    metaTitle: 'Convertisseur PDF vers Excel — gratuit, dans votre navigateur',
    metaDesc:
      'Convertissez un PDF en Excel ou CSV gratuitement. Les PDF natifs sont analysés dans votre navigateur, zéro téléversement ; les scans utilisent une OCR gratuite quotidienne. Aperçu avant téléchargement.',
    intro: {
      eyebrow: 'Convertisseur',
      title: 'PDF vers Excel et CSV, sans le téléversement.',
      lede: 'Déposez un fichier ci-dessous. Les PDF textuels sont analysés sur cet appareil — votre document ne quitte jamais votre navigateur. Les scans font un bref voyage documenté vers l’OCR et sont supprimés dès qu’elle se termine.',
    },
    notes: [
      'PDF postérieurs à 2008, signés numériquement ou nés numériques → analyse locale',
      'Pages scannées ou photographiées → quota OCR gratuit applicable',
      'Sans compte, sans filigrane, sans copie serveur',
    ],
  },

  questions: {
    metaTitle: 'Questions et réponses — ZeroUploadPDF',
    metaDesc:
      'Chaque question sur ZeroUploadPDF, répondue simplement : ce que signifie zéro téléversement, l’allocation gratuite de 10 conversions par jour, l’OCR, les formats et la confidentialité.',
    intro: {
      eyebrow: 'Questions et réponses',
      titleA: 'Tout, ',
      titleB: 'répondu simplement.',
      lede: 'Les mêmes réponses honnêtes que sur la page d’accueil, réunies sur une page — avec les détails complets de confidentialité et d’allocation.',
    },
    note:
      'Un point reste flou ? La politique de confidentialité entre dans le détail technique et les tarifs comparent côte à côte les allocations gratuite et Pro.',
  },

  privacy: {
    metaTitle: 'Confidentialité — l’architecture zéro téléversement, expliquée sans jargon',
    metaDesc:
      'Comment ZeroUploadPDF protège vos PDF : les natifs sont analysés dans votre navigateur et jamais téléversés ; les scans vont uniquement à l’OCR et sont supprimés immédiatement. Pas de stockage, pas d’utilisation de vos données.',
    intro: {
      eyebrow: 'Confidentialité et architecture',
      title: 'Zéro téléversement, expliqué en langage simple.',
      lede: 'La plupart des outils PDF vantent la suppression de votre fichier après une heure. Le nôtre n’a rien à supprimer pour les natifs et retient les pages scannées le temps que l’OCR les lise. Cette page montre toute l’architecture, exactement telle qu’elle fonctionne.',
    },
    nativeH: 'Le chemin privé : un PDF natif',
    nativeLead:
      'Si votre PDF est né numérique — un rapport exporté d’un traitement de texte, un relevé, un formulaire généré par logiciel — il contient une couche de texte que le navigateur peut lire. C’est toute la conversion, et elle se fait là où se trouve déjà le fichier : sur votre appareil.',
    nativeSteps: [
      { t: 'Le PDF est sélectionné sur votre appareil.', b: 'Le fichier est lu dans la mémoire du navigateur. Il ne voyage jamais sur le réseau.' },
      { t: 'Les tableaux sont détectés localement.', b: 'Texte, colonnes et alignement sont analysés avec le processeur de votre machine.' },
      { t: 'Vous prévisualisez le tableau.', b: 'L’extraction s’affiche dans l’onglet, pour que vous la vérifiiez avant tout enregistrement.' },
      { t: 'Vous téléchargez le classeur.', b: 'Le .xlsx ou .csv est produit dans votre navigateur et enregistré là où vous choisissez.' },
      { t: 'L’onglet se ferme.', b: 'Le fichier quitte la mémoire. Aucune copie n’existe ailleurs, car aucune n’a été créée.' },
    ],
    scannedH: 'L’exception honnête : un PDF scanné',
    scannedLead:
      'Un scan est une photographie de page. Les photographies ne contiennent pas de texte qu’un navigateur puisse lire, et reconnaître des lettres dans une image exige un modèle entraîné et une vraie puissance de calcul. Ce seul cas effectue donc un voyage — le plus court possible — et disparaît à son arrivée.',
    scannedSteps: [
      { t: 'Les pages sont détectées comme images.', b: 'Un PDF scanné n’a pas de couche texte ; nous l’identifions comme image au même endroit où un natif est analysé localement.' },
      { t: 'Seules les pages image vont à l’OCR.', b: 'Les pixels voyagent vers notre endpoint OCR — jamais votre historique complet du document, jamais les tableaux extraits.' },
      { t: 'Le texte revient, les pages sont supprimées.', b: 'La reconnaissance se termine et les images scannées sont effacées du serveur immédiatement. Rien n’est archivé ni mis en cache.' },
      { t: 'La reconnaissance s’affiche en aperçu.', b: 'La même étape d’aperçu que pour les natifs, pour vérifier la précision avant de télécharger.' },
    ],
    scannedNote:
      'C’est pourquoi l’offre gratuite a une allocation quotidienne explicite : chaque page scannée que nous traitons coûte de la puissance, alors nous plafonnons tout le produit à 10 conversions par jour gratuites, illimité avec Pro. Nous préférons nommer le chiffre plutôt que de glisser le coût ailleurs en silence.',
    neverH: 'Ce que nous ne faisons jamais',
    never: [
      'Stocker vos PDF, extractions ou texte OCR sur un serveur que nous contrôlons.',
      'Utiliser vos documents pour de l’entraînement, de l’analyse ou de la publicité.',
      'Retenir les pages scannées après la fin de la reconnaissance.',
      'Exiger un compte, une adresse e-mail ou une connexion pour une conversion ponctuelle.',
      'Vendre ou partager vos données à des tiers à des fins marketing.',
    ],
    collectH: 'Ce que nous collectons',
    collect: [
      'Pour les conversions ponctuelles : rien. Pas de compte, pas de télémétrie liée à votre document, pas de liste « derniers téléversés » avec bouton supprimer — car il n’y a rien à supprimer.',
      'Pour un compte Pro : une adresse e-mail et un dossier client Stripe pour la facturation. Les compteurs d’utilisation (conversions quotidiennes) sont gardés pour appliquer l’allocation gratuite. Un compte Pro ne reçoit jamais vos documents : vos fichiers restent sur votre appareil et ne sont jamais liés à votre compte.',
      'L’endpoint OCR reçoit des pages image, rien d’autre. Ces images sont traitées puis purgées sans aucun lien avec un e-mail, un compte ou un historique de conversion.',
      'Nous n’utilisons aucun traqueur publicitaire sur ce site, et nos pages ne chargent aucun script tiers hormis Stripe sur la page de facturation.',
    ],
    rightsH: 'Vos droits et comment nous joindre',
    rights: [
      'Si vous détenez un compte, vous pouvez l’exporter ou le supprimer (avec toutes les données associées) à tout moment. Comme les documents ne sont jamais stockés, il n’y a rien d’autre à effacer — c’est le principe, pas un bug.',
      'Si vous avez des questions sur le traitement des données pour votre organisation ou une conversion en cours, écrivez à privacy@zerouploadpdf.com.',
      'Cette architecture est délibérée. Nous l’avons bâtie ainsi parce que « téléversez, puis nous promettons de supprimer » est un mensonge de confiance que nous ne voulions pas raconter. Zéro téléversement n’est pas un badge apposé au-dessus : c’est ainsi que le logiciel est construit.',
    ],
    ctaH: 'Vérifiez par vous-même — convertissez un PDF dès maintenant.',
    cta: 'Ouvrir le convertisseur',
  },

  conv: {
    eyebrow: 'Convertisseur en direct',
    aria: 'Convertisseur de PDF et Office vers Excel',
    header: 'PDF · Word · PowerPoint → Excel / CSV',
    zeroUpload: 'Zéro téléversement',
    dropTitle: 'Déposez un document ici',
    dropSub: 'ou parcourez votre appareil',
    browse: 'Parcourir',
    inputAria: 'Choisissez un fichier PDF, Word, PowerPoint ou image',
    formatsAria: 'Formats pris en charge',
    outLegend: 'Format de sortie',
    xlsx: 'Excel .xlsx',
    csv: 'CSV .csv',
    note: 'Les fichiers textuels sont analysés sur cet appareil. Les scans passent par l’OCR et sont supprimés immédiatement.',
    allowance: 'Allocation quotidienne',
    complete: 'Conversion terminée',
    sheet: 'Feuille ·',
    rowsLabel: 'lignes',
    downloadXlsx: 'Télécharger .xlsx',
    downloadCsv: 'Télécharger .csv',
    convertAnother: 'Convertir un autre',
    retry: 'Réessayer',
    startOver: 'Recommencer',
    errorTitle: 'Impossible de lire ce fichier',
    clientSide: 'S’exécute côté client quand c’est possible',
    footerRight: 'Aucun serveur pour les fichiers texte. 10 conversions/jour gratuites.',
    upgradeTitle: 'Limite quotidienne atteinte',
    upgradeBody:
      'Vous avez utilisé les 10 conversions gratuites du jour. L’allocation se réinitialise à minuit UTC — ou passez à Pro pour des conversions illimitées sans plafond quotidien.',
    seePro: 'Voir les tarifs Pro',
    remindLater: 'Me le rappeler plus tard',
  },

  terms: {
    metaTitle: 'Conditions d’utilisation — ZeroUploadPDF',
    metaDesc:
      'Ce que vous devez savoir pour utiliser ZeroUploadPDF : le fonctionnement du convertisseur, la gestion de vos fichiers et les limites de la version gratuite et de Pro.',
    intro: {
      eyebrow: 'Conditions',
      title: 'Les règles sur lesquelles nous fonctionnons.',
      lede: 'Page courte, langage clair. Dernière mise à jour : 5 septembre 2026.',
    },
    sections: [
      {
        h: '1. Le service',
        ps: [
          'ZeroUploadPDF convertit des fichiers PDF, Word, PowerPoint et image en Excel (.xlsx) ou CSV (.csv). Les documents texte natifs sont traités dans votre navigateur ; les scans passent par un service OCR qui reconnaît le texte puis supprime les images immédiatement.',
          'Le plan gratuit inclut 10 conversions par jour, tous formats confondus. Pro supprime le plafond quotidien et ajoute le traitement par lots et des limites de pages plus élevées.',
        ],
      },
      {
        h: '2. Vos fichiers',
        ps: [
          'Les PDF natifs sont analysés sur votre appareil et n’en sortent jamais. Seules les pages scannées qui nécessitent réellement de l’OCR partent vers notre service de reconnaissance, où elles sont traitées, supprimées, et jamais stockées, archivées ni utilisées pour l’entraînement de modèles.',
          'À la fermeture de l’onglet, les données en mémoire de la conversion disparaissent. Il vous revient de garder vos propres copies des documents que vous convertissez.',
        ],
      },
      {
        h: '3. Comptes et paiement',
        ps: [
          'Une conversion ponctuelle ne demande jamais de compte. Les abonnements Pro sont achetés au moment du paiement, facturés par Stripe au mois ou à l’année, et annulables à tout moment. Vos documents ne sont jamais liés à votre historique de paiement.',
          'Vous vous engagez à fournir des informations de paiement exactes et à n’utiliser que des moyens de paiement que vous êtes autorisé à utiliser.',
        ],
      },
      {
        h: '4. Utilisation acceptable',
        ps: [
          'Ne téléversez que des documents que vous avez le droit d’accéder et de convertir. N’utilisez pas le service à des fins illégales, pour contourner les quotas publiés à l’aide de scripts ou de robots, ni pour perturber le service des autres utilisateurs.',
        ],
      },
      {
        h: '5. Disponibilité et responsabilité',
        ps: [
          'Le service est fourni « tel quel », sans garantie d’aucune sorte. La qualité de la conversion dépend de votre document et de votre navigateur ; l’extraction automatique peut omettre ou mal lire du contenu — vérifiez vos feuilles de calcul importantes avant de vous y fier.',
          'Dans toute la mesure permise par la loi, ZeroUploadPDF n’est pas responsable des pertes indirectes ou consécutives, y compris les pertes de données ou de bénéfices, découlant de l’utilisation du service. Rien de ce que produit le service ne constitue un conseil professionnel, juridique ou financier.',
        ],
      },
      {
        h: '6. Modifications des présentes conditions',
        ps: [
          'Nous pouvons mettre à jour ces conditions de temps à autre. Les modifications prennent effet dès leur publication sur cette page ; continuer à utiliser le service vaut acceptation. Nous pouvons limiter, suspendre ou mettre fin à l’accès en cas d’usage abusif, à notre discrétion.',
        ],
      },
      {
        h: '7. Contact',
        ps: [
          'Des questions sur ces conditions ? Écrivez à hello@zerouploadpdf.com, nous répondrons sous quelques jours ouvrés.',
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Politique de remboursement — ZeroUploadPDF',
    metaDesc:
      'La politique de remboursement de ZeroUploadPDF en chiffres clairs : annulation à tout moment, remboursement de la partie non utilisée sous 14 jours et modalités de versement.',
    intro: {
      eyebrow: 'Remboursements',
      title: 'Des conditions de remboursement en chiffres clairs.',
      lede: 'Vendre un logiciel est plus simple quand la politique est annoncée d’avance. Voici la nôtre. Dernière mise à jour : 5 septembre 2026.',
    },
    sections: [
      {
        h: 'Comment fonctionne l’annulation',
        ps: [
          'Pro est facturé au mois ou à l’année. Vous pouvez annuler à tout moment et l’accès se poursuit jusqu’à la fin de la période payée.',
          'Dans les 14 jours suivant un paiement, contactez-nous pour obtenir le remboursement intégral de la portion non utilisée de cette période. Au-delà, les remboursements sont accordés à notre discrétion, par exemple en cas de défaillance technique qui aurait empêché vos conversions.',
        ],
      },
      {
        h: 'Comment le remboursement est versé',
        ps: [
          'Les remboursements approuvés sont reversés sur le moyen de paiement d’origine. Selon l’émetteur de la carte, il peut falloir 5 à 10 jours ouvrés pour qu’ils apparaissent sur votre relevé.',
        ],
      },
      {
        h: 'Le plan gratuit',
        ps: [
          'Les remboursements ne s’appliquent qu’aux frais Pro payés. La limite gratuite quotidienne n’est pas un achat : il n’y a donc rien à rembourser.',
        ],
      },
      {
        h: 'Litiges',
        ps: [
          'Si vous pensez qu’un prélèvement est erroné, contactez-nous d’abord à hello@zerouploadpdf.com. Nous le réglerons directement avant que vous n’éleviez la réclamation auprès de votre banque.',
        ],
      },
    ],
  },
};