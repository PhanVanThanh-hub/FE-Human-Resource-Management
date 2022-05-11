import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import ItemLinkCustomer from '../components/list/ItemLinkCustomer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'; 
import GroupIcon from '@mui/icons-material/Group'; 
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ListDrawer() {
    return (
        <div>
            <List
                sx={{ width: '100%' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" disableSticky
                        sx={{
                            color: "text.primary",
                            fontSize: "16px",
                            bgcolor: "transparent",
                        }}>
                        Admin
                    </ListSubheader>
                }
                component="nav">
                <ItemLinkCustomer title={"Home"} to="/" icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="13" r="2"></circle>
                        <line x1="13.45" y1="11.55" x2="15.5" y2="9.5"></line>
                        <path d="M6.4 20a9 9 0 1 1 11.2 0z">
                        </path>
                    </svg>
                } />
                <ItemLinkCustomer title={"Manager"} to="/manager" icon={
                    <ManageAccountsIcon/>
                } />
                <ItemLinkCustomer title={"Group"} to="/group" icon={
                    <GroupIcon/>
                } />
                 <ItemLinkCustomer title={"Add Member"} to="/add_member" icon={
                    <PersonAddAlt1Icon/>
                } />
            </List>
            
        </div>

    );
}