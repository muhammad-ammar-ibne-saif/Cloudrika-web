import { Link } from "react-router-dom";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/e-commerce/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/e-commerce/whyUs.png";

// Portfolio
import Liana from "../../assets/images/singleServices/e-commerce/Liana.jpg";
import { useState } from "react";

const Ecommerce = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [{ src: Liana, alt: "Liana" }];

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };
  return (
    <>
      {/* Hero */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body">
            Ecommerce Web/Mobile Apps
          </p>
          <h1 className="font-title text-[8vw] md:text-[4vw] leading-none md:pr-24">
            Powerful{" "}
            <span className="text-[#5454D4]">
              E-commerce Web and Mobile Apps{" "}
            </span>{" "}
          </h1>
          <p className="font-body md:pr-48">
            Revolutionize your online business with feature-rich eCommerce web
            and mobile apps. We craft seamless platforms to deliver exceptional
            user experiences, boost conversions, and drive growth.
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
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] ">
          <img
            className="h-[320px] md:h-[450px] w-[320px] md:w-[600px]"
            src={Hero}
            alt=""
          />
        </div>
      </section>

      {/* tech stack */}
      {/* <div className="w-[100%] bg-[#F8F8FF] md:flex px-4 md:px-10 py-6 ">
        <div className="w-[100%] md:w-[50%] md:px-10 py-6 ">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            {" "}
            Technologies We Use
          </p>
          <h1 className="text-[7vw] md:text-[4vw] font-title leading-none ">
            Advanced{" "}
            <span className="text-[#5454D4]">Ecommerce Development</span>
            Stack
          </h1>
          <p className="font-body">
            We utilize React, Node.js, HTML, CSS, and JavaScript to develop
            scalable and high-performing web and mobile eCommerce solutions.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] px-12">
          <img src={tech1} alt="" />
        </div>
      </div> */}

      {/* Choose our Service */}
      <section className="bg-[#F8F8FF] py-12 ">
        <div className="text-center">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            Choose Our Service
          </p>
          <h1 className="text-[8vw] md:text-[3.5vw] font-title md:px-96 leading-none md:pt-6">
            Elevate Your <span className="text-[#5454D4]"> Ecommerce </span>
            Experience
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Our team builds scalable, intuitive eCommerce apps designed to meet
            your business objectives and delight customers.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Custom Design:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Stand out with unique, visually appealing app designs tailored to
              your brand identity and customer needs. We focus on delivering
              intuitive interfaces that provide a delightful user experience.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Streamlined Checkout:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Offer a smooth, secure, and user-friendly checkout process to
              reduce cart abandonment and improve conversions. Every step is
              optimized for simplicity and customer satisfaction.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Omnichannel Integration:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Seamlessly integrate your web and mobile apps with existing
              platforms for a unified shopping experience. This ensures
              consistent branding and data synchronization across channels.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Data-Driven Insights:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Gain actionable insights with in-app analytics to track user
              behavior, optimize sales, and enhance your strategy. Make informed
              decisions based on real-time data to improve performance.
            </p>
          </div>
          <div className="w-[100%] md:w-[50%] pt-12 md:pt-0 ">
            <img src={WhyUs} alt="" />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="pb-12">
        <div className="px-6">
          <h1 className="md:pt-16  text-[8vw] leading-none  md:text-[4vw] font-title relative inline-block">
            Our E-Commerce Solutions
            {/* Big line */}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-black transform translate-y-2"></span>
            {/* Small line */}
            <span className="absolute left-1/2 bottom-0 w-1/4 h-0.5 bg-black transform -translate-x-1/2 translate-y-4"></span>
          </h1>

          <div className="block md:grid grid-cols-3 justify-between pt-6 md:px-4 mt-5 gap-8">
            {images.slice(0, visibleImages).map((image, index) => (
              <div
                key={index}
                className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="border rounded-lg w-full h-full"
                />
              </div>
            ))}
          </div>

          {visibleImages < images.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreImages}
                className="px-6 py-2 bg-[#5454D4] text-white rounded-lg hover:bg-white hover:text-[#5454D4] border border-[#5454D4] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="h-[40vh] md:h-[80vh] text-center content-center mb-12"
        style={{ backgroundImage: `url(${CTA})` }}
      >
        <h1 className="text-white font-title text-[7vw] md:text-[4vw] ">
          Launch Your App Today
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Transform your business with a cutting-edge eCommerce web or mobile
          app that delivers results and exceeds customer expectations.
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

export default Ecommerce;
