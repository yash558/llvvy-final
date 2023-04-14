import React from 'react'
import dollar from '../../../assets/dollar.png'
import growth from '../../../assets/growth.png';
import bell from '../../../assets/bell.png';
import grow from '../../../assets/grow.png';
import salary from '../../../assets/salary.png';
import BenefitCard from './Benefitcard';
import Carousel from 'better-react-carousel'
const Benefit = () => {
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1024 },
            rows: 5,
            
        },
        desktop: {
            breakpoint: { max: 1024, min: 724 },
            rows: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            rows: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            rows: 1
        }
    };
    return (
        <div className="benefits section-padding">
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <h2>Benefits of <span>Creators</span></h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="benefits-carousel">
                        <>
                            <Carousel
                                cols={5}
                                rows={1}
                                gap={20}
                                responsive={responsive}
                                infinite={true}
                                autoPlaySpeed={4000}
                                autoPlay={true}
                                keyBoardControl={false}
                                transitionDuration={500}
                                arrows={false}
                            >
                                <Carousel.Item>
                                    <BenefitCard title="New age solution for monetizing" icon={salary} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <BenefitCard title="High affiliate marketing commissions" icon={dollar} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <BenefitCard title="Opportunity to grow followers through Livvy" icon={growth} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <BenefitCard title=" Work with brands and take your influencer journey to the next level" icon={bell} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <BenefitCard title=" Connects you with the brands ????" icon={grow} />
                                </Carousel.Item>
                            </Carousel>
                        </>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Benefit