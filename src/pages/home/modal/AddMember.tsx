import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../../../components/form-control/InputField/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface Props {
  initalValues?: any;
  onSubmit: (formValues: any) => void;
}

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

export default function AddMemberModal({ initalValues, onSubmit }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const schema = yup
    .object({
      name: yup
        .string()
        .required("Please enter name")
        .test("too-short", "Name is too short", (value: any) => {
          if (!value) return true;
          return value?.trim()?.split(/\s+/)?.length >= 2;
        }),
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
  const handleFormSubmit = async (formValues: any) => {
    console.log("formValue:", formValues);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <InputField name="name" control={control} label="Full Name" />
              <Box mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Add
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
