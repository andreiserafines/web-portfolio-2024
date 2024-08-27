import React from "react";
import TechStacks from "../others/TechStacks";

const Skills = () => {
    return (
        <section id='Skills' className="relative mt-10 md:py-10 reveal">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="px-6">

                    <div className="jetbrains inline-flex items-center text-gray-400 text-xl font-semibold border border-slate-700 rounded-full px-4 py-1 bg-slate-900 shadow-md">
                        Tech
                        <span className="text-sky-200">
                            Skills
                        </span>
                    </div>

                    <div className="mt-2">
                        <TechStacks />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
