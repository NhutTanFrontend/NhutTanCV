'use server'

import Code2Icon from "../Icon/Code2Icon";
import CodeIcon from "../Icon/CodeIcon";

function ServiceProvide() {
    return (
        <div className="bg-background-color-2">
            <div className="container mx-auto">
                <div className="w-90% mx-auto py-20">
                    <h2 className="text-center text-4xl roboto-bold capitalize">What I do for you</h2>
                    <div className="grid md:grid-cols-2 mt-10 gap-10">
                        <div className="flex flex-col items-center md:items-start bg-white p-8 shadow-md hover:shadow-2xl transition-all duration-300 rounded-lg gap-3">
                            <CodeIcon classProp="w-16 h-16 text-background-btn" />
                            <h3 className="text-xl roboto-bold tracking-wider">Web Development</h3>
                            <p className="text-lg text-gray-500 text-center md:text-left">Offering professional web design and development to enhance user experience and elevate your business&apos;s online presence</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start bg-white p-8 shadow-md hover:shadow-2xl transition-all duration-300 rounded-lg gap-3">
                            <Code2Icon classProp="w-16 h-16 text-background-btn" />
                            <h3 className="text-xl roboto-bold tracking-wider">Front-end Development</h3>
                            <p className="text-lg text-gray-500 text-center md:text-left">We specialize in front-end development using React, NextJS, and VueJS, delivering optimized, user-focused web interfaces for your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceProvide;