import React, { useEffect } from "react";
import {
  InformationProps,
  GroupProps,
  PayrollProps,
} from "../../../types/models/information";
import { Grid } from "@mui/material";
import AmountUser from "../components/AmountUser";
import SalaryInMonth from "../components/SalaryInMonth";
import TotalSalary from "../components/TotalSalary";
import AmountGroup from "../components/AmountGroup";
import ListSalaryMember from "../components/ListSalaryMember";
import PayrollPerYear from "../components/PayrollPerYear";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchData,
  selectEmployeeList,
  selectGroupList,
  selectPayrollList,
} from "../../../redux/dashboard/dashboardSlice";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const employees: InformationProps[] = useAppSelector(selectEmployeeList);
  const groups: GroupProps[] = useAppSelector(selectGroupList);
  const payrolls: PayrollProps[] = useAppSelector(selectPayrollList);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={3}>
        <AmountUser employees={employees} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AmountGroup groups={groups} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalaryInMonth employees={employees} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalSalary payrolls={payrolls} />
      </Grid>
      <Grid item xs={6}>
        <ListSalaryMember employees={employees} />
      </Grid>
      <Grid item xs={6}>
        <PayrollPerYear />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
