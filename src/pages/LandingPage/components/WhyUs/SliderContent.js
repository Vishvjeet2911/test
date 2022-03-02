import React from "react";
import { Card } from "../../../../components";

const SliderContent = ({ icon, title }) => {
  return (
    <div>
      <Card classes="p-4" rounded="lg" background="yellow-200">
        <div className="space-y-4">
          <div>
            <img src={icon} width="50px" />
          </div>
          <div className="font-semibold">
            <h3>{title}</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SliderContent;
