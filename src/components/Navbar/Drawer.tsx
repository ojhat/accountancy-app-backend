import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "./Navbar";

//Types
type PropTypes = {
  links: NavLink[];
};
function DrawerComponent({ links }: PropTypes) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List component={Stack} direction="column">
          {links.map((link, index) => (
            <ListItemButton key={index} divider onClick={link.onClickHandler}>
              <ListItemIcon>
                <ListItemText>{link.text}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(true)}>
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
