import React from 'react'
import './footer.css'
import profile_icon from '../../assets/Untitled_Project_V1.gif'
import Milan from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer' >
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={profile_icon}  alt=''/>
                <p>I'm Kapil Goswami, MERN stack developer from India</p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={Milan} alt=''/>
                    <input type='email' placeholder='enter ur email' />
                </div>
                <div className="footer-subscribe">subscribe</div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@ 2024 Kapil Goswami.All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Tern of services</p>
                <p>Privacy policy</p>
                <p>connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
