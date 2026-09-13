import { Link } from "react-router-dom";
import Hero from "../assets/images/about/hero.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Tick from "../assets/images/about/Frame.png";
import OurCompany from "../assets/images/about/OurCompany.png";
import CircularDemo from "../components/ServicesCarousel";
import GetStarted from "../assets/images/about/GetStarted.png";

const About = () => {
  return (
    <>
      {/* hero */}
      <div
        className="h-[60vh] md:h-[80vh] text-center content-center"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "500px",
        }}
      >
        <p className="text-[#5454D4] font-body text-[4.5vw] md:text-[1.5vw]">
          About Us
        </p>
        <h1 className="text-[7vw] md:text-[4vw] font-title md:px-[25vw] leading-none">
          We Are Best <span className="text-[#5454D4]">IT Solution</span>{" "}
          Company In Your Region
        </h1>
        <p className="font-body  md:px-80">
          Cloudrika Technologies is the leading IT solutions company in your region,
          offering cutting-edge technology and tailored strategies. Our
          expertise ensures seamless operations and unmatched service quality.
          Choose us for innovation that drives success.
        </p>
        <div className="pl-[28vw] md:pl-[43vw] pt-2 md:pt-4">
          <Link to="/contact">
            <button className="bg-[#5454D4] text-white group px-3 md:px-5 py-1 md:py-2 rounded-3xl flex gap-4">
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

      {/* time bar */}
      <div className="px-3 md:px-24 pt-0 pb-8 md:py-12">
        <div className="shadow-2xl h-32 md:h-40 flex w-[100%]">
          <div className="w-[25%] text-center">
            <h1 className="text-[#5454D4] text-[6vw] md:text-[3vw] font-title pt-8">
              02+
            </h1>
            <p className="text-[3vw] md:text-[1.3vw]">Years of Experience</p>
          </div>
          <span className="h-[90%] mt-2 border border-black"></span>
          <div className="w-[25%] text-center">
            <h1 className="text-[#5454D4] text-[6vw] md:text-[3vw] font-title pt-8">
              100+
            </h1>
            <p className="text-[3vw] md:text-[1.3vw] px-3 ">
              Satisfied Clients
            </p>
          </div>
          <span className="h-[90%] mt-2 border border-black"></span>
          <div className="w-[25%] text-center">
            <h1 className="text-[#5454D4] text-[6vw] md:text-[3vw] font-title pt-8">
              100+
            </h1>
            <p className="text-[3vw] md:text-[1.3vw] px-3">Projects</p>
          </div>
          <span className="h-[90%] mt-2 border border-black"></span>
          <div className="w-[25%] text-center">
            <h1 className="text-[#5454D4] text-[6vw] md:text-[3vw] font-title pt-8">
              10+
            </h1>
            <p className="text-[3vw] md:text-[1.3vw] px-3">Team Members</p>
          </div>
        </div>
      </div>

      {/* Our Company */}
      <div className="w-[100%] md:flex ">
        <div className="w-[100%] md:w-[50%] px-8 md:px-20 py-6 ">
          <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
            {" "}
            Our Company
          </p>
          <h1 className="text-[8vw] md:text-[4vw] font-title leading-none pr-24">
            Why our <span className="text-[#5454D4]">company</span> is too
            popular?
          </h1>
        </div>
        <div className="w-[100%] md:w-[50%] px-8 md:px-12 ">
          <p>
            Cloudrika Technologies stands out for its commitment to delivering
            innovative, reliable, and client-focused IT solutions. Our
            dedication to excellence, cutting-edge technology, and exceptional
            customer service has earned us a reputation for trust and success.
          </p>
          <div className="pt-5">
            <div className="flex gap-3 space-y-2">
              <img src={Tick} className="h-9 my-1" alt="" />
              <p>Managed Services and Products</p>
            </div>
            <div className="flex gap-3 space-y-2">
              <img src={Tick} className="h-9 my-1" alt="" />
              <p>Flexibility and Adaptability</p>
            </div>
            <div className="flex gap-3 space-y-2">
              <img src={Tick} className="h-9 my-1" alt="" />
              <p>Competitive Advantage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <img src={OurCompany} alt="" />
      </div>

      {/* What we are Offering */}
      <section className="pb-16">
        <div className="w-[100%] md:flex ">
          <div className="w-[100%] md:w-[50%] px-4 md:px-20 ">
            <p className="text-[#5454D4] font-body text-[4vw] md:text-[1.3vw] ">
              {" "}
              WHAT WE’RE OFFERING
            </p>
            <h1 className="text-[8vw] md:text-[4vw] font-title leading-none md:pr-24">
              Dealing in all{" "}
              <span className="text-[#5454D4]">professional IT</span> services.
            </h1>
          </div>
          <div className="w-[100%] md:w-[50%] px-4 md:px-12  pt-4 md:pt-0">
            <p>
              At SR Innovations, we offer a comprehensive range of professional
              IT services tailored to meet diverse business needs. From software
              development to IT support, our expertise ensures seamless and
              efficient solutions. Trust us to power your success..
            </p>
            <div className="pt-4">
              <Link to="/services">
                <button className="bg-[#5454D4] text-white group px-4 py-1 rounded-3xl flex gap-4">
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
        <div className="px-4 md:px-8 ">
          <CircularDemo />
        </div>
      </section>

      {/* Get Started */}
      <section className="pb-12">
        <div
          className="h-[70vh] md:h-[120vh] text-center py-12 md:py-24"
          style={{
            backgroundImage: `url(${GetStarted})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-white font-title text-[8vw] md:text-[3vw]">
            Get Started Today
          </h1>
          <p className="text-white font-body md:text-[1.3vw] md:px-80">
            Unlock your business potential with our expert solutions. Let’s
            create a strategy tailored to your needs. Contact us now to get
            started.
          </p>
          <div className="pt-4 pl-[28vw] md:pl-[45vw]">
            <Link to="/contact">
              <button className="bg-[#5454D4] text-white group  px-4 py-1 rounded-3xl flex gap-4">
                <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300 ">
                  Let’s go
                </span>
                <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2">
                  <FaArrowRightLong size={20} className="text-black " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
