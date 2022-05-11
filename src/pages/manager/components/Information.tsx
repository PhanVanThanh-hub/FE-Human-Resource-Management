import * as React from "react";
import { Box, Typography } from "@mui/material";
import { formatPrice } from "../../../utils/helpers/function";
import { InformationProps } from "../../../types/models/information";

interface Props {
  managers: InformationProps[];
}
const Information = ({ managers }: Props) => {
  const total_manager = managers.length;
  const total_salary = managers
    .map((item) => item.earnings)
    .reduce((prev, next) => prev + next, 0);
  return (
    <Box
      sx={{
        width: "280px",
        borderRadius: "12px",
        padding: "16px",
        border: "1px solid rgb(245, 245, 245)",
        boxShadow: "#2b2634cc 0px 2px 4px 0px",
        "&:hover": {
          border: "1px solid rgb(33, 150, 243)",
        },
        "& .MuiBox-root": {
          display: "flex",
          marginBottom: "5px",
        },
      }}
    >
      <Typography
        sx={{
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Manager Overview
      </Typography>
      <Box>
        <Typography sx={{ fontWeight: "600" }}>Total manager:</Typography>
        <Typography sx={{ paddingLeft: "5px" }}>{total_manager}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "600" }}>Salary costs:</Typography>
        <Typography sx={{ paddingLeft: "5px" }}>
          {formatPrice(total_salary)}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "600" }}>Average salary:</Typography>
        <Typography sx={{ paddingLeft: "5px" }}>
          {" "}
          {formatPrice(total_salary / total_manager)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Information;
