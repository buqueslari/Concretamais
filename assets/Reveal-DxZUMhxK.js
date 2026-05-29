import { r, j as x } from "./index-CZVirlgi.js";
function y({ children: i, className: c = "", delay: l = 0, direction: e = "up" }) {
  const n = r.useRef(null),
    [u, s] = r.useState(!1);
  r.useEffect(() => {
    const o = n.current;
    if (!o) return;
    if (typeof IntersectionObserver > "u") {
      s(!0);
      return;
    }
    const t = new IntersectionObserver(
      (f) => {
        f.forEach((a) => {
          a.isIntersecting && (s(!0), t.unobserve(a.target));
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    return t.observe(o), () => t.disconnect();
  }, []);
  const p =
    e === "up"
      ? "opacity-0 translate-y-10 blur-[2px]"
      : e === "left"
        ? "opacity-0 -translate-x-10 blur-[2px]"
        : e === "right"
          ? "opacity-0 translate-x-10 blur-[2px]"
          : "opacity-0 scale-95 blur-[2px]";
  return x.jsx("div", {
    ref: n,
    style: { transitionDelay: `${l}ms` },
    className: `transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${u ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : p} ${c}`,
    children: i,
  });
}
export { y as R };
