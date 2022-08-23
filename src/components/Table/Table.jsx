import React from "react";
import {TableBd} from "../index";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableView = () => {
  const tableRow = ["Name", "NIC", "Gender"];

  return (
    <Paper elevation={0}>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          
            <TableRow>
              {tableRow.map((value) => (
                <TableCell align="left">{value}</TableCell>
              ))}
            </TableRow>

          </TableHead>
                <TableBd/>
        </Table>
      </TableContainer>
    </Paper>
   
  );
};

export default TableView;
