import React, { useState } from "react";
import { Dropdown, InputField, Modal } from "../../components";
import {
  AboutUs,
  OurFleet,
  WhyUs,
  WhatClientSay,
  HomeBanner,
  VehicalAvailability,
  GetQuote,
  Stats,
  ContactUs
} from "./components";
const LandingPage = () => {
  const [getQuote, setGetQuote] = useState(false);
  console.log(getQuote);
  return (
    <React.Fragment>
      <Modal
        open={getQuote}
        close={() => setGetQuote(false)}
        isFullWidth={true}
        maxWidth="md"
        title="Approximate Quote"
      >
        <div className="flex justify-around space-x-6">
          <div className="space-y-6">
            <div className="sapce-y-2 bg-gray-100 rounded-lg p-4">
              <div className="font-bold">Source</div>
              <div className="w-60">B-120, Sphreikis, Mumbai, jam nagare</div>
            </div>
            <div className="sapce-y-2 bg-gray-100 rounded-lg p-4">
              <div className="font-bold">Destination</div>
              <div className="w-60">B-120, Sphreikis, Mumbai, jam nagare</div>
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="space-y-2">
              <div className="font-bold text-center">Weight</div>
              <div className="text-xl font-semibold">200 TONS</div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-center">Distance</div>
              <div className="text-xl font-semibold">2142 KMS</div>
            </div>
          </div>

          <div className="grid place-items-center font-bold text-xl">
            Approximate Cost = &#8377; 5456
          </div>
        </div>
      </Modal>

      <section className="">
        <div
          className="md:p-10"
          style={{
            backgroundImage: `url('/static/images/landing-image.png')`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "cover",
            width: "100%"
          }}
        >
          <div className="md:flex md:space-y-10 space-y-10 justify-between items-start px-10 py-10 pb-40">
            <div>
              <div>
                <h1 className="text-white text-center pb-4">
                  Quick & Reliable, Hamesha
                </h1>
                <hr className="w-1/2 mx-auto border-2 border-yellow" />
              </div>
            </div>
            <div className="relative py-2 absolute md:-top-24 ">
              <div className="absolute py-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="absolute right-6 md:right-0 px-2">
                <button className="bg-red rounded-md text-white px-4 py-1 my-1 ">
                  Track
                </button>
              </div>
              <input
                type="search"
                placeholder="Track Now"
                className="bg-gray-light focus:outline-none rounded-md border border-gray py-2 px-9 md:w-96"
              />
            </div>
          </div>

          <GetQuote setIsGetQuote={(val) => setGetQuote(val)} />

          <div className="py-20 text-center">
            <h1 className="text-white uppercase">
              50 Years of experience in handling perishables
            </h1>
          </div>

          {/* <VehicalAvailability /> */}
        </div>

        {/* <div className="bg-gray-dark">
          <OurFleet />
        </div> */}
        <div className="">
          <AboutUs />
        </div>
        <div className="">
          <Stats />
        </div>
        <div className="bg-gray-lightest py-14">
          <WhyUs />
        </div>
        {/* <WhatClientSay /> */}
        {/* <HomeBanner /> */}

        <div>
          <ContactUs />
        </div>
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
