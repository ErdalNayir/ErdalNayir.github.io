import React from "react";
import PropTypes from "prop-types";

function Experience({ name, role, bullets, logo, date }) {
  return (
    <div className="mt-7 flex flex-row gap-x-4">
      <img className="cv-logo flex-shrink-0" src={logo} alt="company logo" />
      <div className="min-w-0">
        <p className="cv-exp-title">
          {name}, <span className="cv-exp-role">{role}</span>
        </p>
        {date && <p className="cv-exp-date mt-0.5">{date}</p>}
        <ul className="cv-exp-list mt-2">
          {bullets.map((item, i) => (
            <li key={i} className="cv-exp-desc">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.node).isRequired,
  logo: PropTypes.any.isRequired,
  date: PropTypes.string,
};

export default Experience;
