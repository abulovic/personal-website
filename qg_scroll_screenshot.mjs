import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({
  executablePath: '/Users/praxatonik/.cache/puppeteer/chrome/mac_arm-149.0.7827.22/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));

// Scroll section to center of viewport, fire scroll events step by step to build up progress
await page.evaluate(async () => {
  const section = document.getElementById('qg-section');

  // Step 1: scroll so section top is just entering viewport (progress ~0)
  const startY = section.offsetTop - window.innerHeight;
  window.scrollTo(0, Math.max(0, startY));
  window.dispatchEvent(new Event('scroll'));
  await new Promise(r => setTimeout(r, 50));

  // Step 2: scroll to show section centered (progress ~0.5 → arcs drawn, quote visible)
  const totalTravel = section.offsetHeight + window.innerHeight;
  const targetProgress = 0.55; // arcs fully drawn, quote visible
  const targetY = Math.max(0, startY) + totalTravel * targetProgress;
  window.scrollTo(0, targetY);
  window.dispatchEvent(new Event('scroll'));
  await new Promise(r => setTimeout(r, 100));
});

await new Promise(r => setTimeout(r, 600));

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(Boolean);
const next = nums.length ? Math.max(...nums) + 1 : 1;
const filepath = path.join(dir, `screenshot-${next}-qg-centered.png`);

await page.screenshot({ path: filepath });
await browser.close();
console.log('Saved:', filepath);
