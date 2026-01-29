import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            {/*====== FOOTER START ======*/}
            <footer className="footer-area footer-one">
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-4 col-sm-12">
                                <div className="f-about">
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <span style={{ color: '#667eea', fontWeight: 'bold', fontSize: '1.3rem' }}>
                                                💰 Expense App
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text">
                                        Manage your expenses efficiently with our modern and user-friendly expense tracking application. Keep your finances organized and stay on top of your spending.
                                    </p>
                                </div>
                                <div className="footer-app-store">
                                    <h5 className="download-title">Download Our App Now!</h5>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="app-link">
                                                📱 App Store
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="app-link">
                                                🎮 Play Store
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-4">
                                <div className="footer-link">
                                    <h6 className="footer-title">Company</h6>
                                    <ul>
                                        <li>
                                            <a href="#about">About</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#team">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="#careers">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4">
                                <div className="footer-link">
                                    <h6 className="footer-title">Services</h6>
                                    <ul>
                                        <li>
                                            <a href="#features">Features</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#api">API</a>
                                        </li>
                                        <li>
                                            <a href="#security">Security</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-sm-4">
                                <div className="footer-contact">
                                    <h6 className="footer-title">Help & Support</h6>
                                    <ul>
                                        <li>
                                            <span className="contact-icon">📍</span> Chaheru, Jalandhar, Punjab
                                        </li>
                                        <li>
                                            <span className="contact-icon">📞</span> +91 9876543211
                                        </li>
                                        <li>
                                            <span className="contact-icon">✉️</span> support@expenseapp.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer widget */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright text-center d-md-flex justify-content-between align-items-center">
                                    <p className="text">
                                        Copyright © 2026 Expense App. All Rights Reserved
                                    </p>
                                    <ul className="social">
                                        <li>
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                f
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                𝕏
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                📷
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                in
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer copyright */}
            </footer>
            {/*====== FOOTER ENDS ======*/}
        </>
    )
}

export default Footer