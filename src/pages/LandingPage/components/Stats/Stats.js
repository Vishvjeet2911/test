import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = () => {
  return (
    <div className="bg-yellow">
      <div className="md:grid grid-cols-4 py-4 place-items-center gap-8 px-10">
        <div className="space-y-4">
          <div className="text-center">
            <div>
              <h1 className="text-red font-bold">
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 50 }}>
                      {isVisible ? (
                        <CountUp start={0} duration={3} end={28} />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h1>
            </div>
            <div className="capitalize font-semibold text-lg">Cities</div>
          </div>
          <div className="capitalize font-semibold text-lg text-center">
            national presence
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <div>
              <h1 className="text-red font-bold">
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 50 }}>
                      {isVisible ? (
                        <CountUp start={0} duration={3} end={40000} />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h1>
            </div>
            <div className="capitalize font-semibold text-lg text-center">
              metric tonnes
            </div>
          </div>
          <div className="capitalize font-semibold text-lg text-center">
            of fresh imported fruits delivered in <br /> 2019-2020
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <div>
              <h1 className="text-red font-bold">
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 50 }}>
                      {isVisible ? (
                        <CountUp start={0} duration={3} end={16} />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h1>
            </div>
            <div></div>
          </div>
          <div className="capitalize font-semibold text-lg text-center">cold storages</div>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <div>
              <h1 className="text-red font-bold">
                <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 50 }}>
                      {isVisible ? (
                        <CountUp start={0} duration={3} end={106} />
                      ) : null}
                    </div>
                  )}
                </VisibilitySensor>
              </h1>
            </div>
            <div></div>
          </div>
          <div className="capitalize font-semibold text-lg text-center">
            refrigerator trucks
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
