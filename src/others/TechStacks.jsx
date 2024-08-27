import React from 'react';
import { RiNextjsFill, RiReactjsLine, RiVuejsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";

const TechStacks = () => {
    return (
        <section className='py-10'>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-full">
                {/* VueJS */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-teal-600 text-gray-500'>
                    <RiVuejsFill size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        VueJS
                    </p>
                </div>

                {/* ReactJS */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-sky-600 text-gray-500'>
                    <RiReactjsLine size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        ReactJS
                    </p>
                </div>

                {/* Jquery */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-blue-600 text-gray-500'>
                    <SiJquery size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        Jquery
                    </p>
                </div>

                {/* Javascript */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-yellow-400 text-gray-500'>
                    <IoLogoJavascript size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        Javascript
                    </p>
                </div>

                {/* HTML */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-orange-600 text-gray-500'>
                    <TfiHtml5 size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        HTML
                    </p>
                </div>

                {/* CSS */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-sky-600 text-gray-500'>
                    <FaCss3Alt size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        CSS
                    </p>
                </div>

                {/* Tailwind */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-sky-400 text-gray-500'>
                    <RiTailwindCssFill size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        Tailwind
                    </p>
                </div>

                {/* Bootstrap */}
                <div className='bg-slate-800 border border-slate-700 shadow-lg rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition duration-1000 ease-in-out hover:text-violet-600 text-gray-500'>
                    <FaBootstrap size={62} />
                    <p className='text-gray-500 text-sm font-semibold text-center mt-2'>
                        Bootstrap
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechStacks;
