import React from 'react';
import { makeStyles } from '@mui/styles';
import IconButton from "@mui/material/IconButton";
import { deepPurple } from '@mui/material/colors';

const useStyles = makeStyles(() => ({
    iconButton: {
        borderRadius: "12px!important",
        padding: "6px",
        "&:hover":{
            backgroundColor: deepPurple[500]+'!important',
            color: "#ffffff",
        }
    }
}))

ButtonIcon.propTypes = {

};

function ButtonIcon(props) {
    const {onClick} = props;
    const classes = useStyles()
    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onClick && onClick}
                edge="start"
                sx={{ fontWeight: "bold", backgroundColor: deepPurple[100], ...props.sx }}
                className={classes.iconButton}
                style={{...props.style}}
            >
                {props.children}
            </IconButton>
        </div>
    );
}

export default ButtonIcon;