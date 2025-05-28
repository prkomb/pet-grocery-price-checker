import { Snackbar, Alert } from "@mui/material";
import { DangerousOutlined } from "@mui/icons-material";

const CustomSnackBar = ({
  isErrorOpenPushNotification,
  isOpenPushNotification,
  setErrorOpenPushNotification,
  setIsOpenPushNotification,
}) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isErrorOpenPushNotification}
        onClose={() => setErrorOpenPushNotification(false)}
        autoHideDuration={6000}
      >
        <Alert
          color="error"
          sx={{ bgcolor: "#D9346E", color: "white" }}
          onClose={() => setErrorOpenPushNotification(false)}
          icon={<DangerousOutlined color="white" />}
        >
          Something went wrong. Please try again
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isOpenPushNotification}
        onClose={() => setIsOpenPushNotification(false)}
        autoHideDuration={6000}
      >
        <Alert
          variant="filled"
          color="white"
          sx={{ bgcolor: "#34D399", color: "white" }}
          onClose={() => setIsOpenPushNotification(false)}
        >
          Your profile has been updated.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackBar;
