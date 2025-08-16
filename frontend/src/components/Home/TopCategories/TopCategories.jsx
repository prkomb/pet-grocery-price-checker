import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import CategoryCard from "./CategoryCard";

import { useSelector } from "react-redux";

export default function TopCategories() {
  const topCategories = useSelector(
    (state) => state?.products?.categories
  ).slice(0, 4);

  console.log(topCategories);

  return (
    <Box>
      <h2 className="text-2xl text-center mt-[64px]">Top Categories</h2>

      <div className="flex justify-center gap-6 mt-[58px] flex-wrap">
        {topCategories?.map((category) => {
          return (
            <CategoryCard key={category} category={category}></CategoryCard>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Button
          component={NavLink}
          to="/categories"
          sx={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
            px: 2.25,
            py: 0.875,
            color: "black",
            fontFamily: "Poppins",
            textTransform: "none",
            cursor: "pointer",
            transition: "all 0.2s linear",
            "&:hover": {
              bgcolor: "#34D399",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
              color: "white",
            },
          }}
        >
          Show More
        </Button>
      </div>
    </Box>
  );
}
