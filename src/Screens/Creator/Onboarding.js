import React from 'react'
import OnboardingCard from '../Seller/Onboarding/OnboardingCard'
import person4 from '../../assets/person4.png'
import "./Onboarding.css"
const Onboarding = () => {
    return (
        <div className="onboarding pt-5">
            <div className="title text-center mx-auto mb-5">
                <h1>User journey for the creators on app</h1>
            </div>
            <div className="onboarding-details1">
                <div className=" d-flex flex-wrap flex-row col-md-7">
                    <div>
                        <OnboardingCard no="1" title="Sign up" desc=" Install and register as a user on the app" />
                        <OnboardingCard no="2" title="Verify" desc=" Select the products and brands you like" />
                    </div>
                    <div className=''>
                        <OnboardingCard no="3" title="Connection" desc="Livvy connects you with the popular Brands" />
                        <OnboardingCard no="4" title="Voila!" desc="Start your ambassador journey with Livvy app" />
                    </div>
                </div>
                <div className="onboarding-img col-md-4">
                    <img src={person4} alt="" className='img'/>
                </div>
            </div>
        </div>


    )
}

export default Onboarding