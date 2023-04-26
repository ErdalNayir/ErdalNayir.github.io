import "./App.css";
import Editor from "./modules/editor";
import Resume from "./modules/resume";
import ReactGA from "react-ga";
import { useEffect } from "react";

const TRACKING_ID = ""; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Resume></Resume>
      <Editor></Editor>
    </div>
  );
}

export default App;
