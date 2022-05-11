import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import groupApi from "../../../api/groupApi";
import ListGroup from "../components/table";

const GroupPage = () => {
  const [groups, setGroups] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const getGroups = await groupApi.getAll();
        setGroups(getGroups.data);
      } catch (error) {}
    })();
  }, []);
  return <ListGroup groups={groups} />;
};

export default GroupPage;
