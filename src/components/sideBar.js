import React from "react";
import "../styles/resumeStyles.css";
import { Icon } from "@iconify/react";

function SideBar() {
  return (
    <div className="sidebar-rail w-14 flex-shrink-0 flex flex-col items-center justify-center gap-5 lg:w-full lg:flex-row lg:h-auto lg:py-3 lg:justify-center lg:gap-6">
      <a
        href="https://github.com/ErdalNayir"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
      >
        <Icon icon="ph:github-logo" color="white" fontSize={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/erdal-n-9754281b1/"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
      >
        <Icon icon="ri:linkedin-fill" color="white" fontSize={26} />
      </a>
      <a
        href="https://www.kaggle.com/erdal002"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
      >
        <Icon icon="cib:kaggle" color="white" fontSize={22} />
      </a>
      <a
        href="./doc/Erdal Nayir Resume-latest.pdf"
        download="ErdalNayirResume.pdf"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
      >
        <Icon icon="mdi:resume" color="white" fontSize={24} />
      </a>
      <a href="mailto:erdal.nayir2001@gmail.com" className="sidebar-icon">
        <Icon icon="ic:outline-email" color="white" fontSize={24} />
      </a>
    </div>
  );
}

export default SideBar;
