const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root not found");
}

app.textContent = "Tiny Companion is running";
