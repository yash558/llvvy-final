import React from 'react'
import Hero from './../../components/Hero/Hero';
import Videopop from './../../components/Videopop/Videopop';
import Feature from './../../components/Feature/Feature';
import JoinFeature from './../../components/Joinfeature/Joinfeature';
import VideoScreen from './../../components/VideoScreen/VideoScreen';
import Download from './../../components/Download/Download';
import Testimonials from './../../components/Testimonials/Testimonials';
import Contact from './../../components/Contact/Contact';
import Footer from './../../components/Footer/Footer';
import FaqUsers from '../../components/Faq/FaqUsers';
import FaqSeller from '../../components/Faq/FaqSeller';
import Screenshot from './../../components/Screenshot/Screenshot';
import Client from './../../components/Client/Client';
import AboutApp from './../../components/About/Aboutapp';
import Category from '../../components/Category/Category';
import Category1 from '../../components/Category/Category1';
import Register from '../Seller/Register/Register'
import FaqHome from '../../components/Faq/FaqHome';

const Home = () => {
    return (
        <div>           
            <Hero />
            <Screenshot/>
            <JoinFeature />
            <Feature />
            <Videopop />
            <VideoScreen />            
            <Category/>             
            <Client/>
            <Register/>
            <FaqHome/>
            <Contact />
        </div>
    )
}

export default Home