import ReactGA from "react-ga";

export const AnalyticsEventTracker = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
