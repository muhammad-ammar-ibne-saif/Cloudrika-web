import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/custom/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/custom/whyUs.png";

// Portfolio
import CRM from "../../assets/images/singleServices/custom/CRM.jpg";
import Analytics from "../../assets/images/singleServices/custom/Anaylatics.jpg";
import EmailAutomation from "../../assets/images/singleServices/custom/Email automation.jpg";
import FbLeads from "../../assets/images/singleServices/custom/Facebook Leads.jpg";

const CustomCode = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = [
    { src: CRM, alt: "CRM" },
    { src: Analytics, alt: "Analytics" },
    { src: EmailAutomation, alt: "EmailAutomation" },
    { src: FbLeads, alt: "FbLeads" },
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
            Customize Software Solutions
          </p>
          <h1 className="font-title text-[7.5vw] md:text-[4vw] leading-none md:pr-24">
            Tailored <span className="text-[#5454D4]">Software Solutions</span>{" "}
            for Your Business
          </h1>
          <p className="font-body md:pr-48">
            Empower your business with custom software tailored to your unique
            requirements. We design innovative, scalable, and reliable solutions
            to streamline operations and enhance efficiency.
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
            <span className="text-[#5454D4]">Customized Solutions</span> ,
            Maximum Efficiency
          </h1>
          <p className="font-body">
            Our team employs JavaScript, Python, React, and Next Js to deliver
            robust and reliable custom software solutions.
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
            <span className="text-[#5454D4]">Customized Solutions</span> ,
            Maximum Efficiency
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            We develop personalized software that aligns with your goals and
            optimizes your workflows.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Requirement Analysis:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We collaborate with you to understand your business challenges and
              create a comprehensive plan. This ensures our solution meets your
              specific goals.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Scalable Design:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Develop software that grows with your business, adapting
              seamlessly to new demands and requirements over time.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              User-Centric Interface:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Deliver intuitive and visually appealing interfaces to ensure ease
              of use and productivity. We prioritize usability at every stage of
              development.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Integration Capability:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Integrate with existing tools and systems for a smooth transition.
              Our solutions ensure seamless connectivity across your business
              ecosystem.
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
            Our Custom Solutions
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
          Streamline Your Workflows Today
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Let us craft custom software to drive efficiency and innovation in
          your business processes.
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

export default CustomCode;
