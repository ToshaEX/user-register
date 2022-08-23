import React,{useState,useEffect} from 'react'
import { fetchDataFromDb } from "../services";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableBd = () => {
    const [items, setItems] = useState([]);

    useEffect(async () => {
      const { data } = await fetchDataFromDb();
      setItems(data);
    }, []);

  return (
    <TableBody>
      {items.map((item) => (
        <TableRow
          key={item._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">{item.name}</TableCell>
          <TableCell>{item.nic}</TableCell>
          <TableCell>{item.gender}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableBd