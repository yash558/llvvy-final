import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryData } from './Categorydata';
import "./Category.css"
const Category1 = () => {
    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: "true",
        responsive: [
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
        <div className="container">
            <Slider {...settings1}>
                {CategoryData.map((item, index) => {
                    return (
                        <div className='category' key={index}>
                            <img src={item.image} alt="" height={200} width={200} />
                            <h4>{item.title}</h4>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}

export default Category1