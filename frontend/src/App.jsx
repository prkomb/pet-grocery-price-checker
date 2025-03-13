import "./App.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Container,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import Brand from "./assets/images/Brand.png";

import "@fontsource/poppins/800.css";

import { Search } from "@mui/icons-material";

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <AppBar color="">
          <Toolbar sx={{ margin: "20px" }}>
            <Box component="img" src={Brand}></Box>
            <Typography sx={{ ml: 2 }} className="text-poppins-800">
              PriceHunt
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>

            <OutlinedInput
              sx={{
                width: "502px",
                height: "49px",
                borderRadius: "80px",
                backgroundColor: "#efefef",
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
              sx={{
                mr: 2,
                width: "91px",
                height: "54px",
                borderRadius: "76px",
                color: "#170f49",
                border: "1px solid #d9dbe9",
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
              }}
            >
              Get started
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default App;
