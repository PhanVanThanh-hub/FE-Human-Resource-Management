import React, { useEffect, useState } from "react";
import employeeApi from "../../../api/employeeApi";
import TableList from "../components/table";
import { useParams } from "react-router-dom";
import { getObjNthItem } from "../../../utils/helpers/function";

const GroupMember = () => {
  const [memberGroup, setMemberGroup] = useState();
  const params = useParams();
  const idGroup = getObjNthItem(params, 1);

  useEffect(() => {
    (async () => {
      try {
        const res = await employeeApi.getEmployeeGroup(idGroup);
        setMemberGroup(res.data);
      } catch (error) {}
    })();
  }, []);

  return <TableList memberGroup={memberGroup} idGroup={idGroup} />;
};

export default GroupMember;
