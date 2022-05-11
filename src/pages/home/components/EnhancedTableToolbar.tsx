import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  numSelected: any;
}

export default function EnhancedTableToolbar({ numSelected }: Props) {
  return (
    <Toolbar
      sx={{
        alignItems: "center",
        minHeight: "48px",
        padding: "0px 8px",
        color: "rgb(103, 58, 183)",
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%", fontWeight: "600", lineHeight: "1.235" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} selected
      </Typography>

      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
