import React from 'react'
import './Benefit.css'
import Carousel from 'better-react-carousel'
import "react-multi-carousel/lib/styles.css";
import growth from '../../../assets/growth.png'
import headphone from '../../../assets/megaphone.png'
import dollar from '../../../assets/dollar.png'
import profile from '../../../assets/profile.png'

import BenefitCard from './Benefitcard';

const BenefitCards = () => {
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
          

                <BenefitCard title="We help you increase your reach and get more customers" icon={growth} />



                <BenefitCard title="Opportunity to advertise yourself at a very low marketing cost" icon={headphone} />



                <BenefitCard title="No onboarding cost — Start selling online at zero cost" icon={dollar} />



                <BenefitCard title="Connect with creators across the country to help advertise your brand" icon={profile} />

           
        </>

    )
}

export default BenefitCards