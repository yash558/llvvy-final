import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryData } from './Categorydata';
import "./Category.css"
const Category = () => {
    
    const settings = {        
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,        
        swipeToSlide: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        moveTo: "right",
        responsive: [
            {
              breakpoint: 1254,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,               
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,               
              }
            },
            {
              breakpoint: 724,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    
    return (
        <div className="category">
            <h1 className='text-center fw-bold'>Categories to <span style={{ color: "#7857fe" }}>Bag</span> </h1>
   <div className="container">
            <Slider {...settings}>
                {CategoryData.map((item, index) => {
                    return (
                        <div className='category-items mt-5' key={index}>
                            <img src={item.image} alt=""/>
                            <h4>{item.title}</h4>
                        </div>
                    );
                })}
            </Slider>
            </div>
        </div>
    )
}

export default Category