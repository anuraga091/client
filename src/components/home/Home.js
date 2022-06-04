import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import Banner from './Banner'
import NavBar from './NavBar';
import Slide from './Slide';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/actions/product_action';

const Home = () => {

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Fragment style={{marginTop: 55}}>
      <NavBar/>
      <StyleDiv>
      <Banner/>
      <Slide products={products}  title='Discounts for You' timer={true}/>
      <Slide products={products} title='Suggested Items' timer={false} />
      <Slide products={products} title='Top Selection'  timer={false}/>
      <Slide products={products} title='Recommended Items' timer={false} />
      </StyleDiv>
    </Fragment>
  )
}

const StyleDiv = styled('div')`
  padding: 10px;
  background-color: #F2F2F2;
`;

export default Home
