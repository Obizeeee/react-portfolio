import React from "react";
import { Tilt } from "react-tilt";

const MyButton = () => {
  return (
    <div className="inset-0 flex justify-end relative">
      <Tilt className="Tilt" options={{ max: 25, speed: 400 }}>
      
      </Tilt>
    </div>    
  );
};

export default MyButton;