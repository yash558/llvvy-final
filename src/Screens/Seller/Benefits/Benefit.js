import React from 'react'
import BenefitCards from './Benefitcards'
import person1 from '../../../assets/person1111.png'
import './Benefit.css'
const Benefit = () => {
  return (
        <div className="benefits">
            <div className="container">
            
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mx-auto mb-5">
                            <h2>Benefits to the <span>seller</span></h2>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center">
                    <div className="col-md-6">
                        <BenefitCards />
                    </div>
                    <div className="card-person col-md-6">
                        <img src={person1} alt="" className='person3'/>
                    </div>
                </div>
            </div>
            </div>
       
    )
}


export default Benefit