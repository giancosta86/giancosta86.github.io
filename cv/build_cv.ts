import { join } from "path";
import puppeteer from "puppeteer";

const sourceHtmlPath = join(__dirname, "cv.html");

const outputPdfPath = join(__dirname, "..", "public", "cv_costa_en.pdf");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${sourceHtmlPath}`, {
    waitUntil: "networkidle0"
  });
  await page.pdf({ path: outputPdfPath, format: "A4" });
  await browser.close();
})();
