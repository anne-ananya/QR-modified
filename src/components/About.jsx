import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
const About = () => {
    const [marginTop, setMarginTop] = useState(0);
    const [marginBottom, setMarginBottom] = useState(0);
  
    useEffect(() => {
      const screenHeight = window.innerHeight;
      const margin = screenHeight * 0.03;
      setMarginTop(margin);
      setMarginBottom(margin);
    }, []);
  return (
    <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 h-screen w-screen flex justify-center items-center">
        
      <div
        className="page-border bg-gradient-to-r from-sky-500/20 h-90vh to-indigo-500/20 border-4 border-solid border-indigo-500 m-7 p-2"
        style={{ marginTop, marginBottom }}
      >
        
        <h2 className="about-heading text-4xl font-itim text-semibold outline-none resize-none font-bold text-blue-500 text-center py-4">
        <Link
          to="/"
          className="relative flex items-center justify-center order-2 w-24 h-24 p-5 duration-500 rounded-full lg:order-1 hover:bg-orange-100 absolute top-4 left-4"
        >
          <img src="/images/home-icon.png" alt="" />
        </Link>
          About
        </h2>
        <p className="about-description font-itim text-semibold outline-none resize-none text-black text-center text-lg">
          A brief description of what this project does and who it's for. This project is created by Ananya De.
          The project highlights my React skills. This is a QR code generator and scanner.
        </p>
        <div className="about-links font-itim text-semibold outline-none resize-none  text-black text-center py-4">
          <p>
            To know more about the project click the Hashnode link below:
            <br />
            <a href="https://ananyawritescodes.hashnode.dev/creating-a-react-qr-generator">Hashnode Article</a>
            <a href="HASHNODE_LINK" className="flex justify-center">
              <img src="https://img.icons8.com/arcade/48/document.png" alt="Hashnode" className="about-icon" />
            </a>
          </p>
          <p className="text-center">
            To view the code behind the project click below:
            <br />
            <a href="https://github.com/anne-ananya/QR-modified">GitHub Repository</a>
            <div className="flex justify-center">
              <img width="30" height="30" src="https://img.icons8.com/arcade/64/code.png" alt="code" />
            </div>
          </p>
        </div>
        <div className="about-footer flex justify-center items-center py-4">
  <div className="about-icons flex items-center">
   
  </div>
  <div className="about-footer flex flex-col justify-center items-center py-4">
  <div className="about-icons flex items-center">
    <p className="text-blue font-itim text-semibold outline-none resize-none flex items-center">
      Know about me
      <img src="https://img.icons8.com/arcade/64/for-you.png" alt="For You" className="w-10 h-10" />
      <span className="ml-2">more:</span>
    </p>
  </div>
  <div className="flex space-x-4 mt-4">
    <a href="https://github.com/anne-ananya">
      <img src="https://img.icons8.com/clouds/100/github.png" alt="GitHub" className="w-10 h-10" />
    </a>
    <a href="https://www.linkedin.com/in/ananya-de-5552a4205">
      <img src="https://img.icons8.com/clouds/100/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
    </a>
  </div>
  <img
    src="https://img.icons8.com/hands/100/experimental-gift-hands.png"
    alt="Experimental Gift Hands"
    className="about-image mt-4"
  />
</div>
</div>
</div>
    </div>
  );
};

export default About;
