/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const defaultStyle = {
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
};

const hiddenStyle = {
  opacity: 0,
  transform: "translate3d(0, 56px, 0)",
};

const transitionStyle = {
  transition:
    "opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
  willChange: "opacity, transform",
};

function ScrollReveal({ id, delay = 0, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -72px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      style={{
        ...transitionStyle,
        transitionDelay: `${delay}ms`,
        ...(isVisible ? defaultStyle : hiddenStyle),
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
