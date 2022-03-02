import React from "react";
import { Card, InputField } from "../../../../components";

const HomeBanner = () => {
  return (
    <React.Fragment>
      <div className="hidden md:block px-10 py-10">
        <Card background="gray-dark" rounded="lg" classes="py-4">
          <div className="px-10 flex justify-between">
            <div>
              <h2 className="text-white">Isn't In Yet</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="">
                <InputField placeholder="Your Email Address" />
              </div>
              <div className="">
                <button className="bg-yellow px-8 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default HomeBanner;
