(() => {
  "use strict";

  /* =========================
     EMERIONA GLOBAL
     Main Website Script
     ========================= */

  const html = document.documentElement;
  const body = document.body;

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const langToggle = document.querySelector(".lang-toggle");
  const contactForm = document.querySelector("#contact-form");
  const yearElement = document.querySelector("#year");

  /* =========================
     Translations
     ========================= */

  const translations = {
    en: {
      "nav.about": "About",
      "nav.ecosystem": "Ecosystem",
      "nav.solutions": "Solutions",
      "nav.products": "Products",
      "nav.services": "Services",
      "nav.innovation": "Innovation",
      "nav.knowledge": "Knowledge",
      "nav.impact": "Impact",
      "nav.partnerships": "Partnerships",
      "nav.contact": "Contact",

      "hero.eyebrow": "EMERIONA GLOBAL",
      "hero.line1": "Empowering People.",
      "hero.line2": "Elevating Ideas.",
      "hero.line3": "Creating Impact.",
      "hero.description":
        "EMERIONA is a global impact ecosystem empowering people, ideas, and innovation to create sustainable change through leadership, technology, and development.",
      "hero.support":
        "Empowering Humanity Through Technology & Innovation",
      "hero.explore": "Explore EMERIONA",
      "hero.build": "Build With Us",

      "foundation.eyebrow": "OUR FOUNDATION",
      "foundation.title": "Empowerment • Elevation • Impact",

      "foundation.empowerment.title": "Empowerment",
      "foundation.empowerment.text":
        "Creating opportunities that enable people and ideas to move forward.",

      "foundation.elevation.title": "Elevation",
      "foundation.elevation.text":
        "Elevating leadership, knowledge, innovation, and human potential.",

      "foundation.impact.title": "Impact",
      "foundation.impact.text":
        "Turning knowledge, technology, and innovation into meaningful change.",

      "about.eyebrow": "ABOUT EMERIONA",
      "about.title": "A Global Ecosystem Built Around Possibility",
      "about.p1":
        "EMERIONA is a global impact ecosystem empowering people, ideas, and innovation to create sustainable change through leadership, technology, and development.",
      "about.p2":
        "We bring together people, knowledge, technology, innovation, and opportunities to transform possibilities into practical outcomes.",
      "about.p3":
        "Built for the long term, EMERIONA is designed as an adaptable ecosystem capable of developing products and services, launching platforms and initiatives, entering new fields, and creating new ventures as opportunities emerge.",

      "ecosystem.eyebrow": "THE ECOSYSTEM",
      "ecosystem.title": "One Ecosystem. Many Possibilities.",
      "ecosystem.subtitle":
        "These domains are foundations — not boundaries.",

      "pillars.leadership.title": "Leadership",
      "pillars.leadership.text":
        "Developing leadership, capability, vision, and responsible action.",

      "pillars.humanity.title": "Humanity",
      "pillars.humanity.text":
        "Supporting human potential, inclusion, resilience, and opportunity.",

      "pillars.development.title": "Development",
      "pillars.development.text":
        "Creating practical approaches that contribute to sustainable progress.",

      "pillars.culture.title": "Culture",
      "pillars.culture.text":
        "Connecting knowledge, creativity, identity, and human expression.",

      "pillars.science.title": "Science",
      "pillars.science.text":
        "Exploring knowledge, research, evidence, and new possibilities.",

      "pillars.technology.title": "Technology",
      "pillars.technology.text":
        "Using digital systems and AI to accelerate innovation and impact.",

      "solutions.eyebrow": "SOLUTIONS",
      "solutions.title": "Built Around Real Needs",
      "solutions.subtitle":
        "We explore the challenge, understand the opportunity, and develop the most appropriate product, service, technology, or solution.",

      "solutions.digitalProducts.title": "Digital Products",
      "solutions.digitalProducts.text":
        "Products designed around real needs and meaningful user experiences.",

      "solutions.digitalServices.title": "Digital Services",
      "solutions.digitalServices.text":
        "Practical services helping individuals and organizations operate, grow, and move forward.",

      "solutions.tech.title": "Technology & Innovation",
      "solutions.tech.text":
        "Technology-driven solutions that transform ideas into useful outcomes.",

      "solutions.ai.title": "AI & Intelligent Solutions",
      "solutions.ai.text":
        "AI-powered systems developed with responsible human oversight.",

      "solutions.platforms.title": "Digital Platforms",
      "solutions.platforms.text":
        "Platforms connecting people, services, knowledge, opportunities, and experiences.",

      "solutions.knowledge.title": "Knowledge Solutions",
      "solutions.knowledge.text":
        "Research, content, learning, insights, and knowledge-based products.",

      "products.eyebrow": "PRODUCTS",
      "products.title": "Ideas Become Products",
      "products.p1":
        "EMERIONA develops digital products, platforms, knowledge products, and future ventures designed around real needs and opportunities.",
      "products.p2":
        "Our product portfolio will evolve with the ecosystem — from digital experiences and intelligent tools to platforms and scalable ventures.",
      "products.cta": "Discuss a product opportunity →",

      "services.eyebrow": "SERVICES",
      "services.title": "Capabilities That Create Value",
      "services.subtitle":
        "Services can be delivered independently or combined into tailored solutions around a specific need, project, or opportunity.",

      "services.strategy.title": "Strategy & Development",
      "services.strategy.text":
        "Strategic thinking, development support, and opportunity design.",

      "services.digital.title": "Digital & Technology",
      "services.digital.text":
        "Digital solutions, technology enablement, and intelligent systems.",

      "services.knowledge.title": "Knowledge & Research",
      "services.knowledge.text":
        "Research, analysis, content, learning, and knowledge development.",

      "services.custom.title": "Custom Solutions",
      "services.custom.text":
        "Purpose-built solutions shaped around organizational or market requirements.",

      "innovation.eyebrow": "INNOVATION",
      "innovation.title":
        "Empowering Humanity Through Technology & Innovation",
      "innovation.p1":
        "Innovation at EMERIONA is not limited to technology. It is the continuous process of discovering better ways to solve problems, create value, improve experiences, and open new possibilities.",
      "innovation.p2":
        "We explore emerging technologies, AI, new business models, digital experiences, research, creative thinking, and ideas capable of becoming meaningful products, services, initiatives, or ventures.",

      "knowledge.eyebrow": "EMERIONA KNOWLEDGE",
      "knowledge.title": "Knowledge That Moves Forward",
      "knowledge.subtitle":
        "An evolving knowledge environment connecting ideas, research, insights, experience, and innovation.",

      "knowledge.insights.title": "Insights",
      "knowledge.insights.text":
        "Emerging ideas, trends, and opportunities.",

      "knowledge.articles.title": "Articles",
      "knowledge.articles.text":
        "Leadership, technology, development, culture, and innovation.",

      "knowledge.research.title": "Research",
      "knowledge.research.text":
        "Evidence exploring important questions and possibilities.",

      "knowledge.reports.title": "Reports",
      "knowledge.reports.text":
        "Structured analysis, findings, and knowledge resources.",

      "knowledge.publications.title": "Publications",
      "knowledge.publications.text":
        "Original EMERIONA knowledge products.",

      "knowledge.perspectives.title": "Perspectives",
      "knowledge.perspectives.text":
        "Ideas and viewpoints shaping the ecosystem.",

      "impact.eyebrow": "IMPACT INTELLIGENCE",
      "impact.title": "From Activity to Meaningful Change",
      "impact.p1":
        "Impact is at the heart of the EMERIONA philosophy. We seek to understand not only what we create, but why it matters, who it serves, what changes, and how that change can be measured and improved.",
      "impact.p2":
        "Over time, EMERIONA will develop its own impact intelligence capabilities to connect data, evidence, insights, and decision-making.",

      "factory.eyebrow": "EMERIONA DIGITAL FACTORY",
      "factory.title": "From Idea to Reality",
      "factory.subtitle":
        "Our long-term approach to turning ideas into real-world products, services, and ventures.",

      "factory.discover": "Discover",
      "factory.research": "Research",
      "factory.validate": "Validate",
      "factory.design": "Design",
      "factory.build": "Build",
      "factory.test": "Test",
      "factory.launch": "Launch",
      "factory.grow": "Grow",
      "factory.measure": "Measure",
      "factory.improve": "Improve",

      "factory.note":
        "AI, automation, data, and intelligent systems can support the journey where appropriate — while strategic direction, governance, quality, and final accountability remain human-led.",

      "partnerships.eyebrow": "PARTNERSHIPS & OPPORTUNITIES",
      "partnerships.title": "Build With Us",
      "partnerships.p1":
        "The future is built through meaningful collaboration.",
      "partnerships.p2":
        "We welcome organizations, businesses, institutions, entrepreneurs, innovators, researchers, creators, strategic partners, and communities.",
      "partnerships.p3":
        "Whether the opportunity involves a product, service, technology, research, project, investment, partnership, or new idea — we are open to exploring what can be built together.",
      "partnerships.cta": "Start a conversation →",

      "contact.eyebrow": "CONNECT WITH EMERIONA",
      "contact.title": "Let's Start a Conversation",
      "contact.subtitle":
        "Have an idea, need, challenge, project, product or service request, partnership opportunity, or simply want to learn more?",

      "contact.email.label": "Email",
      "contact.email.cta": "Email EMERIONA →",

      "contact.whatsapp.label": "WhatsApp",
      "contact.whatsapp.cta": "WhatsApp EMERIONA →",

      "form.name": "Full Name",
      "form.email": "Email",
      "form.organization": "Organization / Company",
      "form.purpose": "Purpose",
      "form.message": "Message",
      "form.send": "Prepare Email",
      "form.note":
        "Your email app will open with the message prepared for EMERIONA. For instant contact, use WhatsApp above.",

      "footer.description":
        "Empowering People. Elevating Ideas. Creating Impact.",
      "footer.explore": "Explore",
      "footer.connect": "Connect",
      "footer.rights": "All rights reserved.",
      "footer.values": "Empowerment • Elevation • Impact"
    },

    ar: {
      "nav.about": "عن إميريونا",
      "nav.ecosystem": "المنظومة",
      "nav.solutions": "الحلول",
      "nav.products": "المنتجات",
      "nav.services": "الخدمات",
      "nav.innovation": "الابتكار",
      "nav.knowledge": "المعرفة",
      "nav.impact": "الأثر",
      "nav.partnerships": "الشراكات",
      "nav.contact": "تواصل معنا",

      "hero.eyebrow": "إميريونا العالمية",
      "hero.line1": "تمكين الإنسان.",
      "hero.line2": "الارتقاء بالأفكار.",
      "hero.line3": "صناعة الأثر.",
      "hero.description":
        "إميريونا منظومة عالمية لصناعة الأثر، تعمل على تمكين الإنسان والأفكار والابتكار لصناعة تغيير مستدام من خلال القيادة والتكنولوجيا والتنمية.",
      "hero.support":
        "تمكين الإنسان من خلال التكنولوجيا والابتكار",
      "hero.explore": "اكتشف إميريونا",
      "hero.build": "ابنِ معنا",

      "foundation.eyebrow": "أساسنا",
      "foundation.title": "تمكين • ارتقاء • أثر",

      "foundation.empowerment.title": "التمكين",
      "foundation.empowerment.text":
        "نصنع الفرص التي تمكّن الإنسان والأفكار من التقدم وصناعة المستقبل.",

      "foundation.elevation.title": "الارتقاء",
      "foundation.elevation.text":
        "نرتقي بالقيادة والمعرفة والابتكار والإمكانات الإنسانية.",

      "foundation.impact.title": "الأثر",
      "foundation.impact.text":
        "نحوّل المعرفة والتكنولوجيا والابتكار إلى تغيير حقيقي ذي معنى.",

      "about.eyebrow": "عن إميريونا",
      "about.title": "منظومة عالمية تُبنى حول الإمكانات",
      "about.p1":
        "إميريونا منظومة عالمية لصناعة الأثر، تعمل على تمكين الإنسان والأفكار والابتكار لصناعة تغيير مستدام من خلال القيادة والتكنولوجيا والتنمية.",
      "about.p2":
        "نجمع الإنسان والمعرفة والتكنولوجيا والابتكار والفرص لتحويل الإمكانات إلى نتائج عملية ملموسة.",
      "about.p3":
        "صُممت إميريونا على المدى الطويل كمنظومة مرنة وقابلة للتوسع، قادرة على تطوير المنتجات والخدمات، وإطلاق المنصات والمبادرات، ودخول مجالات جديدة، وإنشاء مشاريع ومشروعات جديدة مع ظهور الفرص.",

      "ecosystem.eyebrow": "المنظومة",
      "ecosystem.title": "منظومة واحدة. إمكانات متعددة.",
      "ecosystem.subtitle":
        "هذه المجالات تمثل ركائز للمنظومة — وليست حدودًا لها.",

      "pillars.leadership.title": "القيادة",
      "pillars.leadership.text":
        "تطوير القيادة والقدرات والرؤية والعمل المسؤول.",

      "pillars.humanity.title": "الإنسانية",
      "pillars.humanity.text":
        "دعم الإمكانات الإنسانية والشمول والمرونة والفرص.",

      "pillars.development.title": "التنمية",
      "pillars.development.text":
        "ابتكار أساليب عملية تسهم في تحقيق تقدم مستدام.",

      "pillars.culture.title": "الثقافة",
      "pillars.culture.text":
        "ربط المعرفة والإبداع والهوية والتعبير الإنساني.",

      "pillars.science.title": "العلوم",
      "pillars.science.text":
        "استكشاف المعرفة والبحث والأدلة والإمكانات الجديدة.",

      "pillars.technology.title": "التكنولوجيا",
      "pillars.technology.text":
        "استخدام الأنظمة الرقمية والذكاء الاصطناعي لتسريع الابتكار وصناعة الأثر.",

      "solutions.eyebrow": "الحلول",
      "solutions.title": "حلول تُبنى حول الاحتياجات الحقيقية",
      "solutions.subtitle":
        "نستكشف التحدي، ونفهم الفرصة، ثم نطوّر المنتج أو الخدمة أو التكنولوجيا أو الحل الأنسب.",

      "solutions.digitalProducts.title": "المنتجات الرقمية",
      "solutions.digitalProducts.text":
        "منتجات تُصمم حول الاحتياجات الحقيقية وتجارب المستخدم ذات المعنى.",

      "solutions.digitalServices.title": "الخدمات الرقمية",
      "solutions.digitalServices.text":
        "خدمات عملية تساعد الأفراد والمؤسسات على العمل والنمو والتقدم.",

      "solutions.tech.title": "التكنولوجيا والابتكار",
      "solutions.tech.text":
        "حلول قائمة على التكنولوجيا تحوّل الأفكار إلى نتائج مفيدة.",

      "solutions.ai.title": "الذكاء الاصطناعي والحلول الذكية",
      "solutions.ai.text":
        "أنظمة مدعومة بالذكاء الاصطناعي مع إشراف بشري مسؤول.",

      "solutions.platforms.title": "المنصات الرقمية",
      "solutions.platforms.text":
        "منصات تربط الأشخاص والخدمات والمعرفة والفرص والتجارب.",

      "solutions.knowledge.title": "حلول المعرفة",
      "solutions.knowledge.text":
        "البحث والمحتوى والتعلم والرؤى والمنتجات القائمة على المعرفة.",

      "products.eyebrow": "المنتجات",
      "products.title": "الأفكار تتحول إلى منتجات",
      "products.p1":
        "تطوّر إميريونا المنتجات الرقمية والمنصات ومنتجات المعرفة والمشاريع المستقبلية المصممة حول الاحتياجات والفرص الحقيقية.",
      "products.p2":
        "سيتطور portfolio المنتجات لدينا مع تطور المنظومة، من التجارب الرقمية والأدوات الذكية إلى المنصات والمشاريع القابلة للتوسع.",
      "products.cta": "ناقش فرصة منتج ←",

      "services.eyebrow": "الخدمات",
      "services.title": "قدرات تصنع القيمة",
      "services.subtitle":
        "يمكن تقديم الخدمات بشكل مستقل أو دمجها في حلول مخصصة حول احتياج أو مشروع أو فرصة محددة.",

      "services.strategy.title": "الاستراتيجية والتطوير",
      "services.strategy.text":
        "التفكير الاستراتيجي ودعم التطوير وتصميم الفرص.",

      "services.digital.title": "التكنولوجيا والحلول الرقمية",
      "services.digital.text":
        "الحلول الرقمية وتمكين التكنولوجيا والأنظمة الذكية.",

      "services.knowledge.title": "المعرفة والبحث",
      "services.knowledge.text":
        "البحث والتحليل والمحتوى والتعلم وتطوير المعرفة.",

      "services.custom.title": "الحلول المخصصة",
      "services.custom.text":
        "حلول مصممة خصيصًا وفق متطلبات المؤسسات أو الأسواق.",

      "innovation.eyebrow": "الابتكار",
      "innovation.title":
        "تمكين الإنسان من خلال التكنولوجيا والابتكار",
      "innovation.p1":
        "الابتكار في إميريونا لا يقتصر على التكنولوجيا، بل هو عملية مستمرة لاكتشاف طرق أفضل لحل المشكلات وصناعة القيمة وتحسين التجارب وفتح آفاق جديدة.",
      "innovation.p2":
        "نستكشف التقنيات الناشئة والذكاء الاصطناعي ونماذج الأعمال الجديدة والتجارب الرقمية والبحث والتفكير الإبداعي والأفكار القابلة للتحول إلى منتجات أو خدمات أو مبادرات أو مشاريع ذات معنى.",

      "knowledge.eyebrow": "معرفة إميريونا",
      "knowledge.title": "معرفة تدفع إلى الأمام",
      "knowledge.subtitle":
        "بيئة معرفية متطورة تربط الأفكار والبحث والرؤى والخبرات والابتكار.",

      "knowledge.insights.title": "الرؤى",
      "knowledge.insights.text":
        "الأفكار والاتجاهات والفرص الناشئة.",

      "knowledge.articles.title": "المقالات",
      "knowledge.articles.text":
        "القيادة والتكنولوجيا والتنمية والثقافة والابتكار.",

      "knowledge.research.title": "البحث",
      "knowledge.research.text":
        "أدلة واستكشافات تتناول الأسئلة والإمكانات المهمة.",

      "knowledge.reports.title": "التقارير",
      "knowledge.reports.text":
        "تحليلات ونتائج وموارد معرفية منظمة.",

      "knowledge.publications.title": "الإصدارات",
      "knowledge.publications.text":
        "منتجات معرفية أصلية من إميريونا.",

      "knowledge.perspectives.title": "وجهات النظر",
      "knowledge.perspectives.text":
        "أفكار ورؤى تسهم في تشكيل المنظومة.",

      "impact.eyebrow": "ذكاء الأثر",
      "impact.title": "من النشاط إلى التغيير ذي المعنى",
      "impact.p1":
        "الأثر في صميم فلسفة إميريونا. لا نسعى فقط إلى معرفة ما نصنعه، بل لماذا يهم، ومن يخدم، وما الذي يتغير، وكيف يمكن قياس هذا التغيير وتحسينه.",
      "impact.p2":
        "ومع مرور الوقت، ستطوّر إميريونا قدراتها الخاصة في ذكاء الأثر لربط البيانات والأدلة والرؤى وصنع القرار.",

      "factory.eyebrow": "مصنع إميريونا الرقمي",
      "factory.title": "من الفكرة إلى الواقع",
      "factory.subtitle":
        "منهجنا طويل المدى لتحويل الأفكار إلى منتجات وخدمات ومشاريع حقيقية.",

      "factory.discover": "اكتشاف",
      "factory.research": "بحث",
      "factory.validate": "تحقق",
      "factory.design": "تصميم",
      "factory.build": "بناء",
      "factory.test": "اختبار",
      "factory.launch": "إطلاق",
      "factory.grow": "نمو",
      "factory.measure": "قياس",
      "factory.improve": "تحسين",

      "factory.note":
        "يمكن للذكاء الاصطناعي والأتمتة والبيانات والأنظمة الذكية دعم الرحلة حيثما كان ذلك مناسبًا، مع بقاء التوجيه الاستراتيجي والحوكمة والجودة والمسؤولية النهائية بقيادة بشرية.",

      "partnerships.eyebrow": "الشراكات والفرص",
      "partnerships.title": "ابنِ معنا",
      "partnerships.p1":
        "المستقبل يُبنى من خلال التعاون الهادف.",
      "partnerships.p2":
        "نرحب بالمؤسسات والشركات والجهات ورواد الأعمال والمبتكرين والباحثين والمبدعين والشركاء الاستراتيجيين والمجتمعات.",
      "partnerships.p3":
        "سواء كانت الفرصة تتعلق بمنتج أو خدمة أو تكنولوجيا أو بحث أو مشروع أو استثمار أو شراكة أو فكرة جديدة، فنحن منفتحون لاستكشاف ما يمكن بناؤه معًا.",
      "partnerships.cta": "ابدأ حوارًا ←",

      "contact.eyebrow": "تواصل مع إميريونا",
      "contact.title": "لنبدأ حوارًا",
      "contact.subtitle":
        "لديك فكرة أو احتياج أو تحدٍ أو مشروع أو طلب منتج أو خدمة أو فرصة شراكة، أو ترغب ببساطة في معرفة المزيد؟",

      "contact.email.label": "البريد الإلكتروني",
      "contact.email.cta": "راسل إميريونا ←",

      "contact.whatsapp.label": "واتساب",
      "contact.whatsapp.cta": "تواصل مع إميريونا عبر واتساب ←",

      "form.name": "الاسم الكامل",
      "form.email": "البريد الإلكتروني",
      "form.organization": "المؤسسة / الشركة",
      "form.purpose": "الغرض",
      "form.message": "الرسالة",
      "form.send": "تجهيز البريد الإلكتروني",
      "form.note":
        "سيتم فتح تطبيق البريد الإلكتروني لديك مع تجهيز الرسالة لإرسالها إلى إميريونا. للتواصل الفوري، استخدم واتساب أعلاه.",

      "footer.description":
        "تمكين الإنسان. الارتقاء بالأفكار. صناعة الأثر.",
      "footer.explore": "استكشف",
      "footer.connect": "تواصل",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.values": "تمكين • ارتقاء • أثر"
    }
  };

  /* =========================
     Language
     ========================= */

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem("emeriona-language");

      if (saved === "ar" || saved === "en") {
        return saved;
      }
    } catch (error) {
      // Ignore storage errors.
    }

    return "en";
  }

  function setLanguage(language) {
    const lang = language === "ar" ? "ar" : "en";
    const dictionary = translations[lang];

    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });

    if (langToggle) {
      langToggle.textContent = lang === "en" ? "العربية" : "English";
      langToggle.setAttribute(
        "aria-label",
        lang === "en" ? "Switch to Arabic" : "Switch to English"
      );
    }

    document.title =
      lang === "en"
        ? "EMERIONA Global"
        : "إميريونا العالمية";

    try {
      localStorage.setItem("emeriona-language", lang);
    } catch (error) {
      // Ignore storage errors.
    }

    updateFormPurposeOptions(lang);
  }

  function updateFormPurposeOptions(language) {
    const select = document.querySelector(
      '#contact-form select[name="purpose"]'
    );

    if (!select) {
      return;
    }

    const values = {
      en: [
        "General Inquiry",
        "Product",
        "Service",
        "Partnership",
        "Project",
        "Collaboration",
        "Media",
        "Other"
      ],
      ar: [
        "استفسار عام",
        "منتج",
        "خدمة",
        "شراكة",
        "مشروع",
        "تعاون",
        "إعلام",
        "أخرى"
      ]
    };

    const currentValue = select.value;
    const options = values[language];

    select.innerHTML = "";

    options.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });

    if (options.includes(currentValue)) {
      select.value = currentValue;
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLanguage =
        html.lang === "ar" ? "en" : "ar";

      setLanguage(nextLanguage);
    });
  }

  /* =========================
     Mobile Navigation
     ========================= */

  function closeMenu() {
    if (!menuToggle || !mainNav) {
      return;
    }

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuToggle || !mainNav) {
      return;
    }

    mainNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    body.classList.add("menu-open");
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        mainNav.classList.contains("is-open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  /* =========================
     Reveal Animation
     ========================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  /* =========================
     Automatic Year
     ========================= */

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =========================
     Contact Form
     ========================= */

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);

      const name =
        String(formData.get("name") || "").trim();

      const email =
        String(formData.get("email") || "").trim();

      const organization =
        String(formData.get("organization") || "").trim();

      const purpose =
        String(formData.get("purpose") || "").trim();

      const message =
        String(formData.get("message") || "").trim();

      if (!name || !email || !message) {
        return;
      }

      const language = html.lang === "ar" ? "ar" : "en";

      let subject;
      let bodyText;

      if (language === "ar") {
        subject = `رسالة من موقع EMERIONA — ${purpose || "استفسار عام"}`;

        bodyText =
          `الاسم: ${name}\n` +
          `البريد الإلكتروني: ${email}\n` +
          `المؤسسة / الشركة: ${organization || "غير مذكور"}\n` +
          `الغرض: ${purpose || "استفسار عام"}\n\n` +
          `الرسالة:\n${message}`;
      } else {
        subject = `EMERIONA Website Inquiry — ${purpose || "General Inquiry"}`;

        bodyText =
          `Full Name: ${name}\n` +
          `Email: ${email}\n` +
          `Organization / Company: ${organization || "Not provided"}\n` +
          `Purpose: ${purpose || "General Inquiry"}\n\n` +
          `Message:\n${message}`;
      }

      const mailto =
        `mailto:emeriona.global@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyText)}`;

      window.location.href = mailto;
    });
  }

  /* =========================
     Initialize
     ========================= */

  setLanguage(getSavedLanguage());
})();
