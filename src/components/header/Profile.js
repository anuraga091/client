import React, { useState } from 'react';
import {Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({account, setAccount}) => {
    const [open, setOpen] = useState('');

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    const logoutUser = () => {
        setAccount('');
    }
  return (
    <>
      <StyleBox onClick={handleClick}><Typography style={{marginTop : 2, cursor: 'pointer'}}>{account}</Typography></StyleBox>
      <StyleMenu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => {handleClose(); logoutUser();}}>
          <PowerSettingsNewIcon color='primary' fontSize='small'/> <Typography>Logout</Typography> 
        </StyledMenuItem>
      </StyleMenu>
    </>
  )
}

const StyleBox = styled(Box)`
    margin-left: 50px;
    padding: 0 30px;
    margin-bottom: 2px;
`;

const StyleMenu = styled(Menu)`
    margin-top: 5px;
`;

const StyledMenuItem = styled(MenuItem)`
    padding: 3px 10px;
   
    p{
        font-size: 14px;
        margin-left: 10px;
        
    }
`;

export default Profile;
