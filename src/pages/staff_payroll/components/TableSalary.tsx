import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { PayrollProps } from "../../../types/models/information";
import { formatPrice } from "../../../utils/helpers/function";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface Props {
  payroll: PayrollProps[];
  earnings?: number;
}

const TableSalary = ({ payroll, earnings }: Props) => {
  const renderIcon = (bonus: number) => {
    if (bonus > 0) {
      return (
        <ArrowUpwardIcon
          sx={{ color: "rgb(0, 200, 83)", marginRight: "5px" }}
        />
      );
    }
    if (bonus < 0) {
      return (
        <ArrowDownwardIcon
          sx={{ color: "rgb(244, 67, 54)", marginRight: "5px" }}
        />
      );
    }
    return (
      <ArrowRightAltIcon
        sx={{ color: "rgba(241, 243, 74, 0.8)", marginRight: "5px" }}
      />
    );
  };

  const renderBonus = (salary: number) => {
    const bonus = salary / (earnings! / 100) - 100;
    return (
      <Typography sx={{ display: "flex", justifyContent: "center" }}>
        {renderIcon(bonus)}
        {bonus.toFixed(1)}%
      </Typography>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              color: "red",
              "& .MuiTableCell-root": {
                fontWeight: "600",
                fontSize: "0.875rem",
                color: "rgb(33, 33, 33)",
              },
            }}
          >
            <TableCell>Date</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="center">Bonus</TableCell>
            <TableCell align="center">Extra Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payroll.map((value: PayrollProps) => {
            const extraMoney: number = value.salary - earnings!;
            return (
              <TableRow
                key={value.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {value.date}
                </TableCell>
                <TableCell align="right">{formatPrice(value.salary)}</TableCell>
                <TableCell align="center">
                  {renderBonus(value.salary)}
                </TableCell>
                <TableCell align="center">{formatPrice(extraMoney)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSalary;
