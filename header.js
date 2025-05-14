export function createHeader() {
  const header = document.createElement("header");
  const container = document.createElement("div");
  container.className = "container";

  const h1 = document.createElement("h1");
  h1.textContent = "My Portfolio";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const navItems = [
    { text: "Home", href: "#hero" },
    { text: "About", href: "#about" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  container.appendChild(h1);
  container.appendChild(nav);
  header.appendChild(container);

  return header;
}
