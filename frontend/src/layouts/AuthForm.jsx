import { useState } from "react";
import {
  Alert,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import {
  ChevronLeft,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  NavLink,
} from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { loginUser } from "../store/features/login/loginThunk";
import { registerUser } from "../store/features/register/registerThunk";
import { loginSchema } from "../helpers/yupHandler/loginFormValidation";
import registerSchema from "../helpers/yupHandler/registerFormValidation";
import Brand from "@/assets/images/Brand.svg";

function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegister = useLocation().pathname === "/register";

  const { title, buttonText, bottomText, bottomLinkHref, bottomLinkText } =
    useLoaderData();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  const onSaveForm = async ({ email, password }) => {
    setServerError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isRegister) {
        await dispatch(registerUser({ email, password })).unwrap();
        setSuccess(
          "Account created. Check your email to confirm it, then log in."
        );
      } else {
        await dispatch(loginUser({ email, password })).unwrap();
        navigate("/home");
      }
    } catch (error) {
      setServerError(error?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg flex min-h-dvh items-center justify-center px-4 py-8">
      <main className="w-full max-w-[440px] rounded-[28px] bg-surface p-6 shadow-[0_24px_60px_rgb(15_46_43/0.28)] sm:p-10">
        <NavLink
          to="/home"
          className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          <ChevronLeft fontSize="small" aria-hidden="true" />
          Back to home
        </NavLink>

        <div className="mb-1 mt-2 flex items-center gap-2">
          <img src={Brand} alt="" width={30} height={30} />
          <span className="font-heading text-lg font-extrabold text-ink">
            PriceHunt
          </span>
        </div>

        <h1 className="mb-6 text-[clamp(1.75rem,1.4rem+1.4vw,2.25rem)] font-extrabold tracking-tight">
          {title}
        </h1>

        <div aria-live="polite">
          {serverError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {serverError}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}
        </div>

        <Stack
          component="form"
          spacing={2.5}
          noValidate
          onSubmit={handleSubmit(onSaveForm)}
        >
          <TextField
            {...register("email")}
            label="Email"
            type="email"
            autoComplete="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            {...register("password")}
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete={isRegister ? "new-password" : "current-password"}
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {!isRegister && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={<span className="text-sm">Remember me</span>}
              />
              <NavLink
                to="/forgot-password"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-primary-hover hover:underline"
              >
                Forgot password?
              </NavLink>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <CircularProgress size={22} color="inherit" aria-label="Loading" />
            ) : (
              buttonText
            )}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            {bottomText}{" "}
            <NavLink
              to={bottomLinkHref}
              className="font-bold text-primary hover:text-primary-hover hover:underline"
            >
              {bottomLinkText}
            </NavLink>
          </p>
        </Stack>
      </main>
    </div>
  );
}

export default AuthForm;
