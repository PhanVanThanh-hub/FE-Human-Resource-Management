import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import FormAddMember from "../components/FormAddMember";
import roleApi from "../../../api/roleApi";
import groupApi from "../../../api/groupApi";
import {
  GroupProps,
  InformationProps,
  RoleProps,
} from "../../../types/models/information";
import {
  postEmployee,
  selectLoading,
} from "../../../redux/employee/employeeSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { AppSweetaler } from "../../../components/sweetalert/index";
import { unwrapResult } from "@reduxjs/toolkit";

const AddMember = () => {
  const [listGroup, setListGroup] = useState<GroupProps[]>([]);
  const [listRole, setListRole] = useState<RoleProps[]>([]);
  const [messages, setMessages] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [typeSweetaler, setTypeSweetaler] = useState<string>("error");
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    (async () => {
      try {
        const getGroups = await groupApi.getAll();
        setListGroup(getGroups.data);
        const getRole = await roleApi.getAll();
        setListRole(getRole.data);
      } catch (error) {}
    })();
  }, []);

  const AddMember = async (formValues: InformationProps) => {
    setError(false);
    const actions = postEmployee(formValues);
    await dispatch(actions)
      .then(unwrapResult)
      .then((result) => {
        setMessages(result.message);
      });
  };

  useEffect(() => {
    if (messages === "Email was Exists") {
      setTitle("Email was Exists");
      setLabel("");
      setTypeSweetaler("error");
    } else {
      setTitle("Complete");
      setLabel("");
      setTypeSweetaler("success");
    }
    setError(true);
  }, [messages]);
  const renderLoadingPage = () => {
    if (loading)
      return (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-50px",
            marginLeft: "-50px",
            width: "2000px",
            height: "2000px",
          }}
        />
      );
    return <></>;
  };
  return (
    <Box>
      {renderLoadingPage()}
      <FormAddMember
        listGroup={listGroup}
        listRole={listRole}
        AddMember={AddMember}
      />
      {error && (
        <AppSweetaler title={title} label={label} status={typeSweetaler} />
      )}
    </Box>
  );
};

export default AddMember;
