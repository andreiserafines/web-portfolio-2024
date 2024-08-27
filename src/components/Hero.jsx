import React from "react";
import ScrollRevealComponent from "./ScrollRevealComponent";
import heroImg from "../images/heroImg.png";
import { DiGithubBadge } from "react-icons/di";
import { RiFileDownloadFill, RiMessage3Fill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {

  return (
    <section id="overview" className="mt-20 md:mt-10 md:pt-10 relative lg:mb-10 reveal-delay-1">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left-Section */}
        <ScrollRevealComponent
            revealConfig={{
                duration: 1200,
                distance: "60px",
                easing: "ease-in-out",
                origin: "top",
                reset: false,
            }}
            revealDelays={[300, 600, 900]}
            classNames={["reveal-1", "reveal-2", "reveal-3"]}
        >
        <div className="md:w-1/2 p-6 md:p-8 text-center md:text-left reveal-1">

          <h2 className="text-white text-2xl md:text-3xl xl:text-4xl font-light mb-4 uppercase">
            Hi! I'm Andrei Portugal
          </h2>

          <h1 className="text-sky-200 text-3xl md:text-4xl xl:text-5xl font-bold mb-4 uppercase">
            Frontend Developer
          </h1>

          <p className="text-gray-400 text-base md:text-md xl:text-md leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            dapibus nisl nunc, at consequat massa elementum non.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-10">
            <button className="bg-slate-800 py-2 px-5 text-sm text-gray-400 rounded-md hover:bg-slate-700 hover:text-white transition duration-300 flex items-center gap-1 shadow-xl">
              <RiFileDownloadFill size={20} /> Download CV
            </button>

            <button className="border border-slate-700 py-2.5 px-5 text-sm text-gray-400 rounded-md hover:bg-slate-700 hover:text-white transition duration-300 flex items-center gap-1 shadow-xl">
              <RiMessage3Fill size={20} /> Let's Talk
            </button>
          </div>

          <ul className="text-neutral-400 text-sm md:text-base flex justify-center items-center md:justify-start gap-4">
            <li>
              <a
                href="https://www.facebook.com/ronaldandrei.portugal.1"
                target="_blank"
                className="hover:text-sky-200 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dreinconsiderate/"
                target="_blank"
                className="hover:text-sky-200 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ronald-andrei-portugal-serafines/"
                target="_blank"
                className="hover:text-sky-200 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/andreiserafines"
                target="_blank"
                className="hover:text-sky-200 transition duration-300"
              >
                <DiGithubBadge size={30} />
              </a>
            </li>
          </ul>
        </div>
        
       
        {/* Right-Section */}
        <div className="hidden md:w-1/2 p-6 md:p-8 mt-8 md:mt-0 md:flex justify-center relative reveal-3">
          <div className="relative">
            <div className="absolute top-0 left-0 w-80 h-80 lg:w-86 lg:h-86 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full filter blur-3xl opacity-70"></div>
            <img
              src={heroImg}
              alt="Andrei Portugal"
              className="hidden md:block relative z-10 rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
        </ScrollRevealComponent>
      </div>
    </section>
  );
};

export default Hero;
