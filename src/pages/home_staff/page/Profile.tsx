import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import CardInfor from "../components/CardInfor";
import AboutMe from "../components/AboutMe";
import { InformationProps } from "../../../types/models/information";
import StorageKeys from "../../../constants/storage-keys";

const ProfilePage = () => {
  const user = localStorage.getItem(StorageKeys.user) || "";
  const profile = JSON.parse(user);

  return (
    <Box
      sx={{
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <CardInfor profile={profile} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <AboutMe profile={profile} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProfilePage;
