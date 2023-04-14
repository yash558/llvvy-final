import React from 'react'
import { testimonials } from '../../constants'
import './Client.css'
import Carousel from 'react-multi-carousel'
const Client = () => {
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
        <div className='client'>
            <div className="container">
                <div className="client-title">
                    <h2 className='d-flex justify-content-center fs-1 fw-bold'>Our &nbsp; <span> Testimonials</span></h2>
                    <p className='d-flex justify-content-center fs-5 fw-light'>what client say about us?</p>
                </div>

                <div className="client-content">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={4000}
                        autoPlay={true}
                        keyBoardControl={false}
                        transitionDuration={500}
                        arrows={false}
                    >
                        {testimonials.map((index) => (
                            <div className="client-testimonial">
                                <div className='icon'>
                                <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <p>{index.testimonial}</p>
                                <div className="client-info">
                                    <div className="client-pic">
                                        <a href="/">
                                            <img src={index.image} alt="" />
                                        </a>
                                    </div>
                                    <div className="client-details">
                                        <h6>{index.name}</h6>
                                        <span>{index.designation} of {index.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Client