export type LocaleCode = 'es' | 'ja' | 'fr' | 'de' | 'pt' | 'ko' | 'it';

export interface FaqItem {
  q: string;
  a: string;
}

export interface Loc {
  /** ISO 639-1 code, e.g. "es" */
  code: LocaleCode;
  /** URL prefix, e.g. "/es" (used to compute localized internal links) */
  base: string;
  /** Native name of the language, shown in the switcher */
  label: string;

  meta: { title: string; description: string; imageAlt: string };

  nav: {
    convert: string;
    how: string;
    questions: string;
    pricing: string;
    privacy: string;
    cta: string;
  };

  hero: {
    badge: string;
    h1a: string;
    h1b: string;
    subLead: string;
    subNative: string;
    subOcr: string;
    subTail: string;
    cta: string;
    how: string;
    trust: [string, string, string];
    converterEyebrow: string;
  };

  how: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    pathAName: string;
    pathBName: string;
    nativeSteps: [string, string, string];
    scannedSteps: [string, string, string];
    nativeFooter: string;
    scannedFooter: string;
    bottom: string;
    open: string;
  };

  comparison: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    colUs: string;
    colThem: string;
    featureCol: string;
    rows: { feature: string; us: string; them: string }[];
    noteA: string;
    noteB: string;
  };

  trust: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    cards: { title: string; body: string }[];
    calloutTitle: string;
    callout: string;
  };

  faq: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    moreLead: string;
    more: string;
  };
  faqs: FaqItem[];

  pricing: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titleA: string;
    titleB: string;
    lede: string;
    free: { name: string; tagline: string; features: { text: string; detail: string }[] };
    pro: {
      name: string;
      tagline: string;
      popular: string;
      perMo: string;
      orYear: string;
      features: { text: string; detail: string }[];
    };
    plansNote: string;
    limitsTitle: string;
    limits: { label: string; value: string }[];
    noteHeading: string;
    noteSub: string;
    notes: { icon: 'check' | 'lock' | 'refresh'; title: string; body: string }[];
    contact: string;
    cta: string;
    noCard: string;
  };

cta: {
    eyebrow: string;
    title: string;
    sub: string;
    convert: string;
    explainer: string;
    stats: { v: string; label: string }[];
  },

  auth: {
    navSignIn: string;
    signIn: { metaTitle: string; metaDesc: string; title: string; lede: string };
    signUp: { metaTitle: string; metaDesc: string; title: string; lede: string };
    forgot: { metaTitle: string; metaDesc: string; title: string; lede: string };
    reset: { metaTitle: string; metaDesc: string; title: string; lede: string };
    verify: { metaTitle: string; metaDesc: string; title: string; lede: string };
    accountPage: { metaTitle: string; metaDesc: string; title: string; lede: string };
    name: string;
    email: string;
    password: string;
    signInCta: string;
    createCta: string;
    sendResetCta: string;
    resendVerifyCta: string;
    haveAccount: string;
    noAccount: string;
    forgotLink: string;
    backHome: string;
    resetSent: string;
    verifySent: string;
    linkInvalid: string;
    verifyNotice: string;
    planFree: string;
    planPro: string;
    usageToday: string;
    unlimited: string;
    history: string;
    historyEmpty: string;
    historyDate: string;
    historyFile: string;
    historyFormat: string;
    historyStatus: string;
    statusOk: string;
    statusFailed: string;
    signOut: string;
    accountHome: string;
  },
};

  footer: {
    blurb: string;
    convertHeading: string;
    productHeading: string;
    companyHeading: string;
    links: {
      pdfExcel: string;
      pdfCsv: string;
      scannedOcr: string;
      how: string;
      questions: string;
      pricing: string;
      privacy: string;
      terms: string;
      refunds: string;
      contact: string;
    };
    footerTagline: string;
  };

  convert: {
    metaTitle: string;
    metaDesc: string;
    intro: { eyebrow: string; title: string; lede: string };
    notes: [string, string, string];
  };

  questions: {
    metaTitle: string;
    metaDesc: string;
    intro: { eyebrow: string; titleA: string; titleB: string; lede: string };
    note: string;
  };

  privacy: {
    metaTitle: string;
    metaDesc: string;
    intro: { eyebrow: string; title: string; lede: string };
    nativeH: string;
    nativeLead: string;
    nativeSteps: { t: string; b: string }[];
    scannedH: string;
    scannedLead: string;
    scannedSteps: { t: string; b: string }[];
    scannedNote: string;
    neverH: string;
    never: string[];
    collectH: string;
    collect: string[];
    rightsH: string;
    rights: string[];
    ctaH: string;
    cta: string;
  };

  terms: {
    metaTitle: string;
    metaDesc: string;
    intro: { eyebrow: string; title: string; lede: string };
    sections: { h: string; ps: string[] }[];
  };

  refunds: {
    metaTitle: string;
    metaDesc: string;
    intro: { eyebrow: string; title: string; lede: string };
    sections: { h: string; ps: string[] }[];
  };

  conv: {
    eyebrow: string;
    aria: string;
    header: string;
    zeroUpload: string;
    dropTitle: string;
    dropSub: string;
    browse: string;
    inputAria: string;
    formatsAria: string;
    outLegend: string;
    xlsx: string;
    csv: string;
    note: string;
    allowance: string;
    complete: string;
    sheet: string;
    rowsLabel: string;
    downloadXlsx: string;
    downloadCsv: string;
    convertAnother: string;
    retry: string;
    startOver: string;
    errorTitle: string;
    clientSide: string;
    footerRight: string;
    upgradeTitle: string;
    upgradeBody: string;
    seePro: string;
    remindLater: string;
  };
}