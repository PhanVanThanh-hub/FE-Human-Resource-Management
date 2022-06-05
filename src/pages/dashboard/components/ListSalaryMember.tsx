import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Avatar,
  List,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Pagination,
} from "@mui/material";
import { InformationProps } from "../../../types/models/information";
import { formatPrice } from "../../../utils/helpers/function";
import { useHistory } from "react-router-dom";
import {
  fetchDataFilter,
  selectEmployeeFilter,
} from "../../../redux/dashboard/dashboardSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface Props {
  employees: InformationProps[];
}

const ListSalaryMember = ({ employees }: Props) => {
  const dispatch = useAppDispatch();
  const listMember: InformationProps[] = useAppSelector(selectEmployeeFilter);
  const [page, setPage] = useState<number>(1);
  const SIZE_PAGE = 5;
  const pagination = Math.ceil(employees.length / SIZE_PAGE);
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchDataFilter({ page: page }));
  }, [dispatch, page]);
  const changePage = (event: any, pageNumber: number) => {
    setPage(pageNumber);
  };
  const toProfileDetail = (slug: string) => {
    return history.push(`/profile/${slug}`);
  };
  return (
    <Paper
      sx={{
        color: "rgb(34, 51, 84)",
        borderRadius: "10px",
        padding: "0px",
        boxShadow:
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px",
          background: "rgba(34, 51, 84, 0.02)",
        }}
      >
        <Typography
          sx={{ fontWeight: "700", fontSize: "16px", lineHeight: "1.235" }}
        >
          Salary Member
        </Typography>
      </Box>
      <List sx={{ height: "370px" }}>
        <Divider />
        {listMember.map((employee: InformationProps) => {
          return (
            <ListItem key={employee.id}>
              <ListItemAvatar>
                <Avatar src={employee.avatar}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "1.334",
                      color: "rgb(34, 51, 84)",
                    }}
                  >
                    {employee.first_name + employee.last_name}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "1.57",
                      color: "rgba(34, 51, 84, 0.7)",
                    }}
                  >
                    {employee.email}
                  </Typography>
                }
              />
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ marginRight: "10px" }}>
                  {formatPrice(employee.earnings)}
                </Typography>
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
                  onClick={() => toProfileDetail(employee.slug!)}
                >
                  View
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </List>
      <Pagination
        count={pagination}
        color="secondary"
        sx={{ display: "flex", justifyContent: "end", margin: "10px 0px" }}
        onChange={changePage}
      />
    </Paper>
  );
};

export default ListSalaryMember;
