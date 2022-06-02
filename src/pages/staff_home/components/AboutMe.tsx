import * as React from "react";
import Grid from "@mui/material/Grid";
import DividerUI from "../../../components/divider/DividerUI";
import Typography from "@mui/material/Typography";
import CardMulti from "../../../components/card/MultiCard";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { InformationProps } from "../../../types/models/information";
import { formatPrice } from "../../../utils/helpers/function";

interface Props {
  profile: InformationProps;
}

export default function AboutMe({ profile }: Props) {
  const details = [
    { title: "Full Name	", detail: profile.first_name + profile.last_name },
    { title: "Date Of Birth", detail: profile.date_of_birth },
    { title: "Join Date", detail: profile.join_date },
    { title: "Address", detail: profile.location },
    { title: "Group", detail: profile.group },
    { title: "Phone", detail: profile.phone },
    { title: "Email", detail: profile.email },
    { title: "Salary", detail: formatPrice(profile.earnings) },
  ];
  return (
    <CardMulti
      title="About me"
      content={
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <Typography
              sx={{
                letterSpacing: "0em",
                fontWeight: "400",
                lineHeight: "1.5em",
                color: "rgb(97, 97, 97)",
                fontSize: "0.875rem",
              }}
            >
              Hello,I’m Anshan Handgun Creative Graphic Designer & User
              Experience Designer based in Website, I create digital Products a
              more Beautiful and usable place. Morbid accusant ipsum. Nam nec
              tellus at.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "500",
                lineHeight: "1.75em",
                color: "rgb(33, 33, 33)",
                fontSize: "0.875rem",
              }}
            >
              Personal Details
            </Typography>
          </Grid>
          <DividerUI />
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableBody
                  sx={{
                    "& .MuiTableRow-root": {
                      "& .MuiTableCell-root": {
                        borderBottom: "0px",
                        paddingTop: "10px",
                      },
                    },
                  }}
                >
                  {details.map((value, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          size="small"
                          sx={{
                            fontSize: "0.875rem",
                            color: "rgb(33, 33, 33)",
                            fontWeight: "bold",
                          }}
                        >
                          {value.title}
                        </TableCell>
                        <TableCell
                          size="small"
                          sx={{
                            fontSize: "0.875rem",
                            color: "rgb(97, 97, 97)",
                            fontWeight: "400",
                          }}
                        >
                          :
                        </TableCell>
                        <TableCell
                          size="small"
                          sx={{
                            fontSize: "0.875rem",
                            color: "rgb(97, 97, 97)",
                            fontWeight: "400",
                          }}
                        >
                          {value.detail}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      }
    />
  );
}
