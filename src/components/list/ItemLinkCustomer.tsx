import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import {
  Link as RouterLink,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    display: "flex",

    alignItems: "center",
    justifyContent: "start",
    paddingRight: " 16px",
    paddingLeft: "20px",
    paddingTop: "8px",
    paddingBottom: "8px",
    width: "100%",
  },
});

interface Props {
  title: string;
  to: string;
  icon: any;
}

function ItemLinkCustome({ title, to, icon }: Props) {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(history.location.pathname);
  }, [history, match]);
  return (
    <ListItemButton
      sx={{
        borderRadius: "12px!important",
        marginBottom: "5px",
        padding: 0,
        bgcolor: location === to ? "button.hover" : "",
        "&:hover": { bgcolor: "button.hover" },
      }}
    >
      <RouterLink to={to ? to : ""} className={classes.link} color="inherit">
        <ListItemIcon sx={{ color: "icon.primary" }}>{icon}</ListItemIcon>
        <ListItemText primary={title} sx={{ color: "text.primary" }} />
      </RouterLink>
    </ListItemButton>
  );
}

export default ItemLinkCustome;
