import React from "react";
import { Card, Slider } from "../../../../components";
import SliderContent from "./SliderContent";

const WhyUs = () => {
  const data = [
    {
      icon: "/static/icons/24-hours.png",
      title: "Better Services 24*7"
    },
    {
      icon: "/static/icons/thermometer.png",
      title: "Right time at optimal temperatures"
    },
    {
      icon: "/static/icons/fast-delivery.png",
      title: "Just in time delivery"
    },
    {
      icon: "/static/icons/safety.png",
      title: "100% Safety of Products"
    },
    {
      icon: "/static/icons/tracking-app.png",
      title: "GPS Tracking of Vehicles"
    },
    {
      icon: "/static/icons/transportation.png",
      title: "Pan India Transportation"
    }
  ];

  return (
    <React.Fragment>
      <section className="px-10">
        <div className="md:flex space-y-4 md:space-y-0 justify-around items-start">
          <div>
            <h1 className="font-semibold">Why Choose Us ?</h1>
          </div>
          <div className="md:w-1/2 text-justify">
            Our work ethic is built on ceaseless hard work and dedication to our
            craft, as well as a commitment to the promises we make. It is due to
            this diligence that we can have more than 5,000 happy customers.
            Empathy and credibility inform the choices we make every day.
            Together, we build a company culture that puts humans at the heart
            of everything we do – a company that is as great to work for, as it
            is to work with.
          </div>
        </div>

        <div className="hidden md:block pt-10 ">
          <img src="/static/images/why-us.png"/>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhyUs;
