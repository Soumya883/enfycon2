import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const ROOT = process.cwd();

const assets = [
  // Logos
  { url: "https://www.enfycon.com/images/logos/enfycon-logo-only.png", dest: "client/public/images/logos/enfycon-logo-only.png" },
  { url: "https://www.enfycon.com/images/logos/logo-large.webp", dest: "client/public/images/logos/logo-large.webp" },
  { url: "https://www.enfycon.com/images/logos/enfycon-white.png", dest: "client/public/images/logos/enfycon-white.png" },

  // Brands
  { url: "https://www.enfycon.com/images/brands/gen-brand-1.png", dest: "client/public/images/brands/gen-brand-1.png" },
  { url: "https://www.enfycon.com/images/brands/gen-brand-2.png", dest: "client/public/images/brands/gen-brand-2.png" },
  { url: "https://www.enfycon.com/images/brands/gen-brand-3.png", dest: "client/public/images/brands/gen-brand-3.png" },
  { url: "https://www.enfycon.com/images/brands/gen-brand-4.png", dest: "client/public/images/brands/gen-brand-4.png" },
  { url: "https://www.enfycon.com/images/brands/gen-brand-5.png", dest: "client/public/images/brands/gen-brand-5.png" },

  // About & Shapes
  { url: "https://www.enfycon.com/images/about/about-us.jpg", dest: "client/public/images/about/about-us.jpg" },
  { url: "https://www.enfycon.com/images/bg/map.svg", dest: "client/public/images/bg/map.svg" },
  { url: "https://www.enfycon.com/images/shape/pattern-2.svg", dest: "client/public/images/shape/pattern-2.svg" },
  { url: "https://www.enfycon.com/images/shape/pattern-3.svg", dest: "client/public/images/shape/pattern-3.svg" },

  // Services
  { url: "https://www.enfycon.com/images/service/ai-agentic-solutions.jpg", dest: "client/public/images/service/ai-agentic-solutions.jpg" },
  { url: "https://www.enfycon.com/images/service/ai-first-platforms.jpg", dest: "client/public/images/service/ai-first-platforms.jpg" },
  { url: "https://www.enfycon.com/images/service/personalized-customer-engagement.jpg", dest: "client/public/images/service/personalized-customer-engagement.jpg" },
  { url: "https://www.enfycon.com/images/service/us-it-staffing.png", dest: "client/public/images/service/us-it-staffing.png" },
  { url: "https://www.enfycon.com/images/service/domestic-it-staffing.png", dest: "client/public/images/service/domestic-it-staffing.png" },
  { url: "https://www.enfycon.com/images/service/offshore-dedicated-teams.png", dest: "client/public/images/service/offshore-dedicated-teams.png" },
  { url: "https://www.enfycon.com/images/service/enterprise-modernization..jpg", dest: "client/public/images/service/enterprise-modernization.jpg" },
  { url: "https://www.enfycon.com/images/service/enterprise-modernization.jpg", dest: "client/public/images/service/enterprise-modernization-alt.jpg" },
  { url: "https://www.enfycon.com/images/service/advanced-analytics.jpg", dest: "client/public/images/service/advanced-analytics.jpg" },
  { url: "https://www.enfycon.com/images/service/data-engineering.jpg", dest: "client/public/images/service/data-engineering.jpg" },
  { url: "https://www.enfycon.com/images/service/security-assessment.jpg", dest: "client/public/images/service/security-assessment.jpg" },
  { url: "https://www.enfycon.com/images/service/operational-security.jpg", dest: "client/public/images/service/operational-security.jpg" },
  { url: "https://www.enfycon.com/images/service/regulatory-compliance.jpg", dest: "client/public/images/service/regulatory-compliance.jpg" },
  { url: "https://www.enfycon.com/images/service/social-media-marketing.jpg", dest: "client/public/images/service/social-media-marketing.jpg" },
  { url: "https://www.enfycon.com/images/service/performance-marketing.jpg", dest: "client/public/images/service/performance-marketing.jpg" },
  { url: "https://www.enfycon.com/images/service/seo-marketing.jpg", dest: "client/public/images/service/seo-marketing.jpg" },

  // Products
  { url: "https://www.enfycon.com/images/product/icognito.jpg", dest: "client/public/images/product/icognito.jpg" },
  { url: "https://www.enfycon.com/images/product/idental.jpg", dest: "client/public/images/product/idental.jpg" },
  { url: "https://www.enfycon.com/images/product/lexgen.jpg", dest: "client/public/images/product/lexgen.jpg" },
  { url: "https://www.enfycon.com/images/product/ifin.jpg", dest: "client/public/images/product/ifin.jpg" },
  { url: "https://www.enfycon.com/images/product/performance.jpg", dest: "client/public/images/product/performance.jpg" },
  { url: "https://www.enfycon.com/images/product/iwac.jpg", dest: "client/public/images/product/iwac.jpg" },
  { url: "https://www.enfycon.com/images/product/ivaak.jpg", dest: "client/public/images/product/ivaak.jpg" },
  { url: "https://www.enfycon.com/images/product/truefix.jpg", dest: "client/public/images/product/truefix.jpg" },
  { url: "https://www.enfycon.com/images/product/enfysync.jpg", dest: "client/public/images/product/enfysync.jpg" },

  // FAQ & Testimonials
  { url: "https://www.enfycon.com/images/faq/faq.jpg", dest: "client/public/images/faq/faq.jpg" },
  { url: "https://www.enfycon.com/images/testimonial/testimonial-img.webp", dest: "client/public/images/testimonial/testimonial-img.webp" },
  { url: "https://www.enfycon.com/images/testimonial/user-avatar.png", dest: "client/public/images/testimonial/user-avatar.png" },

  // Blog
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-02_07_14-PM.png", dest: "client/public/images/blog/blog-1.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_17_54-PM-1.png", dest: "client/public/images/blog/blog-2.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-03_05_05-PM.png", dest: "client/public/images/blog/blog-3.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-19-2026-10_12_47-AM.png", dest: "client/public/images/blog/blog-4.png" },

  // Video
  { url: "https://www.enfycon.com/video/ENFYCON%20VIDEO%20HERO.mp4", dest: "client/public/video/hero-video.mp4" },
];

function downloadFile(fileUrl, destPath) {
  return new Promise((resolve) => {
    const fullDest = path.join(ROOT, destPath);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });

    const client = fileUrl.startsWith("https") ? https : http;
    const req = client.get(fileUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.warn(`[Skip ${res.statusCode}] ${fileUrl}`);
        return resolve(false);
      }

      const stream = fs.createWriteStream(fullDest);
      res.pipe(stream);
      stream.on("finish", () => {
        stream.close();
        console.log(`[Downloaded] ${destPath}`);
        resolve(true);
      });
    });

    req.on("error", (err) => {
      console.warn(`[Error] ${fileUrl}: ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    await downloadFile(asset.url, asset.dest);
  }
  console.log("Download finished!");
}

run();
