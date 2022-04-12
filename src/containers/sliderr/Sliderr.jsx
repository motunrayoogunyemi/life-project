import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Sliderbox } from "../../components"
import discuss9ja from "../../assets/discussn.jpg"
import njaflavors from "../../assets/naijaf.jpg"
import children from "../../assets/children.jpg"
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./sliderr.css"

const Sliderr = () => {
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <img src={LeftArrow} alt="prevArrow" {...props} />
  //   // <p {...props}><ArrowBackIosIcon /></p>
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  //   <img src={RightArrow} alt="nextArrow" {...props} />
  //   // <p {...props}><ArrowForwardIosIcon /></p>
  // );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      prevArrow: false,
    nextArrow: false,
    };
  return (
    <div className='er__slider'>
        <Slider {...settings}>
              <Sliderbox grad='166.16deg, rgba(251, 218, 97, 0.48) 25.1%, #EC5B08 69.93%' imagee={njaflavors} header='NAIJA FLAVOURS' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut at senectus bibendum.' />
              <Sliderbox grad='360deg, #00003D 11.44%, rgba(0, 0, 61, 0) 97.51%' imagee={discuss9ja} header='DISCUSS NIGERIA' ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut at senectus bibendum.' />
              <Sliderbox grad='284.39deg, #D24074 37.18%, rgba(101, 24, 180, 0.44) 84.77%' imagee={children} header="CHILDREN'S WONDERLAND" ptext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum ut at senectus bibendum.' />
        </Slider>
    </div>
  )
}

export default Sliderr