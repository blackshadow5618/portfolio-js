export function createPortfolio() {
  const section = document.createElement("section");
  section.id = "portfolio";

  const h2 = document.createElement("h2");
  h2.textContent = "My Work";

  const portfolioItems = [
    {
      title: "Project One",
      description: "A cool project about technology.",
      imageUrl: "https://source.unsplash.com/random/400x300?tech,1",
    },
    {
      title: "Project Two",
      description: "An awesome design project.",
      imageUrl: "https://source.unsplash.com/random/400x300?design,2",
    },
    {
      title: "Project Three",
      description: "A creative web development project.",
      imageUrl: "https://source.unsplash.com/random/400x300?web,3",
    },
    {
      title: "Project Four",
      description: "A mobile app project.",
      imageUrl: "https://source.unsplash.com/random/400x300?app,4",
    },
  ];

  const container = document.createElement("div");
  container.className = "container";

  const itemsGrid = document.createElement("div");
  itemsGrid.className = "portfolio-items";

  portfolioItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "portfolio-item";

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.title;

    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    contentDiv.appendChild(title);
    contentDiv.appendChild(desc);

    itemDiv.appendChild(img);
    itemDiv.appendChild(contentDiv);

    itemsGrid.appendChild(itemDiv);
  });

  container.appendChild(h2);
  container.appendChild(itemsGrid);
  section.appendChild(container);

  return section;
}
