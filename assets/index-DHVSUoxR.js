import { j as e, L as t } from "./index-CZVirlgi.js";
import { c as r, S as o } from "./SiteLayout-CJowPYhm.js";
import { A as s, s as i } from "./services-video.mp4.asset-BCnu6ttO.js";
import { T as c, H as n } from "./truck-qHX6UTSH.js";
import { C as l } from "./clock-BrHpj8mF.js";
const d = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  m = r("building-2", d);
const x = [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
  ],
  p = r("gauge", x);
const g = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  u = r("shield-check", g),
  h = "/__l5e/assets-v1/d7613d5a-8a35-45fb-bccc-f44427aa360a/hero-video.mp4",
  f = { url: h },
  b = [
    {
      icon: c,
      title: "Concreto Usinado",
      desc: "Traços FCK 15 a 50 MPa, dosagem controlada em central.",
    },
    {
      icon: p,
      title: "Bombeamento",
      desc: "Bombas estacionárias e lança para altura e longa distância.",
    },
    {
      icon: m,
      title: "Concreto para Lajes",
      desc: "Entrega programada para lajes de qualquer dimensão.",
    },
    {
      icon: n,
      title: "Obras Especiais",
      desc: "Pisos industriais, fundações e estruturas pré-moldadas.",
    },
    {
      icon: u,
      title: "Controle Tecnológico",
      desc: "Ensaios de slump e corpos de prova com laudo.",
    },
    {
      icon: l,
      title: "Entrega Pontual",
      desc: "Frota própria e logística que respeita seu cronograma.",
    },
  ];
function w() {
  return e.jsxs(o, {
    children: [
      e.jsxs("section", {
        className: "relative isolate overflow-hidden bg-primary text-primary-foreground",
        children: [
          e.jsx("video", {
            src: f.url,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-50",
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/30",
          }),
          e.jsx("div", {
            className: "mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-12 lg:px-8 lg:py-32",
            children: e.jsxs("div", {
              className: "lg:col-span-7",
              children: [
                e.jsx("span", {
                  className:
                    "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent",
                  children: "Concreto Usinado · Bombeamento",
                }),
                e.jsxs("h1", {
                  className:
                    "mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl",
                  children: [
                    "A força que ",
                    e.jsx("span", { className: "text-accent", children: "sustenta" }),
                    e.jsx("br", {}),
                    "a sua obra.",
                  ],
                }),
                e.jsx("p", {
                  className: "mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80",
                  children:
                    "Da fundação ao acabamento, entregamos concreto usinado de alta performance com pontualidade militar e o suporte técnico de quem entende de canteiro.",
                }),
                e.jsxs("div", {
                  className: "mt-10 flex flex-wrap gap-4",
                  children: [
                    e.jsxs(t, {
                      to: "/orcamento",
                      className:
                        "inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wider text-accent-foreground transition hover:brightness-110",
                      children: ["Solicitar orçamento ", e.jsx(s, { size: 18 })],
                    }),
                    e.jsx(t, {
                      to: "/servicos",
                      className:
                        "inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-primary-foreground/10",
                      children: "Ver serviços",
                    }),
                  ],
                }),
                e.jsx("dl", {
                  className:
                    "mt-16 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-8",
                  children: [
                    { v: "+10", l: "anos de estrada" },
                    { v: "+3 mil", l: "obras" },
                    { v: "24/7", l: "plantão de obra" },
                  ].map((a) =>
                    e.jsxs(
                      "div",
                      {
                        children: [
                          e.jsx("dt", {
                            className: "font-display text-3xl text-accent lg:text-4xl",
                            children: a.v,
                          }),
                          e.jsx("dd", {
                            className:
                              "mt-1 text-xs uppercase tracking-widest text-primary-foreground/60",
                            children: a.l,
                          }),
                        ],
                      },
                      a.l,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx("section", {
        className: "bg-background py-24",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 lg:px-8",
          children: [
            e.jsxs("div", {
              className: "flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                      children: "O que fazemos",
                    }),
                    e.jsx("h2", {
                      className:
                        "mt-3 font-display text-4xl tracking-tight text-primary lg:text-5xl",
                      children: "Soluções completas em concreto",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "max-w-md text-base text-muted-foreground",
                  children:
                    "Linha completa de produtos e serviços para obras residenciais, comerciais e industriais.",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3",
              children: b.map((a) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "group relative bg-card p-8 transition hover:bg-primary hover:text-primary-foreground",
                    children: [
                      e.jsx(a.icon, { className: "h-10 w-10 text-accent", strokeWidth: 1.5 }),
                      e.jsx("h3", { className: "mt-6 font-display text-xl", children: a.title }),
                      e.jsx("p", {
                        className:
                          "mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80",
                        children: a.desc,
                      }),
                    ],
                  },
                  a.title,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsxs("section", {
        className: "relative isolate overflow-hidden bg-primary text-primary-foreground",
        children: [
          e.jsx("video", {
            src: i.url,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-25",
          }),
          e.jsxs("div", {
            className: "mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                    children: "Sobre a ConcretaMais",
                  }),
                  e.jsxs("h2", {
                    className: "mt-3 font-display text-4xl tracking-tight lg:text-5xl",
                    children: [
                      "Concreto é compromisso.",
                      e.jsx("br", {}),
                      e.jsx("span", {
                        className: "text-accent",
                        children: "E o nosso é com você.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-5 text-primary-foreground/80",
                children: [
                  e.jsx("p", {
                    children:
                      "Nascemos da paixão pela construção e crescemos cuidando de cada metro cúbico como se fosse o primeiro. Nossa central trabalha com agregados selecionados, dosagem automatizada e equipe técnica dedicada.",
                  }),
                  e.jsx("p", {
                    children:
                      "Cada caminhão betoneira sai com lacre, nota e laudo — porque qualidade que não se prova, não convence.",
                  }),
                  e.jsxs(t, {
                    to: "/sobre",
                    className:
                      "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:underline",
                    children: ["Conheça nossa história ", e.jsx(s, { size: 16 })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "bg-accent py-20 text-accent-foreground",
        children: e.jsxs("div", {
          className:
            "mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 text-center lg:flex-row lg:text-left lg:px-8",
          children: [
            e.jsx("h2", {
              className: "font-display text-3xl tracking-tight lg:text-4xl",
              children: "Pronto para concretar? Faça seu pedido em poucos minutos.",
            }),
            e.jsxs(t, {
              to: "/orcamento",
              className:
                "inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110",
              children: ["Solicitar orçamento ", e.jsx(s, { size: 18 })],
            }),
          ],
        }),
      }),
    ],
  });
}
export { w as component };
