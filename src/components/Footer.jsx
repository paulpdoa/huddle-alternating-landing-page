import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container foot--bg">
        <div className="subcontainer foot">
            <article>
                <img className="foot__logo" src="/images/logo.svg" alt="logo" />
                <div className="contact">
                    <img className="contact__logo" src="/images/icon-location.svg" alt="location" />
                    <p className="contact__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum dolor doloribus voluptatum sunt, labore porro deserunt ab asperiores perspiciatis?</p>
                </div>
                <div className="contact">
                    <img className="contact__logo" src="/images/icon-phone.svg" alt="icon" />
                    <p className="contact__info">+1-543-123-4567</p>
                </div>
                <div className="contact">
                    <img className="contact__logo" src="/images/icon-email.svg" alt="email" />
                    <p className="contact__info">example@huddle.com</p>
                </div>
            </article>
            <div className="links">
                <span>About Us</span>
                <span>Career</span>
                <span>What We Do</span>
                <span>Blog</span>
                <span>Faq</span>
                <span>Contact Us</span>
            </div>
            <div className="social">
                <div className="social__icon-container">
                    <FaFacebookF className="social__icons" />
                </div>
                <div className="social__icon-container">
                    <FaTwitter className="social__icons" />
                </div>
                <div className="social__icon-container">
                    <FaInstagram className="social__icons" />
                </div>
            </div>
            <p className="copyright">&copy; Copyright 2018 Huddle. All rights reserved;</p>
        </div>
    </footer>
  )
}

export default Footer