import type { Loc } from './types';

export const loc: Loc = {
  code: 'es',
  base: '/es',
  label: 'Español',

  meta: {
    title: 'PDF a Excel y CSV — ZeroUploadPDF convierte en tu navegador',
    description:
      'Convierte un PDF escaneado a Excel con OCR gratuito todos los días. Los PDF nativos se analizan en tu navegador con cero subidas y sin cuenta para una conversión puntual.',
    imageAlt: 'ZeroUploadPDF — convierte un PDF escaneado a Excel en tu navegador',
  },

  nav: {
    convert: 'Convertir',
    how: 'Cómo funciona',
    questions: 'Preguntas',
    pricing: 'Precios',
    privacy: 'Privacidad',
    cta: 'Convertir un PDF',
  },

  hero: {
    badge: 'PDF → Excel / CSV · privacidad total',
    h1a: 'Tu archivo nunca',
    h1b: 'sale de tu navegador.',
    subLead:
      'ZeroUploadPDF convierte PDFs a Excel y CSV en tu propio dispositivo. Los PDFs con texto se analizan aquí mismo, en la pestaña: cero subidas, cero esperas en un servidor.',
    subNative: 'Los archivos escaneados usan OCR',
    subOcr: 'gratis cada día',
    subTail: ' y se borra en cuanto termina.',
    cta: 'Convertir un PDF gratis',
    how: 'Cómo funciona',
    trust: ['Sin cuenta para conversiones puntuales', 'Nada se almacena', '10 conversiones gratis diarias'],
    converterEyebrow: 'Pruébalo aquí mismo',
  },

  how: {
    eyebrow: 'Cómo funciona',
    titleA: 'Convierte un PDF escaneado a Excel',
    titleB: ' — con OCR gratuito cada día.',
    lede: 'El documento decide la ruta. Los PDFs con texto se quedan en tu equipo; los escaneados de verdad hacen un viaje corto y documentado de ida y vuelta.',
    pathAName: 'Ruta A · PDF nativo',
    pathBName: 'Ruta B · PDF escaneado',
    nativeSteps: [
      'Suelta tu PDF en el conversor.',
      'El texto y las tablas se extraen en el navegador, con el procesador de tu equipo.',
      'Previsualiza la tabla extraída y descarga .xlsx o .csv.',
    ],
    scannedSteps: [
      'Las páginas se detectan como imágenes, no como texto.',
      'Solo las páginas escaneadas van a nuestro servicio OCR; se eliminan en cuanto termina el reconocimiento.',
      'Las tablas reconocidas vuelven a tu pestaña, listas para previsualizar y descargar.',
    ],
    nativeFooter: 'Nada sale de la pestaña',
    scannedFooter: 'Ida y vuelta, el viaje más corto posible',
    bottom: 'Ambas rutas terminan con una vista previa de la tabla. Nunca descargas a ciegas.',
    open: 'Abrir el conversor →',
  },

  comparison: {
    eyebrow: 'La diferencia',
    titleA: 'Cero subidas no es una función.',
    titleB: ' Es la arquitectura.',
    lede: 'La comparativa siguiente nos contrasta con un conversor de PDF a Excel típico. Las filas que importan son los límites, el OCR y qué pasa con tu archivo después de cerrar la pestaña.',
    colUs: 'ZeroUploadPDF',
    colThem: 'Conversor típico en línea',
    featureCol: 'Comparación',
    rows: [
      { feature: 'Dónde ocurre la conversión', us: 'En tu pestaña, en tu equipo', them: 'En sus servidores' },
      { feature: 'Tu PDF tras la conversión', us: 'Solo en memoria; se descarta, jamás se guarda', them: 'Subido y autoeliminado en ~1 hora' },
      { feature: 'OCR (PDF escaneados) en el plan gratis', us: 'Incluido en tus 10 conversiones diarias', them: 'Detrás de una prueba de pago' },
      { feature: 'Límites del plan gratis', us: 'Exactamente 10 conversiones/día, sin letra pequeña', them: 'Límites diarios vagos' },
      { feature: 'Registro para una sola conversión', us: 'Nunca se pide', them: 'No se pide, pero tu archivo igual se sube' },
      { feature: 'Archivos escaneados grandes', us: 'OCR en streaming hasta 400 páginas', them: 'El OCR suele fallar en escaneos grandes' },
      { feature: 'Vista previa antes de descargar', us: 'Incluida por defecto', them: 'Descargas a ciegas y luego rezas' },
    ],
    noteA:
      'Aquí no señalamos a ningún servicio concreto: aplicamos el estándar que cualquiera de ellos rechazaría:',
    noteB: 'declara el tratamiento de tus archivos y tus límites en números claros.',
  },

  trust: {
    eyebrow: 'Seguridad y confianza',
    titleA: 'No es "subir y borrar".',
    titleB: ' Es no subir.',
    lede: 'Otros presumían de borrar tu archivo después de una hora. Nosotros preferimos no tenerlo nunca.',
    cards: [
      { title: 'Analizado en tu dispositivo', body: 'Los PDFs con texto se leen y analizan en tu navegador, con tu CPU. Los bytes nunca viajan.' },
      { title: 'Nada se almacena', body: 'Sin cuenta, sin historial, sin copia en servidor. Al cerrar la pestaña, el archivo desaparece con ella.' },
      { title: 'El OCR se autodestruye', body: 'Las páginas escaneadas van al servicio OCR, se reconocen y se borran al terminar. Sin archivo.' },
      { title: 'Sin trucos de registro', body: 'Una conversión puntual siempre funciona sin cuenta. Registrarse es opcional, para más límite.' },
    ],
    calloutTitle: 'La distinción importa.',
    callout:
      '“Borrado después de una hora” significa que el archivo estuvo en un servidor. El nuestro jamás lo está: los PDFs nativos no salen del navegador y las páginas escaneadas existen en el servicio OCR solo los segundos que tarda en leerlas, nada más.',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    titleA: 'Lo preguntan, ',
    titleB: 'lo respondemos claro.',
    moreLead: '¿Necesitas más detalle en cada respuesta?',
    more: 'Leer las 13 preguntas →',
  },
  faqs: [
    {
      q: '¿Qué significa "cero subidas" exactamente?',
      a: 'Al arrastrar un PDF con texto, el archivo se abre y se analiza directamente en tu pestaña. Se lee del disco a la memoria de tu equipo, se convierte allí y jamás se transmite. "Cero subidas" describe exactamente eso: los bytes de tu documento no viajan a ningún servidor.',
    },
    {
      q: '¿Se guardan mis archivos después de la conversión?',
      a: 'No. Las conversiones nativas ocurren en memoria y el archivo se descarta al cerrar la pestaña. Los PDFs escaneados que van a OCR se retienen solo el tiempo de reconocer el texto y luego se eliminan: no conservamos, archivamos ni entrenamos con tus documentos.',
    },
    {
      q: '¿Qué pasa si mi PDF es un escaneo o una foto?',
      a: 'Un escaneo es una imagen de página y las imágenes no tienen "texto" que un navegador pueda leer. Para convertir un PDF escaneado a Excel, detectamos que el archivo está basado en imagen y pasamos a OCR, que extrae las letras de la imagen. Es el único caso en el que tu archivo sale del navegador, porque el reconocimiento necesita una capacidad de cómputo que no podemos ejecutar de forma segura en tu lado a escala.',
    },
    {
      q: '¿El OCR está incluido en el plan gratis?',
      a: 'Sí. Aquí el OCR no es una función de pago. Gratis incluye todo dentro de una sola cuota clara: 10 conversiones diarias que cubren PDF, Word, PowerPoint e imágenes, nativos y escaneados. Pro lo sube a ilimitado. Muchos conversores esconden el OCR tras una prueba de pago; nosotros lo decimos sin rodeos.',
    },
    {
      q: '¿Necesito crear una cuenta para convertir?',
      a: 'No. Una conversión puntual nunca exige registro, ni para archivos nativos ni escaneados. Las cuentas existen solo para suscriptores de Pro que quieren conversión por lotes, límites mayores e historial. Puedes usar tus 10 conversiones diarias gratis sin cuenta.',
    },
    {
      q: '¿Cuál es el límite gratuito exacto?',
      a: 'Gratis: 10 conversiones diarias en todos los formatos (PDF, DOCX, DOC, PPTX, PPT, JPG y PNG). La cuota se reinicia a medianoche UTC. Pro: conversiones ilimitadas, cada una hasta 400 páginas. El análisis ocurre en tu equipo, así que el tamaño práctico lo marca tu navegador, no nuestra cuota.',
    },
    {
      q: '¿Cómo manejáis los escaneos grandes?',
      a: 'Los escaneos se procesan en lotes en streaming en lugar de cargarse enteros, que es el fallo habitual de los servicios OCR en servidor. En Pro, archivos de hasta 400 páginas se convierten sin los tiempos de espera que asfixian a otros con escaneos grandes.',
    },
    {
      q: '¿Por qué un PDF escaneado tiene que salir del navegador?',
      a: 'Respuesta honesta: extraer texto de imágenes es caro. Hacerlo bien a escala requiere un modelo entrenado y computación para ejecutarlo. Como nos negamos a ejecutar modelos en tu equipo enviando tus datos en silencio, somos explícitos con el intercambio: tu escaneo va a un endpoint OCR dedicado, se procesa y se borra al instante. Tus PDFs nativos nunca hacen ese viaje.',
    },
    {
      q: '¿Qué formatos puedo convertir?',
      a: 'PDF, Word (DOCX y DOC), PowerPoint (PPTX y PPT) y las imágenes JPG y PNG. La salida es Excel (.xlsx) o CSV (.csv). Cada archivo cuenta igual en tu cuota diaria: un archivo, una conversión, así que un PDF escaneado y un Word nativo se cubren igual con las 10 gratis diarias.',
    },
    {
      q: '¿La cuota cuenta páginas o archivos?',
      a: 'Archivos. Cada documento que conviertes, tenga una página o trescientas, es una conversión. Así, las 10 gratis diarias son 10 archivos en cualquier formato, y un PDF nativo de 200 páginas cuenta como una sola. En Pro, un lote de hasta 20 archivos cuenta como 20 conversiones, sin tope diario.',
    },
    {
      q: '¿Se conservará el formato de mis tablas?',
      a: 'El conversor reconstruye la cuadrícula: columnas, filas y celdas se detectan desde el diseño, no se adivinan por párrafos. La vista previa te lo muestra antes de descargar. La fidelidad —celdas combinadas, anchos de columna— se conserva en la vista previa y en el Excel; el CSV es texto plano a propósito, porque eso es lo que lo hace universal.',
    },
    {
      q: '¿Qué navegadores y dispositivos se admiten?',
      a: 'El conversor funciona en las versiones actuales de Chrome, Edge, Firefox y Safari. Como el análisis es en el navegador, funciona en Windows, macOS, Linux y tabletas iOS y Android, sin instalar nada. Los navegadores muy antiguos (anteriores a 2021) podrían no incluir funciones del lector de PDF.',
    },
    {
      q: '¿Vendéis o compartís mis documentos?',
      a: 'No. Los archivos nativos jamás llegan a un servidor, así que no hay nada que vender ni compartir. Los escaneos de OCR se reconocen y se borran sin escribirse en ningún almacén a largo plazo: no archivamos ni entrenamos modelos con documentos de usuarios. El único que ve un archivo es el endpoint OCR que hace el reconocimiento.',
    },
  ],

  pricing: {
    metaTitle: 'Precios — conversión gratuita de PDF en el navegador, Pro para OCR intensivo',
    metaDesc: 'Precios de ZeroUploadPDF en números claros: Gratis incluye 10 conversiones al día en PDF, Word, PowerPoint e imágenes. Pro cuesta $9/mes o $6/mes con pago anual por conversiones ilimitadas.',
    eyebrow: 'Precios',
    titleA: 'Números claros, ',
    titleB: 'sin asteriscos.',
    lede: 'Gratis cubre un flujo real: 10 conversiones al día en todos los formatos. Pro existe para quienes convierten a diario.',
    free: {
      name: 'Gratis',
      tagline: 'Un producto que funciona, no un demo: 10 conversiones al día, todos los días.',
      features: [
        { text: 'PDF, Word, PowerPoint e imágenes a Excel / CSV', detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG y PDF, en una misma cuota.' },
        { text: '10 conversiones cada día', detail: 'Una cuota compartida para nativos y escaneados. Se reinicia a medianoche UTC.' },
        { text: 'Vista previa antes de descargar', detail: 'Comprueba la extracción antes de confirmar.' },
        { text: 'Sin cuenta, sin marca de agua, sin sorpresas', detail: 'Conversiones puntuales, punto.' },
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Todo en Gratis, más conversiones ilimitadas y lotes a escala.',
      popular: 'Lo más popular',
      perMo: '/mes',
      orYear: 'o ${yearly}/mes pagado anualmente',
      features: [
        { text: 'Conversiones ilimitadas', detail: 'Nativos y escaneados, todos los días, sin tope diario.' },
        { text: 'Hasta 400 páginas por archivo', detail: 'OCR en streaming que aguanta escaneos grandes.' },
        { text: 'Conversión por lotes — hasta 20 archivos', detail: 'Nativos y escaneados, mezclados.' },
        { text: 'Detección de tablas fiel al diseño', detail: 'Mantiene disposición, celdas combinadas y columnas.' },
        { text: 'Cola OCR prioritaria', detail: 'Tus escaneos saltan la cola en días cargados.' },
      ],
    },
    plansNote:
      'Todos los planes incluyen análisis nativo en el navegador, la vista previa de tabla y sin registro forzado para conversiones puntuales.',
    limitsTitle: 'Todos los límites en un solo sitio',
    limits: [
      { label: 'Formatos de salida', value: '.xlsx y .csv' },
      { label: 'Límite de páginas de PDF nativo', value: '300 páginas (según el navegador)' },
      { label: 'Cuota gratuita diaria', value: '10 conversiones, cualquier formato' },
      { label: 'Cuota Pro', value: 'Ilimitado, ≤ 400 páginas cada una' },
      { label: 'Lotes', value: 'Solo Pro, ≤ 20 archivos por tanda' },
      { label: 'Almacenamiento', value: 'No se guarda nada. Nunca.' },
    ],
    cta: 'Empezar a convertir — gratis',
    noCard: 'Sin tarjeta · no hay nada que instalar',
    noteHeading: 'Qué compra realmente el pago',
    noteSub: 'Tres cosas que cambia Pro — cantidad, tamaño y espera.',
    notes: [
      {
        icon: 'check',
        title: 'Empieza gratis, quédate gratis',
        body: 'El plan gratuito es un producto real, no una prueba. 10 conversiones al día en todos los formatos, para siempre.',
      },
      {
        icon: 'lock',
        title: 'Tus documentos nunca tocan la facturación',
        body: 'El pago lo gestiona Stripe. Tus PDFs nunca se vinculan a tu cuenta, correo o historial de pago.',
      },
      {
        icon: 'refresh',
        title: 'Cancela cuando quieras',
        body: 'Mensual o anual, cancela en dos clics. Al degradar conservas tus conversiones pasadas; nada queda retenido.',
      },
    ],
    contact: '¿Preguntas sobre un plan de equipo, facturas para contabilidad o un presupuesto de OCR ajustado? Escríbenos a',
  },

  cta: {
    eyebrow: 'Listo cuando quieras',
    title: 'Pruébalo ahora. No hay nada que instalar ni subir.',
    sub: 'Suelta un PDF en el conversor y mira la tabla extraída antes de descargar. Los archivos nativos nunca salen de tu navegador — esa es toda la idea.',
    convert: 'Convertir un PDF',
    explainer: 'Leer la explicación de cero subidas',
    stats: [
      { v: '0', label: 'archivos subidos en nativos' },
      { v: '10', label: 'conversiones gratis al día' },
      { v: '100%', label: 'vista previa antes de descargar' },
    ],
  },

  footer: {
    blurb:
      'PDF a Excel y CSV, convertido donde cuenta — en tu dispositivo. Los PDF nativos nunca salen de tu navegador; solo los escaneos de verdad llegan a nuestro servicio OCR.',
    convertHeading: 'Convertir',
    productHeading: 'Producto',
    companyHeading: 'Empresa',
    links: {
      pdfExcel: 'PDF a Excel',
      pdfCsv: 'PDF a CSV',
      scannedOcr: 'PDF escaneados (OCR)',
      how: 'Cómo funciona',
      questions: 'Preguntas y respuestas',
      pricing: 'Precios',
      privacy: 'Privacidad y cero subidas',
      terms: 'Términos del servicio',
      refunds: 'Política de reembolsos',
      contact: 'Contacto',
    },
    footerTagline: 'Sin subidas. Sin cuentas. Sin copias en servidor.',
  },

  convert: {
    metaTitle: 'Conversor de PDF a Excel — gratis, en tu navegador',
    metaDesc:
      'Convierte PDF a Excel o CSV gratis. Los PDF nativos se analizan en tu navegador con cero subidas; los escaneados usan OCR gratuito a diario. Previsualiza antes de descargar.',
    intro: {
      eyebrow: 'Conversor',
      title: 'PDF a Excel y CSV, sin la subida.',
      lede: 'Suelta un archivo abajo. Los PDF con texto se analizan en este dispositivo: tu documento nunca sale del navegador. Los escaneados hacen un breve viaje documentado a OCR y se borran al instante.',
    },
    notes: [
      'PDF posterior a 2008, firmado digitalmente o nacido digital → se analiza en local',
      'Páginas escaneadas o fotografiadas → se aplica la cuota gratuita de OCR',
      'Sin cuenta, sin marca de agua, sin copia en servidor',
    ],
  },

  questions: {
    metaTitle: 'Preguntas y respuestas — ZeroUploadPDF',
    metaDesc:
      'Cada pregunta sobre ZeroUploadPDF, respondida con claridad: qué significa cero subidas, cómo funciona la cuota gratuita de 10 conversiones al día, OCR, formatos y privacidad.',
    intro: {
      eyebrow: 'Preguntas y respuestas',
      titleA: 'Todo, ',
      titleB: 'respondido con claridad.',
      lede: 'Las mismas respuestas honestas que ya están en la portada, juntas en una página — con los detalles de privacidad y cuota al completo.',
    },
    note:
      '¿Sigue sin quedar claro algo? La política de privacidad entra en detalle técnico y los precios comparan las cuotas gratis y Pro lado a lado.',
  },

  privacy: {
    metaTitle: 'Privacidad — la arquitectura de cero subidas, explicada sin rodeos',
    metaDesc:
      'Cómo protege ZeroUploadPDF tus PDFs: los nativos se analizan en tu navegador y nunca se suben; los escaneados van solo a OCR y se borran al instante. Sin almacenamiento, sin entrenar con tus datos.',
    intro: {
      eyebrow: 'Privacidad y arquitectura',
      title: 'Cero subidas, explicado en lenguaje claro.',
      lede: 'La mayoría de las herramientas de PDF anuncian que borran tu archivo tras una hora. La nuestra no tiene nada que borrar para los nativos y retiene los escaneados los segundos que tarda el OCR. Esta página muestra toda la arquitectura, tal como funciona.',
    },
    nativeH: 'La ruta privada: un PDF nativo',
    nativeLead:
      'Si tu PDF ha nacido digital —un informe exportado de un procesador de textos, un extracto, un formulario generado por software— contiene una capa de texto que el navegador puede leer. Esa es toda la conversión, y ocurre donde el archivo ya está: en tu dispositivo.',
    nativeSteps: [
      { t: 'El PDF se selecciona en tu dispositivo.', b: 'El archivo se lee en la memoria del navegador. Nunca viaja por la red.' },
      { t: 'Las tablas se detectan localmente.', b: 'Texto, columnas y alineación se analizan con la CPU de tu equipo.' },
      { t: 'Previsualizas la tabla.', b: 'La extracción se muestra en la pestaña para que la verifiques antes de guardar nada.' },
      { t: 'Descargas el archivo.', b: 'El .xlsx o .csv se genera en tu navegador y se guarda donde elijas.' },
      { t: 'La pestaña se cierra.', b: 'El archivo sale de la memoria. No existe copia en ningún otro lugar porque nunca se creó.' },
    ],
    scannedH: 'La excepción honesta: un PDF escaneado',
    scannedLead:
      'Un escaneo es una fotografía de página. Las fotografías no contienen texto que un navegador pueda leer, y reconocer letras en una imagen exige un modelo entrenado y potencia real. Así que este único caso hace un viaje — lo más corto posible — y se borra al llegar.',
    scannedSteps: [
      { t: 'Las páginas se detectan como imágenes.', b: 'Un PDF escaneado no tiene capa de texto; lo identificamos como basado en imagen en el mismo paso donde un nativo se analiza en local.' },
      { t: 'Solo las páginas imagen van a OCR.', b: 'Los píxeles viajan a nuestro endpoint de OCR — nunca tu historial completo del documento, nunca las tablas extraídas.' },
      { t: 'Vuelve el texto y se borran las páginas.', b: 'Termina el reconocimiento y las imágenes se borran del servidor de inmediato. Nada se archiva ni se guarda en caché.' },
      { t: 'El reconocimiento se muestra como vista previa.', b: 'El mismo paso de vista previa que los nativos, para comprobar la precisión antes de descargar.' },
    ],
    scannedNote:
      'Por eso el plan gratis tiene una cuota diaria explícita: cada página escaneada que procesamos cuesta cómputo, así que limitamos todo el producto a 10 conversiones al día gratis, ilimitadas con Pro. Preferimos nombrar el número a esconder el coste en otra parte.',
    neverH: 'Lo que nunca hacemos',
    never: [
      'Almacenar tus PDFs, tablas extraídas o texto OCR en ningún servidor que controlemos.',
      'Usar tus documentos para entrenamiento, análisis o publicidad.',
      'Retener páginas escaneadas después de completar el reconocimiento.',
      'Exigir cuenta, correo o inicio de sesión para una conversión puntual.',
      'Vender o compartir tus datos con terceros con fines de marketing.',
    ],
    collectH: 'Lo que sí recopilamos',
    collect: [
      'Para conversiones puntuales: nada. No hay cuenta, ni telemetría ligada a tu documento, ni lista de "últimos enviados" con botón de borrar — porque no hay nada que borrar.',
      'Para una cuenta Pro: una dirección de correo y un registro de cliente de Stripe para facturación. Los contadores de uso (conversiones diarias) se guardan para aplicar la cuota gratuita. Una cuenta Pro nunca recibe tus documentos: tus archivos se quedan en tu dispositivo y jamás se vinculan a la cuenta.',
      'El endpoint OCR recibe páginas de imagen, nada más. Esas imágenes se procesan y se purgan sin relación con ningún correo, cuenta o historial de conversión.',
      'No usamos rastreadores publicitarios en este sitio, y nuestras páginas no cargan scripts de terceros aparte de Stripe en la página de facturación.',
    ],
    rightsH: 'Tus derechos y cómo contactarnos',
    rights: [
      'Si tienes una cuenta, puedes exportarla o eliminarla (con todos sus datos) en cualquier momento. Como los documentos nunca se almacenan, no hay nada más que borrar — es el punto, no un error.',
      'Si tienes preguntas sobre el tratamiento de datos para tu organización o sobre una conversión actual, escríbenos a privacy@zerouploadpdf.com.',
      'Esta arquitectura es deliberada. La construimos así porque "súbelo y prometemos borrarlo" es una mentira de confianza que no quisimos contar. Cero subidas no es una insignia: es cómo está hecho el software.',
    ],
    ctaH: 'Compruébalo — convierte un PDF ahora mismo.',
    cta: 'Abrir el conversor',
  },

  conv: {
    eyebrow: 'Conversor en vivo',
    aria: 'Conversor de PDF y Office a Excel',
    header: 'PDF · Word · PowerPoint → Excel / CSV',
    zeroUpload: 'Cero subidas',
    dropTitle: 'Suelta un documento aquí',
    dropSub: 'o explóralo desde tu dispositivo',
    browse: 'Explorar archivos',
    inputAria: 'Elige un archivo PDF, Word, PowerPoint o imagen',
    formatsAria: 'Formatos admitidos',
    outLegend: 'Formato de salida',
    xlsx: 'Excel .xlsx',
    csv: 'CSV .csv',
    note: 'Los archivos de texto se analizan en este dispositivo. Los escaneos pasan por OCR y se borran de inmediato.',
    allowance: 'Cuota diaria',
    complete: 'Conversión completada',
    sheet: 'Hoja ·',
    rowsLabel: 'filas',
    downloadXlsx: 'Descargar .xlsx',
    downloadCsv: 'Descargar .csv',
    convertAnother: 'Convertir otro',
    retry: 'Reintentar',
    startOver: 'Empezar de nuevo',
    errorTitle: 'No pudimos leer ese archivo',
    clientSide: 'Se ejecuta en tu dispositivo siempre que puede',
    footerRight: 'Sin servidores para archivos de texto. 10 conversiones/día gratis.',
    upgradeTitle: 'Cuota diaria alcanzada',
    upgradeBody:
      'Has usado las 10 conversiones gratuitas de hoy. La cuota se reinicia a medianoche UTC — o pasa a Pro para conversiones ilimitadas sin tope diario.',
    seePro: 'Ver precios de Pro',
    remindLater: 'Recordármelo luego',
  },

  terms: {
    metaTitle: 'Términos del servicio — ZeroUploadPDF',
    metaDesc:
      'Los términos de uso de ZeroUploadPDF: cómo funciona el conversor, cómo se gestionan tus archivos y los límites de la versión gratuita y Pro.',
    intro: {
      eyebrow: 'Términos',
      title: 'Las reglas con las que trabajamos.',
      lede: 'Página corta y en lenguaje claro. Última actualización: 5 de septiembre de 2026.',
    },
    sections: [
      {
        h: '1. El servicio',
        ps: [
          'ZeroUploadPDF convierte archivos PDF, Word, PowerPoint e imágenes a Excel (.xlsx) o CSV (.csv). Los documentos de texto nativos se procesan en tu navegador; los escaneados usan un servicio OCR que reconoce el texto y borra las imágenes de inmediato después.',
          'El plan gratuito incluye 10 conversiones al día en todos los formatos. Pro elimina el tope diario y añade conversión por lotes y límites de páginas mayores.',
        ],
      },
      {
        h: '2. Tus archivos',
        ps: [
          'Los PDF nativos se analizan en tu dispositivo y nunca lo abandonan. Solo las páginas escaneadas que de verdad necesitan OCR viajan a nuestro servicio de reconocimiento, donde se procesan, se borran y jamás se almacenan, archivan ni usan para entrenamiento.',
          'Al cerrar la pestaña del navegador, los datos en memoria de una conversión desaparecen. Eres responsable de conservar tus propias copias de los documentos que conviertes.',
        ],
      },
      {
        h: '3. Cuentas y pagos',
        ps: [
          'Una conversión puntual nunca exige cuenta. Las suscripciones Pro se compran al finalizar la compra, las factura Stripe mensual o anualmente y se pueden cancelar en cualquier momento. Tus documentos nunca se vinculan a tu historial de pagos.',
          'Aceptas facilitar datos de pago correctos y usar solo métodos de pago que estés autorizado a utilizar.',
        ],
      },
      {
        h: '4. Uso aceptable',
        ps: [
          'Solo sube documentos que tengas derecho a acceder y convertir. No uses el servicio con fines ilegales, para saltarte las cuotas publicadas con scripts o bots, ni para perjudicar a otros usuarios.',
        ],
      },
      {
        h: '5. Disponibilidad y responsabilidad',
        ps: [
          'El servicio se ofrece "tal cual", sin garantías de ningún tipo. La calidad de la conversión depende de tu documento y tu navegador, y la extracción automática puede omitir o malinterpretar contenido: comprueba las hojas de cálculo importantes antes de confiar en ellas.',
          'En la máxima medida permitida por la ley, ZeroUploadPDF no se hace responsable de pérdidas indirectas o consecuenciales, incluidos datos o beneficios perdidos, derivadas del uso del servicio. Nada de lo que produce el servicio constituye asesoramiento profesional, legal ni financiero.',
        ],
      },
      {
        h: '6. Cambios en estos términos',
        ps: [
          'Podemos actualizar estos términos de vez en cuando. Los cambios se aplican al publicarse en esta página, y seguir usando el servicio implica aceptarlos. Podemos limitar, suspender o terminar el acceso ante un uso abusivo, a nuestro criterio.',
        ],
      },
      {
        h: '7. Contacto',
        ps: [
          '¿Preguntas sobre estos términos? Escríbenos a hello@zerouploadpdf.com y responderemos en unos días laborables.',
        ],
      },
    ],
  },

refunds: {
    metaTitle: 'Política de reembolsos — ZeroUploadPDF',
    metaDesc:
      'La política de reembolsos de ZeroUploadPDF en cifras claras: cancelación en cualquier momento, reembolso de la parte no usada dentro de 14 días y cómo se abona.',
    intro: {
      eyebrow: 'Reembolsos',
      title: 'Condiciones de devolución, en números claros.',
      lede: 'Vender software es más fácil cuando la política se declara por adelantado. Aquí está la nuestra. Última actualización: 5 de septiembre de 2026.',
    },
    sections: [
      {
        h: 'Cómo funciona la cancelación',
        ps: [
          'Pro se factura mensual o anualmente. Puedes cancelar en cualquier momento y el acceso continúa hasta el final del periodo pagado.',
          'Durante los 14 días siguientes a un pago, contáctanos para obtener un reembolso completo de la parte no usada de ese periodo. Los reembolsos fuera de ese plazo se conceden a nuestro criterio, por ejemplo cuando un fallo técnico impidió tus conversiones.',
        ],
      },
      {
        h: 'Cómo se paga el reembolso',
        ps: [
          'Los reembolsos aprobados vuelven al método de pago original. Según el emisor de la tarjeta, puede tardar de 5 a 10 días laborables en aparecer en tu extracto.',
        ],
      },
      {
        h: 'El plan gratuito',
        ps: [
          'Los reembolsos solo aplican a cargos Pro de pago. La cuota gratuita diaria no es una compra, así que no hay nada que devolver ahí.',
        ],
      },
      {
        h: 'Disputas',
        ps: [
          'Si crees que un cargo fue incorrecto, contáctenos primero en hello@zerouploadpdf.com. Lo resolvemos directamente antes de que eleves el caso a tu banco.',
        ],
      },
    ],
  },

  auth: {
    navSignIn: 'Iniciar sesión',
    signIn: { metaTitle: 'Iniciar sesión', metaDesc: 'Inicia sesión en tu cuenta', title: 'Iniciar sesión', lede: 'Bienvenido de nuevo' },
    signUp: { metaTitle: 'Crear cuenta', metaDesc: 'Regístrate para una cuenta gratuita', title: 'Regístrate', lede: 'Crea tu cuenta' },
    forgot: { metaTitle: 'Restablecer contraseña', metaDesc: 'Restablece tu contraseña', title: 'Restablecer contraseña', lede: 'Ingresa tu correo' },
    reset: { metaTitle: 'Restablecer contraseña', metaDesc: 'Elige una nueva contraseña', title: 'Restablecer contraseña', lede: 'Crea una nueva contraseña' },
    verify: { metaTitle: 'Verificar correo', metaDesc: 'Verifica tu dirección de correo', title: 'Verificar correo', lede: 'Revisa tu bandeja' },
    accountPage: { metaTitle: 'Mi cuenta', metaDesc: 'Configura tu cuenta', title: 'Mi cuenta', lede: 'Gestiona tu cuenta' },
    name: 'Nombre',
    email: 'Correo electrónico',
    password: 'Contraseña',
    signInCta: 'Iniciar sesión',
    createCta: 'Crear cuenta',
    sendResetCta: 'Enviar enlace de restablecimiento',
    resendVerifyCta: 'Reenviar enlace de verificación',
    haveAccount: '¿Ya tienes una cuenta?',
    noAccount: 'No tienes una cuenta?',
    forgotLink: '¿Olvidaste tu contraseña?',
    backHome: 'Volver al inicio',
    resetSent: 'Hemos enviado un enlace de restablecimiento a tu correo',
    verifySent: 'Hemos enviado un enlace de verificación a tu correo',
    linkInvalid: 'El enlace es inválido o ha expirado',
    verifyNotice: 'Por favor, verifica tu correo electrónico para completar el registro',
    planFree: 'Gratis',
    planPro: 'Pro',
    usageToday: 'Conversiones hoy',
    unlimited: 'Ilimitado',
    history: 'Historial de conversiones',
    historyEmpty: 'No hay conversiones previas',
    historyDate: 'Fecha',
    historyFile: 'Archivo',
    historyFormat: 'Formato',
    historyStatus: 'Estado',
    statusOk: 'Completado',
    statusFailed: 'Fallido',
    signOut: 'Cerrar sesión',
    accountHome: 'Mi cuenta',
  },
};