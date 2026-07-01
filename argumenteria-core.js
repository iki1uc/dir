
export function argumenteria(instanz, impulse) {
  const sense = impulse.text;
  const status = instanz.NC.scalar || "OK";

  return {
    id: instanz.ROOT.ID,
    sense,
    status,
    reply: `Instanz ${instanz.ROOT.ID} versteht: "${sense}" im Status "${status}".`
  };
}
