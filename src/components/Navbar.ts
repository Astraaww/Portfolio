export function createNavbar(): HTMLElement {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  nav.innerHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        Portfolio — Christy Armandou
      </div>

      <div class="nav-right">
        <div class="nav-links" id="nav-links">
          <a href="index.html">Home</a>
          <a href="index.html#about">À propos</a>
          <a href="index.html#projects">Projets</a>
          <a href="index.html#contact">Contact</a>
        </div>
      </div>

      <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;

  // Toggle mobile menu
  const hamburger = nav.querySelector("#hamburger") as HTMLElement;
  const links = nav.querySelector("#nav-links") as HTMLElement;

  hamburger.addEventListener("click", () => {
    links.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  return nav;
}