import { Field, ErrorMessage } from "formik";

const InputComponent = ({
    name,
    type,
    placeholder,
    componentError,
    classNameInput,
    classNameError,
  }) => (
    <div className="input-group mb-3">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={classNameInput}
      />
      <ErrorMessage
        name={name}
        component={componentError}
        className={classNameError}
      />
    </div>
  );
  

export default InputComponent;