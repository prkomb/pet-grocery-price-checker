// import "./../Header/Header.css";
import "@/components/Home/Header/Header.css";
import { NavLink } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Search, Menu } from "@mui/icons-material";
import Brand from "@/assets/images/Brand.svg";
import CustomDrawer from "./Drawer";

const Header = () => {
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

          <Button
            variant="outlined"
            className=""
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
              },
            }}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            className="text-poppins-800"
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
                md: "block",
              },
            }}
          >
            Get started
          </Button>

          <CustomDrawer></CustomDrawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
