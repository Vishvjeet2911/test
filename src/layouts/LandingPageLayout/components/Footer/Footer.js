import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className="bg-gray-900 text-white">
        <div class="md:px-40 py-8 mx-auto">
          <div class="py-7 mx-auto">
            <div class="md:grid grid-cols-3 text-center md:text-left">
              <div class="">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                  Services
                </h2>
                <nav class="list-none mb-10 space-y-2">
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">
                        Food & Beverages
                      </a>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">Grocery</a>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">
                        Pharmaceutical & Healthcare Logistics
                      </a>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">
                        Chemical & Fertilizer Logistics
                      </a>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">
                        Automotive Logistics
                      </a>
                    </li>
                  </Link>
                  <Link to="/services">
                    <li>
                      <a class="text-white hover:text-gray-500">
                        Consumer Logistics
                      </a>
                    </li>
                  </Link>
                </nav>
              </div>
              <div class=" px-4">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                  About Us
                </h2>
                <nav class="list-none mb-10 space-y-2">
                  <Link to="/about">
                    <li>
                      <a class="text-white hover:text-gray-500">Overview</a>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li>
                      <a class="text-white hover:text-gray-500">Leadership</a>
                    </li>
                  </Link>
                </nav>
              </div>

              <div class=" px-4">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                  Address
                </h2>
                <div className="pb-2 font-bold">IG.Co.</div>
                <div>
                  Plot No-1/2/8 B, Opposite Digha Talav, Thane Belapur Road,
                  Digha Airoli, Navi Mumbai- 400708, India
                </div>
              </div>
            </div>
          </div>

          {/* <div className='py-2 flex flex-row justify-between items-center'>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-gray-500 text-sm'>
                Copyright © {currentYear} Logistic. All rights reserved.
              </p>
              <div className='ml-5 text-sm text-gray-500 flex flex-row justify-between items-center space-x-1'>
                <div className='border-r-2 border-gray-300 px-2'>Privacy Policy</div>
                <div className='border-r-2 border-gray-300 px-2'>Terms of Use</div>
                <div className='border-r-2 border-gray-300 px-2'>Sales Policy</div>
                <div className='border-r-2 border-gray-300 px-2'>Legal</div>
                <div>Site Map</div>
              </div>
            </div>
            <div className='text-gray-500 text-sm'>India</div>
          </div> */}
        </div>
      </div>
      {/* <div className="text-center text-white">
          © Logistic {currentYear}. All rights reserved.
        </div> */}
    </React.Fragment>
  );
};

export default Footer;
