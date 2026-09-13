import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsApp";
import ContactForm from "./components/ContactForm";

// Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// Single Services
import BussinessApp from "./pages/singleServices/BussinessApp";
import Chrome from "./pages/singleServices/Chrome";
import CustomCode from "./pages/singleServices/CustomCode";
import Ecommerce from "./pages/singleServices/Ecommerce";
import Graphic from "./pages/singleServices/Graphic";
import Marketing from "./pages/singleServices/Marketing";
import Mobile from "./pages/singleServices/Mobile";
import SEO from "./pages/singleServices/SEO";
import Ui from "./pages/singleServices/Ui";
import VideoAnimation from "./pages/singleServices/VideoAnimation";
import Web from "./pages/singleServices/Web";
import Map from "./components/Map";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-right" />
        <Navbar />
      </div>
      <div className="pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RouteIndex />
              </>
            }
          />
          {/* Main Pages  */}
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />

          {/* Single Service Pages  */}
          <Route
            path="/services/bussiness-app-development"
            element={<BussinessApp />}
          />
          <Route
            path="/services/chrome-extension-development"
            element={<Chrome />}
          />
          <Route
            path="/services/customized-software-solutions"
            element={<CustomCode />}
          />
          <Route
            path="/services/ecommerce-web-and-mobile-app-development"
            element={<Ecommerce />}
          />
          <Route path="/services/graphic-designing" element={<Graphic />} />
          <Route path="/services/digital-marketting" element={<Marketing />} />
          <Route path="/services/mobile-app-develpment" element={<Mobile />} />
          <Route
            path="/services/search-engine-optimization"
            element={<SEO />}
          />
          <Route path="/services/ui-ux-designing" element={<Ui />} />
          <Route
            path="/services/video-animation"
            element={<VideoAnimation />}
          />
          <Route path="/services/website-development" element={<Web />} />
        </Routes>
      </div>
      <ContactForm />
      <Map />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
function RouteIndex() {
  return <Home />;
}
export default App;
