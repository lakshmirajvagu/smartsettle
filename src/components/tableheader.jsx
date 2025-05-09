import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = ({ isInput }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Payer</TableCell>
        <TableCell align="center">Payee</TableCell>
        <TableCell align="center">Amount</TableCell>
        {isInput ? <TableCell align="center">Add</TableCell> : null}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;