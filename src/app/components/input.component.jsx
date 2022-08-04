import { Button, OutlinedInput } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({
  name = "",
  type = "text",
  placeholder = "",
  componentError = "",
  classNameInput = "",
  classNameError = "",
  onEnter=()=>{}
}) => {
  const keyDown = (event) => {
    if(event.key=='Enter'){
        console.log(event.key)
        onEnter();
    }
  };
  return (
    <div className="input-group mb-3">
      <OutlinedInput name={name} onKeyDown={keyDown}  />
    </div>
  );
};

export default InputComponent;
