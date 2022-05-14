import React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GroupProps } from "../../../types/models/information";
import InputField from "../../../components/form-control/InputField/index";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "20px",
};

interface Props {
  open: boolean;
  handleClose: () => void;
  addGroup: (value: GroupProps) => void;
}

export default function AddGroupModal({ open, handleClose, addGroup }: Props) {
  const initalValues: GroupProps = {
    name_group: "",
  } as GroupProps;
  const schema = yup
    .object({
      name_group: yup.string().required("Please enter name group"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<GroupProps>({
    defaultValues: initalValues,
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (formValues: GroupProps) => {
    handleClose();
    addGroup(formValues);
    reset({ name_group: "" });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Add Group
        </Typography>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField name="name_group" control={control} label="Name Group" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ textTransform: "none", marginTop: "10px", width: "100%" }}
          >
            Add Group
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
