import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/web/Hero.png";
import Wordpress from "../../assets/images/singleServices/web/Wordpress.png";
import Wix from "../../assets/images/singleServices/web/Wix.png";
import CMS from "../../assets/images/singleServices/web/CMS.png";
// tech we use
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
// import wixTech from "../../assets/images/singleServices/web/wixTech.png";
// import React from "../../assets/images/singleServices/web/reactTech.png";
// import Next from "../../assets/images/singleServices/web/nextTech.png";
// import TS from "../../assets/images/singleServices/web/tsTech.png";
// import JS from "../../assets/images/singleServices/web/jsTech.png";
// import Tailwind from "../../assets/images/singleServices/web/tailwindTech.png";
// CTA
import CTA from "../../assets/images/CTA.png";
// Why us
import WhyUs from "../../assets/images/singleServices/web/whyUs.png";

// Portfolio
import blackburn from "../../assets/images/singleServices/web/Blackburn.jpg";
import Blueberry from "../../assets/images/singleServices/web/Blueberry.jpeg";
import Justin from "../../assets/images/singleServices/web/Justin.jpg";
import Tommy from "../../assets/images/singleServices/web/Tommy henly.jpg";
import JetHouse from "../../assets/images/singleServices/web/Jet House.jpg";
import WhiteTime from "../../assets/images/singleServices/web/White TIme.jpg";
import CJRose from "../../assets/images/singleServices/web/CJ ROse.jpg";
import Charnwood from "../../assets/images/singleServices/web/Charndwood.jpg";
import { useState } from "react";

const Web = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [
    { src: blackburn, alt: "Blackburn" },
    { src: Blueberry, alt: "Blueberry" },
    { src: Justin, alt: "Justin" },
    { src: JetHouse, alt: "JetHouse" },
    { src: Tommy, alt: "Tommy" },
    { src: WhiteTime, alt: "WhiteTime" },
    { src: CJRose, alt: "CJRose" },
    { src: Charnwood, alt: "Charnwood" },
    // Add more images as needed
  ];
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };
  return (
    <>
      {/* Hero */}
      <section
        className="h-[30vh] md:h-[120vh] 2xl:h-[160vh] md:mt-[-100px] md:ml-[90px]"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-[200px] px-4 md:ml-[-5vw] ">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            Web Development
          </p>
          <h1 className="font-title text-[8vw] md:text-[4vw] leading-none md:pr-[60vw]">
            Build Your{" "}
            <span className="text-[#5454D4]">Digital Foundation</span> with
            Expert Web Development
          </h1>
          <p className="md:pr-[60vw]">
            Cloudrika Technologies helps you build a strong digital foundation with
            expert web development services. From responsive designs to powerful
            functionality, we create websites that drive business growth. Let us
            bring your vision to life with precision and expertise.
          </p>
        </div>
        {/* <div className="pt-4 md:ml-[-4vw] ">
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
        </div> */}
      </section>

      {/* tech stack */}
      {/* <div className="w-[100%] pt-[300px] md:pt-0 bg-[#F8F8FF] md:flex px-4 md:px-10 py-6 ">
        <div className="w-[100%] md:w-[50%] md:px-10 py-6 ">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            {" "}
            Technologies We Use
          </p>
          <h1 className="text-[7vw] md:text-[4vw] font-title leading-none ">
            <span className="text-[#5454D4]">Cutting-Edge Technologies </span>{" "}
            for Superior Performance
          </h1>
          <p className="font-body">
            We leverage the latest technologies and frameworks to ensure your
            website is modern, fast, and future-proof. From front-end to
            back-end, we use tools like JavaScript, React js, Next js, Node.js,
            and more.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] md:px-12 grid grid-cols-2 md:grid-cols-3  ">
          <img className="w-24 md:w-16 h-24 md:h-16" src={tech1} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={wixTech} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={React} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={Next} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={TS} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={JS} alt="" />
          <img className="w-24 md:w-16 h-24 md:h-16" src={Tailwind} alt="" />
        </div>
      </div> */}

      {/* single tech */}
      <section className="pb-12 pt-[300px] md:pt-0 ">
        {/* Wordpress */}
        <div className="md:flex w-[100%] pb-12 md:pb-0 ">
          <div className="w-[100%] md:w-[60%] py-12">
            <img src={Wordpress} alt="" />
          </div>
          <div className="w-[100%] md:w-[40%] px-4 md:px-0 md:pr-16 pt-0 md:pt-48">
            <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
              WordPress Development
            </p>
            <h1 className="font-title text-[8vw] md:text-[4vw] leading-none">
              Build Stunning <span className="text-[#5454D4]">WordPress</span>{" "}
              Websites
            </h1>
            <p className="font-body">
              Elevate your online presence with custom WordPress solutions. We
              design dynamic, responsive websites with seamless functionality
              and tailored features to match your brand.
            </p>
            <div className="pt-4">
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
        </div>

        {/* Wix*/}
        <div className="flex flex-col-reverse md:flex-row bg-[#F8F8FF] w-[100%] pb-12 md:pb-0 ">
          <div className="w-[100%] md:w-[50%] px-4 md:px-6  pt-6 md:pt-48">
            <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
              Wix Development
            </p>
            <h1 className="font-title text-[8vw] md:text-[4vw] leading-none">
              Create Engaging <span className="text-[#5454D4]">Wix</span>{" "}
              Websites
            </h1>
            <p className="font-body">
              We design and develop eye-catching, user-friendly Wix websites.
              With intuitive tools and beautiful layouts, your site will stand
              out from the competition.
            </p>
            <div className="pt-4">
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
          <div className="w-[100%] md:w-[50%] py-6 md:py-12 px-6 md:px-12 2xl:pl-20 ">
            <img className="md:h-[500px] md:w-[500px]" src={Wix} alt="" />
          </div>
        </div>

        {/* CMS */}
        <div className="md:flex w-[100%] pb-12 md:pb-0 ">
          <div className="w-[100%] md:w-[60%] py-12 px-12 md:px-24 ">
            <img src={CMS} alt="" />
          </div>
          <div className="w-[100%] md:w-[40%] px-4 md:px-0 md:pr-16 pt-0 md:pt-48">
            <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
              CMS Development
            </p>
            <h1 className="font-title text-[8vw] md:text-[4vw] leading-none">
              Master <span className="text-[#5454D4]">All CMS</span> Platforms
            </h1>
            <p className="font-body">
              From Webflow to One.com, we specialize in creating custom websites
              across all CMS platforms. Tailored designs meet seamless
              functionality for every project.
            </p>
            <div className="pt-4">
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
        </div>
      </section>

      {/* Portfolio */}
      <section className="pb-12">
        <div className="px-6">
          <h1 className="md:pt-16  text-[8vw] leading-none  md:text-[4vw] font-title relative inline-block">
            Our Web Portfolio
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

          {/* <div className="block md:grid grid-cols-3 justify-between pt-6 md:px-6 mt-5 gap-8 ">
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={blackburn}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={Blueberry}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={Justin}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={JetHouse}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={Tommy}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={WhiteTime}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
            <div className="relative border rounded-lg w-[90vw] h-[70vw] md:w-[30vw] md:h-[25vw] mb-10">
              <img
                src={CJRose}
                alt=""
                className="border rounded-lg w-full h-full"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Choose our Service */}
      <section className="bg-[#F8F8FF] py-12 ">
        <div className="text-center">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            Choose Our Service
          </p>
          <h1 className="text-[8vw] md:text-[3.5vw] font-title md:px-96 leading-none md:pt-6">
            <span className="text-[#5454D4]">Customized Solutions</span> ,
            Maximum Efficiency
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Choose Cloudrika Technologies for video animation services that bring your
            ideas to life with creativity and precision. Our team crafts
            visually stunning animations that enhance engagement and clearly
            communicate your message. Let us help you stand out and connect with
            your audience through compelling storytelling.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Feature Prioritization
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              At Cloudrika Technologies, we ensure the website development process is
              perfectly aligned with your business goals, maximizing its
              potential for success.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Prototyping and Wireframing
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Once the wireframes are approved, our website development team
              creates interactive prototypes that simulate real user
              interactions. This helps us gather valuable feedback and make
              necessary refinements.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Quality Testing
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Our comprehensive testing process combines automated and manual
              methods to ensure your website excels in functionality,
              compatibility, performance, and security.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Deployment
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              In this final phase, we launch your website on the chosen hosting
              platform, ensuring a seamless transition from development to a
              live, fully functional site.
            </p>
          </div>
          <div className="w-[100%] md:w-[50%] pt-12 md:pt-0 ">
            <img src={WhyUs} alt="" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="h-[40vh] md:h-[80vh] text-center content-center mb-12"
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

export default Web;
