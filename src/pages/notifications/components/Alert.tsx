import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

interface Props {
  title: string;
  label: string;
}

const AlertNotification = ({ title, label }: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        sx={{
          background: "rgba(87, 202, 34, 0.1)",
          color: " rgb(87, 202, 34)",
          width: "90px",
          height: "90px",
          margin: "0px auto 18px",
        }}
      >
        <DoneIcon sx={{ height: "40px", width: "40px" }} />
      </Avatar>
      <Typography
        sx={{ margin: "0px 0px 4px", fontWeight: "700", fontSize: "16px" }}
      >
        Nothing to Birthday
      </Typography>
      <Typography sx={{ fontSize: "15px", color: "rgba(34, 51, 84, 0.7)" }}>
        There is no employee birthday this month
      </Typography>
    </Box>
  );
};

export default AlertNotification;
