import React, { useEffect, useState } from "react";
import groupApi from "../../../api/groupApi";
import ListGroup from "../components/table";
import { GroupProps } from "../../../types/models/information";
import { AppSweetaler } from "../../../components/sweetalert";
import {
  STATUS_ADD_GROUP,
  SWEETALERT2_ADD_GROUP,
} from "../../../constants/group";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectListGroup,
  fetchGroupList,
} from "../../../redux/group/groupSlice";

const GroupPage = () => {
  const [error, setError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [typeSweetaler, setTypeSweetaler] = useState<string>("error");
  const dispatch = useAppDispatch();
  const groups: GroupProps[] = useAppSelector(selectListGroup);
  useEffect(() => {
    dispatch(fetchGroupList({}));
  }, [dispatch, error]);
  const addGroup = async (value: GroupProps) => {
    setError(false);
    const resp = await groupApi.addGroup(value);
    if (resp === STATUS_ADD_GROUP.SUCCESS) {
      setTitle(SWEETALERT2_ADD_GROUP.SUCCESS.title);
      setLabel(SWEETALERT2_ADD_GROUP.SUCCESS.label);
      setTypeSweetaler(SWEETALERT2_ADD_GROUP.SUCCESS.status);
    }
    if (resp === STATUS_ADD_GROUP.BAD_REQUEST) {
      setTitle(SWEETALERT2_ADD_GROUP.BAD_REQUEST.title);
      setLabel(SWEETALERT2_ADD_GROUP.BAD_REQUEST.label);
      setTypeSweetaler(SWEETALERT2_ADD_GROUP.BAD_REQUEST.status);
    }
    return setError(true);
  };

  return (
    <>
      <ListGroup groups={groups} addGroup={addGroup} />
      {error && (
        <AppSweetaler title={title} label={label} status={typeSweetaler} />
      )}
    </>
  );
};

export default GroupPage;
