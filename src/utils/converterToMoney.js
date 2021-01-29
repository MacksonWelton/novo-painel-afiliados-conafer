import { mask } from "remask";

export function formatReal(numero) {
  switch(numero.length) {
    case 4:
      return mask(numero, ["99,99"]);
    case 6:
      return mask(numero, ["999,99"]);
    case 7:
      return mask(numero, ["9.999,99"]);
    case 9:
      return mask(numero, ["99.999,99"]);
    case 10:
      return mask(numero, ["999.999,99"]);
    case 12:
      return mask(numero, ["9.999.999,99"]);
    case 13:
      return mask(numero, ["99.999.999,99"]);
    case 14:
      return mask(numero, ["999.999.999,99"]);
    default:
      return numero;
  }
}