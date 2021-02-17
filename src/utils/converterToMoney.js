import { mask } from "remask";

export function formatReal(numero) {
  switch (numero.length) {
    case 2:
      return mask(numero, ["9.99"]);
    case 3: 
    return mask(numero, ["99.99"]);
    case 4:
      return mask(numero, ["99.99"]);
    case 6:
      return mask(numero, ["999.99"]);
    case 7:
      return mask(numero, ["9999.99"]);
    case 8:
      return mask(numero, ["99999.99"]);
    case 9:
      return mask(numero, ["999999.99"]);
    case 10:
      return mask(numero, ["9999999.99"]);
    case 11:
      return mask(numero, ["99999999.99"]);
    case 12:
      return mask(numero, ["999999999.99"]);
    case 13:
      return mask(numero, ["9999999999.99"]);
    case 14:
      return mask(numero, ["99999999999.99"]);
    case 15:
      return mask(numero, ["999999999999.99"]);
    case 16:
      return mask(numero, ["9999999999999.99"]);
    default:
      return;
  }
}
