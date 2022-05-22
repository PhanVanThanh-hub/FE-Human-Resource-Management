import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  ButtonBase,
  Tooltip,
  Popper,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonIcon from "../components/button/ButtonIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/auth/AuthSlice";
import { useAppDispatch } from "../app/hooks";
import { useHistory } from "react-router-dom";
import Notifications from "../pages/notifications/page/index";
import { fetchData } from "../redux/notifications/notificationsSlice";

interface Props {
  onClick: () => void;
}

const Header = ({ onClick }: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleLogout = async () => {
    await dispatch(logout());
    history.replace("/login");
    return window.location.reload();
  };

  return (
    <div>
      <AppBar
        sx={{
          bgcolor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          color: "text.primary",
          boxShadow: "none",
          border: "none",
          padding: "4px 0 0 0",
          zIndex: 1000,
        }}
      >
        <Toolbar sx={{ bgcolor: "#ffffff" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid
              item
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                style={{ width: "200px", marginLeft: "10px" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  Admin
                </Typography>
              </Box>
              <ButtonIcon onClick={onClick} icon={<MenuIcon />} />
            </Grid>
            <Grid
              item
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Notifications" arrow>
                <ButtonBase
                  sx={{
                    color: "rgb(85, 105, 255)",
                    backgroundColor: "rgba(85, 105, 255, 0.1)",
                    marginRight: "10px",
                    width: "36px",
                    height: "36px",
                    padding: "8px",
                    borderRadius: "12px",
                  }}
                  onClick={handleClick}
                >
                  <NotificationsActiveIcon sx={{ fontSize: "1.25rem" }} />
                </ButtonBase>
              </Tooltip>
              <Popper open={open} anchorEl={anchorEl} sx={{ zIndex: "1000" }}>
                <Notifications />
              </Popper>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ marginRight: "20px", fontWeight: "bold" }}
              >
                Logout
              </Typography>
              <ButtonIcon onClick={handleLogout} icon={<LogoutIcon />} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
