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
      eyebrow: "Ethos Program",
      titleLine1: "Curating Life,",
      titleLine2: "Elevating Spirit.",
      description:
        "A boutique consultancy for those seeking alignment, aesthetic living, and mindful business practices.",
      cta: "Begin the Journey",
    },
    about: {
      quote: "Beauty is not just what you see, but how you feel.",
      eyebrow: "About The Vision",
      title: "We curate spaces and mindsets for the modern soul.",
      paragraph1:
        "Cristina VC | Ethos was born from a desire to merge aesthetic discipline with inner clarity. In a world of noise, we offer silence. In a culture of hurry, we offer presence.",
      paragraph2:
        "Whether through personal coaching, brand strategy, or interior curation, our mission remains constant: to reveal the essential and discard the superfluous. We believe that true luxury lies in simplicity and intentionality.",
      cta: "Read More",
    },
    services: {
      title: "Our Offerings",
      learnMore: "Learn More",
      items: [
        {
          title: "Brand Strategy",
          description:
            "Defining the authentic voice of your vision. We build narratives that resonate deeply and endure.",
        },
        {
          title: "Holistic Coaching",
          description:
            "Aligning inner values with outer expression. A guided journey towards clarity, purpose, and balance.",
        },
        {
          title: "Creative Direction",
          description:
            "Curating visuals that speak to the soul. From art direction to interior styling, we create cohesive aesthetics.",
        },
      ],
    },
    gallery: {
      eyebrow: "Aesthetic",
      title: "Visual Harmony",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Start the Conversation",
      description:
        "Whether you are looking for guidance, strategy, or creative direction, we are here to listen.",
      location: "Portugal / Remote",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@example.com",
      messagePlaceholder: "Tell us about your project...",
      required: "Required",
      validEmailRequired: "Valid email required",
      submit: "Send Message",
      successToast: "Thank you for your inquiry. We will be in touch shortly.",
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
      eyebrow: "Programa Ethos",
      titleLine1: "Curar a Vida,",
      titleLine2: "Elevar o Espírito.",
      description:
        "Uma consultoria boutique para quem procura alinhamento, uma vida estética e práticas empresariais conscientes.",
      cta: "Iniciar a Jornada",
    },
    about: {
      quote: "A beleza não é apenas o que se vê, mas o que se sente.",
      eyebrow: "Sobre a Visão",
      title: "Curamos espaços e mentalidades para a alma moderna.",
      paragraph1:
        "Cristina VC | Ethos nasceu do desejo de unir disciplina estética com clareza interior. Num mundo de ruído, oferecemos silêncio. Numa cultura de pressa, oferecemos presença.",
      paragraph2:
        "Seja através de coaching pessoal, estratégia de marca ou curadoria de interiores, a nossa missão permanece constante: revelar o essencial e descartar o supérfluo. Acreditamos que o verdadeiro luxo reside na simplicidade e intencionalidade.",
      cta: "Saber Mais",
    },
    services: {
      title: "Os Nossos Serviços",
      learnMore: "Saber Mais",
      items: [
        {
          title: "Estratégia de Marca",
          description:
            "Definir a voz autêntica da sua visão. Construímos narrativas que ressoam profundamente e perduram.",
        },
        {
          title: "Coaching Holístico",
          description:
            "Alinhar valores interiores com expressão exterior. Uma jornada guiada em direção à clareza, propósito e equilíbrio.",
        },
        {
          title: "Direção Criativa",
          description:
            "Curar visuais que falam à alma. Da direção de arte ao styling de interiores, criamos estéticas coerentes.",
        },
      ],
    },
    gallery: {
      eyebrow: "Estética",
      title: "Harmonia Visual",
    },
    contact: {
      eyebrow: "Entre em Contacto",
      title: "Inicie a Conversa",
      description:
        "Quer procure orientação, estratégia ou direção criativa, estamos aqui para ouvir.",
      location: "Portugal / Remoto",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      namePlaceholder: "Ana Silva",
      emailPlaceholder: "ana@exemplo.com",
      messagePlaceholder: "Conte-nos sobre o seu projeto...",
      required: "Obrigatório",
      validEmailRequired: "Email válido obrigatório",
      submit: "Enviar Mensagem",
      successToast: "Obrigado pelo seu contacto. Responderemos em breve.",
    },
    footer: {
      rights: "Todos os Direitos Reservados.",
      privacy: "Privacidade",
      terms: "Termos",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Language];
