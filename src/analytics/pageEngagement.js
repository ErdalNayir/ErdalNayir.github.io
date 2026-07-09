import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";

// Tracks when a section scrolls into view and how long it stays visible.
// Sends: section_view (once) and section_dwell (on exit/unmount).
export function useSectionTracker(name) {
  const ref = useRef(null);
  const enteredAt = useRef(null);
  const viewSent = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const flushDwell = () => {
      if (enteredAt.current) {
        const secs = Math.round((Date.now() - enteredAt.current) / 1000);
        enteredAt.current = null;
        if (secs > 0) {
          ReactGA.event("section_dwell", { section_name: name, seconds: secs });
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enteredAt.current = Date.now();
          if (!viewSent.current) {
            viewSent.current = true;
            ReactGA.event("section_view", { section_name: name });
          }
        } else {
          flushDwell();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      flushDwell();
      observer.disconnect();
    };
  }, [name]);

  return ref;
}

// Tracks max scroll depth (25/50/75/100%). getScroller returns the scrollable
// element on desktop; falls back to the window on mobile.
export function useScrollDepth(getScroller) {
  const sent = useRef(new Set());

  useEffect(() => {
    const handler = () => {
      const el = getScroller();
      let pct;
      if (el && el.scrollHeight > el.clientHeight + 4) {
        pct = ((el.scrollTop + el.clientHeight) / el.scrollHeight) * 100;
      } else {
        const doc = document.documentElement;
        pct = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
      }
      [25, 50, 75, 100].forEach((milestone) => {
        if (pct >= milestone && !sent.current.has(milestone)) {
          sent.current.add(milestone);
          ReactGA.event("scroll_depth", { percent: milestone });
        }
      });
    };

    // Capture phase so scroll events from inner scrollable elements are caught.
    window.addEventListener("scroll", handler, true);
    return () => window.removeEventListener("scroll", handler, true);
  }, [getScroller]);
}
