import Star from "@/assets/images/Star.svg";
import BigStar from "@/assets/images/BigStar.svg";
import { Box } from "@mui/material";

const LeftStartsPair = () => {
  return (
    <>
      <Box
        component="img"
        src={Star}
        sx={{ position: "absolute", bottom: 0, left: 175 }}
      ></Box>

      <Box
        component="img"
        src={BigStar}
        sx={{ position: "absolute", bottom: 0 }}
      ></Box>
    </>
  );
};

export default LeftStartsPair;
