// import React from "react";

// const InputField = () => {
//   return (
//     <div className="space-y-1 w-full">
//       <div>
//         <label className="capitalize">{label}</label>
//       </div>
//       <input
//         className="rounded-lg border-2 w-full p-1.5 capitalize focus:outline-none"
//         type={type}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// };

// export default InputField;

import React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const { label, type, ...rest } = props;
  return (
    <TextField
      {...rest}
      className="w-full"
      size="small"
      color="primary"
      autoComplete="off"
      id="outlined-basic"
      label={label}
      type={type}
      variant="outlined"
    />
  );
};

export default InputField;
