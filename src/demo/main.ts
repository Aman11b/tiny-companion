import { createCompanionRoot } from "../core/create-companion-root";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root not found");
}

const companion = createCompanionRoot();

app.textContent = "Tiny Companion is running";
