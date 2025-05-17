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
} from "@mui/material";
import Brand from "@/assets/images/Brand.svg";
import { Search, Close } from "@mui/icons-material";
import { responsiveHeaderPages } from "./ResponsiveHeaderData";
import { NavLink } from "react-router-dom";

import { useState } from "react";

const ResponsiveHeader = ({ closeDrawer }) => {
  const userEmail = useState(JSON.parse(localStorage.getItem("user")));
  console.log(userEmail.at(0).email);

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
                      {userEmail.at(0).email ? (
                        <ListItemText>
                          <Typography>{userEmail.at(0).email}</Typography>
                        </ListItemText>
                      ) : (
                        <Button
                          sx={{
                            bgcolor: "#00FF84",
                            padding: "12px",
                            fontFamily: "Poppins",
                            color: "white",
                            borderRadius: "8px",
                          }}
                        >
                          <Avatar src={userEmail.at(0).avatar}></Avatar>
                          <NavLink to={href}>{label}</NavLink>
                        </Button>
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
