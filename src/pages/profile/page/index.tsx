import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import Profile from "../components/Profile/page/Profile";
import { useParams } from "react-router-dom";
import { getObjNthItem } from "../../../utils/helpers/function";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";
import PayrollPage from "../components/Payroll/page/index";
import PaymentIcon from "@mui/icons-material/Payment";

interface Props {
  value: number;
  index: number;
  Children: () => JSX.Element;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PageProfile01 = () => {
  const params = useParams();
  const ProfileID = getObjNthItem(params, 1);
  const [profile, setProfile] = useState<InformationProps>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await employeeApi.getEmployeeDetail(ProfileID);
        setProfile(res.data);
      } catch (error) {}
    })();
  }, []);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "none",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "24px",
        border: "1px solid rgba(144, 202, 249, 0.46)",
        background: "rgb(255, 255, 255)",
        margin: "10px",
      }}
    >
      <Box sx={{ padding: "24px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <Grid container>
                  <Grid item>
                    <AccountCircleTwoToneIcon sx={{ marginRight: "10px" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        lineHeight: "1.75",
                        color: "inherit",
                        textTransform: "capitalize",
                      }}
                    >
                      Profile
                    </Typography>
                  </Grid>
                </Grid>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Grid container>
                  <Grid item>
                    <PaymentIcon sx={{ marginRight: "10px" }} />
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        lineHeight: "1.75",
                        color: "inherit",
                        textTransform: "capitalize",
                      }}
                    >
                      Payroll
                    </Typography>
                  </Grid>
                </Grid>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <div
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
        >
          {value === 0 && !profile === false ? (
            <Box sx={{ paddingTop: "16px" }}>
              <Profile profile={profile!} />
            </Box>
          ) : (
            <></>
          )}
        </div>
        <div
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-${1}`}
          aria-labelledby={`simple-tab-${1}`}
        >
          {value === 1 && (
            <Box sx={{ paddingTop: "16px" }}>
              <PayrollPage earnings={profile?.earnings} ProfileID={ProfileID} />
            </Box>
          )}
        </div>
      </Box>
    </Paper>
  );
};
export default PageProfile01;
