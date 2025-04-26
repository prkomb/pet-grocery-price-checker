import { Box, Stack, Container, Typography, Button } from "@mui/material";
import Brand from "@/assets/images/Brand.svg";
import Header from "../components/SignIn/Header";
import Content from "../components/SignIn/Content";
const SignIn = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",

          backgroundImage: "linear-gradient(#1E40AF, #34D399)",
        }}
      >
        <Container>
          <Header />
          <Content />
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
