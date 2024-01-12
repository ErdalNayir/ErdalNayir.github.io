import React from "react";
import SideBar from "../components/sideBar";
import Technologies from "../components/technologies";
import Education from "../components/education";
import Experience from "../components/experience";

function Resume() {
  return (
    <div className="flex flex-row overflow-hidden	">
      <SideBar></SideBar>
      <div className="ml-16 lg:mt-8 lg:ml-0">
        <div className="flex flex-row  gap-x-32  lg:transition-shadow  duration-300">
          <div className="mt-16 ml-4  lg:transition-shadow flex-1 duration-300">
            <h2 className="text-4xl ">Erdal NAYİR</h2>
            <p className="font-bold mt-4 mb-2 text-sm">
              Software Engineer Candidate
            </p>
            <div className="w-80 lg:w-full">
              I am 4th grade computer science student at Bursa Technical
              University. I love experiencing new technologies. I spend the most
              of my time with activities that improve my current skills and
              knowledge.
            </div>
          </div>
          <img
            className="mt-8 mr-16 lg:transition-shadow w-[13rem] h-[13rem] lg:hidden flex-2 duration-300 md:hidden lg:hidden xl:hidden"
            src={require("../assets/images/ProfileImg.jpg")}
            alt="profile "
          />
        </div>
        <div className="ml-4 mt-8">
          <u>
            <h2 className=" font-bold text-2xl mb-6">Education</h2>
          </u>
          <Education
            name="Bursa Technical University"
            field="Computer Engineering"
            abb="C.E."
            gpa={3.42}
            logo={require("../assets/images/btuLogo.jpg")}
          />
        </div>
        <div className="ml-4 mt-12 mb-16">
          <u>
            <h2 className=" font-bold text-2xl mb-6">Experience</h2>
          </u>
          <Experience
            logo={require("../assets/images/MoskLogo.jpg")}
            name="MOSK Bilişim"
            role="Intern"
            description="I have created frontend side of GIS app. I have used leaflet.js,
                react.js while creating the app"
          />
          <Experience
            logo={require("../assets/images/tubitakLogo.png")}
            name="Tubitak Project"
            role="Scholarship"
            description=" I am part of the project. My role in the project is creating
            academic reports"
            detail=" creating academic summarization, searching similar patents. I
            have been tasked with all those problem and expected to use
            english"
          />
          <Experience
            logo={require("../assets/images/ozdilekLogo.jpg")}
            name="Özdilek Holding"
            role="Back-end Developer"
            description=" I have worked in R&D center of Özdilek Holding for 6 months"
            detail=" My job is assist back-end team for TagSpot project. I have used clean architecture, CQRS, .NET, Azure Devops and so on to help my team"
          />
        </div>
        <Technologies></Technologies>
      </div>
    </div>
  );
}

export default Resume;
