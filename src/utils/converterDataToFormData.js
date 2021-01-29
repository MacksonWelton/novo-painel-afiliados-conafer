// Função converte dados para multipart/form-data

const converterDataToFormData = (input, files) => {
  const formData = new FormData();

  if (input) {
    Object.keys(input).forEach(data => {
      formData.append(data, input[data]);
    })
  }


  if (files) {
    Object.keys(files).forEach(file => {
      if (files[file].value) {
        formData.append(file, files[file].value, files[file].fileName);
      }
    })
  }

  return formData;
}

export default converterDataToFormData;