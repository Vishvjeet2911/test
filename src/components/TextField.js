import * as React from "react";

import TextField from "@mui/material/TextField";
import { Field } from "formik";
import { fontSize } from "@mui/system";
import { FormControl } from "@mui/material";

export default function CustomTextField(props) {
  const {
    label,
    value,
    name,
    isSelect,
    options,
    multiline,
    type,
    setCurrentValue,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta
        }) => {
          setCurrentValue && setCurrentValue(field.value);

          return (
            <div className="muiLabel">
              <TextField
                className="muiLabel w-full"
                FormHelperTextProps={{
                  style: {
                    marginLeft: 2,
                    textTransform: "capitalize"
                  }
                }}
                fullWidth
                {...field}
                multiline={multiline}
                id="outlined-basic"
                autoComplete="off"
                label={label}
                rows={2}
                InputProps={{
                  style: {
                    height: 32,
                    borderRadius: 0,
                    borderColor: "#145DA1",
                    textTransform: "capitalize"
                  }
                }}
                inputProps={{ style: { fontSize: 12 } }}
                error={meta.touched && meta.error}
                className="w-full"
                name={name}
                helperText={meta.touched && meta.error}
                variant="outlined"
                type={type}
              />
            </div>
          );
        }}
      </Field>
    </React.Fragment>
  );
}
