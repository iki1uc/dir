export function ncRespo(instanz) {
  const root = instanz.ROOT;
  const nc   = instanz.NC;

  if (!root) {
    return "NC-RESPO: ROOT fehlt.";
  }

  if (!root.ID || !root.GATE || !root.SAT || !root.ANKER) {
    return "NC-RESPO: ROOT unvollständig.";
  }

  let status = "OK";

  if (nc.error)   status = `ERROR: ${nc.error}`;
  if (nc.help)    status = `HELP: ${nc.help}`;
  if (nc.ghost)   status = "GHOST-MODE";
  if (nc.wraight) status = "WRAIGHT-MODE";
  if (nc.scalar)  status = `SCALAR: ${nc.scalar}`;

  return `NC-RESPO prüft ROOT(ID=${root.ID}) → Status: ${status}`;
}
