// import React from "react";

// const Dropdown = ({ label, options }) => {
//   return (
//     <div className="space-y-1">
//       <div>
//         <label>{label}</label>
//       </div>
//       <select className="rounded-lg focus:outline-none border-2 h-10 w-full p-1.5">
//         {options.map((el, index) => (
//           <option className="p-2" key={index}>
//             {el}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";

const DropDown = ({ label, options, variant, getCategoryValue }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    getCategoryValue(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>

      <Select
        className="w-full"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        size="small"
        label={label}
        variant={variant}
        onChange={handleChange}
      >
        {options?.map((option, index) => (
          <MenuItem value={option} key={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
