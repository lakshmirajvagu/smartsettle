import React from "react";
import "./Instructions.css"; // Add custom CSS styling if needed

const HowItWorks = () => (
  <div className="instructions-container">
    <h2>How Smart Split Works</h2>
    <p>
      Smart Split is a simple tool that helps you split group expenses with ease. Follow these steps to get started:
    </p>

    <h3>Step 1: Enter Participants</h3>
    <p>
      Before you can split any expenses, you need to add the participants. Click on the "Add Participants" button in the home section to enter their names. At least two people are required to proceed.
    </p>

    <h3>Step 2: Input Transactions</h3>
    <p>
      After entering the participants, input the transactions. Click on the "Input Transactions" section, and enter the transaction details (who paid, who owes, and how much). You can input multiple transactions.
    </p>

    <h3>Step 3: View the Graph</h3>
    <p>
      The app will automatically generate a transaction graph for the entered data. This graph shows the flow of money between participants, helping you visualize who owes whom and how much.
    </p>

    <h3>Step 4: Simplify the Transactions</h3>
    <p>
      After entering transactions, Smart Split will calculate and show simplified transactions that tell you how much each person owes or is owed. This is shown in a simplified table and graph, making it easy to settle the debts.
    </p>

    <h3>Step 5: Download PDF</h3>
    <p>
      Once the transactions are simplified, you can download the results as a PDF. Click on the "Download PDF" button to save the simplified transactions and graph for your records.
    </p>

    

    <h3>Need Help?</h3>
    <p>
      If you need further assistance, feel free to reach out via email or the contact options provided in the "About Us" section.
    </p>
  </div>
);

export default HowItWorks;
