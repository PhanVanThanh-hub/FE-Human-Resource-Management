import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DividerUI from "../../../components/divider/DividerUI";
import { GroupProps } from "../../../types/models/information";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Paper,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import InformationGroup from "../components/InformationGroup";
import AddGroupModal from "../modal/AddGroup";

const head = [
  "#",
  "Group Name",
  "Manager",
  "Number Of Members",
  "Salary",
  "Action",
];

interface Props {
  groups: GroupProps[];
  addGroup: (value: GroupProps) => void;
}

export default function ListGroup({ groups, addGroup }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Paper
      elevation={0}
      sx={{
        color: "rgb(97, 97, 97)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "none",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "24px",
        border: "1px solid rgba(144, 202, 249, 0.46)",
        background: "rgb(255, 255, 255)",
      }}
    >
      <CardHeader
        title={
          <Typography
            sx={{
              color: "rgb(33, 33, 33)",
              fontWeight: "600",
              fontSize: "1.25rem",
              lineHeight: "1.167",
            }}
          >
            List Group
          </Typography>
        }
        action={
          <Tooltip title="Add Group">
            <IconButton onClick={handleOpen}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <DividerUI />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {head.map(function (title) {
                if (title === "Action") {
                  return (
                    <TableCell
                      key={title}
                      sx={{
                        fontSize: "0.875rem",
                        color: "rgb(33, 33, 33)",
                        fontWeight: "500",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      {title}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell
                      key={title}
                      sx={{
                        fontSize: "0.875rem",
                        color: "rgb(33, 33, 33)",
                        fontWeight: "500",
                      }}
                    >
                      {title}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {groups?.map((group: GroupProps) => {
              return <InformationGroup group={group} key={group.id} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddGroupModal
        open={open}
        handleClose={handleClose}
        addGroup={addGroup}
      />
    </Paper>
  );
}
