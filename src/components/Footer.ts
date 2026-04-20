export function createFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-container">
      <h2>Contact</h2>

      <div class="footer-links" id="contact">
        
        <a href="http://www.linkedin.com/in/christy-armandou" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.24 8h4.5v15h-4.5V8zm7.76 0h4.32v2.05h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.89V23h-4.5v-7.44c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.91V23H8V8z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        <a href="./assets/CV_Christy_Armandou.pdf" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5"/>
          </svg>
          <span>CV</span>
        </a>

        <a href="https://astraaww.itch.io/" target="_blank">
          <svg viewBox="0 0 24 24">
            <path d="M2 7l2-3h16l2 3v11H2V7zm4 3v6h3v-6H6zm5 0v6h3v-6h-3zm5 0v6h2v-6h-2z"/>
          </svg>
          <span>Itch.io</span>
        </a>

        <a href="mailto:christy.armandou@gmail.com">
          <svg viewBox="0 0 24 24">
            <path d="M2 4h20v16H2V4z" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M2 4l10 9 10-9" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>christy.armandou@gmail.com</span>
        </a>

        <!-- mentions link moved below container -->

      </div>

      <p class="footer-copy">
        © ${new Date().getFullYear()} — Christy Armandou
      </p>
    </div>
  `;

  const container = footer.querySelector('.footer-container');
  const legalDiv = document.createElement('div');
  legalDiv.className = 'footer-legal';
  legalDiv.innerHTML = `<a href="#" id="mentions-link-small">Mentions légales</a>`;
  if (container && container.parentNode) container.parentNode.insertBefore(legalDiv, container.nextSibling);

  const mentionsAnchorSmall = footer.querySelector('#mentions-link-small') as HTMLAnchorElement | null;
  if (mentionsAnchorSmall) {
    mentionsAnchorSmall.addEventListener('click', async (ev) => {
      ev.preventDefault();

      const createModal = (content: string) => {
        const overlay = document.createElement('div');
        overlay.className = 'ml-overlay';
        overlay.innerHTML = `
          <div class="ml-modal" role="dialog" aria-modal="true">
            <button class="ml-close" aria-label="Fermer">&times;</button>
            <div class="ml-content">${content}</div>
          </div>
        `;
        const close = () => overlay.remove();
        overlay.querySelector('.ml-close')?.addEventListener('click', close);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
        document.body.appendChild(overlay);
      };

      let url = '/mentions-legales/index.html';
      try {
        if (location.protocol === 'file:') {
          const href = location.href;
          const projectsIndex = href.indexOf('/projects/');
          if (projectsIndex !== -1) url = href.slice(0, projectsIndex) + '/mentions-legales/index.html';
          else url = href.replace(/[^/]+$/, 'mentions-legales/index.html');
        }

        const res = await fetch(url);
        const html = await res.text();
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        const main = tmp.querySelector('main');
        const content = main ? main.innerHTML : tmp.innerHTML;
        createModal(content);
      } catch (err) {
        createModal('<p>Impossible de charger les mentions légales.</p>');
      }
    });
  }

  return footer;
}