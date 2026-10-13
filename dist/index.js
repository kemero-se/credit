import "./index.css";
import { jsxs, jsx } from 'react/jsx-runtime';

// src/index.tsx
function KemeroCredit({ className }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      "aria-label": "Sajt av kemero, webbyr\xE5",
      className: className ? `kemero-credit ${className}` : "kemero-credit",
      href: "https://kemero.se",
      rel: "noopener",
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "kemero-credit__punkt" }),
        "Sajt av kemero"
      ]
    }
  );
}

export { KemeroCredit };
