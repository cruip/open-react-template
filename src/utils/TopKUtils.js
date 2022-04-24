import React from "react";
import Papa from "papaparse";
import ReactWordcloud from 'react-wordcloud';

export const TopK = (input) => {
  const [topKArr, setTopKArr] = React.useState([]);

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 90],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };

  React.useEffect(() => {
    console.log(input.country)
    Papa.parse(`/${input.country}_topk.csv`, {
      download: true,
      header: true,
      complete: data => {
        const dataOnDate = data.data.filter(row => row.date === input.dateProvided);
        const topKKeyValues = dataOnDate[0].content.split("\n");
        let arr = [];
        for (var i = 0; i < topKKeyValues.length - 1; i++) {
            const vals = topKKeyValues[i].slice(1, -1).split(", ");
            arr.push({text: vals[0], value: parseInt(vals[1])});
        }
        setTopKArr(arr);
      }
    });
  }, [input]);

  return (
    <ReactWordcloud options={options} words={topKArr} />
  );
}

export default TopK;