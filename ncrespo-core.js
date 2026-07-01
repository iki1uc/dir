// RESPO-ECO: prüft Instanz + Impuls + ECO-Wert
export function respo(instanz, impulse) {

  // ECO-Grundwerte
  const E = impulse.text.length || 1;
  const C = instanz.NC?.scalar ? 2 : 1;
  const O = impulse.pulse || 1;

  // E³C³O³§ – ökonomischer Blitzpunkt
  const E3 = E ** 3;
  const C3 = C ** 3;
  const O3 = O ** 3;

  const ecoBlitz = E3 - C3 + O3;

  // Gesetzpunkt §
  const gesetz = ecoBlitz >= 0 ? "§-OK" : "§-NICHT";

  // WURMlochINGATEout – Warp-Transformation
  const warp = ecoBlitz * 3;

  return {
    instanz: instanz.ROOT.ID,
    impulse: impulse.text,
    E3,
    C3,
    O3,
    ecoBlitz,
    gesetz,
    warp,
    status: warp > 50 ? "WARB-ACTIVE" : "WARB-LOW"
  };
}
