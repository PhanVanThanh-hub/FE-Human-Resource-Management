import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchData,
  selectListMember,
  selectCount,
} from "../../../redux/member/memberSlice";
import TableList from "../components/listMember";
import { InformationProps } from "../../../types/models/information";
import { useSelector } from "react-redux";
import {
  Pagination,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MemberPage = () => {
  const dispatch = useAppDispatch();
  const listMember: InformationProps[] = useAppSelector(selectListMember);
  const count: number = useSelector(selectCount);
  const SIZE_PAGE = 10;
  const pagination = Math.ceil(count / SIZE_PAGE);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<object>({ page: 1 });
  const changePage = (event: any, pageNumber: number) => {
    setPage(pageNumber);
    setFilter({ ...filter, page: pageNumber });
  };
  const handleInputChange = (event: any) => {
    setPage(1);
    setFilter({ user: event.target.value, page: 1 });
  };
  useEffect(() => {
    dispatch(fetchData(filter));
  }, [dispatch, filter, page]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end", margin: "10px 0px" }}>
        <OutlinedInput
          sx={{
            borderRadius: "12px",
            paddingLeft: "14px",
            lineHeight: "1.4375em",
          }}
          onChange={handleInputChange}
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
      </Box>

      <TableList listMember={listMember} />
      <Pagination
        count={pagination}
        color="secondary"
        sx={{ display: "flex", justifyContent: "end", margin: "10px 0px" }}
        onChange={changePage}
      />
    </>
  );
};
export default MemberPage;
