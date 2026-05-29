import { j as e, L as r } from "./index-CZVirlgi.js";
import { S as i } from "./SiteLayout-CJowPYhm.js";
import { s as c, A as l } from "./services-video.mp4.asset-BCnu6ttO.js";
import { R as s } from "./Reveal-DxZUMhxK.js";
import { C as n } from "./check-CSGmFpaM.js";
const d = [
  {
    title: "Concreto Usinado",
    desc: "Concreto dosado em central automatizada, com traços de FCK 15 a 50 MPa. Disponível com aditivos, plastificantes e fibras conforme projeto.",
    items: ["Dosagem controlada por computador", "Slump test em obra", "Laudo técnico por lote"],
  },
  {
    title: "Bombeamento Estacionário",
    desc: "Bombas de alta pressão para concretagens em pavimentos, fundações e estruturas de difícil acesso.",
    items: ["Mangotes de até 100 m", "Vazão até 50 m³/h", "Operadores treinados"],
  },
  {
    title: "Bomba Lança",
    desc: "Lanças articuladas de 24 a 36 metros para concretagem em altura e grandes vãos sem necessidade de moldes.",
    items: [
      "Alcance vertical de até 36 m",
      "Posicionamento preciso",
      "Reduz mão de obra no canteiro",
    ],
  },
  {
    title: "Concreto para Lajes",
    desc: "Entregas programadas com volume e horários ajustados ao seu cronograma de concretagem.",
    items: ["Lajes residenciais e comerciais", "Concretagem programada", "Equipe de apoio"],
  },
  {
    title: "Pisos Industriais",
    desc: "Concreto de alta performance para pisos de galpões, áreas de carga e centros de distribuição.",
    items: ["Resistência à abrasão", "Concreto com fibras", "Acabamento polido"],
  },
  {
    title: "Obras Especiais",
    desc: "Fundações profundas, blocos, sapatas, muros de arrimo e pré-moldados sob medida.",
    items: ["Atendimento técnico dedicado", "Traços especiais", "Planejamento logístico"],
  },
];
function h() {
  return e.jsxs(i, {
    children: [
      e.jsxs("section", {
        className: "relative isolate overflow-hidden bg-primary py-24 text-primary-foreground",
        children: [
          e.jsx("video", {
            src: c.url,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-30",
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/60",
          }),
          e.jsxs("div", {
            className: "mx-auto max-w-7xl px-4 lg:px-8",
            children: [
              e.jsx(s, {
                children: e.jsx("p", {
                  className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                  children: "Nossos serviços",
                }),
              }),
              e.jsx(s, {
                delay: 120,
                children: e.jsxs("h1", {
                  className: "mt-4 max-w-3xl font-display text-5xl leading-tight lg:text-6xl",
                  children: [
                    "Tudo o que sua obra precisa, em ",
                    e.jsx("span", { className: "text-accent", children: "um só lugar." }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "bg-background py-24",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 lg:px-8",
          children: [
            e.jsx("div", {
              className: "grid gap-8 lg:grid-cols-2",
              children: d.map((a, t) =>
                e.jsx(
                  s,
                  {
                    delay: (t % 2) * 120,
                    direction: t % 2 === 0 ? "left" : "right",
                    children: e.jsxs("article", {
                      className:
                        "group h-full rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg",
                      children: [
                        e.jsx("h2", {
                          className: "font-display text-2xl text-primary lg:text-3xl",
                          children: a.title,
                        }),
                        e.jsx("p", {
                          className: "mt-4 text-base leading-relaxed text-muted-foreground",
                          children: a.desc,
                        }),
                        e.jsx("ul", {
                          className: "mt-6 space-y-2",
                          children: a.items.map((o) =>
                            e.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-3 text-sm",
                                children: [
                                  e.jsx(n, { size: 18, className: "mt-0.5 shrink-0 text-accent" }),
                                  e.jsx("span", { children: o }),
                                ],
                              },
                              o,
                            ),
                          ),
                        }),
                      ],
                    }),
                  },
                  a.title,
                ),
              ),
            }),
            e.jsx(s, {
              delay: 150,
              direction: "scale",
              className: "mt-16 flex justify-center",
              children: e.jsxs(r, {
                to: "/orcamento",
                className:
                  "group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5",
                children: [
                  "Solicitar orçamento ",
                  e.jsx(l, {
                    size: 18,
                    className: "transition-transform duration-300 group-hover:translate-x-1",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { h as component };
