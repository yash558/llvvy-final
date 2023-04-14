import React from 'react'
import AboutApp from '../../components/About/Aboutapp'
import VideoScreen from '../../components/VideoScreen/VideoScreen'
import Download from '../../components/Download/Download'
import Testimonials from '../../components/Testimonials/Testimonials'

const About = () => {
  return (
    <div>
        <AboutApp/>
        <Download/>
        <Testimonials/>
        <VideoScreen/>
    </div>
  )
}

export default About