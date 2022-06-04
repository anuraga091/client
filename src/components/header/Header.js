import React from 'react';
import {AppBar, Toolbar ,styled, Box, Typography} from '@mui/material';

import Search from './Search';
import Buttons from './Buttons';

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div>
      <StyledHeader>
          <Toolbar style={{minHeight: 55}}>
            <Component>
              <img src={logoURL} alt="logo" style={{width : 75}}/>
              <Box style={{display: 'flex'}}>
                <LogoSubHeading><i> Explore &nbsp;<span style={{color: '#FFE500'}}>Plus</span> </i></LogoSubHeading>
                <PlusLogo src={subURL} alt="plus logo"/>
              </Box>
            </Component>
            <Search/>
            <Buttons/>
          </Toolbar>
      </StyledHeader>
    </div>
  )
}
const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const LogoSubHeading = styled(Typography)`
  font-size: 10px;
`;

const PlusLogo = styled('img')`
  width: 10px;
  height: 10px;
  margin-left: 4px;
`;

export default Header;
