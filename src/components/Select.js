import React from "react";
import { makeStyles } from "@mui/styles";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Field } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 32,
    borderRadius: 0,
    borderColor: "#145DA1",
  },
  select: {
    "& li": {
      fontSize: 12,
    },
  },
}));

const CustomSelect = (props) => {
  const classes = useStyles();

  const { label, value, name, isSelect, options, type, ...rest } = props;
  console.log(options)
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => {
        return (
          <React.Fragment>
            <div className="muiSelect">
              <FormControl fullWidth size="small">
                <InputLabel size="small" error={meta.touched && meta.error}>
                  {label}
                </InputLabel>

                <Select
                  inputProps={{ style: { fontSize: 12 } }}
                  className={classes.root}
                  MenuProps={{
                    classes: { paper: classes.select },
                  }}
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  fullWidth
                  {...field}
                  // MenuProps={{ classes: { paper: classes.menuPaper } }}
                  autoComplete="off"
                  error={meta.touched && meta.error}
                  name={name}
                  size="small"
                  label={label}
                  variant="outlined"
                  type={type}
                  value={value}
                >
                  {/* {options?.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))} */}
                   <MenuItem  value="32 ft">
                      32 ft
                    </MenuItem>
                    <MenuItem  value="40 ft">
                      40 ft
                    </MenuItem>
                </Select>
                {meta.touched && (
                  <FormHelperText
                    style={{
                      color: "#D84949",
                      marginLeft: 2,
                      textTransform: "capitalize",
                    }}
                    className="text-red"
                  >
                    {meta.error}
                  </FormHelperText>
                )}
              </FormControl>
            </div>
          </React.Fragment>
        );
      }}
    </Field>
  );
};

export default CustomSelect;