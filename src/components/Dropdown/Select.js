import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} as="select" {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      {/* <ErrorMessage
        name={name}
        render={(error) => {
          return <div className="text-red">{error}</div>;
        }}
      /> */}
    </div>
  );
};

export default Select;
