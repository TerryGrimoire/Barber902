import React from "react";
import coupeData from "../data/coupeData";

function Coupe() {
  return (
    <div className="flex-col justify-center align-center">
      <h1 className="h1">CONSULTEZ NOS COUPES</h1>
      <div className="coupes_container">
        {coupeData.map((data) => (
          <img
            src={data.src}
            alt="coupe de cheveux"
            key={data.id}
            className="coupe_img"
          />
        ))}
      </div>
    </div>
  );
}

export default Coupe;
