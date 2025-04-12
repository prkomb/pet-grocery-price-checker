import { Drawer, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import { useState } from "react";

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{ display: { xs: "block", sm: "none" } }}
        onClick={() => setOpen(true)}
      >
        <Menu></Menu>
      </IconButton>

      <Drawer anchor="top" open={open}>
        <ResponsiveHeader closeDrawer={closeDrawer}></ResponsiveHeader>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
