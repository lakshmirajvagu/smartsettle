import { Grid } from "@mui/material";
import { Graph as ReactGraph } from "react-d3-graph";
import PropTypes from "prop-types";

const Graph = ({ graphData, graphHeader, graphConfig }) => {
  return (
    <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      {Object.keys(graphData).length && Object.keys(graphConfig).length ? (
        <>
          <h4>{graphHeader}</h4>
          <div
            style={{
              width: "100%",
              height: "600px", // Fixed height to allow graph to be visible
              overflow: "hidden", // Prevent overflow issues
            }}
          >
            <ReactGraph
              id="graph-id-output"
              data={graphData}
              config={graphConfig}
              style={{ width: "100%", height: "100%" }} // Full width and height for the graph
            />
          </div>
        </>
      ) : (
        <p>No graph data available.</p>
      )}
    </Grid>
  );
};

Graph.propTypes = {
  graphData: PropTypes.shape({
    nodes: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
  graphHeader: PropTypes.string.isRequired,
  graphConfig: PropTypes.object.isRequired,
};

export default Graph;
