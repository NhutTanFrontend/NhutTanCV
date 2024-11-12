import Image from "next/image";

function Skills() {

    const dataSkill = [
        {
            id: 0,
            name: 'HTML',
            image: '/HTML5logo.png'
        },
        {
            id: 1,
            name: 'CSS',
            image: '/CSS-Logo.png'
        },
        {
            id: 2,
            name: 'Javascript',
            image: '/javascript-icon.png'
        },
        {
            id: 3,
            name: 'Typescript',
            image: '/Typescript_logo.png'
        },
        {
            id: 4,
            name: 'ReactJS',
            image: '/React-icon.png'
        },
        {
            id: 5,
            name: 'NextJS',
            image: '/nextjs-icon.png'
        },
        {
            id: 6,
            name: 'VueJS',
            image: '/vuejs.png'
        },
        {
            id: 7,
            name: 'Scss',
            image: '/scsslogo.webp'
        },
        {
            id: 8,
            name: 'Github',
            image: '/github-logo.png'
        },
    ]

    return (
        <div className="container mx-auto">
            <div className="w-90% mx-auto py-14 flex flex-col gap-2">
                <h2 className="text-center roboto-medium text-lg tracking-wider uppercase text-gray-600">My skills</h2>
                <h3 className="text-center roboto-bold text-4xl tracking-wider capitalize">My Featured skills</h3>
                <div className="flex gap-5 w-full flex-wrap items-center justify-center mt-5">
                    {dataSkill?.map(item => (<Image key={item.id} src={item.image} alt={item.name} loading="lazy" width={1000} height={1000} className="w-32 h-full object-cover" />))}
                </div>
            </div>
        </div>
    );
}

export default Skills;