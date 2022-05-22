import React, { useEffect } from "react";
import ListManager from "../components/ListManager";
import Box from "@mui/material/Box";
import { InformationProps } from "../../../types/models/information";
import Information from "../components/Information";
import {
  fetchData,
  selectListManager,
} from "../../../redux/manager/managerSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const ManagerPage = () => {
  const dispatch = useAppDispatch();
  const managers: InformationProps[] = useAppSelector(selectListManager);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
        backgroundColor: "#f4f5fa",
      }}
    >
      <Information managers={managers} />
      <ListManager managers={managers} />
    </Box>
  );
};

export default ManagerPage;
