export function createContact() {
  const section = document.createElement("section");
  section.id = "contact";

  const h2 = document.createElement("h2");
  h2.textContent = "Get In Touch";

  const p = document.createElement("p");
  p.textContent =
    "Feel free to reach out to me for any project or collaboration.";

  const a = document.createElement("a");
  a.href = "mailto:example@example.com";
  a.textContent = "Contact Me";

  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(a);

  return section;
}
