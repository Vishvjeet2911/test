import React from "react";
import SliderContent from "./SliderContent";
import { Slider } from "../../../../components";

const OurFleet = () => {
  return (
    <React.Fragment>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto py-10 flex px-5 md:flex-row flex-col items-start">
          <div class="w-full mb-6 lg:mb-0 py-4">
            <div className="w-52 h-1 bg-yellow "></div>
            <div className="py-4">
              <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
                Our Fleets
              </h1>
              <div className="">
                <div className=" px-10 relative slider-container ">
                  <Slider
                    navigateArrowColor="text-yellow"
                    spaceBetween={20}
                    isNavigation={true}
                    spaceBetweenDesktop={20}
                    ItemRender={SliderContent}
                    slidesPerView={3}
                    slidesPerViewDesktop={3}
                    slidesPerViewTab={3}
                    slides={[
                      { image: "/static/images/truck3.png", title: '40ft Trailer' },
                      { image: "/static/images/truck2.png", title: '32ft Truck' },
                      { image: "/static/images/truck4.png", title: '20ft truck' },
                      { image: "/static/images/truck5.png", title: '24ft truck' },
                      { image: "/static/images/truck1.png", title: '14ft Truck' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurFleet;
