import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";

// Tracks when a section scrolls into view and how long it stays visible.
// Sends: Section/view (once) and Section/dwell_seconds (on exit/unmount).
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
          ReactGA.event({
            category: "Section",
            action: "dwell_seconds",
            label: name,
            value: secs,
          });
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enteredAt.current = Date.now();
          if (!viewSent.current) {
            viewSent.current = true;
            ReactGA.event({ category: "Section", action: "view", label: name });
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
          ReactGA.event({
            category: "Scroll",
            action: "depth",
            label: `${milestone}%`,
            value: milestone,
          });
        }
      });
    };

    // Capture phase so scroll events from inner scrollable elements are caught.
    window.addEventListener("scroll", handler, true);
    return () => window.removeEventListener("scroll", handler, true);
  }, [getScroller]);
}
