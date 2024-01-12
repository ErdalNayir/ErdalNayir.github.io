import React from "react";
import { imgData } from "../data";

function Technologies() {
  return (
    <div className="ml-2 mt-12 mr-8 mb-16 lg:mb-4 lg:hidden">
      <u>
        <h2 className=" font-bold text-2xl mb-6">Technologies</h2>
      </u>

      <div className="mt-4 flex flex-row gap-x-4">
        {Object.keys(imgData).map((key, index) =>
          index < 12 ? (
            <img
              className="object-contain w-[2.6vw] h-[10vh]"
              key={key}
              src={imgData[key]}
              alt={key}></img>
          ) : (
            ""
          )
        )}
      </div>
      <div className="mt-4 flex flex-row gap-x-4">
        {Object.keys(imgData).map((key, index) =>
          index >= 12 ? (
            <img
              className="object-contain w-[2.6vw] h-12"
              key={key}
              src={imgData[key]}
              alt={key}></img>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Technologies;
