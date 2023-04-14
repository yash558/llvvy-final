import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import android from '../../assets/android.png'
import iphone1 from '../../assets/iphone1.png'

const Navbar = () => {
   
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid col-10 mx-auto ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className='nav_img' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                       
                        {/* <li className="nav-item">
                            <Link to="/features" className='nav-link' >Features</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/seller" className='nav-link' >Seller</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/creator" className='nav-link' >Creator</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className='nav-link' >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-link' >Contact</Link>
                        </li>
                    </ul>
                    <div className="button">
                        {/* <button className='sign-up'> <a href="/register" className='mx-4'>Register</a></button> */}
                        <a href="/register" className=''><img src={android} alt="" height={50} width={100}/></a>
                        <a href="/register" className='mx-3'><img src={iphone1} alt=""  height={50} width={100}/></a>

                    </div>
                </div>
            </div>


        </nav>

    )
}

export default Navbar