import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            {/*====== NAVBAR START ======*/}
            <section className="navbar-area navbar-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.5rem' }}>
                                        💰 Expense App
                                    </span>
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarOne"
                                    aria-controls="navbarOne"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse sub-menu-bar"
                                    id="navbarOne"
                                >
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link className="page-scroll" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#features">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <ul>
                                        <li>
                                            <Link className="btn primary-btn-outline" to="/login">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="btn primary-btn" to="/login">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== NAVBAR ENDS ======*/}
        </>
    );
}

export default Header