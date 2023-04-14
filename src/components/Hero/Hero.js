import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import main from '../../assets/mian1.png'
import { motion } from 'framer-motion'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector2.png'
import FloatinDiv from '../../components/FloatingDiv/FloatingDiv'
import thumbup from '../../assets/img/thumbup.png'
import crown from '../../assets/img/crown.png'

const Hero = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="hero">
      <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1"></i>
        <i className="fas fa-plus effect effect-2"></i>
        <i className="fas fa-circle-notch effect effect-3"></i>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-text">
              <h1>Live Shopping with your Favorite Creators: The Future Of Social Commerce Is Here With Livvy</h1>
              <p>Introducing Livvy, the revolutionary one-stop lifestyle video shopping platform! We make it easy
                for small and medium-sized enterprises, as well as individual creators, to showcase and sell
                their products through the convenience of video</p>
              
            </div>
          </div>
          <div className="col-md-6">
           <img src={main} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero