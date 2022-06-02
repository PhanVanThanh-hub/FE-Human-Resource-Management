import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { PayrollProps } from "../../../types/models/information";
import TableSalary from "../components/TableSalary";
import OverviewSalary from "../components/OverviewSalary";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchData,
  selectPayroll,
} from "../../../redux/staff_payroll/staffPayrollSlice";
import StorageKeys from "../../../constants/storage-keys";

const PayrollPage = () => {
  const dispatch = useAppDispatch();
  const user = localStorage.getItem(StorageKeys.user) || "";
  const profile = JSON.parse(user);
  const payroll: PayrollProps[] = useAppSelector(selectPayroll);
  useEffect(() => {
    dispatch(fetchData(profile.slug));
  }, [dispatch, profile.slug]);
  return (
    <Box sx={{ marginTop: "90px", backgroundColor: "#e3f2fd" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <TableSalary payroll={payroll} earnings={profile.earnings} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <OverviewSalary payroll={payroll} earnings={profile.earnings} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PayrollPage;
