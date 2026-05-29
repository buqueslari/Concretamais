(function () {
  const googleAdsId = "AW-18190790747";
  const conversionSendTo = "AW-18190790747/llmJCK2g57UcENvgheJD";
  const conversionValue = 1.0;
  const conversionCurrency = "BRL";
  const defaultMessage =
    "Olá! Vim pelo site da ConcretaMais e gostaria de solicitar um orçamento.\n\nPode me ajudar com uma proposta?\n\nTipo de obra/serviço:\nCidade da obra:\nVolume estimado (m³):\nData desejada:";
  const quoteButtonLabels = ["solicitar orçamento", "pedir orçamento"];

  function normalizeText(text) {
    return (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function buildWhatsAppUrl(link) {
    const href = link.getAttribute("href") || "";
    if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
      return link.href || href;
    }

    const whatsappLink = document.querySelector('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (whatsappLink) {
      const currentUrl = new URL(whatsappLink.href, window.location.href);
      currentUrl.searchParams.set("text", defaultMessage);
      return currentUrl.href;
    }

    return link.href || href;
  }

  function getPathFromHref(href) {
    try {
      return new URL(href, window.location.href).pathname.replace(/\/$/, "") || "/";
    } catch (error) {
      return "";
    }
  }

  function isQuoteButton(link) {
    const label = normalizeText(link.textContent);
    return quoteButtonLabels.includes(label) && getPathFromHref(link.getAttribute("href")) === "/orcamento";
  }

  function isContactLink(link) {
    const href = link.getAttribute("href") || "";
    const path = getPathFromHref(href);

    return (
      href.includes("wa.me") ||
      href.includes("api.whatsapp.com") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.includes("mail.google.com/mail") ||
      path === "/contato" ||
      isQuoteButton(link)
    );
  }

  function getDestination(link) {
    const href = link.getAttribute("href") || "";
    if (href.includes("wa.me") || href.includes("api.whatsapp.com") || isQuoteButton(link)) {
      return buildWhatsAppUrl(link);
    }

    return link.href || href;
  }

  function configureGoogleAds() {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    window.gtag("config", googleAdsId);
  }

  window.gtag_report_conversion = function (url) {
    let finished = false;

    const callback = function () {
      if (finished) return;
      finished = true;

      if (typeof url !== "undefined" && url) {
        window.location = url;
      }
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: conversionSendTo,
        value: conversionValue,
        currency: conversionCurrency,
        event_callback: callback,
        event_timeout: 2000,
      });

      window.setTimeout(callback, 900);
    } else {
      callback();
    }

    return false;
  };

  function reportContactClick(event) {
    const link = event.target.closest && event.target.closest("a[href]");
    if (!link || !isContactLink(link)) return;

    const destination = getDestination(link);
    if (!destination) return;

    if (destination.includes("wa.me")) {
      link.href = destination;
      link.target = "_self";
      link.rel = "noopener noreferrer";
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    window.gtag_report_conversion(destination);
  }

  function reportContactFormSubmit(event) {
    const button = event.target.querySelector('button[type="submit"]');
    if (!button || !normalizeText(button.textContent).includes("enviar pedido")) return;

    window.gtag_report_conversion();
  }

  configureGoogleAds();
  document.addEventListener("click", reportContactClick, true);
  document.addEventListener("submit", reportContactFormSubmit, true);
})();
