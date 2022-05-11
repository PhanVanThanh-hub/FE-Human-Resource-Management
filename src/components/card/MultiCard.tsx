import PaperCard from "../paper/PaperCard";
import Typography from "@mui/material/Typography";
import DividerUI from "../divider/DividerUI";
import { CardActions, CardHeader, CardContent } from "@mui/material";

interface Props {
  title: string;
  content: any;
}

export default function CardMulti({ title, content }: Props) {
  return (
    <PaperCard>
      <CardHeader
        title={
          <Typography sx={{ color: "rgb(33, 33, 33)", fontWeight: "500" }}>
            {title}
          </Typography>
        }
      />
      <DividerUI />
      <CardContent>{content}</CardContent>
      {/*           
         {
            props.action ?
            <>
            <DividerUI/>
            <CardActions sx={{display:"flex",alignItems: "center",padding: "24px"}}>
               {props.action}
            </CardActions>
            </>:
            <></>
         } */}
    </PaperCard>
  );
}
