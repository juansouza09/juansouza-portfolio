import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";

let swupInstance;

export const initSwup = () => {
  if (typeof window === "undefined") {
    return null;
  }

  if (swupInstance) {
    return swupInstance;
  }

  const prefersReducedMotion = window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  swupInstance = new Swup({
    containers: [],
    linkSelector: "a[data-swup-link]",
    plugins: [
      new SwupScrollPlugin({
        doScrollingRightAway: true,
        animateScroll: prefersReducedMotion
          ? false
          : {
              betweenPages: true,
              samePageWithHash: true,
              samePage: true,
            },
      }),
    ],
  });

  return swupInstance;
};

export const destroySwup = async () => {
  if (!swupInstance) {
    return;
  }

  await swupInstance.destroy();
  swupInstance = undefined;
};
