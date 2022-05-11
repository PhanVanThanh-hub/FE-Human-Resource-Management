import React from "react";
import { Paper, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../components/form-control/InputField/index";
import RadioGroupField from "../../../components/form-control/InputField/RadioGroupField";
import SelectField from "../../../components/form-control/InputField/SelectField";
import {
  InformationProps,
  GroupProps,
  RoleProps,
} from "../../../types/models/information";
import { parseDateString } from "../../../utils/helpers/function";

interface Props {
  listGroup: GroupProps[];
  listRole: RoleProps[];
  AddMember: (formValues: InformationProps) => void;
}

const FormAddMember = ({ listGroup, listRole, AddMember }: Props) => {
  const today = new Date();
  const optionRole = listRole.map((value: RoleProps) => {
    return { value: value.id || "", label: value.title };
  });
  const optionGroup = listGroup.map((value: GroupProps) => {
    return { value: value.id || "", label: value.name_group };
  });
  const initalValues: InformationProps = {
    id: 0,
    first_name: "",
    last_name: "",
    name: "",
    date_of_birth: "",
    earnings: 0,
    ethnicity: "",
    full_time: false,
    join_date: "",
    location: "",
    role: "",
    sex: false,
    email: "",
    phone: "",
    avatar: "",
    group: "",
  } as InformationProps;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object({
      first_name: yup.string().required("Please enter name"),
      last_name: yup.string().required("Please enter name"),
      sex: yup
        .string()
        .oneOf(["True", "False"], "Please choose sex")
        .required("Please choose sex"),
      earnings: yup
        .number()
        .typeError("You must specify a number")
        .min(0, "Min value 0.")
        .max(30000, "Max value 30000."),
      ethnicity: yup.string().required("Please enter ethnicity"),
      full_time: yup
        .string()
        .oneOf(["True", "False"], "Please choose sex")
        .required("Please choose sex"),
      location: yup.string().required("Please enter location"),
      email: yup
        .string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
      role: yup.string().required("Please choose Role"),
      group: yup.string().required("Please choose Group"),
      date_of_birth: yup
        .date()
        .transform(parseDateString)
        .max(today)
        .required("Please Enter Date of Birth"),
      join_date: yup
        .date()
        .transform(parseDateString)
        .max(today)
        .required("Please Enter Join Date"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InformationProps>({
    defaultValues: initalValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: InformationProps) => {
    AddMember(formValues);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Paper
        sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}
      >
        <Grid container spacing={1} sx={{ margin: "10px", width: "auto" }}>
          <Grid item xs={3}>
            <InputField
              name="first_name"
              control={control}
              label="First Name"
            />
          </Grid>
          <Grid item xs={3}>
            <InputField name="last_name" control={control} label="Last Name" />
          </Grid>
          <Grid item xs={6}>
            <InputField name="email" control={control} label="Email" />
          </Grid>
          <Grid item xs={6}>
            <InputField name="phone" control={control} label="Phone number" />
          </Grid>
          <Grid item xs={6}>
            <InputField name="location" control={control} label="Location" />
          </Grid>
          <Grid item xs={6}>
            <InputField name="earnings" control={control} label="Earnings" />
          </Grid>
          <Grid item xs={6}>
            <InputField name="ethnicity" control={control} label="Ethnicity" />
          </Grid>
          <Grid item xs={3}>
            <RadioGroupField
              name="sex"
              control={control}
              label="Sex"
              options={[
                { label: "Male", value: "True" },
                { label: "Female", value: "False" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <RadioGroupField
              name="full_time"
              control={control}
              label="Full Time"
              options={[
                { label: "Full Time", value: "True" },
                { label: "Part Time", value: "False" },
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectField
              name="role"
              control={control}
              label="Role"
              options={optionRole}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectField
              name="group"
              control={control}
              label="Group"
              options={optionGroup}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              name="date_of_birth"
              control={control}
              label="Data Of Birth"
            />
          </Grid>
          <Grid item xs={6}>
            <InputField name="join_date" control={control} label="Join Date" />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ textTransform: "none", marginBottom: "10px" }}
        >
          Add Member
        </Button>
      </Paper>
    </form>
  );
};
export default FormAddMember;
