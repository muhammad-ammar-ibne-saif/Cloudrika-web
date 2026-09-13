import FooterLogo from "../assets/images/Footer-Logo.png";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaPhone } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#2A2A2A] overflow-x-hidden">
      <hr className="text-[#5454D4]" />

      <div className="flex flex-col md:flex-row w-[100%] gap-10 lg:gap-6 text-white px-4 md:px-16  justify-center pb-8">
        <div className="pt-8 md:pt-16 text-white md:w-[30%] 2xl:w-[40%] md:pb-12">
          <div>
            <img
              className="h-20 md:h-24 px-28 md:px-2 "
              src={FooterLogo}
              alt=""
            />
            <p className="text-[4vw] font-body lg:text-[1vw] pt-6 md:pt-6 2xl:w-[80%] ">
              We&apos;re a cohesive team of tech enthusiasts committed to
              streamlining business operations through the transformative
              potential of technology.
            </p>
          </div>
          <div>
            <a href="https://www.instagram.com/thesrinnovations?igsh=azMzamx0b3MybmN6&utm_source=qr">
              <FaInstagram className="md:text-[#ffff]  pt-3 ml-36 md:ml-0 mt-5 md:mt-0 text-[10vw] md:text-[2.5vw] " />
            </a>
          </div>
        </div>

        <div className="text-center  md:w-[20%] 2xl:w-[20%] md:pb-8 md:pt-12">
          <h1 className="text-[6vw] text-[#5454D4] lg:text-[2vw] text-left font-bold pb-5 font-title ">
            Site Map
          </h1>
          <ul className="font-body">
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300">
              <Link to="/home">Home</Link>
              <hr className="text-[#5454D4]" />
            </li>
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300">
              <Link to="/about">About Us</Link>
              <hr className="text-[#5454D4]" />
            </li>

            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300">
              <Link to="/services">Services</Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left  2xl:text-[1vw]  py-1 hover:text-slate-300">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <hr className="text-[#5454D4]" />
          </ul>
        </div>

        <div className="text-center md:w-[25%] 2xl:w-[20%] md:pt-12 2xl:px-12 ">
          <h1 className="text-[6vw] text-[#5454D4] lg:text-[2vw] font-bold pb-2 font-title text-left ">
            Services
          </h1>
          <ul>
            <li className="text-left 2xl:text-[1vw] font-body py-1 pt-3 hover:text-slate-300">
              <Link to="/services/website-development">
                Website Development
              </Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left 2xl:text-[1vw] font-body py-1 hover:text-slate-300">
              <Link to="/services/customized-software-solutions">
                Customized Software Solutions
              </Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left 2xl:text-[1vw] font-body py-1 hover:text-slate-300">
              <Link to="/services/mobile-app-develpment">
                Mobile App Development
              </Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left 2xl:text-[1vw] font-body py-1 hover:text-slate-300">
              <Link to="/services/chrome-extension-development">
                Chrome Extension Development
              </Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left 2xl:text-[1vw] font-body py-1 hover:text-slate-300">
              <Link to="/services/ecommerce-web-and-mobile-app-development">
                E-Commerce Web/Mobile Apps
              </Link>
            </li>
            <hr className="text-[#5454D4]" />
            <li className="text-left 2xl:text-[1vw] font-body py-1 hover:text-slate-300">
              <Link to="/services/ui-ux-designing">UI/UX Designing</Link>
            </li>
            <hr className="text-[#5454D4]" />

            <li className="text-left  2xl:text-[1vw]  font-body py-1 hover:text-slate-300">
              <Link to="/services/graphic-designing">Graphic Design</Link>
            </li>
            <hr className="text-[#5454D4]" />

            <li className="text-left  2xl:text-[1vw]  font-body  py-1 hover:text-slate-300">
              <Link to="/services/digital-marketting">
                Digital Media Marketting
              </Link>
            </li>
            <hr className="text-[#5454D4]" />

            {/* <li className="text-left  2xl:text-[1vw]  font-body  py-1 hover:text-slate-300">
              <Link to="/services/video-animation">Video Animation</Link>
            </li>
            <hr className="text-[#5454D4]" /> */}

            <li className="text-left  2xl:text-[1vw]  font-body  py-1 hover:text-slate-300">
              <Link to="/services/search-engine-optimization">SEO</Link>
            </li>
            <hr className="text-[#5454D4]" />
          </ul>
        </div>

        <div className="md:w-[25%] 2xl:w-[20%]">
          <h1 className="text-[6vw] text-[#5454D4] lg:text-[2vw] font-title font-bold md:pt-12 ">
            Contact Us
          </h1>
          <div className="gap-2 pt-2 font-body">
            <p className="flex py-2 gap-4">
              <CgMail className="text-[#5454D4] text-[6vw] md:text-[2vw]" />{" "}
              <span className="hover:text-slate-300  2xl:text-[1vw] ">
                <a href="mailto:info@cloudrika.com">
                  info@cloudrika.com
                </a>
              </span>{" "}
            </p>

            
            {/* <hr className="text-[#5454D4]" />
            <p className="flex py-2 gap-5">
              <FaPhone className="text-[#5454D4] text-[5vw] md:text-[1.5vw]" />{" "}
              <a
                href="tel:+61489996322"
                className="hover:text-slate-300  2xl:text-[1vw] font-body "
              >
                +61 489 996 322
              </a>{" "}
            </p> */}
            <hr className="text-[#5454D4]" />
            <p className="flex py-2 gap-5">
              <IoLocationOutline className="text-[#5454D4] text-[6vw] md:text-[2vw]" />{" "}
              <span className="hover:text-slate-300 2xl:text-[1vw]">
                <a href="">
                  150 E B ST LBBY, CASPER, WY 82601
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="py-2 pl-12 text-white text-center bg-[#5454D4] font-body text-[3vw] md:text-[1vw] ">
        <p>Copyright© 2026, Cloudrika Technologies All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
