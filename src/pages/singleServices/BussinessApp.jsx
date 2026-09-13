import { Link } from "react-router-dom";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/mobile/Hero.png";
import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/web/WhyOurServies.png";
import Google from "../../assets/images/Google.png";
import TrustPilot from "../../assets/images/Trustpilot.png";
import Yelp from "../../assets/images/Yelp.png";

const BussinessApp = () => {
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
      <div className="w-[100%] bg-[#F8F8FF] md:flex px-4 md:px-10 py-6 ">
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
            We leverage the latest technologies and frameworks to ensure your
            website is modern, fast, and future-proof. From front-end to
            back-end, we use tools like HTML5, CSS3, JavaScript, React, Angular,
            Node.js, and more.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] px-12  ">
          <img src={tech1} alt="" />
        </div>
      </div>

      {/* Choose our Service */}
      <section className="bg-[#F8F8FF] py-12 ">
        <div className="text-center">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            Choose Our Service
          </p>
          <h1 className="text-[6vw] md:text-[3.5vw] font-title md:px-96 leading-none md:pt-6">
            <span className="text-[#5454D4]">Customized Solutions</span> ,
            Maximum Efficiency
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Choose Cloudrika Technologies for video animation services that bring
            your ideas to life with creativity and precision. Our team crafts
            visually stunning animations that enhance engagement and clearly
            communicate your message. Let us help you stand out and connect with
            your audience through compelling storytelling.
          </p>
          <div className="md:flex px-8 md:px-[30vw] gap-8 md:py-6 ">
            <img src={Google} alt="" />
            <img src={TrustPilot} alt="" />
            <img src={Yelp} alt="" />
          </div>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Creative Storytelling:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] md:py-5">
              We bring your ideas to life with engaging, visually impactful
              animations.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Tailored Solutions:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] md:py-5">
              Our video animations are customized to match your brand’s voice
              and message.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Enhanced Engagement:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] md:py-5">
              We create content that captivates audiences and drives
              interaction.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              High-Quality Production:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] md:py-5">
              Our animations are crafted with attention to detail, ensuring
              exceptional quality.
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

export default BussinessApp;
