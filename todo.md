# Enfycon Rebuild TODO - Light Theme + All Pages

## Theme & Design
- [x] Project initialization and scaffold setup
- [x] Update dark theme colors in index.css (enterprise dark palette)
- [x] Update index.html with Google Fonts (Plus Jakarta Sans)
- [x] Upload all static assets (images, video) to webdev storage
- [x] Switch to LIGHT theme with readable colors (white bg, dark text, blue accent)
- [x] Improve text readability across all sections

## Pages to Build
- [x] Home page (navbar, hero, brand carousel, services, about, industries, FAQ, testimonials, contact, footer)
- [x] About page (/about) - company story, timeline, CSR initiatives, locations
- [x] Services page (/services) - all 5 service categories with 15 sub-services
- [x] Contact page (/contact-us) - full contact form + 3 office locations + map
- [x] Industries page (/industries) - 9 industry verticals
- [x] Blog/News page (/blogs) - blog listing layout
- [x] Products page (/products) - 9 AI products
- [x] GCC Solutions page (/global-capability-center) - global capability center
- [x] Our Culture page (/our-culture) - work culture
- [x] CSR page (/csr) - social responsibility
- [x] Career page (/career) - job listings
- [x] Privacy Policy page (/privacy-policy)
- [x] Terms & Conditions page (/terms-and-conditions)
- [x] 404 page

## Backend & Security
- [x] Add input sanitization to contact form
- [x] Add rate limiting on contact endpoint
- [x] Add server-side validation with zod refinement
- [x] Add XSS protection on all form inputs
- [x] Add Helmet.js security headers
- [x] Add CORS hardening
- [x] Add request logging and error tracking
- [x] Enhance database query security (parameterized queries)

## Polish & Production
- [x] Mobile responsive verification for all pages
- [x] Smooth scroll navigation across all pages
- [x] Loading states and error boundaries
- [x] SEO meta tags on all pages
- [x] Final checkpoint and push to GitHub
## New Features (v2)
- [x] Create admin dashboard page (/admin) with protected access (role-based)
- [x] Admin dashboard: view all contact form submissions in a table with search/filter
- [x] Admin dashboard: manage blog posts (list, create, edit, delete)
- [x] Create blog_posts and newsletter_subscribers tables in schema and apply migration
- [x] Add smooth scroll animations using IntersectionObserver/Framer Motion
- [x] Add interactive hover effects on service cards (scale, glow, shadow)
- [x] Add page transition loaders between route navigations
- [x] Add newsletter subscription component to footer
- [x] Add newsletter subscribe tRPC procedure with DB storage
- [x] Add success popup/toast on newsletter subscription
- [x] Write vitest tests for newsletter and admin features
## New Features (v3)
- [ ] Push latest code to GitHub repo Soumya883/enfycon2.git
- [ ] Build blog detail page (/blog/:slug) with full article rendering from database
- [ ] Build case studies page (/case-studies)
- [ ] Build pricing page (/pricing)
- [ ] Build portfolio/projects page (/portfolio)
- [ ] Design refinements: color tweaks, layout polish, content updates
- [ ] Final checkpoint and deploy
