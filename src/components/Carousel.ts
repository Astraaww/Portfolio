export function createCarousel(images: string[]): HTMLElement {
  const container = document.createElement("div");
  container.className = "carousel";

  let currentIndex = 0;

  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.className = "carousel-image";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "‹";
  prevBtn.className = "carousel-btn prev";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "›";
  nextBtn.className = "carousel-btn next";

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    img.src = images[currentIndex];
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
  };

  container.append(prevBtn, img, nextBtn);

  return container;
}