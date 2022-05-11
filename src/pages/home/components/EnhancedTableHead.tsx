import * as React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

interface Props {
  onSelectAllClick: any;
  order: any;
  orderBy: any;
  numSelected: any;
  rowCount: any;
  onRequestSort: any;
}

export default function EnhancedTableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: Props) {
  const headCells = [
    {
      id: "name",
      numeric: "left",
      disablePadding: true,
      label: "CustomerName",
    },
    {
      id: "location",
      numeric: "left",
      disablePadding: false,
      label: "Location",
    },
    {
      id: "registered",
      numeric: "left",
      disablePadding: false,
      label: "Registered",
    },
    {
      id: "role",
      numeric: "center",
      disablePadding: false,
      label: "Role",
    },
    {
      id: "Action",
      numeric: "center",
      disablePadding: false,
      label: "Action",
    },
  ];
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {numSelected > 0 ? (
          <TableCell sx={{ fontSize: "0.875rem", padding: "0px" }}>
            <EnhancedTableToolbar numSelected={numSelected} />
          </TableCell>
        ) : (
          <>
            {headCells.map((headCell) => (
              <TableCell
                sx={{ padding: "16px", textAlign: headCell.numeric }}
                key={headCell.id}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </>
        )}
      </TableRow>
    </TableHead>
  );
}
