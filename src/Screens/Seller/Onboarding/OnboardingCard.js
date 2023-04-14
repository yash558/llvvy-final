import React from 'react'
import './Onboarding.css'
import Tilt from 'react-tilt'
import arrright from '../../../assets/right-arrow.png'
const OnboardingCard = (props) => {
   return (
      <Tilt className="mx-3">     
      <div className="col-lg-2 col-md-6">
         <div className="onboarding-card">
            <div className="card-no">
               <h1>{props.no}</h1>
            </div>
            <div className="onboard-del d-flex justify-content-between">
               <h3 className='card-title'>{props.title}</h3>
               <img src={arrright} className='on-img' alt="" />
            </div>

            <p>{props.desc}</p>
         </div>
      </div>
      </Tilt>
   )
}

export default OnboardingCard