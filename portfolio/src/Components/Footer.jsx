import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import arrow from "../assets/anim2.gif";

const Footer = () => {
  return (
    <footer className="footer relative text-white lg:px-48 px-4 py-10">
      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2   md:grid-cols-4  lg:grid-cols-4 gap-20 lg:text-start text-center">
        <div className="mb-4 md:mb-0">
          <a href="#">
            {" "}
            <h1 className="text-3xl font-semibold text-teal-600 py-2 uppercase">
              AKY
            </h1>
          </a>
          <p className="text-[16px] my-4 font-normal">
            I am a motivated and versatile individual, always eager to take on
            new challenge With a passion for learning.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-teal-600 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4 font-normal">
            <li className="my-2">Web Development</li>
            <li className="my-2">Responsive Design</li>
            <li className="my-2">Web Designer</li>
            <li className="my-2">E-Commmerce</li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-teal-600 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] font-normal my-4">
            Email: aruny602@gmail.com
          </p>
          <p className="text-[16px] font-normal my-4">Mobile: +91 8527260509</p>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-teal-600 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex justify-center md:justify-normal space-x-4">
            <a
              className="text-white hover:text-teal-600 glow rounded-full transition-all duration-150 ease-in-out"
              href=""
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-teal-600 glow rounded-full   transition-all duration-150 ease-in-out"
              href=""
            >
              <FaLinkedin />
            </a>
            <a
              className="text-white hover:text-teal-600 glow rounded-full transition-all duration-150 ease-in-out"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-teal-600 glow rounded-full transition-all duration-150 ease-in-out"
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="absolute right-5 bottom-10 rotate-180 w-20 invisible md:visible">
          <a href="#">
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
