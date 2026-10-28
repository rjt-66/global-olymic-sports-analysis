/*
  TABLEAU INTEGRATION
  1. Publish your workbook to Tableau Public.
  2. Open the published visualization and copy its share URL.
  3. Paste that URL below. Keep it inside the quotes.
  Example format: https://public.tableau.com/views/YourWorkbook/YourSheet
*/
const TABLEAU_PUBLIC_URL = ""; // Paste your published Tableau visualization URL here.

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

function isValidTableauUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" &&
      (parsed.hostname === "public.tableau.com" || parsed.hostname.endsWith(".tableau.com"));
  } catch {
    return false;
  }
}

if (TABLEAU_PUBLIC_URL && isValidTableauUrl(TABLEAU_PUBLIC_URL)) {
  const container = document.getElementById("tableauContainer");
  const placeholder = document.getElementById("tableauPlaceholder");
  if (placeholder && container) {
    placeholder.remove();
    const iframe = document.createElement("iframe");
    iframe.title = "Global Olympic Sports Analysis Tableau dashboard";
    iframe.src = TABLEAU_PUBLIC_URL + (TABLEAU_PUBLIC_URL.includes("?") ? "&" : "?") + ":showVizHome=no&:embed=true";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    container.appendChild(iframe);
  }
}
