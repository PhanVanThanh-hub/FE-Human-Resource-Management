import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMulti from "../../../../../components/card/MultiCard";

export default function Employment() {
  const employments = [
    {
      time: "Current",
      title: "Senior",
      role: "Senior UI/UX designer",
      jobDescription:
        "Perform task related to project manager with the 100+ team under my observation. Team management is key role in this company.",
    },
    {
      time: "2017-2019",
      title: "Senior",
      role: "Trainee cum Project Manager",
      jobDescription: "Microsoft, TX, USA",
    },
  ];
  return (
    <CardMulti
      title="Employment"
      content={
        <Grid container spacing={1} direction="column">
          {employments.map((value, index) => {
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
                      {value.time}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        color: "rgb(158, 158, 158)",
                        lineHeight: "1.57",
                      }}
                    >
                      {value.title}
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
                      {value.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        color: "rgb(158, 158, 158)",
                        lineHeight: "1.57",
                      }}
                    >
                      {value.jobDescription}
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
