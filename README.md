# Meet Solanki | Software Engineer & Portfolio

> Personal developer portfolio and engineering showcase of **Meet Solanki** — Software Engineer specializing in full-stack web applications, AI automation, high-performance backend systems, and modern frontend architecture.

---

## 🌟 Key Features

- ⚡ **Ultra-Fast & Modern Architecture**: Built with **React 19**, **TypeScript**, **Vite 7**, and powered by **Bun** runtime.
- 🎨 **Fluid Animations & Micro-Interactions**: Smooth scroll reveals, interactive card hover effects, and spring physics powered by **Motion (Framer Motion)**.
- 💼 **Featured Projects Showcase**: Comprehensive display of production software including AI automation bots, ERP platforms, video rendering engines, and real-time chat SaaS.
- 🧭 **Type-Safe Routing & Navigation**: Fast client-side routing with **TanStack Router**, responsive desktop navigation menu, and animated mobile drawer sheet.
- 📅 **Career & Academic Journey Timeline**: Chronological visual roadmap highlighting key milestones, education, and software engineering roles.
- 🛠️ **Dynamic Skills Matrix**: Categorized tech stack grid showcasing programming languages, frameworks, AI tools, cloud services, and dev tools.
- 🚀 **Automated CI/CD Deployment**: Declarative `Jenkinsfile` for automated production builds and deployment to Nginx webroot.

---

## 💻 Featured Projects

| Project | Category | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| [**Auto Job Apply & LinkedIn Bot**](https://github.com/solankimeet518/auto_job_apply) | AI & Automation | Bun, Playwright, React, Vite, Ollama, LangChain | Automated resume parsing, Indeed AI screening form fill, and targeted LinkedIn recruiter outreach with local LLMs. |
| [**MCP ERP System**](https://mcp.meetitconsultancy.in) | Enterprise / Fintech | Rust, Axum, SeaORM, React, TanStack, Redux, Zod | High-performance ERP platform for daily business accounting, invoicing, ledger balances, and transaction tracking. |
| **Local Client Software Suites** | B2B Services | React, Next.js, Axum, SeaORM, Docker, DigitalOcean | Bespoke digital transformations, fast marketing portfolios, and business dashboards for enterprise clients. |
| **Next.js Stripe Chat App** | SaaS / Chat | Next.js, Emotion, Stripe API, WebSockets, Tailwind | Real-time communication platform with paid subscription tiers and Stripe checkout integrations. |
| **Cloud-Based Video Editor** | Media Tech | Vue.js, Etro.js, Node.js, FFmpeg, NestJS | Web-based video timeline editor with server-side FFmpeg processing for high-speed multi-track exports. |
| **Sumeet Shipping System** | Logistics | React, Flutter, Firebase, Cloud Functions | Cross-platform shipping logistics system with web admin portal and Flutter mobile companion app. |

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, TanStack Router
- **Styling**: Tailwind CSS v4, Shadcn UI / Base UI, Lucide Icons
- **Animation**: Motion (Framer Motion)
- **State Management**: Zustand
- **Runtime & Bundler**: Bun, Vite 7
- **CI/CD & Hosting**: Jenkins Pipeline, Nginx, Linux (Ubuntu/Debian)

---

## 🚀 Local Development Setup

### Prerequisites

- [Bun](https://bun.sh/) (v1.1+ recommended) or Node.js (v18+)

### Step-by-Step

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/solankimeet518/ms.git
   cd ms
   ```

2. **Install Dependencies**:
   ```bash
   bun install
   ```

3. **Start Development Server**:
   ```bash
   bun run dev
   ```
   *Navigate to [http://localhost:5173/](http://localhost:5173/) in your browser.*

4. **Type Check & Production Build**:
   ```bash
   bun run build
   ```
   *Built production assets are generated in the `dist/` directory.*

5. **Preview Production Build**:
   ```bash
   bun run preview
   ```

---

## 🔄 CI/CD & Deployment Pipeline (`Jenkinsfile`)

The repository includes a declarative `Jenkinsfile` configured for automated production deployment:

| Pipeline Target | Branch | Webroot | Pipeline Actions |
| :--- | :--- | :--- | :--- |
| **Production** | `main` | `/var/www/ms` | `bun install` → `bun run build` → `rsync dist/` → Nginx reload |
| **Pull Requests** | `PR-*` / Feature branches | *Validation Only* | `bun install` → `bun run build` (build integrity check) |

---

## 📬 Contact & Social Profiles

- 📧 **Email**: [solankimeet518+portfolio@gmail.com](mailto:solankimeet518+portfolio@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/meet518](https://www.linkedin.com/in/meet518/)
- 🐙 **GitHub**: [github.com/solankimeet518](https://github.com/solankimeet518)
- 𝕏 **Twitter / X**: [@solankimeet518](https://x.com/solankimeet518)
- 🧩 **LeetCode**: [leetcode.com/u/solankimeet518](https://leetcode.com/u/solankimeet518/)

---

© 2026 Meet Solanki. All rights reserved.
