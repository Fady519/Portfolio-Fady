# Fady Kaiser Gerges - Premium Developer Portfolio

A world-class, responsive, and performance-optimized Developer Portfolio website engineered for Fady Kaiser Gerges. Designed with modern visual principles—glowing dark mode, glassmorphism, responsive visual mockups, and smooth Framer Motion page animations.

🌐 **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, TypeScript, Lucide Icons, React Hook Form.

---

## Key Features

- 🌟 **Premium Dark UI/UX:** Clean, elegant dark aesthetic featuring glowing gradients, backdrop blur panels (`glassmorphism`), responsive grid overlays, and curated HSL theme structures.
- 📱 **Fully Responsive Layout:** Mobile-first architecture, carefully configured to render fluidly across all mobile, tablet, and desktop viewports.
- ⚡ **Asynchronous Typed Roles:** Typewriter presentation outlining competencies (.NET Core Backend, Frontend SPA, Full-Stack Developer).
- 📂 **Premium Projects Showcase:** Modular showcase containing dynamic category tabs and detailed custom popups illustrating architectures, challenges faced, and specific solutions applied.
- ⏳ **Interactive Journey timeline:** Elegant work history, education paths, and professional route certifications presented in responsive vertical nodes.
- 💬 **Dynamic Contact & Messaging:** Integrated form handled by `react-hook-form` presenting validation feedback alongside direct WhatsApp shortcuts and active social link paths.
- 📈 **Performance & SEO Blueprint:** Full metadata setups, pre-rendered static generation layout routines, and dynamic asset structures to guarantee fast paint scores.

---

## Folder Structure

```text
src/
├── app/
│   ├── globals.css         # Custom background glowing grid and styling variables
│   ├── layout.tsx          # SEO tags configuration and root responsive wrapper
│   └── page.tsx            # Main assembled landing page and scroll indicators
├── components/
│   ├── Navbar.tsx          # Glassmorphic header nav supporting smooth scroll
│   ├── Hero.tsx            # Multi-CV download selections and code card simulator
│   ├── About.tsx           # Visual statistics, bio summaries and training items
│   ├── Skills.tsx          # Interactive categories and active progress tracks
│   ├── Experience.tsx      # Vertical timeline highlighting jobs and academies
│   ├── Projects.tsx        # Grid cards listing and extensive architecture details modal
│   ├── Services.tsx        # Solid patterns lists detailing developer offerings
│   ├── Contact.tsx         # Validated message forms and active messaging shortcuts
│   └── Footer.tsx          # Copyright information and secondary return navigation
├── lib/
│   └── data.ts             # Centralized portfolio dataset extracted from professional CVs
```

---

## Local Development

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Fady519/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies:**
   Ensure you use npm to respect the configuration settings:
   ```bash
   npm install
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) inside your web browser.

4. **Production Build Compilation:**
   Verify code builds correctly without issues:
   ```bash
   npm run build
   ```

---

## Vercel Deployment Instructions

Deploying this Next.js app to Vercel is extremely straightforward:

1. **Commit and Push changes to GitHub:**
   Ensure all local changes are fully committed:
   ```bash
   git add .
   git commit -m "feat: complete premium developer portfolio website"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Log into your [Vercel Account](https://vercel.com).
   - Click the **"Add New"** dropdown on your dashboard and select **"Project"**.
   - Import your portfolio repository (e.g., `Fady519/Portfolio` or similar).
   - In the **Configure Project** window:
     - **Framework Preset:** Select `Next.js`.
     - **Root Directory:** `./` (default).
     - **Build and Output Settings:** Leave default settings (`npm run build` will execute automatically).
     - **Environment Variables:** No custom environment variables are strictly required to launch.
   - Click the **"Deploy"** button.

3. **Domain & SSL configuration:**
   Vercel will build the project statically and assign a secure SSL `https://...vercel.app` domain instantly.

---

## Key Recommendations & Architectural Enhancements

For your secondary GitHub repositories (e.g., Cinema-Fady, GymManagementSystem), here are highly valued architectural updates you can apply:

- **E-Commerce RESTful API:** Ensure you add comprehensive unit tests (using xUnit and Moq) to validate the custom Specification evaluation layers. This makes the backend extremely attractive to senior technical recruiters.
- **Gym Management System:** Consider migrating the front-end Razor MVC views into a modern React/Next.js single page application consuming separate ASP.NET Web API controllers. This represents the absolute industry standard.
- **FreshCart & Cinema+:** Integrate automatic error boundaries to gracefully intercept TMDB/catalog network exceptions and fallback to caching layers when offline.
