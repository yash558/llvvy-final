import React from 'react'
import FaqSeller from '../../components/Faq/FaqSeller'
import Works from './Works/Works'
import Benefit from './Benefits/Benefit'
import Onboarding from './Onboarding/Onboarding'

import Register from './Register/Register'
import Home1 from './Home/Home1'
import ContactSeller from '../../components/Contact/Contactseller'
const Seller = () => {
    return (
        <div>
            <Home1/>           
            <Works/>
            <Benefit/>
            <Onboarding/>
            <Register/>
            <FaqSeller />
            <ContactSeller/>
        </div>
    )
}

export default Seller