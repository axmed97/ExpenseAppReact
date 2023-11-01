import React from "react";

import "./chart.scss";
import CharBar from "./CharBar/CharBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <CharBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
