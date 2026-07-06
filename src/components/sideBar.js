import React from "react";
import "../styles/resumeStyles.css";
import { Icon } from "@iconify/react";
import useAnalyticsEventTracker from "../analytics/AnalyticsEventTracker";

function SideBar() {
  const gaEvent = useAnalyticsEventTracker("Social");

  return (
    <div className="sidebar-rail w-14 flex-shrink-0 flex flex-col items-center justify-center gap-5 lg:w-full lg:flex-row lg:h-auto lg:py-3 lg:justify-center lg:gap-6">
      <a
        href="https://github.com/ErdalNayir"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "GitHub")}
      >
        <Icon icon="ph:github-logo" color="white" fontSize={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/erdal-n-9754281b1/"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "LinkedIn")}
      >
        <Icon icon="ri:linkedin-fill" color="white" fontSize={26} />
      </a>
      <a
        href="https://www.kaggle.com/erdal002"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "Kaggle")}
      >
        <Icon icon="cib:kaggle" color="white" fontSize={22} />
      </a>
      <a
        href="./doc/Erdal Nayir Resume-latest.pdf"
        download="ErdalNayirResume.pdf"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("download", "Resume PDF")}
      >
        <Icon icon="mdi:resume" color="white" fontSize={24} />
      </a>
      <a
        href="mailto:erdal.nayir2001@gmail.com"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "Email")}
      >
        <Icon icon="ic:outline-email" color="white" fontSize={24} />
      </a>
      <a
        href="https://orcid.org/0009-0007-9514-9463"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "ORCID")}
      >
        <Icon icon="simple-icons:orcid" color="white" fontSize={22} />
      </a>
      <a
        href="https://www.researchgate.net/profile/Erdal-Nayir-2"
        target="_blank"
        rel="noreferrer"
        className="sidebar-icon"
        onClick={() => gaEvent("click", "ResearchGate")}
      >
        <Icon icon="simple-icons:researchgate" color="white" fontSize={22} />
      </a>
    </div>
  );
}

export default SideBar;
