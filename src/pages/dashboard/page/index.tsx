import React, { useEffect, useState } from "react";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";
import { Grid } from "@mui/material";
import AmountUser from "../components/AmountUser";
import SalaryInMonth from "../components/SalaryInMonth";
import TotalSalary from "../components/TotalSalary";
import AmountGroup from "../components/AmountGroup";
import ListSalaryMember from "../components/ListSalaryMember";
import PayrollPerYear from "../components/PayrollPerYear";

const DashboardPage = () => {
  const [employee, setEmployee] = useState<InformationProps[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const employee = await employeeApi.getAll();
        setEmployee(employee.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={3}>
        <AmountUser employee={employee} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <AmountGroup />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <SalaryInMonth employee={employee} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TotalSalary employee={employee} />
      </Grid>
      <Grid item xs={6}>
        <ListSalaryMember employee={employee} />
      </Grid>
      <Grid item xs={6}>
        <PayrollPerYear />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
