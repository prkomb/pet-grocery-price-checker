import {
  List,
  ListItem,
  Container,
  Box,
  Typography,
  IconButton,
  Divider,
  ListItemText,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Brand from "@/assets/images/Brand.svg";
import { Search, Close } from "@mui/icons-material";
import { responsiveHeaderPages } from "./ResponsiveHeaderData";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/features/logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ResponsiveHeader = ({ closeDrawer, userName, userSurname }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Here");
    dispatch(logout({ navigate }));
  };

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <header className="header">
        <Container maxWidth="lg" sx={{ width: "430px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            gap={2}
            paddingY={2}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Box component="img" src={Brand}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontFamily: "Poppins" }}
              >
                PriceHunt
              </Typography>
            </Box>
            <Box textAlign="center">
              <IconButton disableRipple disableFocusRipple>
                <Search></Search>
              </IconButton>

              <IconButton
                disableRipple
                disableFocusRipple
                onClick={closeDrawer}
              >
                <Close></Close>
              </IconButton>
            </Box>
          </Box>
          <Divider></Divider>
          <Box>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {responsiveHeaderPages.map(({ label, href, id }) => (
                <ListItem disableGutters key={id}>
                  {label === "Login/ Sign up" ? (
                    <>
                      {user?.email ? (
                        <>
                          <Avatar
                            src={`https://ui-avatars.com/api/?name=${userName}+${userSurname}&background=34D399`}
                          ></Avatar>
                          <Typography
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            aria-expanded={open ? "true" : undefined}
                            sx={{
                              padding: "12px",

                              fontFamily: "Poppins",
                              color: "black",
                              borderRadius: "8px",
                            }}
                          >
                            {userName} {userSurname}
                          </Typography>

                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                          >
                            <MenuItem
                              onClick={handleMenuClose}
                              component={Link}
                              to={"/profile"}
                            >
                              Profile
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                              My account
                            </MenuItem>
                            <MenuItem
                              component="button"
                              onClick={() => {
                                handleLogout();
                              }}
                            >
                              Logout
                            </MenuItem>
                          </Menu>
                        </>
                      ) : (
                        <div>
                          <Button
                            variant="outlined"
                            component={NavLink}
                            to="/login"
                            sx={{
                              padding: "10px",
                              color: "black",
                              borderRadius: "8px",
                              fontFamily: "Poppins",
                              bgcolor: "#34D399",
                              border: "1px solid #34D399",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: "#F9FAFB",
                                color: "#34D399",
                                border: "1px solid #34D399",
                              },
                            }}
                          >
                            Login / Sign up
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <ListItemText>
                      <NavLink to={href}>{label}</NavLink>
                    </ListItemText>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </header>
    </>
  );
};

export default ResponsiveHeader;
