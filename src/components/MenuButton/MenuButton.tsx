import * as React from "react";
import { Menu, IconButton, MenuItem } from "@mui/material";

type MenuButtonProps = {
  icon: React.ReactNode;
  items: {
    onClickHandler?: React.MouseEventHandler<HTMLLIElement>;
    text: string;
  }[];
};
export default function MenuButton(props: MenuButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>{props.icon}</IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {props.items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClickHandler}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
