import { Box, Typography, Button, Stack } from "@mui/material";

const SecondaryInformation = ({
  availabilityStatus,
  stock,
  shippingInformation,
  price,
}) => {
  return (
    <Box alignSelf="start">
      <Box
        sx={{
          width: "687px",
          p: 2,
          borderRadius: "10px",
          bgcolor: "#E5E7EB",
          transition: "all .3s linear",
          "&:hover": {
            bgcolor: "#fff",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            pb: 2,
            fontFamily: "Inter",
            color: "#34D399",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {availabilityStatus}: {stock}
        </Typography>

        <Box display="flex" alignItems="center" gap={2} sx={{ pb: 2 }}>
          <Button
            sx={{
              bgcolor: "#34D399",
              textTransform: "capitalize",
              borderRadius: "20px",
              fontSize: "10px",
              color: "#000",
            }}
          >
            Delivery
          </Button>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontFamily: "Inter",
              fontStyle: "italic",
            }}
          >
            {shippingInformation}
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography variant="body1" color="initial">
            £{price}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              textDecoration: "line-through;",
              color: "grey",
              fontSize: "10px",
            }}
          >
            £{price}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SecondaryInformation;
