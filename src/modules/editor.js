import React from "react";
import "../styles/editorStyles.css";
import { Icon } from "@iconify/react";

function Editor() {
  return (
    <div className="fixed w-[50vw] h-[100vh] editorBackground text-white    bottom-0 right-0 pt-40 lg:hidden lg:transition  duration-300">
      <div className="text-lg font-sans fixed top-0 tabColor text-sm flex flex-row items-center">
        <hr className=" lineColor border-[1.8px]" />
        <p className="p-2 pb-[1px]   font-bold">
          ResumeController <span className="pl-6 text-sm">x</span>
        </p>
        <button className="flex flex-row justify-center items-center gap-x-2 fixed right-5">
          <Icon icon="codicon:debug-start" color="green" fontSize={24} />
          <p className="text-lg">Run</p>
        </button>
      </div>
      <hr className="top-[27px] w-screen fixed lineColor border-[1.5px]" />
      <div>
        <div className="text-lg font-sans fixed top-10	">
          <span className="keywordColor">using</span>{" "}
          <span className="textColor"> Microsoft.AspNetCore.Mvc;</span>
        </div>
        <div className="text-lg font-sans fixed top-[100px]	">
          <span className="keywordColor">namespace</span>
          <span className="textColor"> ErdalNayirResume.Controllers</span>
        </div>
        <div className="text-lg font-sans fixed top-[120px]	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-lg font-sans fixed top-[135px] ml-12	">
          <span className="keywordColor">public class</span>
          <span className="className"> ResumeController : Controller</span>
        </div>
        <div className="text-lg font-sans fixed top-[157px] ml-12	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-lg font-sans fixed top-[175px] ml-24	">
          <p>
            <span className="keywordColor">private readonly</span>
            <span className="interface">
              {" "}
              IRepository<span className="textColor">{"<"}</span>
              <span className="className">ResumeInfo</span>
              <span className="textColor">{">"}</span>
            </span>{" "}
            <span className="textColor">_resumeRepository;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Editor;
