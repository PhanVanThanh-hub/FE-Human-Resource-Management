import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import InputField from "../../../components/form-control/InputField/index";
import PasswordField from "../../../components/form-control/InputField/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginProps } from "../../../types/models/login";

interface Props {
  onSubmit: (values: any) => Promise<void | JSX.Element>;
}

const LoginForm = ({ onSubmit }: Props) => {
  const initalValues: LoginProps = {
    username: "",
    password: "",
  } as LoginProps;
  const schema = yup
    .object({
      username: yup.string().required("Please enter name"),
      password: yup.string().required("Please enter name"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<any>({
    defaultValues: initalValues,
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (formValues: LoginProps) => {
    onSubmit(formValues);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: "rgb(103, 58, 183)",
            lineHeight: "1.2",
            fontWeight: "700",
            fontSize: "1.5rem",
            margin: "0px 0px 0.35em",
          }}
        >
          Hi,Welcome Back
        </Typography>
        <Typography
          sx={{
            color: "rgb(97, 97, 97)",
            lineHeight: "1.235",
            fontWeight: "600",
            fontSize: "1rem",
            margin: "0px 0px 0.35em",
          }}
        >
          Login in to your account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField name="username" control={control} label="Username" />
          <PasswordField name="password" control={control} label="Password" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ textTransform: "none", margin: "10px 0px", width: "100%" }}
          >
            Sign In
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
