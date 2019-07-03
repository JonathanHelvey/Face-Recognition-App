import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner pa3">
          <img
            style={{ paddingTop: "10px" }}
            src={require("../images/icons8-brain-64.png")}
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
