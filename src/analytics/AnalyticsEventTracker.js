import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category = "Portfolio") => {
  const eventTracker = (action, label) => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEventTracker;
