import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PaperCard from "../../../../../components/paper/PaperCard";
import { CardContent, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import DividerUI from "../../../../../components/divider/DividerUI";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PhonelinkRingTwoToneIcon from "@mui/icons-material/PhonelinkRingTwoTone";
import PinDropTwoToneIcon from "@mui/icons-material/PinDropTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InformationProps } from "../../../../../types/models/information";

interface Props {
  profile: InformationProps;
}
export default function CardInfor({ profile }: Props) {
  const contact = [
    { icon: <EmailTwoToneIcon />, title: "Email", detail: profile.email },
    {
      icon: <PhonelinkRingTwoToneIcon />,
      title: "Phone",
      detail: profile.phone,
    },
    {
      icon: <PinDropTwoToneIcon />,
      title: "Location",
      detail: profile.location,
    },
    { icon: <FacebookIcon />, title: "Facebook", detail: "demo@sample.com" },
    { icon: <TwitterIcon />, title: "Twitter", detail: "demo@sample.com" },
    { icon: <LinkedInIcon />, title: "LinkedIn", detail: "demo@sample.com" },
  ];
  return (
    <PaperCard>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={profile.avatar}
          />
        }
        action={
          <div style={{ padding: "16px" }}>
            <Chip
              label="Pro"
              color="primary"
              sx={{
                fontSize: "0.8125rem",
                alignItems: "center",
                justifyContent: "center",
                height: "24px",
              }}
            />
          </div>
        }
        title={
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "rgb(33, 33, 33)",
              lineHeight: "1.75",
              textAlign: "left",
            }}
          >
            {profile.first_name} {profile.last_name}
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: "400",
              color: "rgb(158, 158, 158)",
              lineHeight: "1.57",
              textAlign: "left",
            }}
          >
            {profile.role}
          </Typography>
        }
      />
      <DividerUI />
      <CardContent>
        <List>
          {contact.map((value, index) => {
            return (
              <ListItemButton
                key={index}
                sx={{ padding: "10px 16px", color: "rgb(97, 97, 97)" }}
              >
                <ListItemIcon
                  sx={{
                    display: "inline-flex",
                    color: "rgb(97, 97, 97)",
                    minWidth: "36px",
                  }}
                >
                  {value.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "rgb(33, 33, 33)",
                      lineHeight: "1.75",
                    }}
                  >
                    {value.title}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: "400",
                      color: "rgb(158, 158, 158)",
                      lineHeight: "1.57",
                      textAlign: "right",
                    }}
                  >
                    {value.detail}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItemButton>
            );
          })}
        </List>
      </CardContent>
    </PaperCard>
  );
}
