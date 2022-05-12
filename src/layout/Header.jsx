import React from 'react';
import {AppBar,Toolbar,Typography,Box,Grid} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonIcon from "../components/button/ButtonIcon";
import LogoutIcon from '@mui/icons-material/Logout';
import {logout} from '../redux/auth/AuthSlice';
import { useAppDispatch } from "../app/hooks";
import { useHistory } from "react-router-dom";

function Header(props) {
    const history = useHistory();
    const { onClick, style } = props;
    const dispatch = useAppDispatch();
    const handleLogout = async()=>{
        await dispatch(logout());
        history.replace("/login");
        return window.location.reload();
    }
    return (
        <div style={{ ...style }}>
            <AppBar sx={{ 
                bgcolor: '#ffffff',
                display: "flex",
                justifyContent: "center",
                color: 'text.primary',
                boxShadow: 'none',
                border:"none", 
                padding: "4px 0 0 0",
                zIndex:1000 }}>
                <Toolbar sx={{bgcolor: '#ffffff',}}>
                    <Grid container sx={{justifyContent: "space-between"}} >
                        <Grid item sx={{flexDirection:"row",display:"flex",alignItems:"center"}}>
                            <Box component="div" style={{ width: '200px', marginLeft: "10px" }}>
                                <Typography variant="h6" noWrap component="div" style={{ fontWeight: "bold" }}>
                                    Admin
                                </Typography>
                            </Box>
                            <ButtonIcon onClick={onClick} sx={{bgcolor: 'button.primary', color: "text.secondary", "&:hover":{color: "text.hover"}}}>
                                <MenuIcon/>
                            </ButtonIcon>
                        </Grid>
                        <Grid item sx={{flexDirection:"row",display:"flex",alignItems:"center"}}>
                            <Typography variant="h6" noWrap component="div"   sx={{marginRight:"20px",fontWeight: "bold" }}>Logout</Typography>
                            <ButtonIcon onClick={handleLogout}  sx={{bgcolor: 'button.primary', color: "text.secondary", "&:hover":{color: "text.hover"}}}>
                                <LogoutIcon/>
                            </ButtonIcon>
                        </Grid>
                    </Grid>
                     
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;