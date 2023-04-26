import "./App.css";
import Editor from "./modules/editor";
import Resume from "./modules/resume";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <Resume></Resume>
      <Editor></Editor>
    </div>
  );
}

export default App;
