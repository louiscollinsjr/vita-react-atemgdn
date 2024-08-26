import React, { Fragment, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

//import { ReactComponent as navLogo } from '../../assets/atem-logo-with-wings-black.svg';
import navLogo from '../../assets/atem-logo-with-wings-black.svg';
import Footer from '../footer/footer.component';
//import Footer from '../../components/footer/footer.component';
import './navigation.styles.css';

// Scroll to section function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleContactScroll = () => {
    const section = document.getElementById('contact-hash');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
      <nav className="md:h-auto bg-black md:bg-white fixed  top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-lg md:bg-opacity-30">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-4  py-3 flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" end>
              <img className="w-20 invert md:invert-0"  src={navLogo} alt="Logo" onClick={() => setIsMobileNavOpen(false)} />
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink className="text-xs nav-link" to="/maestro">
              Maestro
            </NavLink>
            <NavLink className="text-xs nav-link" to="#">
            Design and Development
            </NavLink>
            <NavLink className="text-xs nav-link" to="#">
            Satchel AR
            </NavLink>
            <NavLink className="text-xs nav-link" to="#">
            atem.Labs
            </NavLink>
           
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileNav}
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

          </button>
        </div>

        <div className="hidden md:flex justify-between max-w-screen-2xl mx-auto md:px-4 py-3 ">
          <div className="text-black text-xl font-semibold tracking-[0.011em] leading-5">
            Products and Services Spotlight
          </div>
          <div className="space-x-4">
            {/* <a
              href="#"
              className="text-xs text-slate-100 hover:text-grey-100 pointer-events-none"
            >
              Overview
            </a> */}
            <NavLink to="#" onClick={()=>scrollToSection('contact-section')} className="text-xs nav-link">
            Contact us
            </NavLink>
            
            <a
              href="https://calendly.com/louiscollinsjr/atem-intro"
              className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-3 py-1.5 rounded-full"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {isMobileNavOpen && (
        <div className={`fixed inset-0  md:hidden bg-black h-screen bg-opacity-100 z-40 overflow-hidden transition-max-height duration-300 ease-in-out`}>
        
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img className="w-20 bg-white invert md:invert-0"  src={navLogo} alt="Logo" onClick={() => setIsMobileNavOpen(false)} />
            </Link>
          </div>
          
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileNav}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          </button>
        </div>

          <div className="px-4 pb-4 pt-6 space-y-2">
            <Link className="block text-white hover:text-gray-300 text-3xl py-2" to="/maestro" onClick={() => setIsMobileNavOpen(false)}>Maestro</Link>
            <Link className="block text-white hover:text-gray-300 text-3xl py-2" to="#" onClick={() => setIsMobileNavOpen(false)}>Design and Development</Link>
            <Link className="block text-white hover:text-gray-300 text-3xl py-2" to="#" onClick={() => setIsMobileNavOpen(false)}>Satchel AR</Link>
            <Link className="block text-white hover:text-gray-300 text-3xl py-2" to="#" onClick={() => setIsMobileNavOpen(false)}>atem.Labs</Link>
            <Link className="block text-white hover:text-gray-300 text-3xl py-2" to="#contact-section" onClick={() => setIsMobileNavOpen(false)}>Contact us</Link>
          </div>
        </div>
      
        )}
      </nav>
      <Outlet />
      <Footer />
    </Fragment>

  );
};

export default Navigation;
