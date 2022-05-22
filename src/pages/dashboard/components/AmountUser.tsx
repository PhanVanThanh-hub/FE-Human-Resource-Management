import React from "react";
import Statistics from "./Statistics";
import { InformationProps } from "../../../types/models/information";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  employees: InformationProps[];
}

const AmountUser = ({ employees }: Props) => {
  const title = "Total User";
  const total_staff = employees.length;
  return (
    <Statistics title={title} statistical={total_staff} icon={<PersonIcon />} />
  );
};

export default AmountUser;
