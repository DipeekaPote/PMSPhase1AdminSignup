import React from "react";
import logos from "./pngwing.com.png";
import "./LoadingWithLogo.css"; // Import CSS file for styling


const LoadingWithLogo = () => {
  return (
    <div className="loading-containers">
      <div className="logo-containers">
        <img src={logos} alt="Logos" className="logos" />
      </div>
      <div className="loading-indicators">
        <div className="loading-spinners"></div>
      
      </div>
    </div>
  );
};

export default LoadingWithLogo;
