import React from "react";
import Map from "mapmyindia-react";

const Auth = () => {
  return (
    <div>
      <div>
        <Map
          markers={[
            {
              position: [18.5314, 73.845],
              draggable: true,
              title: "Marker title",
              onClick: (e) => {
                console.log("clicked ");
              },
              onDragend: (e) => {
                console.log("dragged");
              }
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Auth;
