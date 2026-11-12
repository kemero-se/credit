import "./credit.css";

/*
  kemeros signatur: "Hemsida av" och kemeros ordmärke med den blå punkten i
  k:ets öppning, som på kemero.se. Beslutet står i README.

  Allt är låst i paketet: texten, ordmärket, länken och punkten. Rent
  presentationell utan hooks, så den kan renderas statiskt utan
  klient-JavaScript.
*/

export type KemeroCreditProps = {
  /** Endast för placering i footern. Använd inte för att tona om signaturen. */
  className?: string;
};

export function KemeroCredit({ className }: KemeroCreditProps) {
  return (
    <a
      aria-label="Hemsida av kemero, webbyrå"
      className={className ? `kemero-credit ${className}` : "kemero-credit"}
      href="https://kemero.se"
      rel="noopener"
    >
      <span>Hemsida av</span>
      {/*
        Ordmärket ritas av CSS som en mask i currentColor, se credit.css.
        Som inline-svg lade banan 3,5 kB okomprimerbar text i varje sidas
        HTML, och sidan gick över det första TCP-fönstret.
      */}
      <span aria-hidden="true" className="kemero-credit__marke">
        <span className="kemero-credit__ord" />
        <span className="kemero-credit__punkt" />
      </span>
    </a>
  );
}
