import { Drawer, IconButton } from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import { useState } from "react";

const CustomDrawer = ({ userData }) => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="Open menu"
        aria-expanded={open}
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
        onClick={() => setOpen(true)}
      >
        <MenuRounded />
      </IconButton>

      <Drawer
        anchor="top"
        open={open}
        onClose={closeDrawer}
        slotProps={{ paper: { sx: { borderRadius: "0 0 24px 24px" } } }}
      >
        <ResponsiveHeader
          closeDrawer={closeDrawer}
          userName={userData?.name}
          userSurname={userData?.surname}
        ></ResponsiveHeader>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
