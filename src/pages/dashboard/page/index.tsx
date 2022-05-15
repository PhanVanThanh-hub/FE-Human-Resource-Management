import React, { useEffect, useState } from "react";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";

const DashboardPage = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const employee = await employeeApi.getAll();
        setList([]);
        console.log("------------------------------------");
        console.log("employee:", employee.data);
        employee.data.map(async (value: InformationProps) => {
          console.log("Employee:", value.slug);
          const payroll = await employeeApi.getPayrollDetail(value.slug);
          console.log("Payroll");
          const total_income = payroll.data.reduce(
            (total: any, item: any) => total + item.salary,
            0
          );
          const staff = { name: value.slug, salary: total_income };
          setList((list) => [...list, staff]);
        });
      } catch (error) {}
    })();
  }, []);

  console.log("staff:", list);
  return <>Dashboard</>;
};

export default DashboardPage;
