import React, { useEffect, useState } from "react";
import TableList from "../components/table";
import { useParams } from "react-router-dom";
import { getObjNthItem } from "../../../utils/helpers/function";
import { InformationProps } from "../../../types/models/information";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectListEmployee,
  fetchEmployeeList,
} from "../../../redux/employee/employeeSlice";
import { fetchTransitionGroup } from "../../../redux/group_member/groupMemberSlice";
import { AppSweetaler } from "../../../components/sweetalert/index";
import { GroupTransitionProps } from "../../../types/models/group";

const GroupMember = () => {
  const params = useParams();
  const idGroup: number = getObjNthItem(params, 1);
  const dispatch = useAppDispatch();
  const employee: InformationProps[] = useAppSelector(selectListEmployee);
  const [newParams, setParmas] = useState<GroupTransitionProps>();
  const [title, setTitle] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [typeSweetaler, setTypeSweetaler] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const transitionGroup = (
    id: string,
    profileID: number,
    name: string,
    group: number
  ) => {
    const params = {
      id: id,
      profileID: profileID,
    };
    setParmas({ id: id, name: name, group: group });
    dispatch(fetchTransitionGroup(params));
    setError(true);
  };
  useEffect(() => {
    dispatch(fetchEmployeeList({ group: idGroup }));
  }, [dispatch, idGroup, newParams]);

  useEffect(() => {
    setTitle("Complete");
    setLabel(
      `Transition group for ${newParams?.name}:${newParams?.group} to ${newParams?.id}`
    );
    setTypeSweetaler("success");
  }, [newParams]);
  console.log("error:", error);
  return (
    <>
      <TableList
        memberGroup={employee}
        idGroup={idGroup}
        transitionGroup={transitionGroup}
      />
      {error && (
        <AppSweetaler title={title} label={label} status={typeSweetaler} />
      )}
    </>
  );
};

export default GroupMember;
