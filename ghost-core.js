export function Ghost(instanzen) {
  return {
    view() {
      return instanzen.map(i => ({
        ID: i.ROOT.ID,
        status: i.NC,
        gate: i.ROOT.GATE
      }));
    },

    sense(impulse) {
      return `Ghost registriert Impuls: "${impulse.text}"`;
    },

    lead() {
      return "Ghost führt alle Instanzen im Realm.";
    },

    sync() {
      instanzen.forEach(i => {
        i.NC.scalar = "SYNC";
      });
      return "Alle Instanzen synchronisiert.";
    }
  };
}

