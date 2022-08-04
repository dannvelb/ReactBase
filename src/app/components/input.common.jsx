import React from "react";
import { Form } from "react-bootstrap";

export const InputComponent = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  label,
  helpText,
  error,
}) => {
  return (
    <div className="w-100">
      <Form.Group>
        {label && <Form.Label htmlFor="inputPassword5">{label}</Form.Label>}
        <Form.Control
          name={name}
          type={type}
          aria-describedby="passwordHelpBlock"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isInvalid={error}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        <Form.Text id="passwordHelpBlock" muted></Form.Text>
      </Form.Group>
    </div>
  );
};

export default InputComponent;
