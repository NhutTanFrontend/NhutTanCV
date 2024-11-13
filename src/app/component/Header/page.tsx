'use server'

import Link from "next/link";

function Header() {
    return (
        <div className="bg-background-color fixed top-0 left-0 w-screen z-50">
            <div className="container mx-auto">
                <section className="w-90% mx-auto flex justify-end gap-8 text-white py-5">
                    <Link href='/'><span className="text-lg roboto-medium">Home</span></Link>
                    <Link href='/'><span className="text-lg roboto-medium">About</span></Link>
                    <Link href='/'><span className="text-lg roboto-medium">Services</span></Link>
                    <Link href='/'><span className="text-lg roboto-medium">Contact</span></Link>
                </section>
            </div>
        </div>
    );
}

export default Header;