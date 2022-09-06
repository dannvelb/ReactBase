import { TextField } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CallBackConst, StringConst } from "../const/const";

export type TTypeInputComponent = 'text' | 'password';  

export type TInputComponent = {
  name:string;
  label:string;
  type:TTypeInputComponent;
  value:string;
  onChange?:Function;
  onChangeName?:Function;
  onEnter?:Function;
  error?:string;
  helperText?:string;
}


const InputComponentCommon: FunctionComponent<TInputComponent> = ({
  name,
  label,
  type,
  value,
  onChange,
  onChangeName,
  onEnter,
  error,
  helperText
}) => {
  
  const keyDown = (event) => {
    if (event.key === "Enter") {
      onEnter!()
    }
  };
  const onChangeI = (event) => {
    onChange!(event.target.value)
    onChangeName!(name,event.target.value,!error)
  }

  return (
    <div className="input-group mb-3">
      <TextField
        value={value}
        type={type}
        className="w-100"
        name={name}
        label={label}
        onChangeCapture={onChangeI}
        onKeyDown={keyDown}
        error={error !== undefined}
        helperText={error ?? helperText}
        InputProps={{className:'form-control p-0'}}
      />
    </div>
  );
};

InputComponentCommon.defaultProps = {
  name:StringConst.empty,
  label:StringConst.empty,
  type:'text',
  value:'',
  onChange:CallBackConst.empty,
  onChangeName:CallBackConst.empty,
  onEnter:CallBackConst.empty,
}

export default InputComponentCommon;
