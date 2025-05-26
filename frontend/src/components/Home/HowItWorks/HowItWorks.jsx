import { Typography, Box, Card, Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import CompareIcon from "@mui/icons-material/Compare";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import StepCard from "./StepCard";

const features = [
  {
    id: "1",
    icon: <SearchIcon className="text-white w-10 h-10" />,
    title: "Search Product",
    description: "Quickly find products by name or barcode input.",
    bg: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
  },
  {
    id: 2,
    icon: <CompareIcon className="text-white w-10 h-10" />,
    title: "Compare Prices",
    description: "Compare prices across stores to find the best deal.",
    bg: "linear-gradient(to right, #3B82F6 0%, #38BDF8 100%);",
  },
  {
    id: 3,
    icon: <TrackChangesIcon className="text-white w-10 h-10" />,
    title: "Track & Save",
    description: "Set alerts and track price drops for saved products.",
    bg: "linear-gradient(to right, #10B981 0%, #34D399 100%);",
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto " sx={{}}>
      <Typography
        className="text-center font-bold"
        sx={{ fontFamily: "Poppins", fontSize: "28px", marginTop: "35px" }}
      >
        How it works?
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={6}
          sx={{ marginTop: "30px" }}
        >
          {features.map(({ id, title, description, icon, bg }) => {
            return (
              <StepCard
                key={id}
                id={id}
                title={title}
                description={description}
                icon={icon}
                bg={bg}
              ></StepCard>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default HowItWorks;
