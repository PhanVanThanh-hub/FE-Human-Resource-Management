import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GroupProps } from "../../../types/models/information";
import InputField from "../../../components/form-control/InputField/index";
import groupApi from "../../../api/groupApi";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function AddGroupModal({ open, handleClose }: Props) {
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
  } = useForm<GroupProps>({
    defaultValues: initalValues,
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = async (formValues: GroupProps) => {
    await groupApi.addGroup(formValues);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Group
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField name="name_group" control={control} label="Name Group" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ textTransform: "none", marginBottom: "10px" }}
          >
            Add Group
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
