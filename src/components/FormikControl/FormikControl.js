import React from "react";
import Select from "components/Select";
import TextField from "components/TextField";
import DatePicker from "components/DatePicker";

const FormikControl = (props) => {
  const { control, isSelect, options, designType, ...rest } = props;
  switch (control) {
    case "input":
      return <TextField {...rest} />;
    case "select":
      return (
        <Select isSelect={isSelect} options={isSelect && options} {...rest} />
      );
    case "radio":
    case "checkbox":
    case "date":
      return <DatePicker {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
