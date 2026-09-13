import { Link } from "react-router-dom";
import hero from "../assets/images/home/hero.png";
import elipse from "../assets/images/home/Ellipse.png";
import rectangle from "../assets/images/home/rectangle.png";
import CircularDemo from "../components/ServicesCarousel";
import SR from "../assets/images/home/SR-Innovations.mp4";
import Steps from "../components/Stepper";
import Google from "../assets/images/home/Frame 13.png";
import TrustPilot from "../assets/images/home/Frame 14.png";
import { FaArrowRightLong } from "react-icons/fa6";
import CTA from "../assets/images/home/CTA.png";
import ReviewCarousel from "../components/ReviewCarousel";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <section className="flex flex-col-reverse md:flex-row w-[100%] bg-white h-auto   pb-6 md:pb-12 overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h1
            className="text-[6vw] px-6 md:px-16  font-titleFont text-left text-black font-extrabold md:text-[3vw] 
          pt-32 md:pt-16 2xl:pt-32 "
          >
            We Are Best <span className="text-[#5454D4]">Marketing Agency</span>{" "}
            In Your Region
          </h1>
          <p className="px-6 md:px-16 pt-3 md:pt-5 2xl:text-[1.3vw] font-bodyFont">
            At Cloudrika Technologies, we help business tackle their unique
            challenges with efficiency and creativity.Our technical expertise
            and innovative approach enable us to build custom web and mobile
            apps designed for high growth.
          </p>
          <div className="flex gap-0 md:gap-4 px-4 md:px-16 pt-2 md:pt-0">
            <Link to="/contact" className="mt-4">
              <button className="bg-[#5454D4] text-white group px-3 md:px-3 py-1 rounded-3xl flex gap-4">
                <span className="text-[4.5vw] md:text-[1.5vw] transition-all duration-300 ">
                  Get a Quote
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>

            <Link to="/about">
              <div className="px-2 md:px-0 ">
                <button className="flex bg-[#1F1F1F] text-[4vw] md:text-[1.5vw] text-white rounded-2xl px-6 py-2 md:py-1 mt-4 hover:bg-white hover:text-[#5454D4] border border-[#5454D4]  ">
                  Learn More{" "}
                </button>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:pl-12  ">
            <img src={Google} className="h-24 md:h-32 w-48 md:w-64" alt="" />
            <img
              src={TrustPilot}
              className="h-24 md:h-32 w-48 md:w-64   "
              alt=""
            />
          </div>
        </div>

        <div
          className="md:w-[50%] mt-20 md:mt-12 2xl:mt-48 2xl:pl-16 "
          data-aos="fade-left"
        >
          <img
            className="px-4 md:px-0 mt-[-12vw] md:mt-0 "
            src={elipse}
            alt=""
          />
          <img
            height={400}
            width={400}
            className="ml-8 md:ml-20 mt-[-70vw] md:mt-[-20vw] h-72 w-72 md:h-96 md:w-96 "
            src={hero}
            alt=""
          />
          <img
            className="ml-52 md:ml-96 mt-[-60vw] md:mt-[-25vw] h-40 w-40 md:h-48 md:w-48"
            src={rectangle}
            alt=""
          />
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="w-[100%] md:flex pt-6 md:pt-0 ">
          <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-12">
            <p className="text-[#5454D4]">Our Services</p>
            <h1 className="text-[8vw] md:text-[4vw] font-title md:pr-12 ">
              Bridging <span className="text-[#5454D4]">Technology</span> and
              Business
            </h1>
          </div>
          <div className="w-[100%] md:w-[50%] md:pt-16 px-4 md:px-16">
            <p>
              At Cloudrika Technologies, we bridge technology and business with
              innovative solutions tailored to your needs. Our expertise drives
              efficiency, growth, and success in an ever-evolving market.
              Partner with us to turn challenges into opportunities.
            </p>
          </div>
        </div>
        {/* Services Carousel */}
        <div className="px-4 md:px-8">
          <CircularDemo />
        </div>
      </section>

      {/* Who we Are */}
      {/* <section className="pt-32">
        <p className="text-[#5454D4] text-center">Who We Are</p>
        <h1 className="text-center text-[8vw] md:text-[3vw] font-title md:px-80">
          Driving Your Success{" "}
          <span className="text-[#5454D4] ">Through Innovative</span> Solutions
        </h1>
        <div className="flex justify-center ">
          <video
            controls
            autoPlay
            muted
            controlsList="nodownload"
            className="rounded h-[250px] md:h-[600px]"
          >
            <source src={SR} type="video/mp4" />
          </video>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="md:flex w-[100%] py-20">
        <div className="w-[100%] md:w-[50%] px-4 md:px-12">
          <p className="text-[#5454D4]">Why Choose Us</p>
          <h1 className="font-title text-[8vw] md:text-[3vw] leading-none pt-4 ">
            Reliable{" "}
            <span className="text-[#5454D4]">Service And Measurable</span>{" "}
            Success
          </h1>
          <p className="pt-4">
            {" "}
            At Cloudrika Technologies, we combine expertise, innovation, and
            dedication to deliver exceptional results. Our client-focused
            approach ensures solutions that meet your unique needs. Partner with
            us for reliable service and measurable success.
          </p>
        </div>

        <div className="w-[100%] md:w-[50%] px-2 md:px-12">
          <Steps />
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="md:px-12">
          <ReviewCarousel />
        </div>
      </section>

      {/* What's Stopping You */}
      <section className="my-4 md:my-16 py-12 bg-black">
        <div className="pl-[28vw] md:pl-[44vw] py-4 md:py-2">
          <img src={CTA} alt="" />
        </div>
        <h1 className="text-white font-title text-[8vw] md:text-[3vw] text-center">
          What’s stopping you?
        </h1>
        <p className="text-white font-body md:px-64 text-center md:pb-6">
          Cloudrika Technologies builds transformative Websites, ensuring
          ahead-of-the-competition features and real value for users throughout
          concept, deployment, and beyond.
        </p>
        <div className="pl-[28vw] md:pl-[43vw] pt-4 md:pt-0 ">
          <Link to="/contact">
            <button className="bg-[#5454D4] text-white group  px-4 md:px-5 py-1 md:py-2 rounded-3xl flex gap-4">
              <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                Let&apos;s Go{""}
              </span>
              <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                <FaArrowRightLong size={20} className="text-black " />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
