import React from "react";
import { Field, ErrorMessage } from "formik";
import InputField from ".";

const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;

  return (
    <div>
      <Field
        placeholder={placeholder}
        className="border-2"
        id={name}
        name={name}
        label={label}
        as={InputField}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(error) => {
          return <div className="text-red">{error}</div>;
        }}
      />
    </div>
  );
};

export default Input;
