// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Testimonial
import T1 from "../assets/images/reviews/testimonial 1.png";
import T2 from "../assets/images/reviews/Cordelia.webp";
import T3 from "../assets/images/reviews/Marlene Martins.png";
import T4 from "../assets/images/reviews/testimonial 2.png";
import T5 from "../assets/images/reviews/Testimonial 5.png";

const ReviewCarousel = () => {
  const testimonials = [
    {
      text: "Working with Cloudrika Technologies has significantly boosted our digital marketing performance. Their team implemented strategies that increased our online visibility and drove more traffic to our website. We're now seeing a steady increase in leads. Their dedication and creativity are truly commendable. I highly recommend their services for anyone serious about enhancing their online presence.",
      imgSrc: `${T1}`,
      name: "John D.",
      title: "Digital Marketing",
    },
    {
      text: "I’ve been using this company for a few months now and I’m very impressed with their services. The team is knowledgeable, dedicated, and loyal. They provide personalized solutions that meet my specific needs, making sure my content reaches the right audience effectively. Their attention to detail and commitment to excellence are outstanding. ",
      imgSrc: `${T2}`,
      name: "Cordelia",
      title: "Digital Marketting ",
    },
    {
      text: "Our experience with Cloudrika Technologies for website development has been outstanding. They delivered a sleek, responsive, and highly functional website that exceeded our expectations. Their attention to detail and ability to understand our vision made the entire process smooth and efficient. I highly recommend their web development services for any business looking to enhance its online presence.",
      imgSrc: `${T3}`,
      name: "Marlene Martins",
      title: "Website Development",
    },
    {
      text: "We partnered with Cloudrika Technologies for our website development needs, and the results have been fantastic. Their expertise helped us create a user-friendly and visually appealing site that attracts more visitors. Their proactive approach and creative solutions have been instrumental in generating new leads for our business. I highly recommend their website development services to any company looking to grow online.",
      imgSrc: `${T4}`,
      name: "Michael R.",
      title: "Website Development",
    },
    {
      text: "Cloudrika Technologies completely revamped our digital marketing strategy, and the impact has been incredible. Their team's innovative approach and in-depth knowledge have led to a significant increase in our online visibility and website traffic. We've seen a noticeable uptick in leads and conversions. I can't recommend their digital marketing services enough!",
      imgSrc: `${T5}`,
      name: "Sarah ",
      title: "Digital Marketing",
    },
  ];

  return (
    <>
      <section
        className="w-full h-auto pb-20 overflow-x-hidden"
        data-aos="zoom-in-up"
      >
        <div className="w-[100%]  overflow-hidden ">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-[140vw] h-[44vh] md:h-auto md:max-w-[90%]"
          >
            {/* Slider */}
            <div>
              <div>
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white rounded-lg px-12  md:p-6 "
                  >
                    <p className="text-[#8d8b8b] text-[3vw] md:text-[1vw] lg:text-[1vw] h-[25vh] md:h-[35vh] w-[70vw] md:w-[25vw] ">
                      {testimonial.text}
                    </p>
                    <div className="flex pt-2 2xl:pt-8">
                      <img
                        src={testimonial.imgSrc}
                        alt={testimonial.name}
                        className="rounded-full w-14 2xl:w-24 mt-2"
                      />
                      <div>
                        <h1 className="text-blue-900 text-[4vw] md:text-[1.4vw] lg:text-[1.4vw] font-bold ml-3 lg:ml-10 mt-3">
                          {testimonial.name}
                        </h1>
                        <p className="text-blue-700 text-[3vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] font-semibold ml-3 lg:ml-10">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
        {/* <hr className="border-[0.2vw] border-slate-400 mx-24 md:mx-60" /> */}
      </section>
    </>
  );
};

export default ReviewCarousel;
