import React,{useState, useContext} from 'react'
import {Button, styled, Box, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Login from '../login/Login';

import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Buttons = () => {

  const [open, setOpen] = useState(false);

  const {account , setAccount} = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <>
    <StyleDiv >
      {
        account ? <Profile account= {account} setAccount={setAccount}/>
        :
        <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
      }
      
      
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography> 
      <Box style={{display: 'flex'}}>
      <ShoppingCartIcon/><Typography>Cart</Typography>
      </Box>
    </StyleDiv>
    <Login open={open} setOpen={setOpen}/>
    </>
  )
}

const LoginButton = styled(Button)`
    background-color: #fff;
    color: #2874f0;
    margin-left: 50px;
    margin-right: 40px;
    padding: 4px 50px;
    text-transform: none;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 700;
    height: 32px;
    
`;

const StyleDiv = styled('div')`
  display: flex;
  align-items: center;

  p{
    margin-right: 40px;
    
  }
  
`;


export default Buttons
