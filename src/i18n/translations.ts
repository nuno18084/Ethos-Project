export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      reviews: "Reviews",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      // eyebrow: "Coaching & Mentoring for Ethics and Well-Being",
      titleLine1: "A space to pause,",
      titleLine2: "reflect, and realign.",
      description:
        "A human-centred leadership programme for leaders and teams. Rooted in classical philosophy and practical business frameworks, it supports ethical decision-making, strategic clarity, and organisational well-being.",
      cta: "Start the conversation",
    },
    about: {
      quote: "No buzzwords, just small, powerful transformations.",
      eyebrow: "About ETHOS",
      title: "A conscious pause to return with",
      titleAccent: "clarity and purpose.",
      paragraph1:
        "ETHOS is an invitation to step back — a strategic time to gain clarity and return with a renewed sense of purpose and focus. It is designed for companies that want to align performance with values, culture, and long-term vision.",
      paragraph2Prefix:
        "Beyond a programme, ETHOS is a human development journey. It strengthens resilience, unlocks inner freedom, and elevates organisational culture — helping people ",
      paragraph2Highlight: "grow from the inside out.",
      cta: "Learn more",
    },
    services: {
      title: "What ETHOS offers",
      learnMore: "Learn more",
      modalCta: "Start the conversation",
      items: [
        {
          title: "Coaching & Mentoring",
          description:
            "Personalised support for leaders and teams. A guided space to explore ethics, inner freedom, and the balance between work and life.",
          details:
            "Through one-on-one and team sessions, ETHOS creates a conscious pause — a strategic space to reflect, gain clarity, and return with renewed purpose. Each journey is tailored to the individual or team, combining timeless philosophical principles with practical business application.",
          highlights: [
            "Individual mentoring for leaders",
            "Team coaching sessions",
            "Ethics, resilience & well-being",
          ],
        },
        {
          title: "Leadership & Culture",
          description:
            "Building human-centred organisations through ethical leadership, critical thinking, and cultural transformation inspired by classical philosophy.",
          details:
            "ETHOS supports organisations that want to align performance with values and long-term vision. We work on cultural transformation from the inside out — strengthening ethical leadership, critical thinking, and a human-centred way of working.",
          highlights: [
            "Cultural transformation programmes",
            "Ethical leadership development",
            "Philosophy-inspired frameworks",
          ],
        },
        {
          title: "Strategic Advisory",
          description:
            "Strategic clarity and purpose-driven execution for executives. Aligning inner values with business performance, communication, and team culture.",
          details:
            "For executives navigating complexity, ETHOS offers a steady, informed approach to strategic decision-making. We help align inner values with outer expression — connecting purpose, communication, and team culture to business performance.",
          highlights: [
            "Executive strategic clarity",
            "Purpose-driven execution",
            "Communication & culture alignment",
          ],
        },
      ],
    },
    reviews: {
      eyebrow: "Testimonials",
      title: "Voices of",
      titleAccent: "transformation",
      items: [
        {
          quote:
            "ETHOS gave me a space to pause and reflect. I returned to my work with more clarity, purpose, and a renewed sense of balance between professional and personal life.",
          author: "Luza ETHOS Participant",
          role: "Technology Sector",
        },
        {
          quote:
            "More than a coaching programme — it is a journey inward. The sessions helped me explore my ethics, inner freedom, and what truly matters in my leadership.",
          author: "Team Leader",
          role: "Corporate Environment",
        },
        {
          quote:
            "Small, powerful transformations. No buzzwords — just genuine growth from the inside out, with practical frameworks I could apply immediately.",
          author: "Senior Manager",
          role: "International Company",
        },
      ],
    },
    partners: {
      eyebrow: "Collaborations",
      title: "Our Partners",
      description:
        "Organisations that trust ETHOS to support their people's growth, well-being, and leadership development.",
      items: [
        { name: "Luza Tecnologia", logo: "/partners/luza.svg" },
        { name: "Microsoft", logo: "/partners/microsoft.svg" },
        { name: "ETHOS", logo: "/partners/ethos.svg" },
        { name: "Cisco", logo: "/partners/cisco.svg" },
        { name: "Mobileum", logo: "/partners/mobileum.svg" },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's talk",
      description:
        "Whether you are a leader seeking clarity, or an organisation looking to invest in your people's growth — we are here to listen.",
      location: "Cascais, Portugal / Remote",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@example.com",
      messagePlaceholder: "Tell us what brought you here...",
      required: "Required",
      validEmailRequired: "Valid email required",
      submit: "Send message",
      sending: "Sending...",
      successToast: "Thank you for reaching out. We will be in touch shortly.",
      errorToast: "Something went wrong. Please try again later.",
      configErrorToast:
        "Contact form is not configured yet. Please try again later.",
    },
    footer: {
      rights: "All Rights Reserved.",
      privacy: "Privacy",
      terms: "Terms",
      credit: "Website by Nuno Colaço",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: August 2026",
      backHome: "Back to home",
      sections: [
        {
          title: "Introduction",
          body: "ETHOS respects your privacy. This policy explains how we collect, use, and protect personal information when you visit our website or contact us through the contact form.",
        },
        {
          title: "Information we collect",
          body: "When you submit the contact form, we collect the information you provide: your name, email address, and message. We do not use analytics or advertising cookies on this website.",
        },
        {
          title: "How we use your information",
          body: "We use your contact details solely to respond to your enquiry and to communicate with you about ETHOS coaching and mentoring services. We do not sell or share your data for marketing purposes.",
        },
        {
          title: "Third-party services",
          body: "Messages submitted through the contact form are processed via EmailJS, a third-party email delivery service. Data is transmitted securely according to their privacy practices. We recommend reviewing EmailJS policies for further details.",
        },
        {
          title: "Data retention",
          body: "We retain contact form submissions only for as long as necessary to respond to your enquiry and maintain a relevant record of our communication.",
        },
        {
          title: "Your rights",
          body: "Under applicable data protection law, including the GDPR, you may request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at cristina.carvalho@ethosprogram.com.",
        },
        {
          title: "Contact",
          body: "For any questions about this Privacy Policy, please contact:\nCristina Vidal de Carvalho\ncristina.carvalho@ethosprogram.com",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: August 2026",
      backHome: "Back to home",
      sections: [
        {
          title: "Acceptance of terms",
          body: "By accessing and using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.",
        },
        {
          title: "Use of the website",
          body: "This website provides information about the ETHOS coaching and mentoring programme. You agree to use the site lawfully and not to attempt to disrupt its operation or access restricted areas.",
        },
        {
          title: "Services",
          body: "Information on this website is for general purposes only and does not constitute a binding offer. Coaching and mentoring services are subject to separate agreement between ETHOS and the client or organisation.",
        },
        {
          title: "Intellectual property",
          body: "All content on this website — including text, branding, and design — is the property of ETHOS or its licensors and may not be reproduced without prior written consent.",
        },
        {
          title: "Limitation of liability",
          body: "ETHOS makes reasonable efforts to keep information accurate and up to date but does not guarantee completeness. To the extent permitted by law, ETHOS is not liable for any loss arising from use of this website.",
        },
        {
          title: "External links",
          body: "This website may contain links to third-party sites. ETHOS is not responsible for the content or privacy practices of those external websites.",
        },
        {
          title: "Changes",
          body: "We may update these Terms of Use from time to time. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
        },
        {
          title: "Contact",
          body: "For questions about these Terms of Use, please contact:\nCristina Vidal de Carvalho\ncristina.carvalho@ethosprogram.com",
        },
      ],
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      services: "Serviços",
      reviews: "Testemunhos",
      partners: "Parceiros",
      contact: "Contacto",
    },
    hero: {
      // eyebrow: "Coaching & Mentoring para Ética e Bem-Estar",
      titleLine1: "Um espaço para pausar,",
      titleLine2: "refletir e realinhar.",
      description:
        "Um programa de liderança human-centred para líderes e equipas. Inspirado na filosofia clássica e em frameworks práticos de negócio, apoia a tomada de decisão ética, a clareza estratégica e o bem-estar organizacional.",
      cta: "Iniciar a conversa",
    },
    about: {
      quote: "Sem buzzwords, apenas pequenas transformações poderosas.",
      eyebrow: "Sobre o ETHOS",
      title: "Uma pausa consciente para regressar com",
      titleAccent: "clareza e propósito.",
      paragraph1:
        "O ETHOS é um convite a recuar — um tempo estratégico para ganhar clareza e regressar com um sentido renovado de propósito e foco. Foi desenhado para empresas que querem alinhar performance com valores, cultura e visão de longo prazo.",
      paragraph2Prefix:
        "Para além de um programa, o ETHOS é uma jornada de desenvolvimento humano. Reforça a resiliência, liberta a liberdade interior e eleva a cultura organizacional — ajudando as pessoas a ",
      paragraph2Highlight: "crescer de dentro para fora.",
      cta: "Saber mais",
    },
    services: {
      title: "O que o ETHOS oferece",
      learnMore: "Saber mais",
      modalCta: "Iniciar a conversa",
      items: [
        {
          title: "Coaching & Mentoring",
          description:
            "Acompanhamento personalizado para líderes e equipas. Um espaço guiado para explorar a ética, a liberdade interior e o equilíbrio entre trabalho e vida.",
          details:
            "Através de sessões individuais e em equipa, o ETHOS cria uma pausa consciente — um espaço estratégico para refletir, ganhar clareza e regressar com propósito renovado. Cada jornada é adaptada à pessoa ou equipa, combinando princípios filosóficos intemporais com aplicação prática de negócio.",
          highlights: [
            "Mentoring individual para líderes",
            "Sessões de coaching em equipa",
            "Ética, resiliência e bem-estar",
          ],
        },
        {
          title: "Liderança & Cultura",
          description:
            "Construir organizações human-centred através de liderança ética, pensamento crítico e transformação cultural inspirada na filosofia clássica.",
          details:
            "O ETHOS apoia organizações que querem alinhar performance com valores e visão de longo prazo. Trabalhamos a transformação cultural de dentro para fora — reforçando liderança ética, pensamento crítico e uma forma human-centred de trabalhar.",
          highlights: [
            "Programas de transformação cultural",
            "Desenvolvimento de liderança ética",
            "Frameworks inspirados na filosofia",
          ],
        },
        {
          title: "Consultoria Estratégica",
          description:
            "Clareza estratégica e execução orientada por propósito para executivos. Alinhar valores interiores com performance, comunicação e cultura de equipa.",
          details:
            "Para executivos que navegam a complexidade, o ETHOS oferece uma abordagem estável e informada à tomada de decisão estratégica. Ajudamos a alinhar valores interiores com expressão exterior — ligando propósito, comunicação e cultura de equipa à performance de negócio.",
          highlights: [
            "Clareza estratégica para executivos",
            "Execução orientada por propósito",
            "Alinhamento de comunicação e cultura",
          ],
        },
      ],
    },
    reviews: {
      eyebrow: "Testemunhos",
      title: "Vozes de",
      titleAccent: "transformação",
      items: [
        {
          quote:
            "O ETHOS deu-me um espaço para pausar e refletir. Regressei ao trabalho com mais clareza, propósito e um sentido renovado de equilíbrio entre vida profissional e pessoal.",
          author: "Participante Luza ETHOS",
          role: "Sector Tecnológico",
        },
        {
          quote:
            "Mais do que um programa de coaching — é uma jornada interior. As sessões ajudaram-me a explorar a minha ética, liberdade interior e o que realmente importa na minha liderança.",
          author: "Team Leader",
          role: "Ambiente Corporativo",
        },
        {
          quote:
            "Pequenas transformações poderosas. Sem buzzwords — apenas crescimento genuíno de dentro para fora, com frameworks práticos que pude aplicar de imediato.",
          author: "Senior Manager",
          role: "Empresa Internacional",
        },
      ],
    },
    partners: {
      eyebrow: "Colaborações",
      title: "Os Nossos Parceiros",
      description:
        "Organizações que confiam no ETHOS para apoiar o crescimento, bem-estar e desenvolvimento de liderança das suas pessoas.",
      items: [
        { name: "Luza Tecnologia", logo: "/partners/luza.svg" },
        { name: "Microsoft", logo: "/partners/microsoft.svg" },
        { name: "ETHOS", logo: "/partners/ethos.svg" },
        { name: "Cisco", logo: "/partners/cisco.svg" },
        { name: "Mobileum", logo: "/partners/mobileum.svg" },
      ],
    },
    contact: {
      eyebrow: "Entre em contacto",
      title: "Vamos conversar",
      description:
        "Seja líder à procura de clareza, ou organização que queira investir no crescimento das suas pessoas — estamos aqui para ouvir.",
      location: "Cascais, Portugal / Remoto",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Ana Silva",
      emailPlaceholder: "ana@exemplo.com",
      messagePlaceholder: "Conte-nos o que o trouxe aqui...",
      required: "Obrigatório",
      validEmailRequired: "Email válido obrigatório",
      submit: "Enviar mensagem",
      sending: "A enviar...",
      successToast: "Obrigado pelo contacto. Responderemos em breve.",
      errorToast: "Algo correu mal. Por favor, tente novamente mais tarde.",
      configErrorToast:
        "O formulário ainda não está configurado. Por favor, tente mais tarde.",
    },
    footer: {
      rights: "Todos os Direitos Reservados.",
      privacy: "Privacidade",
      terms: "Termos",
      credit: "Website por Nuno Colaço",
    },
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: agosto de 2026",
      backHome: "Voltar ao início",
      sections: [
        {
          title: "Introdução",
          body: "O ETHOS respeita a sua privacidade. Esta política explica como recolhemos, utilizamos e protegemos os dados pessoais quando visita o nosso website ou entra em contacto connosco através do formulário.",
        },
        {
          title: "Informação que recolhemos",
          body: "Quando submete o formulário de contacto, recolhemos a informação que nos fornece: nome, endereço de email e mensagem. Não utilizamos cookies de analítica ou publicidade neste website.",
        },
        {
          title: "Como utilizamos a sua informação",
          body: "Utilizamos os seus dados de contacto exclusivamente para responder ao seu pedido e comunicar consigo sobre os serviços de coaching e mentoring do ETHOS. Não vendemos nem partilhamos os seus dados para fins de marketing.",
        },
        {
          title: "Serviços de terceiros",
          body: "As mensagens enviadas através do formulário são processadas via EmailJS, um serviço externo de entrega de email. Os dados são transmitidos de forma segura de acordo com as práticas desse serviço. Recomendamos a consulta das respetivas políticas de privacidade.",
        },
        {
          title: "Conservação de dados",
          body: "Conservamos os dados do formulário de contacto apenas pelo tempo necessário para responder ao seu pedido e manter um registo relevante da nossa comunicação.",
        },
        {
          title: "Os seus direitos",
          body: "Nos termos da legislação aplicável, incluindo o RGPD, pode solicitar o acesso, retificação ou eliminação dos seus dados pessoais. Para exercer estes direitos, contacte cristina.carvalho@ethosprogram.com.",
        },
        {
          title: "Contacto",
          body: "Para questões sobre esta Política de Privacidade, contacte:\nCristina Vidal de Carvalho\ncristina.carvalho@ethosprogram.com",
        },
      ],
    },
    terms: {
      title: "Termos de Utilização",
      lastUpdated: "Última atualização: agosto de 2026",
      backHome: "Voltar ao início",
      sections: [
        {
          title: "Aceitação dos termos",
          body: "Ao aceder e utilizar este website, concorda com estes Termos de Utilização. Se não concordar, por favor não utilize o site.",
        },
        {
          title: "Utilização do website",
          body: "Este website disponibiliza informação sobre o programa de coaching e mentoring ETHOS. Compromete-se a utilizar o site de forma lícita e a não perturbar o seu funcionamento nem aceder a áreas restritas.",
        },
        {
          title: "Serviços",
          body: "A informação neste website é apenas para fins informativos e não constitui uma oferta vinculativa. Os serviços de coaching e mentoring estão sujeitos a acordo separado entre o ETHOS e o cliente ou organização.",
        },
        {
          title: "Propriedade intelectual",
          body: "Todo o conteúdo deste website — incluindo textos, marca e design — é propriedade do ETHOS ou dos respetivos licenciadores e não pode ser reproduzido sem consentimento prévio por escrito.",
        },
        {
          title: "Limitação de responsabilidade",
          body: "O ETHOS envida esforços razoáveis para manter a informação precisa e atualizada, mas não garante a sua completude. Na medida permitida por lei, o ETHOS não se responsabiliza por perdas resultantes da utilização deste website.",
        },
        {
          title: "Ligações externas",
          body: "Este website pode conter ligações para sites de terceiros. O ETHOS não é responsável pelo conteúdo ou práticas de privacidade desses websites externos.",
        },
        {
          title: "Alterações",
          body: "Podemos atualizar estes Termos de Utilização periodicamente. A utilização continuada do website após a publicação de alterações constitui aceitação dos termos revistos.",
        },
        {
          title: "Contacto",
          body: "Para questões sobre estes Termos de Utilização, contacte:\nCristina Vidal de Carvalho\ncristina.carvalho@ethosprogram.com",
        },
      ],
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Language];
