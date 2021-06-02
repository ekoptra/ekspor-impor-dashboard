import NavbarLanding from '../component/NavbarLanding';
import FirstLanding from '../component/FirstLanding';
import SecondLanding from '../component/SecondLanding';
import ThirdLanding from '../component/ThirdLanding';
import FourthLanding from '../component/FourthLanding';
import bgImage from '../img/image.png';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import '../css/landing-page.css';


const LandingPage = ({ setMenu }) => {
    document.title = "Ekspor-Impor Dashboard";
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = `url(${bgImage})`;
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 700
        });
    }, []);

    return (
        <>
            <NavbarLanding></NavbarLanding>
            <FirstLanding setMenu={setMenu}></FirstLanding>
            <SecondLanding setMenu={setMenu}></SecondLanding>
            <ThirdLanding></ThirdLanding>
            <FourthLanding></FourthLanding>
            <footer className=" bg-blue-500 py-3 text-center text-white">
                <small className="text-xs sm:text-sm">Copyright © 2021. Kelompok 4 - 3SD1 - Angkatan 60</small>
            </footer>
        </>
    );
}

export default LandingPage;