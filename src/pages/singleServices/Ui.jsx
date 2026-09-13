import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/ui/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/ui/whyUs.png";

// Portfolio
import blackburn from "../../assets/images/singleServices/web/Blackburn.jpg";

const Ui = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [{ src: blackburn, alt: "Blackburn" }];

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };
  return (
    <>
      {/* Hero */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body py-2">
            UI/UX Designing
          </p>
          <h1 className="font-title text-[8vw] md:text-[4vw] leading-none md:pr-24 py-2">
            Build Your{" "}
            <span className="text-[#5454D4]">Digital Foundation</span> with
            Expert UI UX Design
          </h1>
          <p className="font-body md:pr-48">
            Build a strong digital foundation with Cloudrika Technologies expert
            UI/UX design services. We create user-friendly, visually appealing
            interfaces that enhance engagement and drive business growth. Let us
            design seamless experiences that set your brand apart in the digital
            world.
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
            className="h-[320px] md:h-[450px] w-[320px] md:w-[500px]"
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
            <span className="text-[#5454D4]">Cutting-Edge Technologies </span> ,
            for Superior Performance
          </h1>
          <p className="font-body">
            At Cloudrika Technologies, we harness cutting-edge technologies to
            deliver solutions that ensure superior performance. Our innovative
            approach optimizes efficiency, scalability, and user experience.
            Trust us to elevate your business with the latest tech advancements.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] px-12  ">
          <img src={tech1} alt="" />
        </div>
      </div> */}

      {/* Choose our Service */}
      <section className="bg-[#F8F8FF] py-12 ">
        <div className="text-center">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] py-2 ">
            Choose Our Service
          </p>
          <h1 className="text-[8vw] md:text-[3.5vw] font-title md:px-96 leading-none py-2 md:pt-6">
            Why Choose Our
            <span className="text-[#5454D4]">UI UX Design</span> , Services?
          </h1>
          <p className="font-body md:px-64 px-4 text-left py-2">
            Choose Cloudrika Technologies for UI/UX design services that focus on
            creating intuitive, user-centered experiences. Our expert team
            combines research, creativity, and testing to ensure designs that
            drive engagement and satisfaction. Let us transform your digital
            presence with seamless, impactful design solutions.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12  px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-4 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              User Research & Analysis:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 ">
              At Cloudrika Technologies, we start by understanding your target
              audience and business goals. Through detailed user research, we
              ensure the design aligns with user expectations and drives
              meaningful engagement.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Wireframing & Prototyping:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4">
              Our design team creates wireframes and interactive prototypes that
              visualize the user journey. This process allows us to gather early
              feedback and refine the design for optimal user experience before
              the final implementation.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              User Testing & Feedback:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4">
              We conduct thorough user testing to evaluate how users interact
              with your design. By analyzing real user feedback, we make
              necessary adjustments, ensuring a seamless and intuitive
              experience across all devices.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Final Design & Implementation:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4">
              In the final phase, we deliver high-quality UI/UX designs ready
              for development. Our attention to detail and commitment to
              functionality ensures that your design is not only visually
              appealing but also user-friendly and effective.
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
            Our Designing Portfolio
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
          Transform Your Brand
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

export default Ui;
