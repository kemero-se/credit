# @kemero/credit

kemeros signatur längst ner på hemsidorna vi bygger: "Hemsida av" och
kemeros ordmärke, med den blå punkten som sätts.

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

- Texten är "Hemsida av" följd av kemeros ordmärke i textens färg.
  kenny valde orden efter två provomgångar. "Sajt av" med en rund ring
  lästes som billigt och var inte kemero.
- Länken går till `https://kemero.se` i samma flik, med `rel="noopener"`
  och utan `nofollow`. Tillgängligt namn: "Hemsida av kemero, webbyrå".
- Punkten är kemeros blå kvadrat, `#2b3cff`, efter ordmärket. I vila syns
  den inte. Vid hover och fokus faller den en kort bit på plats på 420 ms
  med kemeros kurva `cubic-bezier(0.23, 1, 0.32, 1)`, samma rörelse som
  punkten i rubrikerna på kemero.se. Tillbaka går den på 160 ms.
- På pekskärm sätts punkten en gång när foten skrollas in, med en
  skrolldriven animation. Bara transform och opacitet. Med
  `prefers-reduced-motion` byter punkten läge utan rörelse.
- kemeros DESIGN.md säger att punkten bara finns i monogrammet. Signaturen
  är ett undantag från den regeln.
- Klickytan är minst 24 px hög.
- Kunden kan välja bort signaturen med `visa={false}` på `Sajtfot`, som då
  inte renderar något alls.

Signaturen ersätter den tidigare krediten med "Sajt av" och ordmärket som
egen länk, som pekade på kundens case i stället för på byrån.

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
