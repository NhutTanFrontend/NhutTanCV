'use server'

import MysuccessWorkItem from "./MysuccessWorkItem";

function MySuccessWork() {

    const dataWeb = [
        {
            id: 0,
            image: '/worksuccess.jpg',
            linkWeb: 'https://hkvinalogistics.com/home',
            title: 'HK Vina Logistics',
            detail: 'A logistics company website. Click to see website&apos;s detaile'
        },
        {
            id: 1,
            image: '/worksuccss.jpg',
            linkWeb: 'https://wandave.vercel.app/',
            title: 'Grocery Store',
            detail: 'A grocery store website. Click to see website&apos;s detaile'
        },
    ]

    return (
        <div className="container mx-auto">
            <div className="w-90% mx-auto py-20">
                <h2 className="text-center text-4xl roboto-bold capitalize">My Success Work</h2>
                <div className="grid grid-cols-3 mt-10 gap-5">
                    {dataWeb?.map(item => (<MysuccessWorkItem data={item} key={item.id} />))}
                </div>
            </div>
        </div>
    );
}

export default MySuccessWork;