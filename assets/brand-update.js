(function () {
  const darkLogo = "/assets/concretamais-logo-oficial-transparente.png";
  const regularLogo = "/assets/concretamais-logo-oficial-transparente.png";
  const trucksPhoto = "/assets/concretamais-caminhoes.jpg";

  function updateLogos() {
    document.querySelectorAll("header img, footer img").forEach(function (img) {
      if (img.getAttribute("src") !== darkLogo) img.src = darkLogo;
      if (img.alt !== "ConcretaMais") img.alt = "ConcretaMais";
    });
  }

  function insertHistorySection() {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path !== "/" || document.getElementById("historia-concretamais")) return;

    const hero = document.querySelector("main > section");
    if (!hero) return;

    const section = document.createElement("section");
    section.id = "historia-concretamais";
    section.className = "brand-history-section";
    section.innerHTML = `
      <div class="brand-history-grid">
        <div>
          <div class="brand-history-media">
            <img src="${trucksPhoto}" alt="Frota ConcretaMais com caminhões betoneira personalizados" loading="lazy" class="brand-history-photo" />
          </div>
        </div>
        <div>
          <p class="brand-history-eyebrow">Nossa história</p>
          <img src="${regularLogo}" alt="ConcretaMais" loading="lazy" class="brand-history-logo" />
          <h2 class="brand-history-title">Concreto, frota própria e compromisso em cada entrega.</h2>
          <div class="brand-history-copy">
            <p>A ConcretaMais nasceu para atender obras com pontualidade, qualidade técnica e uma operação preparada para acompanhar o ritmo do canteiro.</p>
            <p>Com caminhões betoneira personalizados, equipe próxima e controle de dosagem, levamos concreto usinado para fundações, lajes, pisos e estruturas com o cuidado de quem entende que cada metro cúbico sustenta uma história.</p>
          </div>
        </div>
      </div>
    `;

    hero.insertAdjacentElement("afterend", section);
  }

  function applyBrandUpdates() {
    updateLogos();
    insertHistorySection();
  }

  document.addEventListener("DOMContentLoaded", applyBrandUpdates);
  window.addEventListener("load", applyBrandUpdates);
  window.setTimeout(applyBrandUpdates, 500);
  window.setTimeout(applyBrandUpdates, 1500);

  new MutationObserver(applyBrandUpdates).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
