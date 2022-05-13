import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { PayrollProps } from "../../../../../types/models/information";
import TableSalary from "../components/TableSalary";
import employeeApi from "../../../../../api/employeeApi";
import OverviewSalary from "../components/OverviewSalary";

interface Props {
  ProfileID: any;
  earnings?: number;
}

const PayrollPage = ({ ProfileID, earnings }: Props) => {
  const [payroll, setPayroll] = useState<PayrollProps[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const payroll = await employeeApi.getPayrollDetail(ProfileID);
        setPayroll(payroll.data);
      } catch (error) {}
    })();
  }, []);
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
