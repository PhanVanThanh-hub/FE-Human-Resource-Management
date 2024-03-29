import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import StorageKeys from "../../constants/storage-keys";
import ButtonIcon from "../button/ButtonIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../app/hooks";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/auth/AuthSlice";
import { Link } from "react-router-dom";

const pages = [
  { label: "Profile", link: "" },
  { label: "Group", link: "group" },
  { label: "Payroll", link: "payroll" },
];
const HeaderStaff = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const user = localStorage.getItem(StorageKeys.user) || "";
  const profile = JSON.parse(user);
  const handleLogout = async () => {
    await dispatch(logout());
    history.replace("/login");
    return window.location.reload();
  };
  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Employee Management System
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Link to={page.link} style={{ textDecoration: "none" }}>
                <Button
                  key={page.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ p: 0, marginRight: "10px" }}>
              <Avatar alt="Remy Sharp" src={profile.avatar} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ marginRight: "20px", fontWeight: "bold" }}
            >
              Logout
            </Typography>
            <ButtonIcon onClick={handleLogout} icon={<LogoutIcon />} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderStaff;
