import { Form } from "react-bootstrap";

export const AuthFormClient = ({ searchClientCode, value, onChangeValue }) => {
  const onPressEnter = (value) => {
    if (value.key === "Enter") {
      searchClientCode();
    }
  };
  const changeCode = (value) => {
    onChangeValue(value.target.value);
  };
  return (
    <div className="d-flex">
      <Form.Control
        placeholder="Codigo escolar"
        type="text"
        onKeyDown={onPressEnter}
        onChange={changeCode}
        value={value}
      />
    </div>
  );
};
