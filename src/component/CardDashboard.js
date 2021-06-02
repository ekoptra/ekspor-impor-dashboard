import { Link } from "react-router-dom";

const getContent = (tipe) => {
    if (tipe === 'impor')
        return `Dashboard impor merupakan dashboard yang menampilkan secara keseluruhan visualisasi berdasarkan
        komoditas impor di Indonesia. Dashboard impor terdiri atas beberapa jenis visualisasi yang
        digunakan, yaitu Peta Dunia yang berisi negara asal utama impor, Rata-Rata Nilai CIF, Top 3
        Negara Nilai CIF Tertinggi, Nilai CIF Per Tahun, Rata-Rata Volume, Top 3 Negara Volume
        Tertinggi, dan Volume Per Tahun.`;
    else if (tipe === 'utama')
        return `Dashboard utama merupakan dashboard yang menampilkan secara keseluruhan visualisasi dari data
        ekspor beserta data impor di Indonesia. Dashboard utama ini menampilkan sebaran banyaknya nilai
        dan volume dari komoditas yang diekspor dan diimpor di Indonesia pada enam dari tujuh benua yang
        ada di dunia.`;
    else if (tipe === 'ekspor')
        return `Dashboard ekspor merupakan dashboard yang menampilkan secara keseluruhan visualisasi berdasarkan
        komoditas ekspor di Indonesia. Dashboard ekspor terdiri atas beberapa jenis visualisasi yang
        digunakan, yaitu Peta Dunia yang berisi negara tujuan utama ekspor, Rata-Rata Nilai FOB, Top 3
        Negara Nilai FOB Tertinggi, Nilai FOB Per Tahun, Rata-Rata Volume, Top 3 Negara Volume
        Tertinggi, dan Volume Per Tahun`;
}


const CardDashboard = ({ tipe, judul, link, setMenu, menu }) => {
    return (
        <div className="md:order-1 order-2 bg-white border border-gray-100 lg:col-span-1 md:col-span-2 rounded-md shadow-lg card border-green-300 mb-5"
            data-aos="flip-left">
            <div className="card-body p-8">
                <h5 className="font-medium text-center text-xl mb-3">{judul}</h5>
                <p className="text-gray-700">{getContent(tipe)}</p>
            </div>
            <Link to={link} onClick={() => setMenu(menu)}
                className="bg-green-500 block hover:bg-green-600 transition duration-200 py-3 px-6 text-white font-medium text-center">
                Lihat {judul}
            </Link>
        </div>
    );
}

export default CardDashboard;