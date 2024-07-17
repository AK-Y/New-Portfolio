import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import img from "../assets/pain.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navData = [
    {
      id: 1,
      link: "Home",
      name: "Home",
    },
    {
      id: 2,
      link: "About",
      name: "About",
    },
    {
      id: 3,
      link: "Projects",
      name: "Projects",
    },
    {
      id: 4,
      link: "Contact",
      name: "Contact",
    },
  ];
  const hamData = (
    <>
      <div className="hamburger lg:hidden z-50 block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          {navData.map((data) => (
            <Link key={data.id} spy={true} smooth={true} to={data.link}>
              <li className="my-4 py-4 border-b border-slate-950 hover:bg-transparent hover:rounded cursor-pointer">
                {data.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav>
        <div className="navbar h-10vh flex justify-between text-white lg:py-5 px-12 lg:px-28 py-4">
          <div className="left-nav flex items-center flex-1">
            <div className="img_glow flex items-center rounded-full mr-2 w-10 lg:w-12   2xl:w-15">
              <img src={img} alt="" />
            </div>
            <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-4xl  2xl:text-4xl">
              <span>A</span>
              <span>K</span>
              <span className="text-teal-600 text-4xl xl:text-5xl">Y</span>
            </div>
          </div>

          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  text-[18px]">
                {navData.map((data) => (
                  <Link key={data.id} spy={true} smooth={true} to={data.link}>
                    <li className="hover:text-teal-600 transiton  hover:scale-125 cursor-pointer duration-200 rounded-lg px-1">
                      {data.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div>{click && hamData}</div>
          <button
            className="block text-xl sm:hidden transition"
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
