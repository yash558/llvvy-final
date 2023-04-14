import React from 'react'
import './Home1.css'
// import person1 from '../../../assets/person1.png'
import person5 from '../../assets/person5.png'
import doddle from '../../assets/doodles.png'
const Home1 = () => {
  return (
    <div className="content seller_page ">
      <div className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="effect-wrap">
                <i className="fas fa-plus effect effect-1"></i>
                <i className="fas fa-plus effect effect-2"></i>
                <i className="fas fa-circle-notch effect effect-3"></i>
              </div>
              {/* <img src={doddle} className='doddle' alt="" /> */}
              <h1 className="hero_text">Welcome to <br /> Livvy for Creator</h1>
              <span>With Livvy, now customers across India will buy from your shop using video call. Moreover, payment & delivery is on us, while you focus on increasing your business!</span>
            </div>
            <div className="col-md-6">
              <img src={person5} alt="" className='img1' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home1