export function Realm(instanzen, ghost, mir, argumenteria, dir) {
  return {
    tick(impulseText) {
      const impulse = mir(impulseText);
      const ghostSense = ghost.sense(impulse);

      const outputs = instanzen.map(i => {
        const arg = argumenteria(i, impulse);
        const out = dir(arg);
        return { id: i.ROOT.ID, out };
      });

      return {
        ghostSense,
        outputs
      };
    }
  };
}

