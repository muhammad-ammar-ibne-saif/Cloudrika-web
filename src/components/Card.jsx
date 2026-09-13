import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

// Service Images
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

export default function ServiceCard() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:pl-12 2xl:px-32 pt-20">
        <Card sx={{ maxWidth: 350 }} className="my-6  ">
          <CardContent>
            <img className="h-[7vh]" src={Website} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-3">
              WEB DEVELOPMENT
            </h1>
            <Typography
              variant="body2"
              color="text.secondary"
              className="pr-3 pt-3"
            >
              At Cloudrika Technologies, we craft custom web solutions that are both
              functional and visually stunning.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Website">
              <div className="flex group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Graphic} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              GRAPHIC DESIGN
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              Our expert designers create engaging visuals that elevate your
              brand identity and captivate audiences.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Marketing} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              Digital Media Marketing
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              We develop targeted marketing strategies to enhance your online
              presence and maximize your reach.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Extension} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              Chrome Extension Development
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              From productivity tools to automation, we develop custom Chrome
              extensions tailored to your needs.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Software} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              Customized Software Solutions
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              Our team builds powerful software solutions that streamline
              business processes and enhance efficiency.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Ecommerce} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              E-Commerce Solutions
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              We create scalable e-commerce platforms that provide seamless
              shopping experiences for customers.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Mobile} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              Mobile App Development
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              We develop innovative mobile applications that deliver high
              performance and user engagement.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Ui} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              UI/UX Designing
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              We craft intuitive and visually appealing UI/UX designs that
              enhance user experiences.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 350 }} className="my-6">
          <CardContent>
            <img className="h-[7vh]" src={Seo} alt="" />
            <h1 className="font-titleFont font-extrabold text-[4vw] md:text-[1.5vw] pt-2">
              SEO
            </h1>
            <Typography variant="body2" color="text.secondary" className="pt-3">
              Our SEO strategies improve your search rankings, increase traffic,
              and boost online visibility.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Graphic">
              <div className="flex  group gap-2 md:gap-0 px-2 ">
                <button className="text-[#5454D4] font-semibold">
                  Read More
                </button>
                <FaRegArrowAltCircleRight className="text-[#5454D4] text-[6vw] md:text-[2vw] pt-1 group-hover:translate-x-2 " />
              </div>
            </Link>
          </CardActions>
        </Card>
      </section>
    </>
  );
}
