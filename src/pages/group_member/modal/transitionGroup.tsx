import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  fetchGroupList,
  selectListGroup,
} from "../../../redux/group/groupSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { GroupProps } from "../../../types/models/group";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  name: string;
  group: number;
  profileID: number;
  transitionGroup: (
    id: string,
    profileID: number,
    name: string,
    group: number
  ) => void;
}

export default function ModalTransitionGroup({
  open,
  handleClose,
  name,
  group,
  transitionGroup,
  profileID,
}: Props) {
  const dispatch = useAppDispatch();
  const [groupTransition, setGroup] = useState<string>("");
  const listGroup = useAppSelector(selectListGroup);
  useEffect(() => {
    dispatch(fetchGroupList({}));
  }, [dispatch]);
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string);
  };
  const handleSubmit = () => {
    console.log("Sa");
    transitionGroup(groupTransition, profileID, name, group);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Transition Group for {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography>{group}</Typography>
          <ArrowRightAltIcon />
          <FormControl sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">Group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={groupTransition}
              label="Group"
              onChange={handleChange}
            >
              {listGroup.map((value: GroupProps, index: any) => {
                return <MenuItem value={value.id}>{value.name_group}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          sx={{ width: " 100%", marginTop: "10px" }}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </Box>
    </Modal>
  );
}
