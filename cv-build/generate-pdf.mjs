import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'cv.html');
const outputPath = path.join(__dirname, '..', 'static', 'StanNowakCV.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: outputPath,
  format: 'Letter',
  margin: { top: '0.7in', bottom: '0.7in', left: '0.75in', right: '0.75in' },
  printBackground: true,
});

console.log(`PDF written to ${outputPath}`);
await browser.close();
