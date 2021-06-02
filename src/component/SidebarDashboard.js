import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const SidebarDashboard = ({ menu, setMenu }) => {
    const location = useLocation();
    useEffect(() => {
        if (!menu) {
            const loc = location.pathname.split('/');
            if (loc.length == 2)
                setMenu('utama');
            else
                setMenu(loc[2]);
        }
    }, [null])

    return (
        <nav className="text-white">
            <div className="nav-container">
                <div className="bg-cyan flex items-center justify-center py-4 px-6 h-16 text-xl topnav">
                    <i className="fas fa-code fa-fw"></i>
                    <small className="hidden ml-2 font-bold">Ekspor-Impor</small>
                </div>
                <div className="mt-16">
                    <ul>
                        <li className="my-2">
                            <Link to="/" className="p-2 px-5 flex justify-center items-center text-gray-200">
                                <i className="fas fa-home fa-fw text-2xl"></i>
                                <span className="hidden ml-3">Beranda</span>
                            </Link>
                        </li>

                        <li className="my-2">
                            <Link to="/dashboard" className={`p-2 px-5 flex justify-center items-center text-gray-200 ${menu === 'utama' ? 'active' : ''}`} onClick={() => setMenu('utama')}>
                                <i className="fas fa-chart-bar fa-fw text-2xl"></i>
                                <span className="hidden ml-3">Dashboard Utama</span>
                            </Link>
                        </li>

                        <li className="my-2">
                            <Link to="/dashboard/ekspor"
                                className={`p-2 px-5 flex justify-center items-center text-gray-200 submenu ${menu === 'ekspor' ? 'active' : ''}`} onClick={() => setMenu('ekspor')}>
                                <i className="fas fa-reply fa-fw text-2xl transform rotate-90"></i>
                                <span className="hidden ml-3">Ekspor</span>
                            </Link>
                        </li>

                        <li className="my-2">
                            <Link to="/dashboard/impor"
                                className={`p-2 px-5 flex justify-center items-center text-gray-200 submenu ${menu === 'impor' ? 'active' : ''}`} onClick={() => setMenu('impor')}>
                                <i className="fas fa-reply fa-fw text-2xl transform -rotate-45"></i>
                                <span className="hidden ml-3">Impor</span>
                            </Link>
                        </li>

                        <li className="my-2">
                            <Link to="/#about-us"
                                className="p-2 px-5 flex justify-center items-center text-gray-200">
                                <i className="fas fa-users fa-fw text-2xl"></i>
                                <span className="hidden ml-3">About Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SidebarDashboard;