export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      // eyebrow: "Coaching & Mentoring for Ethics and Well-Being",
      titleLine1: "A space to pause,",
      titleLine2: "reflect, and realign.",
      description:
        "ETHOS is a human-centred leadership programme for leaders and teams. Rooted in classical philosophy and practical business frameworks, it supports ethical decision-making, strategic clarity, and organisational well-being.",
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
      items: [
        {
          title: "Coaching & Mentoring",
          description:
            "Personalised support for leaders and teams. A guided space to explore ethics, inner freedom, and the balance between work and life.",
        },
        {
          title: "Leadership & Culture",
          description:
            "Building human-centred organisations through ethical leadership, critical thinking, and cultural transformation inspired by classical philosophy.",
        },
        {
          title: "Strategic Advisory",
          description:
            "Strategic clarity and purpose-driven execution for executives. Aligning inner values with business performance, communication, and team culture.",
        },
      ],
    },
    gallery: {
      eyebrow: "The journey",
      title: "Growing from the",
      titleAccent: "inside out",
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
      successToast: "Thank you for reaching out. We will be in touch shortly.",
    },
    footer: {
      rights: "All Rights Reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      services: "Serviços",
      gallery: "Galeria",
      contact: "Contacto",
    },
    hero: {
      // eyebrow: "Coaching & Mentoring para Ética e Bem-Estar",
      titleLine1: "Um espaço para pausar,",
      titleLine2: "refletir e realinhar.",
      description:
        "O ETHOS é um programa de liderança human-centred para líderes e equipas. Inspirado na filosofia clássica e em frameworks práticos de negócio, apoia a tomada de decisão ética, a clareza estratégica e o bem-estar organizacional.",
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
      items: [
        {
          title: "Coaching & Mentoring",
          description:
            "Acompanhamento personalizado para líderes e equipas. Um espaço guiado para explorar a ética, a liberdade interior e o equilíbrio entre trabalho e vida.",
        },
        {
          title: "Liderança & Cultura",
          description:
            "Construir organizações human-centred através de liderança ética, pensamento crítico e transformação cultural inspirada na filosofia clássica.",
        },
        {
          title: "Consultoria Estratégica",
          description:
            "Clareza estratégica e execução orientada por propósito para executivos. Alinhar valores interiores com performance, comunicação e cultura de equipa.",
        },
      ],
    },
    gallery: {
      eyebrow: "A jornada",
      title: "Crescer de",
      titleAccent: "dentro para fora",
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
      successToast: "Obrigado pelo contacto. Responderemos em breve.",
    },
    footer: {
      rights: "Todos os Direitos Reservados.",
      privacy: "Privacidade",
      terms: "Termos",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Language];
