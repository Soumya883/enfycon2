const fs = require('fs');
const path = require('path');

const pages = [
  'industries/banking', 'industries/finance', 'industries/healthcare',
  'industries/government', 'industries/human-resource', 'industries/legal',
  'industries/supply-chain-logistics', 'industries/manufacturing', 'industries/tourism',
  
  'products/enfysync', 'products/ivaak-ai', 'products/truefix-ai',
  'products/icognito-ai', 'products/idental-ai', 'products/lexgenie-ai',
  'products/quantfin-ai', 'products/performanceedge-ai', 'products/iwac-ai',

  'services/ai-allied-services', 'services/it-professional-staffing',
  'services/data-analytics', 'services/cybersecurity-services', 'services/digital-marketing',

  'about', 'our-culture', 'csr', 'career', 'philosophy', 'code-of-ethics',
  'candidate-awareness-notice', 'contact-us', 'blogs',
  
  'privacy-policy', 'cookie-policy', 'terms-and-conditions', 'site-map', 'media-kit'
];

const template = (title) => `import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 capitalize">${title.replace(/-/g, ' ')}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Welcome to the ${title.replace(/-/g, ' ')} section of Enfycon. 
          This page layout will be generated using Stitch (MCP) for high-fidelity UI components.
        </p>
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

console.log(`Successfully generated ${pages.length} placeholder pages for the true sitemap.`);
