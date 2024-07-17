import html from "../assets/html-black.svg";
import css from "../assets/css-black.svg";
import js from "../assets/js-black.svg";
import react from "../assets/react-black.svg";
import tailwind from "../assets/tailwind-black.svg";
import git from "../assets/git-black.svg";
import node from "../assets/node-black.svg";
import express from "../assets/express-black.svg";
import mongodb from "../assets/mongodb-black.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const iconData = [
    {
      id: 1,
      img: html,
      name: "HTML5",
    },
    {
      id: 2,
      img: css,
      name: "CSS3",
    },
    {
      id: 3,
      img: js,
      name: "Javascript",
    },
    {
      id: 4,
      img: react,
      name: "React JS",
    },
    {
      id: 5,
      img: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 6,
      img: git,
      name: "GitHub",
    },
    {
      id: 7,
      img: node,
      name: "Node JS",
    },
    {
      id: 8,
      img: express,
      name: "Express JS",
    },
    {
      id: 9,
      img: mongodb,
      name: "Mongo DB",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div id="About" className="about flex flex-col py-40 lg:py-20 md:mb-28">
        <div className="h-full mb-28 flex flex-col justify-center  items-center text-white">
          <h1
            data-aos="fade-right"
            className="text-[48px] font-semibold mb-5 leading-normal uppercase text-teal-600 flex flex-col justify-center items-center"
          >
            <div>
              About <span className="text-black opacity-50">Me</span>
            </div>
            <span className="h-2 w-10 rounded-full bg-black opacity-50"></span>
          </h1>

          <p
            data-aos="fade-up"
            className="sm:w-[500px] text-center font-medium"
          >
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className=" grid text-center md:grid-cols-2 px-20 gap-28 ">
          <div
            data-aos="fade-left"
            className="left-side justify-center md:text-start text-white font-normal flex flex-col gap-10 text-lg"
          >
            <span className="font-semibold pt-0 text-2xl text-black opacity-70 leading-loose">
              Get to Know me!
            </span>
            <p data-aos="fade-up">
              I'm a{" "}
              <strong className="text-black opacity-60">
                Full Stack Developer
              </strong>{" "}
              building and managing Frontend adn Backend of the Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the
              <strong className="text-black opacity-60">Projects</strong>{" "}
              section.
            </p>
            <p data-aos="fade-up">
              I also like sharing my knowledge related to the stuff that I have
              learned in Web Development so it can help other people of the Dev
              Community.
            </p>
            <p data-aos="fade-up">
              I'm open to <strong className="text-black opacity-60">Job</strong>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to contact me.
            </p>

            <div className="mt-8">
              <button className="neno-button shadow-xl hover:shadow-teal-800/50 text-white border-2 hover:bg-teal-700 bg-teal-900 border-teal-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>

          <div data-aos="fade-left" className="right-side">
            <div
              id="Services"
              className="services flex flex-col justify-center md:items-start"
            >
              <h1 className="text-2xl font-semibold leading-normal mb-8">
                <span className="text-black opacity-70">My Skils</span>
              </h1>

              <div className="grid 2xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-around gap-x-12 gap-y-8 text-center opacity-65">
                {iconData.map((data) => (
                  <h2
                    key={data.id}
                    data-aos="fade-up"
                    className="flex flex-col text-[24px] items-center justify-center font-semibold"
                  >
                    <img className="dev-icon" src={data.img} alt="" />
                    {data.name}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
