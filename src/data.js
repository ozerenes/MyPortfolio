/**
 * Portfolio veri kaynağı — CV/PDF içeriğinden türetilmiştir.
 * Skills matrix bağlamı: usedIn ile hangi proje/deneyimde kullanıldığı gösterilir.
 * Güncellemek için bu dosyayı düzenleyin.
 */
export const data = {
  // ——— Hero & Kişisel ———
  person: {
    name: 'Enes Özer',
    title: 'Senior Full Stack Engineer',
    valueProposition: 'Enterprise SaaS\'ı uçtan uca tasarlayan, mikroservis ve mikrofrontend mimarilerinde uzman; performans ve güvenilirlik odaklı çözümler üreten mühendis.',
    email: 'enesozer@yahoo.com',
    phone: '+90 554 654 42 30',
    linkedin: 'https://www.linkedin.com/in/enes-%C3%B6zer-b818021b0/',
    github: 'https://github.com/enesozer',
    cta: {
      primary: 'Projeleri İncele',
      secondary: 'İletişime Geç',
    },
  },

  // ——— Profesyonel Özet ———
  summary:
    '5+ yıl deneyimle kurumsal SaaS platformlarını tasarlayan, geliştiren ve ölçeklendiren Senior Full Stack Engineer. Mikroservis ve mikrofrontend mimarilerinde derin uzmanlık; performans, güvenlik ve sistem güvenilirliğine odaklanıyorum. Karmaşık sistemleri uçtan uca sahiplenip iş hedefleriyle uyumlu çözümler sunuyorum.',

  // ——— Core Skills showcase: tier + detail (açılan panelde gösterilir) ———
  coreSkillsShowcase: [
    {
      name: 'JavaScript',
      tier: 'primary',
      detail: {
        what: ['JavaScript ile uçtan uca geliştirme', 'JavaScript ile component kütüphaneleri', 'JavaScript ile performans iyileştirmeleri'],
        experience: 'Tüm kurumsal projelerde JavaScript ile uçtan uca geliştirme; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'React',
      tier: 'primary',
      detail: {
        what: ['Kurumsal SaaS arayüzleri, mikrofrontend modülleri', 'LLM entegrasyonlu özellikler, state yönetimi (Redux/Zustand)', 'Web Vitals ve erişilebilirlik odaklı geliştirme'],
        experience: 'INAVITAS ve NEW MIND\'da 5+ yıl kurumsal SaaS projelerinde React ile uçtan uca geliştirme; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'TypeScript',
      tier: 'secondary',
      detail: {
        what: ['Tip güvenli API ve state modelleri', 'Mikrofrontend ve monorepo yapıları', 'Backend ve frontend kod paylaşımı'],
        experience: 'Tüm kurumsal projelerde TypeScript zorunlu; strict mode, utility types ve DDD uyumlu modeller.',
      },
    },
    {
      name: 'React Native',
      tier: 'secondary',
      detail: {
        what: ['React Native ile mobil uygulamalar', 'React Native ile component kütüphaneleri', 'React Native ile performans iyileştirmeleri'],
        experience: 'Tüm kurumsal projelerde React Native ile mobil uygulamalar; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'Next.js',
      tier: 'secondary',
      detail: {
        what: ['SSR/ISR ile SEO ve performans', 'API routes ve full-stack sayfalar', 'Kurumsal ürünlerde sayfa mimarisi'],
        experience: 'Enterprise SaaS ürünlerinde Next.js ile SSR ve ISR kullanımı; NEW MIND ve INAVITAS projeleri.',
      },
    },
    {
      name: 'Node.js',
      tier: 'secondary',
      detail: {
        what: ['REST/GraphQL API\'ler, mikroservisler', 'LLM servis entegrasyonu', 'Redis, PostgreSQL ile backend optimizasyonu'],
        experience: 'NestJS ve Express ile 3+ yıl; API gecikmesinde %40\'a varan iyileştirme, Redis ve DB tuning.',
      },
    },
    {
      name: 'System Design',
      tier: 'secondary',
      detail: {
        what: ['Mikroservis ve mikrofrontend mimarisi', 'Ölçeklenebilir API ve veri modelleri', 'Kod incelemeleri ve teknik kararlar'],
        experience: 'INAVITAS ve NEW MIND\'da sistem tasarımı ve mimari kararlara katkı; DDD ve Clean Architecture.',
      },
    },
    {
      name: 'UI Design',
      tier: 'secondary',
      detail: {
        what: ['Kurumsal dashboard ve form arayüzleri', 'Tutarlı component setleri', 'Erişilebilirlik ve kullanılabilirlik'],
        experience: 'SaaS ürünlerinde UI tasarımı ve geliştirme arasında köprü; tasarım sistemleri ve Tailwind.',
      },
    },
    {
      name: 'Performance',
      tier: 'secondary',
      detail: {
        what: ['API gecikmesi ve Redis/DB optimizasyonu', 'Frontend bundle ve Web Vitals', 'Lazy loading ve caching stratejileri'],
        experience: 'Backend\'de %40\'a varan gecikme iyileştirmesi; frontend\'de Core Web Vitals odaklı iyileştirmeler.',
      },
    },
    {
      name: 'Vue.js',
      tier: 'secondary',
      detail: {
        what: ['Vue.js ile uçtan uca geliştirme', 'Vue.js ile component kütüphaneleri', 'Vue.js ile performans iyileştirmeleri'],
        experience: 'Tüm kurumsal projelerde Vue.js ile uçtan uca geliştirme; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'Tailwind',
      tier: 'secondary',
      detail: {
        what: ['Kurumsal tasarım sistemleri', 'Responsive ve erişilebilir arayüzler', 'Utility-first component stilleri'],
        experience: 'Tüm frontend projelerinde Tailwind CSS; tutarlı spacing, renk ve tipografi token\'ları.',
      },
    },
    {
      name: 'GraphQL',
      tier: 'secondary',
      detail: {
        what: ['Schema tasarımı ve API entegrasyonu', 'React Query / Apollo ile client', 'REST ile hibrit kullanım'],
        experience: 'Enterprise SaaS\'ta REST ve GraphQL birlikte; tip güvenli sorgular ve cache stratejileri.',
      },
    },
    {
      name: 'Docker & K8s',
      tier: 'secondary',
      detail: {
        what: ['Containerization ve orkestrasyon', 'CI/CD pipeline\'larında image build', 'Yerel ve staging ortamları'],
        experience: 'INAVITAS ve NEW MIND\'da Docker/K8s ile deployment; GitHub Actions ile CI/CD.',
      },
    },
    {
      name: 'Microfrontends',
      tier: 'secondary',
      detail: {
        what: ['Module Federation ile modüler frontend', 'Paylaşılan component ve state', 'Bağımsız deploy edilebilir modüller'],
        experience: 'Kurumsal SaaS\'ta mikrofrontend mimarisi; tek repo ve modül sınırları.',
      },
    },
    {
      name: 'Clean Architecture',
      tier: 'supporting',
      detail: {
        what: ['Katmanlı mimari, domain odaklı modüller', 'SOLID, DDD ve TDD uygulaması', 'Test edilebilir ve sürdürülebilir kod'],
        experience: 'Tüm projelerde Clean Architecture prensipleri; kod incelemeleri ve ekip standartları.',
      },
    },
    {
      name: 'CI/CD',
      tier: 'supporting',
      detail: {
        what: ['GitHub Actions ile pipeline\'lar', 'Build, test ve deploy otomasyonu', 'Staging ve production ortamları'],
        experience: 'Kurumsal projelerde CI/CD kurulumu ve bakımı; hata ayıklama ve hız iyileştirmeleri.',
      },
    },
    {
      name: 'Web Vitals',
      tier: 'supporting',
      detail: {
        what: ['LCP, FID, CLS ölçümü ve iyileştirme', 'SEO ve performans raporları', 'Lazy load ve resource optimizasyonu'],
        experience: 'Frontend projelerinde Core Web Vitals takibi; performans hedefleri ve iyileştirmeler.',
      },
    },
    {
      name: 'Three.js',
      tier: 'supporting',
      detail: {
        what: ['Three.js ile 3D modelleri', 'Three.js ile component kütüphaneleri', 'Three.js ile performans iyileştirmeleri'],
        experience: 'Tüm kurumsal projelerde Three.js ile 3D modelleri; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'Mantine UI',
      tier: 'supporting',
      detail: {
        what: ['Mantine UI ile uçtan uca geliştirme', 'Mantine UI ile component kütüphaneleri', 'Mantine UI ile performans iyileştirmeleri'],
        experience: 'Tüm kurumsal projelerde Mantine UI ile uçtan uca geliştirme; component kütüphaneleri ve performans iyileştirmeleri.',
      },
    },
    {
      name: 'State Management',
      tier: 'supporting',
      detail: {
        what: ['Redux Toolkit ve Zustand ile global state', 'Server state (React Query)', 'Form ve UI state yönetimi'],
        experience: 'Kurumsal uygulamalarda karmaşık state modelleri; ölçeklenebilir ve tahmin edilebilir state.',
      },
    },
    {
      name: 'Diğer',
      tier: 'supporting',
      detail: {
        what: [
          'PostgreSQL, MongoDB, Redis, Elasticsearch — veri katmanı ve cache',
          'Azure, Terraform — bulut ve altyapı',
          'JWT, OAuth2 — kimlik doğrulama',
          'NestJS, Express — backend framework\'leri',
          'SOLID, DDD, TDD — mimari ve test',
          'Code Review, performans optimizasyonu',
        ],
        experience: 'Kurumsal projelerde yukarıdaki teknoloji ve pratiklerle çalıştım; detaylar için ilgili skill kartlarına bakabilirsin.',
      },
    },
  ],

  // ——— Teknik Uzmanlık (Skills Matrix: usedIn = proje/deneyim bağlamı) ———
  // usedIn: { projects: ['id'], experience: ['id'] }
  skills: {
    core: [
      { name: 'React', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
      { name: 'Next.js (SSR/ISR)', level: 'expert', usedIn: { projects: ['1'], experience: ['1', '2'] } },
      { name: 'TypeScript', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'Node.js (NestJS, Express)', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'Microfrontends (Module Federation)', level: 'advanced', usedIn: { projects: ['1'], experience: ['2'] } },
      { name: 'Redux Toolkit / Zustand', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
      { name: 'Tailwind CSS', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
      { name: 'REST & GraphQL', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'PostgreSQL & MongoDB', level: 'advanced', usedIn: { projects: ['1', '3'], experience: ['1', '2'] } },
      { name: 'Redis & Elasticsearch', level: 'advanced', usedIn: { projects: ['1', '3'], experience: ['1', '2'] } },
    ],
    tools: [
      { name: 'Docker & Kubernetes', level: 'advanced', usedIn: { projects: ['1'], experience: ['1', '2'] } },
      { name: 'Azure', level: 'advanced', usedIn: { projects: ['1'], experience: ['2'] } },
      { name: 'GitHub Actions & CI/CD', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'Terraform', level: 'intermediate', usedIn: { projects: ['1'], experience: ['2'] } },
      { name: 'Web Vitals & SEO', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
      { name: 'JWT & OAuth2', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
    ],
    soft: [
      { name: 'System Design', level: 'expert', usedIn: { projects: ['1', '3'], experience: ['1', '2'] } },
      { name: 'Clean Architecture', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'SOLID, DDD, TDD', level: 'expert', usedIn: { projects: ['1', '2', '3'], experience: ['1', '2'] } },
      { name: 'Code Review', level: 'expert', usedIn: { projects: ['1', '2'], experience: ['1', '2'] } },
      { name: 'Performance Optimization', level: 'expert', usedIn: { projects: ['2', '3'], experience: ['1', '2'] } },
    ],
  },

  // ——— Deneyim Zaman Çizelgesi (year = filtre için) ———
  experience: [
    {
      id: '1',
      company: 'INAVITAS',
      role: 'Senior Full Stack Engineer',
      period: 'Eyl 2024 — Ara 2024',
      periodShort: '4 ay',
      year: 2024,
      highlights: [
        'Kurumsal SaaS ürünlerinin iş gücü ve endüstriyel alanlarda uçtan uca geliştirmesini üstlendim.',
        'LLM tabanlı servisleri React ve Node.js ile entegre ederek yapay zeka destekli uygulama özellikleri geliştirdim.',
        'Redis ve veritabanı tuning ile backend performansını optimize ettim; API gecikmesini %40\'a varan oranda azalttım.',
        'Sistem tasarımı, kod incelemeleri ve mühendislik en iyi uygulamalarına katkıda bulundum.',
      ],
    },
    {
      id: '2',
      company: 'NEW MIND',
      role: 'Senior Full Stack Engineer',
      period: 'Mar 2021 — Jan 2026',
      periodShort: '4+ yıl',
      year: 2021,
      highlights: [
        'Kurumsal SaaS ürünlerinin iş gücü ve endüstriyel alanlarda uçtan uca geliştirmesini üstlendim.',
        'LLM tabanlı servisleri React ve Node.js ile entegre ederek yapay zeka destekli uygulama özellikleri geliştirdim.',
        'Redis ve veritabanı tuning ile backend performansını optimize ettim; API gecikmesini %40\'a varan oranda azalttım.',
        'Sistem tasarımı, kod incelemeleri ve mühendislik en iyi uygulamalarına katkıda bulundum.',
      ],
    },
  ],

  education: [
    { degree: 'B.Sc. Elektrik & Elektronik Mühendisliği', school: 'Selçuk Üniversitesi' },
    { degree: 'Full Stack Developer Uzmanlık', school: 'Smart Pro' },
  ],

  // ——— Projeler (tag’lere göre filtre; image opsiyonel) ———
  projects: [
    {
      id: '1',
      title: 'Mürşit AI',
      description: 'NEW MIND\'da geliştirdiğim yapay zeka asistanı mobil uygulaması. Kurumsal bilgi ve karar destek sistemleri için AI çözümleri.',
      longDescription: 'Yapay zeka tabanlı asistan uygulaması; kurum içi bilgi yönetimi ve karar alma süreçlerini destekleyen özellikler. React Native ile mobil, LLM entegrasyonu.',
      tags: ['React Native', 'AI', 'LLM', 'Mobile'],
      github: null,
      demo: 'https://apps.apple.com/tr/app/m%C3%BCr%C5%9Fit-ai/id6737899896?l=tr',
      image: null,
    },
    {
      id: '2',
      title: 'Mesai',
      description: 'Toplantı yönetimi ve yapay zeka asistanı uygulaması. Transkripsiyon, AI özetleri, aksiyon takibi ve Mesai Chat ile iş toplantılarını verimli hale getirir.',
      longDescription: 'Profesyonel iş akışlarını ve toplantı verimliliğini artıran toplantı yönetimi uygulaması. Transkripsiyon, AI özetleri, aksiyon maddeleri ve raporlama.',
      tags: ['Flutter', 'Node.js', 'AI', 'Mobile'],
      github: null,
      demo: 'https://apps.apple.com/tr/app/mesaim/id6472804050',
      image: null,
    },
    {
      id: '3',
      title: 'NMaistro',
      description: 'Akıllı AI ajanları kurup yönetebileceğiniz platform. 200+ MCP entegrasyonu, kişisel ve kurumsal görevler için doğal dil ile ajan orkestrasyonu.',
      longDescription: 'Bağlı ajanlarla kişisel "AI evreninizi" kurabileceğiniz platform. GİB kararları, rekabet hukuku uyumu, seyahat planlama gibi otomasyonlar. Google Play\'de yayında.',
      tags: ['React', 'Node.js', 'AI', 'Agents', 'MCP'],
      github: null,
      demo: 'https://nmaistro.ai/',
      image: null,
    },
    {
      id: '4',
      title: 'Mecellem',
      description: 'mecellem.com üzerinde yer alan hukuk ve kurumsal yönetim SPA uygulamaları. Uyum yönetimi, risk analizi, hukuki içgörüler; 36+ ürün ve 300+ orkestrasyon modeli.',
      longDescription: 'Hukuk alanına özel platform; mevzuata uyumlu kararlar için uyum yönetimi, risk analizi ve hukuki içgörüler. Muamelat modülü ile karmaşık hukuki işlemlerin yönetimi. Mikrofrontend ve SPA mimarisi.',
      tags: ['Next.js', 'React', 'TypeScript', 'SPA', 'Legal Tech'],
      github: null,
      demo: 'https://www.mecellem.com',
      image: null,
    },
  ],

  // ——— İletişim formu (serverless: Formspree / GitHub Actions / custom endpoint) ———
  contact: {
    // Örnek: 'https://formspree.io/f/xxxxx' veya GitHub Actions ile form-data endpoint
    formEndpoint: '',
    successMessage: 'Mesajınız alındı, en kısa sürede dönüş yapacağım.',
    fields: { name: 'Ad Soyad', email: 'E-posta', message: 'Mesaj' },
  },
}

// ——— English locale: same structure, English text ———
export const dataEn = {
  person: {
    name: 'Enes Özer',
    title: 'Senior Full Stack Engineer',
    valueProposition: 'Engineer who designs enterprise SaaS end-to-end, specializes in microservices and microfrontend architectures, and delivers performance- and reliability-focused solutions.',
    email: 'enesozer@yahoo.com',
    phone: '+90 554 654 42 30',
    linkedin: 'https://www.linkedin.com/in/enes-%C3%B6zer-b818021b0/',
    github: 'https://github.com/enesozer',
    cta: {
      primary: 'View Projects',
      secondary: 'Get in Touch',
    },
  },
  summary:
    'Senior Full Stack Engineer with 5+ years of experience designing, building, and scaling enterprise SaaS platforms. Deep expertise in microservices and microfrontend architectures; focus on performance, security, and system reliability. I own complex systems end-to-end and deliver solutions aligned with business goals.',

  coreSkillsShowcase: [
    {
      name: 'JavaScript',
      tier: 'primary',
      detail: {
        what: ['End-to-end development with JavaScript', 'Component libraries with JavaScript', 'Performance improvements with JavaScript'],
        experience: 'End-to-end development with JavaScript across all enterprise projects; component libraries and performance improvements.',
      },
    },
    {
      name: 'React',
      tier: 'primary',
      detail: {
        what: ['Enterprise SaaS UIs, microfrontend modules', 'LLM-integrated features, state management (Redux/Zustand)', 'Web Vitals and accessibility-focused development'],
        experience: '5+ years of end-to-end React development on enterprise SaaS at INAVITAS and NEW MIND; component libraries and performance improvements.',
      },
    },
    {
      name: 'TypeScript',
      tier: 'secondary',
      detail: {
        what: ['Type-safe API and state models', 'Microfrontend and monorepo structures', 'Backend and frontend code sharing'],
        experience: 'TypeScript mandatory across enterprise projects; strict mode, utility types, and DDD-aligned models.',
      },
    },
    {
      name: 'React Native',
      tier: 'secondary',
      detail: {
        what: ['Mobile apps with React Native', 'Component libraries with React Native', 'Performance improvements with React Native'],
        experience: 'Mobile apps with React Native across enterprise projects; component libraries and performance improvements.',
      },
    },
    {
      name: 'Next.js',
      tier: 'secondary',
      detail: {
        what: ['SSR/ISR for SEO and performance', 'API routes and full-stack pages', 'Page architecture in enterprise products'],
        experience: 'Next.js with SSR and ISR on enterprise SaaS; NEW MIND and INAVITAS projects.',
      },
    },
    {
      name: 'Node.js',
      tier: 'secondary',
      detail: {
        what: ['REST/GraphQL APIs, microservices', 'LLM service integration', 'Backend optimization with Redis, PostgreSQL'],
        experience: '3+ years with NestJS and Express; up to 40% latency improvement, Redis and DB tuning.',
      },
    },
    {
      name: 'System Design',
      tier: 'secondary',
      detail: {
        what: ['Microservices and microfrontend architecture', 'Scalable API and data models', 'Code reviews and technical decisions'],
        experience: 'Contributed to system design and architecture decisions at INAVITAS and NEW MIND; DDD and Clean Architecture.',
      },
    },
    {
      name: 'UI Design',
      tier: 'secondary',
      detail: {
        what: ['Enterprise dashboards and form UIs', 'Consistent component sets', 'Accessibility and usability'],
        experience: 'Bridging UI design and development on SaaS products; design systems and Tailwind.',
      },
    },
    {
      name: 'Performance',
      tier: 'secondary',
      detail: {
        what: ['API latency and Redis/DB optimization', 'Frontend bundle and Web Vitals', 'Lazy loading and caching strategies'],
        experience: 'Up to 40% latency improvement on the backend; Core Web Vitals–focused improvements on the frontend.',
      },
    },
    {
      name: 'Vue.js',
      tier: 'secondary',
      detail: {
        what: ['End-to-end development with Vue.js', 'Component libraries with Vue.js', 'Performance improvements with Vue.js'],
        experience: 'End-to-end development with Vue.js across enterprise projects; component libraries and performance improvements.',
      },
    },
    {
      name: 'Tailwind',
      tier: 'secondary',
      detail: {
        what: ['Enterprise design systems', 'Responsive and accessible UIs', 'Utility-first component styling'],
        experience: 'Tailwind CSS on all frontend projects; consistent spacing, color, and typography tokens.',
      },
    },
    {
      name: 'GraphQL',
      tier: 'secondary',
      detail: {
        what: ['Schema design and API integration', 'React Query / Apollo client', 'Hybrid use with REST'],
        experience: 'REST and GraphQL together on enterprise SaaS; type-safe queries and cache strategies.',
      },
    },
    {
      name: 'Docker & K8s',
      tier: 'secondary',
      detail: {
        what: ['Containerization and orchestration', 'Image build in CI/CD pipelines', 'Local and staging environments'],
        experience: 'Docker/K8s deployment at INAVITAS and NEW MIND; CI/CD with GitHub Actions.',
      },
    },
    {
      name: 'Microfrontends',
      tier: 'secondary',
      detail: {
        what: ['Modular frontend with Module Federation', 'Shared components and state', 'Independently deployable modules'],
        experience: 'Microfrontend architecture on enterprise SaaS; single repo and module boundaries.',
      },
    },
    {
      name: 'Clean Architecture',
      tier: 'supporting',
      detail: {
        what: ['Layered architecture, domain-focused modules', 'SOLID, DDD, and TDD practice', 'Testable and maintainable code'],
        experience: 'Clean Architecture principles across projects; code reviews and team standards.',
      },
    },
    {
      name: 'CI/CD',
      tier: 'supporting',
      detail: {
        what: ['Pipelines with GitHub Actions', 'Build, test, and deploy automation', 'Staging and production environments'],
        experience: 'CI/CD setup and maintenance on enterprise projects; debugging and speed improvements.',
      },
    },
    {
      name: 'Web Vitals',
      tier: 'supporting',
      detail: {
        what: ['LCP, FID, CLS measurement and improvement', 'SEO and performance reporting', 'Lazy load and resource optimization'],
        experience: 'Core Web Vitals tracking on frontend projects; performance targets and improvements.',
      },
    },
    {
      name: 'Three.js',
      tier: 'supporting',
      detail: {
        what: ['3D models with Three.js', 'Component libraries with Three.js', 'Performance improvements with Three.js'],
        experience: '3D models with Three.js across enterprise projects; component libraries and performance improvements.',
      },
    },
    {
      name: 'Mantine UI',
      tier: 'supporting',
      detail: {
        what: ['End-to-end development with Mantine UI', 'Component libraries with Mantine UI', 'Performance improvements with Mantine UI'],
        experience: 'End-to-end development with Mantine UI across enterprise projects; component libraries and performance improvements.',
      },
    },
    {
      name: 'State Management',
      tier: 'supporting',
      detail: {
        what: ['Global state with Redux Toolkit and Zustand', 'Server state (React Query)', 'Form and UI state management'],
        experience: 'Complex state models in enterprise apps; scalable and predictable state.',
      },
    },
    {
      name: 'Other',
      tier: 'supporting',
      detail: {
        what: [
          'PostgreSQL, MongoDB, Redis, Elasticsearch — data layer and cache',
          'Azure, Terraform — cloud and infrastructure',
          'JWT, OAuth2 — authentication',
          'NestJS, Express — backend frameworks',
          'SOLID, DDD, TDD — architecture and testing',
          'Code review, performance optimization',
        ],
        experience: 'I have worked with the above technologies and practices on enterprise projects; see the relevant skill cards for details.',
      },
    },
  ],

  skills: data.skills,

  experience: [
    {
      id: '1',
      company: 'INAVITAS',
      role: 'Senior Full Stack Engineer',
      period: 'Sep 2024 — Dec 2024',
      periodShort: '4 mo',
      year: 2024,
      highlights: [
        'Led end-to-end development of enterprise SaaS products in workforce and industrial domains.',
        'Built AI-powered application features by integrating LLM-based services with React and Node.js.',
        'Optimized backend performance with Redis and database tuning; reduced API latency by up to 40%.',
        'Contributed to system design, code reviews, and engineering best practices.',
      ],
    },
    {
      id: '2',
      company: 'NEW MIND',
      role: 'Senior Full Stack Engineer',
      period: 'Mar 2021 — Jan 2026',
      periodShort: '4+ yr',
      year: 2021,
      highlights: [
        'Led end-to-end development of enterprise SaaS products in workforce and industrial domains.',
        'Built AI-powered application features by integrating LLM-based services with React and Node.js.',
        'Optimized backend performance with Redis and database tuning; reduced API latency by up to 40%.',
        'Contributed to system design, code reviews, and engineering best practices.',
      ],
    },
  ],

  education: [
    { degree: 'B.Sc. Electrical & Electronics Engineering', school: 'Selçuk University' },
    { degree: 'Full Stack Developer Specialization', school: 'Smart Pro' },
  ],

  projects: [
    {
      id: '1',
      title: 'Mürşit AI',
      description: 'AI assistant mobile app I built at NEW MIND for corporate knowledge and decision-support systems.',
      longDescription: 'AI-powered assistant app supporting organizational knowledge management and decision-making. React Native mobile app with LLM integration.',
      tags: ['React Native', 'AI', 'LLM', 'Mobile'],
      github: null,
      demo: 'https://apps.apple.com/tr/app/m%C3%BCr%C5%9Fit-ai/id6737899896?l=tr',
      image: null,
    },
    {
      id: '2',
      title: 'Mesai',
      description: 'Meeting management and AI assistant app. Transcription, AI summaries, action tracking, and Mesai Chat to make business meetings more productive.',
      longDescription: 'Meeting management app that improves professional workflows and meeting efficiency. Transcription, AI summaries, action items, and reporting.',
      tags: ['Flutter', 'Node.js', 'AI', 'Mobile'],
      github: null,
      demo: 'https://apps.apple.com/tr/app/mesaim/id6472804050',
      image: null,
    },
    {
      id: '3',
      title: 'NMaistro',
      description: 'Platform to build and orchestrate intelligent AI agents. 200+ MCP integrations, natural-language agent orchestration for personal and business tasks.',
      longDescription: 'Build your personal "AI universe" with connected agents. Tax (GIB) compliance, competition law monitoring, travel planning automation. Available on Google Play.',
      tags: ['React', 'Node.js', 'AI', 'Agents', 'MCP'],
      github: null,
      demo: 'https://nmaistro.ai/',
      image: null,
    },
    {
      id: '4',
      title: 'Mecellem',
      description: 'Legal and corporate governance SPA applications on mecellem.com. Compliance management, risk analysis, legal insights; 36+ products and 300+ orchestration models.',
      longDescription: 'Legal-tech platform for compliance, risk analysis, and legal insights. Muamelat module for managing complex legal transactions. Microfrontend and SPA architecture.',
      tags: ['Next.js', 'React', 'TypeScript', 'SPA', 'Legal Tech'],
      github: null,
      demo: 'https://www.mecellem.com',
      image: null,
    },
  ],

  contact: {
    formEndpoint: '',
    successMessage: 'Your message has been received; I will get back to you as soon as possible.',
    fields: { name: 'Name', email: 'Email', message: 'Message' },
  },
}

/**
 * Returns locale-specific content (tr or en).
 * @param {string} locale - 'tr' | 'en'
 * @returns {typeof data}
 */
export function getData(locale) {
  return locale === "en" ? dataEn : data
}

export default data
