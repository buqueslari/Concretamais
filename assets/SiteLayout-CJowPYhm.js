import { r as c, j as e, L as n } from "./index-CZVirlgi.js";
const p = (...t) =>
  t
    .filter((a, s, r) => !!a && a.trim() !== "" && r.indexOf(a) === s)
    .join(" ")
    .trim();
const b = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const y = (t) =>
  t.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, r) => (r ? r.toUpperCase() : s.toLowerCase()));
const m = (t) => {
  const a = y(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var v = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const w = (t) => {
  for (const a in t) if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  return !1;
};
const N = c.forwardRef(
  (
    {
      color: t = "currentColor",
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: o,
      iconNode: u,
      ...x
    },
    g,
  ) =>
    c.createElement(
      "svg",
      {
        ref: g,
        ...v,
        width: a,
        height: a,
        stroke: t,
        strokeWidth: r ? (Number(s) * 24) / Number(a) : s,
        className: p("lucide", l),
        ...(!o && !w(x) && { "aria-hidden": "true" }),
        ...x,
      },
      [...u.map(([f, j]) => c.createElement(f, j)), ...(Array.isArray(o) ? o : [o])],
    ),
);
const i = (t, a) => {
  const s = c.forwardRef(({ className: r, ...l }, o) =>
    c.createElement(N, {
      ref: o,
      iconNode: a,
      className: p(`lucide-${b(m(t))}`, `lucide-${t}`, r),
      ...l,
    }),
  );
  return (s.displayName = m(t)), s;
};
const k = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  C = i("mail", k);
const M = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  A = i("map-pin", M);
const _ = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  L = i("menu", _);
const P = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  z = i("phone", P);
const S = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  $ = i("x", S),
  h = "/assets/concretamais-logo-oficial-transparente.png",
  d = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Serviços" },
    { to: "/orcamento", label: "Orçamento" },
    { to: "/contato", label: "Contato" },
  ];
function I() {
  const [t, a] = c.useState(!1);
  return e.jsxs("header", {
    className:
      "sticky top-0 z-50 border-b border-primary/10 bg-primary text-primary-foreground shadow-sm",
    children: [
      e.jsxs("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8",
        children: [
          e.jsx(n, {
            to: "/",
            className: "flex items-center gap-3",
            children: e.jsx("img", {
              src: h,
              alt: "ConcretaMais",
              className: "h-20 w-auto lg:h-24",
            }),
          }),
          e.jsx("nav", {
            className: "hidden items-center gap-8 lg:flex",
            children: d.map((s) =>
              e.jsx(
                n,
                {
                  to: s.to,
                  className:
                    "text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 transition hover:text-accent",
                  activeProps: { className: "text-accent" },
                  activeOptions: { exact: s.to === "/" },
                  children: s.label,
                },
                s.to,
              ),
            ),
          }),
          e.jsx(n, {
            to: "/orcamento",
            className:
              "hidden rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition hover:brightness-110 lg:inline-flex",
            children: "Pedir orçamento",
          }),
          e.jsx("button", {
            "aria-label": "Abrir menu",
            className: "lg:hidden",
            onClick: () => a(!t),
            children: t ? e.jsx($, { size: 28 }) : e.jsx(L, { size: 28 }),
          }),
        ],
      }),
      t &&
        e.jsx("nav", {
          className: "border-t border-primary-foreground/10 bg-primary lg:hidden",
          children: e.jsxs("div", {
            className: "mx-auto flex max-w-7xl flex-col px-4 py-4",
            children: [
              d.map((s) =>
                e.jsx(
                  n,
                  {
                    to: s.to,
                    onClick: () => a(!1),
                    className: "py-3 text-sm font-semibold uppercase tracking-wider",
                    activeProps: { className: "text-accent" },
                    activeOptions: { exact: s.to === "/" },
                    children: s.label,
                  },
                  s.to,
                ),
              ),
              e.jsx(n, {
                to: "/orcamento",
                onClick: () => a(!1),
                className:
                  "mt-3 rounded-md bg-accent px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground",
                children: "Pedir orçamento",
              }),
            ],
          }),
        }),
    ],
  });
}
function B() {
  return e.jsxs("footer", {
    className: "bg-primary text-primary-foreground",
    children: [
      e.jsxs("div", {
        className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("img", { src: h, alt: "ConcretaMais", className: "h-24 w-auto" }),
              e.jsx("p", {
                className: "mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70",
                children:
                  "Concreto usinado e bombeamento com qualidade, pontualidade e o peso da experiência em cada obra.",
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h4", {
                className: "font-display text-sm uppercase tracking-widest text-accent",
                children: "Navegação",
              }),
              e.jsx("ul", {
                className: "mt-4 space-y-2 text-sm",
                children: d.map((t) =>
                  e.jsx(
                    "li",
                    {
                      children: e.jsx(n, {
                        to: t.to,
                        className: "text-primary-foreground/80 hover:text-accent",
                        children: t.label,
                      }),
                    },
                    t.to,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h4", {
                className: "font-display text-sm uppercase tracking-widest text-accent",
                children: "Contato",
              }),
              e.jsxs("ul", {
                className: "mt-4 space-y-3 text-sm text-primary-foreground/80",
                children: [
                  e.jsxs("li", {
                    className: "flex items-start gap-2",
                    children: [
                      e.jsx(z, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
                      "(11) 96215-8598",
                    ],
                  }),
                  e.jsxs("li", {
                    className: "flex items-start gap-2",
                    children: [
                      e.jsx(C, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
                      e.jsx("a", {
                        href: "https://mail.google.com/mail/?view=cm&fs=1&to=contato@concretamais.online",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-accent",
                        children: "contato@concretamais.online",
                      }),
                    ],
                  }),
                  e.jsxs("li", {
                    className: "flex items-start gap-2",
                    children: [
                      e.jsx(A, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
                      "Rua Fortaleza, número 74 — Vila dos Palmares",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h4", {
                className: "font-display text-sm uppercase tracking-widest text-accent",
                children: "Horário",
              }),
              e.jsxs("ul", {
                className: "mt-4 space-y-2 text-sm text-primary-foreground/80",
                children: [
                  e.jsx("li", { children: "Seg – Sex: 7h às 18h" }),
                  e.jsx("li", { children: "Sábado: 7h às 16h" }),
                  e.jsx("li", { children: "Plantão para grandes obras" }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "border-t border-primary-foreground/10",
        children: e.jsxs("div", {
          className:
            "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 lg:flex-row lg:px-8",
          children: [
            e.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " ConcretaMais. Todos os direitos reservados.",
              ],
            }),
            e.jsx("p", { children: "CNPJ 64.147.041/0001-98" }),
          ],
        }),
      }),
    ],
  });
}
function O() {
  const t = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento para concreto usinado.",
  );
  return e.jsxs("div", {
    className: "group fixed bottom-12 right-6 z-50 flex items-center gap-3",
    children: [
      e.jsx("span", {
        className:
          "pointer-events-none rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-900 shadow-md backdrop-blur-sm transition-all duration-300 ease-out opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hidden lg:inline-block",
        children: "Solicite seu orçamento",
      }),
      e.jsx("a", {
        href: `https://wa.me/5531982599730?text=${t}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Fale conosco pelo WhatsApp",
        className:
          "flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl animate-whatsapp-pulse",
        children: e.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: "h-7 w-7",
          children: e.jsx("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
          }),
        }),
      }),
    ],
  });
}
function R({ children: t }) {
  return e.jsxs("div", {
    className: "flex min-h-screen flex-col",
    children: [
      e.jsx(I, {}),
      e.jsx("main", { className: "flex-1", children: t }),
      e.jsx(B, {}),
      e.jsx(O, {}),
    ],
  });
}
export { C as M, R as S, A as a, i as c };
