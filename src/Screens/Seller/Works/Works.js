import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion'

import { Work, Work1 } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import './Works.css'
import right from '../../../assets/right.png'

const WorkCard = ({ index, title, icon, no }) => {
  return (

    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="card-work" >
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="card-intro"
      >
        <div className="d-flex flex-column">
          <div className="">
            <div className=''>
            <h2 className="no">{no}</h2>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <img src={icon} alt={title} className="card-img mb-2 mx-3" />
              <h3 className="card-text">{title}</h3>
            </div>

            {/* <img src={arrow} alt="" className='card-arrow' /> */}
          </div>
        </div>
      </div>
    </motion.div>


  )
}
const Works = () => {
  return (
    <div div className='wok'>
      <motion.div variants={textVariant()}>
        {/* <p className="works-intro">Introduction</p> */}
        <h2 className="works-heading">How it <span> Works</span></h2>
      </motion.div>
      {/* <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a Skilled software developer with experience in mern and flutter and expertise in React , Flutter and Three.js. I'm a quick learner and collaborated closely with clients to create efficient , scalable and user friendly solutions that solve real world problems. Let's work together to bring your ideas to life !!!
      </motion.p> */}

      <div className="work-card">
        {Work.map((service, index) => (
          <WorkCard key={service.title} index={index} {...service} />
        ))}

      </div>

    </div>
  )
}

export default Works;