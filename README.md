# Global Olympic Sports Analysis

A responsive portfolio website for the Global Olympic Sports Analysis Tableau project. It is designed to deploy on GitHub Pages and embed a published Tableau Public visualization.

## Files

- `index.html` — website structure and content
- `style.css` — responsive dark Olympic-inspired design
- `script.js` — mobile navigation and Tableau embed setup

## Add your Tableau dashboard

1. Open your workbook in Tableau Desktop or Tableau Public.
2. Publish it using **Server → Tableau Public → Save to Tableau Public** (menu wording may vary by version).
3. Open the published visualization and copy its URL.
4. In `script.js`, set `TABLEAU_PUBLIC_URL` to that URL:

   ```js
   const TABLEAU_PUBLIC_URL = "https://public.tableau.com/views/YourWorkbook/YourSheet";
   ```

5. Save and commit the updated file.

Only use a Tableau Public URL for a publicly accessible visualization. Tableau Public workbooks and data can be viewed by others; do not publish confidential information.

## Deploy with GitHub Pages

1. Create a GitHub repository named `global-olympic-sports-analysis`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the deployment workflow to finish. Your site URL will be shown in the Pages settings.

## Local preview

Open `index.html` in a modern browser. The Tableau area shows a setup placeholder until `TABLEAU_PUBLIC_URL` is configured.

## Project note

The website currently avoids inventing specific medal totals or analytical findings. Add verified insights from your workbook after reviewing its charts and data.
