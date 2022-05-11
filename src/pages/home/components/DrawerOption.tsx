import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import { useHistory } from "react-router-dom";

type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: any;
}

export default function DrawerOptions({ openDrawer, setOpenDrawer }: Props) {
  const history = useHistory();
  const toManagerPage = () => {
    return history.push(`/manager`);
  };
  const listOptions = [
    { title: "Manager", icon: <AccountCircleIcon />, action: toManagerPage },
    { title: "Group", icon: <GroupsIcon />, action: toManagerPage },
  ];
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {listOptions.map((value, index) => (
          <ListItem button key={value.title} onClick={value.action}>
            <ListItemIcon>{value.icon}</ListItemIcon>
            <ListItemText primary={value.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      {list("right")}
    </Drawer>
  );
}
