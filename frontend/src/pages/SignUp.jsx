import { Box, Container } from "@mui/material";
import Header from "../../src/components/SignIn/Header";
import Content from "../components/SignIn/Content";

const SignUp = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",

          backgroundImage: "linear-gradient(#1E40AF, #34D399)",
        }}
      >
        <Container>
          <Header></Header>
          <Content />
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
