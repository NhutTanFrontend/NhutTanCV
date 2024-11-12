'use server'

import Code2Icon from "../Icon/Code2Icon";
import CodeIcon from "../Icon/CodeIcon";

function ServiceProvide() {
    return (
        <div className="container mx-auto bg-background-color-2">
            <div className="w-90% mx-auto py-20">
                <h2 className="text-center text-4xl opacity-85 roboto-bold capitalize">What I do for you</h2>
                <div className="grid grid-cols-2 mt-10 gap-10">
                    <div className="flex flex-col bg-white p-8 shadow-md rounded-lg gap-3">
                        <CodeIcon classProp="w-16 h-16 text-background-btn" />
                        <h3 className="text-xl roboto-bold tracking-wider opacity-90">Web Development</h3>
                        <p className="text-lg text-gray-500">Offering professional web design and development to enhance user experience and elevate your business&apos;s online presence</p>
                    </div>
                    <div className="flex flex-col bg-white p-8 shadow-md rounded-lg gap-3">
                        <Code2Icon classProp="w-16 h-16 text-background-btn" />
                        <h3 className="text-xl roboto-bold tracking-wider opacity-90">Front-end Development</h3>
                        <p className="text-lg text-gray-500">We specialize in front-end development using React, NextJS, and VueJS, delivering optimized, user-focused web interfaces for your business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceProvide;