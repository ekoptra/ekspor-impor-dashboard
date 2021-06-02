const HeaderDashboard = ({ menu }) => {
    const h = (new Date()).getHours();
    let salam;
    if (h >= 5 && h <= 9)
        salam = "Selamat Pagi!";
    else if (h >= 10 && h <= 14)
        salam = "Selamat Siang!";
    else if (h >= 15 && h <= 17)
        salam = "Selamat Sore!";
    else
        salam = "Selamat Malam!"


    return (
        <header className="bg-white shadow-md py-3 px-8 flex justify-between items-center">
            <p className="font-bold text-xl capitalize">Dashboard {menu}</p>
            <span className="hamburger sm:hidden pointer"><i className="fas fa-bars text-xl"></i></span>
            <span className="close hidden pointer"><i className="fas fa-times  text-xl"></i></span>
            <div className="sm:flex items-center hidden">
                <img src="https://picsum.photos/35" alt="Gambar" className="rounded-full border-2 border-cyan shadow-sm mr-3" id="profil" />
                <span id="salam">Hallo, {salam}</span>
            </div>
        </header>
    );
}

export default HeaderDashboard;