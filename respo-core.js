export function Ghost(instanzen) {
  return {
    view() {
      return instanzen.map(i => ({
        ID: i.ROOT.ID,
        status: i.NC.scalar,
        gate: i.ROOT.GATE
      }));
    },

    sense(impulse) {
      return `Ghost registriert Impuls: "${impulse.text}"`;
    },

    lead() {
      return "Ghost aktiviert Leadership-Modus.";
    },

    command(instanz, mode) {
      instanz.NC.scalar = mode;
      return `Ghost setzt Instanz ${instanz.ROOT.ID} auf Modus "${mode}".`;
    }
  };
}
