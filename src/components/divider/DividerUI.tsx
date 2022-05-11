import React from "react";
import Divider from "@mui/material/Divider";

DividerUI.propTypes = {};

function DividerUI() {
  return (
    <Divider
      sx={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        opacity: "1",
        borderColor: "rgb(227, 242, 253)",
      }}
    />
  );
}

export default DividerUI;
