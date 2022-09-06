export const ValidateForm = (values) => {
  const errors = {};
  Object.keys(values).map((item) => {
    if (!values[item]) errors[item] = "Campo requerido";
  });
  return errors;
};
