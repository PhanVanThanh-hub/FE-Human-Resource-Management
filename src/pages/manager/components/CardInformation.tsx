import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { InformationProps } from "../../../types/models/information";

interface Props {
  manager: InformationProps;
}

const CardInformation = ({ manager }: Props) => {
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
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{
            color: "rgb(30, 136, 229)",
            background: "rgb(144, 202, 249)",
            width: "72px",
            height: "72px",
          }}
          src={manager.avatar}
        />
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Link
            to={`/manager/${manager.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: "600",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {manager.first_name} {manager.last_name}
            </Typography>
          </Link>
          <Link
            to={`/group/${manager.group}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: " 0.75rem",
                color: "rgb(158, 158, 158)",
                lineHeight: "1.66",
              }}
            >
              Manager:Group {manager.group}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: " 0.75rem",
              color: "rgb(158, 158, 158)",
              lineHeight: "1.66",
            }}
          >
            Email
          </Typography>
          <Typography
            sx={{
              fontSize: " 0.75rem",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            {manager.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontSize: " 0.75rem",
                  color: "rgb(158, 158, 158)",
                  lineHeight: "1.66",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  fontSize: " 0.75rem",
                  lineHeight: "1.6",
                }}
              >
                {manager.phone}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontSize: " 0.75rem",
                  color: "rgb(158, 158, 158)",
                  lineHeight: "1.66",
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: " 0.75rem",
                  lineHeight: "1.66",
                }}
              >
                {manager.location}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardInformation;
