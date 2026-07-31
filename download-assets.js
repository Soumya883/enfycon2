import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const ROOT = process.cwd();

const assets = [
  // Founder
  { url: "https://www.enfycon.com/images/team/founder2.jpeg", dest: "client/public/images/team/founder2.jpeg" },

  // History
  { url: "https://www.enfycon.com/images/history/history-inception.png", dest: "client/public/images/history/history-inception.png" },
  { url: "https://www.enfycon.com/images/history/history-foundation.png", dest: "client/public/images/history/history-foundation.png" },
  { url: "https://www.enfycon.com/images/history/history-expansion.png", dest: "client/public/images/history/history-expansion.png" },
  { url: "https://www.enfycon.com/images/history/history-innovation.png", dest: "client/public/images/history/history-innovation.png" },
  { url: "https://www.enfycon.com/images/history/history-partnerships.png", dest: "client/public/images/history/history-partnerships.png" },

  // Shapes
  { url: "https://www.enfycon.com/images/shape/h7-testimonial-shape-blur.svg", dest: "client/public/images/shape/h7-testimonial-shape-blur.svg" },

  // CSR
  { url: "https://www.enfycon.com/images/csr/food-dist.jpeg", dest: "client/public/images/csr/food-dist.jpeg" },
  { url: "https://www.enfycon.com/images/csr/clothes-distribution-1.jpg", dest: "client/public/images/csr/clothes-distribution-1.jpg" },
  { url: "https://www.enfycon.com/images/csr/scholarship.jpg", dest: "client/public/images/csr/scholarship.jpg" },
  { url: "https://www.enfycon.com/images/csr/vol.jpg", dest: "client/public/images/csr/vol.jpg" },

  // Locations
  { url: "https://www.enfycon.com/images/locations/texas.png", dest: "client/public/images/locations/texas.png" },
  { url: "https://www.enfycon.com/images/locations/ohio.png", dest: "client/public/images/locations/ohio.png" },
  { url: "https://www.enfycon.com/images/locations/delaware.png", dest: "client/public/images/locations/delaware.png" },
  { url: "https://www.enfycon.com/images/locations/bhubaneswar.jpg", dest: "client/public/images/locations/bhubaneswar.jpg" },
  { url: "https://www.enfycon.com/images/locations/visakhapatnam.jpg", dest: "client/public/images/locations/visakhapatnam.jpg" },
  { url: "https://www.enfycon.com/images/locations/hyderabad.jpg", dest: "client/public/images/locations/hyderabad.jpg" },
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
  console.log(`Starting download of ${assets.length} new portfolio assets...`);
  for (const asset of assets) {
    await downloadFile(asset.url, asset.dest);
  }
  console.log("Download finished!");
}

run();
