// Aurora.jsx
import React from "react";

const Aurora = ({
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
}) => {
  return (
    <div className="aurora-container absolute inset-0 z-0 overflow-hidden rounded-lg pointer-events-none">
      {colorStops.map((color, index) => {
        const size = `${20 + amplitude * 40}vw`;
        const blur = `${80 + amplitude * 40}px`;
        const duration = `${4 / speed + index * 1}s`;
        const delay = `${index * 0.5}s`;

        return (
          <div
            key={index}
            className="absolute rounded-full mix-blend-plus-lighter animate-aurora"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              opacity: blend,
              filter: `blur(${blur})`,
              animationDuration: duration,
              animationDelay: delay,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Aurora;
