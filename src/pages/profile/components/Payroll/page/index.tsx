import React from "react";
import { Grid } from "@mui/material";
import { PayrollProps } from "../../../../../types/models/information";
import TableSalary from "../components/TableSalary";
import OverviewSalary from "../components/OverviewSalary";

interface Props {
  payroll: PayrollProps[];
  earnings?: number;
}

const PayrollPage = ({ payroll, earnings }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TableSalary payroll={payroll} earnings={earnings} />
      </Grid>
      <Grid item xs={4}>
        <OverviewSalary payroll={payroll} earnings={earnings} />
      </Grid>
    </Grid>
  );
};

export default PayrollPage;
