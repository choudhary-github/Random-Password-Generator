import React from "react";
import { Box } from "@mui/material";

function Svg({ color }) {
  return (
    <svg className="svg" width="12" height="42">
      <rect
        x="1"
        y="1"
        width="10"
        height="40"
        style={{
          fill: `${color}`,
          stroke: "#fff",
          strokeWidth: 1,
        }}
      />
    </svg>
  );
}

export default Svg;
