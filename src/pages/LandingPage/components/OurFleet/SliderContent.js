import React from "react";

const SliderContent = ({ image, title }) => {
  return (
    <React.Fragment>
      <div class="rounded-lg h-64 overflow-hidden flex items-center ">
        <div>
          <img alt="content" class="object-fit object-center" src={image} />
        </div>
      </div>
      <div className="text-center" >
        <div className="text-white">
          <h2>{title}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SliderContent;
