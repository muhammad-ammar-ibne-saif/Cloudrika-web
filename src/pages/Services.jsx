import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Hero from "../assets/images/services/hero.png";
import code from "../assets/images/home/code.png";
import Process from "../assets/images/services/process.png";
import ServiceCard from "../components/Card";

const Services = () => {
  return (
    <>
      {/* hero */}
      <section>
        <div
          className="h-[80vh] text-center content-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="text-[#5454D4] font-body md:text-[1.5vw]">
            Our Services
          </p>
          <h1 className="text-[7vw] md:text-[4vw] font-title px-8 md:px-[25vw] leading-none">
            Competent Full <span className="text-[#5454D4]">IT Service</span>{" "}
            for your Business Success
          </h1>
          <p className="font-body px-2 pt-2 md:px-80">
            Cloudrika Technologies provides competent full IT services designed to drive
            your business success. From innovative solutions to reliable
            support, we ensure your operations run smoothly. Partner with us for
            a smarter, tech-driven future.
          </p>
          <div className="pl-[28vw] md:pl-[43vw] pt-4">
            <Link to="/contact">
              <button className="bg-[#5454D4] text-white group  px-4 py-1 md:py-2 rounded-3xl flex gap-4">
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
      </section>

      {/* Services */}
      <section className="text-center">
        <h1 className="md:pt-16 text-[8vw] leading-none  md:text-[4vw] font-title relative inline-block">
          Services We Offer
          {/* Big line */}
          <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform translate-y-2"></span>
          {/* Small line */}
          <span className="absolute left-1/2 bottom-0 w-1/4 h-0.5 bg-black transform -translate-x-1/2 translate-y-4"></span>
        </h1>
        <p className=" text-gray-600 pt-8">
          Explore the range of services we provide to meet your needs.
        </p>
      </section>
      <div className="mt-[-16vw] md:mt-[-4vw]">
        <ServiceCard />
      </div>

      <section className="hidden">
        {/* 1 and 2 */}
        <section className="w-[100%] md:flex pt-20">
          <div className="w-[100%] md:w-[50%]">
            <div className="mt-[-32vw] md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <span className="hidden md:block border border-black h-[55vh]"></span>

          <div className="w-[100%] md:w-[50%]">
            <div className="mt-12 md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 and 4  */}
        <section className="w-[100%] md:flex pt-20">
          <div className="w-[100%] md:w-[50%]">
            <div className="mt-[-8vw] md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <span className="hidden md:block border border-black h-[55vh]"></span>

          <div className="w-[100%] md:w-[50%]">
            <div className="mt-12 md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 and 6  */}
        <section className="w-[100%] md:flex pt-20">
          <div className="w-[100%] md:w-[50%]">
            <div className="mt-[-8vw] md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <span className="hidden md:block border border-black h-[55vh]"></span>

          <div className="w-[100%] md:w-[50%]">
            <div className="mt-12 md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7 and 8  */}
        <section className="w-[100%] md:flex pt-20">
          <div className="w-[100%] md:w-[50%]">
            <div className="mt-[-8vw] md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <span className="hidden md:block border border-black h-[55vh]"></span>

          <div className="w-[100%] md:w-[50%]">
            <div className="mt-12 md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9 and 10  */}
        <section className="w-[100%] md:flex pt-20">
          <div className="w-[100%] md:w-[50%]">
            <div className="mt-[-8vw] md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <span className="hidden md:block border border-black h-[55vh]"></span>

          <div className="w-[100%] md:w-[50%]">
            <div className="mt-12 md:mt-0 px-4 md:px-16">
              <img src={code} alt="" />
              <h1 className="text-[6vw] md:text-[3vw] font-title pt-5 ">
                Web Development
              </h1>
              <p>
                We craft dynamic, responsive, and SEO-optimized websites
                tailored to your business goals. Our team ensures top-notch
                functionality and an engaging user experience. Build your online
                presence with innovative web solutions.
              </p>
            </div>
            <div className=" py-4 md:px-12">
              <div className="md:flex md:px-2 space-x-2 ">
                {/* Customized Software Solutions */}
                <div className="ml-2 md:ml-0">
                  <Link
                    to="/services/customized-software-solutions"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-6 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Customized Software Solutions
                    </button>
                  </Link>
                </div>

                {/* Wordpress || CMS Platforms */}
                <div className="pt-2 md:pt-0">
                  <Link
                    to="/services/website-development"
                    className="md:text-[#515151]  pt-2 font-body"
                  >
                    <button className=" text-[5vw] md:text-[1.3vw] px-8 md:px-24 lg:px-2 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                      Wordpress || CMS Platforms
                    </button>
                  </Link>
                </div>
              </div>

              {/* Ecommerce Solutions */}
              <div className="pt-2 px-2">
                <Link
                  to="/services/ecommerce-web-and-mobile-app-development"
                  className="md:text-[#515151]  pt-2 font-body"
                >
                  <button className=" text-xl md:text-[1.3vw] px-12 md:px-6 py-1  text-[#5454D4] hover:text-white hover:bg-[#5454D4] border border-[#5454D4] rounded-full ">
                    Ecommerce Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Our Process */}
      <section className="bg-[#F8F8FF] mb-12">
        <div className="w-[100%] md:flex pt-12 mt-6">
          <div className="w-[100%] md:w-[50%] px-4 md:px-20 ">
            <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
              {" "}
              WHAT WE’RE OFFERING
            </p>
            <h1 className="text-[7vw] md:text-[4vw] font-title leading-none pr-2 md:pr-24">
              Dealing in all{" "}
              <span className="text-[#5454D4]">professional IT</span> services.
            </h1>
          </div>
          <div className="w-[100%] md:w-[50%] px-4 md:px-12 ">
            <p>
              At Cloudrika Technologies, we offer a comprehensive range of professional
              IT services tailored to meet diverse business needs. From software
              development to IT support, our expertise ensures seamless and
              efficient solutions. Trust us to power your success..
            </p>
            <div className="pt-4">
              <Link to="/services">
                <button className="bg-[#5454D4] text-white group  px-4 py-1 rounded-3xl flex gap-4">
                  <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                    View All
                  </span>
                  <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                    <FaArrowRightLong size={20} className="text-black " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-48 py-12">
          <img src={Process} alt="" />
        </div>
      </section>
    </>
  );
};

export default Services;
