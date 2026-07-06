import "./App.css";
import Terminal from "./modules/editor";
import Resume from "./modules/resume";
import ReactGA from "react-ga4";
import { useEffect, useRef, useState } from "react";

const TRACKING_ID = "G-966Z2T6TGE";
const isProduction = process.env.NODE_ENV === "production";

// testMode keeps GA from sending real hits during local development,
// so your own dev sessions don't pollute production analytics.
ReactGA.initialize(TRACKING_ID, { testMode: !isProduction });

const MOBILE_QUERY = "(min-width: 1024px)";

function App() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia(MOBILE_QUERY).matches : true
  );
  const [resumeWidth, setResumeWidth] = useState(50); // percentage
  const draggingRef = useRef(false);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      const pct = (e.clientX / window.innerWidth) * 100;
      setResumeWidth(Math.min(80, Math.max(20, pct)));
    };
    const stop = () => {
      draggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
    };
  }, []);

  function startDrag() {
    draggingRef.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  }

  // Mobile / tablet: only the resume, no terminal.
  if (!isDesktop) {
    return (
      <div className="min-h-screen">
        <Resume />
      </div>
    );
  }

  // Desktop: resizable split.
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className="h-full overflow-hidden"
        style={{ width: `${resumeWidth}%` }}
      >
        <Resume />
      </div>
      <div
        className="split-gutter"
        onMouseDown={startDrag}
        role="separator"
        aria-orientation="vertical"
      />
      <div className="h-full overflow-hidden flex-1 min-w-0">
        <Terminal />
      </div>
    </div>
  );
}

export default App;
