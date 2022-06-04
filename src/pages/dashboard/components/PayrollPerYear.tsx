import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { PayrollProps } from "../../../types/models/information";
import { Paper, Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectPayrollPerYear,
  fetchDataFilterPayroll,
} from "../../../redux/dashboard/dashboardSlice";
import { range } from "../../../utils/helpers/function";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PayrollPerYear = () => {
  const dispatch = useAppDispatch();
  const payroll: PayrollProps[] = useAppSelector(selectPayrollPerYear);
  const yearNow = new Date().getFullYear();
  const [year, setYear] = useState<any>(yearNow);
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchDataFilterPayroll({ release_year: year }));
  }, [dispatch, year]);
  const FIRST_YEAR = 2019;
  const listYear = range(FIRST_YEAR, yearNow).reverse();
  const reportPayroll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  payroll.map((value: PayrollProps) => {
    const newDate = new Date(value.date);
    reportPayroll[newDate.getMonth()] += value.salary;
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Report Payroll Year:${year}`,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Actual Salary",
        data: reportPayroll,
        backgroundColor: "rgba(22, 255, 3, 0.8)",
      },
    ],
  };
  return (
    <Paper
      sx={{
        height: "477px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <FormControl sx={{ width: "200px", marginRight: "20px" }}>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChange}
          >
            {listYear.map((value: number) => {
              return (
                <MenuItem value={value} key={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Bar options={options} data={data} />
    </Paper>
  );
};

export default PayrollPerYear;
