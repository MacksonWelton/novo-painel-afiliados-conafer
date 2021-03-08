// Função converte dados para multipart/form-data

import axios from "axios";

const converterDataToFormData = async (input, files) => {
  const formData = new FormData();

  if (input) {
    Object.keys(input).forEach((data) => {
      formData.append(data, input[data]);
    });
  }

  if (files) {
    for (const file of Object.keys(files)) {
      if (files[file].value && typeof files[file].value !== "string") {
        formData.append(file, files[file].value, files[file].fileName);
      } else if (files[file].value.indexOf("http") !== -1) {
        const response = await axios.get(files[file].value, {
          responseType: "blob",
        });
        const value = new File([response.data], files[file].fileName);
        formData.append(file, value, files[file].fileName);
      }
    }
  }

  return formData;
};

export default converterDataToFormData;
