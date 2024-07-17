import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";


const App = () => {
  const [loader, setLoder] = useState(false);
  useEffect(() => {
    setLoder(true);
    setTimeout(() => {
      setLoder(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="bg-gradient-to-r from-black to-teal-800 h-[100vh] flex justify-center items-center">
          {" "}
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0D9488"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="app overflow-hidden">
          <Navbar />
          <Banner />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
