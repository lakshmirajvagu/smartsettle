import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid, Button } from "@mui/material";

import Graph from "./components/graph";
import Names from "./components/names";
import Transactions from "./components/transactions";
import TransactionTable from "./components/transactiontable";
import OutputGraph from "./components/outputgraph";
import { generatePDF } from "./utils/generatePDF";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/Instructions"; // renamed usage

function App() {
  const [flag, setFlag] = useState(false);
  const [allNames, setAllNames] = useState([]);
  const [inputGraphData, setInputGraphData] = useState({ nodes: [], links: [] });
  const [outputList, setOutputList] = useState([]);
  const [outputGraphData, setOutputGraphData] = useState({ nodes: [], links: [] });
  const [items, setItems] = useState([]);
  const [activePage, setActivePage] = useState("main"); // 'main', 'about', 'howItWorks'

  useEffect(() => {
    console.log("inputGraphData updated:", inputGraphData);
  }, [inputGraphData]);

  const handleOpenForm = () => {
    if (allNames.length > 1) {
      setFlag(true);
    } else {
      alert("At least two people must be entered.");
    }
  };

  const handleDownloadPDF = () => {
    console.log("Output List for PDF:", outputList);
    console.log("Items for PDF:", items);

    if (outputList.length > 0) {
      generatePDF(outputList, items);
    }
  };

  return (
    <div className="App">
      {/* Sticky Header with Button */}
      <header className="app-header">
        <h1 className="app-title">Smart Split</h1>
        <div className="header-buttons">
          {/* Home Button */}
          <Button
            variant="contained"
            className="header-button"
            onClick={() => setActivePage("main")} // Set activePage to "main" to display the home page
          >
            Home
          </Button>
          
          <Button
            variant="contained"
            className="header-button"
            onClick={() => setActivePage("about")} // Update state to render AboutUs component
          >
            About Us
          </Button>
          <Button
            variant="contained"
            className="header-button"
            onClick={() => setActivePage("howItWorks")} // Update state to render HowItWorks component
          >
            Instructions
          </Button>
          <Button
            variant="contained"
            className="header-button"
            onClick={handleDownloadPDF}
            disabled={outputList.length === 0}
          >
            Download PDF
          </Button>
        </div>
      </header>

      {/* Page Routing */}
      {activePage === "about" && <AboutUs />} 
      {activePage === "howItWorks" && <HowItWorks />}
      {activePage === "main" && (
        <>
          <Names
            flag={flag}
            handleOpenForm={handleOpenForm}
            allNames={allNames}
            setAllNames={setAllNames}
          />

          {flag && (
            <>
              <Grid container spacing={3} className="input-section-container">
                <Grid item xs={12} md={6}>
                  <div className="input-box">
                    <h3>Input Transactions</h3>
                    <Transactions
                      flag={flag}
                      allNames={allNames}
                      items={items}
                      setItems={setItems}
                      inputGraphData={inputGraphData}
                      setInputGraphData={(newData) => setInputGraphData({ ...newData })}
                      setOutputList={setOutputList}
                      setOutputGraphData={setOutputGraphData}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="input-box graph-box">
                    <h3>Transactions Graph</h3>
                    <div className="graph-wrapper">
                      <Graph graphData={inputGraphData} />
                    </div>
                  </div>
                </Grid>
              </Grid>

              {outputList.length > 0 && (
                <Grid container spacing={3} className="output-section-container">
                  <Grid item xs={12} md={6}>
                    <div className="input-box simplified-transactions">
                      <h3>Simplified Transactions</h3>
                      <TransactionTable
                        isInput={false}
                        items={outputList}
                        tableHeader="Simplified Transactions"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="input-box graph-box">
                      <div className="graph-wrapper">
                        <OutputGraph
                          graphData={outputGraphData}
                          graphHeader="Simplified Graph"
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
