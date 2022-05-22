import React, { useEffect, useState } from "react";
import TableCustomer from "../components/List";
import employeeApi from "../../../api/employeeApi";
import { Box, Button } from "@mui/material";
import CardInformation from "../components/CardInformation";
import { InformationProps } from "../../../types/models/information";
import DrawerOptions from "../components/DrawerOption";

export default function HomePage() {
  const [listMember, setListMember] = useState<InformationProps[]>([]);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await employeeApi.getAll();
  //       setListMember(res.data);
  //       console.log("lse:", res.data);
  //     } catch (error) {}
  //   })();
  // }, []);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f4f5fa",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CardInformation />
      <TableCustomer listMember={listMember} />
      <DrawerOptions openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </Box>
  );
}
