import React from "react";
import Graph from "./components/graph"; // make sure the path is correct

const App = () => {
  // Sample data
    const graphData = {
      nodes: [
        { id: "Node 1" },
        { id: "Node 2" },
        { id: "Node 3" },
      ],
      links: [
        { source: "Node 1", target: "Node 2" },
        { source: "Node 2", target: "Node 3" },
      ],
    };

  // Sample config
  const graphConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",  // Node color
      size: 300,            // Larger size for better visibility
      highlightStrokeColor: "blue", // Color of node when highlighted
      fontSize: 14,         // Font size for node text
      highlightFontSize: 16, // Font size for highlighted node
      fontWeight: "bold",   // Font weight for node text
    },
    link: {
      highlightColor: "lightblue",  // Link highlight color
      highlightWidth: 2,            // Link width when highlighted
    },
    directed: true,            // Directed graph (arrows showing direction)
    height: 600,               // Height of the graph container
    width: 800,                // Width of the graph container
    d3: {
      gravity: -300,           // Adjust gravity to spread out nodes
    },
  };
  
  return (
    <div style={{ padding: 20 }}>
      <Graph
        graphData={graphData}
        graphHeader="Sample Network Graph"
        graphConfig={graphConfig}
      />
    </div>
  );
};

export default App;
