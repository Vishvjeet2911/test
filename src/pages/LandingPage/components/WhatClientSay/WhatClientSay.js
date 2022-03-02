import React from "react";
import { Slider } from "../../../../components";
import SliderContent from "./SliderContent";

const WhatClientSay = () => {
  return (
    <React.Fragment>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            What Clients Say
          </h1>
        </div>
        <section class="text-gray-600 body-font">
          <div className=" py-10 px-20  rounded-lg relative slider-container ">
            <Slider
              spaceBetween={20}
              isNavigation={true}
              spaceBetweenDesktop={20}
              ItemRender={SliderContent}
              slidesPerView={3}
              slidesPerViewDesktop={3}
              slidesPerViewTab={3}
              slides={[...new Array(6)]}
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default WhatClientSay;
