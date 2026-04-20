import type { Project } from "../types/Project";

export function createProjectCard(project: Project, index: number): HTMLElement {
  const item = document.createElement("div");
  item.className = "project-list-item";

  const num = String(index + 1).padStart(2, "0");

  const metaParts: string[] = [];
  if (project.date?.trim())     metaParts.push(project.date);
  if (project.techno?.trim())   metaParts.push(project.techno);
  if (project.workTime?.trim()) metaParts.push(project.workTime);

  item.innerHTML = `
    <div class="pli-main">
      <div class="pli-left">
        <span class="pli-number">${num}</span>
      </div>
      <div class="pli-body">
        <h3 class="pli-title">${project.title}</h3>
        <p class="pli-desc">${project.description}</p>
      </div>
      ${metaParts.length ? `
      <div class="pli-meta">
        ${metaParts.map(m => `<span>${m}</span>`).join("")}
      </div>` : ""}
      <span class="pli-arrow">→</span>
      <div class="pli-right">
        <span class="pli-expand-hint" aria-hidden="true"></span>
      </div>
    </div>
    <div class="pli-img">
      <img src="${project.coverPath}" alt="${project.title}" />
    </div>
  `;

  item.addEventListener("click", () => {
    window.location.href = `${window.location.origin}/project.html?id=${project.id}`;
  });

  return item;
}
