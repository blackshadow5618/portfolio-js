import { createHeader } from "./header.js";
import { createHero } from "./hero.js";
import { createAbout } from "./about.js";
import { createPortfolio } from "./portfolio.js";
import { createContact } from "./contact.js";
import { createFooter } from "./footer.js";

function renderApp() {
  console.log("renderApp called");
  const app = document.getElementById("app");
  console.log("app element:", app);
  app.appendChild(createHeader());
  app.appendChild(createHero());
  app.appendChild(createAbout());
  app.appendChild(createPortfolio());
  app.appendChild(createContact());
  app.appendChild(createFooter());
}

document.addEventListener("DOMContentLoaded", renderApp);
