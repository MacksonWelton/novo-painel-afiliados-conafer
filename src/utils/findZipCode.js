import cep  from "cep-promise";

export const findZipCode = async (e) => {
  try {

    if (e.currentTarget.value) {
      const response = await cep(e.currentTarget.value);

      return response;
    }

  } catch(err) {
    console.error(err);
    alert("CEP não encontrado!");
  }
}