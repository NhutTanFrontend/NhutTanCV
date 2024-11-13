'use server'

import Link from "next/link";
import PhoneIcon from "../Icon/PhoneIcon";
import EnvelopIcon from "../Icon/EnvelopIcon";
import LocalIcon from "../Icon/LocalIcon";

function Footer() {
    return (
        <>
        <div className="bg-background-footer">
            <div className="container mx-auto">
                <div className="w-90% mx-auto py-20">
                    <h2 className="text-center text-white roboto-bold text-3xl">Trần Lê Nhứt Tân&apos;s Portfolio</h2>
                    <div className="flex mx-auto text-[#aaa] justify-center gap-3 items-center mt-8 flex-wrap">
                        <Link href='tel: 0942870419' className="flex flex-col lg:flex-row items-center justify-center tracking-wide hover:text-background-btn transition-all duration-150 gap-1.5">
                            <PhoneIcon classProp="w-6 h-6" />
                            <span>+84 942 870 419</span>
                        </Link>
                        <Link href='mailto: nhuttantranle@gmail.com' className="flex flex-col lg:flex-row items-center justify-center tracking-wide hover:text-background-btn transition-all duration-150 gap-1.5">
                            <EnvelopIcon classProp="w-6 h-6" />
                            <span>nhuttantranle@gmail.com</span>
                        </Link>
                        <p className="flex flex-col lg:flex-row items-center justify-center tracking-wide hover:text-background-btn transition-all duration-150 gap-1.5">
                            <LocalIcon classProp="w-6 h-6" />
                            <span>Nhị Bình Ward, Hóc Môn District, Hồ Chí Minh city</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <p className="text-sm text-right p-1.5 roboto-bold">Developed by <span className="text-background-btn">tranlenhuttan</span></p>
        </>
    );
}

export default Footer;