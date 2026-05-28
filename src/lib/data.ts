

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
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const PERSONAL_INFO = {
  name: 'Fady Kaiser Gerges',
  title: 'Full-Stack / .NET Backend Developer',
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
  bio: 'Junior Full-Stack & .NET Backend Developer with a solid Computer Science foundation and hands-on experience building production-grade server-side systems and highly interactive responsive interfaces. Specialized in ASP.NET Core, EF Core, Clean Architecture, and modern React/Next.js SPA development.',
  aboutCode: `var fady = new Developer {
  Name = "Fady Kaiser",
  Role = "Full-Stack .NET Developer",
  Backend = new[] { "ASP.NET Core", "EF Core", "Clean Architecture", "RESTful APIs", "SQL Server" },
  Frontend = new[] { "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit" },
  Architecture = new[] { "Onion Architecture", "3-Layer DAL/BLL", "Repository & Unit of Work" },
  Passions = new[] { "Scalable Systems", "Clean Code", "Real-World Impact" },
  OpenTo = "Full-Stack & Backend roles"
};`
};

export const SKILLS = {
  backend: [
    { name: 'C#', level: 90 },
    { name: 'ASP.NET Core Web API', level: 92 },
    { name: 'ASP.NET Core MVC', level: 85 },
    { name: 'Entity Framework Core', level: 88 },
    { name: 'SQL Server', level: 85 },
    { name: 'LINQ', level: 90 },
    { name: 'SignalR', level: 80 }
  ],
  frontend: [
    { name: 'React.js', level: 88 },
    { name: 'Next.js', level: 82 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'Redux Toolkit / Context API', level: 85 },
    { name: 'HTML5 & CSS3', level: 92 }
  ],
  architecture: [
    { name: 'Onion Architecture', level: 88 },
    { name: '3-Layer Architecture', level: 90 },
    { name: 'Repository & Unit of Work', level: 88 },
    { name: 'Specification Pattern', level: 85 },
    { name: 'SOLID Principles', level: 90 },
    { name: 'RESTful API Design', level: 92 }
  ],
  tools: [
    { name: 'Redis Caching', level: 75 },
    { name: 'Stripe Payments', level: 80 },
    { name: 'JWT Auth & ASP.NET Identity', level: 88 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Postman & Swagger', level: 90 },
    { name: 'Figma', level: 70 }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'advanced-admin-dashboard',
    title: 'Advanced Admin Dashboard',
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
    liveUrl: 'https://dashboard-flax-two-20.vercel.app/login' // 🔗 تم تحديث الرابط هنا بنجاح
  },
  {
    id: 'e-commerce-api',
    title: 'E-Commerce RESTful API',
    category: 'Backend',
    description: 'Production-grade e-commerce backend built with ASP.NET Core, implementing Onion Architecture, Redis caching, JWT auth, and Stripe payments.',
    longDescription: 'A production-grade, high-performance E-Commerce API built using ASP.NET Core Web API. This system features clean Onion Architecture to divide the application into core, application, infrastructure, and presentation layers. Key integrations include Redis distributed caching for high-speed catalog querying, JWT authorization combined with ASP.NET Identity for secure user sessions, and Stripe API for processing checkout transactions end-to-end.',
    techStack: ['ASP.NET Core Web API', 'C#', 'Entity Framework Core', 'SQL Server', 'Redis', 'Stripe API', 'AutoMapper', 'JWT Bearer', 'Swagger'],
    features: [
      'Clean Onion Architecture separating domain entity core from infrastructure database configurations.',
      'Generic Repository Pattern and Specification Pattern with EF Core, standardizing query logic and preventing code duplication.',
      'Redis distributed caching to store catalog and cart data, boosting query speeds and reducing SQL Server loads.',
      'Secure identity management using ASP.NET Identity, enabling custom claims-based access controls (RBAC) and JWT JWT bearer generation.',
      'End-to-end payment gateway processing via Stripe API, tracking session creation, checkouts, and updating payment statuses.',
      'Custom middleware for global exception handling, standardized API responses, and request logging.',
      'Fully asynchronous pipelines utilizing C# async/await to maximize concurrent request throughput.'
    ],
    architecture: 'Onion Architecture (Clean Architecture) with Core (Domain & Application), Infrastructure (Persistence), and Presentation (Web API) layers. The repository pattern abstracting database access layers and Specification Pattern mapping complex filter criteria.',
    challenges: 'Designing complex queries with pagination, filtering, search, and sorting that scale without repeating DB-access code or blocking threads under load.',
    solutions: 'Developed a robust Specification pattern that accepts LINQ expressions dynamically. The Repository class compiles these specifications into SQL statements, optimizing performance and enforcing absolute DRY principles.',
    githubUrl: 'https://github.com/Fady519/E_CommerceSolution',
    liveUrl: 'http://ecommercesolution.runasp.net/swagger/index.html'
  },
  {
    id: 'gym-management-system',
    title: 'Gym Management System',
    category: 'Backend', // 🏋️ تم النقل لقسم الباك اند بناء على طلبك
    description: 'Full-featured enterprise gym management web portal supporting RBAC, atomic booking transactions, and interactive administration dashboards.',
    longDescription: 'A fully featured administration and member system built using ASP.NET Core MVC. Employs 3-Layer Architecture (DAL/BLL/UI) to handle gym memberships, subscriptions, booking classes, and session scheduling. The project leverages ASP.NET Identity for security across multiple distinct roles (Member, Admin, Super Admin) and features a detailed analytics service to surface crucial business metrics.',
    techStack: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'AutoMapper', 'LINQ', 'ASP.NET Identity', 'Bootstrap'],
    features: [
      '3-Layer Architecture separating presentation view layers from business logic rules and data access tables.',
      'Repository Pattern and Unit of Work to encapsulate transaction commits, ensuring all operations on members and bills complete atomically.',
      'Strict Role-Based Access Control (RBAC) across 12+ dashboard pages preventing unauthorized staff actions.',
      'Live Analytics dashboard showcasing active memberships, revenue stats, daily sessions, and membership statuses.',
      'AutoMapper setup reducing object mapping boilerplate by over 60%, isolating view-models from core domain structures.',
      'Complete custom member registration, payment logging, and automated session scheduling.'
    ],
    architecture: 'Traditional 3-Layer architecture featuring Data Access Layer (DAL) representing EF Core DBContext, Business Logic Layer (BLL) encapsulating operations, and ASP.NET Core MVC presenting HTML views and managing controller queries.',
    challenges: 'Managing multi-step transactional integrity when enrolling a member—assigning schedules, initiating billing, and activating access logs required synchronized database commits.',
    solutions: 'Applied the Unit of Work pattern alongside DbContext transactions, ensuring all tables are updated concurrently or rolled back perfectly if any step fails.',
    githubUrl: 'https://github.com/Fady519/GymManagementSystem',
    liveUrl: 'http://gymmanagementsystem54.runasp.net'
  },
  {
    id: 'freshcart-ecommerce',
    title: 'FreshCart E-Commerce Platform',
    category: 'Frontend',
    description: 'Modern, highly responsive single-page web storefront equipped with Redux cart systems, form schemas, and gorgeous smooth animations.',
    longDescription: 'A modern, premium front-end e-commerce single page application designed to provide a shopping journey. Features highly curated layouts, robust cart management, real-time client-side validation, and smooth route and micro-interactions optimized for mobile and desktop screens.',
    techStack: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Axios', 'React Hook Form', 'Framer Motion', 'TypeScript'],
    features: [
      'Fully responsive, mobile-first design with interactive shopping drawers, grid layouts, and sliding sliders.',
      'Centralized client-side state using Redux Toolkit to sync carts, user authentication, and wishlists seamlessly across all sections.',
      'Route-based code splitting and lazy loading to achieve fast first-contentful-paint (FCP) scores.',
      'Stunning animated product catalogs and layout transitions using Framer Motion with custom easing properties.',
      'Schema-based input validation using React Hook Form, presenting custom error feedback across multi-step checkout forms.',
      'Dynamic product filters, category carousels, and persistent storage synchronization.'
    ],
    architecture: 'Modular React Component Architecture leveraging Next.js file-system routing. Redux slices handle state streams, while custom Tailwind utilities support custom screen scale factors.',
    challenges: 'Preventing excessive re-renders during state mutations (e.g., adding to cart, sorting filters) and keeping bundle sizes lightweight for mobile devices.',
    solutions: 'Utilized React memoization hooks (useMemo, useCallback) for computationally heavy filtering, split styles into tailwind-only utilities, and applied lazy loading for offscreen sliders and drawers.',
    githubUrl: 'https://github.com/Fady519/Ecommerce-Website',
    liveUrl: 'https://fady519.github.io/Ecommerce-Website/login'
  },
  {
    id: 'cinema-streaming',
    title: 'Cinema+ Streaming Discovery',
    category: 'Frontend',
    description: 'High-fidelity cinematic streaming search and discovery portal consuming the TMDB REST API with custom auth guards.',
    longDescription: 'Cinema+ is an elegant, mobile-responsive video discovery platform that aggregates rich cinematic data from the official TMDB REST API. It showcases trending titles, active trailers, customized genre pages, and instant search capabilities powered by input debouncing.',
    techStack: ['React.js', 'Tailwind CSS', 'Axios', 'React Router', 'TMDB API', 'Context API'],
    features: [
      'Live integration with TMDB REST API over 8+ distinct endpoints for real-time video discovery.',
      'Persistent "My Watchlist" feature managed via React Context API to let users save shows across page refreshes.',
      'Debounced live search querying database catalogs smoothly on keystroke, preventing API request bottlenecks.',
      'Mobile-first responsive fluid grids featuring content skeleton loading screens covering empty async state fetches.',
      'Protected client-side routing gates restricting access to trailers and watchlist panels without active logins.'
    ],
    architecture: 'Standard SPA using React Router, consuming a central Context API to pass state down the tree, coupled with Axios instance interceptors mapping global backend headers.',
    challenges: 'Handling multiple concurrent TMDB API calls on the homepage without rendering erratic layouts or facing API rate limit blocking.',
    solutions: 'Created specialized Promise.all hook routines and coupled with layout skeleton states to guarantee all grids load synchronously with pleasant visual transitions.',
    githubUrl: 'https://github.com/Fady519/Cinema-Fady',
    liveUrl: 'https://fady519.github.io/Cinema-Fady/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: '.NET Backend Developer',
    company: 'Route Academy',
    location: 'Cairo, Egypt',
    duration: 'May 2025 – Dec 2025',
    description: [
      'Completed 150+ hours of structured intensive training on C#, ASP.NET Core, EF Core, SQL Server, and Clean Architectures.',
      'Architected high-throughput task management backend systems, reducing query overhead and improving maintainability.',
      'Designed and validated 20+ RESTful API endpoints, verifying validation rules and exception flows with structured Postman collections.',
      'Configured secure authorization schemes with JWT Bearer tokens and custom claims-based access controls.',
      'Integrated real-time SignalR hubs supporting live chat, group channels, and real-time push updates.',
      'Collaborated inside agile scrum environments across 4 bi-weekly sprints, facilitating peer reviews and code branching.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Faculty of Computers and Information, HTI',
    location: '10th of Ramadan, Egypt',
    duration: '2023 – Expected July 2027'
  }
];

export const CERTIFICATIONS: Certification[] = [
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
      'ASP.NET Core Web API & MVC architectures',
      'Onion & Clean Architecture implementation',
      'Database modeling & SQL Server optimization',
      'Redis Distributed Caching setup',
      'JWT Auth & Identity authorization (RBAC)'
    ]
  },
  {
    title: 'Stunning SPA Frontends',
    description: 'Building gorgeous, pixel-perfect interfaces that deliver frictionless user experiences on mobile and desktop screens.',
    iconName: 'Layout',
    features: [
      'Next.js & React App development',
      'TypeScript migration & integration',
      'State stream synchronization (Redux Toolkit)',
      'Highly stylized layouts using Tailwind CSS',
      'Framer Motion smooth scroll & hover animations'
    ]
  },
  {
    title: 'Performance & Architecture Auditing',
    description: 'Refactoring existing repositories to resolve design flaws, minimize render lag, and elevate architectural scalability.',
    iconName: 'Zap',
    features: [
      'Applying Repository & Specification patterns',
      'Enforcing strict SOLID principles',
      'Minimizing code redundancy (DRY code)',
      'Bundle size optimization & code splitting',
      'API bottleneck diagnosis and resolution'
    ]
  }
];

export const STATS = [
  { label: 'Completed Training Hours', value: '150+' },
  { label: 'Enterprise Projects Completed', value: '5+' },
  { label: 'Agile Sprints Managed', value: '4' },
  { label: 'Technologies Mastered', value: '15+' }
];