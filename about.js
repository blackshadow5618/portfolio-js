export function createAbout() {
  const section = document.createElement("section");
  section.id = "about";

  const h2 = document.createElement("h2");
  h2.textContent = "About Me";

  const p = document.createElement("p");
  p.textContent =
    "I am a passionate web developer with experience in creating responsive and modern websites. I love coding and learning new technologies.";

  section.appendChild(h2);
  section.appendChild(p);

  return section;
}
