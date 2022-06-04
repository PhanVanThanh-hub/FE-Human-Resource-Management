import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PayrollProps } from "../../../types/models/information";
import TableSalary from "../components/TableSalary";
import OverviewSalary from "../components/OverviewSalary";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchData,
  fetchDataPerYear,
  selectPayrollPerYear,
  selectPayroll,
} from "../../../redux/staff_payroll/staffPayrollSlice";
import StorageKeys from "../../../constants/storage-keys";
import { range } from "../../../utils/helpers/function";
import { InformationProps } from "../../../types/models/information";

const PayrollPage = () => {
  const dispatch = useAppDispatch();
  const user = localStorage.getItem(StorageKeys.user) || "";
  const profile: InformationProps = JSON.parse(user);
  const yearNow = new Date().getFullYear();
  const FIRST_YEAR = parseInt(profile.join_date);
  const listYear = range(FIRST_YEAR, yearNow).reverse();
  const [year, setYear] = useState<any>(yearNow);
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };
  const payrollPerYear: PayrollProps[] = useAppSelector(selectPayrollPerYear);
  const payroll: PayrollProps[] = useAppSelector(selectPayroll);
  useEffect(() => {
    const data = { slug: profile.slug, year: year };
    dispatch(fetchDataPerYear(data));
  }, [dispatch, profile.slug, year]);
  useEffect(() => {
    const data = { slug: profile.slug };
    dispatch(fetchData(data));
  }, [dispatch, profile.slug]);
  return (
    <Box
      sx={{ marginTop: "90px", backgroundColor: "#e3f2fd", minHeight: "100vh" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              backgroundColor: "#ffff",
              margin: "20px",
              padding: "12px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Annual Salary Sheet
              </Typography>
              <FormControl sx={{ width: "200px", marginBottom: "20px" }}>
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

            <TableSalary payroll={payrollPerYear} earnings={profile.earnings} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              margin: "20px",
              padding: "12px",
            }}
          >
            <OverviewSalary payroll={payroll} earnings={profile.earnings} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PayrollPage;
