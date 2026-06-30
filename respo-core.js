export function respo(instanz) {
  if (!instanz.ID || !instanz.GATE || !instanz.SAT || !instanz.ANKER) {
    return "RESPO: Instanz unvollständig.";
  }
  return `RESPO prüft Instanz ${instanz.ID} im GATE ${instanz.GATE}.`;
}
