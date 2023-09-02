import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faXmark, faHome, faTv, faMobile, faLaptop, faMicrochip, faBook, faAddressBook, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import { motion as m } from 'framer-motion';
import { Logo } from './svg icons/logo';
const SlideInNavbar = ({ closeNav, dropIn, isDarkMode }) => {
    
    const [navFocus, setNavFocus] = useState(null)

    const handleNavClick = (page) => {
        setNavFocus(page);
    }
    const slideNavPaths = [
        {
            path: "/",
            name: "Home",
            classes: "Gap",
            icon: faHome
        },
        {
            path: "/Tvs",
            name: "Television",
            classes: "Gap",
            icon: faTv
        },
        {
            path: "/SmartPhones",
            name: "Smart Phones",
            classes: "Gap-Mob",
            icon: faMobile
        },
        {
            path: "/Computers",
            name: "Desktops/Laptops",
            classes: "Gap-Lap",
            icon: faLaptop
        },
        {
            path: "/Electronics",
            name: "Electronics",
            classes: "Gap-Elec",
            icon: faMicrochip
        },
        {
            path: "/Books",
            name: "Books",
            classes: "Gap-Book",
            icon: faBook
        },
        {
            path: "/AboutUs",
            name: "About Us",
            classes: "Gap-Abt",
            icon: faAddressBook
        }
    ]
    return (
        <div className='Slide-Container'>
            <div className='Slide-Background' onClick={closeNav}></div>
            <m.div
                className="Slide-Options"
                initial={{ width: 0 }}
                animate={{ width: "70vw" }}
                exit={{ width: 0 }}
                transition={{
                    duration: 0.7,
                    type: "spring",
                    damping: 25,
                    stiffness: 500
                }}>
                {/* <div className="User-Creds">
                </div> */}
                <div className="Slide-Logo-Holder">
                    <Link className='Slide-Logo'>
                        <Logo />
                    </Link>
                    <button className='User-Creds'>
                        <Icon icon={faRightToBracket} />
                    </button>
                </div>
                {
                    slideNavPaths.map((slidePath) => {
                        return (
                        <Link to={slidePath.path}
                                onClick={() => handleNavClick(slidePath.name)}
                                className={`Slider-Nav ${navFocus === slidePath.name ? 'Active' : ''}`}>
                                <Icon icon={slidePath.icon} size="xs" className={slidePath.classes} />
                                {slidePath.name}</Link>
                        )
                    })
                }

                <p className="Footer">
                    TechLit Emporium
                    &#169; 2023,<br />
                    All rights reserved.

                </p>
            </m.div>
            <m.button
                className='Close-Nav' onClick={closeNav}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                    rotate: 90
                }}
            ><Icon icon={faXmark} size="2xl" /></m.button>
        </div>
    )
}

export default SlideInNavbar;