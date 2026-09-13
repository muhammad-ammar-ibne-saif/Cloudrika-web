import { Link } from "react-router-dom";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/mobile/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/mobile/whyUs.png";
const Mobile = () => {
  return (
    <>
      {/* Hero */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 2xl:pt-20 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body">
            Mobile App Development
          </p>
          <h1 className="font-title text-[8vw] md:text-[4vw] leading-none md:pr-24">
            Innovative{" "}
            <span className="text-[#5454D4]">Mobile App Development</span>{" "}
            Services
          </h1>
          <p className="font-body md:pr-48">
            Build dynamic, user-friendly mobile applications that meet your
            business goals. We deliver apps with seamless performance, intuitive
            design, and exceptional functionality to engage your audience.
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
        <div className="w-[100%] md:w-[50%] px-4 pb-12 mt-4 md:mt-[-2vw] 2xl:pl-12 ">
          <img
            className="h-[250px] md:h-[450px] w-[350px] md:w-[500px]"
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
            Modern Tech{" "}
            <span className="text-[#5454D4]">for Mobile Success </span> ,
          </h1>
          <p className="font-body">
            We use Flutter, React Native, Swift, Kotlin, and Java to create
            high-performing, reliable mobile apps for diverse needs and
            industries.
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
            <span className="text-[#5454D4]">Custom Mobile Apps </span>
            Built Smart
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Our mobile app solutions are tailored to enhance user experience,
            drive engagement, and meet your unique requirements.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Custom UI/UX Design:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Create visually stunning and user-friendly interfaces tailored to
              your brand. We prioritize intuitive navigation and impactful
              design to enhance user satisfaction and retention.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Cross-Platform Development:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Build apps compatible with iOS and Android platforms using
              cutting-edge technology. Enjoy efficient development that provides
              a seamless experience across multiple devices.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Advanced Integrations:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Integrate APIs, third-party tools, and features like payment
              gateways and GPS. We ensure smooth app functionality for an
              enhanced user experience.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Optimized Performance:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-2">
              Deliver fast-loading, crash-free apps that handle high traffic and
              deliver excellent performance. We optimize every aspect to ensure
              reliability and scalability.
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

export default Mobile;
