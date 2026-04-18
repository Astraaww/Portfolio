import "./styles/global.css";
import "./styles/home.css";
import "./styles/navbar.css";
import "./styles/footer.css";

import { projects } from "./data/project";
import { createProjectCard } from "./components/ProjectCard";
import { createNavbar } from "./components/Navbar";
import { createFooter } from "./components/Footer";

document.body.prepend(createNavbar());

const narrativeContainer = document.getElementById("narrative-projects-container");
const otherContainer = document.getElementById("other-projects-container");

let narrativeIndex = 0;
let otherIndex = 0;

projects.forEach((project) => {
  if (project.isNarrative) {
    narrativeContainer?.appendChild(createProjectCard(project, narrativeIndex++));
  } else {
    otherContainer?.appendChild(createProjectCard(project, otherIndex++));
  }
});

document.body.appendChild(createFooter());
