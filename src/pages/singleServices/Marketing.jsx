import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/marketting/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/marketting/whyUs.png";

// Portfolio
import DMM1 from "../../assets/images/singleServices/marketting/Portfolio/BBU.jpg";
import DMM2 from "../../assets/images/singleServices/marketting/Portfolio/Cambria.jpg";
import DMM3 from "../../assets/images/singleServices/marketting/Portfolio/Synergy.jpg";
import DMM4 from "../../assets/images/singleServices/marketting/Portfolio/TM Decor.jpg";
import DMM5 from "../../assets/images/singleServices/marketting/Portfolio/Voodo.jpg";
import DMM6 from "../../assets/images/singleServices/marketting/Portfolio/White TIme.jpg";
import DMM7 from "../../assets/images/singleServices/marketting/Portfolio/Cb.jpg";
import DMM8 from "../../assets/images/singleServices/marketting/Portfolio/Chamber.jpg";
import DMM9 from "../../assets/images/singleServices/marketting/Portfolio/Charnwood.jpg";
import DMM10 from "../../assets/images/singleServices/marketting/Portfolio/Cordelia.jpg";
import DMM11 from "../../assets/images/singleServices/marketting/Portfolio/Frasers.jpg";
import DMM12 from "../../assets/images/singleServices/marketting/Portfolio/Greenlers.jpg";
import DMM13 from "../../assets/images/singleServices/marketting/Portfolio/Jet House.jpg";
import DMM14 from "../../assets/images/singleServices/marketting/Portfolio/Justin.jpg";
import DMM15 from "../../assets/images/singleServices/marketting/Portfolio/Rehaq.jpg";
import DMM16 from "../../assets/images/singleServices/marketting/Portfolio/Retrofit.jpg";
import DMM17 from "../../assets/images/singleServices/marketting/Portfolio/rewired.jpg";
import DMM18 from "../../assets/images/singleServices/marketting/Portfolio/Sideline.jpg";

const Marketing = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [
    { src: DMM1, alt: "DMM1" },
    { src: DMM2, alt: "DMM2" },
    { src: DMM3, alt: "DMM3" },
    { src: DMM4, alt: "DMM4" },
    { src: DMM5, alt: "DMM5" },
    { src: DMM6, alt: "DMM6" },
    { src: DMM7, alt: "DMM7" },
    { src: DMM8, alt: "DMM8" },
    { src: DMM9, alt: "DMM9" },
    { src: DMM10, alt: "DMM10" },
    { src: DMM11, alt: "DMM11" },
    { src: DMM12, alt: "DMM12" },
    { src: DMM13, alt: "DMM13" },
    { src: DMM14, alt: "DMM14" },
    { src: DMM15, alt: "DMM15" },
    { src: DMM16, alt: "DMM16" },
    { src: DMM17, alt: "DMM17" },
    { src: DMM18, alt: "DMM18" },
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
            Digital Marketing
          </p>
          <h1 className="font-title text-[7.5vw] md:text-[4vw] leading-none md:pr-12">
            Build Your{" "}
            <span className="text-[#5454D4]">Digital Foundation </span> with
            Expert Digital Marketing
          </h1>
          <p className="font-body md:pr-24">
            Build a strong digital foundation with Cloudrika Technologies expert
            digital marketing services. We craft strategies that increase
            visibility, drive engagement, and boost conversions. Let us help you
            grow your brand and reach your target audience effectively in the
            digital landscape.
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
            <span className="text-[#5454D4]">Digital Marketing</span> ,
            Services?
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Choose Cloudrika Technologies for digital marketing services that drive
            results. Our tailored strategies focus on increasing brand
            awareness, boosting engagement, and maximizing ROI. Let us help you
            navigate the digital world and achieve your business goals with
            precision and expertise.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Customized Strategies:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We tailor digital marketing solutions to your unique business
              needs and goals.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Brand Visibility:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our campaigns increase your brand’s online presence and reach your
              target audience effectively.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Engagement Focus:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We drive meaningful interactions to enhance customer loyalty and
              conversion rates.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Data-Driven Approach:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our strategies are backed by analytics, ensuring measurable
              results and optimized performance.
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
            Our Marketing Portfolio
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
          Grow With Us
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Expand your reach and grow your business with expert digital marketing
          services. We create strategies that engage and convert. Let’s take
          your business to the next level.
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

export default Marketing;
