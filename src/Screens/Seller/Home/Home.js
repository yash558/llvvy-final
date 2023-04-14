import React from 'react'
import './Home.css'
import FloatinDiv from '../../../components/FloatingDiv/FloatingDiv'

import boy from '../../../assets/img/boy.png'
import person1 from '../../../assets/person1.png'
import crown from '../../../assets/img/crown.png'
import glassesimoji from '../../../assets/img/glassesimoji.png'
import { motion } from 'framer-motion'
import thumbup from '../../../assets/img/thumbup.png'

const Home = (props) => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Welcome to</span>
          <span>{props.title}</span>
          <span>{props.desc}</span>
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
        <img src={props.person} className='boy' alt="" />
        {/* animation */}

        <motion.div
          initial={{ top: "-4rem", left: "10rem" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Homegrown" text2="brand" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "15rem" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        {/* <div className="blur" style={{
          background: "rgb(238 210 255)", top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-19rem",
        }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-19rem",
          }}
        ></div> */}
      </div>
    </div>
  )
}

export default Home