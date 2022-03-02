import React from "react";

const Card = (props) => {
  const {
    classes,
    background,
    children,
    rounded,
    hoverBackground,
    color,
    hoverColor,
    shadow,
    hoverShadow,
    border,
    borderColor,
    hoverBorder,
    hoverBorderColor,
    cursor = true,
    handleClick
  } = props;
  return (
    <div className="card-component" onClick={handleClick}>
      <div
        className={` shadow-${shadow} hover:bg-${hoverBackground} bg-${background} hover:shadow-${hoverShadow}  rounded-${rounded} ${
          cursor && "cursor-pointer"
        }  ${border && "border"} border-${borderColor} ${
          hoverBorder && "hover:border"
        }  hover:border-${hoverBorderColor} ${classes}`}
      >
        <div className={`hover:text-${hoverColor}`}>{children}</div>
      </div>
    </div>
  );
};

export default Card;
