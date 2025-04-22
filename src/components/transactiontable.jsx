import { TableContainer, Paper, Table, TableBody } from "@mui/material";
import TableHeader from "./tableheader";
import TransactionInputRow from "./transactioninputrow";
import TransactionOutput from "./transactionoutput";

const TransactionTable = (props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHeader isInput={props.isInput} />
          <TableBody>
            {props.items && props.items.length > 0 &&
              props.items.map((row) => (
                <TransactionOutput key={row.id} row={row} />
              ))}
            {props.isInput ? (
              <TransactionInputRow
                allNames={props.allNames}
                addValues={props.addValues}
                finalValues={props.finalValues}
                handleFinalChange={props.handleFinalChange}
              />
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionTable;