import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const CardInformation = () => {
  return (
    <Box
      sx={{
        width: "280px",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
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
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            Phan Văn Thanh
          </Typography>
          <Typography
            sx={{
              fontSize: " 0.75rem",
              color: "rgb(158, 158, 158)",
              lineHeight: "1.66",
            }}
          >
            Admin
          </Typography>
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
            thanhphan1230@gmail.com
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
                081 611 3859
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
                Đà Nẵng
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardInformation;
