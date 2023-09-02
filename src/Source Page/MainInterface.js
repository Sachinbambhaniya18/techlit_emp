import React, { useState, useEffect } from 'react';

import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';              // , faArrowRightToBracket
import { Dark, Light } from '../Components/svg icons/Themes';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import Cart from '../Header Pages/Cart';
import Home from '../Nav Pages/Home';
import Television from '../Nav Pages/Television';
import SmartPhones from '../Nav Pages/SmartPhones';
import Computers from '../Nav Pages/Computers';
import Electronics from '../Nav Pages/Electronics';
import Books from '../Nav Pages/Books';
import AboutUs from '../Nav Pages/AboutUs';
import LoginPanel from '../Header Pages/LoginPanel';
import NotFound from '../Nav Pages/NotFound';
import SlideInNavbar from '../Components/SlideInNavbar';
import { Logo } from '../Components/svg icons/logo';
// import { AnimatePresence } from 'framer-motion';

const MainInterface = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const showNav = () => {
        setShowNavbar(!showNavbar)
        document.body.classList.add("Scroll-Lock");
    }
    const closeNav = () => {
        setShowNavbar(!showNavbar)
        document.body.classList.remove("Scroll-Lock");
    }
    const showLoginPanel = () => {
        setIsLogin(!isLogin)
        document.body.classList.add("Scroll-Lock");
    }
    const closeLoginPanel = () => {
        setIsLogin(!isLogin)
        document.body.classList.remove("Scroll-Lock");
    }


    const getDarkModeState = () => {
        const storedState = localStorage.getItem('darkMode');
        return storedState ? JSON.parse(storedState) : false;
    };

    const setDarkModeState = (isDarkMode) => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    };

    const [isDarkMode, setIsDarkMode] = useState(getDarkModeState);

    const handleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        setDarkModeState(isDarkMode);
    }, [isDarkMode]);

    const navPaths = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/Tvs",
            name: "Television"
        },
        {
            path: "/SmartPhones",
            name: "Smart Phones"
        },
        {
            path: "/Computers",
            name: "Desktops/Laptops"
        },
        {
            path: "/Electronics",
            name: "Electronics"
        },
        {
            path: "/Books",
            name: "Books"
        },
        {
            path: "/AboutUs",
            name: "About Us"
        }
    ]
    const routePaths = [
        {
            path: "/",
            component: <Home />,
            title: "Home - TechLit Emporium"
        },
        {
            path: "/Tvs",
            component: <Television />,
            title: "TVs - TechLit Emporium"

        },
        {
            path: "/SmartPhones",
            component: <SmartPhones />,
            title: "Smart Phones - TechLit Emporium"
        },
        {
            path: "/Computers",
            component: <Computers />,
            title: "Computers - TechLit Emporium"

        },
        {
            path: "/Electronics",
            component: <Electronics />,
            title: "Electronics - TechLit Emporium"

        },
        {
            path: "/Books",
            component: <Books />,
            title: "Books - TechLit Emporium"

        },
        {
            path: "/AboutUs",
            component: <AboutUs />,
            title: "About Us - TechLit Emporium"

        },
        {
            path: "Cart",
            component: <Cart />,
            title: "Cart - TechLit Emporium"
        },
        {
            path: "/LoginPanel",
            component: <LoginPanel />,
            title: "Login - TechLit Emporium"
        },
        {
            path: "/SlideInNavbar",
            component: <SlideInNavbar />,
            title: "TechLit Emporium"
        },
        {
            component: <NotFound />,
            title: "404 - Not Found"
        },

    ]
    const handleNavBar = isDarkMode
        ? { color: 'var(--text-night-clr)' }
        : { color: 'var(--text-day-clr)' };

        return (
        <header className={`Header-section`}>
            <div className={`Nav-Holder`}>
                <div className={`Main ${isDarkMode ? 'Dark-Header' : 'Light-Header'}`}>
                    <button className={`Nav-icon Nav-Position ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`} onClick={showNav}><Icon icon={faBars} size='xl' /></button>
                    {
                        showNavbar && <SlideInNavbar closeNav={closeNav} />
                    }
                    <Link to="/" id="Logo" className='Logo'>
                        <Logo />
                        {/* <img src="/assets/images/logo/TechLit_NavBar.png" alt="logo" className='Logo' /> */}
                    </Link>
                    <form action="" method="get">
                        <div className="Search-bar">
                            <input type="search" id="search-data" className={`finder ${isDarkMode ? 'Dark-input' : 'Light-input'}`} placeholder='Search your products, brands or more' />
                            <button className={`Mag-glass ${isDarkMode ? 'Dark-Mag' : 'Light-Mag'}`} >
                                <Icon icon={faMagnifyingGlass} size="m" />
                            </button>
                        </div>
                    </form>
                    {/* <input type="checkbox" id="nav-user" />
                    <label htmlFor="nav-user" className={`User-Creds ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`}>
                        <Icon icon={faUser} size='xl' />
                    </label>
                    <div className='User-dialog'>
                        <ul>
                            <Link onClick={showLoginPanel} className='User-Options'>
                                <li>
                                    <Icon icon={faArrowRightToBracket} size='s' />
                                    Login
                                </li>
                            </Link>
                            <Link to="/Cart" className='User-Options'>
                                <li>
                                    <Icon icon={faShoppingCart} size="s" />
                                    Cart
                                </li>
                            </Link>
                        </ul>
                    </div> */}
                    <button id='User-login' onClick={showLoginPanel}>Login</button>
                    {
                        isLogin && <LoginPanel onClose={closeLoginPanel} />
                    }
                    <Link to="/Cart"><label className={`Cart ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`}><Icon icon={faShoppingCart} size="xl" /></label></Link>
                    <label onClick={handleTheme}>
                        {isDarkMode ? <Light /> : <Dark />}
                    </label>
                </div>
                <nav className={`${isDarkMode ? 'Dark-Navbar Dark-effect' : 'Light-Navbar Light-effect'}`}>
                    <div className="Options">
                        {
                            navPaths.map((navPath) => {
                                return (
                                    <Link to={navPath.path}
                                        style={handleNavBar}
                                        key={navPath.path}
                                    >
                                        {navPath.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </nav>
            </div>
            {/* <AnimatePresence> */}
            <Routes> {/*location={location} key={location.pathname} */}
                {
                    routePaths.map((route) => (
                        <Route
                            key={route.path} 
                            path={route.path}
                            element={React.cloneElement(route.component, {
                                title: route.title,
                                isDarkMode: isDarkMode
                            })}
                        />
                    ))
                }
            </Routes>
            {/* </AnimatePresence> */}
        </header>
    );
}

export default MainInterface;
