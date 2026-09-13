import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Navlogo from "../assets/images/512.png";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md w-full fixed z-50 top-0 left-0 font-titleFont ">
      <div className="bg-black h-8 2xl:h-10 font-body">
        <p className="text-white text-center pt-3 md:pt-2 text-[3vw] md:text-[1.2vw] ">
          Looking for best IT solution company in your region?
        </p>
      </div>
      <div className="md:flex items-center h-[15vw] sm:h-auto bg-white md:px-20 px-7">
        <div
          onClick={toggleMenu}
          className="text-[8vw] sm:text-4xl absolute cursor-pointer md:hidden pt-4 sm:pt-6"
        >
          <IoMenu name={menuOpen ? "close" : "menu"} />
        </div>
        <div className="flex">
          <Link to="/">
            <img
              className="h-[14vw] sm:h-[8w] md:h-[6vw] pl-[12vw] sm:pl-[10vw] md:pl-0 pt-3 sm:py-2"
              src={Navlogo}
              alt=""
            />
          </Link>
        </div>
        <ul
          className={`md:flex text-left items-start font-body md:pb-2 pb-8 absolute md:static bg-white h-screen  md:h-auto top-0 md:z-auto z-[-1] left-0 w-full  md:pl-0 pl-9 2xl:pl-48 transition-all duration-500 ease-in pt-12 sm:pt-20 md:pt-4 2xl:pt-8  ${
            menuOpen ? "top-12" : "top-[-1100px]"
          }`}
        >
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/Home"
              className={`nav text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 ml-0 lg:ml-60 xl:ml-60 2xl:ml-40 font-medium hover:text-[#5454D4] ${
                isActive("/Home")
                  ? "text-[#5454D4] underline underline-offset-8"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/About"
              className={`text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 font-medium hover:text-[#5454D4] ${
                isActive("/About")
                  ? "text-[#5454D4] underline underline-offset-8"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="relative flex">
            <Link
              onClick={() => setMenuOpen(false)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              to="/Services"
              className={`nav flex text-[#515151] text-[4vw] lg:text-[1.5vw] pr-1 font-medium hover:text-[#5454D4] cursor-pointer ${
                isActive("/Services")
                  ? "text-[#5454D4] underline underline-offset-8 "
                  : ""
              }`}
            >
              Services
            </Link>
            <span>
              <RiArrowDropDownLine
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="ml-48 md:ml-0 text-[6.5vw] lg:text-[2.5vw] mr-4"
              />
            </span>
            {servicesOpen && (
              <div
                className="absolute cursor-pointer w-[72vw] lg:w-[22vw] rounded-lg bg-white shadow-md p-2 pt-2 lg:pt-5 mt-7"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  key="7"
                  to="/services/digital-marketting"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Digital Marketing
                </Link>

                <Link
                  key="8"
                  to="/services/graphic-designing"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Graphic Design
                </Link>

                <Link
                  key="9"
                  to="/services/ui-ux-designing"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  UI/UX Designing
                </Link>

                {/* <Link
                  key="10"
                  to="/services/video-animation"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Video Animation
                </Link> */}

                <Link
                  key="11"
                  to="/services/search-engine-optimization"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Professional SEO Services
                </Link>
                <Link
                  key="1"
                  to="/services/website-development"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Website Development
                </Link>

                <Link
                  key="2"
                  to="/services/mobile-app-develpment"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Mobile App Development
                </Link>

                <Link
                  key="3"
                  to="/services/customized-software-solutions"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Customized Software Solutions
                </Link>

                {/* <Link
                  key="4"
                  to="/services/bussiness-app-development"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Bussiness App Development CRM/ERP
                </Link> */}

                <Link
                  key="5"
                  to="/services/chrome-extension-development"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  Chrome Extension Development
                </Link>

                <Link
                  key="6"
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="block pl-3 py-2 text-[#05185A] text-[3.2vw] lg:text-[1.2vw] hover:text-white hover:bg-[#05185A]"
                  onClick={() => setMenuOpen(false)}
                >
                  E-Commerce Web/Mobile Apps
                </Link>
              </div>
            )}
          </li>
          <li
            className={`md:mt-0 ${servicesOpen ? "mt-[350px]" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <Link
              to="/Portfolio"
              className={`nav text-[#515151] text-[4vw] lg:text-[1.5vw] pt-2 pr-6 font-medium hover:text-[#5454D4] ${
                isActive("/Portfolio")
                  ? "text-[#5454D4] underline underline-offset-8 "
                  : ""
              }`}
            >
              Portfolio
            </Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="https://www.instagram.com/_cloudrika?stkn=NTFyamh2dml3a2x1&utm_source=qr">
              <FaInstagram className="md:text-[#515151] hidden md:block pt-1 2xl:pt-0 pl-3 text-[2.5vw] 2xl:text-[2vw] md:ml-12 lg:ml-48  " />
            </a>
          </li>

          <li
            className="pl-12 md:pl-3 pt-2 md:pt-0 2xl:mt-[-0.5vw] "
            onClick={() => setMenuOpen(false)}
          >
            <Link to="/Contact" className="md:text-[#515151] font-medium">
              <button className="bg-[#5454D4] text-white group px-3 py-1 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  Contact Us
                </span>
                <span className="bg-white rounded-full px-1 2xl:px-2 py-1 group-hover:translate-x-2 transfrom ease-in-out duration-300 ">
                  <FaArrowRightLong
                    size={20}
                    className="text-black  2xl:mt-1 "
                  />
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
