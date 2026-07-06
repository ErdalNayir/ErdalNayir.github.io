import React, { useState, useEffect, useRef } from "react";
import "../styles/editorStyles.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { updateLine } from "../Redux/EditorSlice/editorSlice";
import { urls } from "../data";
import useAnalyticsEventTracker from "../analytics/AnalyticsEventTracker";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Line({ indent = 0, children }) {
  return (
    <div className="code-line">
      <span
        className="code-content"
        style={{ paddingLeft: `${indent * 1.4}rem` }}
      >
        {children}
      </span>
    </div>
  );
}

function Editor() {
  const dispatcher = useDispatch();
  const data = useSelector((state) => state.cmmtSlc.commentLines);
  const dataText = useSelector((state) => state.cmmtSlc.LinesText);
  const gaProject = useAnalyticsEventTracker("Project");
  const gaTerminal = useAnalyticsEventTracker("Terminal");

  const [isUncommented, setUncommented] = useState(false);
  const [termLines, setTermLines] = useState([
    { type: "dim", text: "*  Welcome to the ErdalNayirResume dev terminal" },
    { type: "dim", text: "*  Uncomment one line above, then press \u25B6 Run" },
    { type: "dim", text: "*  or type 'dotnet run' below and hit Enter." },
  ]);
  const [running, setRunning] = useState(false);
  const [problems, setProblems] = useState(0);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const termBodyRef = useRef(null);
  const runningRef = useRef(false);
  const inputRef = useRef(null);

  function handleInputText(event) {
    dispatcher(updateLine({ value: event.target.value, key: event.target.name }));
  }

  async function streamAppend(seq) {
    for (const line of seq) {
      await sleep(line.delay ?? 260);
      setTermLines((prev) => [...prev, line]);
    }
  }

  async function runDotnet() {
    if (runningRef.current) return;
    runningRef.current = true;
    setRunning(true);

    const active = Object.keys(data).filter((k) => data[k] === "");

    if (active.length === 1) {
      const key = active[0];
      const url = urls[key];
      await streamAppend([
        { type: "dim", text: "Building...", delay: 500 },
        { type: "dim", text: "  Determining projects to restore..." },
        {
          type: "dim",
          text: "  Restored C:\\ErdalNayirResume\\ErdalNayirResume.csproj (in 412 ms).",
        },
        {
          type: "dim",
          text: "  ErdalNayirResume -> C:\\ErdalNayirResume\\bin\\Debug\\net8.0\\ErdalNayirResume.dll",
          delay: 420,
        },
        { type: "success", text: "Build succeeded in 2.3s", delay: 380 },
        { type: "info", text: "info: Microsoft.Hosting.Lifetime[14]" },
        { type: "info", text: "      Now listening on: https://localhost:5001" },
        { type: "info", text: "info: Microsoft.Hosting.Lifetime[0]" },
        {
          type: "info",
          text: "      Application started. Press Ctrl+C to shut down.",
        },
        {
          type: "success",
          text: `info: ResumeController[200] Executing ViewResult -> opening ${url}`,
          delay: 420,
        },
      ]);
      setProblems(0);
      gaTerminal("build_succeeded", key);
      gaProject("open_project", key);
      window.open(url, "_blank", "noreferrer");
    } else if (active.length > 1) {
      await streamAppend([
        { type: "dim", text: "Building...", delay: 500 },
        {
          type: "error",
          text: "Controllers/ResumeController.cs(42,25): error CS0128: A local variable named 'result' is already defined in this scope [C:\\ErdalNayirResume\\ErdalNayirResume.csproj]",
          delay: 420,
        },
        { type: "text", text: "" },
        { type: "error", text: "Build FAILED." },
        { type: "dim", text: "    0 Warning(s)" },
        { type: "error", text: `    ${active.length} Error(s)` },
        { type: "dim", text: "Time Elapsed 00:00:01.64" },
      ]);
      setProblems(active.length);
      gaTerminal("build_failed", "CS0128_multiple_lines");
    } else {
      await streamAppend([
        { type: "dim", text: "Building...", delay: 500 },
        {
          type: "error",
          text: "Controllers/ResumeController.cs(41,25): error CS0103: The name 'result' does not exist in the current context [C:\\ErdalNayirResume\\ErdalNayirResume.csproj]",
          delay: 420,
        },
        { type: "text", text: "" },
        { type: "error", text: "Build FAILED." },
        { type: "dim", text: "    0 Warning(s)" },
        { type: "error", text: "    1 Error(s)" },
        { type: "dim", text: "Time Elapsed 00:00:01.51" },
      ]);
      setProblems(1);
      gaTerminal("build_failed", "CS0103_no_line");
    }

    runningRef.current = false;
    setRunning(false);
  }

  function handleRunButton() {
    if (runningRef.current) return;
    gaTerminal("run_button", "dotnet run");
    setTermLines((prev) => [
      ...prev,
      { type: "cmd", text: "PS C:\\ErdalNayirResume> dotnet run" },
    ]);
    runDotnet();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleCommand();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  }

  function handleCommand() {
    if (runningRef.current) return;
    const cmd = input.trim().replace(/\s+/g, " ");
    setInput("");
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    gaTerminal("command", cmd);

    setTermLines((prev) => [
      ...prev,
      { type: "cmd", text: `PS C:\\ErdalNayirResume> ${cmd}` },
    ]);

    if (cmd === "cls" || cmd === "clear") {
      setTimeout(() => setTermLines([]), 0);
      return;
    }
    if (cmd === "dotnet run" || cmd === "dotnet build") {
      runDotnet();
      return;
    }
    const bin = cmd.split(" ")[0];
    setTermLines((prev) => [
      ...prev,
      {
        type: "error",
        text: `${bin} : The term '${bin}' is not recognized as a name of a cmdlet, function, script file, or operable program.`,
      },
    ]);
  }

  useEffect(() => {
    setUncommented(Object.keys(data).some((k) => data[k] === ""));
  }, [data]);

  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [termLines]);

  return (
    <div className="vscode-window w-full h-full flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0">
        {/* Activity bar */}
        <div className="vscode-activitybar flex flex-col items-center py-3 gap-4 flex-shrink-0">
          <Icon icon="codicon:files" className="ab-icon ab-active" />
          <Icon icon="codicon:search" className="ab-icon" />
          <Icon icon="codicon:source-control" className="ab-icon" />
          <Icon icon="codicon:debug-alt" className="ab-icon" />
          <Icon icon="codicon:extensions" className="ab-icon" />
          <div className="mt-auto flex flex-col gap-4">
            <Icon icon="codicon:account" className="ab-icon" />
            <Icon icon="codicon:settings-gear" className="ab-icon" />
          </div>
        </div>

        {/* Editor column */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Tab bar */}
          <div className="vscode-tabbar flex items-stretch flex-shrink-0">
            <div className="vscode-tab flex items-center gap-2 px-3">
              <Icon icon="vscode-icons:file-type-csharp2" className="tab-file-icon" />
              <span className="tab-name">ResumeController.cs</span>
              <Icon icon="codicon:close" className="tab-close" />
            </div>
            <div className="flex-1" />
            <button
              onClick={handleRunButton}
              disabled={running}
              className="vscode-run flex items-center gap-1.5 px-3"
            >
              <Icon
                icon={running ? "codicon:loading" : "codicon:play"}
                className={`run-icon ${running ? "run-spin" : ""}`}
              />
              <span>{running ? "Running" : "Run"}</span>
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="vscode-breadcrumb flex items-center gap-1 px-4 flex-shrink-0">
            <Icon icon="vscode-icons:default-folder-opened" className="crumb-icon" />
            <span className="crumb">ErdalNayirResume</span>
            <Icon icon="codicon:chevron-right" className="crumb-sep" />
            <span className="crumb">Controllers</span>
            <Icon icon="codicon:chevron-right" className="crumb-sep" />
            <Icon icon="vscode-icons:file-type-csharp2" className="crumb-icon" />
            <span className="crumb">ResumeController.cs</span>
            <Icon icon="codicon:chevron-right" className="crumb-sep" />
            <Icon icon="codicon:symbol-method" className="crumb-icon crumb-method" />
            <span className="crumb">Index()</span>
          </div>

          {/* Code area */}
          <div className="vscode-editor flex-1 min-h-0 overflow-y-auto code-body py-2">
            <Line>
              <span className="keywordColor">using</span>{" "}
              <span className="textColor">Microsoft.AspNetCore.Mvc;</span>
            </Line>
            <Line>{"\u00A0"}</Line>

            <Line>
              <span className="keywordColor">namespace</span>
              <span className="namespaceColor"> ErdalNayirResume.Controllers</span>
              <span className="textColor">;</span>
            </Line>
            <Line>{"\u00A0"}</Line>

            <Line>
              <span className="keywordColor">public class</span>
              <span className="className"> ResumeController</span>
              <span className="textColor"> : </span>
              <span className="className">Controller</span>
            </Line>
            <Line>
              <span className="textColor">{"{"}</span>
            </Line>

            <Line indent={1}>
              <span className="keywordColor">private readonly</span>
              <span className="interface"> IRepository</span>
              <span className="textColor">{"<"}</span>
              <span className="className">ResumeInfo</span>
              <span className="textColor">{"> "}</span>
              <span className="fieldColor">_resumeRepository;</span>
            </Line>
            <Line>{"\u00A0"}</Line>

            <Line indent={1}>
              <span className="keywordColor">public</span>
              <span className="className"> ResumeController</span>
              <span className="textColor">(</span>
              <span className="interface">IRepository</span>
              <span className="textColor">{"<"}</span>
              <span className="className">ResumeInfo</span>
              <span className="textColor">{"> "}</span>
              <span className="variables">resumeRepository</span>
              <span className="textColor">)</span>
            </Line>
            <Line indent={1}>
              <span className="textColor">{"{"}</span>
            </Line>
            <Line indent={2}>
              <span className="fieldColor">_resumeRepository</span>
              <span className="textColor"> = </span>
              <span className="variables">resumeRepository</span>
              <span className="textColor">;</span>
            </Line>
            <Line indent={1}>
              <span className="textColor">{"}"}</span>
            </Line>
            <Line>{"\u00A0"}</Line>

            <Line indent={1}>
              <span className="textColor">[</span>
              <span className="className">HttpGet</span>
              <span className="textColor">]</span>
            </Line>
            <Line indent={1}>
              <span className="keywordColor">public</span>
              <span className="interface"> IActionResult</span>
              <span className="function"> Index</span>
              <span className="textColor">()</span>
            </Line>
            <Line indent={1}>
              <span className="textColor">{"{"}</span>
            </Line>
            <Line indent={2}>
              <span className="keywordColor">var</span>
              <span className="variables"> infos</span>
              <span className="textColor"> = _resumeRepository.</span>
              <span className="function">GetAllInfos</span>
              <span className="textColor">();</span>
            </Line>
            <Line>{"\u00A0"}</Line>

            <Line indent={2}>
              <span className="comment">// To view info, uncomment a row below</span>
            </Line>

            {/* Interactive commented lines */}
            {Object.keys(data).map((key) => (
              <div className="code-line" key={key}>
                <span
                  className={`code-content flex items-center ${
                    data[key].length !== 0 ? "comment" : ""
                  }`}
                  style={{ paddingLeft: "2.8rem" }}
                >
                  <input
                    className="code-comment-input focus:outline-none"
                    type="text"
                    value={data[key]}
                    onChange={handleInputText}
                    name={key}
                    maxLength={2}
                    spellCheck={false}
                  />
                  {data[key].length === 0 ? (
                    <span>
                      <span className="keywordColor">
                        {dataText[key].split(" ")[0]}
                      </span>
                      <span className="variables">
                        {" " + dataText[key].split(" ")[1]}
                      </span>
                      <span className="textColor">
                        {" " + dataText[key].split(" ")[2]}
                      </span>
                      <span className="variables">
                        {" " + dataText[key].split(" ")[3].split(".")[0] + "."}
                      </span>
                      <span className="propertyColor">
                        {dataText[key].split(" ")[3].split(".")[1]}
                      </span>
                      <span className="textColor">;</span>
                    </span>
                  ) : (
                    <span>{dataText[key]};</span>
                  )}
                </span>
              </div>
            ))}
            <Line>{"\u00A0"}</Line>

            <Line indent={2}>
              <span className="retNCont">return</span>
              <span className="function"> View</span>
              <span className="textColor">(</span>
              <span
                className={
                  isUncommented
                    ? "variables"
                    : "variables underline decoration-red-500 decoration-wavy decoration-2"
                }
              >
                result
              </span>
              <span className="textColor">);</span>
            </Line>
            <Line indent={1}>
              <span className="textColor">{"}"}</span>
            </Line>
            <Line>
              <span className="textColor">{"}"}</span>
            </Line>
            <Line>{"\u00A0"}</Line>
          </div>

          {/* Integrated terminal panel */}
          <div className="vscode-panel flex flex-col flex-shrink-0">
            <div className="panel-tabs flex items-center px-3">
              <span className="panel-tab">PROBLEMS</span>
              <span className="panel-tab">OUTPUT</span>
              <span className="panel-tab">DEBUG CONSOLE</span>
              <span className="panel-tab panel-tab-active">TERMINAL</span>
              <div className="flex-1" />
              <span className="panel-shell">pwsh</span>
              <Icon
                icon="codicon:trash"
                className="panel-action"
                onClick={() => setTermLines([])}
                title="Clear terminal"
              />
            </div>
            <div
              ref={termBodyRef}
              className="panel-body"
              onClick={() => inputRef.current && inputRef.current.focus()}
            >
              {termLines.map((line, i) => (
                <div key={i} className={`term-line term-${line.type}`}>
                  {line.text || "\u00A0"}
                </div>
              ))}
              {running ? (
                <div className="term-line term-dim">
                  <span className="term-caret">▋</span>
                </div>
              ) : (
                <div className="term-line term-inputline flex items-center">
                  <span className="term-prompt whitespace-pre">
                    {"PS C:\\ErdalNayirResume> "}
                  </span>
                  <input
                    ref={inputRef}
                    className="term-input flex-1 focus:outline-none"
                    value={input}
                    spellCheck={false}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="vscode-statusbar flex items-center flex-shrink-0">
        <div className="sb-item sb-accent flex items-center gap-1">
          <Icon icon="codicon:source-control" />
          <span>main</span>
        </div>
        <div className="sb-item flex items-center gap-2">
          <span className="flex items-center gap-1">
            <Icon icon="codicon:error" /> {problems}
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="codicon:warning" /> 0
          </span>
        </div>
        <div className="flex-1" />
        <div className="sb-item">Ln 22, Col 9</div>
        <div className="sb-item">Spaces: 4</div>
        <div className="sb-item">UTF-8</div>
        <div className="sb-item">CRLF</div>
        <div className="sb-item flex items-center gap-1">
          <Icon icon="vscode-icons:file-type-csharp2" />
          <span>C#</span>
        </div>
        <div className="sb-item">
          <Icon icon="codicon:bell" />
        </div>
      </div>
    </div>
  );
}

export default Editor;
