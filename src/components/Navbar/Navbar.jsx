import React from 'react';
import './Navbar.css';
// import {AiOutLineHome} from './react-icons/ai';
// import {AiOutLineUser} from './react-icons/ai';
// import {TiGroupOutLine} from './react-icons/ti';
// import {BiMessageRoundedDots} from './react-icons/bi';
// import {BsArrowDownCircle} from './react-icons/bs';
import {AiFillAlipayCircle} from 'react-icons/ai';

function Navbar() {
    return (
        <div className="navigation">
            <a href="#home">
                <AiFillAlipayCircle className="icon active-nav" />
            </a>
            {/* <a href="#about">
                <AiOutLineUser className="icon " />
            </a>
            <a href="#members">
                <TiGroupOutLine className="icon " />
            </a>
            <a href="#contact">
                <BiMessageRoundedDots className="icon " />
            </a>
            <a href="#footer">
                <BsArrowDownCircle className="icon " />
            </a> */}
        </div>
    )
}

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon)=>{
    icon.addEventListener('click' , ()=>{
        changeactive();
        icon.classList.add('active-nav');
    });
});

function changeactive(){
    Icons.forEach(icon=> {
        icon.classList.remove('active-nav');
    })
}
export default Navbar;
