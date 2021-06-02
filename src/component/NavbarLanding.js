import { useEffect } from 'react';
import gsap from "gsap";

const NavbarLanding = () => {
    useEffect(() => {
        gsap.from("nav", {
            duration: 1,
            y: '-100%',
            ease: 'bounce'
        });
    }, []);

    return (
        <nav className="fixed w-screen py-5 bg-blue-500 md:px-16 px-5 text-white shadow-md">
            <div className="flex justify-between items-center">
                <div>
                    <i className="fas fa-code text-2xl fa-fw"></i>
                    <a href="/#" className="ml-2 sm:text-xl text-md font-medium">Dashboard</a>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mx-2 md:mx-5 sm:text-base text-sm font-medium hover:text-gray-100"><a
                            href="#data-sekilas">Data Sekilas</a>
                        </li>
                        <li className="mx-2 md:mx-5 sm:text-base text-sm font-medium hover:text-gray-100"><a
                            href="#about-us">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLanding;