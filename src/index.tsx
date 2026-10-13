import "./credit.css";

/*
  kemeros signatur, "Sajt av kemero" med punkten som sätts.

  Allt är låst i paketet: texten, länken och punkten. Rent presentationell
  utan hooks, så den kan renderas statiskt utan klient-JavaScript. Hovret
  sköts av CSS.

  Länken går alltid till kemero.se, i samma flik och utan nofollow. Den är
  byråns signatur, inte en länk till ett enskilt case.
*/
export type KemeroCreditProps = {
  /** Endast för placering i footern. Använd inte för att tona om signaturen. */
  className?: string;
};

export function KemeroCredit({ className }: KemeroCreditProps) {
  return (
    <a
      aria-label="Sajt av kemero, webbyrå"
      className={className ? `kemero-credit ${className}` : "kemero-credit"}
      href="https://kemero.se"
      rel="noopener"
    >
      <span aria-hidden="true" className="kemero-credit__punkt" />
      Sajt av kemero
    </a>
  );
}
