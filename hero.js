export function createHero() {
  const section = document.createElement("section");
  section.id = "hero";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome to My Portfolio";

  section.appendChild(h2);

  return section;
}
