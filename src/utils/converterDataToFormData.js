// Função converte dados para multipart/form-data

const converterDataToFormData = (input, files) => {
  const formData = new FormData();

  Object.keys(input).forEach(data => {
    formData.append(data, input[data]);
  })

  if (files) {
    console.log(files)
    Object.keys(files).forEach(file => {
      formData.append(file, files[file].value, files[file].fileName);
    })
  }


  return formData;
}

export default converterDataToFormData;