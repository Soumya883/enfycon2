const fs = require('fs');
const path = require('path');

const pages = [
  'about', 'contact', 'careers', 'privacy', 'terms', 'faq',
  'services/ai-agentic-solutions', 'services/ai-first-platforms', 'services/cybersecurity',
  'services/enterprise-modernization', 'services/it-staffing', 'services/customer-engagement',
  'industries/healthcare', 'industries/finance', 'industries/retail', 'industries/manufacturing',
  'industries/telecom', 'industries/energy', 'industries/government', 'industries/education',
  'case-studies/project-alpha', 'case-studies/project-beta', 'case-studies/project-gamma',
  'blog/the-future-of-ai', 'blog/cybersecurity-trends', 'blog/it-staffing-challenges',
  'partners', 'investors', 'newsroom', 'events', 'webinars'
];

const template = (title) => `import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 capitalize">${title.replace(/-/g, ' ')}</h1>
        <p className="text-[#c8c6c6] text-lg">This is the ${title.replace(/-/g, ' ')} page of the Enfycon enterprise platform. Content will be populated here.</p>
      </div>
      <Footer />
    </main>
  );
}`;

pages.forEach(page => {
  const dir = path.join(__dirname, '../../app', page);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.jsx'), template(page.split('/').pop()));
});

console.log(`Generated ${pages.length} pages.`);
