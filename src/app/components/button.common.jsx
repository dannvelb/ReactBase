import React from "react";
import { Button, Spinner } from "react-bootstrap";

export const ButtonComponent = ({ onClick, label, isLoading }) => {
  return (
    <Button onClick={onClick} disabled={isLoading}>
      {isLoading && <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />}
      {label}
    </Button>
  );
};



export default ButtonComponent;
