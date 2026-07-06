import React from "react";
import PropTypes from "prop-types";

function Education({ name, field, gpa, date, logo }) {
  return (
    <div className="mt-5 flex flex-row gap-x-4">
      <img className="cv-logo flex-shrink-0" src={logo} alt="university logo" />
      <div>
        <p className="cv-exp-title">
          {name}, <span className="cv-exp-role">{field}</span>
        </p>
        {date && <p className="cv-exp-date mt-0.5">{date}</p>}
        <p className="cv-exp-desc mt-1">GPA: {gpa}</p>
      </div>
    </div>
  );
}

Education.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  gpa: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  date: PropTypes.string,
  logo: PropTypes.any.isRequired,
};

export default Education;
