'use server'

import Link from 'next/link';

interface HireMeBtnProp{
    banner?: boolean
}

function HireMeBtn(props: HireMeBtnProp) {

    const {banner} = props

    return (
        <Link href='/' className={`bg-background-btn hover:bg-transparent transition-all duration-300 border border-background-btn rounded-full text-lg py-3 px-8 flex justify-center items-center text-white ${banner ? 'hover:text-white' : 'hover:text-background-btn'}`}>Hire me</Link>
    );
}

export default HireMeBtn;