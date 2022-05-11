import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  custom: {
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "row wrap",
    marginTop: "-8px",
    width: "calc(100% + 8px)",
    marginLeft: "-8px",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function PaperTitle() {
  const classes = useStyles();
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
      <Box sx={{ padding: "16px" }}>
        <Grid container spacing={1} className={classes.custom}>
          <Grid item>
            <Typography
              sx={{
                margin: "0px",
                fontSize: "1.25rem",
                color: "rgb(33, 33, 33)",
                lineHeight: "1.167",
                fontWeight: "500",
              }}
            >
              title
            </Typography>
          </Grid>
          <Grid item>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator="›"
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.334em",
                color: "rgb(158, 158, 158)",
              }}
            >
              <Link underline="hover" color="inherit" href="/">
                <HomeIcon
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    color: "rgb(103, 58, 183)",
                  }}
                />
              </Link>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  lineHeight: "1.75",
                  color: "rgb(158, 158, 158)",
                  display: "flex",
                  textDecoration: "none",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                title
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
