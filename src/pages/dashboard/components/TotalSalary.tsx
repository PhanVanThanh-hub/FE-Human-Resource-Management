import React from "react";
import Statistics from "./Statistics";
import { PayrollProps } from "../../../types/models/information";
import AssessmentIcon from "@mui/icons-material/Assessment";

interface Props {
  payrolls: PayrollProps[];
}

const TotalSalary = ({ payrolls }: Props) => {
  const title = "Total Salary Expense";
  const totalSalary = payrolls.reduce(
    (total: number, item: any) => total + item.salary,
    0
  );

  return (
    <Statistics
      title={title}
      statistical={totalSalary}
      icon={<AssessmentIcon />}
      isMoney={true}
    />
  );
};

export default TotalSalary;
