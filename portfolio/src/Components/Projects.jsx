import img_1 from "../assets/food-site.png";
import img_2 from "../assets/crypto.png";
import img_3 from "../assets/books.png";
import img_4 from "../assets/coffee.png";
import img_5 from "../assets/shop.png";
import smile from "../assets/smile-w.gif";
import github from "../assets/github.gif";
import link from "../assets/link1.svg";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="projects  py-40 lg:py-20   flex flex-col items-center justify-center mb-40"
    >
      <div
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-6 leading-normal uppercase text-black flex flex-col items-center justify-center"
      >
        <span className="opacity-60 ">Projects</span>
        <span className="h-2 w-10 rounded-full bg-black opacity-60"></span>
      </div>

      <p
        data-aos="fade-right"
        className="text-xl font-normal mb-20 lowercase text-white"
      >
        Here you will find some of my projects
      </p>

      {/* Card */}

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {/* first card */}
        <div
          data-aos="fade-right"
          className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700 hover:scale-105"
        >
          <div className=" relative">
            <img
              className=" h-80 w-96 object-fill  group-hover:scale-110 duration-500 group-hover:duration-600"
              src={img_1}
              alt=""
            />

            <div className="absolute top-0 w-full h-full  bg-black/70 flex justify-center items-center">
              <h3 className="text-4xl font-normal group-hover:hidden duration-600">
                Hover me
              </h3>
              <img
                className="group-hover:hidden duration-600 w-28 -ml-5"
                src={smile}
                alt=""
              />
            </div>
          </div>

          <div className="absolute backdrop-blur-sm bg-black/50 -bottom-44 w-96 h-32 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div className="flex gap-3 text-lime-400 font-bold text-xs">
              <span className="">REACT JS</span>
              <span className="">NODE JS</span>
              <span className="">EXPRESS JS</span>
              <span className="">MONGODB</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-3xl">Food Site</span>
              <a
                className="w-10 h-10 ml-10"
                href="https://foodsite-coih.onrender.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={link} alt="" />
              </a>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm w-72">
                Food order site with add to cart and payment gateway
                functionality.
              </p>
              <a
                className="w-9 h-9 mr-1 "
                href="https://github.com/PAAiiN/FoodSite"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* first card end */}

        {/* first card */}
        <div
          data-aos="fade-right"
          className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700 hover:scale-105"
        >
          <div className=" relative">
            <img
              className=" h-80 w-96 object-fill  group-hover:scale-110 duration-500 group-hover:duration-600"
              src={img_2}
              alt=""
            />

            <div className="absolute top-0 w-full h-full  bg-black/70 flex justify-center items-center">
              <h3 className="text-4xl font-normal group-hover:hidden duration-600">
                Hover me
              </h3>
              <img
                className="group-hover:hidden duration-600 w-28 -ml-5"
                src={smile}
                alt=""
              />
            </div>
          </div>

          <div className="absolute backdrop-blur-sm bg-black/50 -bottom-44 w-96 h-32 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div className="flex gap-3 text-lime-400 font-bold text-xs">
              <span className="">REACT JS</span>
              <span className="">TAILWIND</span>
              <span className="">NODE JS</span>
              <span className="">EXPRESS JS</span>
              <span className="">MONGODB</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">
                Crypto Currency Converter
              </span>
              <a
                className="w-10 h-10 ml-10"
                href="https://crypto-currency-converter-3du8.onrender.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={link} alt="" />
              </a>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm w-72">
                Crypto currency converter using CoinGecko API
              </p>
              <a
                className="w-9 h-9 mr-1 "
                href="https://github.com/PAAiiN/Crypto-Currency-Converter"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* first card end */}

        {/* first card */}
        <div
          data-aos="fade-right"
          className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700 hover:scale-105"
        >
          <div className=" relative">
            <img
              className=" h-80 w-96 object-fill  group-hover:scale-110 duration-500 group-hover:duration-600"
              src={img_4}
              alt=""
            />

            <div className="absolute top-0 w-full h-full  bg-black/70 flex justify-center items-center">
              <h3 className="text-4xl font-normal group-hover:hidden duration-600">
                Hover me
              </h3>
              <img
                className="group-hover:hidden duration-600 w-28 -ml-5"
                src={smile}
                alt=""
              />
            </div>
          </div>

          <div className="absolute backdrop-blur-sm bg-black/50 -bottom-44 w-96 h-32 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div className="flex gap-3 text-lime-400 font-bold text-xs">
              <span className="">REACT JS</span>
              <span className="">TAILWIND</span>
              <span className="">ANIMATION</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-3xl">Coffee-Cafe</span>
              <a
                className="w-10 h-10 ml-10"
                href="https://coffee-cafe.onrender.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={link} alt="" />
              </a>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm w-72">
                Coffee-Cafe a static single page site build with ReactJS and
                aos-animation library.
              </p>
              <a
                className="w-9 h-9 mr-1 "
                href="https://github.com/PAAiiN/Coffee-Cafe/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* first card end */}

        {/* first card */}
        <div
          data-aos="fade-right"
          className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700 hover:scale-105"
        >
          <div className=" relative">
            <img
              className=" h-80 w-96 object-fill  group-hover:scale-110 duration-500 group-hover:duration-600"
              src={img_3}
              alt=""
            />

            <div className="absolute top-0 w-full h-full  bg-black/70 flex justify-center items-center">
              <h3 className="text-4xl font-normal group-hover:hidden duration-600">
                Hover me
              </h3>
              <img
                className="group-hover:hidden duration-600 w-28 -ml-5"
                src={smile}
                alt=""
              />
            </div>
          </div>

          <div className="absolute backdrop-blur-sm bg-black/50 -bottom-44 w-96 h-32 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div className="flex gap-3 text-lime-400 font-bold text-xs">
              <span className="">REACT JS</span>
              <span className="">TAILWIND</span>
              <span className="">NODE JS</span>
              <span className="">EXPRESS JS</span>
              <span className="">MONGODB</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-3xl">bookStore App</span>
              <a
                className="w-10 h-10 ml-10"
                href="https://bookstoreapp-1-eqml.onrender.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={link} alt="" />
              </a>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm w-72">
                book store dummy with signup and login functionality.
              </p>
              <a
                className="w-9 h-9 mr-1 "
                href="https://github.com/PAAiiN/bookStoreApp"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* first card end */}

        {/* first card */}
        <div
          data-aos="fade-right"
          className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-96 rounded-2xl hover:duration-700 hover:scale-105"
        >
          <div className=" relative">
            <img
              className=" h-80 w-96 object-fill  group-hover:scale-110 duration-500 group-hover:duration-600"
              src={img_5}
              alt=""
            />

            <div className="absolute top-0 w-full h-full  bg-black/70 flex justify-center items-center">
              <h3 className="text-4xl font-normal group-hover:hidden duration-600">
                Hover me
              </h3>
              <img
                className="group-hover:hidden duration-600 w-28 -ml-5"
                src={smile}
                alt=""
              />
            </div>
          </div>

          <div className="absolute backdrop-blur-sm bg-black/50 -bottom-44 w-96 h-32 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <div className="flex gap-3 text-lime-400 font-bold text-xs">
              <span className="">REACT JS</span>
              <span className="">TAILWIND</span>
              <span className="">ANIMATION</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-3xl">Shopsy</span>
              <a
                className="w-10 h-10 ml-10"
                href="https://shopsy-4l3a.onrender.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={link} alt="" />
              </a>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm w-72">
                shopsy a ecommerce static single page site build with ReactJS and
                aos-animation library.
              </p>
              <a
                className="w-9 h-9 mr-1 "
                href="https://github.com/PAAiiN/shopsy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* first card end */}
      </div>
    </div>
  );
};

export default Projects;
