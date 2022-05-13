import React, { useEffect, useState } from "react";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";

const DashboardPage = () => {
  const [list, setList] = useState<any>([]);
  const list1 = [];
  useEffect(() => {
    (async () => {
      try {
        const employee = await employeeApi.getAll();
        employee.data.map(async (value: InformationProps) => {
          console.log("Employee:", value.slug);
          const payroll = await employeeApi.getPayrollDetail(value.slug);
          const total_income = payroll.data.reduce(
            (total: any, item: any) => total + item.salary,
            0
          );
          const staff = { name: value.slug, salary: total_income };
        });
      } catch (error) {}
    })();
  }, []);
  return <>Dashboard</>;
};

export default DashboardPage;
