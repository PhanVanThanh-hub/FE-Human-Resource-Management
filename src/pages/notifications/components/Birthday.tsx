import React from "react";
import { Box, Grid } from "@mui/material";
import { InformationProps } from "../../../types/models/information";
import AlertNotification from "./Alert";
import InformationDate from "./InformationDate";

interface Props {
  year: number;
  month: number;
  listBirthday: InformationProps[];
}

const TabBirthday = ({ year, month, listBirthday }: Props) => {
  const groupByDate = listBirthday.reduce(
    (previousValue: any, currentValue: InformationProps) => {
      const key = new Date(currentValue.date_of_birth).getDate();
      if (!previousValue[key]) {
        previousValue[key] = [];
      }
      previousValue[key].push(currentValue);
      return previousValue;
    },
    []
  );
  const renderListBirthday = () => {
    if (groupByDate.length === 0)
      return (
        <AlertNotification
          title="Nothing to Birthday"
          label="There is no employee birthday this month"
        />
      );
    return (
      <Grid container>
        {groupByDate.map((value: InformationProps[], dayNow: number) => {
          const newDay = year + "/" + month + "/" + dayNow;
          const listEmployee = value.map((employee: InformationProps) => {
            return employee.first_name + employee.last_name + ",";
          });
          return (
            <InformationDate
              key={dayNow}
              newDay={newDay}
              listEmployee={listEmployee}
              day={value}
            />
          );
        })}
      </Grid>
    );
  };
  return (
    <Box sx={{ height: "220px", overflow: "hidden", overflowY: "scroll" }}>
      {renderListBirthday()}
    </Box>
  );
};

export default TabBirthday;
