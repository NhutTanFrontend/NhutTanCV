'use server'

import Link from "next/link";
import HireMeBtn from "../BtnCts/HireMeBtn";

function Banner() {
    return (
        <section className="w-screen h-screen mx-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(/banner1.jpg)` }}>
            <div className="w-full h-full bg-background-color bg-opacity-90 text-white">
                <div className="container h-full mx-auto">
                    <div className="w-90% h-full mx-auto flex flex-col items-center justify-center">
                        <h1 className="roboto-medium text-2xl xs:text-3xl">Hi, I&apos;m Trần Lê Nhứt Tân</h1>
                        <h2 className="roboto-bold text-[60px] xs:text-[80px] sm:text-[100px] text-outline text-center md:text-left">Web Developer</h2>
                        <p className="text-base text-center sm:text-lg">I am currently a web developer at Buso company and a freelancer</p>
                        <div className="flex xs:flex-row flex-col gap-5 mt-5 w-full justify-center">
                            <HireMeBtn banner />
                            <Link href='/' className="rounded-full text-lg py-3 px-8 flex justify-center items-center bg-gray-300 bg-opacity-15 border hover:bg-white transition-all duration-300 hover:text-black border-white">My Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;