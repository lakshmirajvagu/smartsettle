import React from 'react';
import { Graph as ReactGraph } from 'react-d3-graph';

const Graph = ({ graphData, graphHeader, graphConfig }) => {
  return (
    <div className="graph-container">
      <h4>{graphHeader}</h4>
      <ReactGraph
        id="graph-id-output"
        data={graphData}
        config={graphConfig}
        style={{ width: "100%", height: "100%" }} // Full width and height
      />
    </div>
  );
};

export default Graph;
