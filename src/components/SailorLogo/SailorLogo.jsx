import React from "react";
import styles from "./sailorLogo.module.css";

const SailorLogo = () => {
  return (
    <div className="inline-block">
      <svg
        viewBox="0 0 218 95"
        className="w-[220px] md:w-[180px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main text */}
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={styles["sailor-animate"]}
        >
          Saılor
        </text>

        {/* Triangle */}
        <g transform="translate(-64, 8)">
          <polygon
            points="157,18 165,0 168,18"
            className={styles["triangle-animate"]}
          />
        </g>
      </svg>
    </div>
  );
};

export default SailorLogo;
