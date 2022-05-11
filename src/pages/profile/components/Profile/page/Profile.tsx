import * as React from "react";
import { Grid, Box } from "@mui/material";
import CardInfor from "../components/CardInfor";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Employment from "../components/Employment";
import { InformationProps } from "../../../../../types/models/information";

interface Props {
  profile: InformationProps;
}

const Profile = ({ profile }: Props) => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <CardInfor profile={profile} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <AboutMe profile={profile} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Education />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Employment />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
