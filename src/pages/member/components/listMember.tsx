import * as React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Avatar,
  Paper,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InformationProps } from "../../../types/models/information";
import { ROLE_STAFF } from "../../../constants/employee";
import { useHistory } from "react-router-dom";

const head = [
  "#",
  "User Profile",
  "Role",
  "Location",
  "Phone",
  "Date Of Birth",
  "Join Date",
  "View",
];

interface Props {
  listMember: InformationProps[];
}

export default function TableList({ listMember }: Props) {
  const history = useHistory();
  const toProfileDetail = (slug: string) => {
    return history.push(`/profile/${slug}`);
  };
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
      }}
    >
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
            {listMember?.map((member: InformationProps, index: number) => {
              return (
                <TableRow
                  key={member.id}
                  sx={{
                    "& .MuiTableCell-body": {
                      fontWeight: "400",
                      lineHeight: "1.5em",
                      color: "rgb(97, 97, 97)",
                    },
                  }}
                >
                  <TableCell key={member.id}>{index + 1}</TableCell>
                  <TableCell sx={{ cursor: "pointer" }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item>
                        <Avatar
                          sx={{
                            width: "40px",
                            height: "40px",
                          }}
                          src={member.avatar}
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color: "rgb(33, 33, 33)",
                            lineHeight: "1.75",
                            textAlign: "left",
                          }}
                        >
                          {member.first_name} {member.last_name}
                          {member.role === ROLE_STAFF.MANAGER ? (
                            <CheckCircleIcon
                              sx={{
                                fontSize: "1.5rem",
                                color: "rgb(0, 200, 83)",
                                width: "14px",
                                height: "14px",
                                fill: "currentcolor",
                                marginLeft: "10px",
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            color: "rgb(158, 158, 158)",
                            lineHeight: "1.57",
                            textAlign: "left",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {member.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.location}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.date_of_birth} </TableCell>
                  <TableCell>{member.join_date}</TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        color: "rgb(85, 105, 255)",
                        textTransform: "none",
                        lineHeight: "1.5",
                        padding: "7px 12px",
                        alignSelf: "center",
                        fontWeight: "normal",
                        backgroundColor: "rgba(85, 105, 255, 0.1)",
                        borderRadius: "10px",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "rgb(85, 105, 255)",
                        },
                      }}
                      onClick={() => toProfileDetail(member.slug!)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
