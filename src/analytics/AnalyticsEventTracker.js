import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "Portfolio", action, label) => {
  const eventTracker = (action, label) => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
