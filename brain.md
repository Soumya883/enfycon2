# ENFYCON Enterprise Workspace Intelligence Guide (brain.md)

Welcome, Agent! This file contains the complete blueprint, rules, specifications, and architecture of the Enfycon enterprise IT workspace. Follow these guidelines to maintain visual perfection, build consistency, and extend the site functionality.

---

## 📂 Project Architecture

```text
enfycon2-main/
├── client/
│   ├── src/
│   │   ├── components/      # Reusable visual components (Navbar, Footer, Hero)
│   │   ├── pages/           # Page views (Home, AboutPage, ProductDetailPage)
│   │   ├── App.tsx          # Client-side router (uses wouter)
│   │   └── main.tsx         # Client entrypoint
│   └── index.html           # Main template with Jakarta Sans Google Fonts
├── server/
│   ├── _core/               # Core Express & setup config
│   │   ├── index.ts         # Server entrypoint
│   │   └── vite.ts          # Development Vite middleware helper
│   ├── routers.ts           # tRPC Router definitions
│   └── db.ts                # Drizzle ORM database context
├── brain.md                 # THIS ARCHITECTURE GUIDE
├── package.json             # Build commands and package dependencies
└── vercel.json              # Vercel deployment specifications
```

---

## 🎨 Design & Styling Principles

To maintain Enfycon's **leading IT company aesthetic**, adhere strictly to the following styling specifications:

1. **Colors**:
   - Primary: Light slate backgrounds `#F8FAFC` alternating with white `#FFFFFF` for light sections.
   - Dark Mode Sections (Hero, Industries, Testimonials, PageHeader): `#080C1E` (Space Black) / `#0F172A` (Slate Dark).
   - Accents: Gradient combinations using Indigo (`from-indigo-600`), Purple (`via-purple-600`), and Cyan (`to-cyan-500`).

2. **Typography Hierarchy**:
   - **Main Hero Headline**: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]` (Max 60px). Avoid 8xl/black sizes to prevent visual clunkiness.
   - **Section H2 Titles**: `text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight`.
   - **PageHeader Titles**: `text-3xl md:text-4xl lg:text-5xl font-extrabold`.

3. **Glow & Interaction Accents**:
   - Use glassmorphism containers (`bg-slate-900/60 backdrop-blur-xl border border-slate-800`).
   - Cards should possess hover transformations: lift up (`whileHover={{ y: -10 }}`) and soft shadows representing the brand's gradient accent.
   - Add micro-animations using Framer Motion.

---

## 🚀 Product Ecosystem Specs

Enfycon showcases 9 dynamic AI products. The dynamic route `/products/:id` maps directly to [ProductDetailPage.tsx](file:///c:/Users/SUSHVINE%20PVT%20LTD/Downloads/enfycon2-main/enfycon2-main/client/src/pages/ProductDetailPage.tsx):

| Product ID | Product Name | Brand Gradient | Primary Focus |
|---|---|---|---|
| `enfysync` | enfysync | `from-blue-600 to-indigo-700` | Collaboration & Workflow Automation |
| `ivaak` | iVaak.ai | `from-purple-600 to-violet-700` | Voice transcription & Conversational AI |
| `truefix` | Truefix.ai | `from-emerald-600 to-teal-700` | Autonomous Code Repair & CI/CD |
| `icognito` | iCognito.ai | `from-rose-600 to-red-700` | Data Masking, Privacy, & Zero-Knowledge |
| `idental` | iDental.ai | `from-pink-600 to-rose-700` | Dental X-Ray & Treatment Planning AI |
| `lexgenie` | lexGenie.ai | `from-amber-600 to-orange-700` | Legal assistants & CLM Review |
| `quantfin` | QuantFin.ai | `from-cyan-600 to-blue-700` | Portfolio Stress Testing & FinTech ML |
| `performanceedge` | PerformanceEdge.ai | `from-indigo-600 to-blue-700` | Productivity Analytics & Burnout Alert |
| `iwac` | iWac.ai | `from-slate-700 to-gray-900` | Biometric Face Access & Workplace Security |

---

## 📞 Communication Channels

All client-facing widgets support the following instant communication networks:

- **WhatsApp**: `https://wa.me/12012017078` (For instant messaging & product queries).
- **Messenger**: `https://m.me/enfycon` (Direct social inbox integration).
- **Phone Hotline**: `+1 201.201.7878` (HQ voice hotline).
- **Email Channel**: `office@enfycon.com`

---

## 🛠️ Setup & Running Scripts

To prevent execution failures on Windows systems, follow these exact launch scripts:

- **Build Check**:
  ```bash
  cmd /c "npm run check"
  ```
- **Vite Client Build**:
  ```bash
  cmd /c "npm run build"
  ```
- **Local Dev Server (bypassing Execution Policy)**:
  ```bash
  cmd /c "set NODE_ENV=development && npx tsx watch server/_core/index.ts"
  ```
- **Deploy to Vercel (Production)**:
  ```bash
  cmd /c "vercel --prod --yes"
  ```

---

## 🎯 Next Steps for Agents

If you are continuing development, prioritize the following tasks:
1. **Case Studies Integration**: Build standalone routes `/case-studies/:id` linking from the portfolio section to detailed transformation success files.
2. **Pricing Calculator**: Create an interactive pricing slider based on active seats and SLA specifications.
3. **SEO optimization**: Monitor Google Webmaster tools and audit sitemap indexing hooks.
