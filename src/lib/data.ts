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

export interface Course {
  title: string;
  provider: string;
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
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Skill {
  name: string;
  note: string;
}

export const PERSONAL_INFO = {
  name: 'Fady Kaiser Gerges',
  title: 'Junior Full-Stack .NET Developer',
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
  bio: 'Junior Full-Stack .NET Developer and Computer Science student at HTI (Class of 2027). I build complete web applications: ASP.NET Core Web APIs with EF Core and SQL Server on the backend, and React / Next.js with TypeScript on the frontend. My two full-stack projects are live with demo logins.',
  aboutCode: `var fady = new Developer {
  Name = "Fady Kaiser",
  Role = "Junior Full-Stack .NET Developer",
  Backend = new[] { "ASP.NET Core 10", "EF Core 10", "RESTful APIs", "SQL Server", "Output Caching" },
  Frontend = new[] { "React 19", "Next.js 16", "TypeScript", "Tailwind CSS 4", "TanStack Query" },
  Architecture = new[] { "Layered (3-tier) Architecture", "Onion Architecture", "Repository & Unit of Work" },
  Testing = new[] { "xUnit", "Integration Tests (379)", "Playwright", "Vitest" },
  Interests = new[] { "Clean Code", "Testing", "Knowing why a design works" },
  OpenTo = "Junior Full-Stack / Backend roles & internships"
};`
};

export const SKILLS: Record<'backend' | 'frontend' | 'architecture' | 'tools', Skill[]> = {
  backend: [
    { name: 'C#', note: 'Power Fitness and LuxeStore APIs' },
    { name: 'ASP.NET Core Web API', note: 'Power Fitness (96 endpoints) and LuxeStore' },
    { name: 'Entity Framework Core', note: 'Migrations, specifications, RowVersion concurrency' },
    { name: 'SQL Server', note: 'Database for both full-stack projects' },
    { name: 'LINQ', note: 'Queries, paging and dashboard stats' },
    { name: 'ASP.NET Core MVC', note: 'Route Academy course projects' },
    { name: 'SignalR', note: 'Studied in a course, planned for my next project' },
    { name: 'xUnit', note: '379 integration tests in Power Fitness' }
  ],
  frontend: [
    { name: 'React 19 & Next.js 16', note: 'Power Fitness, LuxeStore, Admin Dashboard' },
    { name: 'TypeScript', note: 'Power Fitness, Admin Dashboard, LuxeStore API client' },
    { name: 'Tailwind CSS 4', note: 'Power Fitness, Admin Dashboard, this portfolio' },
    { name: 'JavaScript (ES6+)', note: 'LuxeStore storefront, Cinema+' },
    { name: 'TanStack Query', note: 'Server state in Power Fitness' },
    { name: 'Redux Toolkit / Context API', note: 'Redux in Power Fitness, Context in LuxeStore' },
    { name: 'React Hook Form + Zod', note: 'Power Fitness forms, Admin Dashboard' },
    { name: 'HTML5 & CSS3', note: 'All projects; LuxeStore uses plain CSS' }
  ],
  architecture: [
    { name: 'Layered (3-tier) Architecture', note: 'Power Fitness: API / BLL / DAL' },
    { name: 'Onion Architecture', note: 'LuxeStore' },
    { name: 'Repository & Unit of Work', note: 'Both full-stack projects' },
    { name: 'Specification Pattern', note: 'LuxeStore catalog paging and filtering' },
    { name: 'REST API Design & RFC 9457', note: 'Problem Details error responses' },
    { name: 'SOLID & OOP', note: 'Applied across both APIs' }
  ],
  tools: [
    { name: 'JWT & ASP.NET Core Identity', note: 'Rotating refresh tokens, role-based policies' },
    { name: 'Output Caching', note: 'LuxeStore catalog, evicted by tag on admin changes' },
    { name: 'Stripe (test mode)', note: 'LuxeStore PaymentIntents and signed webhook' },
    { name: 'Playwright & Vitest', note: 'End-to-end and component tests' },
    { name: 'Postman & Swagger / OpenAPI', note: 'Live API docs for both projects' },
    { name: 'Git & GitHub', note: 'All projects' }
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
    description: 'A full-stack store combining an ASP.NET Core 10 Web API and a React 19 storefront: SQL Server-backed baskets, tag-evicted output caching, Cash on Delivery or a Stripe test-mode PaymentIntent, and an admin console.',
    longDescription: 'LuxeStore is a full-stack e-commerce system: an ASP.NET Core 10 Web API (Onion Architecture with Domain, Persistence, Services and Presentation layers, EF Core 10, SQL Server) and a React 19 + Vite SPA with plain CSS and a persisted dark/light theme. Baskets are stored in SQL Server with server-side pricing and owner-only access, catalog responses use ASP.NET Core Output Caching evicted by tag on admin changes, and orders are placed with Cash on Delivery or a Stripe test-mode PaymentIntent created on the server, with stock checks (409 when insufficient). ASP.NET Core Identity + JWT provide Admin/Customer roles with lockout and login rate limiting. Includes an admin console (products with image upload, brands/types, order status, sales, a 7-day sales chart and low-stock alerts) and Vitest, Playwright and xUnit tests.',
    techStack: ['ASP.NET Core 10 Web API', 'C#', 'EF Core 10', 'SQL Server', 'Output Caching', 'Stripe (test mode)', 'JWT Bearer', 'React 19', 'Vite', 'CSS', 'Vitest', 'Playwright'],
    features: [
      'Onion Architecture separating domain entities from persistence, services and Web API controllers.',
      'SQL Server-backed baskets (Baskets + BasketItems) with server-side pricing and owner-only access, plus tag-evicted output caching for the catalog.',
      'Checkout with Cash on Delivery, or a Stripe test-mode PaymentIntent created on the server (server-computed amount, signature-verified webhook). The card form is a demo: card details are not sent to Stripe yet.',
      'Role-based access control with ASP.NET Core Identity, JWT Bearer tokens, account lockout and login rate limiting.',
      'Admin console with total sales, order count, a 7-day sales chart, top sellers, low-stock alerts, product/brand/type management and order status updates.',
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
    description: 'A frontend admin dashboard with Next.js 16 and TypeScript: KPI cards and charts, a FullCalendar scheduler, team, contacts and invoices pages, a validated form and a dark / light theme that does not flash on load.',
    longDescription: 'A frontend practice project built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. There is no backend: the team, contacts and invoices lists come from the DummyJSON API, the charts use sample data, and the login is a browser-only demo with a route guard in the root layout. The focus was layout, charts, forms, the calendar and theming.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Recharts', 'FullCalendar', 'React Hook Form', 'Zod', 'Lucide Icons'],
    features: [
      'Overview with KPI cards and a revenue chart that switches between daily, weekly and monthly data.',
      'FullCalendar scheduler (month, week, day): click a date to add an event, drag to move it, click to delete; events are saved in localStorage.',
      'Team, contacts and invoices pages loaded from DummyJSON, with search and filters.',
      'Profile form validated with React Hook Form and a Zod schema.',
      'Dark / light theme applied by an inline script before the first paint, so the wrong theme never flashes.',
      'Browser-only demo login with a route guard, plus a one-click demo account.'
    ],
    architecture: 'Next.js 16 App Router with one folder per page, a shared Sidebar / Topbar shell in the root layout, and small reusable components (StatCard, RecentActivity). Pages fetch from DummyJSON on the client; the theme and calendar events live in localStorage.',
    challenges: 'Avoiding a flash of the wrong theme on first load, and keeping calendar events after a page refresh.',
    solutions: 'An inline script in <head> reads the saved theme and sets the dark class before React hydrates; calendar events are written to localStorage on every change and read back on load.',
    githubUrl: 'https://github.com/Fady519/Dashboard',
    liveUrl: 'https://dashboard-flax-two-20.vercel.app/login',
    demoCredentials: [
      { role: 'Demo account', username: 'admin@admin.com', password: 'admin' }
    ]
  },
  {
    id: 'cinema-streaming',
    title: 'Cinema+ — Movie & TV Discovery',
    category: 'Frontend',
    description: 'A movie and TV discovery app built with React 19 and the TMDB API: trending titles, search, genre browsing, YouTube trailers and a watchlist saved in the browser.',
    longDescription: 'Cinema+ is a React 19 + Vite single-page app that reads movie and TV data from the TMDB REST API with Axios. It has a trending hero, rows for top rated and upcoming titles, genre browsing, multi-search, a details view with the YouTube trailer, and a "My List" watchlist kept in localStorage.',
    techStack: ['React 19', 'Vite', 'React Router 7', 'Tailwind CSS', 'Framer Motion', 'Axios', 'TMDB REST API', 'React YouTube'],
    features: [
      'TMDB REST API through Axios: trending, top rated, upcoming, discover, multi-search, details and videos endpoints.',
      'Trailer playback with react-youtube on the details view.',
      '"My List" watchlist saved in localStorage.',
      'Search and browse grids with shimmer skeletons while results load.',
      'Responsive layouts and Framer Motion animations.',
      'Sign-in page and a route guard that keep the browse pages behind a browser-only login.'
    ],
    architecture: 'Single-page app with React Router 7, Axios calls to TMDB, a ProtectedRoute wrapper for the browse pages and localStorage for the watchlist.',
    challenges: 'The home page makes several TMDB requests, and the layout jumped while they loaded.',
    solutions: 'Shimmer skeletons with the same size as the real cards are shown while each row loads, so the page does not jump when the data arrives.',
    githubUrl: 'https://github.com/Fady519/Cinema-Fady',
    liveUrl: 'https://fady519.github.io/Cinema-Fady/'
  }
];

export const COURSES: Course[] = [
  {
    title: 'Mastering ASP.NET Core: Concepts to Production-Ready APIs',
    provider: 'Metigator (Issam Abdelnabi)',
    location: 'Online',
    duration: '06/2026 – 08/2026',
    description: [
      'Online ASP.NET Core course focused on building and structuring Web APIs.'
    ]
  },
  {
    title: '.NET Core Backend Development Diploma',
    provider: 'Route Academy',
    location: 'Cairo, Egypt',
    duration: '05/2025 – 01/2026',
    description: [
      'C#, OOP and SOLID, then ASP.NET Core MVC and Web API.',
      'Entity Framework Core with SQL Server: data modeling, LINQ queries and migrations.',
      'Layered and Onion Architecture with the Repository and Unit of Work patterns.',
      'Authentication and authorization with ASP.NET Core Identity, JWT and roles.'
    ]
  },
  {
    title: 'Front-End Development Diploma',
    provider: 'Route Academy',
    location: 'Cairo, Egypt',
    duration: '03/2025 – 08/2025',
    description: [
      'HTML5, CSS3, Bootstrap and responsive layouts.',
      'JavaScript (ES6+), the DOM and calling REST APIs.',
      'React fundamentals: components, hooks, routing and state.'
    ]
  },
  {
    title: 'Programming Fundamentals',
    provider: 'Route Academy',
    location: 'Cairo, Egypt',
    duration: '10/2024 – 03/2025',
    description: [
      'Programming basics and problem solving.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Higher Technological Institute (HTI)',
    location: '10th of Ramadan, Egypt',
    duration: '2023 – Expected Jun 2027'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Mastering ASP.NET Core: Concepts to Production-Ready APIs',
    issuer: 'Metigator (Issam Abdelnabi)',
    year: '2026',
    credentialId: 'cert_b645q3rt',
    link: 'https://drive.google.com/file/d/1cqCpkzDO_2e7SiMft16lEgUFPm4OhbbC/view'
  },
  {
    name: '.NET Core Backend Development Diploma',
    issuer: 'Route Academy',
    year: '2026',
    link: 'https://drive.google.com/file/d/1JE8KTPW4HUaUmrLeRGeIp8_TvR3Nm6pL/view'
  },
  {
    name: 'Front-End Development Diploma',
    issuer: 'Route Academy',
    year: '2025',
    link: 'https://drive.google.com/file/d/1r4cn6TfUqXxGSrCflXzY7Y9S_YSVQjPj/view'
  },
  {
    name: 'Programming Fundamentals',
    issuer: 'Route Academy',
    year: '2025'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Backend Development',
    description: 'REST APIs with ASP.NET Core, EF Core and SQL Server, with authentication, validation and clear error responses.',
    iconName: 'Server',
    features: [
      'ASP.NET Core Web API (.NET 10)',
      'Layered and Onion Architecture',
      'EF Core & SQL Server data modeling',
      'JWT, refresh tokens & ASP.NET Core Identity',
      'Output Caching & rate limiting'
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Responsive React and Next.js interfaces in TypeScript, connected to real APIs, in English and Arabic.',
    iconName: 'Layout',
    features: [
      'Next.js 16 & React 19',
      'TypeScript with generated API types',
      'TanStack Query, Redux Toolkit & Context API',
      'Tailwind CSS 4 & shadcn/ui',
      'English / Arabic (RTL) layouts'
    ]
  },
  {
    title: 'Testing & Code Quality',
    description: 'Tests that run against a real database, and code organized so each layer has one job.',
    iconName: 'Zap',
    features: [
      'xUnit integration tests (379 in Power Fitness)',
      'Playwright end-to-end & Vitest tests',
      'Repository, Unit of Work & Specification patterns',
      'SOLID & clean code',
      'RFC 9457 Problem Details errors'
    ]
  }
];

export const STATS = [
  { label: 'Live Projects', value: '4' },
  { label: 'API Endpoints in Power Fitness', value: '96' },
  { label: 'Integration Tests in Power Fitness', value: '379' },
  { label: 'Courses Completed', value: '4' }
];
