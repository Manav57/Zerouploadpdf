import type { Loc } from './types';

export const loc: Loc = {
  code: 'pt',
  base: '/pt',
  label: 'Português',

  meta: {
    title: 'PDF para Excel e CSV — O ZeroUploadPDF converte no seu navegador',
    description:
      'Converta um PDF digitalizado em Excel com OCR gratuito todos os dias. PDFs nativos são processados no seu navegador, sem upload e sem conta para conversão avulsa.',
    imageAlt: 'ZeroUploadPDF — converta um PDF digitalizado em Excel no seu navegador',
  },

  nav: {
    convert: 'Converter',
    how: 'Como funciona',
    questions: 'Perguntas',
    pricing: 'Preços',
    privacy: 'Privacidade',
    cta: 'Converter um PDF',
  },

  hero: {
    badge: 'PDF → Excel / CSV · privacidade primeiro',
    h1a: 'Seu arquivo nunca',
    h1b: 'sai do seu navegador.',
    subLead:
      'O ZeroUploadPDF converte PDFs em Excel e CSV no seu próprio dispositivo. PDFs nativos são processados aqui, no aba — zero upload, zero espera em servidor.',
    subNative: 'Arquivos escaneados usam OCR',
    subOcr: 'gratuito todos os dias',
    subTail: ' e é apagado assim que termina.',
    cta: 'Converter um PDF grátis',
    how: 'Como funciona',
    trust: ['Sem conta para conversões avulsas', 'Nada é armazenado', '10 conversões grátis por dia'],
    converterEyebrow: 'Experimente aqui mesmo',
  },

  how: {
    eyebrow: 'Como funciona',
    titleA: 'Converta um PDF digitalizado em Excel',
    titleB: ' — com OCR gratuito todos os dias.',
    lede: 'O documento decide a rota. PDFs com texto ficam na sua máquina; escaneamentos reais fazem uma viagem curta e documentada, ida e volta.',
    pathAName: 'Caminho A · PDF nativo',
    pathBName: 'Caminho B · PDF escaneado',
    nativeSteps: [
      'Arraste seu PDF para o conversor.',
      'O texto e as tabelas são extraídos no navegador, usando o processador do seu dispositivo.',
      'Pré-visualize a tabela extraída e baixe .xlsx ou .csv.',
    ],
    scannedSteps: [
      'As páginas são detectadas como imagens, não como texto.',
      'Somente as páginas escaneadas vão ao nosso serviço de OCR — apagadas assim que o reconhecimento termina.',
      'As tabelas reconhecidas voltam à sua aba, prontas para pré-visualizar e baixar.',
    ],
    nativeFooter: 'Nada sai da aba',
    scannedFooter: 'Ida e volta — a viagem mais curta possível',
    bottom: 'Ambos os caminhos terminam com uma pré-visualização. Você nunca baixa às cegas.',
    open: 'Abrir o conversor →',
  },

  comparison: {
    eyebrow: 'A diferença',
    titleA: 'Zero upload não é um recurso.',
    titleB: ' É a arquitetura.',
    lede: 'A tabela abaixo nos compara a um conversor de PDF para Excel típico. As linhas que importam são os limites, o OCR e o que acontece com seu arquivo depois que a aba fecha.',
    colUs: 'ZeroUploadPDF',
    colThem: 'Conversor típico online',
    featureCol: 'Comparação',
    rows: [
      { feature: 'Onde acontece a conversão', us: 'Na sua aba, no seu hardware', them: 'Nos servidores deles' },
      { feature: 'Seu PDF após a conversão', us: 'Só em memória — descartado, nunca armazenado', them: 'Enviado e auto-excluído em ~1 hora' },
      { feature: 'OCR (PDF escaneados) no plano grátis', us: 'Incluído nas suas 10 conversões diárias', them: 'Escondido atrás de teste pago' },
      { feature: 'Limites do plano grátis', us: 'Exatamente 10 conversões/dia, declarados', them: 'Limites diários vagos' },
      { feature: 'Cadastro para uma conversão', us: 'Nunca exigido', them: 'Não exigido — mas seu arquivo ainda é enviado' },
      { feature: 'Escaneamentos grandes', us: 'OCR em streaming até 400 páginas', them: 'OCR costuma falhar em arquivos grandes' },
      { feature: 'Pré-visualização antes do download', us: 'Incluída por padrão', them: 'Baixar às cegas e torcer' },
    ],
    noteA:
      'Não apontamos aqui nenhum serviço específico — aplicamos o padrão que qualquer um deles recusaria:',
    noteB: 'declare o tratamento dos seus arquivos e seus limites em números claros.',
  },

  trust: {
    eyebrow: 'Segurança e confiança',
    titleA: 'Não é uma história de "enviar e excluir".',
    titleB: ' É de não enviar.',
    lede: 'Outros ferramentas pregavam que excluiriam seu arquivo após uma hora. Preferimos simplesmente não tê-lo.',
    cards: [
      { title: 'Processado no seu dispositivo', body: 'PDFs com texto são lidos e analisados no seu navegador, com a sua CPU. Os bytes nunca viajam.' },
      { title: 'Nada é armazenado', body: 'Sem conta, sem histórico, sem cópia em servidor. Ao fechar a aba, o arquivo vai junto.' },
      { title: 'O OCR se autodestrói', body: 'Páginas escaneadas vão ao OCR, são reconhecidas e apagadas ao terminar. Sem arquivo.' },
      { title: 'Sem armadilha de cadastro', body: 'Uma conversão avulsa sempre funciona sem conta. Cadastrar-se é opcional, para limites maiores.' },
    ],
    calloutTitle: 'A distinção importa.',
    callout:
      '"Excluído após uma hora" significa que o arquivo esteve num servidor. O nosso nunca está — PDFs nativos não saem do navegador, e páginas escaneadas existem no serviço de OCR apenas pelos segundos que leva para lê-las, nada mais.',
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    titleA: 'Perguntam muito, ',
    titleB: 'respondemos claro.',
    more: 'Ler as 13 perguntas →',
    moreLead: 'Quer mais detalhes em cada resposta?',
  },
  faqs: [
    {
      q: 'O que "zero upload" significa na prática para meu PDF?',
      a: 'Quando você adiciona um PDF com texto, o arquivo é aberto e processado diretamente na sua aba. Ele é lido do disco para a memória do seu dispositivo, convertido ali mesmo e nunca transmitido. "Zero upload" descreve exatamente isso: os bytes do seu documento não viajam para servidor nenhum.',
    },
    {
      q: 'Meus arquivos são armazenados após a conversão?',
      a: 'Não. Conversões nativas acontecem em memória e o arquivo é descartado quando a aba fecha. Para escaneamentos enviados ao OCR, a imagem fica retida apenas o tempo de reconhecer o texto e então é apagada — não retemos, arquivamos nem treinamos com seus documentos.',
    },
    {
      q: 'E se meu PDF for um escaneamento ou fotos?',
      a: 'Um arquivo escaneado é uma foto de página, e fotos não têm "texto" que um navegador possa ler. Para converter um PDF digitalizado em Excel, detectamos que o arquivo é baseado em imagem e passamos para OCR, que lê as letras da imagem. É o único caso em que seu arquivo sai do navegador, porque o reconhecimento exige capacidade de processamento que não podemos executar com segurança do lado do cliente em escala.',
    },
    {
      q: 'O OCR está incluído no plano grátis?',
      a: 'Sim. Aqui o OCR não é um recurso pago. O Grátis inclui tudo dentro de uma cota clara: 10 conversões diárias cobrindo PDF, Word, PowerPoint e imagens — nativos e escaneados. O Pro eleva para ilimitado. Muitos conversores escondem o OCR atrás de um teste pago; nós declaramos o número sem rodeios.',
    },
    {
      q: 'Preciso criar uma conta para converter?',
      a: 'Não. Uma conversão avulsa nunca exige cadastro, nem para nativos nem para escaneados. Contas existem apenas para assinantes do Pro que querem conversão em lote, limites maiores e histórico. Você pode usar suas 10 conversões grátis diárias sem conta.',
    },
    {
      q: 'Qual é exatamente o limite gratuito?',
      a: 'Grátis: 10 conversões por dia em todos os formatos — PDF, DOCX, DOC, PPTX, PPT, JPG e PNG. A cota reinicia à meia-noite UTC. Pro: conversões ilimitadas, cada uma com até 400 páginas. Como o processamento roda no seu hardware, o tamanho prático depende do navegador, não da nossa cota.',
    },
    {
      q: 'Como vocês lidam com escaneamentos grandes?',
      a: 'Escaneamentos são processados em lotes em streaming, em vez de carregados inteiros — o ponto de falha comum nos OCR de servidor. No Pro, arquivos de até 400 páginas convertem sem os timeouts que sufocam outros serviços em arquivos grandes.',
    },
    {
      q: 'Por que um PDF escaneado precisa sair do navegador?',
      a: 'Resposta honesta: extrair texto de imagens é caro. Fazer isso bem, em escala, exige um modelo treinado e poder de processamento. Como recusamos rodar modelos na sua máquina enviando seus dados silenciosamente, somos explícitos sobre a troca: seu escaneamento vai a um endpoint de OCR dedicado, é processado e apagado imediatamente. Seus PDFs nativos nunca fazem essa viagem.',
    },
    {
      q: 'Quais formatos posso converter?',
      a: 'PDF, Word (DOCX e DOC), PowerPoint (PPTX e PPT) e as imagens JPG e PNG. A saída é Excel (.xlsx) ou CSV (.csv). Cada arquivo conta igual na sua cota: um arquivo, uma conversão — então um escaneado e um Word nativo são cobertos igualmente pelas 10 grátis diárias.',
    },
    {
      q: 'O limite conta páginas ou arquivos?',
      a: 'Arquivos. Cada documento que você converte — uma página ou trezentas — é uma conversão. As 10 grátis são 10 arquivos por dia em qualquer formato, e um PDF nativo de 200 páginas conta como uma só. No Pro, um lote de até 20 arquivos conta como 20 conversões, sem teto diário.',
    },
    {
      q: 'Minhas tabelas manterão a formatação?',
      a: 'O conversor reconstrói a grade em si: colunas, linhas e células são detectadas a partir do layout, não adivinhadas por parágrafos. A pré-visualização mostra o resultado antes do download. A fidelidade — células mescladas, larguras de coluna — é preservada na pré-visualização e no Excel; o CSV é texto puro de propósito, porque é isso que o torna universal.',
    },
    {
      q: 'Quais navegadores e dispositivos são suportados?',
      a: 'O conversor roda nas versões atuais de Chrome, Edge, Firefox e Safari. Como o processamento acontece no navegador, funciona em Windows, macOS, Linux e tablets iOS e Android, sem instalar nada. Navegadores muito antigos (anteriores a 2021) podem não ter funções que o leitor de PDF usa.',
    },
    {
      q: 'Vocês vendem ou compartilham meus documentos?',
      a: 'Não. Arquivos nativos nunca chegam a um servidor, então não há o que vender ou compartilhar. Escaneamentos de OCR são reconhecidos e apagados sem serem gravados em qualquer armazenamento de longo prazo — não arquivamos nem treinamos modelos com documentos de usuários. O único que vê um arquivo é o endpoint de OCR.',
    },
  ],

  pricing: {
    metaTitle: 'Preços — conversão de PDF grátis no navegador, Pro para OCR pesado',
    metaDesc: 'Preços do ZeroUploadPDF em números claros: Grátis inclui 10 conversões por dia em PDF, Word, PowerPoint e imagens. Pro custa US$ 9/mês ou US$ 6/mês com pagamento anual para conversões ilimitadas.',
    eyebrow: 'Preços',
    titleA: 'Números claros, ',
    titleB: 'sem asteriscos.',
    lede: 'O Grátis cobre um fluxo real — 10 conversões por dia em todos os formatos. O Pro existe para quem converte todos os dias.',
    free: {
      name: 'Grátis',
      tagline: 'Um produto que funciona, não um teste: 10 conversões por dia, todos os dias.',
      features: [
        { text: 'PDF, Word, PowerPoint e imagens para Excel / CSV', detail: 'DOCX, DOC, PPTX, PPT, JPG, PNG e PDF — uma única cota.' },
        { text: '10 conversões todos os dias', detail: 'Uma cota compartilhada para nativos e escaneados. Reinicia à meia-noite UTC.' },
        { text: 'Pré-visualização antes de baixar', detail: 'Confira a extração antes de confirmar.' },
        { text: 'Sem conta, sem marca d’água, sem surpresas', detail: 'Conversões avulsas, ponto.' },
      ],
    },
    pro: {
      name: 'Pro',
      tagline: 'Tudo do Grátis, mais conversões ilimitadas e lotes em escala.',
      popular: 'Mais popular',
      perMo: '/mês',
      orYear: 'ou ${yearly}/mês na cobrança anual',
      features: [
        { text: 'Conversões ilimitadas', detail: 'Nativos e escaneados, todos os dias, sem teto.' },
        { text: 'Até 400 páginas por arquivo', detail: 'OCR em streaming que aguenta escaneamentos grandes.' },
        { text: 'Conversão em lote — até 20 arquivos', detail: 'Nativos e escaneados, misturados.' },
        { text: 'Detecção de tabelas fiel ao layout', detail: 'Mantém disposição, células mescladas e colunas.' },
        { text: 'Fila de OCR prioritária', detail: 'Seus escaneamentos pulam a fila em dias cheios.' },
      ],
    },
    plansNote:
      'Todos os planos incluem processamento nativo no navegador, pré-visualização de tabela e nenhum cadastro forçado para conversões avulsas.',
    limitsTitle: 'Todos os limites em um só lugar',
    limits: [
      { label: 'Formatos de saída', value: '.xlsx e .csv' },
      { label: 'Limite de páginas de PDF nativo', value: '300 páginas (conforme o navegador)' },
      { label: 'Cota gratuita diária', value: '10 conversões, qualquer formato' },
      { label: 'Cota Pro', value: 'Ilimitado, ≤ 400 páginas cada' },
      { label: 'Lotes', value: 'Só Pro, ≤ 20 arquivos / leva' },
      { label: 'Armazenamento', value: 'Nada é armazenado. Nunca.' },
    ],
    cta: 'Começar a converter — grátis',
    noCard: 'Sem cartão · nada para instalar',
    noteHeading: 'O que o pagamento realmente compra',
    noteSub: 'Três coisas que o Pro muda — quantidade, tamanho e espera.',
    notes: [
      {
        icon: 'check',
        title: 'Comece grátis, continue grátis',
        body: 'O plano gratuito é um produto de verdade, não um teste. 10 conversões por dia em todos os formatos, para sempre.',
      },
      {
        icon: 'lock',
        title: 'Seus documentos nunca tocam a cobrança',
        body: 'O pagamento é processado pela Stripe. Seus PDFs nunca são vinculados à sua conta, e-mail ou histórico de pagamento.',
      },
      {
        icon: 'refresh',
        title: 'Cancele quando quiser',
        body: 'Mensal ou anual, cancele em dois cliques. O downgrade mantém suas conversões passadas; nada fica retido.',
      },
    ],
    contact: 'Perguntas sobre um plano de equipe, faturas para seu departamento de contabilidade ou um orçamento de OCR apertado? Escreva para',
  },

  cta: {
    eyebrow: 'Pronto quando você estiver',
    title: 'Experimente agora. Nada para instalar, nada para enviar.',
    sub: 'Solte um PDF no conversor e veja a tabela extraída antes de baixar. Arquivos nativos nunca saem do seu navegador — essa é a ideia.',
    convert: 'Converter um PDF',
    explainer: 'Ler a explicação sobre zero upload',
    stats: [
      { v: '0', label: 'arquivos enviados para nativos' },
      { v: '10', label: 'conversões grátis por dia' },
      { v: '100%', label: 'pré-visualização antes do download' },
    ],
  },

  footer: {
    blurb:
      'PDF para Excel e CSV, convertido onde importa — no seu dispositivo. PDFs nativos nunca saem do seu navegador; apenas escaneamentos reais chegam ao nosso serviço de OCR.',
    convertHeading: 'Converter',
    productHeading: 'Produto',
    companyHeading: 'Empresa',
    links: {
      pdfExcel: 'PDF para Excel',
      pdfCsv: 'PDF para CSV',
      scannedOcr: 'PDF escaneados (OCR)',
      how: 'Como funciona',
      questions: 'Perguntas e respostas',
      pricing: 'Preços',
      privacy: 'Privacidade e zero upload',
      terms: 'Termos de serviço',
      refunds: 'Política de reembolso',
      contact: 'Contato',
    },
    footerTagline: 'Sem uploads. Sem contas. Sem cópias em servidores.',
  },

  convert: {
    metaTitle: 'Conversor de PDF para Excel — grátis, no seu navegador',
    metaDesc:
      'Converta PDF para Excel ou CSV grátis. PDFs nativos são processados no seu navegador com zero upload; escaneados usam OCR gratuito diário. Pré-visualize antes de baixar.',
    intro: {
      eyebrow: 'Conversor',
      title: 'PDF para Excel e CSV, sem o upload.',
      lede: 'Solte um arquivo abaixo. PDFs com texto são processados neste dispositivo — seu documento nunca sai do navegador. Escaneados fazem uma breve viagem documentada ao OCR e são apagados na hora.',
    },
    notes: [
      'PDF pós-2008, com assinatura digital ou nascido digital → processado localmente',
      'Páginas escaneadas ou fotografadas → aplica-se a cota gratuita de OCR',
      'Sem conta, sem marca d’água, sem cópia em servidor',
    ],
  },

  questions: {
    metaTitle: 'Perguntas e respostas — ZeroUploadPDF',
    metaDesc:
      'Cada pergunta sobre o ZeroUploadPDF, respondida com clareza: o que significa zero upload, como funciona a cota de 10 conversões grátis por dia, OCR, formatos e privacidade.',
    intro: {
      eyebrow: 'Perguntas e respostas',
      titleA: 'Tudo, ',
      titleB: 'respondido com clareza.',
      lede: 'As mesmas respostas honestas da página inicial, reunidas numa página única — com os detalhes completos de privacidade e cota.',
    },
    note:
      'Ainda está confuso? A política de privacidade entra em detalhes técnicos e os preços comparam as cotas Grátis e Pro lado a lado.',
  },

  privacy: {
    metaTitle: 'Privacidade — a arquitetura de zero upload, explicada sem rodeios',
    metaDesc:
      'Como o ZeroUploadPDF protege seus PDFs: arquivos nativos são processados no seu navegador e nunca enviados; escaneados vão apenas ao OCR e são apagados imediatamente. Sem armazenamento, sem treinar com seus dados.',
    intro: {
      eyebrow: 'Privacidade e arquitetura',
      title: 'Zero upload, explicado em linguagem simples.',
      lede: 'A maioria das ferramentas de PDF anuncia que exclui seu arquivo após uma hora. A nossa não tem nada para excluir nos nativos e retém páginas escaneadas pelos segundos do OCR. Esta página mostra toda a arquitetura, exatamente como funciona.',
    },
    nativeH: 'O caminho privado: um PDF nativo',
    nativeLead:
      'Se o seu PDF nasceu digital — um relatório exportado de um editor de texto, um extrato, um formulário gerado por software — ele contém uma camada de texto que o navegador consegue ler. Essa é toda a conversão, e ela acontece onde o arquivo já está: no seu dispositivo.',
    nativeSteps: [
      { t: 'O PDF é selecionado no seu dispositivo.', b: 'O arquivo é lido para a memória do navegador. Ele nunca viaja pela rede.' },
      { t: 'As tabelas são detectadas localmente.', b: 'Texto, colunas e alinhamento são analisados com a CPU da sua máquina.' },
      { t: 'Você pré-visualiza a tabela.', b: 'A extração aparece na aba, para você conferir antes de salvar qualquer coisa.' },
      { t: 'Você baixa o arquivo.', b: 'O .xlsx ou .csv é gerado no seu navegador e salvo onde você escolher.' },
      { t: 'A aba fecha.', b: 'O arquivo sai da memória. Nenhuma cópia existe em outro lugar, porque nunca foi criada.' },
    ],
    scannedH: 'A exceção honesta: um PDF escaneado',
    scannedLead:
      'Um escaneamento é uma fotografia de página. Fotografias não contêm texto que um navegador leia, e reconhecer letras numa imagem exige um modelo treinado e poder real de processamento. Então só esse caso faz uma viagem — a mais curta possível — e é apagado ao chegar.',
    scannedSteps: [
      { t: 'As páginas são detectadas como imagens.', b: 'Um PDF escaneado não tem camada de texto; nós o identificamos como baseado em imagem no mesmo passo em que um nativo é processado localmente.' },
      { t: 'Apenas as páginas-imagem vão ao OCR.', b: 'Os pixels viajam ao nosso endpoint de OCR — nunca seu histórico completo do documento, nunca as tabelas extraídas.' },
      { t: 'O texto volta e as páginas são apagadas.', b: 'O reconhecimento termina e as imagens são apagadas do servidor imediatamente. Nada é arquivado nem mantido em cache.' },
      { t: 'O reconhecimento é mostrado como pré-visualização.', b: 'O mesmo passo de pré-visualização dos nativos, para conferir a precisão antes de baixar.' },
    ],
    scannedNote:
      'É por isso que o plano grátis tem uma cota diária explícita: cada página escaneada que processamos custa processamento, então limitamos o produto inteiro a 10 conversões por dia grátis, ilimitadas no Pro. Preferimos nomear o número a esconder o custo em outro lugar.',
    neverH: 'O que nunca fazemos',
    never: [
      'Armazenar seus PDFs, tabelas extraídas ou textos de OCR em qualquer servidor sob nosso controle.',
      'Usar seus documentos para treinamento, análise ou publicidade.',
      'Reter páginas escaneadas após o fim do reconhecimento.',
      'Exigir conta, e-mail ou login para uma conversão avulsa.',
      'Vender ou compartilhar seus dados com terceiros para marketing.',
    ],
    collectH: 'O que coletamos',
    collect: [
      'Para conversões avulsas: nada. Não há conta, nem telemetria ligada ao seu documento, nem lista de "últimos enviados" com botão de excluir — porque não há o que excluir.',
      'Para uma conta Pro: um endereço de e-mail e um registro de cliente no Stripe para cobrança. Contadores de uso (conversões por dia) são mantidos para aplicar a cota gratuita. Uma conta Pro nunca recebe seus documentos: seus arquivos ficam no seu dispositivo e jamais são vinculados à sua conta.',
      'O endpoint de OCR recebe páginas-imagem, nada mais. Essas imagens são processadas e purgadas sem qualquer relação com e-mail, conta ou histórico de conversão.',
      'Não usamos rastreadores de publicidade neste site, e nossas páginas não carregam scripts de terceiros além do Stripe na página de cobrança.',
    ],
    rightsH: 'Seus direitos e como falar conosco',
    rights: [
      'Se você tem uma conta, pode exportá-la ou excluí-la (com todos os dados associados) a qualquer momento. Como os documentos nunca são armazenados, não há mais nada para apagar — esse é o ponto, não um bug.',
      'Dúvidas sobre o tratamento de dados para sua organização ou uma conversão atual: escreva para privacy@zerouploadpdf.com.',
      'Esta arquitetura é deliberada. Nós a construímos assim porque "envie e prometemos excluir" é uma mentira de confiança que não quisemos contar. Zero upload não é um selo por cima — é como o software é construído.',
    ],
    ctaH: 'Veja por si mesmo — converta um PDF agora.',
    cta: 'Abrir o conversor',
  },

  conv: {
    eyebrow: 'Conversor ao vivo',
    aria: 'Conversor de PDF e Office para Excel',
    header: 'PDF · Word · PowerPoint → Excel / CSV',
    zeroUpload: 'Zero upload',
    dropTitle: 'Solte um documento aqui',
    dropSub: 'ou navegue pelo seu dispositivo',
    browse: 'Navegar',
    inputAria: 'Escolha um arquivo PDF, Word, PowerPoint ou imagem',
    formatsAria: 'Formatos suportados',
    outLegend: 'Formato de saída',
    xlsx: 'Excel .xlsx',
    csv: 'CSV .csv',
    note: 'Arquivos de texto são processados neste dispositivo. Escaneados passam pelo OCR e são apagados imediatamente.',
    allowance: 'Cota diária',
    complete: 'Conversão concluída',
    sheet: 'Planilha ·',
    rowsLabel: 'linhas',
    downloadXlsx: 'Baixar .xlsx',
    downloadCsv: 'Baixar .csv',
    convertAnother: 'Converter outro',
    retry: 'Tentar de novo',
    startOver: 'Recomeçar',
    errorTitle: 'Não foi possível ler esse arquivo',
    clientSide: 'Processa no lado do cliente sempre que possível',
    footerRight: 'Sem servidores para arquivos de texto. 10 conversões/dia grátis.',
    upgradeTitle: 'Cota diária atingida',
    upgradeBody:
      'Você usou as 10 conversões gratuitas de hoje. A cota reinicia à meia-noite UTC — ou mude para o Pro para conversões ilimitadas sem teto diário.',
    seePro: 'Ver preços do Pro',
    remindLater: 'Lembrar depois',
  },

  terms: {
    metaTitle: 'Termos de serviço — ZeroUploadPDF',
    metaDesc:
      'Os termos de uso do ZeroUploadPDF: como o conversor funciona, como os seus arquivos são tratados e os limites da versão gratuita e do Pro.',
    intro: {
      eyebrow: 'Termos',
      title: 'As regras pelas quais trabalhamos.',
      lede: 'Página curta, linguagem clara. Última atualização: 5 de setembro de 2026.',
    },
    sections: [
      {
        h: '1. O serviço',
        ps: [
          'O ZeroUploadPDF converte arquivos PDF, Word, PowerPoint e imagem em Excel (.xlsx) ou CSV (.csv). Documentos de texto nativos são processados no seu navegador; arquivos escaneados usam um serviço de OCR que reconhece o texto e apaga as imagens logo em seguida.',
          'O plano gratuito inclui 10 conversões por dia em todos os formatos. O Pro remove o limite diário e adiciona conversão em lote e limites de páginas maiores.',
        ],
      },
      {
        h: '2. Seus arquivos',
        ps: [
          'PDFs nativos são processados no seu dispositivo e nunca o deixam. Apenas as páginas escaneadas que realmente precisam de OCR vão para o nosso serviço de reconhecimento, onde são processadas, apagadas e nunca armazenadas, arquivadas ou usadas para treinamento.',
          'Quando a aba do navegador é fechada, os dados em memória da conversão desaparecem. É sua responsabilidade manter cópias próprias dos documentos que você converte.',
        ],
      },
      {
        h: '3. Contas e pagamento',
        ps: [
          'Uma conversão avulsa nunca exige conta. Assinaturas Pro são compradas no checkout, cobradas pelo Stripe mensal ou anualmente, e podem ser canceladas a qualquer momento. Seus documentos nunca são vinculados ao seu histórico de pagamentos.',
          'Você concorda em fornecer dados de pagamento corretos e em usar apenas métodos de pagamento que esteja autorizado a usar.',
        ],
      },
      {
        h: '4. Uso aceitável',
        ps: [
          'Envie apenas documentos que você tem direito de acessar e converter. Não use o serviço para fins ilegais, para burlar os limites publicados com scripts ou bots, nem para prejudicar outros usuários.',
        ],
      },
      {
        h: '5. Disponibilidade e responsabilidade',
        ps: [
          'O serviço é fornecido "no estado em que se encontra", sem garantias de qualquer tipo. A qualidade da conversão depende do seu documento e do seu navegador, e a extração automática pode omitir ou ler errado conteúdo — confira planilhas importantes antes de confiar nelas.',
          'Na máxima medida permitida por lei, o ZeroUploadPDF não se responsabiliza por perdas indiretas ou consequenciais, incluindo perda de dados ou lucros, decorrentes do uso do serviço. Nada do que o serviço produz constitui aconselhamento profissional, jurídico ou financeiro.',
        ],
      },
      {
        h: '6. Mudanças nestes termos',
        ps: [
          'Podemos atualizar estes termos de tempos em tempos. Mudanças entram em vigor quando publicadas nesta página, e continuar usando o serviço significa aceitá-las. Podemos limitar, suspender ou encerrar o acesso em caso de uso abusivo, a nosso critério.',
        ],
      },
      {
        h: '7. Contato',
        ps: [
          'Perguntas sobre estes termos? Escreva para hello@zerouploadpdf.com e responderemos em alguns dias úteis.',
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Política de reembolso — ZeroUploadPDF',
    metaDesc:
      'A política de reembolso do ZeroUploadPDF em números claros: cancelamento a qualquer momento, reembolso integral da parte não usada em até 14 dias e como o valor é devolvido.',
    intro: {
      eyebrow: 'Reembolsos',
      title: 'Condições de reembolso, em números claros.',
      lede: 'Vender software é mais fácil quando a política é anunciada de antemão. Aqui está a nossa. Última atualização: 5 de setembro de 2026.',
    },
    sections: [
      {
        h: 'Como funciona o cancelamento',
        ps: [
          'O Pro é cobrado mensal ou anualmente. Você pode cancelar a qualquer momento e o acesso continua até o fim do período pago.',
          'Dentro de 14 dias após um pagamento, fale conosco para reembolsar integralmente a parte não usada daquele período. Depois disso, reembolsamos a nosso critério, por exemplo quando uma falha técnica impediu suas conversões.',
        ],
      },
      {
        h: 'Como o reembolso é pago',
        ps: [
          'Reembolsos aprovados voltam para o método de pagamento original. Dependendo do emissor do cartão, pode levar de 5 a 10 dias úteis para aparecer no extrato.',
        ],
      },
      {
        h: 'O plano gratuito',
        ps: [
          'O reembolso vale apenas para cobranças pagas do Pro. A cota gratuita diária não é uma compra, então não há o que devolver.',
        ],
      },
      {
        h: 'Disputas',
        ps: [
          'Se você acha que uma cobrança foi indevida, fale conosco primeiro em hello@zerouploadpdf.com. Resolvemos diretamente antes de você acionar a administradora do cartão.',
        ],
      },
    ],
  },
};