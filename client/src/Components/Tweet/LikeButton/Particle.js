import React from "react";
import { animated, useSpring } from "react-spring";

import { random } from "../../../utils";

const Particle = ({ distanceMax, distanceMin, angle, children }) => {
  const removeAnims = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;
  const angleInRads = convertDegreesToRadians(angle);

  const originX = Math.cos(angleInRads) * distanceMin;
  const originY = Math.sin(angleInRads) * distanceMin;

  const finalX = Math.cos(angleInRads) * distanceMax;
  const finalY = Math.sin(angleInRads) * distanceMax;

  let animDelay = 0;

  if (random(1, 6) <= 3) {
    animDelay = 300;
  }
  //console.log(animDelay);

  //console.log(x, y);

  const translationScaleStyle = useSpring({
    transform: `translate(${finalX}px,${finalY}px) scale(0.5)`,
    from: {
      transform: `translate(${originX}px,${originY}px) scale(1.2)`,
    },
    delay: animDelay,
    config: {
      tension: 100,
      friction: 12,
    },
  });

  const opacityStyle = useSpring({
    opacity: 0,
    from: {
      opacity: 1,
    },
    delay: animDelay + 200,
    config: {
      duration: 300,
    },
  });

  if (removeAnims) {
    return <></>;
  } else {
    return (
      <animated.div style={{ ...translationScaleStyle, ...opacityStyle }}>
        {children}
      </animated.div>
    );
  }
};

export default Particle;
