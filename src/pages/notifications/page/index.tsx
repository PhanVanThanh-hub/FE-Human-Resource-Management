import React, { useEffect, useState } from "react";
import { Paper, Box, Typography, Tabs, Tab } from "@mui/material";
import background from "../../../static/backgroundNotifications.jpg";
import TabBirthday from "../components/Birthday";
import JoinDate from "../components/JoinDate";
import { InformationProps } from "../../../types/models/information";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchData,
  selectListBirthday,
  selectListJoinDate,
} from "../../../redux/notifications/notificationsSlice";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Notifications = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();
  const listBirthday: InformationProps[] = useAppSelector(selectListBirthday);
  const listJoinDate: InformationProps[] = useAppSelector(selectListJoinDate);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        boxShadow:
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
        overflow: "hidden auto",
        minWidth: "16px",
        minHeight: "16px",
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        width: "440px",
      }}
    >
      <Box sx={{ padding: "18px", borderRadius: "10px" }}>
        <Box
          sx={{
            marginBottom: "18px",
            position: "relative",
            borderRadius: "10px",
            background:
              "linear-gradient(100.66deg, rgb(67, 67, 67) 6.56%, rgb(0, 0, 0) 93.57%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0px",
              top: "0px",
              zIndex: "6",
              height: "100%",
              width: "100%",
              borderRadius: "inherit",
              opacity: "0.3",
              background:
                "linear-gradient(rgb(0, 176, 155), rgb(150, 201, 61))",
            }}
          />
          <Box
            sx={{
              borderRadius: "inherit",
              position: "absolute",
              left: "0px",
              top: "0px",
              zIndex: "5",
              filter: "grayscale(80%)",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              opacity: "0.2",
              backgroundImage: `url(${background})`,
            }}
          />
          <Box
            sx={{
              paddingTop: "27px",
              paddingBottom: "27px",
              position: "relative",
              zIndex: "7",
            }}
          >
            <Typography
              sx={{
                margin: "0px",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "1.235",
                textAlign: "center",
                paddingBottom: "4.5px",
                color: " rgb(255, 255, 255)",
              }}
            >
              Notifications
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                margin: "0px",
                fontWeight: "400",
                fontSize: "15px",

                lineHeight: "1.57",
                textAlign: "center",
              }}
            >
              You have <span style={{ color: "rgb(87, 202, 34)" }}>483</span>{" "}
              New Messages
            </Typography>
          </Box>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { color: "white" } }}
          sx={{
            height: "38px",
            minHeight: "38px",
            color: "white",
            "& .MuiTabs-indicator": {
              position: "absolute",
              bottom: "0px",
              transition: " all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              backgroundColor: "rgb(85, 105, 255)",
              height: "38px",
              minHeight: "38px",
              borderRadius: "6px",
              border: "1px solid rgb(68, 84, 204)",
              boxShadow: "rgb(136 150 255) 0px 2px 10px",
            },
            "& .Mui-selected ": {
              zIndex: "5",
            },
            "& .MuiButtonBase-root": {
              height: "38px",
              minHeight: "38px",
              fontWeight: "600",
              paddingLeft: "20px",
              paddingRight: "20px",
            },
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
          }}
        >
          <Tab label="Birthday" {...a11yProps(0)} />
          <Tab label="Date Join" {...a11yProps(1)} />
          <Tab label="Event" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <TabBirthday year={year} month={month} listBirthday={listBirthday} />
      </div>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <JoinDate year={year} month={month} listJoinDate={listJoinDate} />
      </div>
    </Paper>
  );
};

export default Notifications;
