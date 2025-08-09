import "@/components/Home/Header/Header.css";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem, ListItem } from "@mui/material";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { Search, Logout, Person, Bookmark } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "@/assets/images/Brand.svg";
import CustomDrawer from "./Drawer";
import { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/logout";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const anchorElement = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user?.payload);

  const handleLogout = () => {
    dispatch(logout({ navigate }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ paddingY: "20px" }} color="">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={NavLink}
            to="/"
          >
            <Box component="img" src={Brand}></Box>
          </IconButton>
          <Typography sx={{ ml: 1 }} className="text-poppins-800">
            PriceHunt
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>

          <OutlinedInput
            sx={{
              width: "502px",
              height: "49px",
              borderRadius: "80px",
              backgroundColor: "#efefef",
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <Search></Search>
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search for a product (e.g., Milk, Bread)"
          ></OutlinedInput>

          <Box sx={{ flexGrow: 1 }}></Box>

          {user ? (
            <>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Box
                  display="flex"
                  alignItems="center"
                  aria-controls={open && "basic-menu"}
                  gap={2}
                  ref={anchorElement}
                  onClick={setOpen}
                >
                  <Avatar
                    src={`https://ui-avatars.com/api/?name=${user.profile?.name}+${user.profile?.surname}&background=34D399`}
                  ></Avatar>
                  <Typography variant="body1" color="initial">
                    {user.profile?.name && user.profile?.surname
                      ? `${user.profile?.name} ${user.profile?.surname}`
                      : user?.email}
                  </Typography>
                </Box>

                <Menu
                  open={open}
                  anchorEl={anchorElement.current}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <Button
                      component={NavLink}
                      to="/profile"
                      sx={{
                        textTransform: "capitalize",
                        fontFamily: "Poppins",
                      }}
                      startIcon={<Person fontSize="small" />}
                      fullWidth
                    >
                      Profile
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button fullWidth startIcon={<Bookmark fontSize="small" />}>
                      <Typography sx={{ textTransform: "capitalize" }}>
                        Saved
                      </Typography>
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      fullWidth
                      startIcon={<Logout fontSize="small" />}
                      onClick={() => handleLogout()}
                      sx={{
                        fontSize: "Poppins",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        color: "red",
                      }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <Box display="flex">
              <Button
                component={NavLink}
                to="/login"
                variant="outlined"
                sx={{
                  mr: 2,
                  width: "91px",
                  height: "54px",
                  borderRadius: "76px",
                  color: "#170f49",
                  border: "1px solid #d9dbe9",
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "flex",
                  },
                }}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                className="text-poppins-800"
                component={NavLink}
                to="/register"
                sx={{
                  backgroundColor: "#34d399",
                  fontSize: "16px",
                  borderRadius: "40px",
                  width: "153px",
                  height: "49px",
                  color: "white",
                  border: "none",
                  textTransform: "capitalize",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                  },
                }}
              >
                Get started
              </Button>
            </Box>
          )}

          <CustomDrawer userData={userData}></CustomDrawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;