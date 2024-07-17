import arrow from "../assets/anim2.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypewriterEffectSmooth } from "../Components/ui/typewriter-effect";

const Banner = () => {
  const words = [
    {
      text: "I'm a ",
      className: "text-xl sm:text-2xl md:text-4xl",
    },
    {
      text: "Full Stack Developer.",
      className:
        "dark:text-teal-600 md:text-teal-600 md:dark:text-teal-600 sm:text-4xl  md:text-5xl text-2xl",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="banner ">
        <div className=" p-5 sm:py-20 pt-52 sm:pt-52 flex flex-col justify-center lg:items-center items-center text-white">
          <h1 className="uppercase text-center sm:text-start text-4xl font-extrabold sm:text-6xl md:text-7xl  lg:text-8xl">
            hey, i'm <br />{" "}
            <span className="md:text-teal-600 text-teal-600">
              Arun Kumar{" "}
              <span className=" text-teal-600 sm:text-white">Yadav</span>
            </span>
          </h1>

          <h1 className="">
            <TypewriterEffectSmooth className="" words={words} />
          </h1>

          <div className="lg:w-1/2 sm:w-1/2">
            <p className="font-medium text-sm lg:text-lg leading-relaxed  text-center">
              I am a motivated and versatile individual, always eager to take on
              new challenge With a passion for learning
              <br />I am dedicated to delivering high-quality results With a
              positive attitude and a growth mindset, I am ready to make a
              meaningful contribution and achieve great things.
            </p>
          </div>

          <div className="mt-36 w-20 invisible sm:visible">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
