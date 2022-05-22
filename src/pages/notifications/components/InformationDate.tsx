import React from "react";
import { Typography, Grid, Avatar, AvatarGroup } from "@mui/material";
import { InformationProps } from "../../../types/models/information";

interface Props {
  newDay: string;
  listEmployee: string[];
  day: any;
}

const InformationDate = ({ newDay, listEmployee, day }: Props) => {
  return (
    <Grid item xs={12} sx={{ margin: "10px" }}>
      <Typography
        sx={{
          margin: "0px 0px 4px",
          fontWeight: "700",
          fontSize: "14px",
        }}
      >
        Date :{newDay}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          lineHeight: "1.43",
          color: " rgba(34, 51, 84, 0.7)",
          fontSize: "14px",
        }}
      >
        {listEmployee}
      </Typography>
      <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
        {day.map((employee: InformationProps) => {
          return <Avatar alt={employee.first_name} src={employee.avatar} />;
        })}
      </AvatarGroup>
    </Grid>
  );
};

export default InformationDate;
