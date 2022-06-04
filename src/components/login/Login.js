import React,{useState, useContext} from 'react';

import {Dialog, TextField, Typography, Button, styled} from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../services/api';

import {DataContext} from '../../context/DataProvider';


const Login = ({open, setOpen}) => {
  const accountInitialValues =  {
    login: {
      view: 'login',
      heading : 'Login',
      subHeading : 'Get access to your Orders, Wishlist and Recommendations'

    },
    signup : {
      view: 'signup',
      heading : 'Look like you are new here!',
      subHeading : 'Sign up with your mobile number to get started'
    }
  }

  const signupInitialValues = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    phone : ''
  }

  const loginInitialValues = {
    username : '',
    password : ''
  }
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const {setAccount} = useContext(DataContext);

  const [signup, setSignup] = useState(signupInitialValues);

  const [login , setLogin] = useState(loginInitialValues);

  const [error, setError] = useState(false)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false)

  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
    
  }

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value})
  }

  const signupUser =async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname)
  }

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  } 

  const loginUser = async () => {
    let response = await authenticateLogin(login)
    if (response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname)
    }else{
      setError(true)
    }
  }

  return (
    <Dialog open = {open} onClose={handleClose} PaperProps= {{sx: {maxWidth: 'unSet'}}}>
      <StyledDiv>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography>{account.subHeading}</Typography>
        </Image>
        {
          account.view === 'login'?
            <DivContainer>
              <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label = 'Enter Username'/>
              <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label = 'Enter password'/>

              {error && <Error>Please Enter valid username or password</Error>}

              <Typography className='privacy-policy'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
              <Button onClick = {() => loginUser()} className='login'>Login</Button>
              <Typography className='or'>OR</Typography>
              <Button className='otp'>Request OTP</Button>
              <Typography onClick={()=> toggleSignup()} className='create-account'>New to Flipkart? Create an account</Typography>
            </DivContainer>
        :
        <DivContainer>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label = 'Enter First name'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label = 'Enter Last name'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label = 'Enter Username'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label = 'Enter Email'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label = 'Enter Password'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label = 'Enter Phone'/>
              <Button className='login' onClick={ () => signupUser()}>Continue</Button>
            </DivContainer>

        }
      </StyledDiv>
    </Dialog>
  )
}

const StyledDiv = styled('div')`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled('div')`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 82.7%;
  width: 30%;
  padding: 45px 35px;
  color: white;
  font-weight: 700;
  p{
    margin-top: 20px;
    text-align: inherit;
  }
`;

const DivContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  div,button,p{
    margin-top: 20px;
  }

  .login{
    text-transform: none;
    background-color: #fb641b;
    color: white;
    font-weight: 600;
    height: 48px;
    border-radius: 2px;
  }
  .otp{
    text-transform: none;
    background-color: white;
    color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
  }
  .privacy-policy{
    font-size: 12px;
    color: #878787;
  }
  .or{
    text-align: center;
    color: gray;
  }
  .create-account{
    text-align: center;
    color: #2874f0;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

export default Login;
