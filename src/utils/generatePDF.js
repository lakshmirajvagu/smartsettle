import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generatePDF = (outputList, inputTableData) => {
  const doc = new jsPDF();

  // Page 1: Summary
  doc.setFontSize(18);
  doc.text("Simplified Transactions", 20, 20);

  let y = 30;
  doc.setFontSize(12);
  outputList.forEach((transaction, index) => {
    doc.text(`${index + 1}. ${transaction.person1} pays ${transaction.person2} ${transaction.amount}`, 20, y);
    y += 10;
  });

  // Page 2: Input Table
  doc.addPage();
  doc.setFontSize(18);
  doc.text("Input Table", 20, 20);

  autoTable(doc, {
    startY: 30,
    head: [['Transaction ID', 'Person 1', 'Person 2', 'Amount']],
    body: inputTableData.map((item, index) => [
      item.id || index + 1,
      item.person1,
      item.person2,
      item.amount,
    ]),
  });

  // Page 3: Output Table
  doc.addPage();
  doc.setFontSize(18);
  doc.text("Output Table (Simplified)", 20, 20);

  autoTable(doc, {
    startY: 30,
    head: [['Transaction ID', 'Person 1', 'Person 2', 'Amount']],
    body: outputList.map((item, index) => [
      item.id || index + 1,
      item.person1,
      item.person2,
      item.amount,
    ]),
  });

  doc.save("simplified_transactions.pdf");
};
