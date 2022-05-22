import React from "react";
import { GroupProps } from "../../../types/models/information";
import Statistics from "./Statistics";
import GroupsIcon from "@mui/icons-material/Groups";

interface Props {
  groups: GroupProps[];
}

const AmountGroup = ({ groups }: Props) => {
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
