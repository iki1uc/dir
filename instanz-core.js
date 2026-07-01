export function Instanz(ID, GATE, SAT, ANKER) {
  return {
    ROOT: {
      ID,
      GATE,
      SAT,
      ANKER
    },
    NC: {
      ghost: false,
      wraight: false,
      error: null,
      help: null,
      scalar: null
    }
  };
}
