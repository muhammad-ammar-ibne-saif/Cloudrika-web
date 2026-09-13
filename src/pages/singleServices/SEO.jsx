import { Link } from "react-router-dom";
import CTA from "../../assets/images/CTA.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../../assets/images/singleServices/seo/Hero.png";
// import tech1 from "../../assets/images/singleServices/web/techWordpress.png";
import WhyUs from "../../assets/images/singleServices/seo/whyUs.png";

const SEO = () => {
  return (
    <>
      {/* Hero */}
      <section className="w-[100%] flex flex-col-reverse md:flex-row md:pt-16 md:px-12">
        <div className="w-[100%] md:w-[50%] md:pt-6 px-4 md:px-0 ">
          <p className="text-[#5454D4] md:text-[1.3vw] font-body">SEO</p>
          <h1 className="font-title text-[7.5vw] md:text-[4vw] leading-none md:pr-24">
            Build Your{" "}
            <span className="text-[#5454D4]">Digital Foundation</span> with
            Expert SEO
          </h1>
          <p className="font-body md:pr-48">
            Build a strong digital foundation with SR Innovations expert SEO
            services. We optimize your website to enhance visibility, drive
            organic traffic, and improve search engine rankings. Let us help you
            attract more customers and achieve sustainable growth through
            effective SEO strategies.
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
            <span className="text-[#5454D4]">Cutting-Edge Technologies</span> ,
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
            Why Choose Our <span className="text-[#5454D4]">SEO </span> ,
            Services?
          </h1>
          <p className="font-body md:px-64 px-4 text-left">
            Choose Cloudrika Technologies for SEO services that boost your online
            presence and drive organic growth. Our data-driven strategies
            improve search rankings, attract targeted traffic, and enhance user
            engagement. Let us help you achieve long-term success with proven
            SEO tactics.
          </p>
        </div>

        <div className="w-[100%] md:flex py-12 px-4 md:px-12">
          <div className="w-[100%] md:w-[50%] md:pt-12 md:pr-5 ">
            <h1 className="font-title text-[7vw] md:text-[2.5vw] ">
              Targeted Growth:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We implement SEO strategies that drive qualified traffic to your
              website.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Improved Rankings:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our techniques boost your website’s search engine visibility and
              position.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Data-Driven Approach:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              We use analytics to refine strategies and maximize results.
            </p>

            <h1 className="font-title text-[7vw] md:text-[2.5vw]">
              Long-Term Success:
            </h1>
            <p className="font-body text-[4vw] md:text-[1.3vw] py-4 md:py-5">
              Our SEO services are designed for sustainable, long-term growth.
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
          Drive More Traffic
        </h1>
        <p className="text-white font-body text-[3vw] md:text-[1.5vw]  md:px-96">
          Increase visibility and attract more customers with our tailored SEO
          strategies. We help you rank higher and drive quality traffic. Let’s
          boost your online presence.
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

export default SEO;
