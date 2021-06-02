import CardDashboard from './CardDashboard';

const SecondLanding = ({ setMenu }) => {
    return (
        <div className="container-second lg:px-16 px-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-4 xl:gap-16 md:gap-7 md:mt-24 -mt-24 justify-center">
                <CardDashboard tipe="impor" judul="Dashboard Impor" link="/dashboard/impor" setMenu={setMenu} menu="impor" />
                <CardDashboard tipe="utama" judul="Dashboard Utama" link="/dashboard" setMenu={setMenu} menu="utama" />
                <CardDashboard tipe="ekspor" judul="Dashboard Ekspor" link="/dashboard/ekspor" setMenu={setMenu} menu="ekspor" />
            </div>

            <p className="md:mt-16 mt-8 md:text-2xl text-xl text-gray-700 text-center md:px-10 quotes" data-aos="fade-up">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim exercitationem laborum, aperiam hic libero
                esse voluptatum voluptates? Fugit vitae facilis, magni dolorem veniam alias expedita quos a fugiat totam
                hic.
            </p>
            <hr className="my-12 border-green-300 w-1/3 bg-green-300 mx-auto"></hr>
        </div>
    );
}

export default SecondLanding;