import React from 'react'
import './Testimonials.css'
import BlogCard from './BlogCard';
import blog from '../../assets/blog.jpg';
import person from '../../assets/person.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from '../../assets/1.jpg'
const TestimonialCard = () => {
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
                autoPlaySpeed={4000}
                autoPlay={true}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >

                {/* <div className="testimonial-item "> */}
                    <BlogCard title="About the idea behind the Livvy app" user={person} desc="About the idea behind the Livvy app" img={blog} />
                    <BlogCard title="What is creator-led ..." user={person} desc="What is creator-led ..." img={blog} />
                    <BlogCard title="Problems Livvy is solving" user={person} desc="Problems Livvy is solving" img={blog} />
                    <BlogCard title="Problems faced with live commerce" user={person} desc="Problems faced with live commerce" img={blog} />
                    {/* <div className="img-box">
                        <img src={one} alt="" />
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores vel veritatis quis, eveniet porro quae voluptates dicta assumenda accusamus!</p>
                    <h3>Umesh kumar</h3>
                    <span>Fashion Industry</span>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                    </div> */}
                {/* </div> */}
                {/* <div className="testimonial-item"> */}
                    {/* <div className="img-box">
                        <img src={one} alt="" />
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores vel veritatis quis, eveniet porro quae voluptates dicta assumenda accusamus!</p>
                    <h3>Umesh kumar</h3>
                    <span>Fashion Industry</span>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                    </div> */}
                {/* </div>
                <div className="testimonial-item"> */}
                    {/* <div className="img-box">
                        <img src={one} alt="" />
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores vel veritatis quis, eveniet porro quae voluptates dicta assumenda accusamus!</p>
                    <h3>Umesh kumar</h3>
                    <span>Fashion Industry</span>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                    </div> */}
                {/* </div> */}
            </Carousel>
        </>
    )
}

export default TestimonialCard