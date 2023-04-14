import React from 'react'
import './Register.css'
import googleplay from '../../../assets/android.png'
import iphone from '../../../assets/iphone1.png'
import person6 from '../../../assets/person6.png'
const Register = () => {
    return (
        <div className='seller_register my-5'>
            <div className="container">
                <div className="seller_register_inner d-flex align-items-center justify-content-around">
                    <div className="center_div">
                        <h4>Download The App <br /> Here </h4>
                        <p>Supported on Multiple Devices</p>
                        <div className="btns">
                            
                            <button className="btn btn-sm" type="button" onClick="location.href='https://play.google.com/store/apps/details?id=com.yudoo';"><img src={googleplay} alt='google-play' className="img-fluid" /></button>
                            <button className="btn btn-sm" type="button" onClick="location.href='https://play.google.com/store/apps/details?id=com.yudoo';"><img src={iphone} alt='google-play' className="img-fluid" /></button>
                        </div>
                    </div>
                        <div className="register_img">
                            <img src={person6} alt="" />
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Register