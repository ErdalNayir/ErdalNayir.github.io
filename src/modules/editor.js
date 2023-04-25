import React, { useState } from "react";
import "../styles/editorStyles.css";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { value } from "../Redux/EditorSlice/editorSlice";

function Editor() {
  const [text, setText] = useState("// var result = infos.linkedln");
  const dispatcher = useDispatch();

  console.log(data);

  function handleInputText(event) {
    const words = event.target.value.split(" ");
    console.log(words);
    setText(event.target.value);
  }

  return (
    <div className="fixed w-[50vw] h-[100vh] editorBackground text-white    bottom-0 right-0 pt-40 lg:hidden lg:transition  duration-300">
      <div className="text-sm font-sans fixed top-0 tabColor text-sm flex flex-row items-center">
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
        <div className="text-sm font-sans fixed top-[30px]	">
          <span className="keywordColor">using</span>{" "}
          <span className="textColor"> Microsoft.AspNetCore.Mvc;</span>
        </div>
        <div className="text-sm font-sans fixed top-[100px]	">
          <span className="keywordColor">namespace</span>
          <span className="textColor"> ErdalNayirResume.Controllers</span>
        </div>
        <div className="text-sm font-sans fixed top-[120px]	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[135px] ml-12	">
          <span className="keywordColor">public class</span>
          <span className="className"> ResumeController : Controller</span>
        </div>
        <div className="text-sm font-sans fixed top-[157px] ml-12	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[175px] ml-24	">
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
        <div className="text-sm font-sans fixed top-[215px] ml-24	">
          <p>
            <span className="keywordColor">public</span>
            <span className="className"> ResumeController</span>
            <span className="textColor">
              (
              <span className="interface">
                IRepository<span className="textColor">{"<"}</span>
                <span className="className">ResumeInfo</span>
                <span className="textColor">{">"}</span>
              </span>
              <span className="variables"> resumeRepository</span>)
            </span>
          </p>
        </div>
        <div className="text-sm font-sans fixed top-[235px] ml-24	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[250px] ml-36	">
          <span className="textColor">_resumeRepository = </span>
          <span className="variables"> resumeRepository</span>
        </div>
        <div className="text-sm font-sans fixed top-[275px] ml-24	">
          <span className="textColor">
            <p>{"}"}</p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[320px] ml-24	">
          <span className="textColor">
            <p>
              {"["}
              <span className="className">HttpGet</span>
              {"]"}
            </p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[340px] ml-24	">
          <p>
            <span className="keywordColor">public</span>
            <span className="interface"> IActionResult</span>
            <span className="function"> Index</span>
            <span className="textColor">()</span>
          </p>
        </div>
        <div className="text-sm font-sans fixed top-[360px] ml-24	">
          <span className="textColor">
            <p>{"{"}</p>
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[375px] ml-36	">
          <span className="keywordColor">var</span>
          <span className="variables"> infos</span> =
          <span className="textColor">
            {" "}
            _resumeRepository.<span className="function">GetAllInfos</span>()
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[400px] ml-36	">
          <span className="comment">
            //To view info uncomment the only one line before press run button
          </span>
        </div>
        <div className="text-sm font-sans fixed top-[420px] ml-36	">
          <input
            className={`focus:outline-none inputBackground w-[${64}rem]`}
            type="text"
            value={text}
            onChange={handleInputText}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
