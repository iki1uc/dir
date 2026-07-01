export function AU(instanz, impulse) {
  return {
    type: "AU",
    instanz: instanz.ROOT.ID,
    impulse: impulse.text,
    effect: `Instanz ${instanz.ROOT.ID} tritt mit Impuls "${impulse.text}" auf`
  };
}

export function RA(instanz, status) {
  return {
    type: "RA",
    instanz: instanz.ROOT.ID,
    status,
    effect: `Instanz ${instanz.ROOT.ID} reagiert im Status "${status}"`
  };
}
