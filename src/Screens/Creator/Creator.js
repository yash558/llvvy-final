import React from 'react'
import FaqUsers from '../../components/Faq/FaqUsers'
import Benefit from './Benefits/Benefit';
import Onboarding from './Onboarding';
import Home1 from './Home1';
import Register from '../Seller/Register/Register';
import ContactCreator from '../../components/Contact/Contactcreator';



const Creator = () => {
  return (
    <div>
      <Home1/>
      <Benefit/>
      <Onboarding />
      <Register/>
        <FaqUsers/>
        <ContactCreator/>
    </div>
  )
}

export default Creator