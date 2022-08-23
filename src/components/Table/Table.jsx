import React, { useState, useEffect } from "react";
import { fetchDataFromDb } from "../services";
import useStyles from "./styles";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  
  const [items, setItems] = useState([]);
  const classes = useStyles();

  const columns = [
    { field: "id", headerName: "ID", sortable: false, width: 230 },
    { field: "name", headerName: "Name", sortable: false, width: 230 },
    { field: "nic", headerName: "NIC", sortable: false, width: 230 },
    { field: "gender", headerName: "Gender", sortable: false, width: 270 },
  ];
  
  useEffect(async () => {
    const { data } = await fetchDataFromDb();
    const item = await data.map((item, i) => ({
      id: i,
      name: item.name,
      nic: item.nic,
      gender: item.gender,
    }));
    setItems(item);
  }, []);

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        className={classes.grid}
        rows={items}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Table;
