import { j as e, r as d } from "./index-CZVirlgi.js";
import { c as r, S as u } from "./SiteLayout-CJowPYhm.js";
import { R as t } from "./Reveal-DxZUMhxK.js";
import { T as h, H as g } from "./truck-qHX6UTSH.js";
const v = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  f = r("award", v);
const y = [
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
    ["path", { d: "M16 16h.01", key: "1f9h7w" }],
    [
      "path",
      {
        d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
        key: "1iv0i2",
      },
    ],
    ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ],
  j = r("factory", y);
const N = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  b = r("heart", N);
const k = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  w = r("quote", k);
const q = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  C = r("target", q);
const _ = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  M = r("users", _),
  z = "/assets/concrete-pour-B1SzDLVl.jpg";
function S(c = 0.08) {
  const o = d.useRef(null),
    [a, s] = d.useState(0);
  return (
    d.useEffect(() => {
      let n = 0;
      const x = () => {
          if (!o.current) return;
          const i = o.current.getBoundingClientRect(),
            m = window.innerHeight,
            p = ((i.top - m) / (i.height + m) + 1) * i.height * c;
          s(p);
        },
        l = () => {
          cancelAnimationFrame(n), (n = requestAnimationFrame(x));
        };
      return (
        window.addEventListener("scroll", l, { passive: !0 }),
        l(),
        () => {
          window.removeEventListener("scroll", l), cancelAnimationFrame(n);
        }
      );
    }, [c]),
    { ref: o, offset: a }
  );
}
const A = [
    {
      year: "Início",
      icon: h,
      title: "Um caminhão, uma palavra",
      desc: "Começamos pequenos, com a promessa de nunca atrasar uma entrega.",
    },
    {
      year: "Crescimento",
      icon: j,
      title: "Central automatizada",
      desc: "Investimos em tecnologia para garantir traços precisos em cada lote.",
    },
    {
      year: "Hoje",
      icon: g,
      title: "Operação completa",
      desc: "Equipe técnica em campo e entrega garantida em toda a região.",
    },
  ],
  H = [
    { value: "+10", label: "anos de estrada" },
    { value: "+3 mil", label: "obras" },
    { value: "100%", label: "traço controlado" },
  ],
  E = [
    {
      icon: f,
      title: "Qualidade",
      desc: "Traços controlados, materiais selecionados e ensaios em todo lote.",
    },
    { icon: C, title: "Pontualidade", desc: "Cronograma é palavra. Entregamos quando combinamos." },
    { icon: b, title: "Compromisso", desc: "Cada obra é tratada como se fosse a nossa." },
    { icon: M, title: "Parceria", desc: "Suporte técnico antes, durante e depois da concretagem." },
  ];
function V() {
  const { ref: c, offset: o } = S(0.06);
  return e.jsxs(u, {
    children: [
      e.jsx("section", {
        className: "bg-primary py-24 text-primary-foreground",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 lg:px-8",
          children: [
            e.jsx(t, {
              children: e.jsx("p", {
                className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                children: "Sobre nós",
              }),
            }),
            e.jsx(t, {
              delay: 120,
              children: e.jsxs("h1", {
                className: "mt-4 max-w-3xl font-display text-5xl leading-tight lg:text-6xl",
                children: [
                  "Construindo a base de quem ",
                  e.jsx("span", { className: "text-accent", children: "constrói o Brasil." }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsxs("section", {
        className: "relative overflow-hidden bg-background py-24",
        children: [
          e.jsx("div", {
            className: "pointer-events-none absolute inset-0 opacity-[0.03]",
            style: {
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            },
          }),
          e.jsxs("div", {
            className: "relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12 lg:px-8",
            children: [
              e.jsxs(t, {
                direction: "left",
                className: "lg:col-span-5",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    ref: c,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -left-3 -top-3 hidden h-full w-full rounded-lg border-2 border-accent lg:block",
                      }),
                      e.jsxs("div", {
                        className: "relative overflow-hidden rounded-lg max-h-[540px]",
                        style: { transform: `translateY(${o}px)`, willChange: "transform" },
                        children: [
                          e.jsx("img", {
                            src: z,
                            alt: "Concreto sendo nivelado",
                            width: 1280,
                            height: 960,
                            loading: "lazy",
                            className: "h-full w-full object-cover animate-ken-burns",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "animate-float absolute -bottom-6 -right-4 max-w-xs rounded-lg bg-primary p-5 text-primary-foreground shadow-xl lg:-right-8",
                        children: [
                          e.jsx(w, { className: "h-5 w-5 text-accent" }),
                          e.jsx("p", {
                            className: "mt-2 font-display text-sm leading-snug",
                            children: '"Concreto bom, na hora certa, sem desculpa."',
                          }),
                          e.jsx("p", {
                            className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-accent",
                            children: "Nossa filosofia",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "mt-16 grid grid-cols-3 gap-4",
                    children: H.map((a, s) =>
                      e.jsx(
                        t,
                        {
                          delay: 200 + s * 100,
                          children: e.jsxs("div", {
                            className: "border-l-2 border-accent pl-3",
                            children: [
                              e.jsx("div", {
                                className: "font-display text-2xl text-primary lg:text-3xl",
                                children: a.value,
                              }),
                              e.jsx("div", {
                                className:
                                  "mt-1 text-[11px] uppercase tracking-wider text-muted-foreground",
                                children: a.label,
                              }),
                            ],
                          }),
                        },
                        a.label,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "lg:col-span-7",
                children: [
                  e.jsxs(t, {
                    direction: "right",
                    children: [
                      e.jsx("p", {
                        className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                        children: "Nossa história",
                      }),
                      e.jsxs("h2", {
                        className: "mt-3 font-display text-3xl text-primary lg:text-5xl",
                        children: [
                          "De um caminhão à ",
                          e.jsx("span", {
                            className: "text-accent",
                            children: "central de concreto",
                          }),
                          " de quem confia em palavra.",
                        ],
                      }),
                      e.jsx("p", {
                        className: "mt-6 text-base leading-relaxed text-muted-foreground",
                        children:
                          "A ConcretaMais nasceu da experiência de quem começou no canteiro e hoje comanda a própria operação. O compromisso com prazo e qualidade não mudou — só cresceu a confiança de quem constrói com a gente.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "relative mt-12",
                    children: [
                      e.jsx("div", {
                        className: "absolute left-[19px] top-2 bottom-2 w-px bg-border",
                      }),
                      e.jsx("div", {
                        className: "space-y-8",
                        children: A.map((a, s) =>
                          e.jsx(
                            t,
                            {
                              delay: s * 150,
                              direction: "up",
                              children: e.jsxs("div", {
                                className: "group relative flex gap-5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background transition-all duration-300 group-hover:scale-110 group-hover:bg-accent",
                                    children: e.jsx(a.icon, {
                                      className:
                                        "h-4 w-4 text-accent transition-colors duration-300 group-hover:text-accent-foreground",
                                      strokeWidth: 2,
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "flex-1 pb-2",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-[0.25em] text-accent",
                                        children: a.year,
                                      }),
                                      e.jsx("h3", {
                                        className:
                                          "mt-1 font-display text-lg text-primary lg:text-xl",
                                        children: a.title,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "mt-1 text-sm leading-relaxed text-muted-foreground",
                                        children: a.desc,
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
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "bg-secondary py-24",
        children: e.jsxs("div", {
          className: "mx-auto max-w-7xl px-4 lg:px-8",
          children: [
            e.jsx(t, {
              children: e.jsx("p", {
                className: "text-xs font-bold uppercase tracking-[0.3em] text-accent",
                children: "Nossos valores",
              }),
            }),
            e.jsx(t, {
              delay: 120,
              children: e.jsx("h2", {
                className: "mt-3 font-display text-4xl text-primary lg:text-5xl",
                children: "O que sustenta a nossa marca",
              }),
            }),
            e.jsx("div", {
              className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
              children: E.map((a, s) =>
                e.jsx(
                  t,
                  {
                    delay: s * 120,
                    direction: "up",
                    children: e.jsxs("div", {
                      className:
                        "group h-full rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-lg",
                      children: [
                        e.jsx(a.icon, {
                          className:
                            "h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                          strokeWidth: 1.5,
                        }),
                        e.jsx("h3", {
                          className: "mt-6 font-display text-xl text-primary",
                          children: a.title,
                        }),
                        e.jsx("p", {
                          className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                          children: a.desc,
                        }),
                      ],
                    }),
                  },
                  a.title,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
export { V as component };
