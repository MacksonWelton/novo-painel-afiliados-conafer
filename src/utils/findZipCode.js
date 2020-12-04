import cep  from "cep-promise";

export const findZipCode = async (e) => {
  try {
    const response = await cep(e.currentTarget.value);

    return response;

  } catch(err) {
    console.error(err.errors);
    alert("CEP não encontrado!")
  }
}