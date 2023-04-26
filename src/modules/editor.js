import React, { useState, useEffect } from "react";
import "../styles/editorStyles.css";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateLine } from "../Redux/EditorSlice/editorSlice";
import ToastView from "../components/ToastView";
import { toast } from "react-toastify";
import { urls } from "../data";

function Editor() {
  const dispatcher = useDispatch();
  const data = useSelector((state) => state.cmmtSlc.commentLines);
  const dataText = useSelector((state) => state.cmmtSlc.LinesText);

  const [text, setText] = useState(dataText);
  const [isnUnComment, setUncomment] = useState(false);

  function handleInputText(event) {
    dispatcher(
      updateLine({ value: event.target.value, key: event.target.name })
    );
  }

  function handleRun() {
    var count = 0;
    Object.keys(data).map((key) => (data[key] === "" ? count++ : ""));

    if (count > 1) {
      toast.error("Please uncomment only one line", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (count === 1) {
      Object.keys(data).map((key) =>
        data[key] === "" ? window.open(urls[key], "_blank", "noreferrer") : ""
      );
    } else {
      toast.error("UndefinedVariableError:Result is not defined", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    var count = 0;
    Object.keys(data).map((key) => (data[key] === "" ? count++ : ""));

    count >= 1 ? setUncomment(true) : setUncomment(false);

    setText(dataText);
  }, [dataText, data]);

  return (
    <div>
      <ToastView></ToastView>
      <div className="fixed w-[50vw] h-[100vh] lg:w-[0vw] lg:h-[0vh] editorBackground text-white    bottom-0 right-0 pt-40 lg:hidden lg:transition  duration-300">
        <div className="text-sm font-sans fixed top-0 tabColor text-sm flex flex-row items-center">
          <hr className=" lineColor border-[1.8px]" />
          <p className="p-2 pb-[1px]   font-bold">
            ResumeController <span className="pl-6 text-sm">x</span>
          </p>
          <button
            onClick={handleRun}
            className="flex flex-row justify-center items-center gap-x-2 fixed right-5">
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
          <div className="text-sm font-sans fixed top-[400px] ml-36	mt-4">
            <span className="comment">
              //To view info uncomment the only one line before press run button
            </span>
          </div>
          <div className="text-sm font-sans fixed top-[420px] ml-36	mt-4">
            {Object.keys(data).map((key) => {
              return (
                <div key={key}>
                  {key === "cycamp" ? (
                    <p className="comment mt-6">
                      Some of my project that you can pay a visit{" "}
                    </p>
                  ) : (
                    ""
                  )}

                  <div
                    className={`flex flex-row gap-x-2 ${
                      data[key].length !== 0 ? "comment" : ""
                    } `}>
                    <input
                      className={`focus:outline-none inputBackground w-[1rem]`}
                      type="text"
                      value={data[key]}
                      onChange={handleInputText}
                      name={key}
                    />
                    {data[key].length === 0 ? (
                      <p>
                        {
                          <>
                            <span className="keywordColor">
                              {text[key].split(" ")[0]}
                            </span>
                            <span className="variables">
                              {" " + text[key].split(" ")[1]}
                            </span>
                            <span className="textColor">
                              {" " + text[key].split(" ")[2]}
                            </span>
                            <span className="variables">
                              {" " +
                                text[key].split(" ")[3].split(".")[0] +
                                "."}
                            </span>
                            <span className="textColor">
                              {text[key].split(" ")[3].split(".")[1]}
                            </span>
                          </>
                        }
                      </p>
                    ) : (
                      <p>{text[key]}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-sm font-sans fixed top-[625px] ml-36	mt-4">
            <span className="retNCont">return</span>
            <span className="function">
              {" "}
              View(
              <span
                className={
                  isnUnComment
                    ? "variables"
                    : "variables underline decoration-red-900 decoration-wavy decoration-2"
                }>
                result
              </span>
              );
            </span>
          </div>
          <div className="text-sm font-sans  ml-24 fixed top-[660px]	">
            <span className="textColor">
              <p>{"}"}</p>
            </span>
          </div>
          <div className="text-sm font-sans  ml-12 fixed top-[680px]	">
            <span className="textColor">
              <p>{"}"}</p>
            </span>
          </div>
          <div className="text-sm font-sans  fixed top-[700px]	">
            <span className="textColor">
              <p>{"}"}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
