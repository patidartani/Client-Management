import React from 'react'
import "./Contact.css"
import Header from '../../component/header/Header'
import Footer from "../../pages/footer/Footer"

const Contact = () => {
  return (
    <>
    <Header />
    <div className='Contact-main'>
          <div className="contact-page">

          <div className="contact-topp">
                    <h5>CONTACT US</h5>
               </div>
          <div className="contact-btm">
                    <div className="contact-detail">
                       <div className="contact-box">
                              <h5>Address</h5>
                              <p>60 Grant Ave. Central New Road 0708, UK</p>
                       </div>
                       <div className="contact-box">
                              <h5>Phone & Email</h5>
                              <p>(+880) 1723801729 & 224 567 industryco@gmail.com</p>
                       </div>
                       <div className="contact-box">
                              <h5>Stay In Touch</h5>
                              <p>Also find us on social Media</p>
                              <div className='gap-3 d-flex'>
                              <a style={{textDecoration:"none", color:"#fff", fontSize:"1.3vmax"}} href=""><i style={{cursor:"pointer"}} class="ri-facebook-circle-line"></i></a>
                            <a style={{textDecoration:"none", color:"#fff", fontSize:"1.3vmax"}} href=""><i style={{cursor:"pointer"}}  class="ri-twitter-line"></i> </a>
                            <a style={{textDecoration:"none", color:"#fff", fontSize:"1.3vmax"}} href=""><i style={{cursor:"pointer"}}  class="ri-youtube-line"></i> </a>
                            <a style={{textDecoration:"none", color:"#fff", fontSize:"1.3vmax"}} href=""> <i style={{cursor:"pointer"}}  class="ri-instagram-line"></i></a>  
                              </div>
                       </div>
                    </div>

                    <div className="contact-form">
                              <div className="contact-left">
                                    <h5>Have You Any Question About Us?</h5>
                                    <p>Any kind of business solution and consultion don’t hesitate to contact with us for imiditate customer support. We are love to hear from you</p>
                                    <p><span>Office Hours:</span> We are alwyes open excpet saturday & Sunday from <small>10:00am</small> to <small>8:00pm</small></p>
                              </div>
                              <div className="contact-right">
                                   <h5>Contact Us</h5>  
                              <form action="">
                                   <input type="text" placeholder='First Name*'/>  
                                   <input type="text" placeholder='Last Name*'/>  
                                   <input type="text" placeholder='Email*'/>  
                                    <textarea name="" id="" placeholder='Your Requirement'></textarea>
                                    <div className="contact-btn">
                                        <button>SEND</button>
                                    </div>
                              </form>   
                              </div>
                    </div>
          </div>

                    
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact