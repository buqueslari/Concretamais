import { j as e } from "./index-CZVirlgi.js";
import { c as s, S as l, M as o, a as i } from "./SiteLayout-CJowPYhm.js";
import { R as t } from "./Reveal-DxZUMhxK.js";
import { C as n } from "./clock-BrHpj8mF.js";
const c = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  d = s("message-circle", c),
  m = [
    { icon: d, title: "WhatsApp", value: "(31)  98259-9730", href: "https://wa.me/5531982599730" },
    {
      icon: o,
      title: "E-mail",
      value: "contato@concretamais.online",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=contato@concretamais.online",
    },
    { icon: i, title: "Endereço", value: "Rua Fortaleza, número 74 — Vila dos Palmares" },
    { icon: n, title: "Horário", value: "Seg–Sex 7h–18h · Sáb 7h–16h" },
  ];
function u() {
  return e.jsxs(l, {
    children: [
      e.jsx("section", {
        className: "bg-primary py-20 text-primary-foreground",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 lg:px-8",
          children: [
            e.jsx(t, {
              children: e.jsx("p", {
                className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                children: "Contato",
              }),
            }),
            e.jsx(t, {
              delay: 120,
              children: e.jsxs("h1", {
                className: "mt-4 max-w-3xl font-display text-5xl leading-tight lg:text-6xl",
                children: [
                  "Fale com quem ",
                  e.jsx("span", { className: "text-accent", children: "entende de obra." }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsx("section", {
        className: "bg-background py-20",
        children: e.jsxs("div", {
          className: "mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8",
          children: [
            e.jsx("div", {
              className: "space-y-4",
              children: m.map((a, r) =>
                e.jsx(
                  t,
                  {
                    delay: r * 100,
                    direction: "left",
                    children: e.jsxs("a", {
                      href: a.href,
                      target: a.href?.startsWith("http") ? "_blank" : void 0,
                      rel: "noreferrer",
                      className:
                        "group flex items-start gap-5 rounded-lg border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md",
                      children: [
                        e.jsx("div", {
                          className:
                            "grid h-12 w-12 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110",
                          children: e.jsx(a.icon, { size: 22, className: "text-accent" }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className: "font-display text-lg text-primary",
                              children: a.title,
                            }),
                            e.jsx("p", {
                              className: "mt-1 text-base text-muted-foreground",
                              children: a.value,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  a.title,
                ),
              ),
            }),
            e.jsx(t, {
              direction: "right",
              delay: 150,
              className: "overflow-hidden rounded-lg border",
              children: e.jsx("iframe", {
                title: "Localização ConcretaMais",
                src: "https://www.google.com/maps?q=Rua+Fortaleza+74+Vila+dos+Palmares&output=embed",
                className: "h-full min-h-[400px] w-full",
                loading: "lazy",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { u as component };
