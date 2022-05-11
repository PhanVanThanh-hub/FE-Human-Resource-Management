import * as React from "react";
import Paper from "@mui/material/Paper";

export default function PaperCard(props: any) {
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
      }}
    >
      {props.children}
    </Paper>
  );
}
