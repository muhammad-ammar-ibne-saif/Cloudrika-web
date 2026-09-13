import { Link } from "react-router-dom";
import Hero from "../assets/images/portfolio/Frame (4).png";
import Website from "../assets/images/singleServices/web/Hero.png";
import Mobile from "../assets/images/singleServices/mobile/Hero.png";
import Ecommerce from "../assets/images/singleServices/e-commerce/Hero.png";
import Chrome from "../assets/images/singleServices/chrome/Hero.png";
import Marketing from "../assets/images/singleServices/marketting/Hero.png";
import Graphic from "../assets/images/singleServices/graphic/Hero.png";
import UI from "../assets/images/singleServices/ui/Hero.png";
import SEO from "../assets/images/singleServices/seo/Hero.png";
import Custom from "../assets/images/portfolio/custom-portfolio.webp";
import CTA from "../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <>
      {/* Hero */}
      <section className="w-[100%]  flex flex-col-reverse md:flex-row md:pt-8 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body">
            Our Portfolio
          </p>
          <h1 className="font-title text-[7.5vw] md:text-[4vw] leading-none md:pr-24">
            Showcasing{" "}
            <span className="text-[#5454D4]">Cloudrika Technologies</span> Success
            Stories
          </h1>
          <p className="font-body md:pr-24">
            At SR Innovations, we take pride in delivering exceptional results
            for our clients. From innovative solutions to impactful designs, our
            work speaks for itself. Explore our portfolio and see how we&apos;ve
            helped businesses achieve success through tailored digital
            strategies.
          </p>
          <div className="py-4">
            <Link to="/contact">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  Get a Quote
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 pl-12 md:ml-16 ">
          <img
            className="h-[320px] md:h-[400px] w-[320px] md:w-[400px]"
            src={Hero}
            alt=""
          />
        </div>
      </section>

      {/* Portfolio */}

      {/* Marketing */}
      <section className="w-[100%] md:flex md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[400px] w-[400px] md:w-[500px]"
            src={Marketing}
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-2">
            Digital Media Marketing
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Amplify your brand’s voice with strategic digital marketing
            campaigns that deliver measurable results.
          </p>

          <div className="py-4">
            <Link to="/services/digital-marketting">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/*  Graphic */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-24">
            Graphic Designing
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Bringing your ideas to life with visually stunning graphics that
            leave a lasting impression.
          </p>

          <div className="py-4">
            <Link to="/services/graphic-designing">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[350px] w-[400px] md:w-[500px]"
            src={Graphic}
            alt=""
          />
        </div>
      </section>

      {/* UI/Ux */}
      <section className="w-[100%] md:flex md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[350px] w-[400px] md:w-[500px]"
            src={UI}
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-24">
            UI/UX Designing
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Designing intuitive and user-friendly interfaces that enhance
            digital interactions and experiences.
          </p>

          <div className="py-4">
            <Link to="/services/ui-ux-designing">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* SEO */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-2">
            Professional SEO Services
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Boost your online visibility and drive organic growth with
            cutting-edge SEO strategies tailored to your needs.
          </p>

          <div className="py-4">
            <Link to="/services/search-engine-optimization">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[350px] w-[420px] md:w-[500px]"
            src={SEO}
            alt=""
          />
        </div>
      </section>

      {/* Website Devlopment */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-24">
            Website Development
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Elevate your online presence with stunning, responsive websites
            tailored to captivate your audience and drive results.
          </p>

          <div className="py-4">
            <Link to="/services/website-development">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 md:px-0 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[300px] md:h-[300px] w-[450px] md:w-[600px]"
            src={Website}
            alt=""
          />
        </div>
      </section>
      {/* CUstom Software Solutions */}
      <section className="w-[100%] md:flex md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[450px] w-[350px] md:w-[500px]"
            src={Custom}
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[50%] md:pt-16 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[3.5vw]">
            Custom Software Solutions
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Streamline your business operations with bespoke software solutions
            designed to meet your unique needs.
          </p>

          <div className="py-4">
            <Link to="/services/customized-software-solutions">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Mobile App Development */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-2">
            Mobile App Development
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Transform ideas into powerful mobile apps with seamless
            functionality and user-centric designs.
          </p>

          <div className="py-4">
            <Link to="/services/mobile-app-develpment">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] md:ml-4 ">
          <img
            className="h-[320px] md:h-[350px] w-[400px] md:w-[400px]"
            src={Mobile}
            alt=""
          />
        </div>
      </section>

      {/* Ecommerce Web/Mobile apps */}
      <section className="w-[100%] md:flex md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[270px] md:h-[350px] w-[400px] md:w-[500px]"
            src={Ecommerce}
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  ">
            E-commerce Web/Mobile App Development
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Build feature-rich e-commerce platforms that redefine online
            shopping experiences for your customers.
          </p>

          <div className="py-4">
            <Link to="/services/ecommerce-web-and-mobile-app-development">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Chrome Extension */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[8vw] leading-none md:text-[4vw] px-2  md:pr-24">
            Chrome Extension Development
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Simplify workflows and enhance productivity with custom Chrome
            extensions crafted for your business.
          </p>

          <div className="py-4">
            <Link to="/services/chrome-extension-development">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[350px] w-[400px] md:w-[500px]"
            src={Chrome}
            alt=""
          />
        </div>
      </section>
      {/* Bussiness App Devlopment */}
      {/* <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[450px] w-[320px] md:w-[500px]"
            src={Hero}
            alt=""
          />
        </div>
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <h1 className="font-title text-[7.5vw] md:text-[4vw]  md:pr-24">
            Bussiness App Devlopment CRM/ERP
          </h1>
          <p className="md:text-[1.5vw] px-2 font-body">
            Crafting Digital Experiences that Inspire
          </p>

          <div className="py-4">
            <Link to="/contact">
              <button className="bg-[#5454D4] text-white group  px-5 py-2 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  View Service
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section
        className="h-[40vh] md:h-[80vh] text-center content-center mt-12 md:mt-4 mb-12"
        style={{ backgroundImage: `url(${CTA})` }}
      >
        <h1 className="text-white font-title text-[7vw] md:text-[4vw] ">
          Streamline Your Workflows Today
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Partner with us to build a Chrome extension that enhances your
          productivity and functionality.
        </p>
        <div className="pt-4 pl-[24vw] md:pl-[43vw]">
          <Link to="/contact">
            <button className=" bg-white text-[#5454D4] group  px-5 py-2 rounded-3xl flex gap-4">
              <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                Get a Quote
              </span>
              <span className="bg-[#5454D4] rounded-full px-1 py-1 group-hover:translate-x-2">
                <FaArrowRightLong size={20} className="text-white " />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
