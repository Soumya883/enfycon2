import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const ROOT = process.cwd();

const assets = [
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-02_07_14-PM.png", dest: "client/public/images/blog/blog-1.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-23-2026-02_17_54-PM-1.png", dest: "client/public/images/blog/blog-2.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-20-2026-03_05_05-PM.png", dest: "client/public/images/blog/blog-3.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-19-2026-10_12_47-AM.png", dest: "client/public/images/blog/blog-4.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/05/ChatGPT-Image-May-4-2026-04_57_57-PM.png", dest: "client/public/images/blog/blog-5.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/04/Gemini_Generated_Image_9fcdnv9fcdnv9fcd-scaled.png", dest: "client/public/images/blog/blog-6.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/04/ChatGPT-Image-Apr-2-2026-11_33_08-AM.png", dest: "client/public/images/blog/blog-7.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-30-2026-01_30_52-PM.png", dest: "client/public/images/blog/blog-8.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-19-2026-02_07_17-PM.png", dest: "client/public/images/blog/blog-9.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-17-2026-12_23_26-PM.png", dest: "client/public/images/blog/blog-10.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-17-2026-12_02_52-PM.png", dest: "client/public/images/blog/blog-11.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-16-2026-03_33_20-PM.png", dest: "client/public/images/blog/blog-12.png" },
  { url: "https://www.enfycon.com/images/blog/blogs-backdrop.jpg", dest: "client/public/images/blog/blogs-backdrop.jpg" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-10-2026-04_54_37-PM.png", dest: "client/public/images/blog/blog-14.png" },
  { url: "https://wp.enfycon.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-10-2026-12_38_01-PM.png", dest: "client/public/images/blog/blog-15.png" },
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
  console.log(`Starting download of ${assets.length} blog assets...`);
  for (const asset of assets) {
    await downloadFile(asset.url, asset.dest);
  }
  console.log("Download finished!");
}

run();
