'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface MysuccessWorkItemProp{
    data: {
        image: string
        linkWeb: string
        title: string
        detail: string
    }
}

function MysuccessWorkItem(props: MysuccessWorkItemProp) {

    const {data} = props

    const [isHover, setIsHover] = useState(false)

    return (
        <div className="relative w-full h-full overflow-hidden" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Image src={data.image} alt="Trần Lê Nhứt Tân" loading="lazy" width={1000} height={1000} className="w-full h-full rounded-lg" />
            <Link href={data.linkWeb} className={`absolute w-full h-full left-0 ${isHover ? 'top-0' : 'top-60'} transition-all duration-300 bg-black rounded-lg bg-opacity-55 flex flex-col items-center justify-center text-white p-5 gap-3`}>
                <h3 className="roboto-medium text-2xl">{data.title}</h3>
                <p className="text-center text-[15px]">{data.detail}</p>
            </Link>
        </div>
    );
}

export default MysuccessWorkItem;