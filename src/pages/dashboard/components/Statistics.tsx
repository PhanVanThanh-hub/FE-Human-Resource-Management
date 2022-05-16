import React from "react";
import { Paper, Typography, Box, Avatar } from "@mui/material";
import CountUp from "react-countup";

interface Props {
  title: string;
  statistical: number;
  icon: any;
  isMoney?: boolean;
}

const Statistics = ({ title, statistical, icon, isMoney }: Props) => {
  const renderCountUp = () => {
    if (isMoney === true)
      return (
        <CountUp
          start={0}
          end={statistical}
          duration={3}
          separator=","
          decimals={3}
          decimal="."
          prefix="$"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      );
    return statistical;
  };
  return (
    <Paper
      sx={{
        borderRadius: "10px",
        boxShadow:
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
        overflow: "hidden",
        padding: "27px 27px 54px",
        color: "rgb(34, 51, 84)",
      }}
    >
      <Box sx={{ alignItems: "center", flexDirection: "row", display: "flex" }}>
        <Avatar
          sx={{
            width: "49.5px",
            height: "49.5px",
            background:
              "linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%)",
          }}
        >
          {icon}
        </Avatar>
        <Typography
          sx={{
            margin: "0px 0px 0px 13.5px",
            color: "rgba(34, 51, 84, 0.7)",
            fontSize: "0.9375rem",
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "18px",
          paddingBottom: "13.5px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2.1875rem",
            fontWeight: "700",
            lineHeight: "1.167",
          }}
        >
          {renderCountUp()}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Statistics;
