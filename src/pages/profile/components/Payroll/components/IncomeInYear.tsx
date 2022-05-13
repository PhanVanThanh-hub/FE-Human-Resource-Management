import React from "react";
import { Grid, Paper, CardHeader, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PayrollProps } from "../../../../../types/models/information";
import { formatPrice } from "../../../../../utils/helpers/function";

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
  payroll: {
    year: number;
    salary: PayrollProps[];
  };
  earnings?: number;
}

const IncomeInYear = ({ payroll, earnings }: Props) => {
  const classes = useStyles();
  const total_income = payroll.salary.reduce(
    (total: any, item: any) => total + item.salary,
    0
  );
  const total_bonus = (total_income - earnings! * payroll.salary.length) / 100;
  const average = total_income / payroll.salary.length;
  return (
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
            Year {payroll.year}
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
  );
};

export default IncomeInYear;
