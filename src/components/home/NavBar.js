import styled from '@emotion/styled';
import React from 'react'
import { navData } from '../../constants/data';
const NavBar = () => {
  return (
    <StyleDiv>
      {
          navData.map(data =>(
              <div>
                  <img src={data.url} alt="/"/>
                  <p>{data.text}</p>
              </div>
          ))
      }
    </StyleDiv>
  )
}

const StyleDiv = styled('div')`
    display: flex;
    justify-content: space-evenly;
    margin: 55px 100px 0 100px;
    div{
        padding: 12px 0;
    }
    img{
        width: 64px;
    }

    p{
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 600;
    }
`;

export default NavBar;
