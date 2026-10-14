export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Backend' | 'Frontend';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  architecture: string;
  challenges: string;
  solutions: string;
  githubUrl: string;
  liveUrl?: string;
  demoCredentials?: {
    username?: string;
    password?: string;
    role?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const PERSONAL_INFO = {
  name: 'Fady Kaiser Gerges',
  title: 'Full-Stack / .NET Developer',
  email: 'fadykaiser2004@gmail.com',
  phone: '+20 120 157 5765',
  location: 'Cairo, Egypt',
  github: 'https://github.com/Fady519',
  linkedin: 'https://www.linkedin.com/in/fady-kaiser/',
  cv: {
    backend: 'https://drive.google.com/file/d/1H_r9iGnTWySJITtjkcjYL-Katq6SmpDz/view?usp=sharing',
    frontend: 'https://drive.google.com/file/d/12T6kkrsDSla3sYswNjE24xQW8SJwJDwj/view?usp=sharing'
  },
  whatsapp: 'https://wa.me/201201575765',
  bio: 'Full-Stack Software Engineer with a solid Computer Science foundation and hands-on experience architecting production-grade server-side systems and highly interactive responsive interfaces. Specialized in ASP.NET Core, EF Core, Clean Architecture, and modern React 19 / Next.js full-stack development.',
  aboutCode: `var fady = new Developer {
  Name = "Fady Kaiser",
  Role = "Full-Stack .NET Developer",
  Backend = new[] { "ASP.NET Core 10", "EF Core 10", "Clean Architecture", "RESTful APIs", "SQL Server", "Redis" },
  Frontend = new[] { "React 19", "Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion" },
  Architecture = new[] { "Clean Architecture", "Onion Architecture", "Repository & Unit of Work" },
  Testing = new[] { "xUnit", "Integration Tests (370+)", "Playwright", "Vitest" },
  Passions = new[] { "Enterprise Scalability", "Clean Code", "High-Impact Systems" },
  OpenTo = "Full-Stack, Backend & Frontend opportunities"
};`
};

export const SKILLS = {
  backend: [
    { name: 'C#', level: 92 },
    { name: 'ASP.NET Core Web API', level: 94 },
    { name: 'Entity Framework Core', level: 90 },
    { name: 'SQL Server', level: 88 },
    { name: 'LINQ', level: 90 },
    { name: 'ASP.NET Core MVC', level: 85 },
    { name: 'SignalR', level: 82 }
  ],
  frontend: [
    { name: 'React 19 & Next.js 16', level: 90 },
    { name: 'TypeScript', level: 86 },
    { name: 'Tailwind CSS 4', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'Redux Toolkit / Context API', level: 85 },
    { name: 'Framer Motion', level: 85 },
    { name: 'HTML5 & CSS3', level: 95 }
  ],
  architecture: [
    { name: 'Clean / Onion Architecture', level: 92 },
    { name: 'Repository & Unit of Work', level: 90 },
    { name: 'Specification Pattern', level: 88 },
    { name: 'RESTful API Design & RFC 9457', level: 92 },
    { name: 'SOLID Principles & OOP', level: 92 },
    { name: 'Automated Testing (xUnit / Integration)', level: 88 }
  ],
  tools: [
    { name: 'Redis Caching', level: 82 },
    { name: 'Stripe Payments', level: 82 },
    { name: 'JWT Auth & ASP.NET Identity', level: 90 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'Postman & Swagger / OpenAPI', level: 92 },
    { name: 'Playwright & Vitest', level: 82 }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'gym-management-system',
    title: 'Power Fitness — Gym Management System',
    category: 'Full-Stack',
    description: 'A production-ready full-stack gym platform: public website, admin dashboard, trainer console, and member portal in English & Arabic (RTL) with 379 integration tests.',
    longDescription: 'Power Fitness is an enterprise full-stack fitness management system engineered with an ASP.NET Core 10 Web API backend and a Next.js 16 (React 19, TypeScript, Tailwind CSS 4) frontend. Built strictly following Clean Architecture with 96 RESTful endpoints and 379 integration tests. Features bilingual English/Arabic localization with complete RTL mirroring, dynamic membership lifecycle (freeze, renew, refund), class booking with trainer collision prevention, and automated QR code check-in verification.',
    techStack: ['ASP.NET Core 10', 'Next.js 16', 'React 19', 'TypeScript', 'EF Core 10', 'SQL Server', 'Tailwind CSS 4', 'shadcn/ui', 'JWT Bearer', 'xUnit'],
    features: [
      'Bilingual English & Arabic (RTL) UI with flawless language switching and Lighthouse 100 accessibility/SEO scores.',
      'Clean Architecture with 96 RESTful API endpoints and 379 integration tests covering edge cases and concurrency.',
      'Rotating JWT refresh tokens with secure cookie storage and fine-grained claims-based RBAC.',
      'Comprehensive subscription management: membership freeze, renew, refund, and automated class capacity enforcement.',
      'Trainer clash prevention engine and automated QR code member check-in verification.',
      'One-click demo logins on the login page for Admin, Trainer, and Member roles.'
    ],
    architecture: 'Clean Architecture on the backend with ASP.NET Core 10, EF Core 10, and SQL Server. Frontend built with Next.js 16 App Router, TypeScript, TanStack Query for server-state caching, and Tailwind CSS 4 for styling.',
    challenges: 'Enforcing complex business rules (class capacity limits, trainer schedule collisions, and atomic membership transaction rollbacks) while supporting real-time RTL rendering.',
    solutions: 'Engineered specialized domain validators and Unit of Work database transactions. Built a custom i18n RTL layout engine with zero hydration layout shifts.',
    githubUrl: 'https://github.com/Fady519/GymManagementSystem',
    liveUrl: 'https://power-fitness-gym.vercel.app',
    demoCredentials: [
      { role: 'Administrator', username: 'admin@gym.com', password: 'AdminPassword123!' },
      { role: 'Trainer', username: 'trainer@gym.com', password: 'TrainerPassword123!' },
      { role: 'Member', username: 'member@gym.com', password: 'MemberPassword123!' }
    ]
  },
  {
    id: 'e-commerce-fullstack',
    title: 'LuxeStore — Full-Stack E-Commerce Platform',
    category: 'Full-Stack',
    description: 'An enterprise retail platform combining an ASP.NET Core 10 Web API and React 19 storefront with Redis caching, Stripe card checkout, and live admin management console.',
    longDescription: 'LuxeStore is an enterprise-grade full-stack e-commerce system built with an ASP.NET Core 10 Web API backend and React 19 SPA frontend with Tailwind CSS and Vite. Implements Clean Onion Architecture with separated Domain, Services, Persistence, and Presentation layers. Features Redis distributed caching for shopping baskets and catalog output cache eviction, dual-mode checkout (Stripe card payments and Cash on Delivery), ASP.NET Identity with claims-based JWT RBAC, inventory intelligence, order lifecycle management, and Vitest/Playwright automated tests.',
    techStack: ['ASP.NET Core 10 Web API', 'React 19', 'C#', 'EF Core 10', 'SQL Server', 'Redis', 'Stripe API', 'Vite', 'Tailwind CSS', 'JWT Bearer', 'Vitest'],
    features: [
      'Clean Onion Architecture strictly separating domain entities from infrastructure and Web API controllers.',
      'Distributed Redis caching for session-isolated shopping baskets and tag-evicted output caching.',
      'Dual-mode checkout engine supporting live Stripe card processing and Cash on Delivery.',
      'Role-Based Access Control (RBAC) with ASP.NET Identity, JWT Bearer tokens, and 1-Click demo logins.',
      'Integrated Admin Console with live revenue metrics, sales volume, order lifecycle tracking, and stock management.',
      'Dynamic multi-category catalog with instant search, price sorting, and paginated product feeds.',
      'Automated Vitest component tests and Playwright end-to-end integration test suites.'
    ],
    architecture: 'Clean Onion Architecture on the backend (Domain, Persistence, Services, Presentation Web API) with Generic Repository and Specification Patterns. React 19 frontend utilizing modular component patterns, custom Axios interceptors, and Tailwind CSS.',
    challenges: 'Ensuring transactional consistency during checkout, preventing cart leakage across sessions, and handling high-concurrency catalog queries efficiently.',
    solutions: 'Implemented Redis-backed basket storage isolated by user token, Stripe webhook/session synchronization, and tag-based output cache eviction whenever products or categories update.',
    githubUrl: 'https://github.com/Fady519/Ecommerce-FullStack',
    liveUrl: 'https://ecommerce-full-stack-nine.vercel.app',
    demoCredentials: [
      { role: 'Administrator', username: 'admin@luxestore.com', password: 'Password123!' },
      { role: 'Customer', username: 'customer@luxestore.com', password: 'Password123!' }
    ]
  },
  {
    id: 'advanced-admin-dashboard',
    title: 'NexusPro — Advanced Admin Dashboard',
    category: 'Frontend',
    description: 'An enterprise-grade commercial dashboard featuring secure client-side routes, interactive scheduling, and flawless visual performance without hydration flickering.',
    longDescription: 'A premium, commercial-grade Administrative Dashboard application built with React, Next.js, and TypeScript. Strategically optimized for enterprise workflows, it addresses core architecture challenges like eliminating hydration-induced visual flickering and securing client-side routes. Features high-performance interactive calendars for resource planning, responsive side-navigation bars, and dense multi-series analytical charting tools configured for high-frequency data presentation.',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'FullCalendar', 'Lucide Icons'],
    features: [
      'Advanced client-side route guarding preventing unauthorized view access and preserving session contexts.',
      'Flawless visual performance architecture eliminating Next.js hydration layout shifts and theme flickering.',
      'Highly dynamic, full-featured FullCalendar scheduling workflow with persistent CRUD operations.',
      'Interactive multi-series charts and analytical tracking views powered by high-performance Recharts wrappers.',
      'Custom stateful layout wrappers supporting collapsible sidebar states and theme-aware responsiveness.'
    ],
    architecture: 'Modular Frontend Component Pattern wrapping highly reactive Next.js layout trees. Features isolated context layers for application states, and fully customized theme variables injecting custom scales directly into Tailwind engine.',
    challenges: 'Preventing client-side layout layout flickering during Next.js hydration phase and isolating complex calendar rendering processes from the core application pipeline.',
    solutions: 'Implemented an optimized client-ready lifecycle synchronization mechanism using React hooks, ensuring dense visual dashboards render completely stable from the first paint.',
    githubUrl: 'https://github.com/Fady519/Dashboard',
    liveUrl: 'https://dashboard-flax-two-20.vercel.app/login',
    demoCredentials: [
      { role: 'Administrator', username: 'admin@admin.com', password: 'admin' }
    ]
  },
  {
    id: 'cinema-streaming',
    title: 'Cinema+ — Streaming Discovery & Playback',
    category: 'Frontend',
    description: 'High-fidelity cinematic streaming search and discovery portal consuming 8 TMDB REST API endpoints with embedded HD YouTube trailer streaming.',
    longDescription: 'Cinema+ is an elegant, mobile-responsive video discovery platform that aggregates rich cinematic data from the official TMDB REST API. It showcases randomized trending spotlight heroes, embedded HD trailer playback powered by React YouTube, customized multi-genre explorers, real-time search, and a persistent client-side watchlist.',
    techStack: ['React 19', 'Vite', 'React Router 7', 'Tailwind CSS', 'Framer Motion', 'Axios', 'TMDB REST API', 'React YouTube'],
    features: [
      'Live integration with TMDB REST API across 8 distinct endpoints for real-time video and catalog discovery.',
      'Embedded HD trailer streaming player utilizing React YouTube and the YouTube IFrame API.',
      'Persistent "My Watchlist" feature managed via LocalStorage to let users bookmark titles across sessions.',
      'Instant real-time search engine querying database catalogs with synchronized URL query parameters.',
      'Mobile-first responsive fluid grids with custom shimmer skeleton loading screens preventing layout shift (CLS).',
      'Protected client-side routing gates restricting access to trailers and watchlist views without login.'
    ],
    architecture: 'Single Page Application utilizing React Router 7, consuming TMDB REST API via Axios instances, with LocalStorage state persistence and Framer Motion micro-animations.',
    challenges: 'Handling multiple concurrent TMDB API calls on the homepage without rendering erratic layouts or facing API rate limit blocking.',
    solutions: 'Engineered specialized asynchronous API handling routines and coupled with shimmer skeleton states to guarantee all grids load synchronously with pleasant visual transitions.',
    githubUrl: 'https://github.com/Fady519/Cinema-Fady',
    liveUrl: 'https://fady519.github.io/Cinema-Fady/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full-Stack .NET Developer Trainee',
    company: 'Route Academy',
    location: 'Cairo, Egypt (On-site)',
    duration: 'May 2025 – Oct 2025',
    description: [
      'Completed an intensive, hands-on 150+ hour software development training program focused on building production-ready web applications, modern architectural patterns, and scalable APIs.',
      'Engineered robust RESTful Web APIs using C#, ASP.NET Core, and Entity Framework Core following Clean Architecture and Onion Architecture principles.',
      'Implemented relational database models, complex LINQ queries, and migrations using SQL Server with Repository and Unit of Work patterns.',
      'Configured secure authentication and authorization systems utilizing ASP.NET Identity, JWT Bearer tokens, and Role-Based Access Control (RBAC).',
      'Developed dynamic, responsive client-side user interfaces utilizing React, Next.js, TypeScript, and Tailwind CSS integrated with backend services.',
      'Applied SOLID design principles, Object-Oriented Programming (OOP), and clean code standards in agile sprint environments with Git/GitHub.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Higher Technological Institute (HTI)',
    location: '10th of Ramadan, Egypt',
    duration: '2023 – Expected May 2027'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Mastering ASP.NET Core: Concepts to Production-Ready APIs',
    issuer: 'Metigator (Issam Abdelnabi)',
    year: '2026',
    credentialId: 'cert_b645q3rt',
    image: '/certificates/metigator_aspnetcore.png'
  },
  {
    name: '.NET Core Backend Development Diploma',
    issuer: 'Route Academy',
    year: '2025'
  },
  {
    name: 'Front-End Development Track',
    issuer: 'Route Academy',
    year: '2025'
  },
  {
    name: 'Programming Fundamentals Certificate',
    issuer: 'Route Academy',
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Enterprise Backend Development',
    description: 'Designing high-performance APIs and robust databases built to scale. I craft secure architectures using the latest enterprise frameworks.',
    iconName: 'Server',
    features: [
      'ASP.NET Core Web API & Clean Architecture',
      'Onion Architecture & Domain-Driven Design',
      'Database modeling & SQL Server optimization',
      'Redis Distributed Caching setup',
      'JWT Auth & Identity authorization (RBAC)'
    ]
  },
  {
    title: 'Full-Stack & SPA Frontends',
    description: 'Building gorgeous, pixel-perfect interfaces that deliver frictionless user experiences on mobile and desktop screens.',
    iconName: 'Layout',
    features: [
      'Next.js 16 & React 19 App development',
      'TypeScript integration & strict type safety',
      'State stream synchronization (Redux / Context)',
      'Highly stylized layouts using Tailwind CSS 4',
      'Framer Motion smooth scroll & hover animations'
    ]
  },
  {
    title: 'Architecture & Automated Testing',
    description: 'Enforcing rock-solid reliability with clean design patterns and comprehensive integration test coverage.',
    iconName: 'Zap',
    features: [
      'Applying Repository & Specification patterns',
      'xUnit & Automated Integration Testing (370+ tests)',
      'Enforcing strict SOLID & Clean Code principles',
      'Bundle size optimization & code splitting',
      'RFC 9457 standardized error handling'
    ]
  }
];

export const STATS = [
  { label: 'Completed Training Hours', value: '150+' },
  { label: 'Production Projects Completed', value: '4+' },
  { label: 'Integration Tests Written', value: '370+' },
  { label: 'Technologies Mastered', value: '18+' }
];