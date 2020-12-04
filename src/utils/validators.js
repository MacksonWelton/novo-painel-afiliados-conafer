import { validateBr } from "js-brasil";

export const cpfValidator = (e) => {
  if (
    e.currentTarget.value.length === e.currentTarget.maxLength &&
    !validateBr.cpf(e.currentTarget.value)
  ) {
    e.currentTarget.classList.add(
      `${!validateBr.cpf(e.currentTarget.value) && "bg-red"}`
    );
    e.currentTarget.classList.add(
      `${!validateBr.cpf(e.currentTarget.value) && "text-white"}`
    );
    return true;
  } else if (
    e.currentTarget.value.length < e.currentTarget.maxLength ||
    validateBr.cpf(e.currentTarget.value)
  ) {
    e.currentTarget.classList.remove("bg-red");
    e.currentTarget.classList.remove("text-white");
    return false;
  }
};

export const cnpjValidator = (e) => {
  if (
    e.currentTarget.value.length === e.currentTarget.maxLength &&
    !validateBr.cnpj(e.currentTarget.value)
  ) {
    e.currentTarget.classList.add(
      `${!validateBr.cnpj(e.currentTarget.value) && "bg-red"}`
    );
    e.currentTarget.classList.add(
      `${!validateBr.cnpj(e.currentTarget.value) && "text-white"}`
    );
    return true;
  } else if (
    e.currentTarget.value.length < e.currentTarget.maxLength ||
    validateBr.cnpj(e.currentTarget.value)
  ) {
    e.currentTarget.classList.remove("bg-red");
    e.currentTarget.classList.remove("text-white");
    return false;
  }
};

export const clearInput = (e, input) => {
  if (!input) {
    return false;
  }

  e.currentTarget.value = "";
  e.currentTarget.classList.remove("bg-red");
  e.currentTarget.classList.remove("text-white");
  
  return true;
};

