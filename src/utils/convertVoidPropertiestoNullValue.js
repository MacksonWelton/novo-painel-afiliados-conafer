const convertVoidPropertiestoNullValue = (obj) => {
  const auxObject = {};

  Object.keys(obj).forEach((key) => {
    Object.assign(auxObject, {
      key: obj[key] || obj[key] === 0 ? obj[key] : null,
    });
  });

  return auxObject;
};

export default convertVoidPropertiestoNullValue;
