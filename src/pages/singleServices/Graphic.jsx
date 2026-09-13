import { Link } from "react-router-dom";
import { useState } from "react";

import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/graphic/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/graphic/whyUs.png";

// Portfolio
import logo1 from "../../assets/images/singleServices/graphic/Portfolio/logo1.webp";
import logo2 from "../../assets/images/singleServices/graphic/Portfolio/logo2.webp";
import logo3 from "../../assets/images/singleServices/graphic/Portfolio/logo3.webp";
import logo4 from "../../assets/images/singleServices/graphic/Portfolio/logo4.webp";
import logo5 from "../../assets/images/singleServices/graphic/Portfolio/logo5.webp";
import logo6 from "../../assets/images/singleServices/graphic/Portfolio/logo6.webp";
import logo7 from "../../assets/images/singleServices/graphic/Portfolio/logo7.webp";
import logo8 from "../../assets/images/singleServices/graphic/Portfolio/logo8.jpeg";
import logo9 from "../../assets/images/singleServices/graphic/Portfolio/logo9.jpeg";
import logo10 from "../../assets/images/singleServices/graphic/Portfolio/logo10.jpeg";
import logo11 from "../../assets/images/singleServices/graphic/Portfolio/logo11.jpeg";
import logo12 from "../../assets/images/singleServices/graphic/Portfolio/logo12.webp";
import logo13 from "../../assets/images/singleServices/graphic/Portfolio/logo13.webp";
import logo14 from "../../assets/images/singleServices/graphic/Portfolio/logo14.webp";
import logo15 from "../../assets/images/singleServices/graphic/Portfolio/logo15.webp";
import logo16 from "../../assets/images/singleServices/graphic/Portfolio/logo16.webp";
import logo17 from "../../assets/images/singleServices/graphic/Portfolio/logo17.webp";
import logo18 from "../../assets/images/singleServices/graphic/Portfolio/logo18.webp";
import logo19 from "../../assets/images/singleServices/graphic/Portfolio/logo19.webp";
import logo20 from "../../assets/images/singleServices/graphic/Portfolio/logo20.webp";
import logo21 from "../../assets/images/singleServices/graphic/Portfolio/logo21.jpeg";
import logo22 from "../../assets/images/singleServices/graphic/Portfolio/logo22.jpeg";
import logo23 from "../../assets/images/singleServices/graphic/Portfolio/logo23.jpeg";
import logo24 from "../../assets/images/singleServices/graphic/Portfolio/logo24.png";
import logo25 from "../../assets/images/singleServices/graphic/Portfolio/logo25.png";
import logo26 from "../../assets/images/singleServices/graphic/Portfolio/logo26.jpeg";
import logo27 from "../../assets/images/singleServices/graphic/Portfolio/logo27.png";
import logo28 from "../../assets/images/singleServices/graphic/Portfolio/logo28.png";
import logo29 from "../../assets/images/singleServices/graphic/Portfolio/logo29.jpeg";
import logo30 from "../../assets/images/singleServices/graphic/Portfolio/logo30.jpeg";
import logo31 from "../../assets/images/singleServices/graphic/Portfolio/logo31.jpeg";
import logo32 from "../../assets/images/singleServices/graphic/Portfolio/logo32.png";
import logo33 from "../../assets/images/singleServices/graphic/Portfolio/logo33.jpeg";
import logo34 from "../../assets/images/singleServices/graphic/Portfolio/logo34.png";
import logo35 from "../../assets/images/singleServices/graphic/Portfolio/logo35.png";
import logo36 from "../../assets/images/singleServices/graphic/Portfolio/logo36.png";
import logo37 from "../../assets/images/singleServices/graphic/Portfolio/logo37.png";
import logo38 from "../../assets/images/singleServices/graphic/Portfolio/logo38.png";

const Graphic = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [
    { src: logo1, alt: "logo1" },
    { src: logo2, alt: "logo2" },
    { src: logo3, alt: "logo3" },
    { src: logo4, alt: "logo4" },
    { src: logo5, alt: "logo5" },
    { src: logo6, alt: "logo6" },
    { src: logo7, alt: "logo7" },
    { src: logo8, alt: "logo8" },
    { src: logo9, alt: "logo9" },
    { src: logo10, alt: "logo10" },
    { src: logo11, alt: "logo11" },
    { src: logo12, alt: "logo12" },
    { src: logo13, alt: "logo13" },
    { src: logo14, alt: "logo14" },
    { src: logo15, alt: "logo15" },
    { src: logo16, alt: "logo16" },
    { src: logo17, alt: "logo17" },
    { src: logo18, alt: "logo18" },
    { src: logo19, alt: "logo19" },
    { src: logo20, alt: "logo20" },
    { src: logo21, alt: "logo21" },
    { src: logo22, alt: "logo22" },
    { src: logo23, alt: "logo23" },
    { src: logo24, alt: "logo24" },
    { src: logo25, alt: "logo25" },
    { src: logo26, alt: "logo26" },
    { src: logo27, alt: "logo27" },
    { src: logo28, alt: "logo28" },
    { src: logo29, alt: "logo29" },
    { src: logo30, alt: "logo30" },
    { src: logo31, alt: "logo31" },
    { src: logo32, alt: "logo32" },
    { src: logo33, alt: "logo33" },
    { src: logo34, alt: "logo34" },
    { src: logo35, alt: "logo35" },
    { src: logo36, alt: "logo36" },
    { src: logo37, alt: "logo37" },
    { src: logo38, alt: "logo38" },
  ];
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };
  return (
    <>
      {/* Hero */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body">
            Graphic Design
          </p>
          <h1 className="font-title text-[7.5vw] md:text-[4vw] leading-none md:pr-12">
            Build Your{" "}
            <span className="text-[#5454D4]">Digital Foundation</span> with
            Expert Graphic Designs
          </h1>
          <p className="font-body md:pr-24">
            Build a solid digital foundation with SR Innovations expert graphic
            design services. We craft visually striking designs that communicate
            your brand&apos;s message clearly and effectively. Let us bring your
            ideas to life with creativity that leaves a lasting impression.
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
            At Cloudrika Technologies, we leverage cutting-edge technologies to
            ensure superior performance and innovation. Our solutions are
            designed to optimize efficiency, scalability, and user experience.
            Trust us to elevate your business with the latest advancements in
            technology.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] px-12  ">
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
            Why Choose Our{" "}
            <span className="text-[#5454D4]">Graphic Design </span> , Services?
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Choose Cloudrika Technologies for graphic design services that blend
            creativity with strategy. Our team creates impactful, visually
            appealing designs that strengthen your brand identity and engage
            your audience. Let us deliver designs that make a statement and
            drive success.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Creative Excellence:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We deliver visually appealing, unique designs that align with your
              brand identity.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Strategic Focus:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our designs are tailored to enhance your brand’s message and
              engage your target audience.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Tailored Solutions:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We offer customized graphic design services that meet your
              specific business needs.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Experienced Team:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our expert designers use the latest tools and techniques to
              produce high-quality results.
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
            Our Graphics
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
          Create Lasting Impressions
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Make an impact with expert graphic design services. Our creative
          designs communicate your brand message clearly. Let’s create designs
          that leave a lasting impression.
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

export default Graphic;
