import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { KemeroCredit } from "./index";

/*
  Signaturen är kemeros enda länk från kundernas hemsidor. Fel text, fel
  adress eller ett nofollow gör den värdelös, och det syns inte i en
  skärmbild. Därför låses det här.
*/
describe("KemeroCredit", () => {
  const html = renderToStaticMarkup(<KemeroCredit />);

  test("säger exakt Sajt av kemero, med kemero gement", () => {
    expect(html).toContain(">Sajt av kemero</a>");
  });

  test("länkar till kemero.se i samma flik", () => {
    expect(html).toContain('href="https://kemero.se"');
    expect(html).not.toContain("target=");
  });

  test("bär länkvärde, alltså inget nofollow", () => {
    expect(html).toContain('rel="noopener"');
    expect(html).not.toContain("nofollow");
  });

  test("namnger byrån för skärmläsare", () => {
    expect(html).toContain('aria-label="Sajt av kemero, webbyrå"');
  });
});
