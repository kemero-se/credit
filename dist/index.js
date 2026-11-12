import "./index.css";
import { jsxs, jsx } from 'react/jsx-runtime';

// src/index.tsx
function KemeroCredit({ className }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      "aria-label": "Hemsida av kemero, webbyr\xE5",
      className: className ? `kemero-credit ${className}` : "kemero-credit",
      href: "https://kemero.se",
      rel: "noopener",
      children: [
        /* @__PURE__ */ jsx("span", { children: "Hemsida av" }),
        /* @__PURE__ */ jsxs("span", { "aria-hidden": "true", className: "kemero-credit__marke", children: [
          /* @__PURE__ */ jsx("span", { className: "kemero-credit__ord" }),
          /* @__PURE__ */ jsx("span", { className: "kemero-credit__punkt" })
        ] })
      ]
    }
  );
}

export { KemeroCredit };
