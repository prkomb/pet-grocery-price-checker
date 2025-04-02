import Star from "@/assets/images/Star.svg";
import RightStar from "@/assets/images/RightStar.svg";
import { Box } from "@mui/material";

const RigtStartsPair = () => {
  return (
    <>
      <Box
        component="img"
        src={Star}
        sx={{ position: "absolute", bottom: 0, right: 175 }}
      ></Box>

      <Box
        component="img"
        src={RightStar}
        sx={{ position: "absolute", bottom: 0, right: 0 }}
      ></Box>
    </>
  );
};

export default RigtStartsPair;
