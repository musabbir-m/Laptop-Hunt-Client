import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-10">
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="favicon.png" />
  </div>
</div>
          
          <p>LaptopHunt Ltd.<br/>Providing reliable laptop buying and selling service since 2018</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <Link className="link link-hover">Products</Link> 
          <Link className="link link-hover">Design</Link> 
          <Link className="link link-hover">Marketing</Link> 
          <Link className="link link-hover">Advertisement</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link className="link link-hover">About us</Link> 
          <Link className="link link-hover">Contact</Link> 
          <Link className="link link-hover">Jobs</Link> 
          <Link className="link link-hover">Press kit</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link className="link link-hover">Terms of use</Link> 
          <Link className="link link-hover">Privacy policy</Link> 
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    );
};

export default Footer;