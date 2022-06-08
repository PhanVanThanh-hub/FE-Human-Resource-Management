import React from "react";
import { Box, Grid } from "@mui/material";
import { InformationProps } from "../../../types/models/information";
import AlertNotification from "./Alert";
import InformationDate from "./InformationDate";

interface Props {
  listJoinDate: InformationProps[];
  year: number;
  month: number;
}

const JoinDate = ({ listJoinDate, year, month }: Props) => {
  const groupByDate = listJoinDate.reduce(
    (previousValue: any, currentValue: InformationProps) => {
      const key = new Date(currentValue.join_date).getDate();
      if (!previousValue[key]) {
        previousValue[key] = [];
      }
      previousValue[key].push(currentValue);
      return previousValue;
    },
    []
  );
  const renderListJoinDate = () => {
    if (groupByDate.length === 0)
      return (
        <AlertNotification
          title="Nothing to JoinDate"
          label="There is no employee join date this month"
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
      {renderListJoinDate()}
    </Box>
  );
};

export default JoinDate;
