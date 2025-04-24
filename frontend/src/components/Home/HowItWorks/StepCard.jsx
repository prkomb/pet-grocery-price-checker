import { Grid, Box, Typography } from "@mui/material";

function StepCard({ icon, title, description, bg }) {
  return (
    <>
      <Grid item xs={12} md={4}>
        <Box textAlign="center">
          <Box
            sx={{
              display: "inline-block",
              padding: "25px 26px",
              borderRadius: "20px",
              background: bg,
              height: "100%",
            }}
          >
            {icon}
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Manrope Variable",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "15px",
            fontSize: "22px",
            color: "#000000",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="body2">
          <Box
            component="span"
            sx={{
              width: "250px",
              display: "inline-block",
              lineHeight: "26px",
              fontSize: "16px",
              color: "#333333",
            }}
          >
            {description}
          </Box>
        </Typography>
      </Grid>
    </>
  );
}

export default StepCard;
