import React, { useEffect, useState } from "react";
import ListManager from "../components/ListManager";
import Box from "@mui/material/Box";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";
import Information from "../components/Information";
import groupApi from "../../../api/groupApi";

const ManagerPage = () => {
  const [managers, setManagers] = useState<InformationProps[]>([]);
  const [groups, setGroups] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await employeeApi.getManager();
        setManagers(res.data);
        const getGroups = await groupApi.getAll();
        setGroups(getGroups.data);
      } catch (error) {}
    })();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        backgroundColor: "#f4f5fa",
      }}
    >
      <Information managers={managers} />
      <ListManager managers={managers} />
    </Box>
  );
};

export default ManagerPage;
