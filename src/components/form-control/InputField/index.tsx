import { TextField, FormLabel, FormControl } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export default function InputField({
  name,
  control,
  label,
  ...inputProps
}: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error, invalid },
  } = useController({ name, control });
  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel
        sx={{
          fontSize: "0.875rem",
          color: "rgb(97, 97, 97)",
          fontWeight: "600",
          marginBottom: "8px",
          lineHeight: "1.4375em",
        }}
      >
        {label}
      </FormLabel>
      <TextField
        sx={{ margin: "0px", "& .MuiOutlinedInput-input": {} }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        error={invalid}
        helperText={error?.message}
        inputProps={inputProps}
        fullWidth
        margin="normal"
      />
    </FormControl>
  );
}
