import React from "react";
import "../styles/resumeStyles.css";
import { Icon } from "@iconify/react";

function SideBar() {
  return (
    <div className="w-[3.3vw] h-[100vh] lg:h-[8.3vh] lg:w-[100vw] sideBarColor fixed top-0 left-0 flex flex-col lg:flex-row lg:gap-x-5  justify-center items-center	gap-y-3 lg:transition-shadow  duration-300	">
      <a href="https://github.com/ErdalNayir" target="_blank" rel="noreferrer">
        <Icon icon="ph:github-logo" color="white" fontSize={32} />
      </a>
      <a
        href="https://www.kaggle.com/erdal002"
        target="_blank"
        rel="noreferrer">
        <Icon icon="cib:kaggle" color="white" fontSize={28} />
      </a>
      <a
        href="./ErdalNayirCV.pdf"
        download={"ErdalNayirCV.pdf"}
        target="_blank"
        rel="noreferrer">
        <Icon icon="mdi:resume" color="white" fontSize={28} />
      </a>
      <a href="mailto:erdal.nayir2001@gmail.com">
        <Icon icon="ic:outline-email" color="white" fontSize={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/erdal-nayir-9754281b1/"
        target="_blank"
        rel="noreferrer">
        <Icon icon="ri:linkedin-fill" color="white" fontSize={28} />
      </a>
    </div>
  );
}

export default SideBar;
