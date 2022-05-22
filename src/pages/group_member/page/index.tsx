import React, { useEffect, useState } from "react";
import TableList from "../components/table";
import { useParams } from "react-router-dom";
import { getObjNthItem } from "../../../utils/helpers/function";
import { InformationProps } from "../../../types/models/information";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectListEmployee,
  fetchEmployeeList,
} from "../../../redux/employee/employeeSlice";

const GroupMember = () => {
  const params = useParams();
  const idGroup: number = getObjNthItem(params, 1);
  const dispatch = useAppDispatch();
  const employee: InformationProps[] = useAppSelector(selectListEmployee);
  useEffect(() => {
    dispatch(fetchEmployeeList({ group: idGroup }));
  }, []);

  return <TableList memberGroup={employee} idGroup={idGroup} />;
};

export default GroupMember;
