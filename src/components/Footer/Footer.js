import React from "react";
import './Footer.css'

function Footer(){
    return (
        <footer className="footer-container">
            <section className="footer-items-logo">
                <img className="footer-logo-img" src="/images/footer_logo.png" alt="logo"/>
            </section>
            <section className="footer-items-section-links">
                <div className="section-link-items doormat">
                    <ul>
                        <li className="list-title">Doormat Navigation</li>
                        <li className="list-item"><a href="/">Home</a></li>
                        <li className="list-item"><a href="/about">About</a></li>
                        <li className="list-item"><a href="/menu">Menu</a></li>
                        <li className="list-item"><a href="/reservations">Reservations</a></li>
                        <li className="list-item"><a href="/orderOnline">Order online</a></li>
                        <li className="list-item"><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="section-link-items contact">
                    <ul>
                        <li className="list-title">Contact</li>
                        <li className="list-item"><a href="#">Address</a></li>
                        <li className="list-item"><a href="#">Phone Number</a></li>
                        <li className="list-item"><a href="#">Email</a></li>
                    </ul>
                </div>
                <div className="section-link-items social-media">
                    <ul>
                        <li className="list-title">Social Media Links</li>
                        <li className="list-item"><a href="#">Facebook</a></li>
                        <li className="list-item"><a href="#">Instagram</a></li>
                        <li className="list-item"><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;