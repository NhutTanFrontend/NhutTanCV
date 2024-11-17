'use server'

function Contact() {
    return (
        <div className="container mx-auto">
            <div className="w-90% mx-auto py-14">
                <h2 className="text-4xl roboto-bold text-center capitalize">Let&apos;s contact me</h2>
                <div className="grid sm:grid-cols-2 sm:w-max w-full gap-5 mx-auto mt-6">
                    <input type="text" className="lg:w-96 md:w-80 sm:w-64 min-w-full block p-3 focus:outline-none border border-gray-300 rounded-lg" placeholder="Name" />
                    <input type="email" className="lg:w-96 md:w-80 sm:w-64 min-w-full block p-3 focus:outline-none border border-gray-300 rounded-lg" placeholder="Email" />
                </div>
                <div className="sm:w-max w-full mx-auto mt-6">
                    <input type="number" placeholder="Phone Number" className="lg:w-[49.3rem] md:w-[41.5rem] sm:w-[33.35rem] w-full block p-3 focus:outline-none border border-gray-300 rounded-lg" />
                </div>
                <div className="sm:w-max w-full  mx-auto mt-6">
                    <textarea cols={30} rows={5} placeholder="Message" className="lg:w-[49.3rem] md:w-[41.5rem] sm:w-[33.35rem] w-full block p-3 focus:outline-none border border-gray-300 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default Contact;