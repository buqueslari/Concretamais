(function () {
  const whatsappNumber = "5531982599730";
  const defaultMessage =
    "Olá! Vim pelo site da ConcretaMais e gostaria de solicitar um orçamento.\n\nPode me ajudar com uma proposta?\n\nTipo de obra/serviço:\nCidade da obra:\nVolume estimado (m³):\nData desejada:";

  const quoteButtonLabels = ["solicitar orçamento", "pedir orçamento"];

  function normalizeText(text) {
    return (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function isQuoteButton(link) {
    if (!link) return false;

    const label = normalizeText(link.textContent);
    return (
      quoteButtonLabels.includes(label) &&
      link.getAttribute("href") &&
      link.getAttribute("href").replace(/\/$/, "") === "/orcamento"
    );
  }

  function buildWhatsAppUrl(link) {
    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(defaultMessage);
  }

  function normalizeLinks() {
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.href = buildWhatsAppUrl(link);
      link.target = "_self";
      link.rel = "noopener noreferrer";
    });

    document.querySelectorAll('a[href="/orcamento"]').forEach(function (link) {
      if (!isQuoteButton(link)) return;
      link.href = buildWhatsAppUrl(link);
      link.target = "_self";
      link.rel = "noopener noreferrer";
    });
  }

  document.addEventListener("DOMContentLoaded", normalizeLinks);
  window.addEventListener("load", normalizeLinks);
  window.setTimeout(normalizeLinks, 500);

  document.addEventListener(
    "click",
    function (event) {
      if (event.defaultPrevented) return;

      const link =
        event.target.closest && event.target.closest('a[href*="wa.me"], a[href="/orcamento"]');
      if (!link) return;
      if (!link.href.includes("wa.me") && !isQuoteButton(link)) return;

      const url = buildWhatsAppUrl(link);
      link.href = url;
      link.target = "_self";
      event.preventDefault();
      window.location.href = url;
    },
    true,
  );
})();
