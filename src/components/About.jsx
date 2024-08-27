import React from "react";
import ScrollRevealComponent from "./ScrollRevealComponent";
import { FaCode, FaUserGraduate } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import gradPic from '../images/gradPic.png';

const About = () => {

  return (
    <section id='about' className="relative md:py-10 mb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 flex flex-col md:flex-row justify-between items-center">
        <div className="px-6">

          {/* About Me */}
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
          <div className="space-y-8 mb-10 lg:mb-16">
            {/* Section Title */}

            {/* Content */}
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 lg:gap-10 xl:gap-0">
              {/* Left */}
              <div className="w-full hidden md:w-1/2 lg:flex justify-center md:justify-start reveal-1">
              <img
                src={gradPic}
                className="h-80 w-auto border border-slate-700 rounded-md shadow-lg wave-animation"
                alt="My Graduation Picture"
              />
              </div>

              {/* Right */}
              <div className="w-full text-center md:text-left text-white leading-snug space-y-5 reveal-2">
                <div className="jetbrains inline-flex items-center text-gray-400 text-xl font-semibold border border-slate-700 rounded-full px-4 py-1 bg-slate-900 
                shadow-md">
                  About.
                  <span className="text-sky-200">
                  me
                  </span>
                </div>

                <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
                  A Journey of Learning and Growth
                </h2>

                <p className="text-sm text-justify font-normal text-gray-400">
                  With a passion for front-end development, I am continuously honing my skills to create visually stunning and user-friendly websites. My journey in the tech world began at a young age, and it has only grown stronger over the years. I am eager to contribute my knowledge and creativity to meaningful projects that make a difference.
                </p>

                <p className="text-sm text-justify  font-normal text-gray-400">
                  With a passion for front-end development, I am continuously honing my skills to create visually stunning and user-friendly websites. My journey in the tech world began at a young age, and it has only grown stronger over the years. I am eager to contribute my knowledge and creativity to meaningful projects that make a difference.
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10 reveal-3">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaCode size={16} className='text-sky-500' />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Programmer at Philippine Navy
                <span className="bg-blue-100 text-blue-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-slate-900 dark:text-blue-300 xl:ml-3 border border-slate-600">
                  Current
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August 2023 - Present
              </time>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, doloribus autem provident ea est, expedita debitis, explicabo aperiam tenetur reprehenderit omnis quas recusandae itaque obcaecati asperiores maiores sapiente vitae voluptate?
              </p>
            </li>

            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaUserGraduate size={12} className='text-sky-500' />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Graduated on July 2023
              </time>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolore quam sint sed excepturi culpa officia molestiae suscipit, incidunt omnis.
              </p>
            </li>

            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <PiBuildingOfficeFill size={12} className='text-sky-500' />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Intern at Solitary Studios
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2023 - May 2023
              </time>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla aliquid officia magnam quod maiores!
              </p>
            </li>
          </ol>
          </ScrollRevealComponent>

        </div>
      </div>
    </section>
  );
};

export default About;
