import React from "react";
import PropTypes from "prop-types";

function Education({ name, field, abb, gpa, logo }) {
  return (
    <div className="mt-4 flex flex-row gap-x-4 ">
      <img className="object-contain h-14 w-14" src={logo} alt="Btu Logo"></img>
      <div>
        <p className="font-bold text-lg lg:text-md">
          {name},<span className="lg:hidden"> {field}</span>
          <span className="hidden lg:inline"> {abb}</span>
        </p>
        <p className="text-gray-500">GPA: {gpa}</p>
      </div>
    </div>
  );
}

Education.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  abb: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  logo: PropTypes.isRequired,
};

export default Education;
