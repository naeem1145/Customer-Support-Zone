import React from 'react';
import mail from '../assets/fi_6244710.png';
import fb from '../assets/fb.png';
import In from '../assets/in.png';
import X from '../assets/x.png';
import Container from '../Container';


const Footer = () => {
    return (
        <div className='bg-neutral'>
            <Container>
                <footer className="footer sm:footer-horizontal  text-neutral-content p-10">
                    <div className='flex justify-between flex-col md:flex-row '>
                        <nav className='flex flex-col gap-2 w-[90%] md:w-[20%]'>
                            <h6 className="font-bold text-2xl ">CS — Ticket System</h6>
                            <p className='text-sm text-gray-400'>CS — Ticket System is a customer support and issue tracking tool designed to help teams manage tickets efficiently. It allows you to log issues, assign priorities, track statuses, and keep customer communication clear. With features like high-priority alerts, real-time updates, and organized records, it ensures smooth and professional support handling.</p>
                        </nav>
                        <nav className='flex flex-col gap-2 '>
                            <h6 className="font-bold text-xl mb-3">Company</h6>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Careers</a>
                            <a className="link link-hover">Press Kit</a>
                        </nav>

                        <nav className='flex flex-col gap-2 '>
                            <h6 className="font-bold text-xl mb-3">Services</h6>
                            <a className="link link-hover">Web Development</a>
                            <a className="link link-hover">UI/UX Design</a>
                            <a className="link link-hover">Mobile Apps</a>
                            <a className="link link-hover">Consulting</a>
                        </nav>

                        <nav className='flex flex-col gap-2 '>
                            <h6 className="font-bold text-xl mb-3">Information</h6>
                            <a className="link link-hover">Terms of Use</a>
                            <a className="link link-hover">Privacy Policy</a>
                            <a className="link link-hover">Cookie Policy</a>
                            <a className="link link-hover">FAQs</a>
                        </nav>

                        <nav className='flex flex-col gap-2 justify-center items-start '>
                            <h6 className="font-bold text-xl mb-3">Social Links</h6>
                            <a className="link link-hover flex justify-center items-center gap-2"> <img className='w-3.75 h-3.75' src={fb} alt="" /> Facebook</a>
                            <a className="link link-hover flex justify-center items-center gap-2"> <img className='w-3.75 h-3.75' src={X} alt="" /> Twitter</a>
                            <a className="link link-hover flex justify-center items-center gap-2"> <img className='w-3.75 h-3.75' src={In} alt="" /> LinkedIn</a>
                            <a className="link link-hover flex justify-center items-center gap-2"> <img className='w-3.75 h-3.75' src={mail} alt="" /> Email</a>
                        </nav>
                    </div>
                </footer>
                    <p className='border-t border-gray-500 w-full p-8 text-xs text-center text-white'>© 2025 CS — Ticket System. All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;