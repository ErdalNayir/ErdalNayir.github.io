import "./App.css";
import Terminal from "./modules/editor";
import Resume from "./modules/resume";
import ReactGA from "react-ga";
import { useEffect } from "react";

const TRACKING_ID = "G-966Z2T6TGE";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden lg:flex-col lg:h-auto lg:overflow-auto">
      <div className="w-1/2 h-full overflow-hidden lg:w-full lg:h-auto lg:overflow-visible">
        <Resume />
      </div>
      <div className="w-1/2 h-full overflow-hidden lg:w-full lg:h-[600px]">
        <Terminal />
      </div>
    </div>
  );
}

export default App;
