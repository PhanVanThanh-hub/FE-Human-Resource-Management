import React, { useEffect, useState } from "react";
import Statistics from "./Statistics";
import { InformationProps } from "../../../types/models/information";
import employeeApi from "../../../api/employeeApi";
import AssessmentIcon from "@mui/icons-material/Assessment";

interface Props {
  employee: InformationProps[];
}

const TotalSalary = ({ employee }: Props) => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      try {
        employee.map(async (value: InformationProps) => {
          const payroll = await employeeApi.getPayrollDetail(value.slug);
          const total_income = payroll.data.reduce(
            (total: any, item: any) => total + item.salary,
            0
          );
          const staff = { name: value.slug, salary: total_income };
          setList((list) => [...list, staff]);
        });
      } catch (error) {}
    })();
  }, [employee]);
  const title = "Total Salary Expense";
  const totalSalary = list.reduce(
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
