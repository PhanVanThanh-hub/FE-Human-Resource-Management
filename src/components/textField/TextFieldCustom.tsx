import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    [`& fieldset`]: {
      borderRadius: 15,
    },
  },
}));

interface Props {
  label?: string;
  variant?: string;
  defaultValue?: string;
}

function TextFieldCustom({ label, variant, defaultValue }: Props) {
  const classes = useStyles();

  return (
    <TextField
      sx={{ width: "100%" }}
      defaultValue={defaultValue}
      variant="outlined"
      label={
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.4375em",
          }}
        >
          {label}
        </Typography>
      }
      className={classes.root}
      inputProps={{
        style: {
          fontWeight: "500",
          color: "rgb(33, 33, 33)",
          display: "block",
          background: "rgb(250, 250, 250)",
          borderRadius: "12 px",
          padding: "15.5px 14px",
        },
      }}
    />
  );
}

export default TextFieldCustom;
