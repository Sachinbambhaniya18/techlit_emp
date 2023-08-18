import React, { useState, useEffect } from 'react';

import { Route, Routes, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faBars, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Dark, Light } from '../Components/svg icons/Themes';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Cart from '../Header Pages/Cart';
import Home from '../Nav Pages/Home';
// import BestSeller from '../Nav Pages/BestSeller';
import Television from '../Nav Pages/Television';
import SmartPhones from '../Nav Pages/SmartPhones';
import Computers from '../Nav Pages/Computers';
import Electronics from '../Nav Pages/Electronics';
import Books from '../Nav Pages/Books';
import AboutUs from '../Nav Pages/AboutUs';
import LoginPanel from '../Header Pages/LoginPanel';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';
import NotFound from '../Nav Pages/NotFound';
// import { AnimatePresence } from 'framer-motion';
const MainInterface = () => {
    const [isLogin, setIsLogin] = useState(false);

    const showLoginPanel = () =>{
        setIsLogin(!isLogin);
    }
    const closeLoginPanel = () =>{
        setIsLogin(!isLogin);
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

    const handleNavBar = () => { return isDarkMode ? { color: 'var(--text-night-clr)' } : { color: 'var(--text-day-clr)' } }
    // const location = useLocation(); 
    return (
        <header className={`Header-section`}>
            <div className={`Nav-Holder`}>
                <div className={`Main ${isDarkMode ? 'Dark-Header' : 'Light-Header'}`}>
                    <input type="checkbox" id="Menu" className='Menu-Bar' />
                    <label htmlFor="Menu" className='Menu-Icon'></label>
                    <Link to="/" id="Logo">
                        <img src="/assets/images/logo/TechLit_NavBar.png" alt="logo" className='Logo' />
                    </Link>
                    <form action="" method="get">
                        <div className="Search-bar">
                            <input type="search" id="search-data" className={`finder ${isDarkMode ? 'Dark-input' : 'Light-input'}`} placeholder='Search your products, brands or more' />
                            <button className={`Mag-glass ${isDarkMode ? 'Dark-Mag' : 'Light-Mag'}`} >
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="m" />
                            </button>
                        </div>
                    </form>
                    <input type="checkbox" id="nav-user" />
                    <label htmlFor="nav-user" className={`User-Creds ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`}>
                        <FontAwesomeIcon icon={faUser} size='xl' />
                    </label>
                    <div className='User-dialog'>
                        <ul>
                            <Link onClick={showLoginPanel} className='User-Options'>
                                <li>
                                    <FontAwesomeIcon icon={faArrowRightToBracket} size='s'/>
                                    &nbsp;
                                    Login
                                </li>
                            </Link>
                            <Link to="/Cart" className='User-Options'>
                                <li>
                                <FontAwesomeIcon icon={faShoppingCart} size="s" />
                                    &nbsp;
                                    Cart
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <button id='User-login' onClick={showLoginPanel}>Login</button>
                    {
                        isLogin && <LoginPanel onClose={closeLoginPanel}/> 
                    }
                    <Link to="/Cart"><label className={`Cart ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`}><FontAwesomeIcon icon={faShoppingCart} size="xl" /></label></Link>
                    <label onClick={handleTheme}>
                        {isDarkMode ? <Light /> : <Dark />}
                    </label>
                </div>
                <input type="checkbox" id="nav-menu" className='Nav-Position' />
                <label htmlFor="nav-menu" className={`Nav-icon Nav-Position ${isDarkMode ? 'Dark-Text' : 'Light-Text'}`}><FontAwesomeIcon icon={faBars} size='xl' /></label>
                <nav className={`${isDarkMode ? 'Dark-Navbar Dark-effect' : 'Light-Navbar Light-effect'}`}>
                    <div className="Options">
                        <Link to="/"
                            style={handleNavBar()}>Home</Link>
                        {/* <li><Link to="/BestSeller"
                            style={handleNavBar()}>Best Seller</Link>
                        </li> */}
                        <Link to="/Tvs"
                            style={handleNavBar()}>TVs</Link>
                        
                        <Link to="/SmartPhones"
                            style={handleNavBar()}>Smart Phones</Link>
                        
                        <Link to="/Computers"
                            style={handleNavBar()}>Desktops/Laptops</Link>
                        
                        <Link to="/Electronics"
                            style={handleNavBar()}>Electronics</Link>
                        
                        <Link to="/Books"
                            style={handleNavBar()}>Books</Link>
                        
                        <Link to="/AboutUs"
                            style={handleNavBar()}>About Us</Link>
                        
                    </div>
                </nav>
            </div>
            {/* <AnimatePresence> */}
            <Routes> {/*location={location} key={location.pathname} */}
                <Route index element={<Home title="Home - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/Cart' element={<Cart title="Cart - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/Tvs' element={<Television title="TVs - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/SmartPhones' element={<SmartPhones title="SmartPhones - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/Computers' element={<Computers title="Computers - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/Electronics' element={<Electronics title="Electronics - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/Books' element={<Books title="Books - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/AboutUs' element={<AboutUs title="About Us - TechLit Emporium" isDarkMode={isDarkMode} />} />
                <Route path='/LoginPanel' element={<LoginPanel title="Login - TechLit Emporium" isDarkMode={isDarkMode} />} >
                    <Route element={<Login isDarkMode={isDarkMode} />} />
                    <Route element={<SignUp isDarkMode={isDarkMode} />} />
                </Route>
                <Route title="404 - Not Founf" element={<NotFound />} />
            </Routes>
            {/* </AnimatePresence> */}
        </header>
    );
}

export default MainInterface;
