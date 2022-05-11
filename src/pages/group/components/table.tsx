import * as React from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { CardHeader } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import DividerUI from "../../../components/divider/DividerUI";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import InformationGroup from "../components/InformationGroup";

const head = [
  "#",
  "Group Name",
  "Manager",
  "Number Of Members",
  "Salary",
  "Action",
];

interface Props {
  groups: any;
}

export default function ListGroup({ groups }: Props) {
  const [value, setValue] = React.useState("");
  const handleChangeSearch = (event: any) => {
    setValue(event.target.value);
  };
  console.log("group:", groups);
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
            List member of group
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
            value={value}
            onChange={handleChangeSearch}
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
            {groups?.map((group: any, index: number) => {
              return <InformationGroup group={group} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
