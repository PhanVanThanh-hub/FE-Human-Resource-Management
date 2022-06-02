import React from "react";
import { Grid, Paper, CardHeader, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PayrollProps } from "../../../types/models/information";
import { formatPrice } from "../../../utils/helpers/function";
import IncomeInYear from "./IncomeInYear";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "space-around",
    margin: "10px 0px",
    "& .MuiGrid-item": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  divider: {
    margin: "0px",
    flexShrink: "0",
    borderWidth: "0px 0px thin",
    borderStyle: "solid",
    opacity: "1",
    borderColor: "rgb(227, 242, 253)",
  },
}));

interface Props {
  payroll: PayrollProps[];
  earnings?: number;
}

const OverviewSalary = ({ payroll, earnings }: Props) => {
  const classes = useStyles();
  const total_income = payroll.reduce((total, item) => total + item.salary, 0);
  const total_bonus = (total_income - earnings! * payroll.length) / 100;
  const average = total_income / payroll.length;
  const salaryPerYear = [];
  const start_year = parseInt(payroll[0]?.date);
  const end_year = parseInt(payroll[payroll.length - 1]?.date);
  for (let i = start_year; i >= end_year; i--) {
    const salaryYear: PayrollProps[] = payroll.filter(
      (value) => parseInt(value.date) === i
    );
    const salaryInYear = { year: i, salary: salaryYear };
    salaryPerYear.push(salaryInYear);
  }
  return (
    <>
      <Paper>
        <CardHeader
          title={
            <Typography
              sx={{
                color: "rgb(33, 33, 33)",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Overview Income
            </Typography>
          }
        />
        <Divider className={classes.divider} />
        <Grid container className={classes.root}>
          <Grid item>
            <Typography>{formatPrice(total_income)}</Typography>
            <Typography sx={{ fontWeight: "600" }}>Total Income</Typography>
          </Grid>
          <Grid item>
            <Typography>{total_bonus}% </Typography>
            <Typography sx={{ fontWeight: "600" }}>Bonus</Typography>
          </Grid>
          <Grid item>
            <Typography>{formatPrice(average)}</Typography>
            <Typography sx={{ fontWeight: "600" }}>Average/Month</Typography>
          </Grid>
        </Grid>
      </Paper>
      {salaryPerYear.map((payroll) => {
        return (
          <IncomeInYear
            payroll={payroll}
            earnings={earnings}
            key={payroll.year}
          />
        );
      })}
    </>
  );
};

export default OverviewSalary;
