import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const removeAnims = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  const style = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "scale(1)",
    from: {
      transform: "scale(0.2)",
    },
    config: {
      tension: 125,
      friction: 8,
    },
    immediate: removeAnims,
  });
  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
