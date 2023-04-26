import React from "react";
import SideBar from "../components/sideBar";
import Technologies from "../components/technologies";

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
              I am 3rd grade computer science student at Bursa Technical
              University. I love experiencing new technologies. I spend the most
              of my time with activities that improve my current skills and
              knowledge.
            </div>
          </div>
          <img
            className="mt-8 mr-16 lg:transition-shadow lg:hidden flex-2 duration-300"
            src={require("../assets/images/photo_2021-12-29_16-26-58.jpg")}
            alt="profile "
            height={"200px"}
            width={"200px"}
          />
        </div>
        <div className="ml-4 mt-8">
          <u>
            <h2 className=" font-bold text-2xl mb-6">Education</h2>
          </u>
          <div className="mt-4 flex flex-row gap-x-4">
            <img
              src={require("../assets/images/btuLogo.jpg")}
              height={"50px"}
              width={"50px"}
              alt="Btu Logo"></img>
            <div>
              <p className="font-bold text-lg lg:text-md">
                Bursa Technical University,
                <span className="lg:hidden"> Computer Engineering</span>
                <span className="hidden lg:inline"> C.E.</span>
              </p>
              <p className="text-gray-500">GPA: 3.42</p>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-12 mb-16">
          <u>
            <h2 className=" font-bold text-2xl mb-6">Experience</h2>
          </u>
          <div className="mt-4 flex flex-row gap-x-4">
            <img
              src={require("../assets/images/MoskLogo.jpg")}
              height={"50px"}
              width={"50px"}
              alt="Mosk Bilişim"></img>
            <div>
              <p className="font-bold text-lg">MOSK Bilişim, Intern </p>
              <div className=" text-gray-500 indent-4 w-[36rem] lg:w-full">
                I have created frontend side of GIS app. I have used leaflet.js,
                react.js while creating the app
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-row gap-x-4">
            <img
              src={require("../assets/images/tubitakLogo.png")}
              height={"50px"}
              width={"50px"}
              alt="Tubitak"></img>
            <div>
              <p className="font-bold text-lg">Tubitak Project, Scholarship </p>
              <div className=" text-gray-500 indent-4 w-[35rem] lg:w-full">
                I am part of the project. My role in the project is creating
                academic reports{" "}
                <span className="lg:hidden">
                  creating academic summarization, searching similar patents. I
                  have been tasked with all those problem and expected to use
                  english
                </span>
              </div>
            </div>
          </div>
        </div>
        <Technologies></Technologies>
      </div>
    </div>
  );
}

export default Resume;
