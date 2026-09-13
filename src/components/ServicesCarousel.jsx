import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Add PrimeReact theme
import "primereact/resources/primereact.min.css"; // Add PrimeReact core CSS
import Website from "../assets/images/home/code.png";
import Software from "../assets/images/home/software dev.png";
import Extension from "../assets/images/home/extention.png";
import Ecommerce from "../assets/images/home/ecommerce.png";
import Mobile from "../assets/images/home/mobile dev.png";
import Graphic from "../assets/images/home/Graphic.png";
import Marketing from "../assets/images/home/Marketing.png";
import Ui from "../assets/images/home/ui ux.png";
import Seo from "../assets/images/home/seo.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const serviceCard = [
  {
    name: "Website Development",
    img: Website,
    desc: "Build stunning, high-performance websites tailored to your business needs.",
    link: "/services/website-development",
  },
  {
    name: "Digital Media Marketing",
    img: Marketing,
    desc: "Strategized campaigns to amplify your brand’s reach and engagement.",
    link: "/services/digital-marketting",
  },
  {
    name: "Graphic Designing",
    img: Graphic,
    desc: "Captivating designs that bring your brand’s vision to life.",
    link: "/services/graphic-designing",
  },

  {
    name: "UI/UX Designing",
    img: Ui,
    desc: "Intuitive and user-centric designs for exceptional digital experiences.",
    link: "/services/ui-ux-designing",
  },
  {
    name: "On/Off Page SEO",
    img: Seo,
    desc: "Boost your online visibility with expert SEO strategies for growth.",
    link: "/services/search-engine-optimization",
  },
  {
    name: "Customized Software ",
    img: Software,
    desc: "Delivering bespoke software to streamline your operations and boost efficiency.",
    link: "/services/customized-software-solutions",
  },
  {
    name: "Chrome Extension",
    img: Extension,
    desc: "Enhance your browsing experience with custom, feature-rich Chrome extensions.",
    link: "/services/chrome-extension-development",
  },
  {
    name: "Ecommerce Web/Mobile Apps",
    img: Ecommerce,
    desc: "Seamless eCommerce platforms for web and mobile to grow your online business.",
    link: "/services/ecommerce-web-and-mobile-app-development",
  },
  {
    name: "Mobile App Development",
    img: Mobile,
    desc: "Innovative mobile apps designed to engage users and drive success.",
    link: "/services/mobile-app-develpment",
  },
];

export default function CircularDemo() {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    // Simulate fetching data
    setProducts(serviceCard.slice(0, 11));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="bg-white shadow-lg border-1 surface-border border-round m-2 md:w-[280px] 2xl:w-[320px] h-[320px] md:h-[280px] py-5 px-3 flex flex-col justify-between">
        <div>
          <div className="mb-3">
            <img
              src={product.img}
              alt={product.name}
              className="w-16 md:w-10 h-16 md:h-10 shadow-2"
            />
          </div>
          <div>
            <h1 className="mb-1  leading-none font-title text-[6vw] md:text-[1.5vw] pt-2">
              {product.name}
            </h1>
            <h6 className="mt-5">{product.desc}</h6>
          </div>
        </div>
        {/* Button at the bottom of the card */}
        <div className="mt-5  flex ">
          <Link to={product.link}>
            <button className="bg-[#5454D4] text-white group px-4 py-1 rounded-3xl flex gap-4 items-center">
              <span className="text-[5vw] md:text-[1.5vw] transition-all duration-300">
                View
              </span>
              <span className="bg-white rounded-full px-1 py-1 group-hover:translate-x-2 transition-all duration-300">
                <FaArrowRightLong size={20} className="text-black" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="card relative">
      <Carousel
        value={products}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
        // Hide default arrows
        prevIcon={<span className="hidden" />}
        nextIcon={<span className="hidden" />}
      />
      {/* Custom arrow buttons at the bottom */}
      <div className="absolute bottom left-1/2 transform -translate-x-1/2 flex items-center space-x-2 ">
        <button
          className="p-2 bg-gray-200 rounded-full w-10 hover:bg-gray-300 transition-colors"
          onClick={() => {
            // Logic to go to the previous slide
            const carousel = document.querySelector(".p-carousel");
            const prevButton = carousel.querySelector(".p-carousel-prev");
            prevButton.click();
          }}
        >
          &lt; {/* Left arrow icon */}
        </button>
        <button
          className="p-2 bg-black text-white rounded-full w-10 hover:bg-gray-300 transition-colors"
          onClick={() => {
            // Logic to go to the next slide
            const carousel = document.querySelector(".p-carousel");
            const nextButton = carousel.querySelector(".p-carousel-next");
            nextButton.click();
          }}
        >
          &gt; {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
}
