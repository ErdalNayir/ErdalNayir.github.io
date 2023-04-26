import "./App.css";
import Editor from "./modules/editor";
import Resume from "./modules/resume";
import ReactGA from "react-ga";

const TRACKING_ID = "G-966Z2T6TGE"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div>
      <Resume></Resume>
      <Editor></Editor>
    </div>
  );
}

export default App;
