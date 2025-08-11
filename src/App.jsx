import { useState } from "react";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Header></Header>
    <div class="container-fluid container-a main">
        <div class="row main-row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 main-col">
                <div class="row" id="col1">
                <div class="col-12 col1 top">Welcome to Sussex Outdoor Solutions</div>
                <div class="col-12 col1 bottom">Elegant Outdoor Solutions</div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 main-col image-col">
                <img src="./assets/landscape1.jpg" alt="Landscape" id="landscape"/>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 main-col">
                <div class="row" id="col3">
                <div class="col-12 col3 top">Discover our range of premium landscaping and fencing services
                </div>
                <div class="col-12 col3 bottom">Let us elevate
                                             your outdoor living experience to new heights</div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 main-col image-col">
                <img src="./assets/cta-continental-panels.jpg" alt="Landscape" id="fence"/>
            </div>
        </div>
    </div>
    <div class="container-fluid container-a" id="about">
        <div id="about-title">
            About us
        </div>
        <div class="about-text">
                We are a proud family-run fencing and landscaping business with over 20 years of experience serving our local community. 
                Being reliable, local, and always ready to help—even in emergencies—is what sets us apart. 
                Family is at the heart of everything we do, and that pride shines through in our work.
        </div>
        <div class="about-text">
                Over the years, We’ve worked on everything from million-pound projects to small garden jobs—and we treat each one with the same care, attention, and respect. 
                No matter the size, every project deserves the highest standard. 
                When you choose us, you’re not just getting a service—you’re partnering with a team that treats your home like their own.
        </div>
    </div>
    <div class="container-fluid container-a" id="contact">
        <div id="contact-title">
            Have any questions? Reach out!
        </div>
    <form action="https://formspree.io/f/mgvywrbl" method="POST" id="contact-form">
      <label for="name">Full Name</label>
      <input type="text" name="name" id="name" required/>

      <label for="email">Email</label>
      <input type="email" name="email" id="email"  required/>

      <label for="phone">Phone number</label>
      <input type="phone" name="phone" id="phone"  required/>
      
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
      <div id="form-response"></div>
      <div id="form-response-error"></div>
    </form>
    </div>
    <div class="container-fluid container-a">
        <div class="row footer">
            <div class="col-lg-6 col-xs-12 col-sm-6 footer-left">
                <div class="row" id="footer-col1">
                    <div class="col-12 footer-left-top">Sussex Outdoor Solutions</div>
                    <div class="col-12 footer-left-bottom">Your Outdoor Paradise Awaits</div>
                </div>
            </div>
            <div class="col-lg-6 col-xs-12 col-sm-6" id="footer-col2">
                <p> 3 Seaview Firgrove Road, Cross in Hand, tn210sx</p>
                <p>
                    07728285386
                </p>
                <p>
                    info@sussexos.co.uk
                </p>
                <div class="socials">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid container-a" id="copyright">
        	&copy; 2025 by Sussex Outdoor Solutions.
    </div>
    </>
  );
}

export default App;
