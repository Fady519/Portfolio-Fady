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
    backend: 'https://drive.google.com/file/d/10__8MX8fpicJ1aKHs2QahLJ7hly8KYMb/view?usp=sharing',
    frontend: 'https://drive.google.com/file/d/1D-cZHo0aYyYqZI8w16qMPNNe3MKY8nth/view?usp=sharing',
    fullStack: 'https://drive.google.com/file/d/1o7nuMuKR1vMOCwGmaLRHMif4tSeIrtCr/view?usp=sharing'
  },
  whatsapp: 'https://wa.me/201201575765',
  bio: 'Full-Stack Software Engineer with a solid Computer Science foundation and hands-on experience architecting production-grade server-side systems and highly interactive responsive interfaces. Specialized in ASP.NET Core, EF Core, layered and Onion architectures, and modern React 19 / Next.js full-stack development.',
  aboutCode: `var fady = new Developer {
  Name = "Fady Kaiser",
  Role = "Full-Stack .NET Developer",
  Backend = new[] { "ASP.NET Core 10", "EF Core 10", "RESTful APIs", "SQL Server", "Output Caching" },
  Frontend = new[] { "React 19", "Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion" },
  Architecture = new[] { "Layered (3-tier) Architecture", "Onion Architecture", "Repository & Unit of Work" },
  Testing = new[] { "xUnit", "Integration Tests (379)", "Playwright", "Vitest" },
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
    { name: 'SignalR', level: 82 },
    { name: 'xUnit', level: 82 }
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
    { name: 'Layered / Onion Architecture', level: 92 },
    { name: 'Repository & Unit of Work', level: 90 },
    { name: 'Specification Pattern', level: 88 },
    { name: 'RESTful API Design & RFC 9457', level: 92 },
    { name: 'SOLID Principles & OOP', level: 92 },
    { name: 'Automated Testing (xUnit / Integration)', level: 88 }
  ],
  tools: [
    { name: 'Output Caching', level: 82 },
    { name: 'Stripe (test mode)', level: 82 },
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
    description: 'A full-stack gym platform: public website plus Admin, Trainer and Member portals in English & Arabic (RTL), backed by a 96-endpoint ASP.NET Core 10 API with 379 integration tests.',
    longDescription: 'Power Fitness is a full-stack gym management system with an ASP.NET Core 10 Web API backend and a Next.js 16 (React 19, TypeScript, Tailwind CSS 4) frontend. Built in a 3-layer architecture (API / Business Logic / Data Access with Repository + Unit of Work) exposing 96 REST endpoints, verified by 379 xUnit integration tests against a real SQL Server. Features bilingual English/Arabic localization with full RTL layout, a membership lifecycle (freeze, renew, partial refund), class booking with capacity and trainer-clash rules, and QR code check-in.',
    techStack: ['ASP.NET Core 10', 'EF Core 10', 'SQL Server', 'FluentValidation', 'JWT Bearer', 'xUnit', 'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'TanStack Query'],
    features: [
      'Bilingual English & Arabic (RTL) UI with next-intl: language detected from the browser and remembered; Lighthouse 100 in Accessibility, Best Practices and SEO on the live site.',
      '3-layer architecture (API / BLL / DAL) with 96 REST endpoints and 379 integration tests, including RowVersion concurrency on class bookings.',
      'Short-lived (15-min) JWT access tokens plus rotating, SHA-256-hashed refresh tokens in an HttpOnly cookie with reuse detection; role-based policies for SuperAdmin, Admin, Trainer and Member.',
      'Membership management: freeze, renew and partial refund, plus class capacity enforcement and a 2-hour booking cancellation deadline.',
      'Trainer clash and speciality checks, plus QR code check-in (one per day, refused scans logged with the reason).',
      'One-click demo logins on the login page for Admin, Trainer, and Member roles.'
    ],
    architecture: '3-layer architecture on the backend (ASP.NET Core 10 Web API -> Business Logic Layer -> Data Access Layer with EF Core 10, Generic Repository and Unit of Work) on SQL Server. Frontend built with Next.js 16 App Router, TypeScript, TanStack Query for server state, Redux Toolkit for auth/UI state, and Tailwind CSS 4 + shadcn/ui.',
    challenges: 'Enforcing business rules (class capacity, trainer schedule clashes, membership freeze/renew/refund limits) atomically, with transactions and RowVersion concurrency, while supporting full RTL rendering.',
    solutions: 'FluentValidation validators plus business-rule checks in the service layer returning a Result<T> with machine-readable error codes; Unit of Work transactions and RowVersion optimistic concurrency; next-intl with locale-aware routing and an RTL layout, plus a self-hosted Arabic font that removed layout shift.',
    githubUrl: 'https://github.com/Fady519/GymManagementSystem',
    liveUrl: 'https://power-fitness-gym.vercel.app',
    demoCredentials: [
      { role: 'Administrator', username: 'admin@demo.gym', password: 'Demo@Gym2026' },
      { role: 'Trainer', username: 'trainer@demo.gym', password: 'Demo@Gym2026' },
      { role: 'Member', username: 'member@demo.gym', password: 'Demo@Gym2026' }
    ]
  },
  {
    id: 'e-commerce-fullstack',
    title: 'LuxeStore — Full-Stack E-Commerce Platform',
    category: 'Full-Stack',
    description: 'A full-stack store combining an ASP.NET Core 10 Web API and a React 19 storefront: SQL Server-backed baskets, tag-evicted output caching, Stripe test-mode checkout or Cash on Delivery, and an admin console.',
    longDescription: 'LuxeStore is a full-stack e-commerce system: an ASP.NET Core 10 Web API (Onion Architecture with Domain, Persistence, Services and Presentation layers, EF Core 10, SQL Server) and a React 19 + Vite SPA with plain CSS and a persisted dark/light theme. Baskets are stored in SQL Server with server-side pricing and owner-only access, catalog responses use ASP.NET Core Output Caching evicted by tag on admin changes, checkout supports Stripe test-mode PaymentIntents or Cash on Delivery with stock checks (409 when insufficient), and ASP.NET Core Identity + JWT provide Admin/Customer roles with lockout and login rate limiting. Includes an admin console (products with image upload, brands/types, order status, sales and low-stock stats) and Vitest, Playwright and xUnit tests.',
    techStack: ['ASP.NET Core 10 Web API', 'C#', 'EF Core 10', 'SQL Server', 'Output Caching', 'Stripe (test mode)', 'JWT Bearer', 'React 19', 'Vite', 'CSS', 'Vitest', 'Playwright'],
    features: [
      'Onion Architecture separating domain entities from persistence, services and Web API controllers.',
      'SQL Server-backed baskets (Baskets + BasketItems) with server-side pricing and owner-only access, plus tag-evicted output caching for the catalog.',
      'Checkout with Stripe test-mode PaymentIntents (server-computed amount, signature-verified webhook) or Cash on Delivery.',
      'Role-based access control with ASP.NET Core Identity, JWT Bearer tokens, account lockout and login rate limiting.',
      'Admin console with total sales, order count, top sellers, low-stock alerts, product/brand/type management and order status updates.',
      'Catalog with category and brand filters, name/price sorting, name search and pagination.',
      'Vitest component tests, Playwright end-to-end scenarios and xUnit integration tests.'
    ],
    architecture: 'Onion Architecture on the backend (Domain, Persistence, Services, Presentation, Web host) with Generic Repository, Unit of Work and Specification patterns. React 19 frontend with Context API (auth, cart, theme), a typed fetch-based API client (api.ts) and plain CSS.',
    challenges: 'Keeping prices trustworthy, isolating carts between accounts, and keeping cached catalog data fresh.',
    solutions: 'Stored baskets in SQL Server with prices always read from the catalog and owner-only access (404 for anyone else), verified Stripe webhooks by signature, and evicted the catalog output cache by tag whenever products, brands or types change.',
    githubUrl: 'https://github.com/Fady519/Ecommerce-FullStack',
    liveUrl: 'https://ecommerce-full-stack-nine.vercel.app'
  },
  {
    id: 'advanced-admin-dashboard',
    title: 'Admin Dashboard',
    category: 'Frontend',
    description: 'An enterprise-grade commercial dashboard featuring secure client-side routes, interactive scheduling, and flawless visual performance without hydration flickering.',
    longDescription: 'A premium, commercial-grade Administrative Dashboard application built with React, Next.js, and TypeScript. Strategically optimized for enterprise workflows, it addresses core architecture challenges like eliminating hydration-induced visual flickering and securing client-side routes. Features high-performance interactive calendars for resource planning, responsive side-navigation bars, and dense multi-series analytical charting tools configured for high-frequency data presentation.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Recharts', 'FullCalendar', 'React Hook Form', 'Zod', 'Lucide Icons'],
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
      'Engineered robust RESTful Web APIs using C#, ASP.NET Core, and Entity Framework Core following layered and Onion Architecture principles.',
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
      'ASP.NET Core Web API & Layered / Onion Architecture',
      'Onion Architecture & Domain-Driven Design',
      'Database modeling & SQL Server optimization',
      'ASP.NET Core Output Caching',
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