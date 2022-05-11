import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonIcon from "../components/button/ButtonIcon";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
 

Header.propTypes = {

};

function Header(props) {
    const { onClick, style } = props;
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
                    <Link style={{ display: 'block' }} to="/">
                        <Box style={{ width: '25px' }}>
                              
                        </Box>
                    </Link>
                    <Box component="div" style={{ width: '200px', marginLeft: "10px" }}>
                        <Typography variant="h6" noWrap component="div" style={{ fontWeight: "bold" }}>
                            Admin
                        </Typography>
                    </Box>
                    <ButtonIcon onClick={onClick} sx={{bgcolor: 'button.primary', color: "text.secondary", "&:hover":{color: "text.hover"}}}>
                        <MenuIcon/>
                    </ButtonIcon>
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;