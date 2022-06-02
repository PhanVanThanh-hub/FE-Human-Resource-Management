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

const pages = ["Profile", "Group", "Payroll"];

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
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
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
