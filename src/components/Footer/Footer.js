import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <Link className="footer-brand" to="hero" spy={true} smooth={true} offset={50} duration={100}>
                                <img src={logo} alt="" className="footer_img" />
                            </Link>
                            {/* <p>Livvy is the new age solution to e-commerce as we know it today. We aim to provide our users
                                with an interactive and engaging shopping experience by bringing to them a dedicated live
                                selling platform.
                            </p> */}
                            <p className='w-75 mt-3'>" Experience shopping like never before with Livvy's live selling platform. "</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Condition</a></li>
                                <li><a href="/">Latest Blogs</a></li>
                                <li><a href="/">App Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Quicks Links</h3>
                            <ul>
                                <li><Link className='links' to="/" >Home</Link></li>
                                <li><Link className='links' to="/seller" >Seller</Link></li>
                                <li><Link className='links' to="/creator" >Creator</Link></li>
                                <li><Link className='links' to="/about" >About</Link></li>
                                <li><Link className='links' to="/contact" >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Social Pages</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <p className="copyright-text">
                            &copy;2023 @ The Livvy Company
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer