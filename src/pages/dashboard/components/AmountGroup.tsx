import React, { useEffect, useState } from "react";
import groupApi from "../../../api/groupApi";
import { GroupProps } from "../../../types/models/information";
import Statistics from "./Statistics";
import GroupsIcon from "@mui/icons-material/Groups";

const AmountGroup = () => {
  const [groups, setGroups] = useState<GroupProps[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const employee = await groupApi.getAll();
        setGroups(employee.data);
      } catch (error) {}
    })();
  }, []);
  const title = "Total Groups";
  return (
    <Statistics
      title={title}
      statistical={groups.length}
      icon={<GroupsIcon />}
    />
  );
};

export default AmountGroup;
