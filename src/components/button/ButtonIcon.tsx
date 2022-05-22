import React from "react";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { deepPurple } from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  iconButton: {
    borderRadius: "12px!important",
    padding: "6px",
    "&:hover": {
      backgroundColor: deepPurple[500] + "!important",
      color: "#ffffff",
    },
  },
}));

interface Props {
  onClick: () => void;
  icon: any;
}

const ButtonIcon = ({ onClick, icon }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onClick}
        edge="start"
        sx={{
          fontWeight: "bold",
          backgroundColor: deepPurple[100],
          bgcolor: "button.primary",
          color: "text.secondary",
          "&:hover": { color: "text.hover" },
        }}
        className={classes.iconButton}
      >
        {icon}
      </IconButton>
    </div>
  );
};

export default ButtonIcon;
