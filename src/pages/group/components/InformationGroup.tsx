import React, { useEffect, useState } from "react";
import {
  TableCell,
  TableRow,
  Avatar,
  AvatarGroup,
  Typography,
} from "@mui/material";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import BlockTwoToneIcon from "@mui/icons-material/BlockTwoTone";
import ButtonBase from "@mui/material/ButtonBase";
import employeeApi from "../../../api/employeeApi";
import { InformationProps } from "../../../types/models/information";
import { formatPrice } from "../../../utils/helpers/function";
import { useHistory } from "react-router-dom";
import { GroupProps } from "../../../types/models/group";
import { ROLE_STAFF } from "../../../constants/employee";

interface Props {
  group: GroupProps;
}

const InformationGroup = ({ group }: Props) => {
  const [groupOverview, setGroupOverview] = useState<InformationProps[]>([]);
  const [manager, setManger] = useState<InformationProps>();
  const [total_salary, setSalary] = useState<number>(0);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const res = await employeeApi.getEmployeeGroup(group.id);
        setGroupOverview(res.data);
        const manager = res.data.find(
          (element: { role: string }) => element.role === ROLE_STAFF.MANAGER
        );
        setManger(manager);
        const salary = res.data
          .map((item: InformationProps) => item.earnings)
          .reduce((prev: number, next: number) => prev + next, 0);
        setSalary(salary);
      } catch (error) {}
    })();
  }, []);
  const toGroupDetailPage = () => {
    return history.push(`group/${group.id}`);
  };
  return (
    <TableRow
      sx={{
        cursor: "pointer",
        "& .MuiTableCell-body": {
          fontWeight: "400",
          lineHeight: "1.5em",
          color: "rgb(97, 97, 97)",
        },
      }}
      key={group.id}
      onClick={toGroupDetailPage}
    >
      <TableCell>{group.name_group} </TableCell>
      <TableCell>
        <Typography>{group.name_group}</Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {manager?.first_name} {manager?.last_name}
        </Typography>{" "}
      </TableCell>
      <TableCell>
        <AvatarGroup max={3} sx={{ justifyContent: "left" }}>
          {groupOverview.map((value: InformationProps) => {
            return (
              <Avatar alt="Remy Sharp" src={value.avatar} key={value.id} />
            );
          })}
        </AvatarGroup>
      </TableCell>
      <TableCell>
        <Typography>{formatPrice(total_salary)}</Typography>
      </TableCell>
      <TableCell sx={{ textAlign: "center" }} key="action">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonBase sx={{ color: "rgb(33, 150, 243)", padding: "12px" }}>
            <ChatBubbleTwoToneIcon />
          </ButtonBase>
          <ButtonBase sx={{ color: "rgb(216, 67, 21)", padding: "12px" }}>
            <BlockTwoToneIcon />
          </ButtonBase>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default InformationGroup;
