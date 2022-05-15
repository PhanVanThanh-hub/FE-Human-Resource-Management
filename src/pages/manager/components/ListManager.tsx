import * as React from "react";
import { Paper, Grid } from "@mui/material";
import CardInformation from "./CardInformation";
import { InformationProps } from "../../../types/models/information";

interface Props {
  managers: InformationProps[];
}

export default function ListManager({ managers }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "none",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "24px",
        border: "1px solid rgba(144, 202, 249, 0.46)",
        background: "rgb(255, 255, 255)",
        width: "75%",
        height: "650px",
        overflowY: "auto",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          margin: "10px 0px",
          "& .MuiGrid-item": {
            marginBottom: "10px",
          },
        }}
      >
        {managers.map((manager: InformationProps) => {
          return (
            <Grid
              item
              xs={5}
              key={manager.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CardInformation manager={manager} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
