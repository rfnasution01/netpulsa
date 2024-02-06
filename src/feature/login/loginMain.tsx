import { Box, Snackbar, Fade, FadeProps, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { LoginForm, LoginTitle } from ".";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/slices/login";
import { api } from "../../store/api";

export function LoginMain() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState<{
    open: boolean;
    vertical: "top" | "bottom";
    horizontal: "left" | "right" | "center";
    Transition: (props: FadeProps) => JSX.Element;
  }>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    Transition: Fade,
  });
  const { vertical, horizontal, open } = state;
  const [login, { isError, error, isSuccess, isLoading }] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwtPayloadAvailable, setJwtPayloadAvailable] = useState(
    !!Cookies.get("jwtPayload")
  );
  const errorMsg = error as {
    data?: {
      message?: string;
    };
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      dispatch(api.util.resetApiState());
      await login({ email, password }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkJwtPayloadAvailability = () => {
      setJwtPayloadAvailable(!!Cookies.get("jwtPayload"));
    };

    const interval = setInterval(checkJwtPayloadAvailability, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (jwtPayloadAvailable) {
      navigate("/");
    }
  }, [jwtPayloadAvailable, navigate]);

  useEffect(() => {
    if (isError || isSuccess) {
      setState({ ...state, open: true });
    }
  }, [isError, isSuccess]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LoginTitle />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={isError ? "warning" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isError
            ? errorMsg?.data?.message || "Wrong email or password"
            : "Login Success"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
