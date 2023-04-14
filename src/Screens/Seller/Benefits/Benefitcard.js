import React from 'react'
import './Benefit.css'
const Benefitcard = (props) => {
  return (
    <div className="benefit-item  px-2">
    <div className="icon">
        {/* <i class="fa-solid fa-user"></i> */}
        <img src={props.icon} alt="" />       
    </div>
    <div className="container my-2">
    <h5>{props.title}</h5>
    </div>
    {/* <p>We help you increase your reach and get more customers.</p> */}
</div>
  )
}

export default Benefitcard