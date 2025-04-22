import React, { useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";

const Graph = ({ graphData, graphHeader }) => {
  const [graphWidth, setGraphWidth] = useState(window.innerWidth < 600 ? window.innerWidth - 40 : 600); // Adjust width based on screen size
  const [graphHeight, setGraphHeight] = useState(window.innerWidth < 600 ? window.innerHeight / 2 : 400); // Adjust height based on screen size

  // Helper to curve bidirectional links
  const getLinkCurvature = (link) => {
    const key = [link.source, link.target].sort().join("-");
    return link.source < link.target ? 0.2 : -0.2;
  };

  // Resize handler for dynamic resizing of the graph
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setGraphWidth(window.innerWidth - 40); // Set width based on screen size
      setGraphHeight(window.innerHeight / 2); // Adjust height for mobile view
    } else {
      setGraphWidth(600); // Set fixed width for larger screens
      setGraphHeight(400); // Set fixed height for larger screens
    }
  };

  // Add resize event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
      <div style={{ width: graphWidth, height: graphHeight, flex: 1, minWidth: '300px' }}>
        <h4>{graphHeader}</h4>
        <ForceGraph3D
          graphData={graphData}
          nodeLabel="id"
          nodeAutoColorBy="id"
          linkDirectionalArrowLength={3.5}
          linkDirectionalArrowRelPos={1}
          linkCurvature={getLinkCurvature}
          linkLabel={(link) => `₹${link.amount}`}
          width={graphWidth}
          height={graphHeight}
        />
      </div>
    </div>
  );
};

export default Graph;
