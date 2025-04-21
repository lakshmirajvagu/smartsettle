import { Grid } from "@mui/material";
import { Graph as ReactGraph } from "react-d3-graph";

const OutputGraph = ({ graphData, graphHeader, graphConfig }) => {
  return (
    <Grid item xs={12} md={6} style={{ height: "100%" }}>
      {Object.keys(graphData).length && Object.keys(graphConfig).length ? (
        <>
          <h4>{graphHeader}</h4>
          <div style={{ height: "600px", width: "100%" }}>
            <ReactGraph
              id="graph-id-output"
              data={graphData}
              config={graphConfig}
            />
          </div>
        </>
      ) : null}
    </Grid>
  );
};

export default OutputGraph;
