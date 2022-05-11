import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import ButtonBase from "@mui/material/ButtonBase";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EnhancedTableHead from "./EnhancedTableHead";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { InformationProps } from "../../../types/models/information";
import { useHistory } from "react-router-dom";

interface Props {
  listMember: InformationProps[];
}

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

export default function TableCustomer({ listMember }: Props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const dense = true;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const history = useHistory();
  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds = listMember.map((n) => n.first_name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: any, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: any = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected?.slice(1));
    } else if (selectedIndex === selected?.length - 1) {
      newSelected = newSelected.concat(selected?.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected?.slice(0, selectedIndex),
        selected?.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  const [value, setValue] = React.useState("");
  const handleChangeSearch = (event: any) => {
    setValue(event.target.value);
  };
  const renderRole = (role: string) => {
    if (role === "Manager")
      return (
        <Chip
          label="Manager"
          sx={{
            color: "rgb(255, 193, 7)",
            backgroundColor: "rgb(255, 248, 225)",
            "&:hover": {
              color: "#F3E6E6",
              backgroundColor: "#DFDF2F",
            },
          }}
        ></Chip>
      );
    if (role === "Employee")
      return (
        <Chip
          label="Employee"
          sx={{
            color: "rgb(198, 40, 40)",
            backgroundColor: "(239, 154, 154, 0.376)",
            "&:hover": {
              color: "#C34747",
              backgroundColor: "#C31818",
            },
          }}
        ></Chip>
      );
    return (
      <Chip
        label="Admin"
        sx={{
          color: "rgb(33, 150, 243)",
          backgroundColor: "rgb(227, 242, 253)",
          "&:hover": {
            color: "#F3E6E6",
            backgroundColor: "#0569C0",
          },
        }}
      ></Chip>
    );
  };

  const toProfilePage = (idMember: number) => {
    return history.push(`/profile/${idMember}`);
  };
  return (
    <Box sx={{ width: "70%", borderRadius: "12px", backgroundColor: "white" }}>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          margin: "20px",
        }}
      >
        <Box>
          <OutlinedInput
            sx={{
              borderRadius: "12px",
              paddingLeft: "14px",
              lineHeight: "1.4375em",
            }}
            id="input-search-card-style1"
            value={value}
            onChange={handleChangeSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search Customer"
          />
        </Box>
        <Box
          sx={{
            textAlign: "right",
            "& .MuiButtonBase-root": {
              padding: "12px",
              borderRadius: "50%",
              color: "rgba(0, 0, 0, 0.54)",
            },
          }}
        >
          <ButtonBase>
            <AddIcon />
          </ButtonBase>
        </Box>
      </Box>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={listMember.length}
          />
          <TableBody>
            {stableSort(listMember, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((member: InformationProps, index: any) => {
                const fullName: string = member.first_name + member.last_name;
                const isItemSelected = isSelected(fullName);
                const labelId = `enhanced-table-checkbox-${index}`;
                const name = fullName.toLowerCase();
                if (value === "" || name.includes(value.toLowerCase())) {
                  return (
                    <TableRow
                      sx={{
                        "& .MuiTableCell-root": {
                          padding: "16px",
                        },
                      }}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={fullName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, fullName)}
                          sx={{ paddingLeft: "0px" }}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ cursor: "pointer" }}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={() => toProfilePage(member.id)}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            lineHeight: "1.75",
                            color: "rgb(33, 33, 33)",
                          }}
                        >
                          {fullName}
                        </Typography>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "rgb(158, 158, 158)",
                            fontWeight: "400",
                            lineHeight: "1.66",
                          }}
                        >
                          {member.email}
                        </span>
                      </TableCell>

                      <TableCell>{member.location}</TableCell>
                      <TableCell>{member.join_date}</TableCell>
                      <TableCell align="center">
                        {renderRole(member.role)}
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ButtonBase
                            sx={{
                              color: "rgb(33, 150, 243)",
                              padding: "12px",
                              fontSize: "1.75rem",
                            }}
                          >
                            <EditOutlinedIcon />
                          </ButtonBase>
                          <ButtonBase
                            sx={{
                              color: "rgb(103, 58, 183)",
                              padding: "12px",
                              fontSize: "1.75rem",
                            }}
                          >
                            <VisibilityTwoToneIcon />
                          </ButtonBase>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }
                return <></>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={listMember.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
