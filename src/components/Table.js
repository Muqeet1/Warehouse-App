import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useFetch, useManufacturer } from "../hooks";



const Table = ({ products, data }) => {


  const columns = [
    { field: "id", headerName: "ID", width: 230 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "color", headerName: "Color", width: 120 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "manufacturer", headerName: "Manufacturer", width: 150 },
    { field: "DATAPAYLOAD", headerName: "Availability", width: 150 },
  ];
  

  return (
    <div style={{ height: 1000, width: "100%" }}>
      {data ? <DataGrid rows={data} columns={columns} pageSize={17} /> : null}
    </div>
  );
};

export default Table;
