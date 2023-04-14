import React from 'react'
import OnboardingCard from './OnboardingCard'
import './Onboarding.css'
import Tilt from 'react-tilt'
const Onboarding = () => {
   return (
      <div className="onboarding pt-5 pb-5">
         <div className="title text-center mx-auto mb-5">
            <h1>How to join <span> Livvy</span> as a <span> Seller?</span></h1>
         </div>
         <div className="onboarding-details d-flex flex-wrap flex-row align-items-center justify-content-center">
            <OnboardingCard no="1" title="Connect with us" desc=" Set up a call with us" />
            <OnboardingCard no="2" title="Verify" desc=" Get verified" />
            <OnboardingCard no="3" title="Download the app" desc="Install and sign up on the app" />
            <OnboardingCard no="4" title="Increased Reach" desc=" Livvy will connect you with creators" />
            <Tilt>

               <div className="col-lg-2 col-md-6">
                  <div className="onboarding-card">
                     <div className="card-no">
                        <h1>5</h1>
                     </div>
                     <div className="onboard-del d-flex justify-content-between">
                        <h3 className='card-title'>Get started</h3>
                     </div>

                     <p>List your products and start selling!</p>
                  </div>
               </div>
            </Tilt>
         </div>
      </div>


   )
}

export default Onboarding