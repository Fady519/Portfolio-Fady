<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:7C3AED,100:6366F1&height=240&section=header&text=Portfolio%20%E2%80%94%20Fady%20Kaiser&fontSize=56&fontColor=ffffff&fontAlignY=38&desc=Next.js%2016%20%7C%20React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20CSS%204%20%7C%20Framer%20Motion&descSize=17&descAlignY=58&descColor=c4b5fd" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Now-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://fady519.github.io/Portfolio-Fady/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Portfolio-Fady)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fadykaiser2004@gmail.com)

</div>

---

<div align="center">

## ✦ My personal portfolio
**A static portfolio site built with Next.js 16, React 19 and TypeScript, deployed to GitHub Pages.**  
*Tailwind CSS 4 · Framer Motion · Project detail modals · Static export*  
It shows my projects (with live demos and source code), the skills I used in each one, my courses and certificates, and how to contact me.

</div>

---

## 🖥️ Live Showcase

<div align="center">

> 🔗 **Live Demo:** [fady519.github.io/Portfolio-Fady](https://fady519.github.io/Portfolio-Fady/)

</div>

### 1. Hero
Greeting, CV download menu (Full-Stack, Backend and Frontend CVs) and a small C# snippet that sums up my stack.
![Portfolio Hero](docs/screenshots/01_hero.png)

### 2. Projects
Filter by category (All, Full-Stack, Backend, Frontend) and open a project to see its architecture, challenges, solutions and demo logins.
![Featured Projects](docs/screenshots/02_projects.png)

### 3. Skills
Skills grouped into Backend, Frontend, Architecture and Tools, each with a note about where I used it.
![Technical Skills](docs/screenshots/03_skills.png)

### 4. Education, Courses & Certificates
My Computer Science degree at HTI, the Route Academy and Metigator courses, and links to the certificates.
![Experience & Certifications](docs/screenshots/04_experience_certs.png)

---

## 🚀 Featured Projects

| Project | Category | Highlights | Live Links |
|---|---|---|---|
| **🏋️ Power Fitness** | Full-Stack | 3-layer architecture, ASP.NET Core 10 Web API, Next.js 16, 96 endpoints, **379 integration tests**, English/Arabic RTL, QR check-in | [Live Demo](https://power-fitness-gym.vercel.app) · [Code](https://github.com/Fady519/GymManagementSystem) |
| **🛍️ LuxeStore** | Full-Stack | Onion Architecture, ASP.NET Core 10, React 19, SQL Server baskets, Output Caching, Stripe (test mode) + Cash on Delivery, JWT RBAC, admin console | [Live Demo](https://ecommerce-full-stack-nine.vercel.app) · [Code](https://github.com/Fady519/Ecommerce-FullStack) |
| **📊 Admin Dashboard** | Frontend | Frontend admin dashboard, Next.js 16, React 19, TypeScript, Recharts, FullCalendar scheduler, React Hook Form + Zod, dark mode without a theme flash | [Live Demo](https://dashboard-flax-two-20.vercel.app/login) · [Code](https://github.com/Fady519/Dashboard) |
| **🎬 Cinema+** | Frontend | Movie & TV discovery app, React 19, TMDB REST API, YouTube trailers, watchlist saved in localStorage | [Live Demo](https://fady519.github.io/Cinema-Fady/) · [Code](https://github.com/Fady519/Cinema-Fady) |

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Next.js 16 static export** | App Router with `output: "export"`, served as static files from GitHub Pages |
| 🔷 **Typed content** | Projects, skills, courses and certificates live in one typed file (`src/lib/data.ts`) |
| 🎞️ **Framer Motion** | Entrance animations and hover effects |
| 🎨 **Tailwind CSS 4** | Utility-first styling with a dark, glass-style theme |
| 🔍 **Project modals** | Architecture, challenges, solutions and demo logins for each project |
| 📜 **Certificates** | Links to the Metigator and Route Academy certificates |
| 📱 **Responsive** | Layouts that work from phone to desktop |
| 🚀 **One-command deploy** | `npm run deploy` builds the site and pushes `out/` to the `gh-pages` branch |

---

## 🛠️ Tech Stack & Tooling

<div align="center">

### Framework & Language
![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & Animation
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge)

### Forms & Deployment
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📁 Project Structure

```
Portfolio/
├── docs/
│   └── screenshots/              # Production portfolio preview captures
│       ├── 01_hero.png
│       ├── 02_projects.png
│       ├── 03_skills.png
│       └── 04_experience_certs.png
├── public/                       # Static public assets
│   ├── certificates/             # Verified certification credentials
│   │   └── metigator_aspnetcore.png
│   ├── favicon.ico
│   └── .nojekyll
├── src/
│   ├── app/                      # Next.js App Router root
│   │   ├── favicon.ico
│   │   ├── globals.css           # Global Tailwind directives & glass panels
│   │   ├── layout.tsx            # HTML root metadata & font setup
│   │   └── page.tsx              # Single-page application aggregator
│   ├── components/               # Page sections
│   │   ├── About.tsx             # Bio, stats & Route Academy highlight
│   │   ├── Contact.tsx           # Contact form & links
│   │   ├── Experience.tsx        # Education, courses & certificates
│   │   ├── Footer.tsx            # Social channels & copyright
│   │   ├── Hero.tsx              # Interactive introduction & CV selector
│   │   ├── Navbar.tsx            # Sticky navigation with active section tracker
│   │   ├── Projects.tsx          # Filterable projects grid & architecture modal
│   │   ├── Services.tsx          # Value proposition cards
│   │   └── Skills.tsx            # Skills by category, with where each one was used
│   └── lib/
│       └── data.ts               # Centralized, strongly-typed portfolio data
├── next.config.ts                # Next.js static export & basePath config
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript compiler configurations
└── postcss.config.mjs            # Tailwind PostCSS configuration
```

---

## ⚙️ Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) `v18.0.0` or higher
- [npm](https://www.npmjs.com/) `v9.0.0` or higher

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Fady519/Portfolio-Fady.git
cd Portfolio-Fady

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Static Build & GitHub Pages Deployment

```bash
# Build optimized static export to /out
npm run build

# Deploy automatically to GitHub Pages
npm run deploy
```

---

## 📬 Contact & Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-7C3AED?style=for-the-badge)](https://fady519.github.io/Portfolio-Fady/)
[![Email](https://img.shields.io/badge/Email-fadykaiser2004@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fadykaiser2004@gmail.com)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:7C3AED,100:6366F1&height=100&section=footer" width="100%"/>

**⭐ If you liked this portfolio, feel free to give it a star on GitHub!**

</div>
