(() => {
"use strict";

/*

* ============================================================
* EMERIONA GLOBAL
* Institutional Website — Main JavaScript
* ============================================================
* 
* Responsibilities:
* - Bilingual interface (English / Arabic)
* - RTL / LTR direction handling
* - Persistent language preference
* - Accessible mobile navigation
* - Scroll/reveal animations
* - Contact form → email preparation
* - Automatic copyright year
* - Basic UI state management
* 
* This file is intentionally dependency-free.
* ============================================================
  */

const html = document.documentElement;
const body = document.body;

/* ============================================================
CONFIGURATION
============================================================ */

const CONFIG = {
defaultLanguage: "en",
storageKey: "emeriona-language",
mobileBreakpoint: 760,
contactEmail: "emeriona.global@gmail.com",
whatsappUrl: "https://wa.me/967737445680"
};

/* ============================================================
DOM REFERENCES
============================================================ */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const langToggle = document.querySelector(".lang-toggle");
const contactForm = document.querySelector("#contact-form");
const yearElement = document.querySelector("#year");

/* ============================================================
TRANSLATIONS
============================================================ */

const translations = {
en: {
nav: {
about: "About",
ecosystem: "Ecosystem",
solutions: "Solutions",
products: "Products",
services: "Services",
innovation: "Innovation",
knowledge: "Knowledge",
impact: "Impact",
partnerships: "Partnerships",
contact: "Contact"
},

  hero: {
    eyebrow: "EMERIONA GLOBAL",
    line1: "Empowering People.",
    line2: "Elevating Ideas.",
    line3: "Creating Impact.",
    description:
      "EMERIONA is a global impact ecosystem empowering people, ideas, and innovation to create sustainable change through leadership, technology, and development.",
    support:
      "Empowering Humanity Through Technology & Innovation",
    explore: "Explore EMERIONA",
    build: "Build With Us"
  },

  foundation: {
    eyebrow: "OUR FOUNDATION",
    title: "Empowerment • Elevation • Impact",

    empowerment: {
      title: "Empowerment",
      text:
        "Creating opportunities that enable people and ideas to move forward."
    },

    elevation: {
      title: "Elevation",
      text:
        "Elevating leadership, knowledge, innovation, and human potential."
    },

    impact: {
      title: "Impact",
      text:
        "Turning knowledge, technology, and innovation into meaningful change."
    }
  },

  about: {
    eyebrow: "ABOUT EMERIONA",
    title: "A Global Ecosystem Built Around Possibility",
    p1:
      "EMERIONA is a global impact ecosystem empowering people, ideas, and innovation to create sustainable change through leadership, technology, and development.",
    p2:
      "We bring together people, knowledge, technology, innovation, and opportunities to transform possibilities into practical outcomes.",
    p3:
      "Built for the long term, EMERIONA is designed as an adaptable ecosystem capable of developing products and services, launching platforms and initiatives, entering new fields, and creating new ventures as opportunities emerge."
  },

  ecosystem: {
    eyebrow: "THE ECOSYSTEM",
    title: "One Ecosystem. Many Possibilities.",
    subtitle: "These domains are foundations — not boundaries."
  },

  pillars: {
    leadership: {
      title: "Leadership",
      text:
        "Developing leadership, capability, vision, and responsible action."
    },

    humanity: {
      title: "Humanity",
      text:
        "Supporting human potential, inclusion, resilience, and opportunity."
    },

    development: {
      title: "Development",
      text:
        "Creating practical approaches that contribute to sustainable progress."
    },

    culture: {
      title: "Culture",
      text:
        "Connecting knowledge, creativity, identity, and human expression."
    },

    science: {
      title: "Science",
      text:
        "Exploring knowledge, research, evidence, and new possibilities."
    },

    technology: {
      title: "Technology",
      text:
        "Using digital systems and AI to accelerate innovation and impact."
    }
  },

  solutions: {
    eyebrow: "SOLUTIONS",
    title: "Built Around Real Needs",
    subtitle:
      "We explore the challenge, understand the opportunity, and develop the most appropriate product, service, technology, or solution.",

    digitalProducts: {
      title: "Digital Products",
      text:
        "Products designed around real needs and meaningful user experiences."
    },

    digitalServices: {
      title: "Digital Services",
      text:
        "Practical services helping individuals and organizations operate, grow, and move forward."
    },

    tech: {
      title: "Technology & Innovation",
      text:
        "Technology-driven solutions that transform ideas into useful outcomes."
    },

    ai: {
      title: "AI & Intelligent Solutions",
      text:
        "AI-powered systems developed with responsible human oversight."
    },

    platforms: {
      title: "Digital Platforms",
      text:
        "Platforms connecting people, services, knowledge, opportunities, and experiences."
    },

    knowledge: {
      title: "Knowledge Solutions",
      text:
        "Research, content, learning, insights, and knowledge-based products."
    }
  },

  products: {
    eyebrow: "PRODUCTS",
    title: "Ideas Become Products",
    p1:
      "EMERIONA develops digital products, platforms, knowledge products, and future ventures designed around real needs and opportunities.",
    p2:
      "Our product portfolio will evolve with the ecosystem — from digital experiences and intelligent tools to platforms and scalable ventures.",
    cta: "Discuss a product opportunity →"
  },

  services: {
    eyebrow: "SERVICES",
    title: "Capabilities That Create Value",
    subtitle:
      "Services can be delivered independently or combined into tailored solutions around a specific need, project, or opportunity.",

    strategy: {
      title: "Strategy & Development",
      text:
        "Strategic thinking, development support, and opportunity design."
    },

    digital: {
      title: "Digital & Technology",
      text:
        "Digital solutions, technology enablement, and intelligent systems."
    },

    knowledge: {
      title: "Knowledge & Research",
      text:
        "Research, analysis, content, learning, and knowledge development."
    },

    custom: {
      title: "Custom Solutions",
      text:
        "Purpose-built solutions shaped around organizational or market requirements."
    }
  },

  innovation: {
    eyebrow: "INNOVATION",
    title: "Empowering Humanity Through Technology & Innovation",
    p1:
      "Innovation at EMERIONA is not limited to technology. It is the continuous process of discovering better ways to solve problems, create value, improve experiences, and open new possibilities.",
    p2:
      "We explore emerging technologies, AI, new business models, digital experiences, research, creative thinking, and ideas capable of becoming meaningful products, services, initiatives, or ventures."
  },

  knowledge: {
    eyebrow: "EMERIONA KNOWLEDGE",
    title: "Knowledge That Moves Forward",
    subtitle:
      "An evolving knowledge environment connecting ideas, research, insights, experience, and innovation.",

    insights: {
      title: "Insights",
      text: "Emerging ideas, trends, and opportunities."
    },

    articles: {
      title: "Articles",
      text:
        "Leadership, technology, development, culture, and innovation."
    },

    research: {
      title: "Research",
      text:
        "Evidence exploring important questions and possibilities."
    },

    reports: {
      title: "Reports",
      text:
        "Structured analysis, findings, and knowledge resources."
    },

    publications: {
      title: "Publications",
      text:
        "Original EMERIONA knowledge products."
    },

    perspectives: {
      title: "Perspectives",
      text:
        "Ideas and viewpoints shaping the ecosystem."
    }
  },

  impact: {
    eyebrow: "IMPACT INTELLIGENCE",
    title: "From Activity to Meaningful Change",
    p1:
      "Impact is at the heart of the EMERIONA philosophy. We seek to understand not only what we create, but why it matters, who it serves, what changes, and how that change can be measured and improved.",
    p2:
      "Over time, EMERIONA will develop its own impact intelligence capabilities to connect data, evidence, insights, and decision-making."
  },

  factory: {
    eyebrow: "EMERIONA DIGITAL FACTORY",
    title: "From Idea to Reality",
    subtitle:
      "Our long-term approach to turning ideas into real-world products, services, and ventures.",

    discover: "Discover",
    research: "Research",
    validate: "Validate",
    design: "Design",
    build: "Build",
    test: "Test",
    launch: "Launch",
    grow: "Grow",
    measure: "Measure",
    improve: "Improve",

    note:
      "AI, automation, data, and intelligent systems can support the journey where appropriate — while strategic direction, governance, quality, and final accountability remain human-led."
  },

  partnerships: {
    eyebrow: "PARTNERSHIPS & OPPORTUNITIES",
    title: "Build With Us",

    p1:
      "The future is built through meaningful collaboration.",

    p2:
      "We welcome organizations, businesses, institutions, entrepreneurs, innovators, researchers, creators, strategic partners, and communities.",

    p3:
      "Whether the opportunity involves a product, service, technology, research, project, investment, partnership, or new idea — we are open to exploring what can be built together.",

    cta: "Start a conversation →"
  },

  contact: {
    eyebrow: "CONNECT WITH EMERIONA",
    title: "Let's Start a Conversation",

    subtitle:
      "Have an idea, need, challenge, project, product or service request, partnership opportunity, or simply want to learn more?",

    email: {
      label: "Email",
      cta: "Email EMERIONA →"
    },

    whatsapp: {
      label: "WhatsApp",
      cta: "WhatsApp EMERIONA →"
    }
  },

  form: {
    name: "Full Name",
    email: "Email",
    organization: "Organization / Company",
    purpose: "Purpose",
    message: "Message",
    send: "Prepare Email",

    note:
      "Your email app will open with the message prepared for EMERIONA. For instant contact, use WhatsApp above."
  },

  footer: {
    description:
      "Empowering People. Elevating Ideas. Creating Impact.",
    explore: "Explore",
    connect: "Connect",
    rights: "All rights reserved.",
    values: "Empowerment • Elevation • Impact"
  }
},

ar: {
  nav: {
    about: "من نحن",
    ecosystem: "المنظومة",
    solutions: "الحلول",
    products: "المنتجات",
    services: "الخدمات",
    innovation: "الابتكار",
    knowledge: "المعرفة",
    impact: "الأثر",
    partnerships: "الشراكات",
    contact: "تواصل معنا"
  },

  hero: {
    eyebrow: "إميرِيونا العالمية",
    line1: "تمكين الإنسان.",
    line2: "الارتقاء بالأفكار.",
    line3: "صناعة الأثر.",
    description:
      "إميرِيونا هي منظومة عالمية لصناعة الأثر، تعمل على تمكين الإنسان والأفكار والابتكار لصناعة تغيير مستدام من خلال القيادة والتكنولوجيا والتنمية.",
    support:
      "تمكين الإنسان من خلال التكنولوجيا والابتكار",
    explore: "اكتشف إميرِيونا",
    build: "ابنِ معنا"
  },

  foundation: {
    eyebrow: "أساسنا",
    title: "تمكين • ارتقاء • أثر",

    empowerment: {
      title: "التمكين",
      text:
        "صناعة الفرص التي تمكّن الإنسان والأفكار من التقدم."
    },

    elevation: {
      title: "الارتقاء",
      text:
        "الارتقاء بالقيادة والمعرفة والابتكار والقدرات الإنسانية."
    },

    impact: {
      title: "الأثر",
      text:
        "تحويل المعرفة والتكنولوجيا والابتكار إلى تغيير ذي معنى."
    }
  },

  about: {
    eyebrow: "عن إميرِيونا",
    title: "منظومة عالمية تُبنى حول الإمكانات",
    p1:
      "إميرِيونا هي منظومة عالمية لصناعة الأثر، تعمل على تمكين الإنسان والأفكار والابتكار لصناعة تغيير مستدام من خلال القيادة والتكنولوجيا والتنمية.",
    p2:
      "نجمع الإنسان والمعرفة والتكنولوجيا والابتكار والفرص لتحويل الإمكانات إلى نتائج عملية.",
    p3:
      "صُممت إميرِيونا برؤية طويلة المدى كمنظومة مرنة قادرة على تطوير المنتجات والخدمات، وإطلاق المنصات والمبادرات، ودخول مجالات جديدة، وإنشاء مشاريع ومبادرات جديدة كلما ظهرت الفرص."
  },

  ecosystem: {
    eyebrow: "المنظومة",
    title: "منظومة واحدة. إمكانات متعددة.",
    subtitle: "هذه المجالات تمثل ركائز وليست حدودًا."
  },

  pillars: {
    leadership: {
      title: "القيادة",
      text:
        "تطوير القيادة والقدرات والرؤية والعمل المسؤول."
    },

    humanity: {
      title: "الإنسانية",
      text:
        "دعم الإمكانات الإنسانية والشمول والمرونة والفرص."
    },

    development: {
      title: "التنمية",
      text:
        "ابتكار منهجيات عملية تسهم في تحقيق تقدم مستدام."
    },

    culture: {
      title: "الثقافة",
      text:
        "ربط المعرفة والإبداع والهوية والتعبير الإنساني."
    },

    science: {
      title: "العلوم",
      text:
        "استكشاف المعرفة والبحث والأدلة والإمكانات الجديدة."
    },

    technology: {
      title: "التكنولوجيا",
      text:
        "استخدام الأنظمة الرقمية والذكاء الاصطناعي لتسريع الابتكار والأثر."
    }
  },

  solutions: {
    eyebrow: "الحلول",
    title: "حلول تُبنى حول الاحتياجات الحقيقية",
    subtitle:
      "نستكشف التحدي، ونفهم الفرصة، ثم نطوّر المنتج أو الخدمة أو التكنولوجيا أو الحل الأكثر ملاءمة.",

    digitalProducts: {
      title: "المنتجات الرقمية",
      text:
        "منتجات مصممة حول الاحتياجات الحقيقية وتجارب المستخدم ذات المعنى."
    },

    digitalServices: {
      title: "الخدمات الرقمية",
      text:
        "خدمات عملية تساعد الأفراد والمؤسسات على العمل والنمو والتقدم."
    },

    tech: {
      title: "التكنولوجيا والابتكار",
      text:
        "حلول قائمة على التكنولوجيا تحول الأفكار إلى نتائج مفيدة."
    },

    ai: {
      title: "الذكاء الاصطناعي والحلول الذكية",
      text:
        "أنظمة مدعومة بالذكاء الاصطناعي مع إشراف بشري مسؤول."
    },

    platforms: {
      title: "المنصات الرقمية",
      text:
        "منصات تربط الناس والخدمات والمعرفة والفرص والتجارب."
    },

    knowledge: {
      title: "حلول المعرفة",
      text:
        "البحث والمحتوى والتعلم والرؤى والمنتجات القائمة على المعرفة."
    }
  },

  products: {
    eyebrow: "المنتجات",
    title: "الأفكار تتحول إلى منتجات",

    p1:
      "تطوّر إميرِيونا المنتجات الرقمية والمنصات ومنتجات المعرفة والمشاريع المستقبلية المبنية حول الاحتياجات والفرص الحقيقية.",

    p2:
      "سيتطور محفظة منتجاتنا مع تطور المنظومة، من التجارب الرقمية والأدوات الذكية إلى المنصات والمشاريع القابلة للتوسع.",

    cta: "ناقش فرصة منتج معنا →"
  },

  services: {
    eyebrow: "الخدمات",
    title: "قدرات تصنع القيمة",

    subtitle:
      "يمكن تقديم الخدمات بشكل مستقل أو دمجها في حلول مخصصة حول احتياج أو مشروع أو فرصة محددة.",

    strategy: {
      title: "الاستراتيجية والتنمية",
      text:
        "التفكير الاستراتيجي ودعم التنمية وتصميم الفرص."
    },

    digital: {
      title: "الرقمنة والتكنولوجيا",
      text:
        "الحلول الرقمية وتمكين التكنولوجيا والأنظمة الذكية."
    },

    knowledge: {
      title: "المعرفة والبحث",
      text:
        "البحث والتحليل والمحتوى والتعلم وتطوير المعرفة."
    },

    custom: {
      title: "الحلول المخصصة",
      text:
        "حلول مصممة خصيصًا وفق متطلبات المؤسسات أو الأسواق."
    }
  },

  innovation: {
    eyebrow: "الابتكار",
    title: "تمكين الإنسان من خلال التكنولوجيا والابتكار",

    p1:
      "الابتكار في إميرِيونا لا يقتصر على التكنولوجيا، بل هو عملية مستمرة لاكتشاف طرق أفضل لحل المشكلات وصناعة القيمة وتحسين التجارب وفتح إمكانات جديدة.",

    p2:
      "نستكشف التقنيات الناشئة والذكاء الاصطناعي ونماذج الأعمال الجديدة والتجارب الرقمية والبحث والتفكير الإبداعي والأفكار القابلة للتحول إلى منتجات أو خدمات أو مبادرات أو مشاريع ذات معنى."
  },

  knowledge: {
    eyebrow: "معرفة إميرِيونا",
    title: "معرفة تدفعنا إلى الأمام",

    subtitle:
      "بيئة معرفية متطورة تربط الأفكار والبحث والرؤى والخبرات والابتكار.",

    insights: {
      title: "الرؤى",
      text: "أفكار واتجاهات وفرص ناشئة."
    },

    articles: {
      title: "المقالات",
      text:
        "القيادة والتكنولوجيا والتنمية والثقافة والابتكار."
    },

    research: {
      title: "البحوث",
      text:
        "أدلة تستكشف الأسئلة والإمكانات المهمة."
    },

    reports: {
      title: "التقارير",
      text:
        "تحليلات ونتائج وموارد معرفية منظمة."
    },

    publications: {
      title: "الإصدارات",
      text:
        "منتجات معرفية أصلية من إميرِيونا."
    },

    perspectives: {
      title: "وجهات النظر",
      text:
        "أفكار ورؤى تشكل المنظومة."
    }
  },

  impact: {
    eyebrow: "ذكاء الأثر",
    title: "من النشاط إلى التغيير ذي المعنى",

    p1:
      "الأثر هو جوهر فلسفة إميرِيونا. نسعى إلى فهم ليس فقط ما نصنعه، بل لماذا يهم، ومن نخدم، وما الذي يتغير، وكيف يمكن قياس هذا التغيير وتحسينه.",

    p2:
      "ومع الوقت، ستطوّر إميرِيونا قدراتها الخاصة في ذكاء الأثر لربط البيانات والأدلة والرؤى وصناعة القرار."
  },

  factory: {
    eyebrow: "المصنع الرقمي لإميرِيونا",
    title: "من الفكرة إلى الواقع",

    subtitle:
      "منهجنا طويل المدى لتحويل الأفكار إلى منتجات وخدمات ومشاريع حقيقية.",

    discover: "اكتشاف",
    research: "بحث",
    validate: "تحقق",
    design: "تصميم",
    build: "بناء",
    test: "اختبار",
    launch: "إطلاق",
    grow: "نمو",
    measure: "قياس",
    improve: "تحسين",

    note:
      "يمكن للذكاء الاصطناعي والأتمتة والبيانات والأنظمة الذكية دعم الرحلة عند الحاجة، مع بقاء التوجيه الاستراتيجي والحوكمة والجودة والمسؤولية النهائية بقيادة بشرية."
  },

  partnerships: {
    eyebrow: "الشراكات والفرص",
    title: "ابنِ معنا",

    p1:
      "المستقبل يُبنى من خلال التعاون الهادف.",

    p2:
      "نرحب بالمؤسسات والشركات والجهات ورواد الأعمال والمبتكرين والباحثين والمبدعين والشركاء الاستراتيجيين والمجتمعات.",

    p3:
      "سواء كانت الفرصة تتعلق بمنتج أو خدمة أو تكنولوجيا أو بحث أو مشروع أو استثمار أو شراكة أو فكرة جديدة، فنحن منفتحون لاستكشاف ما يمكن بناؤه معًا.",

    cta: "ابدأ حوارًا معنا →"
  },

  contact: {
    eyebrow: "تواصل مع إميرِيونا",
    title: "لنبدأ حوارًا",

    subtitle:
      "لديك فكرة أو احتياج أو تحدٍ أو مشروع أو طلب منتج أو خدمة أو فرصة شراكة، أو ترغب ببساطة في معرفة المزيد؟",

    email: {
      label: "البريد الإلكتروني",
      cta: "راسل إميرِيونا →"
    },

    whatsapp: {
      label: "واتساب",
      cta: "تواصل مع إميرِيونا عبر واتساب →"
    }
  },

  form: {
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    organization: "المؤسسة / الشركة",
    purpose: "الغرض",
    message: "الرسالة",
    send: "تجهيز البريد الإلكتروني",

    note:
      "سيتم فتح تطبيق البريد الإلكتروني لديك مع تجهيز الرسالة لإرسالها إلى إميرِيونا. وللتواصل الفوري، استخدم واتساب أعلاه."
  },

  footer: {
    description:
      "تمكين الإنسان. الارتقاء بالأفكار. صناعة الأثر.",
    explore: "استكشف",
    connect: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    values: "تمكين • ارتقاء • أثر"
  }
}

};

/* ============================================================
UTILITY — NESTED TRANSLATION LOOKUP
============================================================ */

function getTranslation(dictionary, path) {
return path.split(".").reduce((current, key) => {
if (
current &&
Object.prototype.hasOwnProperty.call(current, key)
) {
return current[key];
}

  return null;
}, dictionary);

}

/* ============================================================
LANGUAGE APPLICATION
============================================================ */

function applyLanguage(language) {
const dictionary = translations[language];

if (!dictionary) {
  return;
}

document
  .querySelectorAll("[data-i18n]")
  .forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getTranslation(dictionary, key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

html.lang = language;
html.dir = language === "ar" ? "rtl" : "ltr";

if (langToggle) {
  const isArabic = language === "ar";

  langToggle.textContent = isArabic
    ? "English"
    : "العربية";

  langToggle.setAttribute(
    "aria-label",
    isArabic
      ? "Switch to English"
      : "التبديل إلى العربية"
  );

  langToggle.setAttribute(
    "title",
    isArabic
      ? "Switch to English"
      : "التبديل إلى العربية"
  );
}

/*
 * Update page language metadata when available.
 */
const metaLanguage = document.querySelector(
  'meta[name="language"]'
);

if (metaLanguage) {
  metaLanguage.setAttribute("content", language);
}

/*
 * Keep the selected language across visits.
 */
try {
  localStorage.setItem(
    CONFIG.storageKey,
    language
  );
} catch (error) {
  /*
   * localStorage can be unavailable in restricted
   * browser environments. The website still works.
   */
}

}

/* ============================================================
INITIAL LANGUAGE
============================================================ */

function getSavedLanguage() {
try {
const saved = localStorage.getItem(
CONFIG.storageKey
);

  if (saved === "ar" || saved === "en") {
    return saved;
  }
} catch (error) {
  /*
   * Ignore storage errors.
   */
}

return CONFIG.defaultLanguage;

}

applyLanguage(getSavedLanguage());

/* ============================================================
LANGUAGE TOGGLE
============================================================ */

if (langToggle) {
langToggle.addEventListener("click", () => {
const nextLanguage =
html.lang === "ar" ? "en" : "ar";

  applyLanguage(nextLanguage);

  /*
   * Close mobile navigation after language change.
   */
  closeMenu();
});

}

/* ============================================================
MOBILE NAVIGATION
============================================================ */

function setMenuState(open) {
if (!mainNav || !menuToggle) {
return;
}

mainNav.classList.toggle("is-open", open);
body.classList.toggle("menu-open", open);

menuToggle.setAttribute(
  "aria-expanded",
  String(open)
);

menuToggle.setAttribute(
  "aria-label",
  open
    ? html.lang === "ar"
      ? "إغلاق القائمة"
      : "Close navigation"
    : html.lang === "ar"
      ? "فتح القائمة"
      : "Open navigation"
);

menuToggle.textContent = open ? "×" : "☰";

}

function openMenu() {
setMenuState(true);
}

function closeMenu() {
setMenuState(false);
}

if (menuToggle && mainNav) {
menuToggle.addEventListener("click", () => {
const isOpen =
mainNav.classList.contains("is-open");

  setMenuState(!isOpen);
});

}

if (mainNav) {
mainNav
.querySelectorAll("a")
.forEach((link) => {
link.addEventListener("click", () => {
closeMenu();
});
});
}

/*

* Close the menu with Escape.
  */
  document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
  closeMenu();
  }
  });

/*

* Close mobile navigation when clicking outside it.
  */
  document.addEventListener("click", (event) => {
  if (!mainNav || !menuToggle) {
  return;
  }

const isOpen =
  mainNav.classList.contains("is-open");

if (!isOpen) {
  return;
}

const clickedInsideNav =
  mainNav.contains(event.target);

const clickedToggle =
  menuToggle.contains(event.target);

if (!clickedInsideNav && !clickedToggle) {
  closeMenu();
}

});

/*

* Restore desktop state after resizing.
  */
  window.addEventListener("resize", () => {
  if (
  window.innerWidth > CONFIG.mobileBreakpoint
  ) {
  closeMenu();
  }
  });

/* ============================================================
REVEAL ANIMATIONS
============================================================ */

const revealElements =
document.querySelectorAll(".reveal");

function revealAll() {
revealElements.forEach((element) => {
element.classList.add("is-visible");
});
}

/*

* Respect the user's reduced-motion preference.
  */
  const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia(
  "(prefers-reduced-motion: reduce)"
  ).matches;

if (
prefersReducedMotion ||
!("IntersectionObserver" in window)
) {
revealAll();
} else {
const revealObserver =
new IntersectionObserver(
(entries, observer) => {
entries.forEach((entry) => {
if (!entry.isIntersecting) {
return;
}

        entry.target.classList.add(
          "is-visible"
        );

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

}

/* ============================================================
AUTOMATIC COPYRIGHT YEAR
============================================================ */

if (yearElement) {
yearElement.textContent =
new Date().getFullYear();
}

/* ============================================================
CONTACT FORM
============================================================ */

if (contactForm) {
contactForm.addEventListener(
"submit",
(event) => {
event.preventDefault();

    const formData =
      new FormData(contactForm);

    const name =
      String(
        formData.get("name") || ""
      ).trim();

    const email =
      String(
        formData.get("email") || ""
      ).trim();

    const organization =
      String(
        formData.get("organization") || ""
      ).trim();

    const purpose =
      String(
        formData.get("purpose") || ""
      ).trim();

    const message =
      String(
        formData.get("message") || ""
      ).trim();

    /*
     * Basic client-side validation.
     */
    if (!name || !email || !message) {
      const language = html.lang;

      const validationMessage =
        language === "ar"
          ? "يرجى تعبئة الاسم والبريد الإلكتروني والرسالة قبل المتابعة."
          : "Please complete your name, email, and message before continuing.";

      window.alert(validationMessage);
      return;
    }

    /*
     * Basic email format check.
     */
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      const language = html.lang;

      const emailMessage =
        language === "ar"
          ? "يرجى إدخال بريد إلكتروني صحيح."
          : "Please enter a valid email address.";

      window.alert(emailMessage);
      return;
    }

    const subject =
      `EMERIONA Inquiry — ${
        purpose || "General Inquiry"
      }`;

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization / Company: ${
        organization || "N/A"
      }`,
      `Purpose: ${
        purpose || "General Inquiry"
      }`,
      "",
      "Message:",
      message
    ];

    const mailto =
      `mailto:${CONFIG.contactEmail}` +
      `?subject=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        bodyLines.join("\n")
      )}`;

    window.location.href = mailto;
  }
);

}

/* ============================================================
EXTERNAL CONTACT LINKS
============================================================ */

/*

* Any element carrying data-whatsapp will automatically

* use the official EMERIONA WhatsApp destination.

* 

* Example:

* <a data-whatsapp>...</a>
  */
  document
  .querySelectorAll("[data-whatsapp]")
  .forEach((element) => {
  element.setAttribute(
  "href",
  CONFIG.whatsappUrl
  );
  
  element.setAttribute(
  "target",
  "_blank"
  );
  
  element.setAttribute(
  "rel",
  "noopener noreferrer"
  );
  });

/*

* Any element carrying data-email will automatically
* use the official EMERIONA email destination.
  */
  document
  .querySelectorAll("[data-email]")
  .forEach((element) => {
  element.setAttribute(
  "href",
  "mailto:${CONFIG.contactEmail}"
  );
  });

/* ============================================================
SMOOTH ANCHOR SUPPORT
============================================================ */

document
.querySelectorAll('a[href^="#"]')
.forEach((link) => {
link.addEventListener("click", (event) => {
const targetId =
link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
      block: "start"
    });

    /*
     * Keep URL navigation clean while preserving
     * normal anchor behavior.
     */
    if (
      window.history &&
      window.history.replaceState
    ) {
      window.history.replaceState(
        null,
        "",
        targetId
      );
    }
  });
});

/* ============================================================
DOCUMENT VISIBILITY
============================================================ */

/*

* When returning to the page after switching tabs,
* ensure the mobile navigation has not remained open
* in an inconsistent state.
  */
  document.addEventListener(
  "visibilitychange",
  () => {
  if (
  document.visibilityState === "visible" &&
  window.innerWidth >
  CONFIG.mobileBreakpoint
  ) {
  closeMenu();
  }
  }
  );

/* ============================================================
INITIAL ACCESSIBILITY STATE
============================================================ */

if (menuToggle) {
menuToggle.setAttribute(
"aria-expanded",
"false"
);

menuToggle.setAttribute(
  "aria-controls",
  "main-nav"
);

menuToggle.setAttribute(
  "aria-label",
  html.lang === "ar"
    ? "فتح القائمة"
    : "Open navigation"
);

}

/* ============================================================
END OF EMERIONA GLOBAL SCRIPT
============================================================ */
})();
