import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { login } from "../../../redux/auth/AuthSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useHistory } from "react-router-dom";
import { AppSweetaler } from "../../../components/sweetalert/index";
import { STATUS_LOGIN, SWEETALERT2_LOGIN } from "../../../constants/login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [title, setTitle] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const onSubmit = async (values: any) => {
    setIsLogin(false);
    try {
      const reps = await dispatch(login(values));
      if (!reps.payload) {
        history.replace("");
        return window.location.reload();
      }
      if (reps.payload === STATUS_LOGIN.NETWORK_ERROR) {
        setTitle(SWEETALERT2_LOGIN.NETWORK_ERROR.title);
        setLabel(SWEETALERT2_LOGIN.NETWORK_ERROR.label);
        setStatus(SWEETALERT2_LOGIN.NETWORK_ERROR.status);
      }
      if (reps.payload === STATUS_LOGIN.UNAUTHORIZED) {
        setTitle(SWEETALERT2_LOGIN.UNAUTHORIZED.title);
        setLabel(SWEETALERT2_LOGIN.UNAUTHORIZED.label);
        setStatus(SWEETALERT2_LOGIN.UNAUTHORIZED.status);
      }
      return setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "rgb(227, 242, 253)",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Paper
        sx={{
          border: "1px solid rgba(144, 202, 249, 0.46)",
          borderRadius: "8px",
          width: "400px",
        }}
      >
        <Box sx={{ padding: "24px" }}>
          <LoginForm onSubmit={onSubmit} />
        </Box>
      </Paper>
      {isLogin && <AppSweetaler title={title} status={status} label={label} />}
    </Box>
  );
};

export default AuthPage;
