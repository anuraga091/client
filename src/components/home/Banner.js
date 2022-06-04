import styled from '@emotion/styled';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
const responsive = {
  
    // the naming can be any, depends on you.
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
      <Carousel 
      responsive={responsive} 
      containerClass="carousel-container" 
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px" 
      swipeable={false} 
      draggable={false} 
      infinite={true} 
      autoPlay={true} 
      autoPlaySpeed={5000}
      keyBoardControl={true}>
        {
            bannerData.map(data =>(
                  <StyleImage src={data.url} alt="/"/>
          ))
        }
      </Carousel>
  )
}

const StyleImage = styled('img')`
    width: 100%;
    height: 280px;
`;

export default Banner
