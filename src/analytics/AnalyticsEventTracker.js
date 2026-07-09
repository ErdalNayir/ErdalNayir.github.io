import ReactGA from "react-ga4";

// Uses ReactGA's GA4-native event(name, params) form rather than the legacy
// {category, action, label} shape, which silently title-cases `action` into
// the event name (e.g. "click" -> "Click") and can collide with GA4's own
// automatically-collected events (outbound "click", "file_download", etc).
const useAnalyticsEventTracker = (category = "Portfolio") => {
  const eventTracker = (action, label) => {
    ReactGA.event(action, { category, label });
  };
  return eventTracker;
};

export default useAnalyticsEventTracker;
