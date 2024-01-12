import React from "react";
import PropTypes from "prop-types";

function Experience({ name, role, description, logo, detail }) {
  return (
    <div className="mt-8 flex flex-row gap-x-4">
      <img
        className="object-contain h-14 w-14"
        src={logo}
        alt="logo image"></img>
      <div>
        <p className="font-bold text-lg">
          {name}, {role}
        </p>
        <div className=" text-gray-500 indent-4 w-[36vw] lg:w-full">
          {description}
          <span className="lg:hidden">{detail}</span>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.isRequired,
  detail: PropTypes.string,
};

export default Experience;
