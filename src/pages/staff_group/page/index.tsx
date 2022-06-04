import React, { useEffect } from "react";
import {
  fetchData,
  selectEmployeeGroup,
} from "../../../redux/staff_group/employeeGroupSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import StorageKeys from "../../../constants/storage-keys";
import {
  InformationStaffProps,
  InformationProps,
} from "../../../types/models/information";
import TableList from "../components/listMember";
import { Box } from "@mui/material";

const GroupStaffPage = () => {
  const dispatch = useAppDispatch();
  const user = localStorage.getItem(StorageKeys.user) || "";
  const profile: InformationProps = JSON.parse(user);
  const employeeList: InformationStaffProps[] =
    useAppSelector(selectEmployeeGroup) || [];
  useEffect(() => {
    dispatch(fetchData({ group: profile.group }));
  }, [dispatch, profile.group]);
  return (
    <Box sx={{ marginTop: "60px", padding: "20px" }}>
      <TableList memberGroup={employeeList} />
    </Box>
  );
};

export default GroupStaffPage;
