# @kemero/credit

kemeros signatur längst ner på hemsidorna vi bygger: en liten punkt och
texten "Sajt av kemero".

## Användning

```bash
bun add @kemero/credit@github:kemero-se/credit
```

```tsx
import { KemeroCredit } from "@kemero/credit";

<KemeroCredit />
```

På katalogsajterna renderas signaturen av `@kemero/sajtfot` och ska inte
läggas in för hand.

Ingen CSS att importera och inga variabler att sätta. Texten ärver
footerns färg och grad, så signaturen följer sajtens tema och kontrasten är
footertextens kontrast. Komponenten är rent presentationell och kan
renderas statiskt utan klient-JavaScript. Hovret är ren CSS.

Text, länk och punkt är låsta i paketet. `className` finns bara för
placering.

## Beslutet, 13 oktober 2026

En diskret, interaktiv signatur längst ner på kundernas hemsidor.

- Texten är exakt `Sajt av kemero`, med kemero gement.
- Länken går till `https://kemero.se` i samma flik, med `rel="noopener"`
  och utan `nofollow`. Tillgängligt namn: "Sajt av kemero, webbyrå".
- Före texten står en punkt på 6 px. I vila är den en tunn ring i textens
  färg. Vid hover och fokus fylls den med `#2b3cff` och landar med en liten
  fjäder, `cubic-bezier(0.34, 1.32, 0.64, 1)` på 220 ms. Det är kemeros
  signatur, punkten som sätts. Bara transform och opacitet animeras, och med
  `prefers-reduced-motion` byts färgen utan rörelse.
- Klickytan är minst 24 px hög.
- Kunden kan välja bort signaturen. Det görs med `visa={false}` på
  `Sajtfot`, som då inte renderar något alls.

Signaturen ersätter ordmärket som stod här fram till version 1.0.0. Ett
ordmärke i 13 px läste otydligt och tog över raden, och länken pekade på
kundens case i stället för på byrån.

## Utveckla

```bash
bun install
bun run build
bun test
```

Bygget kör tsup och lägger tillbaka CSS-importen i `dist/index.js`.
`dist/` är committad så att paketet kan konsumeras direkt som git-beroende
utan lifecycle-scripts.

## Licens

Källkoden är synlig men inte licensierad för återanvändning.
Upphovsrätten tillhör kemero.
