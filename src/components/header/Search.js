import React from 'react';
import { InputBase,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <SearchBox style={{display: 'flex'}}>
      <InputSearch placeholder='Search for products, brands and more'/> 
      <SearchIconCSS/>
    </SearchBox>
  )
};

const SearchBox = styled('div')`
    background-color: #ffffff;
    margin-left: 15px;
    border-radius: 2px;
    width: 35%;
    
`;

const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconCSS = styled(SearchIcon)`
    color: blue;
    margin-top: 3px;
    margin-right: 10px;
    display: flex;
`;

export default Search;
