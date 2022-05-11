import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMulti from "../../../../../components/card/MultiCard";

export default function Education() {
  const educations = [
    {
      schoolYear: "2014-2017",
      type: "Master Degree",
      specialized: "Master Degree in Computer Application",
      university: "University of Oxford, England",
    },
    {
      schoolYear: "2011-2013",
      type: "Bachelor",
      specialized: "Bachelor Degree in Computer Engineering",
      university: "Imperial College London",
    },
    {
      schoolYear: "2009-2011",
      type: "School",
      specialized: "Higher Secondary Education",
      university: "School of London, England",
    },
  ];
  return (
    <CardMulti
      title="Education"
      content={
        <Grid container spacing={1} direction="column">
          {educations.map((value, index) => {
            return (
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "rgb(33, 33, 33)",
                        lineHeight: "1.75",
                      }}
                    >
                      {value.schoolYear}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        color: "rgb(158, 158, 158)",
                        lineHeight: "1.57",
                      }}
                    >
                      {value.type}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "rgb(33, 33, 33)",
                        lineHeight: "1.75",
                      }}
                    >
                      {value.specialized}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        color: "rgb(158, 158, 158)",
                        lineHeight: "1.57",
                      }}
                    >
                      {value.university}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      }
    />
  );
}
