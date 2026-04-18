import "./styles/global.css";
import "./styles/project.css";
import "./styles/navbar.css";
import "./styles/detail.css";
import "./styles/footer.css";
import { createNavbar } from "./components/Navbar";
import { createFooter } from "./components/Footer";
import { createCarousel } from "./components/Carousel";

document.body.prepend(createNavbar());

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  fetch(`projects/${id}/index.html`)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("project-content");
      if (container) container.innerHTML = html;
      
      if (id === "dash-dungeon") {
        const paperLevelsCarousel = document.getElementById("carousel-paper-levels");
        if (paperLevelsCarousel) {
          const paperLevelsImages = [
            "projects/dash-dungeon/images/paper-levels/lvl_2.png",
            "projects/dash-dungeon/images/paper-levels/lvl_3.jpg",
            "projects/dash-dungeon/images/paper-levels/lvl_4.jpg",
            "projects/dash-dungeon/images/paper-levels/lvl_5.jpg",
            "projects/dash-dungeon/images/paper-levels/lvl_6.png",
            "projects/dash-dungeon/images/paper-levels/lvl_7.png",
            "projects/dash-dungeon/images/paper-levels/lvl_8.jpg"
          ];
          paperLevelsCarousel.appendChild(createCarousel(paperLevelsImages));
        }
        
        const levelsCarousel = document.getElementById("carousel-levels");
        if (levelsCarousel) {
          const levelsImages = [
            "projects/dash-dungeon/images/levels/lvl_1.png",
            "projects/dash-dungeon/images/levels/lvl_2.png",
            "projects/dash-dungeon/images/levels/lvl_3.png",
            "projects/dash-dungeon/images/levels/lvl_4.png",
            "projects/dash-dungeon/images/levels/lvl_5.png",
            "projects/dash-dungeon/images/levels/lvl_6.png",
            "projects/dash-dungeon/images/levels/lvl_7.png",
            "projects/dash-dungeon/images/levels/lvl_8.png"
          ];
          levelsCarousel.appendChild(createCarousel(levelsImages));
        }
      }
      
      if (id === "penfall") {
        const penfallCarousel = document.getElementById("carousel-penfall");
        if (penfallCarousel) {
          const penfallImages = [
            "projects/penfall/images/img1.png",
            "projects/penfall/images/img2.png",
            "projects/penfall/images/img3.png"
          ];
          penfallCarousel.appendChild(createCarousel(penfallImages));
        }
      }
    });
}

document.body.appendChild(createFooter());