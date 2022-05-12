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
  CardHeader,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
  ButtonBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import BlockTwoToneIcon from "@mui/icons-material/BlockTwoTone";
import { useHistory } from "react-router-dom";
import DividerUI from "../../../components/divider/DividerUI";
import { InformationProps } from "../../../types/models/information";
import { ROLE_STAFF } from "../../../constants/employee";
import { formatPrice } from "../../../utils/helpers/function";

const head = [
  "#",
  "User Profile",
  "Role",
  "Location",
  "Earnings",
  "Date Of Birth",
  "Action",
];

interface Props {
  memberGroup: InformationProps[];
  idGroup: number;
}

export default function TableList({ memberGroup, idGroup }: Props) {
  const history = useHistory();
  const toProfilePage = (slug: string) => {
    return history.replace(`/profile/${slug}`);
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
            List member of group {idGroup}
          </Typography>
        }
        action={
          <OutlinedInput
            sx={{
              borderRadius: "12px",
              paddingLeft: "14px",
              lineHeight: "1.4375em",
            }}
            id="input-search-card-style1"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
          />
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
            {memberGroup?.map((member: InformationProps, index: number) => {
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
                  <TableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() => toProfilePage(member.slug!)}
                  >
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
                  <TableCell>{formatPrice(member.earnings)}</TableCell>
                  <TableCell>{member.date_of_birth} </TableCell>
                  <TableCell sx={{ textAlign: "center" }} key="action">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ButtonBase
                        sx={{ color: "rgb(33, 150, 243)", padding: "12px" }}
                      >
                        <ChatBubbleTwoToneIcon />
                      </ButtonBase>
                      <ButtonBase
                        sx={{ color: "rgb(216, 67, 21)", padding: "12px" }}
                      >
                        <BlockTwoToneIcon />
                      </ButtonBase>
                    </div>
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
