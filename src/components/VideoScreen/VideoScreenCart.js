import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const VideoScreenCart = () => {

   
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={false}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >
                {/* <div className="video-img mx-2">
                    <video src={video1}  controls height={500}></video>
                    <div className="details_1">
                    <h4>Founder Story</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p>
                </div>
                </div> */}
                <div className="video-img mx-3">
                    <video src="https://livvywebsite.s3.ap-south-1.amazonaws.com/video-output-4EBFEEE5-1324-414A-8BBD-25197B6E6DFB.MOV"  controls  height={500}></video>
                    <div className="details_1">
                    <h4>Live Interaction</h4>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p> */}
                </div>
                </div>
                <div className="video-img mx-3">
                    <video src="https://livvywebsite.s3.ap-south-1.amazonaws.com/New1.MOV"  controls  height={500}></video>
                    <div className="details_1">
                    <h4>Short Video Snippets</h4>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p> */}
                </div>
                </div>
            </Carousel>
        </>
    )
}

export default VideoScreenCart;