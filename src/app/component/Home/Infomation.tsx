'use server'

import Image from "next/image";
import Link from "next/link";
import FbIcon from "../Icon/FbIcon";
import GithubIcon from "../Icon/GithubIcon";
import LinkedIcon from "../Icon/LinkedIcon";
import HireMeBtn from "../BtnCts/HireMeBtn";

function Infomation() {
    return (
        <div className="container mx-auto">
            <div className="w-90% mx-auto py-20 flex gap-10 items-center flex-col lg:flex-row">
                <div className="basis-2/5 h-full">
                    <Image src='/cv_cutted.jpg' loading="lazy" alt="Trần Lê Nhứt Tân" className="w-full h-full object-cover rounded-md" width={750} height={750} />
                </div>
                <div className="basis-3/5 flex flex-col gap-5">
                    <h3 className="uppercase text-lg text-gray-700 tracking-wider">My Biography</h3>
                    <h2 className="text-5xl roboto-bold opacity-85">Web Developer</h2>
                    <p className="text-lg tracking-wide text-gray-500">I&apos;m frontend developer, my major frameworks are ReactJS, NextJS, VueJS, ..., Contact me and we will discuss your projects!</p>
                    <div className="grid xs:grid-cols-2 mt-5 gap-3">
                        <div className="flex flex-col text-lg gap-2">
                            <p>
                                <strong className="opacity-85">Name: </strong>
                                <span className="text-gray-500">Trần Lê Nhứt Tân</span>
                            </p>
                            <p>
                                <strong className="opacity-85">Email: </strong>
                                <Link className="text-gray-500" href='mailto: nhuttantranle@gmail.com'>nhuttantranle@gmail.com</Link>
                            </p>
                        </div>
                        <div className="flex flex-col text-lg gap-2">
                            <p>
                                <strong className="opacity-85">From: </strong>
                                <span className="text-gray-500">Ho Chi Minh City, Vietnam</span>
                            </p>
                            <p>
                                <strong className="opacity-85">Phone: </strong>
                                <Link className="text-gray-500" href='tel: 0942870419'>0942870419</Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className="roboto-bold text-xl tracking-wide opacity-90">Follow me on</p>
                        <div className="flex items-center gap-3">
                            <Link href='https://www.facebook.com/tan.tranlenhut/' className="w-max h-max flex">
                                <FbIcon classProp="w-3 h-3 -translate-y-0.5 hover:text-[#1773EA] transition-all durantion-200 hover:-translate-y-1.5" />
                            </Link>
                            <Link href='https://github.com/NhutTanFrontend' className="w-max h-max flex">
                                <GithubIcon classProp="w-5 h-5 hover:-translate-y-1" />
                            </Link>
                            <Link href='https://www.linkedin.com/in/l%C3%AA-nh%E1%BB%A9t-t%C3%A2n-tr%E1%BA%A7n-b57525246/' className="w-max h-max flex">
                                <LinkedIcon classProp="w-5 h-5 hover:-translate-y-1 hover:text-[#007AB5] transition-all durantion-200" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex">
                        <HireMeBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infomation;