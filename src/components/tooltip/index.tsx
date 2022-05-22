import React from "react";
import { Box, Grid, Avatar, Typography } from "@mui/material";

const TooltipCard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item>
          <Typography>Join Date</Typography>
          <Typography>Birthday</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TooltipCard;
