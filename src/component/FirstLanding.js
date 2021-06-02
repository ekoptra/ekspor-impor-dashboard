import bgImage from '../img/image.png';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";

const FirstLanding = ({ setMenu }) => {
    useEffect(() => {
        document.querySelector('.penjelasan').classList.remove('opacity-0')
        gsap.from(".penjelasan", {
            duration: 1,
            y: 50,
            delay: 0.3,
            opacity: 0,
            ease: 'power1'
        });
    }, []);

    return (
        <div className="container-first md:px-16 px-5" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="grid grid-cols-12">
                <div className="lg:col-span-5 md:col-span-8 col-span-12">
                    <h5 className="md:text-5xl  text-3xl text-green-500 font-medium" data-aos="zoom-in" data-aos-delay="200">
                        Dashboard Ekspor-Impor
                </h5>
                    <p className="text-gray-600 text-base mt-8 mb-10 penjelasan opacity-0">
                        Ekspor dan impor antarnegara akan membantu dalam memenuhi kebutuhan masyarakat setiap negara. Salah
                    satu dampak dari kegiatan ekspor dan impor yaitu membuat stabil perekonomian suatu negara. <b>
                            Bagaimanakah perkembangan ekspor dan impor Indonesia tahun 2012-2019 menurut data Badan Pusat
                        Statistik?</b>
                    </p>
                    <Link data-aos="fade-up" data-aos-delay="1000" to="/dashboard" onClick={() => setMenu('utama')}
                        className="p-3 px-5 rounded-2xl transition bg-green-500 hover:bg-green-600 duration-150 text-white font-bold btn-dashboard">Cek
                    Dashboard</Link>
                </div>
            </div>
        </div>
    );
}

export default FirstLanding;